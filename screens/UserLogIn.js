import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const UserLogIn = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center",
            headerShown: true,
            headerStyle: {
                backgroundColor: '#A5F3FC',
            }
        })
    }, [])
  return (
    <View>
      <Text>UserLogIn</Text>
    </View>
  )
}

export default UserLogIn