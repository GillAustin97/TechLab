import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const repairBot = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>

        <Text>repairBot</Text>
        
      </View>
    </SafeAreaView>
  )
}

export default repairBot

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})