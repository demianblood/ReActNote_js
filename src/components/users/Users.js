import User from "../User/User";
import {useEffect, useState} from "react";
import {Switch, Route} from 'react-router-dom'
import {getUsers} from "../../services/Api";
import UserDetails2 from "./UserDetails2";
// import UserDetails from "../User/UserDetails";


export default function Users() {

    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
            <hr/>
            {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
            <Route path={'/users/:id'} component={UserDetails2}/>
        </div>
    );


}
