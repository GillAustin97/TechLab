import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const atlas = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>

        <TextInput 
        placeholder='Ask Atlas'
        style={styles.inputMessageContainer}
        >

        </TextInput>
        
      </View>
    </SafeAreaView>
  )
}

export default atlas

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#000000',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputMessageContainer:{
    width:350,
    height:50,
    backgroundColor:'#8f8f8f',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
})