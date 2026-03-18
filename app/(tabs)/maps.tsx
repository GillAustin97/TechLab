import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'

const maps = () => {
  return (
      <View style={styles.mainContainer}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.5383,
          longitude: -81.3792,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
      </View>
  )
}

export default maps

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  map:{
    flex: 1,
  }
})