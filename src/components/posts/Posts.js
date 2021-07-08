import {useEffect, useState} from "react";
import {Route} from 'react-router-dom'
import {getPosts} from "../../services/Api";
import Post from "./Post";
import PostDetails from "./PostDetails";
import PostDetails2 from "./PostDetails2";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    }, [])
    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
            <hr/>
            <Route path={'/posts/:id'} component={PostDetails}/>
            {/*<Route path={'/posts/:id'} component={PostDetails2}/>*/}
        </div>
    );


}