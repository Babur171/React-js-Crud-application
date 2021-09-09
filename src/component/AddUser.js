import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddUser() {
    const [users, setUsers] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })
    const { fname, lname, email, password } = users;

    const submitValues = async e => {
        e.preventDefault();
      
        if (e!=null) {
            await axios.post("http://localhost:3000/users", users);
            toast.success('Success! Data Inserted', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setUsers({
                fname: '',
                lname: '',
                email: '',
                password: ''
            })

        }
        else {
            toast.error('Some Error!', {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


    }
    const onchanges = e => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }
    return (
        <div className="container">
            <div className="w-50 mx-auto shadow p-5 mt-4">
                <h2 className="text-center mb-4">Add User Data</h2>
                <form onSubmit={e => submitValues(e)}>
                    <div className="form-group mb-2">
                        <input name="fname" value={fname} required onChange={e => onchanges(e)} type="text" className="form-control" placeholder="Enter Your First Name" />
                    </div>
                    <div className="form-group mb-2">
                        <input name="lname" value={lname} required onChange={e => onchanges(e)} type="text" className="form-control" placeholder="Enter Your Last Name" />
                    </div>
                    <div className="form-group mb-2">
                        <input name="email" value={email} required onChange={e => onchanges(e)} type="text" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group mb-2">
                        <input name="password" value={password} required onChange={e => onchanges(e)} type="password" className="form-control" placeholder="Enter Your Password" />
                    </div>
                    <button className="btn btn-primary btn-block">Add Record</button>

                </form>
            </div>
            <ToastContainer position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    )
}
