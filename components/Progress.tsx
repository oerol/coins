import { StyleSheet, Text, View } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Progress() {
    const progressToString = (progress: number): string => {
        return progress.toString().replace(".", ",") + "%"
    }
    const progress = 6.14;
  return (
    <View style={styles.container}>
      <Svg width={8} height={10}>
        <Path d="M4 4.625L7 1.4375" stroke="#B8F818" stroke-linecap="round" />
        <Path d="M4 4.625L1 1.4375" stroke="#B8F818" stroke-linecap="round" />
        <Path d="M4 9.125L7 5.9375" stroke="#B8F818" stroke-linecap="round" />
        <Path d="M4 9.125L1 5.9375" stroke="#B8F818" stroke-linecap="round" />
      </Svg>
      <Text style={styles.text}>{progressToString(progress)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    transform: [{ translateX: 5 }, { translateY: -5 }],
  },
  text: {
    color: "#B8F818",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 2,
  },
});
