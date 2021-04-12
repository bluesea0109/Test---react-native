import Constants from './Constants';

const getWeather = currentCityId => ({
  payload: {currentCityId},
  type: Constants.GET_WEATHER,
});

const getWeatherSuccess = res => ({
  payload: res,
  type: Constants.GET_WEATHER_SUCCESS,
});

const getWeatherFail = res => ({
  payload: res,
  type: Constants.GET_WEATHER_FAIL,
});

export default {
  getWeather,
  getWeatherSuccess,
  getWeatherFail,
};
