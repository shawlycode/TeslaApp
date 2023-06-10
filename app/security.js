import { View, Text, StyleSheet } from 'react-native'


const SecurityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Security</Text>
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
export default SecurityScreen;