import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecurringBookingDetail = () => {
  const bookings = [
    {
      id: 1,
      plan: 'Monthly Plan (1-child) 1-2 Days',
      location: 'At Learning Center',
      startDate: '13-Apr-25',
      days: 'Monday,Tuesday',
      status: 'pending',
    },
    {
      id: 2,
      plan: 'Monthly Plan (1-child) 1-2 Days',
      location: 'At Learning Center',
      startDate: '13-Mar-25',
      days: 'Monday,Tuesday',
      status: 'approved',
    },
  ];

  const getStatusStyle = (status) => {
    return {
      backgroundColor: status === 'pending' ? '#B3E5FC' : '#EF9A9A',
      color: status === 'pending' ? '#0288D1' : '#B71C1C',
    };
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {bookings.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.planText}>{item.plan}</Text>
              <View style={[styles.statusBadge, { backgroundColor: getStatusStyle(item.status).backgroundColor }]}>
                <Text style={[styles.statusText, { color: getStatusStyle(item.status).color }]}>
                  {item.status}
                </Text>
              </View>
            </View>
            <Text style={styles.subText}>
              {item.location}, Starts from: {item.startDate}
            </Text>
            <Text style={styles.subText}>{item.days}</Text>
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
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    flex: 1,
    marginRight: 10,
  },
  statusBadge: {
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  subText: {
    marginTop: 4,
    fontSize: 13,
    color: '#555',
  },
});

export default RecurringBookingDetail;
