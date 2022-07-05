import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Container/LandingPage/LandingPage';
import SignIn from './Container/SignIn/SignIn';
function App() {
  const isuserLoggedIn = false;


  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" 
        element = {isuserLoggedIn ? <h1>Heloo</h1> : <LandingPage/>}/>
      </Routes>
      <Routes>
        <Route path="/sign-in" 
        element = {<SignIn />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
