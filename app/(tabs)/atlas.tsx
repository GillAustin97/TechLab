import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const atlas = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>
        
      </View>
    </SafeAreaView>
  )
}

export default atlas

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})