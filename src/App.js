// import {useEffect, useState} from "react";
// import {getPost, getPosts} from "./services/Api";
// import Posts from "./components/posts/Posts";
//
// export default function App() {
//     let [post, setPost] = useState(null);
//     let appFn = (id) => {
//         getPost(id).then(value => setPost(value.data));
//     }
//     let [posts, setPosts] = useState([])
//     useEffect(() => {
//         getPosts().then(value => setPosts(value.data));
//     }, [])
//     return (
//         <div>
//             <Posts items={posts} appFn={appFn}/>
//             <hr/>
//             {post && <div>{JSON.stringify(post)}</div>}
//             <hr/>
//         </div>
//     );
// }

import {useEffect, useState} from "react";
import Users from "./components/users/users";
import {getPosts, getUser, getUsers} from "./services/Api";
import Posts from "./components/posts/Posts";

export default function App() {
    let [posts, setPosts] = useState(null);
    let appFnTwo = (id) => {
        getPosts(id).then(value => setPosts(value.data))
    };
    let [user, setUser] = useState(null);
    let appFn = (id) => {
        getUser(id).then(value => setUser(value.data))
    }

    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            <Users items={users} appFn={appFn}/>
            <Posts items={posts} appFnTwo={appFnTwo}/>
            <hr/>
            {user && <div>{JSON.stringify(user)}</div>}
            <hr/>

        </div>
    );


}
