export const MAIN_WEBSITE_URL = 'localhost:3000';
export const WEBSITE_URL = 'localhost:3000';
export const FETCH_URL = 'http://localhost:4200/api/dishes';

export const fetchProducts = async () => {
    const response = await fetch(FETCH_URL);
    return {status: response.status, response: await response.json()};
};

export const addProduct = (payload) => {
    return fetch(FETCH_URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    });
};

export const updateProduct = (id, payload) => {
    return fetch(FETCH_URL + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    });
};

export const deleteProduct = (id) => {
    return fetch(FETCH_URL + id, {method: 'delete'});
};
