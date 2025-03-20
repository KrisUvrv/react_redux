import './Input.css';
import {useState} from "react";

function Input({icon, placeholder, className}) {
  const [inputData, setInputData] = useState('');
  const inputSearchChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  }
  return (
    <div className={className}>
      {icon && <div>{icon}</div>}
      <input type="text"
             placeholder={placeholder}
             onChange={inputSearchChange}
             value={inputData} />
    </div>
  );
}

export default Input;
