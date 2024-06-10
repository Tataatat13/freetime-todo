
import { useEffect, useState } from 'react';
import './App.css';
import { Circle } from "react-awesome-shapes";
import { Donut } from 'react-awesome-shapes';
import {Star} from "react-awesome-shapes";
import {CircleGrid} from "react-awesome-shapes";
import {Diamond} from "react-awesome-shapes";
import {PolygonCard} from "react-awesome-shapes";


function App() {

  const [task, setTask] = useState("");

  useEffect (() => {
    getTask();
  }, [])
    const getTask = async () => {
    const response = await fetch ("https://bored.api.lewagon.com/api/activity");
    const data = await response.json();
    console.log(data.activity)
    setTask(data.activity)
    }
    
    
  return (
    <div className="App">
    
<Circle color="linear-gradient(135deg, #a5b4fc, #6366f1)"
    top="-30px"
    left="-20px"
    size={['150px', '150px', '180px', '280px']}
    zIndex={2}/>

<Donut 
    color="#F94A29"
    size="30px"
    right ="100px"
    top="150px"
    width={['40px', '40px', '60px', '60px']}
    zIndex={2}
/>

<Star
    size="150px"
    top="150px"
    left="80px"
    zIndex={2}
    color="#94FFD8"
/>
<CircleGrid
    position="relative"
    color="#B1AFFF"
    left="450px"
    size="125px"
    zIndex={2}
/>
<Diamond
    color="#06D001"
    size="180px"
    right="10px"
    top="-50px"
    zIndex={2}
/>

<Circle
    color="#F9F9E0"
    top="270px"
    right="0px"
    size={['150px', '150px', '180px', '180px']}
    zIndex={2}
/>
<PolygonCard
    height="200px"
    width="200px"
    left="-10px"
    top="270px"
    zIndex={2}
    color="#5356FF"
/>
<PolygonCard
    height="50px"
    width="50px"
    left="180px"
    top="50px"
    zIndex={2}
    color="#EE99C2"
/>
<PolygonCard
    height="60px"
    width="60px"
    right="250px"
    top="280px"
    zIndex={2}
    color="#F0DE36"
/>

  
<div className='container'>
  <div className='top'>
    <div className='head'>
      <h1>You don't know what to do</h1>
      <h3>just click on the button and you'll find it</h3>
    <img src="https://img.icons8.com/?size=100&id=YPTOhlU4qO2D&format=png&color=000000" alt='icon' widht="50px"/>
      <p>{task}</p>
  
      <button onClick={getTask}>New task</button>
    </div>

  </div>
</div>
    </div>
  );
}
// function App() {

//   const [tips, setTips] = useState("");
  
//   useEffect(() => {
//   fetchTips();
//   }, [])
  
//   const fetchTips = async () => {
//   const response = await fetch(`http://www.boredapi.com/api/activity/`);
//   const data = await response.json();
//   console.log(data.activity);
//   setTips(data.activity)
//   }
  
  
  
//   return (
  
//   <div className="App">
  
//   <p> {tips} </p>
//   <button onClick={fetchTips}>New Tip</button>
  
  
  
//   </div>
  
//   );
  
//   }

export default App;
