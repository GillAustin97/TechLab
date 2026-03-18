import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { IconButton } from 'react-native-paper';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'gray',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          color: 'white',
        },
      }}>
      <Tabs.Screen
        name="maps"
        options={{
          headerShown: false,
          title: 'Maps',
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />

      <Tabs.Screen
        name="atlas"
        options={{
          headerShown: true,
          title: 'Atlas 1.0v',
          tabBarLabel:'Atlas',
          headerLeft: () => (
        <IconButton
          icon="menu"
          iconColor="black"
          onPress={() => console.log("menu pressed")}
          />
        ),
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot" size={28} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'TechLab Support',
          tabBarLabel:'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <Tabs.Screen
        name="manuals"
        options={{
          headerShown: false,
          title: 'Manuals',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
