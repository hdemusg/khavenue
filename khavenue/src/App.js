import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import './App.css';
import config from './firebase.config.js'
import { signOut, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import GoogleButton from 'react-google-button'

function App() {

  const app = initializeApp(config)
  const analytics = getAnalytics(app)
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function handleSignOut() {
    signOut(auth).then(() => {
      setUser(null)
      setToken(null)
      setLoggedIn(false)
    }).catch((error) => {
      console.log(error)
    });
  }

  function signOutButton() {
    return (
      <Button variant="danger" className="button" onClick={handleSignOut}><h3>SIGN OUT</h3></Button>
    )
  }

  function handleSignIn() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      setToken(credential.accessToken);
      console.log(token)
      // The signed-in user info.
      setUser(result.user);
      setLoggedIn(true);
      // ...

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential)
      
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="name">
        <h1>khavenue</h1>
          {loggedIn === false ? <GoogleButton
            onClick={handleSignIn}>
          </GoogleButton> : signOutButton()}
        </div>
      </header>
    </div>
  );
}

export default App;
