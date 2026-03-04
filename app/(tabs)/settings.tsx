import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text, List, Divider} from 'react-native-paper'

const settings = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>
        <ScrollView>

          <Card style={styles.techlabAccountCard}>
            <List.Item
              title="Techlab Account"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="account" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/techlabAccount')}
            />
          </Card>

          <Card style={styles.softwareUpdateCard}>
            <List.Item
              title="Software Updates"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="update" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/softwareUpdates')}
            />
          </Card>

          <Card style={styles.notificationsCard}>
            <List.Item
              title="Notifications"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="bell" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/notifications')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Sounds"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="speaker" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/sounds')}
            />


          </Card>

        



        </ScrollView>
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
  dividerLine: {
    backgroundColor: 'gray',
    height: 1,
    marginHorizontal: 10,
    marginLeft: 50,
  },
  techlabAccountCard: {
    width: 375,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
  },
  notificationsCard: {
    width: 375,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
  },
})