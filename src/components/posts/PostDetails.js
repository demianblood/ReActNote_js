import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {getPost} from "../../services/Api";

export default function PostDetails(props) {
    
    let [post, setPost] = useState([])
    let {id} = useParams();
    // console.log({id})
    useEffect(() => {
        getPost(id).then(value => setPost({...value.data}))
    }, [id])
    return (
        <div>
            {post.id}-----{post.title}-----{post.body}
        </div>
    );


}