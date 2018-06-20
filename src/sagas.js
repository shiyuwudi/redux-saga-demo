import { delay, effects } from 'redux-saga';
import {DELETE_IN_ONE_SEC, DELETE, TO_BE_DELETED, GET_USER, USER_FETCH_SUCCESS} from "./actionTypes";
import Api from './Api';

const { put, takeEvery, all, call } = effects;

export function* delAsync({ payload }) {
  yield call(delay, 1000);
  yield put({ type: TO_BE_DELETED, payload });
  yield call(delay, 1000);
  yield put({ type: TO_BE_DELETED, payload });
  yield call(delay, 1000);
  yield put({ type: DELETE, payload });
}

export function* watchDelAsync() {
  yield takeEvery(DELETE_IN_ONE_SEC, delAsync);
}

function* watchFetchProducts() {
  yield takeEvery(GET_USER, fetchProducts)
}

function* fetchProducts() {
  const payload = yield call(Api.fetch, '/users.htm');
  yield put({ type: USER_FETCH_SUCCESS, payload });
}

// 合并sagas
export default function* rootSaga() {
  yield all([
    watchDelAsync(),
    watchFetchProducts()
  ])
}