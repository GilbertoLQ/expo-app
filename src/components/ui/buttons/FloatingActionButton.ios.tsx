import { SymbolViewProps } from "expo-symbols";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { IconSymbol } from "../icons/IconSymbol.ios";

interface FloatingActionButtonProps {
  icon: SymbolViewProps["name"];
  onPress: () => void;
  color?: string;
  size?: number;
  position?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  buttonSize?: {
    width?: number;
    height?: number;
  };
  style?: ViewStyle;
  testID?: string;
}

export function FloatingActionButton({
  icon,
  onPress,
  color,
  size = 24,
  position,
  buttonSize,
  style,
  testID,
}: FloatingActionButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      style={[
        styles.fab,
        position && { ...position },
        buttonSize && { ...buttonSize },
        { backgroundColor: color },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <IconSymbol
        testID={testID ? `${testID}-icon` : undefined}
        name={icon}
        size={size}
        color="#fff"
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    borderRadius: 30,
    padding: 8,
    elevation: 5,
  },
});
