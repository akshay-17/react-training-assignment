import { all } from "redux-saga/effects";
import { fetchDashboardDataSaga } from "./dashboardSaga";
import { LoginSaga } from "./loginSaga";
import { fetchPostDetailsSaga } from "./postDetailsSaga";

export default function* rootSaga() {
  yield all([fetchDashboardDataSaga(), LoginSaga(), fetchPostDetailsSaga()]);
}
