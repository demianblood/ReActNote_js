import Users from "./components/users/Users";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

export default function App() {

    return (
        <div>
            <Router>
                <div>
                    <Link to={'/users'}>users page</Link>
                </div>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                </Switch>
            </Router>

        </div>
    );


}
