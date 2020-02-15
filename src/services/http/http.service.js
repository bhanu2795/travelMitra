export const config = {
    BASE_URL: 'http://54.89.184.82:8080/'
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
};

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
};

export const postUrlData = (url, data) => {
    return fetch(config.BASE_URL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='
        },
        body: new URLSearchParams(data).toString(),
        redirect: 'follow'
    }).then(response => response.json()).then(result => result).catch(error => console.log('error', error));
};