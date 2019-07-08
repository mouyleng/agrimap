import * as types from './actionTypes';
import { push } from 'connected-react-router';

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const signup = (user) => {
  const newUser = user
  return dispatch => {
    return fetch('/users/sign_up', {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user})
    })
      .then(response => response.json())
      .then(jresp => {
        dispatch(authenticate({
          email: newUser.email,
          password: newUser.password})
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = (user) => {
  return dispatch => {
    dispatch(authRequest())
    return fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: user})
    })
      .then(res => res.json())
      .then((response) => {
        console.log('response : ', response)
        const token = response.auth_token;
        localStorage.setItem('token', token);
        dispatch(authSuccess(user, token))
        dispatch(push('/home'))
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
        localStorage.clear()
      })
  }
}

export const authAutoSignIn = () => {
  return dispatch => {
    let token = localStorage.getItem('token');
    console.log('authAutoSignIn:  ', token)
    if(token != 'undefined'){
      dispatch(push('/home'))
    }
  };
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}
