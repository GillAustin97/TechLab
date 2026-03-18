import { StyleSheet, ScrollView} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Card, List } from 'react-native-paper';

export default function index() {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.mainContainer}>

      <Text style={styles.supportTitle}>My Devices</Text>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollRow}
        >
          <View style={styles.horizontalScrollRow}>
            <Card style={styles.myDevicesCard}>
                <List.Item
                  title="Techlab Account"
                  titleStyle={{ color: 'white' }}
                  onPress={() => router.push('/techlabAccount')}
                />
            </Card>

            <Card style={styles.myDevicesCard}>
                <List.Item
                  title="Techlab Account"
                  titleStyle={{ color: 'white' }}
                  onPress={() => router.push('/techlabAccount')}
                />
            </Card>

            <Card style={styles.myDevicesCard}>
                <List.Item
                  title="Techlab Account"
                  titleStyle={{ color: 'white' }}
                  onPress={() => router.push('/techlabAccount')}
                />
            </Card>

            <Card style={styles.myDevicesCard}>
                <List.Item
                  title="Techlab Account"
                  titleStyle={{ color: 'white' }}
                  onPress={() => router.push('/techlabAccount')}
                />
            </Card>
          </View>
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    padding: 16,
  },
  horizontalScrollRow:{
    flexDirection:'row',
  },
  myDevicesCard:{
    width: 200,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginRight:10,
  },
  supportTitle:{

  },

});
