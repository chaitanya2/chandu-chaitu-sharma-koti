import { all, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_BACKEND_DATA,
  ADD_BACKEND_DATA_SUCCESS,
  ADD_BACKEND_DATA_FAILURE
} from '../constants/constants';
import Axios from 'axios';

export function* getDashboard() {
  try {
    debugger;
    console.log('(After Click)4.ADD_BACKEND_DATA in starwarSaga excuted');
    const response = yield Axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    debugger;
    console.log('(After Click)5.Responce came [saga file]');
    yield put({
      type: ADD_BACKEND_DATA_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    let errorMessage = '';
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
  console.log('(Before Click)3.StarwarSaga Executed');
  yield all([takeLatest(ADD_BACKEND_DATA, getDashboard)]);
}
