import { all, put, takeLatest } from "redux-saga/effects";
import { ADD_BACKEND_DATA, ADD_BACKEND_DATA_SUCCESS, ADD_BACKEND_DATA_FAILURE  } from "../contants";
import Axios from "axios";

export function* getDashboard(params) {
  try {
    const response = yield Axios.get(`https://swapi.co/api/people/${params.payload.number}`);
    yield put({
      type: ADD_BACKEND_DATA_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    let errorMessage = "";
    if (error.response) {
      errorMessage = error.response.data.message;
    } else {
      errorMessage = error.message;
    }
    yield put({
      type: ADD_BACKEND_DATA_FAILURE,
      payload: errorMessage
    });
  }
}

export default function* root() {
  yield all([takeLatest(ADD_BACKEND_DATA, getDashboard)]);
}
