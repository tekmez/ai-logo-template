import React from "react";
import { View, Text, FlatList } from "react-native";
import LogoStyleItem from "./logo-style-item";
import { LogoStyle } from "@/types/logo";
import Feather from "@expo/vector-icons/Feather";
const styles: LogoStyle[] = [
  { name: "No Style", icon: <Feather name="slash" size={40} color="white" /> },
  { name: "Monogram", image: require("@/assets/images/monogram.png") },
  { name: "Abstract", image: require("@/assets/images/abstract.png") },
  { name: "Mascot", image: require("@/assets/images/mascot.png") },
];

export default function LogoStyles() {
  return (
    <View className="mb-8">
      <Text className="text-white text-lg font-bold mb-3">Logo Styles</Text>
      <FlatList
        data={styles}
        renderItem={({ item }) => <LogoStyleItem logoStyle={item} />}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      />
    </View>
  );
}
