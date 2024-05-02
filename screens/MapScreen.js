import { View, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const { height, width } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-full `}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
