import apiClient from './api.client.js';

class AuthService {

    async login(usuarioData) {
        return apiClient.post('/auth/login', usuarioData);
    }
}

export default new AuthService();