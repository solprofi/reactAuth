import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3333/signup', formProps);
    const { token } = response.data;
    dispatch({
      type: AUTH_USER,
      payload: token,
    });

    localStorage.setItem('token', token);

    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'User already exists',
    });
  }
};

export const signOut = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
};
