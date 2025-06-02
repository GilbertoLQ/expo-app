import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function RewardsScreen() {
  return (
    <ScrollView
      testID="wallet-rewards-scroll"
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <View testID="wallet-rewards-container" style={styles.container}>
        <Text testID="wallet-rewards-title" style={styles.title}>
          Rewards
        </Text>
        {/* Rewards content */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
