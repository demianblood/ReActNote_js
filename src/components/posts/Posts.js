import {useEffect, useState} from "react";

export default function Posts(props) {

    let [posts, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(usersFromServer => {
                setUsers(usersFromServer);
            });
    }, [])

    return (
        posts.map(post =>
            <div>{posts.userId}-{posts.id}-{posts.title}-{posts.body}</div>
        )
    );


}
