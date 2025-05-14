import BgGradient from "@/components/bg-gradient";
import { useState, useCallback } from "react";
import { useLogoService } from "@/hooks/useLogoService";
import { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Platform,
} from "react-native";
import { Logo } from "@/types/logo";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function Library() {
  const { getAllLogos } = useLogoService();
  const [logos, setLogos] = useState<Logo[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchLogos = useCallback(async () => {
    const logos = await getAllLogos();
    setLogos(logos);
  }, [getAllLogos]);

  useEffect(() => {
    fetchLogos();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchLogos();
    setRefreshing(false);
  }, [fetchLogos]);

  return (
    <SafeAreaView
      className={`flex-1 bg-black ${Platform.OS === "android" ? "pt-20" : ""}`}
    >
      <StatusBar barStyle="light-content" />
      <BgGradient style={StyleSheet.absoluteFill} />

      <View className="px-6 flex-1">
        <Text className="text-white text-2xl font-manrope-extrabold mb-4">
          Library
        </Text>
        <FlatList
          data={logos}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-around",
            flex: 1,
            flexWrap: "wrap",
            padding: 10,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/details/${item.id}`)}
            >
              <Image
                source={item.logoUrl}
                style={{ width: 150, height: 150, borderRadius: 10 }}
                contentFit="cover"
              />
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#fff"
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}
