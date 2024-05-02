import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "456",
    title: "Uber XL",
    multiplier: 1.3,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "789",
    title: "Uber LUX",
    multiplier: 2.2,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      {/* <ScrollView> */}
      <View style={tw`flex flex-row justify-between items-center mt-5 px-10`}>
        <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl font-semibold `}>
          Select a Ride.
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between px-10 items-center ${
              item.id === selected?.id ? "bg-gray-200" : ""
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>Travel time ...</Text>
            </View>
            <Text style={tw`text-xl`}>$999</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${selected ? "" : "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
