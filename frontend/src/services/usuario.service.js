import apiClient from './api.client.js';

class UsuarioService {

  // Devuelve un {Promise<Array>}
  async getAllUsuarios() {
    return apiClient.get('/usuario');
  }

  // Devuelve un {Promise<Object>}
  async getUsuarioById(id) {
    return apiClient.get(`/usuario/${id}`);
  }

  // Devuelve un {Promise<Object>}
  async createUsuario(usuarioData) {
    return apiClient.post('/usuario', usuarioData);
  }

  // Devuelve un {Promise<Object>}
  async updateUsuario(id, usuarioData) {
    return apiClient.put(`/usuario/${id}`, usuarioData);
  }

  // Devuelve {Promise<null>} (204 No Content)
  async deleteUsuario(id) {
    return apiClient.delete(`/usuario/${id}`);
  }
}

export default new UsuarioService();

