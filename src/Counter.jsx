import {useState} from "react";
import "./Counter.css"
export default function Counter(){
  let [count , setCount] = useState(0);

  let back = () =>{
    if(count >0){
      setCount(count-1);
    }
    
  }
  
    function incCounter(){
    setCount(count+1);
      
    }
    function clear(){
     setCount(0);
    }
    return(
      <div className="box">
        <h2>Tasbeeh Counter</h2>
        <button onClick={back} className="button">back</button>
        <button onClick={incCounter}  className="button">Counter = {count}</button>
        <button onClick={clear}  className="button">Clear</button>
      </div>  
    );
}