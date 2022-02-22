import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
export function EditMovie({movieList,setMovielist})
{
    const { id } = useParams();
    const movie=movieList[id];
    console.log(movie);
  const[name,setName]=useState(movie.name);
  const[poster,setPoster]=useState(movie.poster);
  const[rating,setRating]=useState(movie.rating);
  const[summary,setSummary]=useState(movie.summary);
  const[trailer,setTrailer]=useState(movie.trailer);
  const history= useHistory()
  return(
  <div className="list">
    <TextField value={poster} label="Poster Link" variant="outlined" onChange={(event)=> setPoster(event.target.value)} />
    <TextField value={name}  label="Movie name" variant="outlined" onChange={(event)=> setName(event.target.value)}/>
    <TextField value={rating}  label="Ratings" variant="outlined" onChange={(event)=> setRating(event.target.value)}/>
    <TextField value={trailer}  label="Trailer" variant="outlined" onChange={(event)=> setTrailer(event.target.value)}/>
    <TextField value={summary}  label="Summary" variant="outlined" cols="20" rows="5" onChange={(event)=> setSummary(event.target.value)}/><br></br><br></br>
    
    <Button variant="contained"
    color="success"
    onClick={() => {
      const updatedMovie={
        name:name,
        poster:poster,
        rating:rating,
        summary:summary,
        trailer:trailer,
      };  
      const copyMovieList=[...movieList];
      copyMovieList[id]=updatedMovie;
      setMovielist(copyMovieList);  
     // setMovielist([...movieList,newMovie]);
      useHistory= history.push("/movielist");
      
    }}>Save</Button>
    </div >
  );

}
