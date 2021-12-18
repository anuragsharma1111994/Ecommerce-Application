import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorites, Home, OrderHistory, Profile} from '../screens';
import {Image} from 'react-native';
import icon from '../constants/icon';
import {COLORS, FONTS} from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: '#F2F2F2',
          elevation: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={icon.HomeFill}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                tintColor: COLORS.primary,
              }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          title: 'Basket',
          headerShown: true,
          headerStyle: {backgroundColor: '#f2f2f2'},
          headerTitleStyle: {...FONTS.h2},
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="OrderHistory"
        options={{
          title: 'Order History',
          headerTitleStyle: {...FONTS.h2},
          headerShown: true,
          headerStyle: {backgroundColor: '#f2f2f2'},
        }}
        component={OrderHistory}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
