import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/util/saga';
import * as lecturesAPI from '../../lib/api/lectures';

const [GETLIST, GETLIST_SUCCESS, GETLIST_FAILURE] =
  createRequestActionTypes('lectures/GETLIST');

export const getList = () => {
  return {
    type: GETLIST,
  };
};

const getListSaga = createRequestSaga(GETLIST, lecturesAPI.getList);

export function* lecturesSagas() {
  yield takeLatest(GETLIST, getListSaga);
}

const initialState = {
  status: '',
  lecturesList: [],
};

const lectures = (state = initialState, action) => {
  switch (action.type) {
    case GETLIST_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        lecturesList: action.payload.data.mycourses,
      };
    case GETLIST_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        lecturesList: action.payload.data,
      };
    default:
      return state;
  }
};
export default lectures;
