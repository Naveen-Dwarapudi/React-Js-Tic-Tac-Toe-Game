import React from "react";
import Colorgame from "./Colorgame.js";
import ColorBox from "./addcolor.js";
import Adder from "./movielist.js";
import {Initial} from "./list.js";
import './App.css';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
import Box from '@mui/material/Box';


export default function App() {
  
  const [movieList,setMovielist] = useState(Initial);
 
  return (
    
    <Router>
      <div>
         <nav>
       
      <AppBar position="static">
        <Toolbar>
        
        <Button  color="inherit" component={Link} to="/" >  <Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Home</Box></Button>
        <Button color="inherit" component={Link} to="/movielist" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>MovieList</Box></Button>
        <Button color="inherit" component={Link} to="/movielist/Addmovie" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Add Movie</Box></Button>
        <Button color="inherit" component={Link} to="/Colorgame" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Colorgame</Box></Button>
        <Button color="inherit" component={Link} to="/addcolor" ><Box sx={{ fontWeight: 'bold', fontSize: '13px'  }}>Add color</Box></Button>
       
      
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
            <Addmovie movieList={movieList} setMovielist={setMovielist} />
          </Route>

          <Route path="/movielist/edit/:id"> 
          <EditMovie movieList={movieList} setMovielist={setMovielist} />
          </Route>

            {/*makes  thr id a variable*/}
            <Route path="/movielist/:id"> 
            <Moviedetails Initial={movieList} />
          </Route>

          <Route path="/movielist"> 
            <Adder movieList={movieList} setMovielist={setMovielist}  />
          </Route>

         
     
          <Route path="**">
            <Error />
          </Route>
        </Switch>
        </div>
        </nav> 
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
  return <h2 className="mainpage">Welcome to react app👍😒</h2>;
}

function Moviedetails({Initial})
{ 
  const { id } = useParams();//extracting parameter from the url
  const movieList=Initial[id];
  const history= useHistory()

  return(
    <div>
    <Card className="video-card">
  <iframe width="95%" height="500" className="video" src={movieList.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <CardContent >
        <h5 className="video-title">{movieList.name}</h5>
        <p className=" pfont-info ">{movieList.summary}</p>
      </CardContent>
</Card>
<Card className="backbutton">
    <Button variant="contained" className="backbutton" startIcon={<ArrowBackIosNewIcon />}
    onClick={()=>history.goBack()}>Back</Button>
    </Card>
  </div>
);
}


function Addmovie({movieList,setMovielist})
{
  const[name,setName]=useState("");
  const[poster,setPoster]=useState("");
  const[rating,setRating]=useState("");
  const[summary,setSummary]=useState("");
  const[trailer,setTrailer]=useState("");
  const history= useHistory()
  return(
  <div className="list">
    <TextField  label="Poster Link" variant="outlined" onChange={(event)=> setPoster(event.target.value)} />
    <TextField  label="Movie name" variant="outlined" onChange={(event)=> setName(event.target.value)}/>
    <TextField  label="Ratings" variant="outlined" onChange={(event)=> setRating(event.target.value)}/>
    <TextField  label="Trailer" variant="outlined" onChange={(event)=> setTrailer(event.target.value)}/>
    <TextField  label="Summary" variant="outlined" cols="20" rows="5" onChange={(event)=> setSummary(event.target.value)}/><br></br><br></br>
    
    <Button variant="contained"
    onClick={() => {
      const newMovie={
        name:name,
        poster:poster,
        rating:rating,
        summary:summary,
        trailer:trailer,
      };    
      setMovielist([...movieList,newMovie]);
      useHistory= history.push("/movielist");
      
    }}>Add movies</Button>
    </div >
  );

}