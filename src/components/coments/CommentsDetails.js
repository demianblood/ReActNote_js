import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {getComment} from "../../services/Api";

export default function CommentsDetails(props) {
    let [comment, setComment] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        getComment(id).then(value => setComment({...value.data}))
    }, [id])
    return (
        <div>
            {comment.id}-{comment.name}-----{comment.email}----{comment.body}
        </div>
    );


}