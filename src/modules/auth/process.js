const SWITCH_TO_AUTH_ENTRY = 'authProcess/SWITCH_TO_AUTH_ENTRY';
const SWITCH_TO_FIND_EMAIL = 'authProcess/SWITCH_TO_FIND_EMAIL';
const SWITCH_TO_REGISTER = 'authProcess/SWITCH_TO_REGISTER';
const SWITCH_TO_LOGIN = 'authProcess/SWITCH_TO_LOGIN';
const SWITCH_TO_NEW_PASSWORD = 'authProcess/SWITCH_TO_NEW_PASSWORD';
const SWITCH_TO_NO_USER_INFO = 'authProcess/SWITCH_TO_NO_USER_INFO';

export const switchToAuthEntry = () => ({
  type: SWITCH_TO_AUTH_ENTRY,
});
export const switchToFindEmail = () => ({
  type: SWITCH_TO_FIND_EMAIL,
});
export const switchToRegister = () => ({
  type: SWITCH_TO_REGISTER,
});
export const switchToLogin = () => ({
  type: SWITCH_TO_LOGIN,
});
export const switchToNewPassword = () => ({
  type: SWITCH_TO_NEW_PASSWORD,
});
export const switchToNoUserInfo = () => ({
  type: SWITCH_TO_NO_USER_INFO,
});

const initialState = {
  authProcess: 'authEntry',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_TO_AUTH_ENTRY:
      return {
        ...state,
        authProcess: 'authEntry',
      };
    case SWITCH_TO_FIND_EMAIL:
      return {
        ...state,
        authProcess: 'findEmail',
      };
    case SWITCH_TO_REGISTER:
      return {
        ...state,
        authProcess: 'register',
      };
    case SWITCH_TO_LOGIN:
      return {
        ...state,
        authProcess: 'login',
      };
    case SWITCH_TO_NEW_PASSWORD:
      return {
        ...state,
        authProcess: 'newPassword',
      };
    case SWITCH_TO_NO_USER_INFO:
      return {
        ...state,
        authProcess: 'noUserInfo',
      };
    default:
      return state;
  }
};

export default auth;
