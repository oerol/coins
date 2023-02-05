import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ICategorySelection {
  setShowCategorySelectionParent: (bool: boolean) => void;
}

export default function CategorySelection({setShowCategorySelectionParent}: ICategorySelection) {
  const onCategorySelection = (e: any) => {
    setShowCategorySelectionParent(false)
  }
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <TouchableOpacity style={styles.createCategoryButton}>
        <Text style={styles.text}>+ Create Category</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={(e) => onCategorySelection(e)}>
          <Text style={styles.text}>Clothing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={(e) => onCategorySelection(e)}>
          <Text style={styles.text}>Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={(e) => onCategorySelection(e)}>
          <Text style={styles.text}>Gifts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={(e) => onCategorySelection(e)}>
          <Text style={styles.text}>Gifts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={(e) => onCategorySelection(e)}>
          <Text style={styles.text}>Gifts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={(e) => onCategorySelection(e)}>
          <Text style={styles.text}>Gifts</Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
  item: { marginBottom: 10, paddingVertical: 10, paddingHorizontal: 15 },
  text: { color: "white" },
});
