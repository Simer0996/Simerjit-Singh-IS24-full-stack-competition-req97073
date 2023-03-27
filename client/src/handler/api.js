import apiRequestHandler from "./apiHandler"

export const getProducts = async () => {
    const url = "/products";
    const method = "GET";
    const response = await apiRequestHandler({ url, method });
    return response;
}

export const getProduct = async (id) => {
    const url = `/products/${id}`;
    const method = "GET";
    const response = await apiRequestHandler({ url, method });
    return response;
}

export const createProduct = async (data) => {
    const url = "/products";
    const method = "POST";
    const response = await apiRequestHandler({ url, method, data });
    return response;
}

export const updateProduct = async (id, data) => {
    const url = `/products/${id}`;
    const method = "PATCH";
    const response = await apiRequestHandler({ url, method, data });
    return response;
}

export const deleteProduct = async (id) => {
    const url = `/products/${id}`;
    const method = "DELETE";
    const response = await apiRequestHandler({ url, method });
    return response;
}

