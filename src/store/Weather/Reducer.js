import AsyncStorage from '@react-native-community/async-storage';

import Constants from './Constants';

const initialState = {
  weather: null,
  loading: null,
  error: null,
};

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_WEATHER:
      return {...state, loading: action.type, error: {}};

    case Constants.GET_WEATHER_SUCCESS:
      return {...state, weather: action.payload, loading: ''};

    case Constants.GET_WEATHER_FAIL:
      return {...state, loading: '', error: action.payload};

    default:
      return state;
  }
};

export default WeatherReducer;
