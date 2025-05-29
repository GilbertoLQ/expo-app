import { usePathname, useRouter } from "expo-router";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

type MenuOption = {
  label: string;
  route: string;
};

const menuOptions: MenuOption[] = [
  { label: "Send", route: "/(protected)/(tabs)/payments/send" },
  { label: "Bill", route: "/(protected)/(tabs)/payments/bill" },
  { label: "Give", route: "/(protected)/(tabs)/payments/give" },
  { label: "Request", route: "/(protected)/(tabs)/payments/request" },
];

export function PaymentsHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  // Mejor manejo de la ruta actual
  const currentRoute = pathname.split("/").pop() || "send";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <View style={[styles.menuContainer, { width: width * 0.5 }]}>
        {menuOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => router.replace(option.route as any)}
          >
            <Text
              style={[
                styles.menuText,
                currentRoute === option.label.toLowerCase() &&
                  styles.selectedText,
              ]}
            >
              {option.label}
            </Text>
            {currentRoute === option.label.toLowerCase() && (
              <View style={styles.selectedIndicator} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  menuItem: {
    paddingVertical: 10,
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    color: "#666",
  },
  selectedText: {
    color: "#000",
    fontWeight: "600",
  },
  selectedIndicator: {
    position: "absolute",
    bottom: -2,
    width: "100%",
    height: 2,
    backgroundColor: "#000",
    borderRadius: 1,
  },
});
