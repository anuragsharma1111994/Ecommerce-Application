import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import image from '../constants/image';

import { useNavigation } from '@react-navigation/core';


const ItemComponent = ({title, imgae, id,price}) => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('GetInfo',{id})}
      style={{
        backgroundColor: COLORS.white,
        marginVertical: 10,
        padding: 10,
        borderRadius: SIZES.radius,
        // justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Image
        source={image.Iphone}
        style={{
          width: 60,
          height: 60,
          resizeMode: 'contain',
        }}
      />
      <View>
        <Text style={{
            color:COLORS.darkGray,
            ...FONTS.h4
        }}>{title}</Text>
        <Text style={{
            color:COLORS.black,
            ...FONTS.h4
        }}>Price - {price} $</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemComponent;
