/*import axios from 'axios';

const API_URL = 'http://localhost:3001/auth';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data; // { token, role }
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
*/

export const login = async (username, password) => {
    // Simular respuesta del backend
    const users = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'player', password: 'player123', role: 'player' },
    ];
  
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      return { token: 'dummy-token', role: user.role }; // Devuelve datos quemados
    } else {
      throw new Error('Usuario o contraseña incorrectos');
    }
  };
  
  export const register = async (userData) => {
    // Simular respuesta del backend para registro
    console.log('Usuario registrado:', userData);
    return { success: true };
  };
  