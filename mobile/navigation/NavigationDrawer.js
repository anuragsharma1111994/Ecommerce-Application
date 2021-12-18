import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Mainlayout from '../screens/Mainlayout';
import {COLORS, FONTS, SIZES} from '../constants';
import icon from '../constants/icon';
import Animated from 'react-native-reanimated';

import {connect} from 'react-redux';
import {setSelectedTab} from '../stores/action/tabAction';

const Drawer = createDrawerNavigator();

const LineDivider = () => {
  return (
    <View
      style={{
        height: 1,
        width: '70%',
        marginVertical: SIZES.radius,
        marginLeft: SIZES.radius,
        backgroundColor: '#F4F4F8',
        opacity: 0.2,
      }}
    />
  );
};

const CustomDrawerItem = ({label, icon, isFocused, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentWhite1 : null,
      }}>
      <Image
        source={icon}
        style={{
          height: 18,
          width: 18,
          tintColor: COLORS.white,
          resizeMode: 'center',
        }}
      />
      <Text
        style={{...FONTS.h4, color: COLORS.white, marginLeft: SIZES.radius}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const DrawerContentContainer = ({navigation, setSelectedTab, selectedTab}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/* <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icon.Close}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <CustomDrawerItem
            label="Home"
            isFocused={selectedTab == 'Home'}
            onPress={() => {
              setSelectedTab('Home');
              navigation.navigate('MainLayout');
            }}
            icon={icon.Home}
          />
          <LineDivider />
          <CustomDrawerItem
            label="Profile"
            isFocused={selectedTab == 'Profile'}
            onPress={() => {
              setSelectedTab('Profile');

              navigation.navigate('MainLayout');
            }}
            icon={icon.Profile}
          />
          <LineDivider />
          <CustomDrawerItem
            label="Favorites"
            isFocused={selectedTab == 'Favorites'}
            onPress={() => {
              setSelectedTab('Favorites');

              navigation.navigate('MainLayout');
            }}
            icon={icon.Heart}
          />
          <LineDivider />
          <CustomDrawerItem
            label="Delivery"
            isFocused={selectedTab == 'Delivery'}
            onPress={() => {
              setSelectedTab('Delivery');

              navigation.navigate('MainLayout');
            }}
            icon={icon.Bag}
          />
          <LineDivider />
          <CustomDrawerItem
            label="My Orders"
            isFocused={selectedTab == 'My Orders'}
            onPress={() => {
              setSelectedTab('My Orders');

              navigation.navigate('MainLayout');
            }}
            icon={icon.Buy}
          />
          <LineDivider />
          <CustomDrawerItem label="Settings" icon={icon.Setting} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem label="Sign out" icon={icon.Logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const NavigationDrawer = ({selectedTab, setSelectedTab}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <View
        style={{
          width: 70,
          height: 70,
          backgroundColor: '#817EFF',
          position: 'absolute',
          borderRadius: 100,
          opacity: 0.3,
        }}
      />

      <Drawer.Navigator
        initialRouteName="MainLayout"
        useLegacyImplementation={true}
        drawerContent={props => {
          // const progress = useDrawerProgress();
          // console.log(progress)
          return (
            <DrawerContentContainer
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              navigation={props.navigation}
            />
          );
        }}
        screenOptions={{
          drawerType: 'slid',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '60%',
            paddingRight: 20,
            marginTop: 20,
            backgroundColor: 'transparent',
          },
          headerShown: false,
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Drawer.Screen name="Mainlayout">
          {props => {
            const progress = useDrawerProgress();

            const scale = Animated.interpolateNode(progress, {
              inputRange: [0, 1],
              outputRange: [1, 0.8],
            });

            const borderRadius = Animated.interpolateNode(progress, {
              inputRange: [0, 1],
              outputRange: [0, 26],
            });

            const animatedStyle = {borderRadius, transform: [{scale}]};

            return (
              <Mainlayout {...props} drawerAnimationStyle={animatedStyle} />
            );
          }}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer);
