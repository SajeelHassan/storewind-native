import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CartItem from "../Components/Cart/CartItem";
import CartNavbar from "../Components/CartNavbar";
import { MaterialIcons } from "@expo/vector-icons";

const CARTPRODUCTS = [
  {
    brand: "Shezan",
    name: "Apple Juice",
    price: 149,
    id: 1,
  },
  {
    brand: "Cadbury",
    name: "Dairy Milk",
    price: 549,
    id: 2,
  },
  {
    brand: "Yokuzma",
    name: "Batteries 4V",
    price: 249,
    id: 3,
  },
  {
    brand: "Cadbury",
    name: "Dairy Milk",
    price: 549,
    id: 4,
  },
  {
    brand: "Yokuzma",
    name: "Batteries 4V",
    price: 249,
    id: 5,
  },
  {
    brand: "Cadbury",
    name: "Dairy Milk",
    price: 549,
    id: 6,
  },
  {
    brand: "Yokuzma",
    name: "Batteries 4V",
    price: 249,
    id: 7,
  },
];

export default function Cart({ navigation }) {
  const [totalBill, setTotalBill] = useState(0);
  const updateTotal = (amount, sign) => {
    if (sign) {
      setTotalBill((prevAmount) => prevAmount + amount);
    } else {
      setTotalBill((prevAmount) => prevAmount - amount);
    }
  };
  const showCartHandler = () => {
    navigation.navigate("Bill");
  };
  const showScanHandler = () => {
    navigation.navigate("Scan Product");
  };
  return (
    <View style={styles.container}>
      <CartNavbar
        showScan={true}
        showCartFn={showCartHandler}
        showScanFn={showScanHandler}
        showScan={true}
        showCart={false}
      />
      <View style={styles.cartItemsContainer}>
        <View style={styles.runningBill}>
          <Text style={styles.runningBillTitle}>Running Bill </Text>
          <MaterialIcons
            style={styles.runningBillIcon}
            name="receipt-long"
            size={30}
            color="black"
          />
        </View>
        <Text style={styles.totalBillText}>Total: {totalBill} Rs</Text>
        <FlatList
          style={styles.listWrapper}
          data={CARTPRODUCTS}
          renderItem={(item) => (
            <CartItem data={item} updateTotal={updateTotal} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listWrapper: {
    backgroundColor: "red",
  },
  cartItemsContainer: {
    alignItems: "center",
    flex: 1,
  },
  listWrapper: {
    flex: 1,
  },
  runningBillTitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  runningBill: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "flex-end",
    paddingLeft: 42,
  },
  totalBillText: {
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 20,
  },
});
