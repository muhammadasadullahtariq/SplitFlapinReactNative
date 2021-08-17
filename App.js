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
import Flip from './Component/FlipRecursive';

const App = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'skyblue',
      }}>
      <Flip target="C" />
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
