import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraCanvas from "./pages/CameraCanvas";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scan Product" component={CameraCanvas} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Bill" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
