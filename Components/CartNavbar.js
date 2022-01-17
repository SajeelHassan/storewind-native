import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CartNavbar({
  price,
  showScan,
  showCart,
  showScanFn,
  showCartFn,
}) {
  return (
    <View style={styles.wrapper}>
      {showScan && (
        <MaterialIcons
          name="qr-code-scanner"
          size={35}
          color="black"
          onPress={showScanFn}
        />
      )}
      {price ? (
        <Text style={styles.priceText}>
          PKR. <Text style={styles.priceTextBig}>{price}</Text>
        </Text>
      ) : null}
      {showCart && (
        <MaterialIcons
          name="receipt-long"
          size={35}
          color="black"
          onPress={showCartFn}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: "red",
    padding: 22,
    paddingTop: 48,
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
