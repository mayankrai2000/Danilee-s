import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import NotificationsScreen from './src/NotificationsScreen';
import InProgressScreen from './src/InProgressScreen';
import LandingPage from './src/LandingPage';
import AdhocBookings from './src/AdhocBookings';
import { StatusBar } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <>
      <StatusBar hidden={true} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'AdhocBookings') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF69B4',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen   name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                  title: 'Schedule',
                  headerTitleAlign: 'center', 
                  headerStyle: {
                    backgroundColor: '#A5D71E',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('NotificationScreen')}
                      style={{ marginRight: 15 }}
                    >
                      <Ionicons name="notifications-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                  ),
                })}/>
                  <Tab.Screen
                    name="AdhocBookings"
                    component={AdhocBookings}
                    options={({ navigation }) => ({
                      title: 'Adhoc Bookings',
                      headerTitleAlign: 'center',
                      headerStyle: {
                        backgroundColor: '#A5D71E',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      headerLeft: () => (
                        <TouchableOpacity
                          style={{ marginLeft: 15 }}
                        >
                          <Text style={{ 
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize : 16,
                          }}>
                            Recurring
                          </Text>
                        </TouchableOpacity>
                      ),
                      headerRight: () => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('NotificationScreen')}
                          style={{ marginRight: 15 }}
                        >
                          <Ionicons name="notifications-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                      ),
                    })}
                  />
                <Tab.Screen   name="Profile"
                component={ProfileScreen}
                options={({ navigation }) => ({
                  title: 'Profile',
                  headerTitleAlign: 'center', 
                  headerStyle: {
                    backgroundColor: '#A5D71E',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('NotificationScreen')}
                      style={{ marginRight: 15 }}
                    >
                      <Ionicons name="notifications-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                  ),
                })}/>
      </Tab.Navigator>
    </>
  );
}


function SplashWrapper({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return <LandingPage />;
}

function App() {
  return (
    <>
      <StatusBar backgroundColor="#A5D71E" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="LandingPage" 
            component={SplashWrapper} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Main" 
            component={MainTabs} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="InProgress" 
            component={InProgressScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ 
              title: 'Login',
              headerTitleAlign: 'center', 
              headerStyle: {
                
                backgroundColor: '#A5D71E',
              },
              headerTintColor: '#fff', 
              cardStyle: {
                backgroundColor: '#A5D71E'
              }
            }} 
          />
          <Stack.Screen 
            name="NotificationScreen" 
            component={NotificationsScreen} 
            options={{ 
              title: 'Notifications',
              headerTitleAlign: 'center', 
              headerStyle: {
                
                backgroundColor: '#A5D71E',
              },
              headerTintColor: '#fff', 
              cardStyle: {
                backgroundColor: '#A5D71E'
              }
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default App;
