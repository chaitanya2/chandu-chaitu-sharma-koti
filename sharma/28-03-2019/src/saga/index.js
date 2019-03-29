import { all, fork } from 'redux-saga/effects';
import starwar from './starwar';

export default function* root() {
  yield all([
    fork(starwar)
  ]);
}
