import { call, put } from 'redux-saga/effects';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(
  type,
  requestFn,
  // eslint-disable-next-line no-unused-vars
  sideEffectFn = (actionType, response) => {}
) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 통신 자체가 안 되었을 때는 어떻게 처리할 것인가?
  // 기존에는 try-catch 구문이 있었음
  return function* (action) {
    const response = yield call(requestFn, action.payload);
    sideEffectFn(type, response);
    console.log(response);
    if (response.data.status === 'success') {
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: FAILURE,
        payload: response.data,
      });
    }
  };
}

export function createMySitesListRequestSaga(type, requestFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    const response = yield call(requestFn, action.payload);
    if (response.data.status === 'success') {
      const sitesList = response.data.data.mycourses
        .map(course => {
          return course.site_info.name;
        })
        .filter((courseName, index, courses) => {
          return index === courses.indexOf(courseName);
        });
      response.data.data.mycourses = sitesList;
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: FAILURE,
        payload: response.data,
      });
    }
  };
}
