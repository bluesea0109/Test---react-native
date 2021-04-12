import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {cityOptions} from '../../constants';

import Actions from '../../store/Actions';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [cityId, setCityId] = useState(null);

  const _goToWeather = item => {
    setCityId(item.id);

    navigation.navigate('Weather', {cityId: item.id, cityName: item.name});
  };

  useEffect(() => {
    dispatch(Actions.weather.getWeather(cityId));
  }, [cityId, dispatch]);

  const _renderItem = ({item}) => (
    <View>
      <Button
        title={item.name}
        style={styles.button}
        onPress={() => _goToWeather(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: 'Weader App',
          style: {color: '#fff', fontSize: 20},
        }}
      />
      <FlatList
        data={cityOptions}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
  },
  list: {width: '100%'},
  button: {},
});

export default Home;
