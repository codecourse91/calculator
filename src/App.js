import { useState} from 'react';
import './App.css';

function App() {
  const [num1,setnum1] = useState("");
  const [num2,setnum2] = useState("");
  const [result,setResult] = useState("");
  const  num=(e)=>{
    setnum1(Number(num1)*10+e)
  }
  const back=()=>
  {
    if (result !== '') {
      const dn = result.slice(0, result.length - 1);
      setResult(dn);
    }
  }
  const clear=()=>
  {
    setResult("");
  }
  const sum=()=>
  {
    setnum2(num1)
    setnum1("")
    setResult("1")
  } 
  const sub=()=>
  {
    setnum2(num1)
    setnum1("")
    setResult("2")
  } 
  const mul=()=>
  {
    setnum2(num1)
    setnum1("")
    setResult("3")
  } 
  const div=()=>
  {
    setnum2(num1)
    setnum1("")
    setResult("4")
  } 
  const ans=()=>
  {
    if(result==="1")
    {
      setnum1(Number(num1)+Number(num2))
    }
    else if(result==="2")
    {
      setnum1(Number(num2)-Number(num1))
    }
    else if(result==="3")
    {
      setnum1(Number(num2)*Number(num1))
    }
    else if(result==="4")
    {
      setnum1(Number(num2)/Number(num1))
    }
  }
  
  return (
    <div className="main">
      <input type="text" value={num1} onChange={(e)=>{setnum1(e.target.value)}} id={"no1"}></input><br></br>
     <input type="button" value="C" onClick={clear} className={"btn"}></input>
     <input type="button" value="CE" onClick={back} className={"btn1"}></input>
     <input type="button" value="+" onClick={sum} className={"btn"}></input>
     <input type="button" value="7" onClick={()=>{num(7)}} className={"btn"}></input>
     <input type="button" value="8" onClick={()=>{num(8)}} className={"btn"}></input>
     <input type="button" value="9" onClick={()=>{num(9)}} className={"btn"}></input>
     <input type="button" value="-" onClick={sub} className={"btn"}></input><br></br>
     <input type="button" value="4" onClick={()=>{num(4)}} className={"btn"}></input>
     <input type="button" value="5" onClick={()=>{num(5)}} className={"btn"}></input>
     <input type="button" value="6" onClick={()=>{num(6)}} className={"btn"}></input>
     <input type="button" value="*" onClick={mul} className={"btn"}></input><br></br>
     <input type="button" value="1" onClick={()=>{num(1)}} className={"btn"}></input>
     <input type="button" value="2" onClick={()=>{num(2)}} className={"btn"}></input>
     <input type="button" value="3" onClick={()=>{num(3)}} className={"btn"}></input>
     <input type="button" value="/" onClick={div} className={"btn"}></input><br></br>
     <input type="button" value="0" onClick={()=>{num(0)}} className={"btn1"}></input>
     <input type="button" value="." onClick={num} className={"btn"}></input><br></br>
     <input type="button" value="=" onClick={ans} className={"btn"}></input>
    </div>
  );
}

export default App;
