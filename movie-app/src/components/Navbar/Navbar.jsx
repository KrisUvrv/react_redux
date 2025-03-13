import './Navbar.css';

function Navbar({text, onClick }) {

  return (
    <div className='navbar'>
      <img src="/logo.svg" alt="logo"/>
      <div className='navbar__links'>
        <a href="#" className='link__active'>Поиск фильмов</a>
        <a href="#">
          Мои фильмы
          <img src="/counter.svg" alt="counter"/></a>
        <a href="#">
          Войти
          <img src="/Login.svg" alt="Login"/>
        </a>
      </div>
    </div>

  )
}

export default Navbar;
