// __tests__/RegistroUsuario.test.js
const { Registro_usuario  } = require('../SERVIDOR/views/RegistroUsuario'); 

describe('Registro de Usuario', () => {
  test('debería registrar un usuario correctamente', async () => {
    const userData = {
      username: 'testUser',
      password: 'testPassword',
      email: 'test@example.com'
    };

    const response = await registerUser(userData); // Llama a la función de registro
    expect(response).toHaveProperty('success', true); // Verifica que la respuesta tenga la propiedad "success"
    expect(response).toHaveProperty('message', 'Usuario registrado exitosamente'); // Mensaje de éxito (ajusta según tu lógica)
  });

  test('debería fallar si el usuario ya existe', async () => {
    const userData = {
      username: 'existingUser',
      password: 'testPassword',
      email: 'existing@example.com'
    };

    // Llama a registerUser para registrar un usuario existente
    await registerUser(userData); // Registra primero el usuario
    const response = await registerUser(userData); // Intenta registrarlo de nuevo
    expect(response).toHaveProperty('success', false); // Verifica que la respuesta indique un error
    expect(response).toHaveProperty('message', 'El usuario ya existe'); // Mensaje de error (ajusta según tu lógica)
  });
});
