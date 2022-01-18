import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CartItem from "../Components/Cart/CartItem";
import CartNavbar from "../Components/CartNavbar";
import { MaterialIcons } from "@expo/vector-icons";
import { cartProductsContext } from "../Components/Contexts/cartProductsContext";
import { barcodeContext } from "../Components/Contexts/barcodeContext";

const products = [
  {
    id: "1",
    name: "Knife",
    storeId: "20",
    price: 18.99,
    discount: 0,
    brand: "MAC & Chezz",
    categories: ["Kitchen"],
    subCatagories: ["Cutlory"],
    tags: ["Cooking", "Cutting"],
    location: "Aisle 3",
    inStock: "98",
    barCode: "8964002488865",
    modified: Date.now(),
    imgUrl:
      "https://icon-library.com/images/product-icon-png/product-icon-png-11.jpg",
  },
  {
    id: "2",
    name: "Pillow",
    storeId: "20",
    price: 10.99,
    discount: 10.0,
    brand: "Good Night",
    categories: ["Furniture"],
    subCatagories: ["Bedroom"],
    tags: ["Sleeping", "Laying"],
    location: "Aisle 5",
    inStock: "24",
    barCode: "abf-422-ageo",
    modified: Date.now(),
    imgUrl:
      "https://icon-library.com/images/product-icon-png/product-icon-png-11.jpg",
  },
  {
    id: "3",
    name: "Light",
    storeId: "20",
    price: 10.99,
    discount: 10.0,
    brand: "Bright n Shine",
    categories: ["Furniture"],
    subCatagories: ["Bedroom"],
    tags: ["Sleeping", "Laying"],
    location: "Aisle 3",
    inStock: "49",
    barCode: "134-dfew-2941",
    modified: Date.now(),
    imgUrl:
      "https://icon-library.com/images/product-icon-png/product-icon-png-11.jpg",
  },
];

export default function Cart({ navigation }) {
  const [totalBill, setTotalBill] = useState(0);
  const [currentCart, setCurrentCart] = useState([]);
  const { barcode, setBarcode } = useContext(barcodeContext);

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
  const { cartProducts } = useContext(cartProductsContext);
  useEffect(() => {
    const unsusbsribe = navigation.addListener("focus", () => {
      setCurrentCart(cartProducts);
    });
    return unsusbsribe;
  }, [navigation]);
  // useEffect(() => {
  //   const updatedCart = [...cartProducts];
  //   setCurrentCart(
  //     updatedCart.map((item) =>
  //       item.id === barcode
  //         ? {
  //             ...item,
  //             qty: item.qty + 1,
  //           }
  //         : item
  //     )
  //   );
  // }, []);
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
        <Text style={styles.totalBillText}>
          Total: {totalBill.toFixed(2)} Rs
        </Text>
        <FlatList
          style={styles.listWrapper}
          data={currentCart}
          renderItem={(item) => (
            <CartItem data={item} updateTotal={updateTotal} />
          )}
          keyExtractor={(item, index) => index.toString()}
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
