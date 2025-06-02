import { Text, View } from "react-native";

export default function RequestTab() {
  return (
    <View
      testID="request-screen"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text testID="request-screen-title">Request</Text>
    </View>
  );
}
