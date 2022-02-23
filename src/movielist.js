import './App.css';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import EditIcon from '@mui/icons-material/Edit';

export default Adder;


function Adder({movieList,setMovielist})
{
  const history = useHistory()
  console.log(movieList);
  return(
    <div className='one'>

    {movieList.map(({name,poster,rating,summary},index) => (
   
     <Wel
     key={index}
     names={name} 
     posters={poster} 
     ratings={rating} 
     summarys={summary}
     deletebutton={
     
     <IconButton aria-label="delete" color ="error"
     onClick={() =>{
    const copyMovieList=[...movieList];
    copyMovieList.splice(index,1);
    setMovielist(copyMovieList);
    }}> <DeleteIcon /></IconButton>
    
    
}
 editbutton={
     
     <IconButton 
      onClick={() => history.push(`/movielist/edit/${index}`)}
      aria-label="edit" color ="secondary"
    > <EditIcon /></IconButton>
    
    
}
      
id={index}
     />))} 

  </div>
      
    );
}


function Like()
{
 const[like,setlike]= useState(0);
 const[Dislike,dislike]= useState(0);
  return(
  <div className="likes">

      
    <IconButton color="primary"onClick={()=>{
    setlike(like+1);
    }}>👍  {like}</IconButton>

     
     <IconButton color="error" onClick={()=>{
    dislike(Dislike+1);
    }}>👎  {Dislike}</IconButton>
     
  </div>
  );
}


function Wel({names,posters,ratings,summarys,deletebutton,editbutton,id})
{
    
  const styles={
    color:ratings>8.0?"green":"red", 
  }
  const[show,setShow]= useState(false);
  const history=useHistory(true);
  const summarystyles={
    display:show? "none" : "block",
    height:'80px'
  };
  return(
      <div className='lists'>
     <Card styles={{width:'50px'}}>

       <CardMedia 
        component="img"
        height="360"
        image={posters}
        alt="images"
        />
       <CardContent >
           <div className='head'>
           <div>{names}
           
           <IconButton color="primary" onClick={() => setShow(!show)}>
             {show ?< ExpandMoreIcon /> :
             <ExpandLessIcon />}
             </IconButton>
             
             <IconButton color="primary" onClick={() => history.push(`/movielist/${id}`)} aria-label="toogle button">
             < InfoIcon/>
             </IconButton>
           </div>

           <div style={styles} className="movie-rating" >⭐{ratings}  </div>
           </div>

           <Typography variant="body2" color="text.secondary">
           <div 
            style={summarystyles} >{summarys}</div>
           </Typography>

       </CardContent>


       <CardActions>
          <Like />{deletebutton}{editbutton}
       </CardActions>
    
    </Card>
    </div>
  );
  }