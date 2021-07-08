import {useEffect, useState} from "react";

export default function CommentsDetails2(props) {
    let {location: {state}} = props;
    let [comment, setComment] = useState([]);
    useEffect(() => {
        setComment({...state})
    }, [state])
    return (
        <div>
            {comment.id}-{comment.name}-----{comment.email}----{comment.body}
        </div>
    );


}