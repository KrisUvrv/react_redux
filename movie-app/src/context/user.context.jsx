import {createContext, useEffect, useReducer, useState} from 'react';
import {useLocalstorage} from "../hooks/use-localstorage.hook.js";
import {formReducer, INITIAL_STATE} from "../components/LoginForm/LoginForm.state.js";

export const UserContext = createContext();
export const UserContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useLocalstorage('profiles');

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [isAutoLogged, setIsAutoLogged] = useState(false);
  const [error, setError] = useState(false);

  const login = (name) => {
    if (!name) {
      setError(true);
      return;
    }

    setError(false);

    const existingUser = users.find((u) => u.name === name);

    if (existingUser) {
      dispatch({type: 'LOGIN', payload: {name, userId: existingUser.userId}});
      setUsers(users.map((u) => u.name === name ? {...u, isLogged: true, userId: existingUser.userId} : u));
      setCurrentUser(existingUser);
      return;
    }

    const id = users.length + 1;
    const newUser = {name, isLogged: true, userId: id};
    dispatch({type: 'LOGIN', payload: newUser});
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  }

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    setUsers(users.map((u) => ({...u, isLogged: false})));
    setCurrentUser(null);
  }

  useEffect(() => {
    if (!isAutoLogged) {
      const activeUser = users.find(u => u.isLogged);
      if (activeUser) {
        setCurrentUser(activeUser);
        setIsAutoLogged(true);
      }

    }
  }, [users, isAutoLogged]);

  return <UserContext.Provider value={{login, logout, currentUser, error, setError, dispatch}}>
    {children}
  </UserContext.Provider>
}

