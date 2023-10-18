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


function App() {
  
  
  

  return (
    <div className="App">
      <div className="App-header">
      
      </div>
    </div>
  );
}





export default App;
