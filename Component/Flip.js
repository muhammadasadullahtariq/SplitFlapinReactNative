import React from 'react';
import {StyleSheet} from 'react-native';

export default function () {}

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
    lineHeight: 8.5,
    transform: [{rotateX: '180deg'}],
  },
});
