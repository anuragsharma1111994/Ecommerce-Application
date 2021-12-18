import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import image from '../../constants/image';

const Favorites = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{padding: 10, backgroundColor: '#D3F2FF', borderRadius: 10}}>
        <Text
          style={{
            ...FONTS.h5,
            color: COLORS.black,
          }}>
          Delivery for FREE until the end of the month
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          backgroundColor: COLORS.white,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={image.Iphone}
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
          }}
        />
        <View>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
            }}>
            2020 Apple iPad Air 10.9
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
            }}>
            $ 2020
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
            }}>
            Quantity
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 'auto',
          width: '80%',
          marginBottom: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            alignItems: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
            }}>
            Total
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
            }}>
            $ 954
          </Text>
        </View>
        <Button title="Checkout" primary={true} />
      </View>
    </View>
  );
};

export default Favorites;
