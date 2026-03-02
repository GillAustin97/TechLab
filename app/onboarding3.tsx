import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, Router, useRouter } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

const onboarding3 = () => {

    const router = useRouter()
    
  return (
    <SafeAreaView style={styles.safeView}>

        <View style={styles.mainContainer}>

            <MaterialCommunityIcons 
                name="account" 
                size={100} 
                color="black" 
                style={styles.iconImage} 
            />
            
            <Text>onboarding3</Text>
    

            <Button style={styles.nextButton}
                mode="contained"
                buttonColor='red'
                onPress={() => {
                    router.push('/cookies')
                }}
            >
                Next
            </Button>
    

         </View>

    </SafeAreaView>
  )
}

export default onboarding3

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        width: 300,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 20,
        position: 'absolute',
        bottom: 20,
    },
    iconImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    
})