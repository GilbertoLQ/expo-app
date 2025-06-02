import { Text, View } from "react-native";

export default function SendScreen() {
  return (
    <View
      testID="send-screen"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text testID="send-screen-title">Send</Text>
    </View>
  );
}
