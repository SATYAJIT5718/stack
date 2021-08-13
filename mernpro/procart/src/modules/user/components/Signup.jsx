import React, { useState } from 'react';
import './Signup.css';

let Signup = () => {
    let [user, setUser] = useState({ user: "", email: "", password: "" });
    let inputHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    let submitHandler = (event) => {
        console.log(user)
        event.preventDefault();
    };
    return (<>
        {/* <h1>signup Page</h1> */}
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-7'>
                    <h1 className='text-left'>Pro Cart Registration Form</h1>
                    <br/>
                    <p className='text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
               
                <div className='col-md-5'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <div className="card mt-5">
                                <div className="card-header">
                                    <p className="display-6">Registration Details</p>
                                    <pre>{JSON.stringify(user)}</pre>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <input
                                                type="text" 
                                                className="form-control"
                                                name="user"
                                                onChange={inputHandler}
                                                placeholder="User Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                onChange={inputHandler}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="password"
                                                onChange={inputHandler}
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                className="form-control btn btn-success"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='c0l-md-6'>
                            <h3>hiiii</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default Signup;