import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [EmailId, setEmailId] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [PinCode, setPinCode] = useState("");
  return (
    <View className="flex-auto items-center justify-evenly bg-gray-600">
      <View className="">
        <Text className="font-medium text-xl pb-2 text-[#00CDE1]">Country</Text>
        <Text className="flex-row text-left pl-4 w-80 h-13 font-medium text-lg bg-white border border-gray-500 rounded">
          India
        </Text>
      </View>
      <View>
        <Text className="font-medium text-xl pb-2 text-[#00CDE1]">
          Email ID
        </Text>
        <TextInput
          placeholder="Email ID"
          keyboardAppearance="light"
          className="flex-row text-left pl-4 w-80 h-13 bg-white border rounded"
        />
      </View>
      <View>
        <Text className="font-medium text-xl pb-2 text-[#00CDE1]">
          Name
        </Text>
        <TextInput
          placeholder="Name"
          keyboardAppearance="light"
          className="flex-row text-left pl-4 w-80 h-13 bg-white border rounded"
        />
      </View>
      <View>
        <Text className="font-medium text-xl pb-2 text-[#00CDE1]">
          Phone No.
        </Text>
        <TextInput
          placeholder="Phone No."
          keyboardAppearance="light"
          className="flex-row text-left pl-4 w-80 h-13 bg-white border rounded"
        />
      </View>
      <View>
        <Text className="font-medium text-xl pb-2 text-[#00CDE1]">
          Address
        </Text>
        <TextInput
          placeholder="Example 203, Lajpat Nagar, Delhi"
          keyboardAppearance="light"
          className="flex-row text-left pl-4 w-80 h-13 bg-white border rounded"
        />
      </View>
      <View>
        <Text className="font-medium text-xl pb-2 text-[#00CDE1]">
          Landmark
        </Text>
        <TextInput
          placeholder="Example Near Bus Stant"
          keyboardAppearance="light"
          className="flex-row text-left pl-4 w-80 h-13 bg-white border rounded"
        />
      </View>
      <View>
        <Text className="font-medium text-xl pb-2 text-[#00CDE1]">
          Pin Code
        </Text>
        <TextInput
          placeholder="Postal Code, Area Code"
          keyboardAppearance="light"
          className="flex-row text-left pl-4 w-80 h-13 bg-white border rounded"
        />
      </View>
      <TouchableOpacity>
        <Text className="text-center pt-2 w-60 bg-yellow-300 h-9 border rounded-lg">
          Submit
        </Text>
      </TouchableOpacity>
      <Text className="border border-gray-500 h-0 w-96" />
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <Text className="text-gray-400">I already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
