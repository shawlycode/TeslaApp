
import { StyleSheet, View } from "react-native";
import { Ionicons, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Controls = () => {
  return (
    <View style={styles.controls}>
      <Entypo name="lock" size={30} color="#fff" />
      <FontAwesome5 name="fan" size={30} color="#fff" />
      <MaterialCommunityIcons name="lightning-bolt" size={30} color="#fff" />
      <Ionicons name="car-sport-sharp" size={30} color="#fff" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151616",
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: "#161818",
    flexDirection: "row",
    paddingTop: 50,
  },
  header_icon: {
    marginLeft: "auto"
  },
  title: {
    fontSize: 64,
    fontWeight: 600,
    color: "#fff",
    fontSize: 24,
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "grey",
    fontWeight: 600,
  },
  carImg: {
    width: "100%",
    height: 300,
    backgroundColor: "#000"
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#000"
  },
});

export default Controls;