import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/wp-json/wp/v2/'

const get = async (endpoint) => {
    const response = await axios.get(endpoint)
    console.log(response.data)
    return response.data
}

// Get posts
export const getPosts = () => {
    return get(`posts`)
}

// Get Products
export const getProducts = () => {
    return get(`products/?_embed`)
}

// Get a specific product
export const getProduct = (id) => {
    return get(`products/${id}?_embed`)
}

