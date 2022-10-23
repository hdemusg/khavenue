import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import config from './firebase.config.js'
import { signOut, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import GoogleButton from 'react-google-button'
import Card from 'react-bootstrap/Card'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import Image from 'react-bootstrap/Image'
import { doc, setDoc } from "firebase/firestore"; 
import NavigationBar from './components/NavigationBar.js'
import './App.css';

function App() {

  const app = initializeApp(config)
  const analytics = getAnalytics(app)
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const db = getFirestore();

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

  function signInButton() {
    return (
      <GoogleButton
      onClick={handleSignIn}>
    </GoogleButton>
    )
  }

  async function handleSignIn() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      setToken(credential.accessToken);
      console.log(credential.accessToken)
      // The signed-in user info.
      setUser(result.user);
      const data =  {
        displayName: result.user["displayName"],
        email: result.user["email"],
        numUses: 0
      }
      setDoc(doc(db, "users", result.user["uid"]), data);
      // console.log(result.user['email'])
      // console.log(data);
      // const res = db.collection('users').doc('login').set(data);
      console.log(result.user, token)
      setLoggedIn(true);

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, credential)
    });

    console.log(user)
  }

  function profileInfo() {
    return (
      <div style={{justifyContent: 'space-between', lineHeight: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px'}}>
        <Image style={{marginRight: '20px'}} className="userpic" src={user.photoURL}>
            </Image>
          <p style={{marginRight: '20px', color: '#FFFDD0'}} className="profileText">Welcome, {user.displayName.split(" ")[0]}!</p>
          {signOutButton()}
      </div>
    )
  }

  return (
    <div className="App">
      <NavigationBar profile={loggedIn === false ? signInButton() : profileInfo()}>
        </NavigationBar>
      <header className="App-header">
        <div className="name">
          {loggedIn === false ? <div className="signIn">
            <h1>khavenue</h1>
            <h3>Find recipes that are healthy and convenient to prepare!</h3>
      
            </div> : <div>

          <Card style={{backgroundColor: 'orange', width: '100%', justifyContent: 'space-between', lineHeight: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px'}} className="preferences">
            <h3 style={{color: 'white'}} >Preferences</h3>
            <div style={{backgroundColor: 'yellow'}}>Hello</div>
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
