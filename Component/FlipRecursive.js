import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated, Text, Easing, Platform} from 'react-native';
import array from './array';
let ind = 6;
export default function (props) {
  let spinValue = new Animated.Value(0);
  const [target, setTarget] = useState(props.target);
  const [flagState, setStateFlag] = useState({flag: true});
  const [obj, setObj] = useState({index: 1, ch: array[0]});
  function createAnim() {
    if (target == obj.ch) {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 10,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(spinValue, {
          duration: 0,
          toValue: 0,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (target != obj.ch)
          setObj(pre => {
            return {index: pre.index + 1, ch: array[pre.index]};
          });
      });
    }
  }
  useEffect(() => {
    if (props.test != flagState.flag) {
      setStateFlag(() => {
        return {flag: props.test};
      });
      setObj(() => {
        return {index: 1, ch: array[0]};
      });
    }
    createAnim();
  }, [obj, props.test]);
  const spin2 = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  return (
    <View style={{marginLeft: 2}}>
      <Animated.View style={[styles.topStyle, {transform: [{rotateX: spin2}]}]}>
        <Text style={styles.topDownStyle}>{obj.ch}</Text>
      </Animated.View>
      <Animated.View style={[styles.downStyle]}>
        <Text style={styles.bottomUpStyle}>{obj.ch}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  topStyle: {
    height: 18,
    width: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1b1c',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  downStyle: {
    height: 18,
    width: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1b1c',
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  topUpStyle: {alignSelf: 'flex-end', fontSize: 20, marginTop: 12.5},
  topDownStyle: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    ...Platform.select({
      ios: {
        marginBottom: 5,
      },
      android: {
        marginBottom: 4,
      },
    }),
    transform: [{rotateX: '180deg'}],
  },
  bottomUpStyle: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    overflow: 'hidden',
    ...Platform.select({
      ios: {lineHeight: 6},
      android: {
        lineHeight: 6,
      },
    }),
  },
  bottomDownStyle: {
    alignSelf: 'flex-end',
    fontSize: 15,
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 3.5,
    transform: [{rotateX: '180deg'}],
  },
});
