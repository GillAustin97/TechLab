import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text, List, Divider, Searchbar } from 'react-native-paper'

const settings = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          <Card style={styles.techlabAccountCard}>
            <List.Item
              title="Techlab Account"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="account" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/techlabAccount')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Subscriptions"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="credit-card-outline" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/subscriptions')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Password and Security"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="lock" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/passwordSecurity')}
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
              title="My Devices "
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="devices" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/mydevices')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Add Devices"  
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="plus" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/addDevices')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Device Repair History"  
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="wrench" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/repairHistory')}
            />
          </Card>

          <Card style={styles.aiCard}>
            <List.Item
              title="Atlas AI"  
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="robot" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/atlasAI')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Atlas Chat History"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="book" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/atlasChatHistory')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Clear Chat History"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="delete-outline" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/deleteChatHistory')}
            />
          </Card>

          <Card style={styles.manualCard}>
            <List.Item
              title="Manual History"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="book" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/manualHistory')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Clear Manual History"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="delete-outline" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/deleteManualHistory')}
            />
          </Card>

          <Card style={styles.mainSettingsCard}>
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

          <Card style={styles.mainSettingsCard}>
            <List.Item
              title="About"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="information-outline" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/aboutTechLab')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Privacy Policy"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="file" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/privacyPolicy')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Terms and Conditions"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="file" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => router.push('/termsAndConditions')}
            />

            <Divider style={styles.dividerLine} />

            <List.Item
              title="Version"
              titleStyle={{ color: 'white' }}
              left={props => <List.Icon {...props} icon="package" />}
              right={() => (
                <View style={styles.versionCard}>
                    <Text style={styles.versionCardText}>0.0.0.1</Text>
                    <List.Icon icon="chevron-right" />
                </View>
              )}
            />
          </Card>

          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => router.push('/login')}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          
        </ScrollView>

        <Searchbar
          placeholder="Search"
          style={[styles.searchbarContainer, {backgroundColor: '#ffffff'}]}
          onChangeText={setSearchQuery}
          value={searchQuery}
          inputStyle={{ color: 'black' }}
          right={props => <List.Icon {...props} icon="microphone" />}
        />

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
    alignSelf:'center',
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
  searchbarContainer: {
    width: 375,
    borderRadius: 25,
    marginBottom: 2,
    backgroundColor: '#1C1C1E',
    position: 'absolute',
    bottom: 0,
  },
  aiCard:{
    width: 375,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
  },
  mainSettingsCard:{
    width: 375,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
  },
  manualCard:{
    width: 375,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
  },
  scrollContainer:{
    paddingBottom: 60,
  },
  versionCard:{
    flexDirection: 'row', 
    alignItems: 'center',
  },
  versionCardText:{
    color: "gray",
    marginRight: 10,
  },
})