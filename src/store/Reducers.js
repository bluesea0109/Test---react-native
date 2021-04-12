import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import weather from './Weather/Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // eslint-disable-next-line no-undef
  debug: !!__DEV__,
  blacklist: [],
};

export default persistCombineReducers(persistConfig, {
  weather,
});
