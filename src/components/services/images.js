import axios from "axios";
const API_KEY = '33067692-1a5baf69be2ef609319513ff4';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImageService(query, page, per_page) {
    const { data } = await axios.get(`${BASE_URL}?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`);
    return data;
}
