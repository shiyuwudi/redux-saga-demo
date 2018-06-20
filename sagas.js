import { delay, effects } from 'redux-saga';
import {DELETE_IN_ONE_SEC, DELETE, TO_BE_DELETED} from "./actionTypes";

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

// 合并sagas
export default function* rootSaga() {
  yield all([
    watchDelAsync()
  ])
}