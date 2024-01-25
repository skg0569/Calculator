import './Display.css';

const Display = ({displayVal}) => {
  return (
    <input type="text" readOnly className="sk-input" value={displayVal}></input>
  )
}

export default Display;