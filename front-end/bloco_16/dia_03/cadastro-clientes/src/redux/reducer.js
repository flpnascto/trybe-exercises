const INITIAL_STATE = {
    userLogged: '',
    userPassword: '',
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return (
        { ...state,
          userLogged: action.payload.user,
          userPassword: action.payload.password,
        });
    case 'LOGOUT':
      return (
        { ...state,
          userLogged: '',
          userPassword: '',
        });
    default:
      return state;
  }
}

export default listReducer;