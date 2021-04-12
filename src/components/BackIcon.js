import React from 'react';
import {TouchableWithoutFeedback, Text, View, StyleSheet} from 'react-native';

const BackIcon = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Text style={styles.back}>{`<-`}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  back: {
    display: 'flex',
    alignItems: 'flex-end',
    color: '#fff',
  },
});

export default BackIcon;
