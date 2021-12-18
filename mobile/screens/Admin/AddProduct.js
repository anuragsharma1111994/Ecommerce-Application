import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const AddProduct = () => {
  const [name, setname] = useState('');
  const [desc, setdesc] = useState('');
  const [price, setprice] = useState('');
  const [url, seturl] = useState('');

  const options = {
    method: 'POST',
    url: 'http://10.0.2.2:9000/api/products',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGVzIjpbImFkbWluIl0sImNhcnRfaWQiOjEwLCJpYXQiOjE2Mzk2NDU1OTAsImV4cCI6MTYzOTg2MTU5MH0.TBMxnfxeJd-zk3i2MAc6_D5flJwcoYkze_rTQ-rQtiI',
    },
    data: {
      name: name,
      price: price,
      description: desc,
      image_url: url,
    },
  };

  const handleAddProduct = () => {
    axios
      .request(options) 
      .then(function (response) {
        // handle success
        alert('Product is added');
      })
      .catch(function (error) {
        // handle error
        alert('Product is not added');
      });
  };

  return (
    <View
      style={{
        padding: 20,
        flex: 1,
      }}>
      <Text
        style={{
          ...FONTS.h4,
        }}>
        Name
      </Text>
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: COLORS.white,
          marginTop: 10,
          paddingLeft: 10,
        }}>
        <TextInput
          value={name}
          onChangeText={text => setname(text)}
          style={
            {
              // flex: 1,
              // backgroundColor:'red'
            }
          }
        />
      </View>
      <Text
        style={{
          ...FONTS.h4,
        }}>
        Desciption
      </Text>
      <View
        style={{
          width: '100%',
          height: 90,
          backgroundColor: COLORS.white,
          marginTop: 10,
          paddingLeft: 10,
        }}>
        <TextInput
          value={desc}
          onChangeText={text => setdesc(text)}
          style={
            {
              // flex: 1,
              // backgroundColor:'red'
            }
          }
        />
      </View>
      <Text
        style={{
          ...FONTS.h4,
        }}>
        Price
      </Text>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: COLORS.white,
          marginTop: 10,
          paddingLeft: 10,
        }}>
        <TextInput
          value={price}
          onChangeText={text => setprice(text)}
          style={
            {
              // flex: 1,
              // backgroundColor:'red'
            }
          }
        />
      </View>
      <Text
        style={{
          ...FONTS.h4,
        }}>
        URL
      </Text>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: COLORS.white,
          marginTop: 10,
          paddingLeft: 10,
        }}>
        <TextInput
          value={url}
          onChangeText={text => seturl(text)}
          style={
            {
              // flex: 1,
              // backgroundColor:'red'
            }
          }
        />
      </View>
      <TouchableOpacity
        onPress={handleAddProduct}
        style={{
          backgroundColor: COLORS.primary,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.white,
          }}>
          Add Product
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProduct;
