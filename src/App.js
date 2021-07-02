import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/coments/Comments";


export default function App() {


    return (
        <Router>
            <div>
                <div><Link to={"/users"}>users page</Link></div>
                <div><Link to={"/posts"}>post page</Link></div>
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


// <Router>
{/*<div><Link to="/">home page</Link></div>*/
}
{/*<div><Link to="/users">users page</Link></div>*/
}
{/*<div><Link to="/posts">post page</Link></div>*/
}
{/*<div><Link to={"/comments"}>comments page</Link></div>*/
}

{/*<Route path={'/'} exact render={() => {*/
}
{/*    return <div>home</div>;*/
}
{/*}}/>*/
}

{/*<Route path={'/users'} render={() => {*/
}

{/*    return <Users/>*/
}
{/*}}/>*/
}

{/*<Route path={'/posts'} component={Posts}/>*/
}
{/*<Switch>*/
}
{/*    <Route path={'/comments'}>*/
}
{/*        <Comments/>*/
}
{/*    </Route>*/
}
{/*    <Route path={'/comments'}>*/
}
{/*        <Comments/>*/
}
{/*    </Route>*/
}
{/*</Switch>*/
}
{/*<Users items={users}/>*/
}
{/*<Posts itms={posts}/>*/
}
{/*<Comments items={comments}/>*/
}
// </Router>
