import Posts from "./components/posts/Posts";
import Comments from "./components/coments/Comments";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

export default function App() {

    return (
        <div>
            <Router>
                <div>
                    <Link to={'/posts'}>Posts page</Link>
                </div>
                <div>
                    <Link to={'/comments'}>Comments page</Link>
                </div>
                <Switch>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </Router>

        </div>
    );


}
