import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function CategorySelection() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.createCategoryButton}>
        <Text style={styles.text}>+ Create Category</Text>
      </View>
      <View>
        <View style={styles.item}>
          <Text style={styles.text}>Clothing</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Apps</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Gifts</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Gifts</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Gifts</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Gifts</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#190c29",
    width: "100%",
    height: 200,
    borderRadius: 10,
    zIndex: 5,
    top: -210,
  },
  createCategoryButton: {
    marginBottom: 10,
    borderBottomColor: "gray",
    
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  item: { marginBottom: 10 ,    paddingVertical: 10,
    paddingHorizontal: 15,},
  text: { color: "white" },
});
