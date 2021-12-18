import React from 'react'
import { View, Text, TouchableWithoutFeedback, Animated, Image } from 'react-native'
import { COLORS } from '../constants'

const TabButton = ({
    label,
    icon,
    isFoucsed,
    onPress,
    outerContainerStyle,
    innerContainerStyle,
}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          outerContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}>
          <Image
            source={icon}
            style={{
              width: 18,
              height: 18,
              tintColor: isFoucsed ? COLORS.white : COLORS.gray,
            }}
          />
          {isFoucsed && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h4,
              }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
    )
}

export default TabButton
