import './Button.Components.css'
interface Iprops{
  InputHandler:(x:string) => string;
}
const Button = (props :Iprops) => {
  const InputHandler =(event : React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    props.InputHandler(event.currentTarget.value)
  }
  return (
    <div className='Board_grid'>
      <input type='button' value={1} className='button' onClick={InputHandler}/>
      <input type='button' value={2} className='button' onClick={InputHandler}/>
      <input type='button' value={3} className='button' onClick={InputHandler}/>
      <input type='button' value={4} className='button' onClick={InputHandler}/>
      <input type='button' value={5} className='button' onClick={InputHandler}/>
      <input type='button' value={6} className='button' onClick={InputHandler}/>
      <input type='button' value={7} className='button' onClick={InputHandler}/>
      <input type='button' value={8} className='button' onClick={InputHandler}/>
      <input type='button' value={9} className='button' onClick={InputHandler}/>
      <input type='button' value={0} className='button' onClick={InputHandler}/>
      <input type='button' value={'+'} className='button bg-orange' onClick={InputHandler}/>
      <input type='button' value={'-'} className='button bg-orange' onClick={InputHandler}/>
      <input type='button' value={'C'} className='button bg-green ' onClick={InputHandler}/>
      <input type='button' value={'='} className='button bg-green ' onClick={InputHandler}/>
      <input type='button' value={'*'} className='button bg-green ' onClick={InputHandler}/>
      <input type='button' value={'/'} className='button bg-green ' onClick={InputHandler}/>
    </div>
  )
};

export default Button;
