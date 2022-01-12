import { StyleSheet, Text, View } from "react-native";
import CartNavbar from "../Components/CartNavbar";
import Content from "../Components/ProductDetails/Content";

export default function ProductDetails({ navigation }) {
  const showCartHandler = () => {
    navigation.navigate("Bill");
  };
  const showScanHandler = () => {
    navigation.navigate("Scan Product");
  };
  return (
    <View style={styles.container}>
      <CartNavbar
        price="24.00"
        showCartFn={showCartHandler}
        showScanFn={showScanHandler}
        showScan={true}
        showCart={true}
      />
      <Content showScanFn={showScanHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.81)",
  },
});
