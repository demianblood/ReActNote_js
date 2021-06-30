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


import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import {getUsers} from "./services/Api";


export default function App() {


    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            <Users
                items={users}

            />
        </div>
    );


}
