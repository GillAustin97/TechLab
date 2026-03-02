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
                name="map-search-outline"
                size={200}
                color="white"
                style={styles.iconImage} 
            />
            
            <Text style={styles.titleText}>Find local Computer Components near your location</Text>
    

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
        backgroundColor: 'black',
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
        position: 'absolute',
        top: 100,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
        paddingHorizontal: 20,
    },  
})