import {useEffect, useState} from "react";
import Post from "./post";

export default function Posts() {

    let [posts, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(usersFromServer => {
                setUsers(usersFromServer);
            });
    }, [])

    return (
        <div>{
            posts.map(post =><Post item={post}/>)
        }</div>

    );


}
