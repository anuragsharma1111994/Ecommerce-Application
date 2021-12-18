import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from './constants';
import {
  AddProduct,
  CreateAccount,
  Favorites,
  GetProductInfo,
  HomeAdmin,
  Login,
  Mainlayout,
  OnBoarding,
  OrderHistory,
  Profile,
} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import NavigationDrawer from './navigation/NavigationDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './stores/store';
import {Provider} from 'react-redux';
import axios from 'axios';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'OnBoarding'}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Home" component={NavigationDrawer} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          <Stack.Screen
            name="Favorites"
            options={{
              headerShown: false,
            }}
            component={Favorites}
          />
          <Stack.Screen
            name="GetInfo"
            options={{
              headerShown: true,
              title: ' ',
              headerStyle: {backgroundColor: COLORS.white},
              headerTitleStyle: {...FONTS.h3},
            }}
            component={GetProductInfo}
          />
          <Stack.Screen
            name="HomeAdmin"
            options={{
              headerShown: true,
              title: 'Admin',
              headerStyle: {backgroundColor: '#f2f2f2'},
              headerTitleStyle: {...FONTS.h3},
            }}
            component={HomeAdmin}
          />
          <Stack.Screen
            name="AddAdmin"
            options={{
              headerShown: true,
              title: 'Add Product',
              headerStyle: {backgroundColor: '#f2f2f2'},
              headerTitleStyle: {...FONTS.h3},
            }}
            component={AddProduct}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
