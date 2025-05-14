import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Loading from "./loading";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useStateChipStore, useLogoStore } from "@/store/store";
import { router } from "expo-router";

interface TextContentProps {
  title: string;
  subtitle: string;
  classNameSubtitle?: string;
}

const TextContent = ({
  title,
  subtitle,
  classNameSubtitle,
}: TextContentProps) => {
  return (
    <View className="ml-3 flex-1">
      <Text className="text-white font-manrope-extrabold text-base">
        {title}
      </Text>
      <Text
        className={`text-white text-sm mt-0.5 font-manrope-regular ${classNameSubtitle}`}
      >
        {subtitle}
      </Text>
    </View>
  );
};

// Loading state chip
const LoadingChip = () => (
  <LinearGradient
    colors={["#27272A", "#943DFF", "#2938DC"]}
    start={{ x: 0, y: 2 }}
    end={{ x: 20, y: 10 }}
    style={{
      borderRadius: 16,
      marginBottom: 12,
    }}
  >
    <View className="flex-row items-center py-3 rounded-2xl h-[70px]">
      <View className="justify-center items-center bg-[#18181B] w-[70px] h-[70px]">
        <Loading />
      </View>
      <TextContent
        title="Creating Your Design..."
        subtitle="Ready in 30 seconds"
        classNameSubtitle="text-gray-400"
      />
    </View>
  </LinearGradient>
);

// Success state chip
interface SuccessChipProps {
  imageUrl?: string;
  onPress?: () => void;
}

const SuccessChip = ({ imageUrl, onPress }: SuccessChipProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <LinearGradient
      colors={["#2938DC", "#943DFF"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 16,
        marginBottom: 12,
      }}
    >
      <Pressable
        className="flex-row items-center py-3 rounded-2xl h-[70px]"
        onPress={onPress}
      >
        {imageUrl ? (
          <>
            <Image
              source={imageUrl}
              contentFit="cover"
              style={styles.chipImage}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
            />
            {/* Loading state while image is loading */}
            {loading && (
              <View className="justify-center items-center w-[70px] h-[70px] absolute top-0 left-0">
                <Loading />
              </View>
            )}
          </>
        ) : (
          <View className="w-[70px] h-[70px] rounded-tl-2xl rounded-bl-2xl bg-white/20" />
        )}
        <TextContent title="Your Design is Ready!" subtitle="Tap to see it." />
      </Pressable>
    </LinearGradient>
  );
};

// Error state chip
interface ErrorChipProps {
  onPress?: () => void;
}

const ErrorChip = ({ onPress }: ErrorChipProps) => (
  <TouchableOpacity
    className="flex-row items-center py-3 rounded-2xl h-[70px] bg-[#EF4444] mb-3"
    onPress={onPress}
    disabled={!onPress}
  >
    <View className="w-[70px] h-[70px] rounded-tl-2xl rounded-bl-2xl bg-[#F58E8E] justify-center items-center">
      <MaterialIcons name="error" size={32} color="white" />
    </View>
    <TextContent
      title="Oops, something went wrong!"
      subtitle="Click to try again."
    />
  </TouchableOpacity>
);

// Main state chip
export default function StateChip() {
  const { state, setState } = useStateChipStore((state) => state);
  const { logoUrl, logoId, clearLogo } = useLogoStore((state) => state);
  // Render the correct component based on the state
  const handleSuccessPress = async () => {
    await router.push(`/details/${logoId}`);
    setState(null);
    clearLogo();
  };
  switch (state) {
    case "loading":
      return <LoadingChip />;
    case "success":
      return (
        <SuccessChip
          imageUrl={logoUrl ?? undefined}
          onPress={handleSuccessPress}
        />
      );
    case "error":
      return <ErrorChip onPress={() => router.push("/")} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  chipImage: {
    width: 70,
    height: 70,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
});
