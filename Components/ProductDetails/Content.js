import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Content({ showScanFn }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsView}>
        <View style={styles.dragbar} />
        <View style={styles.contentCardContainer}>
          <View style={styles.contentWrapper}>
            <View style={styles.productNameView}>
              <Text style={styles.prodName}>Product Name</Text>
              <Text style={styles.prodOff}>15% Off</Text>
            </View>
            <Text style={styles.prodBrand}>Brand Name</Text>

            <View style={styles.prodAddView}>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 18,
                  lineHeight: 28,
                }}
              >
                <Text style={styles.prodCurrency}>PKR. </Text>24.00
              </Text>
              <Text style={styles.prodNewPrice}>
                <Text style={styles.prodCurrency}>PKR.</Text>16.00
              </Text>

              <MaterialIcons
                name="add-circle"
                size={40}
                color="#5A6CF3"
                onPress={showScanFn}
              />
            </View>
          </View>
        </View>
        <View style={styles.contentRecommendationContainer}>
          <Text style={styles.recommendTitle}>Recommedations</Text>
          <View style={styles.recommendationsWrapper}>
            <View style={styles.recommendTile} />
            <View style={styles.recommendTile} />
            <View style={styles.recommendTile} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    bottom: 0,
    // backgroundColor: "red",
  },
  detailsView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "relative",
    top: "30%",
    alignItems: "center",
    // justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  dragbar: {
    width: 170,
    height: 5,
    borderRadius: 65,
    backgroundColor: "#C4C4C4",
    marginTop: 15,
  },
  contentCardContainer: {
    margin: "auto",
    marginTop: 22,
    width: 372,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 22,
    backgroundColor: "white",
  },
  productNameView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prodName: {
    fontSize: 24,
    lineHeight: 28,
  },
  prodPrice: {
    fontSize: 18,
  },

  prodAddView: {
    // backgroundColor: "#C4C4C4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  prodNewPrice: {
    backgroundColor: "#C4C4C4",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 18,
    padding: 6,
  },
  prodCurrency: {
    fontSize: 12,
  },
  contentRecommendationContainer: {
    marginTop: 22,
    alignSelf: "flex-start",
    paddingLeft: 22,
  },
  recommendTitle: {
    fontSize: 24,
    lineHeight: 28,
  },
  recommendationsWrapper: {
    width: "110%",
    paddingTop: 8,
    // display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recommendTile: {
    width: 130,
    height: 130,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
});
