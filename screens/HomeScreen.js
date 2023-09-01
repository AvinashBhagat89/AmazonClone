import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitleAlign: "center",
            headerShown: false,
        })
    }, [])
  return (
    <SafeAreaView className="bg-cyan-200" style={Platform.OS === "android" ? 40 : 0}>
            <StatusBar style="auto" />
      {/* SearchBar */}
            <TouchableOpacity className="flex-row items-center justify-evenly mb-2 mt-8 relative">
              <TextInput 
              className="placeholder-gray-500 w-80 p-2 h-10 rounded-md ring-2 ring-gray-300 drop-shadow-lg shadow-black
                         focus-visible:ring-gray-500 focus-visible:ring-2 border bg-white border-gray-400 text-black"
                           placeholder="Search Amazon.in"></TextInput>
              <MagnifyingGlassIcon color="black" className="w-2 h-2 absolute"/>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row bg-cyan-100 w-auto h-10 justify-between">
              <View className="ml-2 flex-row items-center justify-start">
                <MapPinIcon size={20} color="black" />
                <Text className="text-black font-normal text-sm">Select the location to see the product availability</Text>
                <ChevronDownIcon size={15} color="black"/>
              </View>
            </TouchableOpacity>

        {/* Body */}
        <ScrollView>
              <View className="flex-1 items-center justify-evenly bg-amber-100">
                <View className="flex-row space-x-2">
                  <TouchableOpacity> 
                    <Image 
                    resizeMode='contain'
                      source={require("../images/box1_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" tblack font-extrabold">Clothing</Text>
                  </TouchableOpacity>
                  <TouchableOpacity> 
                    <Image 
                    resizeMode='contain'
                      source={require("../images/box2_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" text-black font-extrabold">Trimmer</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row space-x-2">
                  <TouchableOpacity> 
                    <Image 
                    resizeMode='contain'
                      source={require("../images/box3_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" text-black font-extrabold">Furniture</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity> 
                    <Image 
                    resizeMode='contain'
                      source={require("../images/box4_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" text-black font-extrabold">SmartPhones</Text>
                  </TouchableOpacity> 
                </View>
                <View className="flex-row space-x-2">
                  <TouchableOpacity> 
                    <Image
                    resizeMode='contain' 
                      source={require("../images/box5_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" text-black font-extrabold">Cosmatic</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity> 
                    <Image
                      resizeMode='contain' 
                      source={require("../images/box6_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" text-black font-extrabold">Pets</Text>
                  </TouchableOpacity> 
                </View>
                <View className="flex-row space-x-2 mb-32">
                  <TouchableOpacity> 
                    <Image 
                      resizeMode='contain'
                      source={require("../images/box7_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" text-black font-extrabold">Toys</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>  
                    <Image 
                      resizeMode='contain'
                      source={require("../images/box8_image.jpg")}
                      className="w-40 h-40 rounded-lg"
                    />
                    <Text className=" text-black font-extrabold">Women </Text>
                  </TouchableOpacity> 
                </View>
              </View>
          </ScrollView>
          
    </SafeAreaView>
  )
}
 
export default HomeScreen