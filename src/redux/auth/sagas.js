import apiManagement from '../../apis/api';

const { put, all, takeLatest, takeEvery } = require('redux-saga/effects');
const apis = require('../../apis/auth');

const actions = require('./actions');

function* verifyTokenSaga({ accessToken }) {
  try {
    const { data } = yield apis.verify(accessToken);
    const { result, status } = data;
    if (!status) throw new Error();
    apiManagement.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    yield put(actions.verifyTokenSuccess({ accessToken, result }));
  } catch (error) {
    yield put(actions.verifyTokenFailure());
  }
}

function* logoutSaga() {
  try {
    const { status } = yield apis.apiLogout();
    yield put(actions.updateIsLogout());
    if (!status) throw new Error();
    yield put(actions.logoutSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.actionTypes.VERIFY_TOKEN, verifyTokenSaga),
    takeLatest(actions.actionTypes.LOGOUT, logoutSaga),
  ]);
}
