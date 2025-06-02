import { Text, View } from "react-native";

export default function GiveTab() {
  return (
    <View
      testID="give-screen"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text testID="give-screen-title">Give</Text>
    </View>
  );
}
