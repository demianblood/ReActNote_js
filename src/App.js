import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/coments/Comments";
// import {useState, useEffect,} from "react";
// import {getComments, getPosts, getUsers} from "./services/Api";

export default function App() {

    // let [users, setUsers] = useState([])
    // useEffect(() => {
    //     getUsers().then(value => setUsers(value.data))
    // }, []);
    // let [posts, setPosts] = useState([])
    // useEffect(() => {
    //     getPosts().then(value => setPosts(value.data))
    // }, []);
    // let [comments, setComments] = useState([])
    // useEffect(() => {
    //     getComments().then(value => setComments(value.data))
    // }, [])

    return (
        <Router>
            <div>
                <div><Link to={"/"}>home page</Link></div>
                <div><Link to={"/users"}>users page</Link></div>
                {/*<button>user posts</button>*/}

                <div><Link to={"/posts"}>post page</Link></div>
                {/*<button>posts comments</button>*/}

                <div><Link to={"/comments"}>comments page</Link></div>
            </div>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>
            </Switch>
        </Router>
    );


}
