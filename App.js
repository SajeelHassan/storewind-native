import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import CartNavbar from "./Components/CartNavbar";
import Content from "./Components/ProductDetails/Content";
import CameraCanvas from "./pages/CameraCanvas";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const getFonts = async () =>
  FontFace.loadAsync({
    "NunitoSans-Bold": require("./assets/fonts/NunitoSans-Regular.ttf"),
  });

export default function App() {
  // getFonts();

  return <Cart />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.81);",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
