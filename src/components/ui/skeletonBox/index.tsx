import { StyleProp, View, ViewStyle } from "react-native";

type SkeletonBoxProps = {
  height?: number | string;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
};

export default function SkeletonBox({
  height,
  width,
  style,
}: SkeletonBoxProps) {
  // Ensure height and width are either number or percentage string
  const getDimension = (
    value?: number | string
  ): number | `${number}%` | undefined => {
    if (typeof value === "number") return value;
    if (typeof value === "string" && value.trim().endsWith("%"))
      return value as `${number}%`;
    return undefined;
  };

  return (
    <View
      style={[
        {
          height: getDimension(height),
          width: getDimension(width) ?? "100%",
          backgroundColor: "#fafafa",
          borderRadius: 8,
          marginBottom: 16,
          opacity: 0.7,
        },
        style,
      ]}
    />
  );
}
