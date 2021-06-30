// export default function User({item, fnFather}) {
//
//     return (
//         <div>
//             {item.id}-{item.name}-
//             <button onClick={() => {
//                 return fnFather(item.id);}
//             }>click me
//             </button>
//         </div>
//     );
//
//
// }


import {useState} from "react";
import {getUser, getUserPosts} from "../../services/Api";

export default function User({item}) {
    let [user, setUser] = useState(null);
    const [posts, setPosts] = useState([])
    let appFn = async (id) => {
        await getUser(id).then(value => setUser(value.data));
        await getUserPosts(id).then(value => setPosts(value.data))
    }

    return (
        <div>
            {item.id}-{item.name}-
            <button onClick={() => appFn(item.id)}>Click by user</button>
            <p>
                {user && user.id}
                <hr color={'red'}/>
                <br/>
                {user && user.name}
                <hr color={'red'}/>
                <br/>
                {user && user.username}
                <hr color={'red'}/>
                <br/>
                {user && user.email}
                <hr color={'red'}/>
                <br/>
                {user && JSON.stringify(user.address)}
            </p>
            <hr/>
            <h3>Post by User</h3>
            <div>
                {posts.map(value => <div key={value.id}>{value.id}<br/> {value.title}<br/>{value.body}</div>)}
                <hr color={"green"}/>
            </div>
        </div>
    )
}
