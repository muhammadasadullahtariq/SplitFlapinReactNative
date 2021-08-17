import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated, Text} from 'react-native';
import Array from './array';

export default function (props) {
  const [index, setIndex] = useState(0);
  const [state, setstate] = useState('0deg');
  const [first, setFirst] = useState(Array[0]);
  const [second, setSecond] = useState(Array[1]);
  const [target, setTarget] = useState(props.target);
  useEffect(() => {
    let i = 0;
    console.log(target);
    console.log(first);
    console.log(second);
    if (first != target) {
      console.log('asad');
      for (i = 0; i < 180; i++) {
        setTimeout(() => {
          let j = i + 'deg';
          setstate(j);
        }, 45 * i);
      }
    }
  }, [index]);
  return (
    <View>
      <Animated.View style={[styles.topStyle, {transform: [{rotateX: state}]}]}>
        <Text style={styles.topUpStyle}>{first}</Text>
        <Text style={styles.topDownStyle}>{second}</Text>
      </Animated.View>
      <Animated.View
        style={[styles.topStyle, , {transform: [{rotateX: state}]}]}>
        <Text style={styles.bottomUpStyle}>{first}</Text>
        <Text style={styles.bottomDownStyle}>{second}</Text>
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
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  topUpStyle: {alignSelf: 'flex-end', fontSize: 20, marginTop: 12.5},
  topDownStyle: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 12.5,
    transform: [{rotateX: '180deg'}],
  },
  bottomUpStyle: {
    alignSelf: 'flex-start',
    fontSize: 20,
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
