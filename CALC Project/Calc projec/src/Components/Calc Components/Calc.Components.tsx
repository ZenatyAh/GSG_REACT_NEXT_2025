import './Calc.Components.css'
import Button from '../button Components/Button.Components';
import { useState } from 'react';
const Calc = () => {
  const [num,setNum] = useState("");
  const [isResult,setIsResult] = useState(false);
  const InputHandler = (val : string ) => {
    if(val === '='){
      // the new solution here
      setNum(Evaluate(num));
      setIsResult(true);
    }else if(val === 'C'){
      setNum('');
      setIsResult(false);
    }else if(val === '⌫'){
      if(!isResult){
        const nex = num.slice(0,num.length-1)
        setNum(nex)
      }
    }
    else{
      if(isResult){
        setNum(val);
        setIsResult(false)
      }else{
        setNum(num + val)
      }
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
  let currentNumber = '';
  const Tokens = [];
  for (let index = 0; index < val.length; index++) {
  // using regular expression
  if(/[0-9.]/.test(val[index])){
    // numbers
    currentNumber+=val[index];
  }
  else if(/[+\-*/]/.test(val[index])){
    // operation
    if(currentNumber !== ''){
      Tokens.push(currentNumber);
      currentNumber = '';
      Tokens.push(val[index]);
    }
    }
  }
  Tokens.push(currentNumber);
  return Tokens;
}

const MultiOp = (Tokens : string []) => {
  const newTokens:string[] = [];
  let i = 0;
  while(i<Tokens.length){
    const token = Tokens[i];
    if(token === '*' || token === '/'){
      const prev = Number(newTokens.pop());
      const next = Number(Tokens[i+1]);
      let result;
      if(token === '*'){
        result = prev * next;
      }else{
        result = prev / next;
      }
      console.log(prev, next , result)
      newTokens.push(result.toString());
      i+=2;
    }else {
      newTokens.push(token);
      i++;
    }
  }
  return newTokens;
}

const EvaluateAddSubtract = (Tokens : string[]) => {
  let result = Number(Tokens[0]);
  for (let i = 1; i < Tokens.length; i+=2) {
    const operator = Tokens[i];
    const next = Number(Tokens[i+1]);
    if(operator === '+'){
      result += next;
    }else{
      result -= next;
    }
  }
  return result;
}
const Evaluate = (num:string) => {
  const tokens = ParseOperation(num);
  const afterMulDiv = MultiOp(tokens);
  const result = EvaluateAddSubtract(afterMulDiv);
  return result.toString();
}
