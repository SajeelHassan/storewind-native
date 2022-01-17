import React, { useContext, useEffect, useState } from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import CartNavbar from "../Components/CartNavbar";
import { barcodeContext } from "../Components/Contexts/barcodeContext";
import Content from "../Components/ProductDetails/Content";

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

export default function ProductDetails({ navigation }) {
  const { barcode, setBarcode } = useContext(barcodeContext);
  const [prod, setProd] = useState({ found: false, details: {} });

  useEffect(() => {
    const unsusbsribe = navigation.addListener("focus", () => {
      // setProdDetails();
      setProd({ found: false, details: {} });
      getProduct(barcode);
    });
    return unsusbsribe;
  }, [navigation]);
  const showCartHandler = () => {
    navigation.navigate("Bill");
  };
  const showScanHandler = () => {
    navigation.navigate("Scan Product");
  };
  const getProduct = (code) => {
    products.map((prod) => {
      prod.barCode === code ? setProd({ found: true, details: prod }) : {};
    });
  };
  // const getProduct = (barcode) => {
  //   const data = fetch("http://18.116.39.224:8080/product/", {
  //     method: "POST",
  //     body: JSON.stringify({ id: barcode }),
  //   });

  //   // const data = await fetch("http://18.116.39.224:8080/product/", {method="POST", body:JSON.stringify({
  //   //     id: query.itemId,
  //   //     })});
  //   // data.json().then(d=>{setItem(d); console.log(d)});
  //   return data.json();
  // };
  return (
    <View style={styles.container}>
      <CartNavbar
        price={
          prod.found
            ? (prod.details.price - prod.details.discount).toFixed(2)
            : false
        }
        showCartFn={showCartHandler}
        showScanFn={showScanHandler}
        showScan={true}
        showCart={true}
      />
      {prod.found ? (
        <Content showScanFn={showScanHandler} prodDetails={prod.details} />
      ) : (
        <View style={styles.containerNotFound}>
          <Text style={styles.notFoundText}>Product not found!</Text>
          <Button
            title={"Scan New Product"}
            onPress={() => showScanHandler()}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.81)",
  },
  containerNotFound: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  notFoundText: {
    fontSize: 24,
    paddingTop: 25,
    paddingBottom: 25,
  },
});
