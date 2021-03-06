import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraCanvas from "./pages/CameraCanvas";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { barcodeContext } from "./Components/Contexts/barcodeContext";
import { cartProductsContext } from "./Components/Contexts/cartProductsContext";

const Stack = createNativeStackNavigator();
export default function App() {
  const [barcode, setBarcode] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <cartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      <barcodeContext.Provider value={{ barcode, setBarcode }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Scan Product" component={CameraCanvas} />
            <Stack.Screen name="Product Details" component={ProductDetails} />
            <Stack.Screen name="Bill" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </barcodeContext.Provider>
    </cartProductsContext.Provider>
  );
}
