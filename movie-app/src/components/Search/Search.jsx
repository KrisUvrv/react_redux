import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <Input icon={<img src='/search-icon.svg' alt='Search'/>}
             placeholder='Введите название'
             className='input-wrapper'
             appearance='search'
      />
      <Button text="Искать" onClick={() => console.log('clicked')}/>
    </div>
  )
}

export default Search;
