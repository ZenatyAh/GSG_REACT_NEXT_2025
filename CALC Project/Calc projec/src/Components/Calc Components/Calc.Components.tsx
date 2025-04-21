import './Calc.Components.css'
import Button from '../button Components/Button.Components';
import { useState } from 'react';
const Calc = () => {
  const [num,setNum] = useState("");
  const InputHandler = (val : string ) => {
    if(val === '='){
      // the new solution here
      ParseOperation(num);
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
      <input type='text' value={num} className='result'/>
      <Button InputHandler={InputHandler}/>
    </div>
  )
};

export default Calc;

const ParseOperation = (val : string) => {
  console.log(val);
  for (let index = 0; index < val.length; index++) {
  // using regular expression
  if(/[0-9.]/.test(val[index])){
    // numbers
    console.log('number')
  }else if(/[+\-*/]/.test(val[index])){
    // operation
    console.log('operation')
  }

  }
}