import React, { useState, useEffect } from "react";
//components
import Home from "./Home";
import Quiz from "./quiz/Quiz";
import Login from "./Login";
import Profile from "./Profile";
//assets {icons}
import { ReactComponent as Homelogo } from '../assets/house-solid.svg';
import { ReactComponent as Userlogo } from '../assets/user-solid.svg';
import axios from "axios";

function App() {
  //hide/show
  const [home, setHome] = useState(1);//1-home 2-login 3-Profile
  //user
  const [user, setUser] = useState(false);
  const [profileName, setProfileName] = useState('');

  axios.get('http://localhost:3333/')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => { console.log(err); })

  function cB(data, username, redirect) {
    setProfileName(username);
    data === 'y' && setUser(true, () => { console.log(user); });
    redirect === 1 && setHome(1);

  }
  function handleProfile() {
    setHome(3);
  }
  function handlelogOut(userState) {
    setUser(userState);
    setHome(1);
    localStorage.clear();
    console.log(user);
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    // console.log(loggedInUser, "this");
    setProfileName(loggedInUser);
    // console.log(profileName);
    if (loggedInUser != null) {
      setUser(true);
      setHome(1);
      // console.log(home, user);
    }
  }, [setHome])

  return (
    <div>
      <div className="navbar">
        <h2>Quiz App</h2>
        <Homelogo className='home-logo' onClick={() => { setHome(1); }} />
        {!user ? <button className="login-btn" onClick={() => { setHome(2) }}>Login</button> : <button className="profile-btn" onClick={handleProfile}><Userlogo className="user-logo" />{profileName}</button>}
      </div>
      {home === 1 && <Home />}
      {/* {!home && <Quiz />} */}

      {/* <p>Nothing .... Ever walk away... i'll never walk on cornelia street agian!</p> */}
      {/* {home && !login && <button onClick={() => { setHome(false) }}>Quiz 1</button>} */}

      {home === 2 && <Login user={cB} />}

      {home === 3 && <Profile username={profileName} cb={handlelogOut} />}
    </div>

  )
}


export default App;

