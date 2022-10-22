import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import './App.css';
import config from './firebase.config.js'
import { signOut, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import GoogleButton from 'react-google-button'
import Card from 'react-bootstrap/Card'
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
import Image from 'react-bootstrap/Image'
import { doc, setDoc } from "firebase/firestore"; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavigationBar from './components/NavigationBar.js'

function App() {

  const app = initializeApp(config)
  const analytics = getAnalytics(app)
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const db = getFirestore(app);

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
      console.log(credential.accessToken)
      // The signed-in user info.
      setUser(result.user);
      console.log(result.user, token)
      setLoggedIn(true);

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

    console.log(user)
  }

  return (
    <div className="App">
      <NavigationBar>
        </NavigationBar>
      <header className="App-header">
        <div className="name">
          {loggedIn === false ? <div>
            <h1>khavenue</h1>
            <GoogleButton
            onClick={handleSignIn}>
          </GoogleButton>
            </div> : <div>

          <Card className="profile">
            <Image className="userpic" src={user.photoURL}>
            </Image>
          <p className="profileText">Welcome, {user.displayName.split(" ")[0]}!</p>
          {signOutButton()}
          </Card>
          <div>
            <h2 className="recipe">Recipes</h2>
          </div>
          </div>}
        </div>
      </header>
    </div>
  );
}

export default App;
