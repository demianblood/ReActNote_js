import {useEffect, useState} from "react";
import {getComments,} from "../../services/Api";
import Comment from "./Comment";
import {Route} from 'react-router-dom'
import CommentsDetails from "./CommentsDetails";
import CommentsDetails2 from "./CommentsDetails2";
export default function Comments() {

    let [comments, setComments] = useState([])
    useEffect(() => {
        getComments().then(value => setComments([...value.data]))
    })
    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/> )}
            <hr/>
            <Route path={'/comments/:id'} component={CommentsDetails}/>
        {/*<Route path={'/comments/:id'} component={CommentsDetails2}/>*/}
        </div>
    );


}
