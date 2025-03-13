import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import './Search.css';

const Search = () => {
  return (
    <div className='search'>
      <Input icon={<img src='/search-icon.svg' alt='Search'/>}
             placeholder='Введите название'
             className='search-wrapper'
      />
      <Button text="Искать" onClick={() => console.log('clicked')}/>
    </div>
  )
}

export default Search;
