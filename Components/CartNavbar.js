import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CartNavbar({ price }) {
  return (
    <View style={styles.wrapper}>
      <MaterialIcons
        name="arrow-back-ios"
        size={30}
        color="black"
        onPress={() => console.log("Back Pressed!")}
      />
      {price ? (
        <Text style={styles.priceText}>
          PKR. <Text style={styles.priceTextBig}>24.00</Text>
        </Text>
      ) : null}
      {/* <MaterialIcons
        name="shopping-cart"
        size={35}
        color="black"
        onPress={() => console.log("Cart Pressed!")}
      /> */}
      <MaterialIcons
        name="receipt-long"
        size={35}
        color="black"
        onPress={() => console.log("Bill Pressed!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: "red",
    padding: 22,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    // fontFamily: "NunitoSans-Bold",
    color: "#000",
    fontSize: 14,
  },
  priceTextBig: {
    fontSize: 36,
  },
});
