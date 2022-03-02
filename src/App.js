import React from "react";
import Colorgame from "./Colorgame.js";
import ColorBox from "./addcolor.js";
import Adder from "./movielist.js";
import Moviedetails from "./moviedetails";
import Addmovie from "./addmovie";
import {Initial} from "./list.js";
import './App.css';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { EditMovie } from "./EditMovie.js";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';

export default function App() {
  
  const history = useHistory();
 const [movieList,setMovielist] = useState(Initial);

 const [mode,setMode]=useState("light");
 const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Paper style={{borderRadius:"0px",minHeight:"100vh"}}elevation={0} >
     
      
       
        <AppBar position="static">
        <Toolbar>
          

        <Button  color="inherit" component={Link} to="/" >  <Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Home</Box></Button>
        <Button color="inherit" component={Link} to="/movielist" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Movie List</Box></Button>
        <Button color="inherit" component={Link} to="/movielist/Addmovie" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Add Movie</Box></Button>
        <Button color="inherit" component={Link} to="/Colorgame" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Color game</Box></Button>
        <Button color="inherit" component={Link} to="/addcolor" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Add color</Box></Button>
          <Button color="inherit" 
          style={{marginLeft:"auto"}}
              startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              onClick={()=>setMode(mode==="light"? "dark" : "light")} >
              {mode==="light"? "dark" : "light"} Mode
         </Button>
        </Toolbar>
      </AppBar>
      
      <div  className="router-container">
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
          <Route path="/movielist/Addmovie"> 
            <Addmovie />
          </Route>

          <Route path="/movielist/edit/:id"> 
          <EditMovie  />
          </Route>
 
            {/*makes  thr id a variable*/}
            <Route path="/movielist/:id"> 
            <Moviedetails  />
          </Route>

          <Route path="/movielist"> 
            <Adder   />
          </Route>

          <Route path="**">
            <Error />
          </Route>

        </Switch> 
        </div>
        
     
      
      </Paper>
      </ThemeProvider>
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
  return <h2 className="mainpage">Welcome to react app👍😒</h2>;
}






