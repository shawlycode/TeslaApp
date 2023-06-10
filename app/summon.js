import { View, Text, StyleSheet } from 'react-native'


const SummonScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Summon</Text>
    </View>
  )
}


const styles = StyleSheet.create({


  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
export default SummonScreen;