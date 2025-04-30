import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      title: 'Booking #DRHJ248 - At Learning Center',
      description: 'Monthly Plan - Starter Family(1-Children),1-2 Days(Monday,Tuesday) has approved',
      date: '12-Mar-25, 07:26 PM',
    },
    {
      id: 2,
      title: 'Invoice for booking #DRHJ248 - At Learning Center',
      description: 'Monthly Plan - Starter Family(1-Children),1-2 Days(Monday,Tuesday) is ready',
      date: '12-Mar-25, 07:26 PM',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            <Text style={styles.notificationDate}>{notification.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0, 
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },

  notificationCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 12,
    color: '#777',
  },
});

export default NotificationsScreen;