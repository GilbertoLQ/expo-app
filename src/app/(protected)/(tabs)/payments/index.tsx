import { Redirect } from "expo-router";

export default function PaymentsTab() {
  return <Redirect href="/(protected)/(tabs)/payments/send" />;
}
