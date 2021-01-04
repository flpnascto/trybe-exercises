const INITIAL_STATE = {
    userName: '',
    userPassword: '',
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return [];
    default:
      return state;
  }
}

export default listReducer;