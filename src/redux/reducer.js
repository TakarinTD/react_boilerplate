import { combineReducers } from 'redux';
import auth, { initialState as authInitialState } from './auth/reducer';
import api from './api/reducer';

export const initialState = {
  auth: authInitialState,
};

export default combineReducers({
  auth,
  api,
});
