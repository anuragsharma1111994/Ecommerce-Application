import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import icon from '../../constants/icon';
import axios from 'axios';
import ItemComponent from '../../components/ItemComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();



const Home = ({navigation}) => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log(value)
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      console.log(e)
    }
  }
  

  useEffect(() => {
    axios
      .get('http://10.0.2.2:9000/api/products')
      .then(function (response) {
        setdata(response.data);
        const token = getData();
        console.log(token)
      })
      .catch(function (error) {
        // handle error
        alert('Something Went Wrong');
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2', padding: 20}}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback>
          <Image
            source={icon.NavBtn}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.gray,
              resizeMode: 'contain',
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            height: 55,
            width: '80%',
            borderWidth: 1,
            borderColor: COLORS.lightGray1,
            borderRadius: 100,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.gray2,
              marginLeft: 20,
            }}>
            Search
          </Text>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            ...FONTS.h1,
            width: '70%',
            color: COLORS.black,
          }}>
          Order online collect in store
        </Text>
      </View>
      <FlatList
        // horizontal ={true}
        data={data}
        keyExtractor={item => `${item.product_id}`}
        style={{marginTop:10}}
        renderItem={({item, index}) => {
          return <ItemComponent title={item.name} id={item.product_id} imgae={item.image_url} price={item.price}/>;
        }}
      />
    </View>
  );
};

export default Home;
