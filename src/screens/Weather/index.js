import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

import {BackIcon} from '../../components';
import {Header} from 'react-native-elements';
import Selectors from '../../store/Selectors';
import {FahrToCels} from '../../Utils/Converter';

const Weather = ({route, navigation}) => {
  const weatherInfo = useSelector(Selectors.weather.selectWeather);

  const {weather, wind, main} = weatherInfo.result;

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<BackIcon navigation={navigation} />}
        centerComponent={{
          text: route.params.cityName,
          style: {color: '#fff', fontSize: 20},
        }}
      />
      <View style={styles.weatherSection}>
        <Text style={styles.weatherInfo}>{FahrToCels(main.temp)}</Text>
        <Text style={styles.weatherInfo}>{weather[0].main}</Text>
        <Text style={styles.weatherInfo}>{weather[0].description}</Text>
        <Text style={styles.weatherInfo}>{wind.speed} m/sec</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
  },
  weatherSection: {
    marginTop: 20,
  },
  weatherInfo: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Weather;
