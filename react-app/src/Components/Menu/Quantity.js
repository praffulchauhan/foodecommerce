import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quantity.css'
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <>
   <div className="row-s-1">
    
    <div className="input-group">
  
  <div className="quant input-group-prepend">
      <p className="all"><b>Quantity</b></p>
    <button className="btn btn-outline-primary margin-l" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" className="form-control padding-l" value={num} onChange={handleChange}/>
  <div className="input-group-prepend">
    <button className="btn btn-outline-primary margin-r" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}

export default IncDecCounter;