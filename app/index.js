import { StyleSheet, View, Image, FlatList } from "react-native";
import car from '../assets/images/car.png';
import menuOptions from "../assets/menuOptions";
import MenuOptions from "../components/MenuOptions";
import Controls from "../components/Controls";
import Header from "../components/Header";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={car} style={styles.carImg} resizeMode="contain" />
      <Controls />
      <FlatList
        data={menuOptions}
        renderItem={MenuOptions}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151616",
    paddingHorizontal: 10,
  },
  carImg: {
    width: "100%",
    height: 300,
    backgroundColor: "#000"
  },
});
