import API from "../API/axios.config";

class AuthService {
    async login(email, password) {
        const { data } = await API.post("/auth/login", {
          email,
          password,
        });
        return data;
      }
}

export default new AuthService();