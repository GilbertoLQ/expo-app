import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ActivityScreen() {
  return (
    <ScrollView
      testID="wallet-activity-scroll"
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <View testID="wallet-activity-container" style={styles.container}>
        <Text testID="wallet-activity-title" style={styles.title}>
          Activity
        </Text>
        {/* Activity content */}
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
