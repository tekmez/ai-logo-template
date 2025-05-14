import { useLogoStore } from "@/store/store";
import { View, Text, TouchableOpacity } from "react-native";

const prompts = [
  "A futuristic tech startup logo with a glowing neon gradient, minimal symbol, and sharp typography.",
  "A hand-drawn, playful logo for a kids’ brand with pastel colors and quirky characters.",
  "A luxury fashion brand logo in black and gold, with elegant serif letters and a monogram icon.",
  "A vintage coffee shop logo with retro badges, warm colors, and classic fonts.",
  "A bold esports team logo with a fierce animal mascot, vibrant colors, and dynamic typography.",
  "A geometric animal logo in a modern polygonal style with bold colors.",
  "A vintage-inspired logo with textured typography and classic emblem shapes.",
  "A minimalist black and white logo using negative space to create a hidden symbol.",
  "A colorful abstract logo representing innovation and creativity with fluid shapes.",
  "A hand-lettered artisanal logo for a small craft brand, with natural textures and warm tones.",
];

const InputHeader = () => {
  const { setPrompt } = useLogoStore((state) => state);
  // Get random prompt
  const handleSurpriseMe = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(randomPrompt);
  };
  return (
    <View className="flex-row justify-between items-center mb-3">
      <Text className="text-white text-2xl font-manrope-extrabold">
        Enter Your Prompt
      </Text>
      <TouchableOpacity onPress={handleSurpriseMe}>
        <View className="flex-row items-center gap-2">
          <Text className="font-manrope-regular">🎲</Text>
          <Text className="font-manrope-regular text-white">Surprise me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;
