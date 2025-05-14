import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { View } from "react-native";
import InputHeader from "@/components/input-header";
import PromptInput from "./prompt-input";
export default function PromptSection() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="mb-6 mt-3">
      <InputHeader />
      <LinearGradient
        colors={["#27272A", "#943DFF", "#2938DC"]}
        start={{ x: 0, y: 2 }}
        end={{ x: 20, y: 10 }}
        style={{
          borderRadius: 16,
          padding: 12,
          borderWidth: 1,
          borderColor: isFocused ? "white" : "transparent",
        }}
      >
        <PromptInput setIsFocused={setIsFocused} />
      </LinearGradient>
    </View>
  );
}
