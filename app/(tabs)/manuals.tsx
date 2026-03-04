import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Searchbar, List } from 'react-native-paper'
import { useRouter } from 'expo-router'

const manuals = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState('');
  
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>
        

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

export default manuals

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
  searchbarContainer: {
    width: 375,
    borderRadius: 25,
    marginBottom: 2,
    backgroundColor: '#1C1C1E',
    position: 'absolute',
    bottom: 0,
    elevation: 5,
  },
})