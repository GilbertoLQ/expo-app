import { FloatingActionButton } from "@/src/components/ui/buttons/FloatingActionButton.ios";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MenuScreen() {
  const router = useRouter();
  return (
    <View testID="menu-screen" style={styles.container}>
      <View style={styles.buttonContainer}>
        <FloatingActionButton
          testID="menu-back-button"
          icon="arrow.left"
          onPress={() => router.push("/(protected)/(tabs)/home")}
          color="#000"
          size={24}
          position={{ top: 70, left: 20 }}
        />
      </View>
      <Text testID="menu-screen-title">menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
