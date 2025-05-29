import { WalletHeader } from "@/src/components/common/headers/walletHeaders";
import { Stack } from "expo-router";

export default function WalletLayout() {
  return (
    <>
      <WalletHeader />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
          contentStyle: {
            backgroundColor: "#fafafa",
            flex: 1,
          },
        }}
      />
    </>
  );
}
