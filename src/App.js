import React from "react";
import Colorgame from "./Colorgame.js";
import ColorBox from "./addcolor.js";
import Adder from "./movielist.js";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Colorgame">Colorgame</Link>
            </li>
            <li>
              <Link to="/addcolor">addcolor</Link>
            </li>
            <li>
              <Link to="/movielist">movielist</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Colorgame">
            <Colorgame />
           
          </Route>
          <Route path="/addcolor">
            
            <ColorBox />
          </Route>
          <Route path="/movielist">
            
            <Adder />
          </Route>
          <Route path="**">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Error()
{
  return(
    <img className="error" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404 Error"></img>
  );
}
function Home() {
  return <h2>Welcome to react app👍😒</h2>;
}
