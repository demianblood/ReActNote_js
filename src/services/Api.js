// import axios from 'axios';
//

// const getPosts = () => axiosInstance('/posts');
// const getPost = (id) => axiosInstance('/posts/' + id)
// export {getPosts,getPost}
import axios from 'axios'

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
let axiosInstance = axios.create(options);
const getUsers = () => axiosInstance("/users");
const getUser = (id) => axiosInstance("/users/" + id);
const getPosts = () => axiosInstance('/posts');
const getPost = (id) => axiosInstance('/posts/' + id);
export {getUsers, getUser, getPost, getPosts}