import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Card, List, Searchbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'

//array list of computer brands and computer hardware
  const computerBrands = [
    {id: '1', name:'Apple', manuals: 82},
    {id: '2', name:'Dell', manuals: 260},
    {id: '3', name:'HP', manuals: 280},
    {id: '4', name:'Lenovo', manuals: 270},
    {id: '5', name:'ASUS', manuals: 420},
    {id: '6', name:'Acer', manuals: 210},
    {id: '7', name:'MSI', manuals: 350},
    {id: '8', name:'Samsung', manuals: 180},
    {id: '9', name:'LG', manuals: 120},
    {id: '10', name:'Microsoft', manuals: 45},
    {id: '11', name:'Razer', manuals: 60},
    {id: '12', name:'Huawei', manuals: 110},
    {id: '13', name:'Toshiba', manuals: 70},
    {id: '14', name:'Sony', manuals: 85},
    {id: '15', name:'Fujitsu', manuals: 100},
  ]

const manuals = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState('');

  const displayComputerBrands =({ item }: any) =>{
    return (
      <TouchableOpacity
       onPress={() => router.push(`/manualBrand/${item.name}`)}>

        <Card style={styles.computerBrandsCard}>

          <Card.Content style={styles.computerBrandContent}>

            <List.Icon icon="laptop" color="White"/>

            <Text style={styles.computerBrandTitle}>{item.name}</Text>

            <Text style={styles.computerBrandSmallText}>Manuals: {item.manuals}</Text>
          
          </Card.Content>

        </Card>
      </TouchableOpacity>
    )
  }

  
  
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>

        <FlatList
          data={computerBrands}
          renderItem={displayComputerBrands}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />

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
  computerBrandsCard:{
    width:150,
    height:120,
    margin:10,
    backgroundColor: '#444444',
    borderRadius:15,
    borderWidth: 2,
    borderColor:'white',
    justifyContent: 'center',
  },
  computerBrandContent:{
    alignItems: 'center',
  },
  computerBrandSmallText:{
    color:'gray',
    fontSize: 10,
  },
  computerBrandTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  grid:{
    paddingBottom:60,
  }
})