import { StyleSheet, Text, View } from "react-native";
import CartNavbar from "../Components/CartNavbar";
import Content from "../Components/ProductDetails/Content";

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <CartNavbar price="24.00" />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.81)",
  },
});
