import './Button.Components.css'
interface Iprops{
  InputHandler:(x:string) => void;
}
const Button = (props :Iprops) => {
  const numberArr = [1,2,3,4,5,6,7,8,9,0];
  const operationArr = ['+','-','*','/','C','=','⌫'];
  const handleClick =(event : React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    props.InputHandler(event.currentTarget.value)
  }
  return (
    <div className='Board_grid'>
      {numberArr.map((val,index) => (
      <input key={index} type='button' value={val} className='button' onClick={handleClick}/>
    ))}

{operationArr.map((val,index) => (
      <input key={index} type='button' value={val} className='button bg-orange' onClick={handleClick}/>
    ))}
    </div>
  )
};

export default Button;
