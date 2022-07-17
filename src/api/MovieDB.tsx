import axios from 'axios'


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f11bcc2564adaf29f0b46ff34cd77132',
        language: 'es-Es',
    },
});

export default movieDB;
