function obtenerProductos() {
    fetch('/obtener_productos') // Solicitar datos al servidor
        .then(response => response.json())  // Convertir la respuesta en JSON
        .then(data => {
            // Seleccionar el cuerpo de la tabla donde se agregarán los productos
            const tbody = document.getElementById('productos-tbody');
            tbody.innerHTML = ''; // Limpiar tabla antes de agregar los nuevos productos

            // Iterar sobre los productos y agregarlos a la tabla
            data.forEach(producto => {
                const tr = document.createElement('tr');
                const tdNombre = document.createElement('td');
                const tdStock = document.createElement('td');

                tdNombre.textContent = producto.name;
                tdStock.textContent = producto.price;

                tr.appendChild(tdNombre);
                tr.appendChild(tdStock);
                tbody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error al obtener los productos:', error);
        });
}

// Llamar a la función para obtener los productos al cargar la página
window.onload = obtenerProductos