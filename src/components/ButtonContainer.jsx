import './ButtonContainer.css';

const ButtonContainer = ({handleButton}) => {
  const btnName = ['Clr','Dlt','1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.'];
  return (
    <div className='btn-container'>
      {btnName.map((btnName) => ( <button key={btnName} className='sk-btn' onClick={()=>handleButton(btnName)}>{btnName}</button> ))}
    </div>
  )
}

export default ButtonContainer;