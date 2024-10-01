const pool = require('../libs/db'); // Importa el pool de conexiones

async function executeQuery(sql, params) {
  try {
    const [results] = await pool.execute(sql, params); // Usar 'execute' para consultas parametrizadas
    return results;
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error.message);
    throw error;
  }
}

module.exports = executeQuery;
