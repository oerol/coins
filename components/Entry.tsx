import { StyleSheet, Text, View, Image } from "react-native";
import { amountToString } from "../utils";
import { settings } from "../config";

export default function Entry(props: IEntry) {
  const { title, category, amount, date } = props;
  return (
    <View style={styles.entry}>
      <View style={styles.entryImage}>
        <Image source={require("../assets/shoes.png")} resizeMode="contain" />
      </View>
      <View style={styles.entryInfo}>
        <Text style={[styles.text, styles.entryInfoTitle]}>{title}</Text>
        <Text style={[styles.text, styles.entryInfoCategory]}>{category}</Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={[styles.text, styles.entryInfoAmount]}>
          {amountToString(amount)}
          {settings.currency}
        </Text>
        <Text style={[styles.text, styles.entryInfoDate]}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  entry: {
    height: 50,
    backgroundColor: "#305068",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  entryImage: {
    backgroundColor: "#FAFFC3",
    padding: 3,
    borderRadius: 5,
    marginRight: 7,
  },
  entryInfo: {},
  entryInfoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  entryInfoCategory: {
    fontSize: 10,
  },
  entryInfoAmount: {
    color: "#77F59A",
    fontWeight: "bold",
  },
  entryInfoDate: {
    color: "#C8C8C8",
    fontSize: 10,
  },
  text: {
    color: "white",
  },
});
