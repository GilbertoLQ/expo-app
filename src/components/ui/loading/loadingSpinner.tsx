import { ActivityIndicator, View } from "react-native";

export function LoadingSpinner() {
  return (
    <View
      testID="loading-spinner"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator
        testID="loading-spinner-indicator"
        size="large"
        color="#0070BA"
      />
    </View>
  );
}
