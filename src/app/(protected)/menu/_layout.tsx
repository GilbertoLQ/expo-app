import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function MenuLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </>
  );
}
