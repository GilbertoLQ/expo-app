import { ActivityIndicator, View } from "react-native";

export function LoadingSpinner() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0070BA" />
    </View>
  );
}
