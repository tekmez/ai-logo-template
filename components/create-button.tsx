import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Stars from "@/assets/icons/stars";
import { useLogoService } from "@/hooks/useLogoService";
import { useLogoStore, useStateChipStore } from "@/store/store";

export default function CreateButton() {
  const { selectedStyle, setLogoId, setLogoUrl, prompt } = useLogoStore(
    (state) => state
  );
  const { setState } = useStateChipStore((state) => state);
  const { generateLogo, addLogo } = useLogoService();
  const handleCreate = async () => {
    if (!prompt) {
      return;
    }
    setState("loading");
    const styledPrompt =
      selectedStyle === "No Style"
        ? prompt
        : `${prompt} in ${selectedStyle} style`;
    const logo = await generateLogo(styledPrompt);
    if (logo) {
      const addedLogo = await addLogo({
        prompt: styledPrompt,
        logoUrl: logo,
        style: selectedStyle,
        createdAt: new Date(),
      });
      if (addedLogo) {
        setLogoId(addedLogo);
        setLogoUrl(logo);
        setState("success");
      }
    } else {
      setState("error");
    }
  };
  return (
    <View
      className={`mt-auto ${
        Platform.OS === "android" ? "mb-safe-or-20" : "mb-safe-or-12"
      } px-6 pb-6 pt-3`}
    >
      <TouchableOpacity
        onPress={handleCreate}
        className="rounded-full overflow-hidden"
      >
        <LinearGradient
          colors={["rgba(41, 56, 220, 1)", "rgba(148, 61, 255, 1)"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View className="flex-row items-center justify-center p-4 gap-3">
            <Text className="text-white text-lg mr-2 font-manrope-extrabold">
              Create
            </Text>
            <Stars />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
