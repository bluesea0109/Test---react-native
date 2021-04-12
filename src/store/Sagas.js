import {all, fork} from 'redux-saga/effects';

import weather from './Weather/Saga';

function* rootSaga() {
  yield all([fork(weather)]);
}

export default rootSaga;
