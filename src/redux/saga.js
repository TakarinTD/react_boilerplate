import { all } from 'redux-saga/effects';
import authSagas from './auth/sagas';
import apiSagas from './api/sagas';

function* rootSaga() {
  yield all([authSagas(), apiSagas()]);
}

export default rootSaga;
