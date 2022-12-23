import axios from "axios";
const API_KEY = '32188419-e3a5ebcfb978061bafc2d31ff';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPictures = (query, page) => {
    return axios({
        params: {
            query,
            key: API_KEY,
            page,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: '12',
        },
    });
};