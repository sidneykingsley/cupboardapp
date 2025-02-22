const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed',
      };
    case 'LOGIN_SUCCESS':
      console.log('login sucess');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup sucess');
      return {
        ...state,
        authError: null,
      };
    case ' SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
    default:
      return state;
  }
};

export default authReducer;
