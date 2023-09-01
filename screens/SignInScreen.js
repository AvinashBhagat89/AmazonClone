import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [selectedRadio, setSelectedRadio] = useState();

  // const radioBotton = [
  //   {
  //     id: 1,
  //     name: "Create Account",
  //   },
  //   {
  //     id: 2,
  //     name: "Sign In",
  //     backgroundColor: "white"
  //   },
  // ]

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      {/* Amazon logo */}
      <StatusBar style="light" backgroundColor="black" />
      <View className="items-center justify-center bg-gray-800 mt-5">
        <Image
          source={require("../images/MenuImages/amazon.png")}
          className="w-40 h-10 m-1"
        />
      </View>
      {/* Welcome */}
      <View>
        <Text className="m-3 font-normal text-2xl text-black">Welcome</Text>
      </View>
      {/* Body */}
      <View className="self-center w-80 h-64 bg-white mt-2 rounded-md border border-gray-300 shadow-lg shadow-black">
        {/* {
          radioBotton.map((item,index) => <TouchableOpacity
          key={index}
          onPress={() => setSelectedRadio(item.id)}>
          <View className="flex-row items-center justify-start pl-3 bg-gray-100 h-10">
            <View className="w-8 h-8 border-gray-400 border rounded-full">
              {selectedRadio === item.id ? (
                <View className="w-5 h-5 ml-1 mt-1 rounded-full bg-orange-300 "></View>
              ) : null}
            </View>
            <Text className="font-bold text-center text-sm">
              {"  "}
              {item.name}
            </Text>
            <Text className="font-light"> New to Amazon?</Text>
          </View>
        </TouchableOpacity> )
        } */}
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <View className="flex-row items-center justify-start pl-3 h-10 bg-gray-100">
            <View className=" border-gray-400 border ">
              {selectedRadio === 1 ? (
                <View className="bg-orange-300 "></View>
              ) : null}
            </View>
            <Text className="font-bold text-center text-sm">
              {"  "}
              Create Account.
            </Text>
            <Text className="font-light"> New to Amazon?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <View className="flex-row items-center justify-start pl-3 h-10">
            <View className=" border-gray-400 border">
              {selectedRadio === 2 ? (
                <View className=" bg-orange-300 "></View>
              ) : null}
            </View>
            <Text className="font-bold text-center text-sm">
              {"  "}
              Sign in.
            </Text>
            <Text className="font-light"> Already a customer?</Text>
          </View>
        </TouchableOpacity>
        {/* <TextInput
          className="placeholder-gray-500 w-64 mt-2 ml-5 p-2 h-11 rounded-sm ring-2 ring-gray-300
        focus-visible:ring-gray-500 focus-visible:ring-2 border border-gray-400 border-b-2 border-l-2 border-r-2 text-black"
          placeholder="Enter mobile phone number or email"
        ></TextInput> */}
        <TouchableOpacity>
          <View className="justify-center w-64 h-10 mt-4 ml-5 rounded-lg bg-yellow-400">
          <Text className="text-center text-white font-semibold text-lg">SignIn</Text></View>
        </TouchableOpacity>
        <Text className="p-2 text-xs">
          By continuing, you agree to Amazon's
          <Text className="text-sky-300">{" "}
            Conditions of Use
            <Text className="text-black">{" "}
              and
              <Text className="text-xs text-sky-300">{" "}
                Privacy Notice
              </Text>
            </Text>
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
