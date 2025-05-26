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
  { label: "Wallet", route: "/(protected)/(tabs)/wallet/overview" },
  { label: "Rewards", route: "/(protected)/(tabs)/wallet/rewards" },
  { label: "Activity", route: "/(protected)/(tabs)/wallet/activity" },
];

export function WalletHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  const isRouteActive = (route: string) => {
    // Eliminar el prefijo común de las rutas y comparar solo la parte relevante
    const cleanRoute = route.split("/").pop() || "";
    const cleanPathname = pathname.split("/").pop() || "";
    return cleanRoute === cleanPathname;
  };

  return (
    <View style={styles.container}>
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
                isRouteActive(option.route) && styles.selectedText,
              ]}
            >
              {option.label}
            </Text>
            {isRouteActive(option.route) && (
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
    paddingTop: Platform.OS === "ios" ? 70 : 20,
    paddingHorizontal: 16,
    backgroundColor: "#e0e0e0",
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
