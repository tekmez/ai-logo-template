import { SafeAreaView, StyleSheet, View, Platform } from "react-native";
import BgGradient from "@/components/bg-gradient";
import Header from "@/components/header";
import CreateButton from "@/components/create-button";
import PromptSection from "@/components/prompt-section";
import LogoStyles from "@/components/logo-styles";
import StateChip from "@/components/state-chips";

export default function Home() {
  return (
    <SafeAreaView
      className={`flex-1 bg-black ${Platform.OS === "android" ? "pt-20" : ""}`}
    >
      <BgGradient style={StyleSheet.absoluteFill} />
      <Header />

      <View className="px-6">
        <StateChip />
        <PromptSection />
        <LogoStyles />
      </View>
      <CreateButton />
    </SafeAreaView>
  );
}
