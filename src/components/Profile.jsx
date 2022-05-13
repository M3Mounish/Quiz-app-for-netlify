import React, { useState } from 'react';
import axios from 'axios';

function Profile(props) {

    const [resetPw, setResetPw] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    function handleReset(e) {
        e.preventDefault();
        newPassword !== reNewPassword && alert("Re-enter you new password correctly, bastardo!");
        newPassword === reNewPassword && axios.post('http://localhost:3333/reset-password', { oldPassword, newPassword })//bug-replaces every same password as cannot send username 
            .then((res) => { res.data && alert("Reset successful"); !res.data && alert("Old password wrong!") })
    }
    return (
        <div className='profile'>
            <h3>Hello {props.username}! </h3>
            <button className="reset-password" onClick={() => { setResetPw(!resetPw) }}>Reset Password</button>

            {resetPw && <div className="reset-container">
                <form onSubmit={handleReset}>
                    <input className="reset-input" type="password" name="oldPw" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder='current password' />
                    <input className="reset-input" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='new password' />
                    <input className="reset-input" type="password" value={reNewPassword} onChange={(e) => setReNewPassword(e.target.value)} placeholder='reenter new password' />
                    <button >Reset</button>
                </form>
            </div>}

            <button className="logout-btn" onClick={() => { props.cb(false) }}>Log Out</button>
        </div>

    );
}

export default Profile;