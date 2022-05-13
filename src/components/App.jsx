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

      {/* <p>e Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus bonorum et malorum'.[7][8] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today.[1]

        The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at Hampden–Sydney College. McClintock connected Lorem ipsum to Cicero's writing sometime before 1982 while searching for instances of the Latin word consectetur, which was rarely used in classical literature.[2] McClintock first published his discovery in a 1994 letter to the editor of Before & After magazine, contesting the editor's earlier claim that Lorem ipsum held no meaning.[2]

        The relevant section of Cicero as printed in the source is reproduced below with fragments used in Lorem ipsum highlighted. Letters in brackets were added to Lorem ipsum and were not present in the source text:

        [32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p> */}
    </div>

  )
}


export default App;

