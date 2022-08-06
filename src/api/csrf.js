import Api from './axios';
import Cookie from 'js-cookie';

export default {
    getCookie() {
        const token = Cookie.get('XSRF-TOKEN');
        console.log('ss');

        if (token) {
            return new Promise((resolve) => {
                resolve(token);
            });
        }

        return Api.get('/csrf-cookie');
    }
};
