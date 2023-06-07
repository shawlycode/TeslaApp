
import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import { Ionicons, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My Model S</Text>
        <Text style={styles.subtitle}>Parked</Text>
      </View>
      <Ionicons name="person-circle" size={36} color="#fff" style={styles.header_icon} />
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
});

export default Header;