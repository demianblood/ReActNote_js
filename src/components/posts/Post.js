import {useState} from "react";
import {getPostsComments} from "../../services/Api";

export default function Post({item}) {
    let [comments, setComments] = useState([]);
    let appFnTwo = (id) => {

        getPostsComments(id).then(value => setComments(value.data))
    }
    return (
        <div>
            {item.title}-
            <button onClick={() => appFnTwo(item.id)}>Click by comments</button>
            <hr/>
            {comments.map(value => <div key={value.id}>{value.id}<br/> {value.title}<br/>{value.body}</div>)}
            <hr/>
        </div>
    );


}