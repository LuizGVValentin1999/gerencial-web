import Api from './axios';
import Cookie from 'js-cookie';

export function setCookie(token) {
    Cookie.set('Session', token);
}

export default {
    getCookie() {
        const token = Cookie.get('Session');
        if (token) {
            return new Promise((resolve) => {
                resolve(token);
            });
        }

        return Api.get('/csrf-cookie');
    }
};
