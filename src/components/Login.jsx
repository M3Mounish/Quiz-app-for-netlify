import React, { useEffect, useState } from 'react';
import axios from "axios";

import Register from './Signup';

function Login(props) {
    // inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //trigger
    const [register, setRegister] = useState(false);



    async function handleLogin(e) {
        e.preventDefault();
        await axios.post('http://localhost:3333/login', { username, password })
            .then(function (response) {
                console.log(response);
                if (response.data === false) {
                    alert("Inputs are wrong whoeveryouare!");
                } else if (response.status === 200 && response.data !== false) {
                    setUsername(''); setPassword('');
                    // console.log(response.data[0].username);
                    alert("Going good here!");

                    props.user('y', response.data[0].username, 1);
                    console.log("default");
                    localStorage.setItem('user', response.data[0].username);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem('user');
    //     console.log(loggedInUser, "this");
    //     setLogUsername(loggedInUser);
    //     console.log(logUsername);
    //     if (loggedInUser != null) {
    //         console.log(logUsername);
    //         props.user('y', loggedInUser, 1);
    //     }
    // })

    function cB(data, username, redirect) {
        // setProfileName(username);
        // data === 'y' && setUser(true, () => { console.log(user); });
        // redirect === 1 && setHome(1);
        // console.log(profileName);
    }

    return (
        <div>
            {!register && <div className="form">
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                    <input className="input un" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="input pw" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="form-btn" type="submit">Submit</button>
                </form>
                <button className='login-redirect-btn' onClick={() => { setRegister(true) }}>New?Signup</button>
            </div>}
            {register && <Register user={cB} />}
        </div>

    );
}

export default Login;