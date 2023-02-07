import { StyleSheet, Text, View, Image } from "react-native";
import { amountToString } from "../utils";
import { settings } from "../config";
const emojiData = require("../assets/emoji.json");


export default function Entry(props: IEntry) {
  const { title, category, amount, date } = props;

  const searchByTag = (tag: string) => {
    tag = tag.toLowerCase();
    for (const emoji of emojiData) {
      if (emoji.custom_tag) {
        if (emoji.custom_tag.includes(tag)) {
          return emoji.emoji;
        }
      }
    }
    return null;
  };

  const emoji = searchByTag(category);

  return (
    <View style={styles.entry}>
      <View style={styles.entryImage}>
        <Text style={{ fontSize: 25 }}>{emoji}</Text>
      </View>
      <View style={styles.entryInfo}>
        <Text style={[styles.text, styles.entryInfoTitle]}>{title}</Text>
        <Text style={[styles.text, styles.entryInfoCategory]}>{category}</Text>
      </View>
      <View style={{ flexGrow: 1 }}></View>
      <View style={{}}>
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
    justifyContent: "space-between",
    marginBottom: 5,
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
    width: 60,
  },
  text: {
    color: "white",
  },
});
