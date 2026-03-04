import { MaterialCommunityIcons } from '@expo/vector-icons'
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

        <Text style={styles.orText}>or</Text>

        <TouchableOpacity
          style={styles.signInGoogleButton}
          onPress={() => router.push('./')}>
          <Image source={require('../assets/images/googleIcon.png')} style={styles.signInGoogleButtonIcon} />
          <Text style={styles.signInGoogleButtonText}>Connect with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInFacebookButton}
          onPress={() => router.push('./')}>
          <Image source={require('../assets/images/facebookIcon.png')} style={styles.signInFacebookButtonIcon} />
          <Text style={styles.signInFacebookButtonText}>Connect with Facebook</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
    },
    imageContainer: {
        width: 400,
        height: 300,
        marginBottom: 10,
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
        backgroundColor: '#0057FF',
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
        backgroundColor: '#0057FF',
    },
    signUpButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
    },
    signInGoogleButton: {
        width: 250,
        height: 50,
        borderRadius: 25,
        marginBottom: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInGoogleButtonText: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
        alignContent: 'center',
        marginLeft: 10,
    },
    signInGoogleButtonIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 10,
        top: 10,
    },
    signInFacebookButton: {
        width: 250,
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#4267B2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInFacebookButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
        alignContent: 'center',
        marginLeft: 25,
    },
    signInFacebookButtonIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 10,
        top: 10,
    },
    orText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
})