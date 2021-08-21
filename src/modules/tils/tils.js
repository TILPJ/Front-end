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
const [GETCOURSESLIST, GETCOURSESLIST_SUCCESS, GETCOURSESLIST_FAILURE] =
  createRequestActionTypes('tils/GETCOURSESLIST');
const [GETCHAPTERSLIST, GETCHAPTERSLIST_SUCCESS, GETCHAPTERSLIST_FAILURE] =
  createRequestActionTypes('tils/GETCHAPTERSLIST');
const [ADDTIL, ADDTIL_SUCCESS, ADDTIL_FAILURE] =
  createRequestActionTypes('tils/ADDTIL');

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
export const getCoursesList = siteName => {
  return {
    type: GETCOURSESLIST,
    payload: {
      siteName,
    },
  };
};
export const getChaptersList = courseId => {
  return {
    type: GETCHAPTERSLIST,
    payload: {
      courseId,
    },
  };
};
export const addTil = newTil => {
  return {
    type: ADDTIL,
    payload: {
      ...newTil,
    },
  };
};

const getTilListSaga = createRequestSaga(GETTILLIST, tilsAPI.getTilList);
const getMySitesListSaga = createMySitesListRequestSaga(
  GETMYSITESLIST,
  tilsAPI.getMySitesList
);
const getCoursesListSaga = createRequestSaga(
  GETCOURSESLIST,
  tilsAPI.getCoursesList
);
const getChaptersListSaga = createRequestSaga(
  GETCHAPTERSLIST,
  tilsAPI.getChaptersList
);
const addTilSaga = createRequestSaga(ADDTIL, tilsAPI.addTil);

export function* tilsSagas() {
  yield takeLatest(GETTILLIST, getTilListSaga);
  yield takeLatest(GETMYSITESLIST, getMySitesListSaga);
  yield takeLatest(GETCOURSESLIST, getCoursesListSaga);
  yield takeLatest(GETCHAPTERSLIST, getChaptersListSaga);
  yield takeLatest(ADDTIL, addTilSaga);
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
  courses: {
    status: null,
    list: [],
    error: null,
  },
  chapters: {
    status: null,
    list: [],
    error: null,
  },
  addTil: {
    status: null,
    message: null,
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
    case GETCOURSESLIST_SUCCESS:
      return {
        ...state,
        courses: {
          list: action.payload.data.courses,
        },
      };
    case GETCOURSESLIST_FAILURE:
      return {
        ...state,
        courses: {
          list: action.payload.data,
        },
      };
    case GETCHAPTERSLIST_SUCCESS:
      return {
        ...state,
        chapters: {
          status: action.payload.status,
          list: action.payload.data.sections,
        },
      };
    case GETCHAPTERSLIST_FAILURE:
      return {
        ...state,
        chapters: {
          status: action.payload.status,
          error: action.payload.data,
        },
      };
    case ADDTIL_SUCCESS:
      return {
        ...state,
        addTil: {
          status: action.payload.status,
          message: action.payload.data.detail,
        },
      };
    case ADDTIL_FAILURE:
      return {
        ...state,
        addTil: {
          status: action.payload.status,
          message: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default tils;
