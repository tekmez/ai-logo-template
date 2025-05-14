import { View, Text, Pressable } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const DetailHeader = () => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-white text-2xl font-manrope-extrabold">
        Your Design
      </Text>
      <Pressable onPress={() => router.back()}>
        <AntDesign name="close" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default DetailHeader;
