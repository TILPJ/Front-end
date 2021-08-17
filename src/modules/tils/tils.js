import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
  createMySitesListRequestSaga,
} from '../../lib/util/saga';
import * as tilsAPI from '../../lib/api/tils';

const [GETTILLIST, GETTILLIST_SUCCESS, GETTILLIST_FAILURE] =
  createRequestActionTypes('tils/GETTILLIST');
const [GETMYSITESLIST, GETMYSITESLIST_SUCCESS, GETMYSITESLIST_FAILURE] =
  createRequestActionTypes('tils/GETMYSITESLIST');

export const getTilList = siteName => {
  return {
    type: GETTILLIST,
    payload: {
      siteName,
    },
  };
};
export const getMySitesList = () => {
  return {
    type: GETMYSITESLIST,
  };
};

const getTilListSaga = createRequestSaga(GETTILLIST, tilsAPI.getTilList);
const getMySitesListSaga = createMySitesListRequestSaga(
  GETMYSITESLIST,
  tilsAPI.getMySitesList
);

export function* tilsSagas() {
  yield takeLatest(GETTILLIST, getTilListSaga);
  yield takeLatest(GETMYSITESLIST, getMySitesListSaga);
}

const initialState = {
  tils: {
    status: null,
    list: [],
    error: null,
  },
  mySites: {
    status: null,
    list: [],
    error: null,
  },
};

const tils = (state = initialState, action) => {
  switch (action.type) {
    case GETTILLIST_SUCCESS:
      return {
        ...state,
        tils: {
          status: action.payload.status,
          list: action.payload.data.tils,
        },
      };
    case GETTILLIST_FAILURE:
      return {
        ...state,
        tils: {
          status: action.payload.status,
          error: action.payload.data,
        },
      };
    case GETMYSITESLIST_SUCCESS:
      return {
        ...state,
        mySites: {
          status: action.payload.status,
          list: action.payload.data.mycourses,
        },
      };
    case GETMYSITESLIST_FAILURE:
      return {
        ...state,
        mySites: {
          status: action.payload.status,
          error: action.payload.data,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default tils;
