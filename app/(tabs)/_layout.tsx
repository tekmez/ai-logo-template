import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={Platform.OS === "android" ? 80 : 30}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Generate",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="creation" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    backgroundColor: "rgba(18, 18, 18, 0.3)",
    borderTopWidth: 0,
    height: 80,
  },
  tabBarLabel: {
    fontFamily: "Manrope-Medium",
    fontSize: 12,
  },
});
