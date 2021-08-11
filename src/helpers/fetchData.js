export const MAIN_WEBSITE_URL = 'localhost:3000';
export const WEBSITE_URL = 'localhost:3000';
export const DEFAULT_API_URL = 'http://localhost:4200/api/dishes';

export const getApiUrl = () => {
    return localStorage.getItem('server_api') ?? DEFAULT_API_URL;
}

export const fetchProducts = async () => {
    const fetchUrl = getApiUrl();
    const response = await fetch(fetchUrl);
    return {status: response.status, response: await response.json()};
};

export const addProduct = (payload) => {
    const fetchUrl = getApiUrl();
    return fetch(fetchUrl, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    });
};

export const updateProduct = (id, payload) => {
    const fetchUrl = getApiUrl();
    return fetch(fetchUrl + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    });
};

export const deleteProduct = (id) => {
    const fetchUrl = getApiUrl();
    return fetch(fetchUrl + id, {method: 'delete'});
};
