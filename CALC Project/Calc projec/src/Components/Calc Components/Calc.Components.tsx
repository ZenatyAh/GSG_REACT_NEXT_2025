import './Calc.Components.css'
import Button from '../button Components/Button.Components';
import { useState } from 'react';
const Calc = () => {
  const [num,setNum] = useState("");
  const InputHandler = (val : string ) => {
    if(val === '='){
      console.log(num +val+ eval(num))
      setNum(num +val+ eval(num));
    }else if(val === 'C'){
      setNum('');
    }
    else{
      setNum(num + val)
    }
  }
  // function for handling operation
  


  return (
    <div>
      <input type='text' value={num}/>
      <Button InputHandler={InputHandler}/>
    </div>
  )
};

export default Calc;
