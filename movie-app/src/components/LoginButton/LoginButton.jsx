import React, {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

function LoginButton() {

  const {currentUser, logout} = useContext(UserContext);

  return (
    <>
      {!currentUser ? (
        <a href="#login-form">
          Войти
          <img src="/Login.svg" alt="Login"/>
        </a>
      ) : (
        <>
          <a href="#">
            {currentUser.name}
            <img src="/user.svg" alt="User icon"/>
          </a>
          <a href="#" onClick={logout}>
            Выйти
          </a>
        </>
      )}
    </>
  )
}

export default LoginButton;
