import React from "react";
import { View, Text, TextInput, Keyboard, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLogoStore } from "@/store/store";

const PromptInput = ({
  setIsFocused,
}: {
  setIsFocused: (isFocused: boolean) => void;
}) => {
  const maxLength = 500;
  const { prompt, setPrompt } = useLogoStore((state) => state);
  const onPromptChange = (text: string) => {
    setPrompt(text);
  };
  return (
    <>
      <TextInput
        className="text-white h-44 text-base font-manrope-regular"
        placeholder="A blue lion logo reading 'HEXA' in bold letters"
        placeholderTextColor="#A0A0A0"
        multiline
        value={prompt}
        onChangeText={onPromptChange}
        maxLength={maxLength}
        textAlignVertical="top"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        enterKeyHint="done"
        onSubmitEditing={() => Keyboard.dismiss()}
        submitBehavior="submit"
      />
      <View className="flex-row justify-between items-center">
        <Text className="text-[#71717A] text-left mt-1 font-manrope-regular text-xs">
          {prompt.length}/{maxLength}
        </Text>
        <Pressable onPress={() => onPromptChange("")}>
          <AntDesign name="close" size={18} color="white" />
        </Pressable>
      </View>
    </>
  );
};

export default PromptInput;
