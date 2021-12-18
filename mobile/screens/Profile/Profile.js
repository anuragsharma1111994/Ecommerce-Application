import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import icon from '../../constants/icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';


const Profile = () => {
  const navigation = useNavigation()
  const [data, setdata] = useState({
    email: '',
    fullname: '',
    username: '',
  });
  const [token, settoken] = useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      settoken(value);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      console.log(e);
    }
  };

  const options = {
    method: 'GET',
    url: 'http://10.0.2.2:9000/api/users/profile',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    // getData();
    axios
      .request(options)
      .then(response => {
        setdata(response.data);
      })
      .catch(() => {
        alert('Invalid Email Password');
      });
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 30,
      }}>
      <Text
        style={{
          color: 'black',
          ...FONTS.h2,
        }}>
        My Profile
      </Text>

      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: SIZES.radius,
          marginTop: 30,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            backgroundColor: 'red',
            marginTop: -25,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            marginTop: 10,
            ...FONTS.h3,
          }}>
          {data.fullname}
        </Text>
        <Text
          style={{
            fontSize: 16,
            ...FONTS.h4,
          }}>
          {data.email}
        </Text>
        <Text
          style={{
            ...FONTS.h4,
            color: 'black',
          }}>
          {data.username}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
          }}>
          <Image
            source={icon.Location}
            style={{
              width: 25,
              height: 25,
              marginRight: 6,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              marginTop: 10,
              width: '89%',
              ...FONTS.h4,
            }}>
            Address: {data.address}
          </Text>
        </View>
      </View>
      {data.roles == 'admin' ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeAdmin');
          }}
          style={{
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: SIZES.radius,
            marginTop: 20,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.black,
            }}>
            Admin
          </Text>
          <Image
            source={icon.Right}
            style={{
              width: 15,
              height: 15,
              marginRight: 6,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      ) : null}
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: SIZES.radius,
          marginTop: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.black,
          }}>
          Edit Profile
        </Text>
        <Image
          source={icon.Right}
          style={{width: 15, height: 15, marginRight: 6, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: SIZES.radius,
          marginTop: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.black,
          }}>
          Shopping address
        </Text>
        <Image
          source={icon.Right}
          style={{width: 15, height: 15, marginRight: 6, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: SIZES.radius,
          marginTop: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.black,
          }}>
          Order history
        </Text>
        <Image
          source={icon.Right}
          style={{width: 15, height: 15, marginRight: 6, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: SIZES.radius,
          marginTop: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.black,
          }}>
          cards
        </Text>
        <Image
          source={icon.Right}
          style={{width: 15, height: 15, marginRight: 6, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: SIZES.radius,
          marginTop: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.black,
          }}>
          Notification
        </Text>
        <Image
          source={icon.Right}
          style={{width: 15, height: 15, marginRight: 6, resizeMode: 'contain'}}
        />
      </View>
      <View style={{height: 90}} />
    </ScrollView>
  );
};

export default Profile;
