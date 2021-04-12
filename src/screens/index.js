import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import HomeScreen from './Home';
import WeatherScreen from './Weather';

const Stack = createStackNavigator();

const HorizontalTransition = Platform.select({
  ios: TransitionPresets.SlideFromRightIOS,
  android: TransitionPresets.DefaultTransition,
});

function HomeStackScreen() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{...HorizontalTransition, headerShown: false}}>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Main = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default Main;
