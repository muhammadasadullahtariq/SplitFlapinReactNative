import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Flip from './FlipRecursive';

export default function screen(props) {
  const [array, setArray] = useState({arr: []});
  const [item, itemState] = useState(props.test);
  useEffect(() => {
    // console.log(item);
    // console.log(props.test);
    // console.log(props.array);
    // let ar = props.array.toUpperCase();
    // console.log(ar);
    // ar = Array.from(ar);
    // setArray(() => {
    //   return {arr: ar};
    // });
    //console.log(ar);
    console.log(props.test + ' Asad');
  }, [props.test]);
  return (
    <View style={Style.viewStyle}>
      {Array.from(props.array).map(item => {
        return <Flip target={item} test={props.test} />;
      })}
    </View>
  );
}

const Style = StyleSheet.create({
  viewStyle: {flexDirection: 'row'},
});
