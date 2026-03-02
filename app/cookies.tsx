import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Router } from 'expo-router'

const cookies = () => {
  return (
    <SafeAreaView style={styles.safeView}>
            <View>
                <Text>onboarding3</Text>
        
        
                
         
            </View>
    </SafeAreaView>
  )
}

export default cookies

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        width: 200,
        height: 50,
        borderRadius: 25,
    },
})