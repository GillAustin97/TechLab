import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Router, useRouter } from 'expo-router'
import { navigate } from 'expo-router/build/global-state/routing'

const onboarding2 = () => {
    const router = useRouter()
  return (
    <SafeAreaView style={styles.safeView}>
        <View>

            <Text>onboarding2</Text>

            <View style={styles.nextButton}>
                <Button
                title="Next"
                onPress={() =>
                    router.push('/onboarding3')
                }
                />
            </View>

        </View>
    </SafeAreaView>
  )
}

export default onboarding2

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