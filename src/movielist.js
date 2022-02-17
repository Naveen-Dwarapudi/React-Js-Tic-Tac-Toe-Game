import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
export default Adder;
function Adder()
{
  const Initial=[{summary:"The English noun summary comes straight from the Latin neuter noun summārium “abridgment, abstract, epitome,” an extremely rare word used only once in the surviving Latin literature by the Roman author, tragedian, statesman, and Stoic philosopher Seneca (the Younger) in one of his Moral Letters to Lucilius (39), in which he complains “…what is now commonly called a ‘breviary’ [ breviārium ] was called, in the good old days.",rating:8.5,name:"Avengers", poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"},
  {summary:"The English noun summary comes straight from the Latin neuter noun summārium “abridgment, abstract, epitome,” an extremely rare word used only once in the surviving Latin literature by the Roman author, tragedian, statesman, and Stoic philosopher Seneca (the Younger) in one of his Moral Letters to Lucilius (39), in which he complains “…what is now commonly called a ‘breviary’ [ breviārium ] was called, in the good old days.",rating:6.4,name:"Maanadu", poster:"https://igimages.gumlet.io/tamil/home/fe-ovotvkaagrvh.jpg?w=376&dpr=2.6"},
  {summary:"The English noun summary comes straight from the Latin neuter noun summārium “abridgment, abstract, epitome,” an extremely rare word used only once in the surviving Latin literature by the Roman author, tragedian, statesman, and Stoic philosopher Seneca (the Younger) in one of his Moral Letters to Lucilius (39), in which he complains “…what is now commonly called a ‘breviary’ [ breviārium ] was called, in the good old days.",rating:9.0,name:"Bachelar", poster:"https://upload.wikimedia.org/wikipedia/en/1/1c/Bachelor_2021_film.jpg"}];
  
  const [movieList,setMovielist] = useState(Initial);
  const[name,setName]=useState("");
  const[poster,setPoster]=useState("");
  const[rating,setRating]=useState("");
  const[summary,setSummary]=useState("");
  return(
    <div>
      <div className="list">
    <TextField  label="Poster Link" variant="outlined" onChange={(event)=> setPoster(event.target.value)} />
    <TextField  label="Movie name" variant="outlined" onChange={(event)=> setName(event.target.value)}/>
    <TextField  label="Ratings" variant="outlined" onChange={(event)=> setRating(event.target.value)}/>
    <TextField  label="Summary" variant="outlined" cols="20" rows="5" onChange={(event)=> setSummary(event.target.value)}/><br></br><br></br>
    <Button variant="contained"variant="contained"
    onClick={() => {
      const newMovie={
        name:name,
        poster:poster,
        rating:rating,
        summary:summary,
      };    
      setMovielist([...movieList,newMovie]);
    }}>Add movies</Button>
    </div >
    {movieList.map(({name,poster,rating,summary}) => (
     <Wel names={name} posters={poster} ratings={rating} summarys={summary}
     />))}
     
  </div>
      );
}
function Like()
{
 const[like,setlike]= useState(0);
 const[Dislike,selike]= useState(0);
  return(
  <div className="likes">
    <IconButton color="primary"onClick={()=>{
    //like
    setlike(like+1);
    }}>👍  {like}</IconButton>
    
     <IconButton color="error" onClick={()=>{
     //dislike
    selike(Dislike+1);
    }}>👎  {Dislike}</IconButton>

  </div>
  );
}



function Wel({names,posters,ratings,summarys})
{
  const styles={
    color:ratings>8.0?"green":"red", 
  }
  const[show,setShow]= useState(true);
  const summarystyles={
    display:show? "block" : "none",
  };
  return(
    <div className="wel">
      <img src={posters} alt="images"></img>
      <div className="movie-specs">
      <h1>{names}</h1>
      <h2 style={styles} className="movie-rating" >{ratings}⭐  </h2>
      </div>
      <Button variant="contained" color="error" onClick={() => setShow(!show)}>summary
      </Button>
      
      <div className='vign'
        style={summarystyles} >{summarys}</div>
      <Like />
      
    </div>

  );
  }