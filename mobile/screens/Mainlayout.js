import React, { useEffect, useRef } from 'react';
import {View, Text, TouchableWithoutFeedback, Image, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import {TabButton} from '../components';
import {COLORS, SIZES} from '../constants';
import icon from '../constants/icon';

import {Profile, Home, Login, OnBoarding, Favorites} from '.';
import {connect} from 'react-redux';
import {setSelectedTab} from '../stores/action/tabAction';
import bottomTabNavigator from '../navigation/BottomTabNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const TabButtom = ({icon, isFoucsed, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{}}>
          <Image
            source={icon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: isFoucsed ? COLORS.primary : COLORS.gray,
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Mainlayout = ({drawerAnimationStyle, setSelectedTab, selectedTab}) => {


  const flatListRef = useRef();
  useEffect(() => {
    setSelectedTab('Home');
  }, []);

  useEffect(() => {
    if (selectedTab == "Home") {
      flatListRef?.current?.scrollToIndex({
        index:0,
        animated:false
      })
    }

    if (selectedTab == "Favorites") {
      flatListRef?.current?.scrollToIndex({
        index:1,
        animated:false
      })
    }

    if (selectedTab == "Profile") {
      flatListRef?.current?.scrollToIndex({
        index:2,
        animated:false
      })
    }

    if (selectedTab == "Delivery") {
      flatListRef?.current?.scrollToIndex({
        index:3,
        animated:false
      })
    }
  }, [selectedTab]);


  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}>
      <View
        style={{
          flex: 1,
        }}>
          <FlatList
          scrollEnabled={false}
          pagingEnabled
          horizontal
          snapToAlignment='center'
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={ [
            {
                id: 0,
                label: "Home",
            },
            {
                id: 1,
                label: "Favorites",
            },
            {
                id: 2,
                label: "Profile",
            },
            {
                id: 3,
                label: "Delivery",
            }
          ]}
          keyExtractor={item => `${item.id}`}
          renderItem={({item,index})=>{
            return(
              <View style={{height:SIZES.height,width:SIZES.width}}>
                  {item.label == "Home" && <BottomTabNavigator/>}
                  {item.label == "Favorites" && <Favorites/>}
                  {item.label == "Profile" && <Profile/>}
                  {item.label == "Delivery" && <Login/>}
              </View>
            )
          }}
          ref={flatListRef}
        />
      </View>
    
    </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mainlayout);
