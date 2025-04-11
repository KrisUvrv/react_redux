export const INITIAL_STATE = {
  name: '',
  isLogged: false,
  error: false,
  userId: null
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {...state, name: action.payload.name, isLogged: true, userId: action.payload.userId }
    case 'LOGOUT':
      return {...state, name: '', isLogged: false };
    default:
      return state;
  }
}

