import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {

  const router = useRouter()

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>

        <Image source={require('../assets/images/techLab_logo.png')} style={styles.imageContainer} />

        <Text style={styles.titleText}>Login</Text>

        <TextInput
          style={styles.usernameLogin}
          placeholder="Username"
        />

        <TextInput
          style={styles.passwordLogin}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => router.push('./')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => router.push('/onboarding1')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default login

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
    imageContainer: {
        position: 'absolute',
        top: 50,
        width: 400,
        height: 300,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    usernameLogin: {
        width: 300,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    passwordLogin: {
        width: 300,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    loginButton: {
        width: 250,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: 'blue',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
    },
    signUpButton: {
        width: 250,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: 'blue',
    },
    signUpButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
    },
})