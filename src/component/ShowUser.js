import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function ShowUser() {
    const [users, setData] = useState([]);

    useEffect(() => {
        loaddata();
    }, [])
    const deleteVal = async id => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        loaddata();
    }
    const loaddata = async () => {
        const getData = await axios.get("http://localhost:3000/users");
        setData(getData.data.reverse());
    }
    return (
        <div className="container">
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td><button className="btn btn-danger m-2" onClick={() => deleteVal(item.id)}>Delete</button>
                                <Link className="btn btn-info" to={"/editUser/" + item.id}>Edit</Link></td>

                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
