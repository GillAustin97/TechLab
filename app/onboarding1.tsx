import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Router } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'

const onboarding1 = () => {
  return (
    <SafeAreaView style={styles.safeView}>
        <View>

            <Text>onboarding1</Text>
    
            <View style={styles.nextButton}>
              <Button 
                title="Next"
                onPress={() =>
                    navigate('/onboarding2')
                }
              />
            </View>
    
         </View>
    </SafeAreaView>
  )
}

export default onboarding1

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
        color: '#3c9b14',
    },
    
})