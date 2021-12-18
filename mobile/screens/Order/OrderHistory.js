import React from 'react';
import {View, Text, Image} from 'react-native';
import { Button } from '../../components';
import { COLORS, FONTS } from '../../constants';
import image from '../../constants/image';

const OrderHistory = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
          <Image source={image.NoOrder} style={{
              width:300,
              height:300,
              resizeMode:'contain'
          }}/>
      <Text style={{
          ...FONTS.h2,
          color:COLORS.black
      }}>No History yet</Text>
      <Text style={{
          width:'60%',
          textAlign:'center',
          marginVertical:10,
          ...FONTS.h3
      }}>Hit the orange button down below to Create an order</Text>
      <Button title='Start ordering' primary={true}/>
    </View>
  );
};

export default OrderHistory;
