import { Text, View } from "react-native";

export default function BillTab() {
  return (
    <View
      testID="bill-screen"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text testID="bill-screen-title">Bill</Text>
    </View>
  );
}
