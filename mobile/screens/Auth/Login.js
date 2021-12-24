import React, {useState} from 'react';
import {View, Text, Image, TextInput, Pressable,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import {COLORS, FONTS, SIZES} from '../../constants';
import icon from '../../constants/icon';
import authService from '../../Services/auth.service';
import axios from 'axios';

const Login = ({navigation}) => {
  const [textEntry, settextEntry] = useState(true);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const storeToken = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      console.log(e)
    }
  }
  // Testing Commit 

  
  
  const handleLoginPress = async () => {
    axios
      .post(
        'http://10.0.2.2:9000/api/auth/login',
        {
            email: email,
            password: password,
        },
      )
      .then(function (response) {
        // handle success
        const { token , user } = response.data;
        if(token){
          storeToken(token)
          navigation.navigate('Home')
        }

      })
      .catch(function (error) {
        // handle error
        alert("Invalid Email Password");
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <LinearGradient
        colors={['#FAB8C3', COLORS.primaryGradient]}
        style={{
          width: 130,
          height: 130,
          borderRadius: 100,
          position: 'absolute',
          top: 0,
          right: 0,
        }}></LinearGradient>
      <View
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          borderRadius: 40,
          backgroundColor: COLORS.primaryGradient,
          justifyContent: 'center',
          alignItems: 'center',
          top: 10,
          left: 40,
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 40,
            backgroundColor: COLORS.primary,
          }}></View>
      </View>
      <View
        style={{
          height: SIZES.height * 0.3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h1,
          }}>
          Welcome back
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            marginTop: 30,
            width: '80%',
          }}>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h2,
            }}>
            Login
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.gray,
                marginRight: 10,
              }}
              source={icon.Email}
            />
            <Text
              style={{
                ...FONTS.h4,
              }}>
              Email
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomColor: COLORS.lightGray1,
              borderBottomWidth: 1,
              //   height: 30,
            }}>
            <TextInput
              placeholder="Enter your Email address"
              value={email}
              onChangeText={text => setemail(text)}
              placeholderTextColor={COLORS.lightGray1}
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                ...FONTS.h4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.gray,
                marginRight: 10,
                resizeMode: 'center',
              }}
              source={icon.Lock}
            />
            <Text
              style={{
                ...FONTS.h4,
              }}>
              Password
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomColor: COLORS.lightGray1,
              borderBottomWidth: 1,
              //   height: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.lightGray1}
              secureTextEntry={textEntry}
              value={password}
              onChangeText={text => setpassword(text)}
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                width: '80%',
                ...FONTS.h4,
              }}
            />
            <Pressable
              onPress={() => {
                settextEntry(!textEntry);
              }}>
              <Text
                style={{
                  color: COLORS.primary,
                  ...FONTS.h4,
                }}>
                {textEntry ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          </View>
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text
              style={{
                marginTop: 10,
                color: COLORS.primary,
                ...FONTS.h4,
              }}>
              Forgot Password ?
            </Text>
          </Pressable>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button title="Login" primary={true} onPress={handleLoginPress} />
            <Pressable onPress={() => navigation.navigate('CreateAccount')}>
              <Text
                style={{
                  color: COLORS.primary,
                  marginTop: 10,
                  ...FONTS.h4,
                }}>
                Create Account
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

// 1 -->>
