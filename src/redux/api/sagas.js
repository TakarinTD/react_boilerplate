import { STATUS_RESPONSE } from '../../constants/index';

import { toastMsgError } from '../../commons/Toastify';

const { put, call, all, takeLatest } = require('redux-saga/effects');
const apis = require('../../apis/apiManage');

const actions = require('./actions');

export function* searchApi({ payload }) {
  try {
    const { key } = payload;
    const resp = yield call(apis.getListApi);
    const { result } = resp;
    if (resp.status === STATUS_RESPONSE.STATUS_OKE) {
      yield put(actions.filterListApiSuccess(result));
    } else {
      yield put(actions.filterListApiFailed());
    }
  } catch (error) {
    console.log(error);
    yield put(actions.filterListApiFailed());
    // toastMsgError('Lỗi:  ');
  }
}

export function* getListApi({ payload }) {
  const { apiId } = payload;
  const resp = yield call(apis.getListApi, { apiId });
  const { status, data, message } = resp.data;

  if (STATUS_RESPONSE.OK === status) {
    yield put(actions.getDataApi(data));
  } else {
    toastMsgError(`Lỗi:  ${status} - ${message}`);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.actionTypes.GET_LIST_API, getListApi),
    takeLatest(actions.actionTypes.FILTER_SEARCH, searchApi),
  ]);
}
