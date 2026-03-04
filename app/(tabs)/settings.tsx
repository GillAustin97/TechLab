import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text, List} from 'react-native-paper'

const settings = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>

        <Card style={styles.softwareUpdateCard}>
          <List.Item
            title="Software Updates"
            titleStyle={{ color: 'white' }}
            left={props => <List.Icon {...props} icon="update" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push('/softwareUpdates')}
          />
        </Card>




      </View>
    </SafeAreaView>
  )
}

export default settings

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
  logoutButton: {
    width: 250,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'red',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
  softwareUpdateCard: {
    width: 375,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
  },
})