import {useEffect, useState} from "react";
import Comment from "./Comment"

export default function Comments() {
    let [comments, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(value => value.json())
            .then(usersFromServer => {
                setUsers(usersFromServer);
            })
    }, [])
    return (
        <div>{comments.map(comment => <Comment item={comment}/>)}</div>
    );
}