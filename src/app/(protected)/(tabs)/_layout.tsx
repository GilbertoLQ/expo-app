import { IconSymbol } from "@/src/components/ui/icons/IconSymbol.ios";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarAccessibilityLabel: "Home Tab",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarAccessibilityLabel: "Payments Tab",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="dollarsign" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarAccessibilityLabel: "Wallet Tab",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="wallet.bifold" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
