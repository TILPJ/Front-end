import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/util/saga';
import * as authAPI from '../../lib/api/auth';

const INIT_EMAIL_EXISTENCE = 'check/INIT_EMAIL_EXISTENCE';
const [CHECK_EMAIL, CHECK_EMAIL_SUCCESS, CHECK_EMAIL_FAILURE] =
  createRequestActionTypes('check/CHECK_EMAIL');
const [FIND_EMAIL, FIND_EMAIL_SUCCESS, FIND_EMAIL_FAILURE] =
  createRequestActionTypes('check/FIND_EMAIL');
const INIT_USER_EMAIL = 'check/INIT_USER_EMAIL';

export const initEmailExistence = () => ({
  type: INIT_EMAIL_EXISTENCE,
});
export const checkEmail = email => ({
  type: CHECK_EMAIL,
  payload: {
    email,
  },
});
export const findEmail = (phoneNumber, birthDate) => ({
  type: FIND_EMAIL,
  payload: {
    phoneNumber,
    birthDate,
  },
});
export const initUserEmail = () => ({
  type: INIT_USER_EMAIL,
});

const checkEmailSaga = createRequestSaga(CHECK_EMAIL, authAPI.checkEmail);
const findEmailSaga = createRequestSaga(FIND_EMAIL, authAPI.findEmail);
export function* checkSagas() {
  yield takeLatest(CHECK_EMAIL, checkEmailSaga);
  yield takeLatest(FIND_EMAIL, findEmailSaga);
}

const initialState = {
  status: '',
  authEntry: {
    isEmailExist: 'init',
  },
  findEmail: {
    userEmail: '',
  },
  error: '',
};

// API 명세 참고해서 FAILURE 의 경우 셋팅하기.
// 클라이언트에서 검증을 1차로 하긴 하지만, 서버쪽 검증 한번더 거치기
const check = (state = initialState, action) => {
  switch (action.type) {
    case INIT_EMAIL_EXISTENCE:
      return {
        ...state,
        authEntry: {
          isEmailExist: 'init',
        },
      };
    case CHECK_EMAIL_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        authEntry: {
          isEmailExist: action.payload.data.email_check,
        },
      };
    case CHECK_EMAIL_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.data,
      };
    case FIND_EMAIL_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        findEmail: {
          userEmail: action.payload.data.user_email,
        },
      };
    case FIND_EMAIL_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.data,
      };
    case INIT_USER_EMAIL:
      return {
        ...state,
        findEmail: {
          userEmail: '',
        },
      };
    default:
      return state;
  }
};

export default check;
