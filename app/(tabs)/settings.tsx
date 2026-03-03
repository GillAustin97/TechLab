import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const settings = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>
      
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => router.push('/login')}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>


      </View>
    </SafeAreaView>
  )
}

export default settings

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
  logoutButton: {
    width: 250,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'red',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
})