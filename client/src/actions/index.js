import { AUTH_USER } from './types';
import axios from 'axios';

export const signUp = (formProps) => dispatch => {
  axios.post('http://localhost:3333/signup', formProps);
};
