export const MAIN_WEBSITE_URL = 'localhost:3000';
export const WEBSITE_URL = 'localhost:3000';
export const DEFAULT_API_URL = 'http://localhost:4200/api/dishes';

export const getApiUrl = () => localStorage.getItem('server_api') ?? DEFAULT_API_URL;

export const fetchProduct = async (id) => await fetch(getApiUrl() + '/' + id).then(res => res.json());

export const fetchProducts = async () => await fetch(getApiUrl()).then(res => res.json());

export const addProduct = (payload) => {
    return fetch(getApiUrl(), {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    });
};

export const updateProduct = (id, payload) => {
    return fetch(getApiUrl() + '/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    });
};

export const deleteProduct = (id) => fetch(getApiUrl() + '/' + id, {method: 'delete'});
