import { View, Text, StyleSheet } from 'react-native'


const ControlScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Controls</Text>
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
export default ControlScreen;