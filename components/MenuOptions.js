import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";


const MenuOptions = ({ item }) => {

  const Next = () => {
    console.warn('next')
  }
  return (
    <Pressable style={styles.optionRow} onPress={Next}>
      <View style={styles.options}>
        <MaterialCommunityIcons name={item.iconName} size={30} color="#fff" />
        <Text style={styles.optText}>{item.name}</Text>
      </View>
      <Entypo name="chevron-small-right" size={30} color="#fff" />
    </Pressable>
  )
}

const styles = StyleSheet.create({

  optText: {
    color: '#fff',
    fontSize: 24,
    paddingLeft: 20
  },
  options: {
    flexDirection: "row",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    paddingTop: 30
  },
  controlName: {
    color: "#fff",
    fontSize: 24
  }
});

export default MenuOptions;