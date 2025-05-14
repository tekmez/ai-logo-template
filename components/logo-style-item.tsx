import { View, Text, Pressable, StyleSheet } from "react-native";
import { LogoStyle } from "@/types/logo";
import { useLogoStore } from "@/store/store";
import { Image } from "expo-image";
export default function LogoStyleItem({ logoStyle }: { logoStyle: LogoStyle }) {
  const { selectedStyle, setSelectedStyle } = useLogoStore();
  return (
    <Pressable onPress={() => setSelectedStyle(logoStyle.name)}>
      <View
        className={`justify-center items-center w-[90px] h-[90px] border-2 rounded-2xl mb-[6px] ${
          logoStyle.name === selectedStyle
            ? "border-white"
            : "border-transparent"
        } 
        ${logoStyle.name === "No Style" ? "bg-[#5462d1]/30" : ""}
        `}
      >
        {logoStyle.image ? (
          <Image
            source={logoStyle.image}
            style={styles.logoStyleImage}
            contentFit="cover"
          />
        ) : (
          logoStyle.icon
        )}
      </View>
      <Text
        className={`text-sm mt-1 text-center ${
          logoStyle.name === selectedStyle
            ? "text-white font-manrope-bold"
            : "text-[#71717A] font-manrope-regular"
        }`}
      >
        {logoStyle.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  logoStyleImage: {
    width: 86,
    height: 86,
    borderRadius: 12,
  },
});
