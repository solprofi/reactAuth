import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3333/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'User already exists',
    });
  }
};
