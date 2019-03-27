import { all, fork } from 'redux-saga/effects';
import starwar from './starwarSaga';

export default function* root() {
  console.log('(Before Click)2.RootSaga Executed');
  yield all([fork(starwar)]);
}
