/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {transform} from '@babel/core';
import React, {useEffect, useState, forceUpdate} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';
import Flip from './Component/mapString';

const App = () => {
  const fun = () => {
    console.log('Asad');
    return null;
  };
  const [item, setItem] = useState({it: 'AA 682 CHICAGO 830'});
  const [arrayjson, setArray] = useState({
    arr: [
      {id: 'm1', item: 'AA 682 CHICAGO 830'},
      {id: 'm2', item: 'AA 21 PORTLAND 845'},
      {id: 'm3', item: 'OC 851 LOS ANGELES 915'},
      {id: 'm4', item: 'HP 1588 DETROIT 930'},
      {id: 'm5', item: 'OS 77 WICHITA 1030'},
      {id: 'm6', item: 'DL 142 AUSTIN 1105'},
    ],
  });
  const [flagToChange, setFlag] = useState({flag: true});
  useEffect(() => {
    console.log(item);
    fun();
  }, [item]);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#4d4d54',
        flex: 1,
      }}>
      {arrayjson.arr.map(item => {
        return <Flip array={item.item} test={flagToChange.flag} />;
      })}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          setFlag(f => {
            console.log(flagToChange);
            return {flag: !f.flag};
          });
        }}>
        <Text style={[styles.textContainer]}>Refresh</Text>
      </TouchableOpacity>
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
  textContainer: {
    padding: 10,
    backgroundColor: '#2097f5',
    borderRadius: 2,
    color: 'white',marginTop:20
  },
});

export default App;
