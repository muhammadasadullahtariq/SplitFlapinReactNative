/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {transform} from '@babel/core';
import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
} from 'react-native';

const App = () => {
  const [state, setstate] = useState('0deg');
  useEffect(() => {
    for (let i = 0; i < 180; i++) {
      setTimeout(() => {
        let j = i + 'deg';
        setstate(j);
      }, 25 * i);
    }
  }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={[styles.topStyle, {transform: [{rotateX: state}]}]}>
        <Text style={{alignSelf: 'flex-end', fontSize: 20, marginTop: 12.5}}>
          A
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 20,
            marginBottom: 12.5,
            transform: [{rotateX: '180deg'}],
          }}>
          F
        </Text>
      </Animated.View>
      <Animated.View
        style={[styles.topStyle, , {transform: [{rotateX: state}]}]}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 20,
            overflow: 'hidden',
            lineHeight: 8.5,
          }}>
          A
        </Text>
        <Text
          style={{
            alignSelf: 'flex-end',
            fontSize: 20,
            overflow: 'hidden',
            lineHeight: 8.5,
            transform: [{rotateX: '180deg'}],
          }}>
          F
        </Text>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  topStyle: {
    height: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
});

export default App;
