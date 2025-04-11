import styles from './LoginForm.module.css';
import React, {useContext, useRef} from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import Heading from "../Heading/Heading.jsx";
import {UserContext} from "../../context/user.context.jsx";

function LoginForm() {
  const ref = useRef();
  const {currentUser, login, logout, setError, error} = useContext(UserContext);
  const onLogin = (e) => {
    e.preventDefault();
    const name = ref.current.value.trim();
    login(name);
  }

  return (<form className={styles['login-form']}
                onSubmit={onLogin}
                id='login-form'>
    <div className={styles['login-form']}>
      <Heading size='large'> {currentUser ? `Привет, ${currentUser.name}!` : 'Вход'}</Heading>
      {!currentUser && (<Input placeholder='Ваше имя'
                               appearance='login'
                               className='input-wrapper'
                               ref={ref}
                               name='name'
                               setError={setError}
                               error={error}
      />)}
      {currentUser ? (<Button text="Выйти" onClick={logout}/>) : (<Button text="Войти в профиль" type='submit'/>)}
    </div>
  </form>)
}

export default LoginForm;
