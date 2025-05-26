import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

const SkeletonBox = ({
  height,
  width,
  style,
}: {
  height: number;
  width?: number | string;
  style?: any;
}) => (
  <View
    style={[
      {
        height,
        width: width || "100%",
        backgroundColor: "#fafafa",
        borderRadius: 8,
        marginBottom: 16,
        opacity: 0.7,
      },
      style,
    ]}
  />
);

export default function WalletScreen() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <View key={index}>
              <SkeletonBox height={32} width={180} style={{ marginTop: 24 }} />
              <SkeletonBox height={48} width={width - 40} />
              <SkeletonBox height={24} width={120} />
              <SkeletonBox height={80} width={width - 40} />
            </View>
          ))}
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
    padding: 20,
  },
});
