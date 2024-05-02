import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
const NavFavourites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Meet Nagar, Saboli, Delhi, India",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "Kashmiri Gate, Delhi, India",
    },
  ];
  return (
    <FlatList
      style={tw`bg-white`}
      data={data}
      keyExtractor={(item) => item.id}
      item
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            color={"white"}
            type="ionicon"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
