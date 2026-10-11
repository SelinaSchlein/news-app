import axios from 'axios';


export default axios.create({
    baseURL: 'https://gnews.o/api/v4/',
    timeout:5000
})