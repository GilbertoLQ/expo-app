import { FloatingActionButton } from "@/src/components/ui/FloatingActionButton.ios";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <FloatingActionButton
          icon="list.dash"
          onPress={() => router.push("/(protected)/menu")}
          color="#000"
          size={24}
          position={{ top: 70, left: 20 }}
        />
        <FloatingActionButton
          icon="person.crop.circle"
          onPress={() => router.push("/(protected)/profile")}
          color="#000"
          size={24}
          position={{ top: 70, right: 20 }}
        />
      </View>
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
