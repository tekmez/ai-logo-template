import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <LottieView
      autoPlay
      style={{
        width: 35,
        height: 35,
      }}
      speed={0.4}
      source={require("@/assets/animations/loading.json")}
    />
  );
};

export default Loading;
