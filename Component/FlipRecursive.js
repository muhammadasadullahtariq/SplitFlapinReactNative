import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated, Text, Easing} from 'react-native';
import array from './array';
let ind = 6;
export default function (props) {
  let spinValue = new Animated.Value(0);
  const [index, setIndex] = useState({index: 2});
  const [state, setstate] = useState('0deg');
  const [first, setFirst] = useState(array[0]);
  const [second, setSecond] = useState(array[1]);
  const [target, setTarget] = useState(props.target);
  const [flag, setFlag] = useState(true);
  const [obg, setObj] = useState({index: 0, ch: 'A'});
  const asad = () => {
    console.log(ind);
    setSecond(array[ind]);
  };
  function createAnim() {
    // setIndex(previous => {
    //   return {index: previous.index + 1};
    // });
    Animated.sequence([
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
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
      // setIndex(previous => {
      //   return {index: previous.index+1};
      // });
      console.log(obg);
      //setSecond(array[index.index]);
      setObj(
        pre => {
          return {index: pre.index + 1, ch: array[pre.index]};
        }
      );
    });
  }
  function createAnimation() {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      ind = ind + 1;
      setSecond(Array[ind]);
      console.log('asad');
      Animated.timing(spinValue, {
        duration: 0,
        toValue: 0,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        console.log('second');
        if (target != second) createAnimation();
      });
    });
  }
  // () => {
  //   // Logic whenever an iteration finishes...
  //   console.log('Asad');
  //   createAnimation();
  // };
  // const fun = () => {
  //   Animated.timing(spinValue, {
  //     toValue: 1,
  //     duration: 1000,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //     onComplete: () => setSecond(target),
  //   }).start();
  // };
  useEffect(() => {
    //if (target != second) {
    // setIndex(previous => {
    //   return {index: previous.index + 1};
    // });
    console.log('hey');
    createAnim();
    //setFlag(false);
    //}
    // Animated.sequence([
    //   Animated.loop(
    //     Animated.timing(spinValue, {
    //       toValue: 1,
    //       duration: 100,
    //       easing: Easing.linear,
    //       useNativeDriver: true,
    //       onComplete: () => setSecond(target),
    //     }),
    //     {iterations: 5},
    //   ),
    //   Animated.timing(spinValue, {
    //     toValue: 1,
    //     duration: 1000,
    //     easing: Easing.linear,
    //     useNativeDriver: true,
    //   }),
    // ]).start();
  }, [obg]);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });
  const spin2 = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  return (
    <View>
      <Animated.View style={[styles.topStyle, {transform: [{rotateX: spin2}]}]}>
        <Text style={styles.topDownStyle}>{obg.ch}</Text>
      </Animated.View>
      <Animated.View style={[styles.topStyle]}>
        <Text style={styles.bottomUpStyle}>{obg.ch}</Text>
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
