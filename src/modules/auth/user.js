import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/util/saga';
import * as authAPI from '../../lib/api/auth';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('user/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('user/LOGIN');

export const register = (
  email,
  firstPassword,
  secondPassword,
  phoneNumber,
  birthDate
) => ({
  type: REGISTER,
  payload: {
    email,
    firstPassword,
    secondPassword,
    phoneNumber,
    birthDate,
  },
});
export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

const registerSaga = createRequestSaga(
  REGISTER,
  authAPI.register,
  (actionType, response) => {
    if (actionType === 'user/REGISTER' && response.data.status === 'success') {
      localStorage.setItem('userToken', response.data.data.key);
    }
  }
);
const loginSaga = createRequestSaga(
  LOGIN,
  authAPI.login,
  (actionType, response) => {
    if (actionType === 'user/LOGIN' && response.data.status === 'success') {
      localStorage.setItem('userToken', response.data.data.key);
    }
  }
);
export function* userSagas() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  status: '',
  token: '',
  error: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        token: action.payload.data.key,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.data,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        token: action.payload.data.key,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.data,
      };
    default:
      return state;
  }
};
export default user;
