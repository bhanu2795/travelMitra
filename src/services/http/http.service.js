import { store } from '../../store';
import { settingOperations } from '../../modules/settings';

export const config = {
    BASE_URL: 'http://staging.b-cryptoexchange.com/'
};

export const getData = (url, key) => {
    return fetch(config[key] + url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': (store.getState().settings.user ? store.getState().settings.user.isSuccess : store.getState().settings.user) ? store.getState().settings.user.data.authToken : ''
        },
    }).then(res => res.json()).then(res => {
        // if (res.status === 401 || res.status === 403) {
        //     store.dispatch(settingOperations.signOut());
        // }
        return res;
    }).catch(err => console.log(err));
}

export const postData = (url, data) => {
    return fetch(config.BASE_URL + url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': (store.getState().settings.user ? store.getState().settings.user.isSuccess : store.getState().settings.user) ? store.getState().settings.user.data.authToken : ''
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(res => {
        // if (res.status === 401 || res.status === 403) {
        //     store.dispatch(settingOperations.signOut());
        // }
        return res;
    }).catch(err => {
        if (err.name === 'AbortError') return;
        throw err;
    });
}