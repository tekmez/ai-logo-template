import React from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import BgGradient from "@/components/bg-gradient";
import { Image } from "expo-image";
import DetailPrompt from "@/components/details/detail-prompt";
import DetailHeader from "@/components/details/detail-header";
import { useEffect, useState } from "react";
import { useLogoService } from "@/hooks/useLogoService";
import { useLocalSearchParams } from "expo-router";
import { Logo } from "@/types/logo";
import Loading from "@/components/loading";
export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [logo, setLogo] = useState<Logo | null>(null);
  const { getLogo } = useLogoService();
  const [isLoading, setIsLoading] = useState(true);
  const handleGetLogo = async () => {
    const { logo } = await getLogo(id as string);
    setLogo(logo);
    setIsLoading(false);
  };
  useEffect(() => {
    handleGetLogo();
  }, []);
  return (
    <SafeAreaView
      className={`flex-1 bg-black ${Platform.OS === "android" ? "pt-20" : ""}`}
    >
      <StatusBar barStyle="light-content" />
      <BgGradient style={StyleSheet.absoluteFill} />
      <View className="flex-1 px-6">
        <DetailHeader />
        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <Loading />
          </View>
        ) : (
          <>
            <Image
              source={logo?.logoUrl}
              style={{
                width: Dimensions.get("window").width - 48,
                height: Dimensions.get("window").width - 48,
                borderRadius: 16,
                alignSelf: "center",
                marginBottom: 24,
              }}
              contentFit="contain"
            />
            <DetailPrompt logo={logo} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
