import { useState } from 'react';
import './Result.Components.css'
interface Iprops{
  num:string;
}
const Result = (props:Iprops) => {
  const [operation,setOperation] = useState('');
  setOperation(props.num);
  return (
    <div>
      <input type='text' value={operation}/>
    </div>
  )
};

export default Result;
