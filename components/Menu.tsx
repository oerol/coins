import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/menu-icons/home.png")} resizeMode="contain" />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/menu-icons/history.png")} resizeMode="contain" />
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/menu-icons/goal.png")} resizeMode="contain" />
          <Text style={styles.buttonText}>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/menu-icons/statistics.png")} resizeMode="contain" />
          <Text style={styles.buttonText}>Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 10,
    backgroundColor: "#C898F8",
    height: 85,
    borderRadius: 15,
    justifyContent: "center",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    padding: 15,
  },
  buttonText: {
    marginTop: 5,
  },
});
