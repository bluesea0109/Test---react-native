import {createSelector} from 'reselect';

const weatherState = state => state.weather;

const selectWeather = createSelector(
  weatherState,
  state => state?.weather ?? {},
);

export default {
  selectWeather,
};
