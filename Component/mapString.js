import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Flip from './FlipRecursive';

export default function screen(props) {
  const [array, setArray] = useState({arr: []});
  useEffect(() => {
    console.log(props.array);
    let ar = props.array.toUpperCase();
    console.log(ar);
    ar = Array.from(ar);
    setArray(() => {
      return {arr: ar};
    });

    //console.log(ar);
  }, []);
  return (
    <View style={Style.viewStyle}>
      {array.arr.map(item => {
        return <Flip target={item} />;
      })}
    </View>
  );
}

const Style = StyleSheet.create({
  viewStyle: {flexDirection: 'row'},
});
