import { useState, useRef } from 'react';
import './App.css';


/*function MyButton(){          //CONDITIONAL RENDERING //CONDITIONAL RENDERING //CONDITIONAL RENDERING //CONDITIONAL RENDERING
  return(
    <button>Click</button>
  );
}

const user={
  name:"Yeki",
  imageUrl:"https://www.w3schools.com/html/img_girl.jpg"  
}


function LoggedinPage(){
  return (
    <div>
        <MyButton/>
        <p>
          Hello {user.name}
        </p>
        <p>More markup</p>
        <img id="image-1"src={user.imageUrl}></img>
    </div>
  )
}

function LoginPage(){
  return(
    
      <div>
        <p>
          Enter Username
        </p>
        <textarea placeholder='Username'></textarea>
        <p>
          Enter Password
        </p>
        <textarea placeholder='Password'></textarea><br/>
        <MyButton/>
      </div>
    
  );
}


let loggedIn = false;
let content;
if(loggedIn){
  content=<LoggedinPage/>;
}
else{
  content=<LoginPage/>;
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {content}
      </div>
    </div>
  );
}

*/                    //CONDITIONAL RENDERING //CONDITIONAL RENDERING //CONDITIONAL RENDERING //CONDITIONAL RENDERING



/*const items=[                               //ITEM LIST //ITEM LIST //ITEM LIST //ITEM LIST //ITEM LIST //ITEM LIST //ITEM LIST
  {name:'orange',price:10, color:'orange', id:1, isCitrus:true},
  {name:'apple', price:9, color:'red', id:2, isCitrus:false},
  {name:'watermelon', price:15, color:'red', id:4, isCitrus:false},
  {name:'grape', price:8, color:'green', id:3, isCitrus:false}
]

const itemsList=items.map(item=>
  <li key={item.id} style={{color:item.isCitrus? 'orange':'green'}}>
    {item.name}
  </li>)


function App() {
  return (
    <div className="App">
      <div className="App-header">
        {itemsList}
      </div>
    </div>
  );
}
*/                              //ITEM LIST //ITEM LIST //ITEM LIST //ITEM LIST //ITEM LIST //ITEM LIST 







/*function App() {            //State BUTTON INCREMENT //State BUTTON INCREMENT //State BUTTON INCREMENT 
  
  const [count, setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  

  return (
    <div className="App">
      <div className="App-header">
      <button onClick={handleClick}>Click this</button>
        <p>{count}</p>
        
      </div>
    </div>
  );
}
*/                   //State BUTTON INCREMENT //State BUTTON INCREMENT //State BUTTON INCREMENT

function Square({value, onSquareClick}){

  return(
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}


function App() {
  
  const [squares, setSquares]=useState(Array(9).fill(null));
  const [xIsNext, setXIsNext]=useState(true);
  
  function handleClick(i){
    const nextSquares= squares.slice();
    if(xIsNext){
    nextSquares[i] ="X";}
    else{
      nextSquares[i]="O"
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <div className="App">
      <div className="App-header">
        <div id="ttt-grid"> 
          <Square onSquareClick={()=>handleClick(0)} value={squares[0]}/>
          <Square onSquareClick={()=>handleClick(1)} value={squares[1]}/>
          <Square onSquareClick={()=>handleClick(2)} value={squares[2]}/>
          <Square onSquareClick={()=>handleClick(3)} value={squares[3]}/>
          <Square onSquareClick={()=>handleClick(4)} value={squares[4]}/>
          <Square onSquareClick={()=>handleClick(5)} value={squares[5]}/>
          <Square onSquareClick={()=>handleClick(6)} value={squares[6]}/>
          <Square onSquareClick={()=>handleClick(7)} value={squares[7]}/>
          <Square onSquareClick={()=>handleClick(8)} value={squares[8]}/>
        </div>
      </div>
    </div>
  );
}





export default App;
