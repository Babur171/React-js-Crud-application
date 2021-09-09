import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import axios from 'axios';
export default function EditUser() {
    let history = useHistory();
    const { id } = useParams();
    const [users, setUsers] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })
    const { fname, lname, email, password } = users;

    const submitValues = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/users/${id}`, users);
          history.push("/showUser")

    }
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        let olddata = await axios.get(`http://localhost:3000/users/${id}`);
        setUsers(olddata.data);
    }
    const onchanges = e => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }
    return (
        <div className="container">
            <div className="w-50 mx-auto shadow p-5 mt-4">
                <h2 className="text-center mb-4">Edit User Data</h2>
                <form onSubmit={e => submitValues(e)}>
                    <div className="form-group mb-2">
                        <input name="fname" value={fname} onChange={e => onchanges(e)} type="text" className="form-control" placeholder="Enter Your First Name" />
                    </div>
                    <div className="form-group mb-2">
                        <input name="lname" value={lname} onChange={e => onchanges(e)} type="text" className="form-control" placeholder="Enter Your Last Name" />
                    </div>
                    <div className="form-group mb-2">
                        <input name="email" value={email} onChange={e => onchanges(e)} type="text" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group mb-2">
                        <input name="password" value={password} onChange={e => onchanges(e)} type="password" className="form-control" placeholder="Enter Your Password" />
                    </div>
                    <button className="btn btn-primary btn-block">Update Record</button>
                </form>
            </div>
        </div>
    )
}
