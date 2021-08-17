import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated, Text, Easing} from 'react-native';
import Array from './array';

export default function (props) {
  let spinValue = new Animated.Value(0);
  let spinValue2 = new Animated.Value(0);
  const [index, setIndex] = useState(0);
  const [state, setstate] = useState('0deg');
  const [first, setFirst] = useState(Array[0]);
  const [second, setSecond] = useState(Array[1]);
  const [target, setTarget] = useState(props.target);
  const fun = () => {
    setSecond(target);
  };
  useEffect(() => {
    Animated.sequence([
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        {iterations: 90},
      ),
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  const spin = spinValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const spin2 = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  return (
    <View>
      <Animated.View
        style={[
          styles.topStyle,
          {transform: [{rotateX: spin2}, {rotateX: spin}]},
        ]}>
        <Text style={styles.topDownStyle}>{second}</Text>
      </Animated.View>
      <Animated.View style={[styles.topStyle, {transform: [{rotateX: spin}]}]}>
        <Text style={styles.bottomUpStyle}>{second}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  topStyle: {
    height: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  topUpStyle: {alignSelf: 'flex-end', fontSize: 20, marginTop: 12.5},
  topDownStyle: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 12.5,
    transform: [{rotateX: '180deg'}],
  },
  bottomUpStyle: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'white',
    overflow: 'hidden',
    lineHeight: 8.5,
  },
  bottomDownStyle: {
    alignSelf: 'flex-end',
    fontSize: 20,
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 8.5,
    transform: [{rotateX: '180deg'}],
  },
});
