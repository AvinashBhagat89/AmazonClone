import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "react-native-heroicons/solid";

const SettingArray = [
  { id: "1", value: "Country & Language"},
  { id: "2", value: "Notification" },
  { id: "3", value: "Language" },
  { id: "4", value: "Permissions" },
  { id: "5", value: "Default Purchase Settings" },
  { id: "6", value: "Legal & About" },
];

const SettingScreen = () => {
  const navigation = useNavigation();
  const [selectedSetting, setSelectedSetting] = useState("Settings");
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(SettingArray);
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    if(item.value === selectedId) {
      onPress={setSelectedId}
    }
    else {
      console.error("Item is not selected")
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-cyan-200">
      {/* Header */}
      <TouchableOpacity className="flex-row items-center justify-evenly mb-2 mt-8 relative">
        <TextInput
          className="placeholder-gray-500 w-80 p-2 h-10 rounded-md ring-2 ring-gray-300 drop-shadow-lg shadow-black
                         focus-visible:ring-gray-500 focus-visible:ring-2 border bg-white border-gray-400 text-black"
          placeholder="Search Amazon.in"
        ></TextInput>
        <MagnifyingGlassIcon color="black" className="w-2 h-2 absolute" />
      </TouchableOpacity>

      {/* Body */}
      <ScrollView>
        <View className="flex-1 items-center space-y-3 justify-center bg-cyan-200 mb-28">
          <View
            className="flex-row items-center justify-between space-x-9 bg-white p-4 rounded-lg drop-shadow-2xl shadow-black
                       border border-slate-400"
          >
            <TouchableOpacity>
              <Image
                resizeMode='cover'
                source={require("../images/amazonPay.png")}
                className="w-36 h-14 rounded-lg"
              />
              <Text className="text-center text-gray-500 font-semibold">
                Amazon Pay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode='stretch'
                source={require("../images/amazonVideo.png")}
                className="w-36 h-14 rounded-lg"
              />
              <Text className="text-center text-gray-500 font-semibold">
                Mini TV
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row space-x-3 items-center justify-between">
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Prime
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/Prime.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Deals and Savings
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/DealsSavings.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text numberOfLines={2} className=" text-black font-medium absolute text-center z-20">
                  Mobile & Electronic Devices
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/MobileElectronicDevices.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row space-x-3 items-center justify-between">
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Fashion & Beauty
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/FashionBeauty.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Groceries & Pet Supplies
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/Groceries.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Health & Personal Care
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/Health.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row space-x-3 items-center justify-between">
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Home, Furniture & Appliances
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/Furniture.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Music, Video & Gaming
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/MusicVideoGame.jpg")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text numberOfLines={1} className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  FunZone and Inspiration
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/FunZone.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row space-x-3 items-center justify-between">
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Books & Education
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/StoryBook.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Toy, Children and Baby
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/ChildrenToys.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Payments and Bookings
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/PaymentBooking.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row space-x-3 items-center justify-between">
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Automotive
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/Automotive.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Office Work and Professional
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/Professional.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Sports, Outdoor & Travel
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/SportsTravel.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row space-x-3 items-center justify-between">
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Gifting
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/Gifting.jpg")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Sell on Amazon
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/SellOnAmazon.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg shadow-lg shadow-black border border-slate-400">
              <TouchableOpacity>
                <Text className=" text-black font-medium absolute text-center z-20">
                  {" "}
                  Your Things
                </Text>
                <Image
                  resizeMode='contain'
                  source={require("../images/MenuImages/YourThings.png")}
                  className="w-28 h-32 rounded-lg relative mt-3"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="space-y-7 flex-col pt-5">
            <View className="space-y-3">
                <TouchableOpacity
                  onPress={() => {
                    setIsClicked(!isClicked);
                  }}
                  >
                  <View className="items-end pr-3 justify-center">
                    <Text className="absolute bg-white font-medium text-base p-2 pl-7 border border-slate-400 drop-shadow-lg shadow-black rounded-lg h-10 w-80">
                      {selectedSetting}
                    </Text>
                    {isClicked ? (
                      <ChevronDownIcon size={20} color="black" />
                    ) : (
                      <ChevronUpIcon size={20} color="black" />
                    )}
                  </View>
                </TouchableOpacity>
                {isClicked ? (
                  <View className="w-80 h-60 p-2 border border-slate-400 rounded-lg bg-white shadow-lg shadow-black">
                    <FlatList
                      data={data}
                      // Here the ScrollView & FlatList is vertically oriented and throw error of VirtualizedLists
                      // should never be nested inside plain ScrollViews with the same orientation.
                      // To solve the error use scrollEnabled {false}
                      scrollEnabled={false}
                      renderItem={({ item, index }) => {
                        return <TouchableOpacity
                        className="w-72 h-10 self-center border-b-0 border-slate-50">
                          <Text className="font-medium text-base">{item.value}</Text>
                        </TouchableOpacity>
                        }}
                    />
                  </View>
                ) : null}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("CustomerService")}>
              <View className="items-end mt-2 pr-3 justify-center">
                <Text className="absolute bg-white font-medium text-base p-2 pl-7 border border-slate-400 drop-shadow-lg shadow-black rounded-lg h-10 w-80">
                  Customer Service
                </Text>
                <ChevronRightIcon size={20} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <View>
                <Text className="bg-white font-medium text-base p-2 pl-7 border border-slate-400 drop-shadow-lg shadow-black rounded-lg h-10 w-80">
                  SignIn
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <Input 
          InputLeftElement = {

          }
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
