import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const atlas = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>

        <TextInput style={styles.inputMessageContainer}
        placeholder='Ask Atlas'
        textColor='black'
        right={
          <TextInput.Icon
          icon='send'
          color='black'
          />
        }
        />
        
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
  },
  inputMessageContainer:{
    width:350,
    height:50,
    backgroundColor:'#ffffff',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    position: 'absolute',
    bottom: 5,
    right: 10,
    padding: 10,
  },
})