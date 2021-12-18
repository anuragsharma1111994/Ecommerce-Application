import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../constants';

const Button = ({title, icon, onPress,primary=false}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 50,
          width: SIZES.width * 0.9,
          backgroundColor: primary ? COLORS.primary : COLORS.white ,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:SIZES.radius
        }}>
        <Text
          style={{
            color: primary ? COLORS.white : COLORS.primary ,
            ...FONTS.h4
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
