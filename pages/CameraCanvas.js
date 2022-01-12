import { StyleSheet, Text, View } from "react-native";
import CartNavbar from "../Components/CartNavbar";

export default function CameraCanvas() {
  return (
    <View style={styles.container}>
      <CartNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.81)",
  },
});
