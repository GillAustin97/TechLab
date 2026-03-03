import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
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

            <ScrollView style={styles.policyScrollView}>
                <Text style={styles.policyText}>

                    Terms and Conditions
                    {'\n\n'}
                    Last updated: 03/02/2026
                    {'\n\n'}
                    1. AGREEMENT TO TERMS
                    {'\n\n'}
                    These Terms and Conditions constitute a legally binding agreement made between you ("User") and [Company Name] ("we," "us," or "our"), concerning your access to and use of the [Website URL] website. By accessing the site, you agree that you have read, understood, and agreed to be bound by all of these terms.
                    {'\n\n'}
                    2. INTELLECTUAL PROPERTY RIGHTS
                    {'\n\n'}
                    Unless otherwise indicated, the site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks and logos contained therein (the "Marks") are owned or controlled by us and are protected by copyright and trademark laws.
                    {'\n\n'}
                    3. USER REPRESENTATIONS
                    {'\n\n'}
                    By using the site, you represent and warrant that:
                    {'\n\n'}
                    You have the legal capacity and you agree to comply with these Terms.
                    {'\n\n'}
                    You are not a minor in the jurisdiction in which you reside.
                    {'\n\n'}
                    You will not access the site through automated or non-human means (e.g., bots, scripts).
                    {'\n\n'}
                    Your use of the site will not violate any applicable law or regulation.
                    {'\n\n'}
                    4. PROHIBITED ACTIVITIES
                    {'\n\n'}
                    You may not access or use the site for any purpose other than that for which we make the site available. Prohibited activity includes, but is not limited to:
                    {'\n\n'}
                    Systematically retrieving data to create a collection or database without permission.
                    {'\n\n'}
                    Tricking, defrauding, or misleading us and other users.
                    {'\n\n'}
                    Circumventing, disabling, or interfering with security-related features.
                    {'\n\n'}
                    Uploading or transmitting viruses, Trojan horses, or other harmful material.
                    {'\n\n'}
                    5. USER ACCOUNTS [Optional]
                    {'\n\n'}
                    If you create an account, you are responsible for maintaining the confidentiality of your password and for all activities that occur under your account. We reserve the right to remove, reclaim, or change a username you select if we determine it is inappropriate.
                    {'\n\n'}
                    6. PURCHASES AND PAYMENT [Optional]
                    {'\n\n'}
                    We accept the following forms of payment: Apple Pay, Visa. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the site. We may change prices at any time.
                    {'\n\n'}
                    7. LIMITATION OF LIABILITY
                    {'\n\n'}
                    In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, or loss of data arising from your use of the site.
                    {'\n\n'}
                    8. GOVERNING LAW
                    {'\n\n'}
                    These Terms shall be governed by and defined following the laws of the United States of America. TechLab and yourself irrevocably consent that the courts of Orlando, Florida shall have exclusive jurisdiction to resolve any dispute.
                    {'\n\n'}
                    9. MODIFICATIONS
                    {'\n\n'}
                    We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice.
                    {'\n\n'}
                    10. CONTACT US
                    {'\n\n'}
                    In order to resolve a complaint or to receive further information regarding use of the site, please contact us at:
                    {'\n\n'}
                    [Company Name]
                    {'\n\n'}
                    [Address]
                    {'\n\n'}
                    [Email Address]
                    {'\n\n'}
                    
                </Text>
            </ScrollView>
    
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
        marginTop: 20,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
    },
    policyText: {
        fontSize: 16,
        color: 'black',
        padding: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 20,
    },
    policyScrollView: {
        backgroundColor: 'white',
        width: '85%',
        height: 200,
        marginTop: 50,
        marginBottom: 100,
        paddingHorizontal: 30,
        borderRadius: 10,
    }
})