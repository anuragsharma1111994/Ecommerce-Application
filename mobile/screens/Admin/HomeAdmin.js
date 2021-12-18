import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {COLORS, FONTS} from '../../constants';

const HomeAdmin = () => {
    const navigation = useNavigation()
  const [data, setdata] = useState();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:9000/api/products')
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        alert('Something Went Wrong');
      });
  }, []);

  return (
    <View style={{
        flex:1
    }}>
      {/* <FlatList
        // horizontal ={true}
        data={data}
        keyExtractor={item => `${item.product_id}`}
        style={{marginTop: 10}}
        renderItem={({item, index}) => {
          return (
            <Text>{item.name}</Text>
          );
        }}
      /> */}
      <SwipeListView
        data={data}
        renderItem={(data, rowMap) => (
          <View
            style={{
              width: '100%',
              padding: 10,
              backgroundColor: COLORS.white,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Text
              style={{
                ...FONTS.h4,
              }}>
              {data.item.name}$
            </Text>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.black,
              }}>
              {data.item.price}$
            </Text>
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex:1,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                flex:1,
              }}>
              <Text style={{
                    color:COLORS.white,
                    ...FONTS.h3
              }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                height:'100%',
                flex:1,
              }}>
              <Text style={{
                  alignSelf:'flex-end',
                  color:COLORS.white,
                  ...FONTS.h3
              }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('AddAdmin')} style={{
          backgroundColor:COLORS.primary,
          padding:20,
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          width:'100%',
          bottom:0
      }}>
          <Text style={{
              ...FONTS.h3,
              color:COLORS.white
          }}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeAdmin;
