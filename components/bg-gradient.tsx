import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface BgGradientProps {
  children?: React.ReactNode;
  style?: object;
}

function BgGradient(props: BgGradientProps) {
  return (
    <ImageBackground
      source={require("@/assets/images/back-gradient.png")}
      style={[styles.background, props.style]}
      resizeMode="cover"
    >
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

export default BgGradient;
