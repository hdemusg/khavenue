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

  const [query, setQuery] = useState("");

  const [lat, setLat] = useState("33.0")
  const [lon, setLon] = useState("-84.0")

  const [loaded, setLoaded] = useState(false)

  function handleSignOut() {
    signOut(auth).then(() => {
      setUser(null)
      setToken(null)
      setLoggedIn(false)
      console.log("bye felicia")
    }).catch((error) => {
      console.log(error)
    });
  }

  function searchForm() {
    return (
      <form onSubmit={(e) => search(e)} style={{display: 'flex', flexDirection: 'column'}}>
        <label>Recipe Search:
          <input type="text" value={query} onChange={(e) => {
            setQuery(e.target.value);
          }}/>
        </label>
        <input type="submit" />
      </form>
    )
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

  function geolocate() {
    
  }

  function search(e) {
    e.preventDefault()
    console.log(query)
    setLoaded(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(encodePosition).then();
    }
    const request = new Request('https://khavenue.uc.r.appspot.com/main/' + query + '/' + lat + '/' + lon, {method: 'POST'});
    request.json().then((data) => {
      console.log(data);
    });
  }

  function encodePosition(position) {
    setLat(position.coords.latitude)
    setLon(position.coords.longitude)
    console.log(lat, lon)
  }

  async function handleSignIn() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      setToken(credential.accessToken);
      //console.log(credential.accessToken)
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
      //console.log(result.user, token)
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

    //console.log(user)
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
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {searchForm()}
            </div>
          </Card>
          <div>
            <h2 style={{color: 'black'}} className="recipe">Recipes</h2>
           {loaded == false ? <p>No recipes loaded. Submit a query!</p> : <Card style={{backgroundColor: 'green', width: '100%', justifyContent: 'space-between', lineHeight: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px'}} className="preferences">
            <Image style={{marginRight: '20px'}} className="userpic" src="uhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5cd4c1e19b7d151e483d9965%2F1603721010312-RRVD86BKU1F2OO4QHTX0%2FHongkong-tofu.jpg&imgrefurl=https%3A%2F%2Fanitascircadian.com%2Frecipes%2Ftrinidad-hong-kong-style-tofu&tbnid=4P-RJBTY9UGRQM&vet=12ahUKEwjyxrDiofb6AhVIsFMKHe4UDiYQMygAegUIARDLAg..i&docid=vdzFnItK1bAnuM&w=2500&h=1126&q=tofu%20hong%20kong&client=safari&ved=2ahUKEwjyxrDiofb6AhVIsFMKHe4UDiYQMygAegUIARDLAg">
            </Image>
            <div style={{color: 'white', display: 'flex', flexDirection: 'row'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3>Tofu Hong Kong</h3>
                <p>Calories: 720</p>
                <p>Nearest Grocery Store: 14 minutes by walking</p>
                <Button variant="danger" style={{backgroundColor: 'white', color: 'black'}} className="button" onClick={handleSignOut}><h3>Go!</h3></Button>
              </div> 
            </div>
          </Card>}
          
          </div>
          </div>}
        </div>
      </header>
    </div>
  );
}

export default App;
