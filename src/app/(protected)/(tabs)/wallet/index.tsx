import { Redirect } from "expo-router";

export default function WalletTab() {
  return <Redirect href="/(protected)/(tabs)/wallet/overview" />;
}
