import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import drawer from './drawer';
import process from './auth/process';
import check, { checkSagas } from './auth/check';
import user, { userSagas } from './auth/user';

// 추후에 auth/의 모든 모듈들은 auth 하나로 통합해서 깔끔하게 가져올 수 있도록
const rootReducer = combineReducers({
  drawer,
  process,
  check,
  user,
});

export function* rootSaga() {
  yield all([checkSagas(), userSagas()]);
}

export default rootReducer;
