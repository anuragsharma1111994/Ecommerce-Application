import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import image from '../../constants/image';

const GetProductInfo = ({route}) => {
  const {id} = route.params;
  const [data, setdata] = useState({
    avg_rating: null,
    count: '0',
    description: '',
    image_url: '',
    name: '',
    price: 0,
    product_id: 0,
  });

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:9000/api/products/${id}`)
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        alert('Something Went Wrong');
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <Text>{data.name}</Text> */}
      <View
        style={{
          height: SIZES.height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
        }}>
        <Image
          source={image.Iphone}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          {data.name}
        </Text>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.black,
            marginTop: 20,
          }}>
          Description
        </Text>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.gray,
          }}>
          {data.description}
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.gray,
            }}>
            Price
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
            }}>
            $ {data.price}
          </Text>
        </View>
        <View style={{
          marginTop:20
        }}>
          <Button title="Add to basket" primary={true} />
        </View>
      </View>
    </View>
  );
};

export default GetProductInfo;
