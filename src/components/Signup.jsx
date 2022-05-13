import React, { useState, useHook } from 'react';
import axios from 'axios';


function Register(props) {
    //input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignup(e) {
        e.preventDefault();

        await axios.post('https://quiz-app-m3.herokuapp.com/register', { username, password })
            .then(function (response) {
                if (response.data === "none") {
                    alert("Not filled completely ;(")
                } else {
                    if (response.data === false) {
                        alert("Username already exists!");
                    } else if (response.status === 200 && response.data !== false) {
                        setUsername(''); setPassword('');
                        // console.log(response.data[0].username);
                        alert("Signup successully!");
                        // props.user('y', response.data[0].username, 1);
                    }
                }
                console.log(response);
            })
    }


    return (
        <div className="form">
            <h3>Signup</h3>
            <form onSubmit={handleSignup}>
                <input className="input un" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="input pw" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="form-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;