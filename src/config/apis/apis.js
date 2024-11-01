import axios from "axios";

const apiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts/1',
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export default apiInstance;