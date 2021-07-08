import {useEffect, useState} from "react";

export default function PostDetails2(props) {
    let {location: {state}} = props;
    let [post, setPost] = useState([]);
    useEffect(() => {
        setPost({...state})
    }, [state])
    return (
        <div>
            {post.user} {post.id}----{post.title}----{post.body}
        </div>
    );


}