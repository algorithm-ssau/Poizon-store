import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

// Функция регистрации нового пользователя
export const registration = async (email, password) => {
    try {
        const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Функция входа пользователя
export const login = async (email, password) => {
    try {
        const { data } = await $host.post('api/user/login', { email, password });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

// Функция проверки аутентификации пользователя
export const check = async () => {
    try {
        const { data } = await $authHost.get('api/user/auth');
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error('Authentication check error:', error);
        throw error;
    }
}