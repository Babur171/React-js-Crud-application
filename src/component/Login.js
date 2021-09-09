import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    let history=useHistory()
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/showuser');
        }
    })

const loaddata = async e => { 
    e.preventDefault();
    const getData = await axios.get("http://localhost:3000/users");
    let arr=getData.data;
    let emailFound = arr.find(x => x.email ==email )
    if( emailFound && emailFound.password ==pass){
        localStorage.setItem('user-info',JSON.stringify(emailFound.email))
            history.push("/showuser");
            
    }else{
        toast.error('Email And Password Wrong', {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}
    return (
        <div className="container">
            <div className="w-50 mx-auto shadow p-5 mt-4">
                <h2 className="text-center mb-4">Login Form</h2>
                <form onSubmit={e=>loaddata(e)}>
                    <div className="form-group mb-2">
                        <input name="email" value={email} required  onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group mb-2">
                        <input name="password" value={pass} required onChange={(e)=>setPass(e.target.value)} type="password" className="form-control" placeholder="Enter Your Password" />
                    </div>
                    <button className="btn btn-primary btn-block">Login</button>

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



/*
let x =





*/