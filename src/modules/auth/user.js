import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/util/saga';
import * as authAPI from '../../lib/api/auth';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('user/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('user/LOGIN');
const [CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE] =
  createRequestActionTypes('user/CHANGE_PASSWORD');
const INIT_IS_PASSWORD_CHANGED = 'user/INIT_IS_PASSWORD_CHANGED';
const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] =
  createRequestActionTypes('user/LOGOUT');
const MAINTAINLOGIN = 'user/MAINTAINLOGIN';

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
export const changePassword = (email, firstPassword, secondPassword) => ({
  type: CHANGE_PASSWORD,
  payload: {
    email,
    firstPassword,
    secondPassword,
  },
});
export const initIsPasswordChanged = () => ({
  type: INIT_IS_PASSWORD_CHANGED,
});
export const logout = () => ({
  type: LOGOUT,
});
export const maintainLogin = userToken => ({
  type: MAINTAINLOGIN,
  payload: {
    userToken,
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
const changePasswordSaga = createRequestSaga(
  CHANGE_PASSWORD,
  authAPI.changePassword
);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);

export function* userSagas() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(CHANGE_PASSWORD, changePasswordSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  status: '',
  token: '',
  isPasswordChanged: false,
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
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isPasswordChanged: true,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isPasswordChanged: false,
      };
    case INIT_IS_PASSWORD_CHANGED:
      return {
        ...state,
        isPasswordChanged: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        token: '',
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        error: action.payload.data,
      };
    case MAINTAINLOGIN:
      return {
        ...state,
        token: action.payload.userToken,
      };
    default:
      return state;
  }
};
export default user;
