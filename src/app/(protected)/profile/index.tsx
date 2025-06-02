import { FloatingActionButton } from "@/src/components/ui/buttons/FloatingActionButton.ios";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <View testID="profile-screen" style={styles.container}>
      <Text testID="profile-screen-title">Profile</Text>
      <View style={styles.buttonContainer}>
        <FloatingActionButton
          testID="profile-back-button"
          icon="arrow.left"
          onPress={() => router.push("/(protected)/(tabs)/home")}
          color="#000"
          size={24}
          position={{ top: 70, left: 20 }}
        />
        <FloatingActionButton
          testID="profile-logout-button"
          icon="xmark"
          onPress={() => {
            router.replace("/(public)");
          }}
          color="#dc3545"
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
