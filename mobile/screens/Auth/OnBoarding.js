import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../components';
import {COLORS, FONTS, images, SIZES} from '../../constants';

const OnBoarding = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
      }}>
      <Text
        style={{
          ...FONTS.h1,
          color: COLORS.white,
        }}>
        Find Your Gadgets
      </Text>
      <Image source={images.OnBoarding} style={{
            width:SIZES.width * 0.9,
            height:SIZES.height * 0.5,
            resizeMode:'contain'
          }}/>
      <Button onPress={()=>navigation.replace('Login')} title="Get Started" />
    </View>
  );
};

export default OnBoarding;
