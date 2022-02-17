import './App.css';
import { useState } from "react";
export default ColorBox;

function ColorBox()
{
  const[color,setColor] = useState("blue");
  const styles={
    background:color,
  };
  const[colorList,setColorList]=useState(["red","blue","green"]);
  return(
    <div>
      <input value={color}
             style={styles} 
      onChange={(event)=> setColor(event.target.value)}
      placeholder="enter the color" />
      <button onClick={() => setColorList([...colorList,color])}>Add Color</button>
      {colorList.map((clr)=>(
        <Bolorbox color={clr} />
      ))}
    </div>
  );
  }
  function Bolorbox({ color})
  {
    const styles={
      backgroundColor:color,
      height:"25px",
      width:"200px",
      marginTop:"10px",
    };
    return<div style={styles}></div>;
  }


