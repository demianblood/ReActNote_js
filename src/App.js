import {useEffect, useState} from "react";
import {getUsers} from "./services/Api";
import Users from "./components/users/users";

export default function App() {
    let appFn=()=>console.log('hello')
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])
    return (
        <div>
            <Users items={users} appFn={appFn}/>
        </div>
    );


}