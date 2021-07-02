import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
let axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/' + id);
const getUserPosts = (id) => axiosInstance("/user/" + id + "/posts")
const getPosts = () => axiosInstance('/posts');
const getPost = (id) => axiosInstance('/posts/' + id);
const getPostsComments = (id) => axiosInstance("/posts/" + id + "/comments")
const getComments = () => axiosInstance('/comments');
const getComment = (id) => axiosInstance('/comments/' + id);
export {getUsers, getUser, getPosts, getPost, getComments, getComment,getUserPosts,getPostsComments}