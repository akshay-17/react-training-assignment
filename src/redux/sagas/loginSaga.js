import { doLogin } from "../../apis/loginApi";
const { put, takeLatest } = require("redux-saga/effects");
const { LOGIN_CONSTANTS } = require("../actions/loginActions/actionTypes");

function* dologging(action) {
  console.log(action.payload);
  try {
    const response = yield doLogin(action.payload);
    sessionStorage.setItem("user_data", JSON.stringify(response.data));
    yield put({
      type: LOGIN_CONSTANTS.LOGIN_SUCCESS,
      payload: { user_data: response.data },
    });
  } catch (e) {
    yield put({
      type: LOGIN_CONSTANTS.LOGIN_ERROR,
      payload: { error: e.message },
    });
  }
}

export function* LoginSaga() {
  yield takeLatest(LOGIN_CONSTANTS.LOGIN_REQUEST, dologging);
}
