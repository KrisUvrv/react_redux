import styles from './Navbar.module.css';
import LoginButton from "../LoginButton/LoginButton.jsx";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="/logo.svg" alt="logo"/>
      <div className={styles['navbar__links']}>
        <a href="#" className={styles['link__active']}>Поиск фильмов</a>
        <a href="#">
          Мои фильмы
          <img src="/counter.svg" alt="counter"/></a>
        <LoginButton/>
      </div>
    </div>
  )
}

export default Navbar;
