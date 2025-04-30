import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const AdhocBookings = () => {
  const [selectedTab, setSelectedTab] = useState('Adhoc');
  const [bookingStatus, setBookingStatus] = useState('InProgress');

  return (
    <View style={styles.container}>
      <View style={styles.segment}>
        <TouchableOpacity
          style={[styles.segmentButton, bookingStatus === 'InProgress' && styles.segmentSelected]}
          onPress={() => setBookingStatus('InProgress')}
        >
          <Text style={[styles.segmentText, bookingStatus === 'InProgress' && styles.segmentTextSelected]}>
            In-Progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.segmentButton, bookingStatus === 'Completed' && styles.segmentSelected]}
          onPress={() => setBookingStatus('Completed')}
        >
          <Text style={[styles.segmentText, bookingStatus === 'Completed' && styles.segmentTextSelected]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {/* Booking Content */}
      <View style={styles.content}>
        <Text style={styles.noBookingText}>No booking found</Text>
      </View>

      {/* Floating Action Buttons */}
      <View style={styles.fabLeft}>
        <TouchableOpacity style={styles.fabButton}>
          <Ionicons name="filter" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.fabRight}>
        <TouchableOpacity style={styles.fabButton}>
          <Ionicons name="calendar" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: '#fff',
    paddingTop: 0, 
   },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A5D71E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerTab: {
    fontSize: 16,
    color: '#fff',
    marginRight: 15,
  },
  activeTab: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  bellIcon: {
    position: 'absolute',
    right: 20,
  },

  segment: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  segmentSelected: {
    backgroundColor: '#A5D71E',
  },
  segmentText: {
    fontSize: 14,
    color: '#888',
  },
  segmentTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBookingText: {
    fontSize: 16,
    color: '#999',
  },

  fabLeft: {
    position: 'absolute',
    bottom: 40,
    left: 30,
  },
  fabRight: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  fabButton: {
    backgroundColor: '#e91e63',
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

export default AdhocBookings;
