import {useState} from "react";
import {getUserPosts} from "../../services/Api";

export default function User({item}) {

    let [posts, setPosts] = useState([]);

    let appFn = (id) => {

        getUserPosts(id).then(value => setPosts(value.data))
    }

    return (
        <div>
            {item.id}-{item.name}-
            <button onClick={() => appFn(item.id)}>Click by posts</button>
            <hr/>
            {posts.map(value => <div key={value.id}>{value.id}<br/> {value.title}<br/>{value.body}</div>)}
            <hr/>
        </div>
    );
}