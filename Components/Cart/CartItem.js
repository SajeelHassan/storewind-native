import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function CartItem({ data, deleteItem, updateTotal }) {
  const [count, setcount] = useState(1);
  const decrementHandler = () => {
    if (count < 2) {
      return;
    }
    setcount((prev) => prev - 1);
    updateTotal(data.item.price, false);
  };
  const incrementHandler = () => {
    setcount((prev) => prev + 1);
    updateTotal(data.item.price, true);
  };
  useEffect(() => {
    updateTotal(data.item.price, true);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.itemTexts}>
        <Text style={styles.brandName}>{data.item.brand}</Text>
        <Text style={styles.prodName}>{data.item.name}</Text>
        <Text style={styles.price}>Rs. {data.item.price * count}</Text>
      </View>
      <View style={styles.itemControls}>
        <MaterialIcons
          name="delete"
          size={24}
          color="black"
          onPress={deleteItem}
        />
        <View style={styles.counterWrapper}>
          <AntDesign
            name="minus"
            size={22}
            color="black"
            onPress={decrementHandler}
          />
          <Text style={styles.countText}>{count}</Text>
          <MaterialIcons
            name="add"
            size={22}
            color="black"
            onPress={incrementHandler}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FB",
    margin: "auto",
    width: 335,
    borderRadius: 16,
    padding: 15,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brandName: {
    fontSize: 10,
    lineHeight: 15,
  },
  prodName: {
    fontSize: 18,
    lineHeight: 24,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  counterWrapper: {
    width: 67,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countText: {
    fontSize: 18,
  },
  itemControls: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
