import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import CartNavbar from "../Components/CartNavbar";

export default function CameraCanvas({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [codeData, setCodeData] = useState(null);
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };
  useEffect(() => {
    askForCameraPermission();
    // setScanned(false);
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCodeData(data);
    navigation.navigate("Product Details");
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No Access to Camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }
  const showCartHandler = () => {
    navigation.navigate("Bill");
  };
  const showScanHandler = () => {
    navigation.navigate("Scan Product");
  };
  return (
    <View style={styles.container}>
      <CartNavbar
        showCartFn={showCartHandler}
        showScanFn={showScanHandler}
        showScan={false}
        showCart={true}
      />
      <View style={styles.scannerWrapper}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.barCodeScanner}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignContent: "center",
    justifyContent: "center",
  },
  barCodeScanner: {
    // position: "absolute",
    width: "90%",
    // height: "70%",
    flex: 1,
    margin: 0,
    padding: 0,
  },
  scannerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanAgainButton: {
    margin: 0,
    padding: 0,
    position: "relative",
    top: 0,
  },
});
