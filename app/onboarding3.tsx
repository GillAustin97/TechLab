import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Router } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'
const onboarding3 = () => {
  return (
    <SafeAreaView style={styles.safeView}>
        <View>
            <Text>onboarding3</Text>
    
    
            <View style={styles.nextButton}>
              <Button 
                title="Polices and Cookies"
                onPress={() => {
                    navigate('/cookies')
                }}
              />
            </View>
     
        </View>
    </SafeAreaView>
  )
}

export default onboarding3

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