const { call, put, takeEvery } = require("redux-saga/effects");
const { getPostById } = require("../../apis/postsApis");
const {
  DASHBOARD_CONSTANTS,
} = require("../actions/dashboardActions/actionTypes");

function* fetchPostDetails(action) {
  try {
    const response = yield call(getPostById, action.payload.id);
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_SUCCESS,
      payload: { post: response.data },
    });
  } catch (e) {
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_ERROR,
      payload: { error: e.message },
    });
  }
}

export function* fetchPostDetailsSaga() {
  yield takeEvery(DASHBOARD_CONSTANTS.FETCH_POST_DETAILS, fetchPostDetails);
}
