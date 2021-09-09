import React,{useEffect} from 'react'
import { useHistory } from 'react-router';

export default function ProtectedRoute(props) {

    let Com=props.com;
    let history=useHistory();
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            history.push("/login");  
        }
    }, )
    return (
        <div>
            <Com></Com>
        </div>
    )
}
