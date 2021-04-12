import {call, put, takeLatest} from 'redux-saga/effects';
import Actions from './Actions';
import Constants from './Constants';
import Api from '../../Utils/Api';

function* getWeather(action) {
  try {
    const {data} = yield call(
      Api.get,
      `/api/weather?currentCityId=${action.payload.currentCityId}`,
    );

    yield put(Actions.getWeatherSuccess(data));
  } catch (error) {
    yield put(Actions.getWeatherFail(error));
  }
}

export default function* WeatherSaga() {
  yield takeLatest(Constants.GET_WEATHER, getWeather);
}
