import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/util/saga';
import * as lecturesAPI from '../../lib/api/lectures';

const [GETMYLIST, GETMYLIST_SUCCESS, GETMYLIST_FAILURE] =
  createRequestActionTypes('lectures/GETMYLIST');
const [GETSITESLIST, GETSITESLIST_SUCCESS, GETSITESLIST_FAILURE] =
  createRequestActionTypes('lectures/GETSITESLIST');
const [GETLECTURESLIST, GETLECTURESLIST_SUCCESS, GETLECTURESLIST_FAILURE] =
  createRequestActionTypes('lectures/GETLECTURESLIST');
const [
  REGISTERMYNEWLECTURE,
  REGISTERMYNEWLECTURE_SUCCESS,
  REGISTERMYNEWLECTURE_FAILURE,
] = createRequestActionTypes('lectures/GETLECTURESLIST');
const [DELETELECTURE, DELETELECTURE_SUCCESS, DELETELECTURE_FAILURE] =
  createRequestActionTypes('lectures/DELETELECTURE');

export const getMyList = () => {
  return {
    type: GETMYLIST,
  };
};
export const getSitesList = () => {
  return {
    type: GETSITESLIST,
  };
};
export const getLecturesList = site => {
  return {
    type: GETLECTURESLIST,
    payload: {
      site,
    },
  };
};
export const registerMyNewLecture = (siteId, lectureId) => {
  return {
    type: REGISTERMYNEWLECTURE,
    payload: {
      siteId,
      lectureId,
    },
  };
};
export const deleteLecture = myLectureId => {
  return {
    type: DELETELECTURE,
    payload: {
      myLectureId,
    },
  };
};

const getMyListSaga = createRequestSaga(GETMYLIST, lecturesAPI.getMyList);
const getSitesListSaga = createRequestSaga(
  GETSITESLIST,
  lecturesAPI.getSitesList
);
const getLecturesListSaga = createRequestSaga(
  GETLECTURESLIST,
  lecturesAPI.getLecturesList
);
const registerMyNewLectureSaga = createRequestSaga(
  REGISTERMYNEWLECTURE,
  lecturesAPI.registerMyNewLecture
);
const deleteLectureSaga = createRequestSaga(
  DELETELECTURE,
  lecturesAPI.deleteLecture
);

export function* lecturesSagas() {
  yield takeLatest(GETMYLIST, getMyListSaga);
  yield takeLatest(GETSITESLIST, getSitesListSaga);
  yield takeLatest(GETLECTURESLIST, getLecturesListSaga);
  yield takeLatest(REGISTERMYNEWLECTURE, registerMyNewLectureSaga);
  yield takeLatest(DELETELECTURE, deleteLectureSaga);
}

const initialState = {
  myLectures: {
    status: null,
    list: [],
    error: null,
  },
  sites: {
    status: null,
    list: [],
    error: null,
  },
  lectures: {
    status: null,
    list: [],
    error: null,
  },
  register: {
    status: null,
    message: null,
  },
  delete: {
    status: null,
    message: null,
    error: null,
  },
};

const lectures = (state = initialState, action) => {
  switch (action.type) {
    case GETMYLIST_SUCCESS:
      return {
        ...state,
        myLectures: {
          status: action.payload.status,
          list: action.payload.data.mycourses,
        },
      };
    case GETMYLIST_FAILURE:
      return {
        ...state,
        myLectures: {
          status: action.payload.status,
          error: action.payload.data,
        },
      };
    case GETSITESLIST_SUCCESS:
      return {
        ...state,
        sites: {
          status: action.payload.status,
          list: action.payload.data.sites,
        },
      };
    case GETSITESLIST_FAILURE:
      return {
        ...state,
        sites: {
          status: action.payload.status,
          error: action.payload.data,
        },
      };
    case GETLECTURESLIST_SUCCESS:
      return {
        ...state,
        lectures: {
          status: action.payload.status,
          list: action.payload.data.courses,
          error: null,
        },
      };
    case GETLECTURESLIST_FAILURE:
      return {
        ...state,
        lectures: {
          status: action.payload.status,
          list: [],
          error: action.payload.data,
        },
      };
    case REGISTERMYNEWLECTURE_SUCCESS:
      return {
        ...state,
        register: {
          status: action.payload.status,
          message: action.payload.data,
        },
      };
    case REGISTERMYNEWLECTURE_FAILURE:
      return {
        ...state,
        register: {
          status: action.payload.status,
          message: action.payload.data,
        },
      };
    case DELETELECTURE_SUCCESS:
      return {
        ...state,
        delete: {
          status: action.payload.status,
          message: action.payload.data,
        },
      };
    case DELETELECTURE_FAILURE:
      return {
        ...state,
        delete: {
          status: action.payload.status,
          error: action.payload.data,
        },
      };
    default:
      return state;
  }
};
export default lectures;
