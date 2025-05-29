import { PaymentsHeader } from "@/src/components/common/headers/paymentsHeader";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function PaymentsLayout() {
  return (
    <View style={{ flex: 1 }}>
      <PaymentsHeader />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </View>
  );
}
