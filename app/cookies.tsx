import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, Router, useRouter } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

const cookies = () => {

    const router = useRouter()
    
  return (
    <SafeAreaView style={styles.safeView}>

        <View style={styles.mainContainer}>

            <MaterialCommunityIcons 
                name="cookie"
                size={200}
                color="white"
                style={styles.iconImage} 
            />
            
            <Text style={styles.titleText}>Terms and Conditions</Text>
    
            <View style={styles.buttonRow}>
                
                <Button style={styles.declineButton}
                    mode="contained"
                    buttonColor='gray'
                    onPress={() => {
                        router.push('/onboarding1')
                    }}
                >
                    Decline
                </Button>

                <Button style={styles.nextButton}
                    mode="contained"
                    buttonColor='red'
                    onPress={() => {
                        router.push('/login')
                    }}
                >
                    Accept
                </Button>
            </View>

         </View>

    </SafeAreaView>
  )
}

export default cookies

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
        width: 150,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 20,
    },
    declineButton: {
        width: 150,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 20,
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
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 20,
    },
})