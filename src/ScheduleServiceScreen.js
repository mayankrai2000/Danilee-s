import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ScheduleServiceScreen = () => {
  const [serviceType, setServiceType] = useState('adhoc');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const services = [
    { id: 1, name: 'Child Care' },
    { id: 2, name: 'Tutoring' },
    { id: 3, name: 'After School Program' },
  ];

  const times = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Schedule a Service</Text>
        
        {/* Service Type Selection */}
        <View style={styles.serviceTypeContainer}>
          <TouchableOpacity
            style={[
              styles.serviceTypeButton,
              serviceType === 'adhoc' && styles.activeButton
            ]}
            onPress={() => setServiceType('adhoc')}
          >
            <Text style={[
              styles.serviceTypeText,
              serviceType === 'adhoc' && styles.activeText
            ]}>Adhoc</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.serviceTypeButton,
              serviceType === 'recurring' && styles.activeButton
            ]}
            onPress={() => setServiceType('recurring')}
          >
            <Text style={[
              styles.serviceTypeText,
              serviceType === 'recurring' && styles.activeText
            ]}>Recurring</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.locationText}>Danilee's Pelham, NY</Text>
        <Text style={styles.sectionTitle}>Select Service</Text>
        <View style={styles.optionsContainer}>
          {services.map(service => (
            <TouchableOpacity
              key={service.id}
              style={[
                styles.optionButton,
                selectedService?.id === service.id && styles.selectedOption
              ]}
              onPress={() => setSelectedService(service)}
            >
              <Text style={styles.optionText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => {}}
        >
          <Text style={styles.datePickerText}>
            {selectedDate || 'Choose a date'}
          </Text>
        </TouchableOpacity>
        {serviceType === 'adhoc' && (
          <>
            <Text style={styles.sectionTitle}>Select Time</Text>
            <View style={styles.timeOptionsContainer}>
              {times.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeOption,
                    selectedTime === time && styles.selectedTime
                  ]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text style={[
                    styles.timeText,
                    selectedTime === time && styles.selectedTimeText
                  ]}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {serviceType === 'recurring' && (
          <View>
            <Text style={styles.sectionTitle}>Recurring Options</Text>
          </View>
        )}

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.seeAllPlansButton}>
          <Text style={styles.seeAllPlansText}>See All Plans</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  serviceTypeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  serviceTypeButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  activeButton: {
    backgroundColor: '#3498db',
  },
  serviceTypeText: {
    fontSize: 16,
    color: '#666',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: '#3498db',
    backgroundColor: '#e6f2ff',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  datePickerButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
  },
  datePickerText: {
    fontSize: 16,
    color: '#333',
  },
  timeOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeOption: {
    width: '30%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedTime: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTimeText: {
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllPlansButton: {
    alignItems: 'center',
  },
  seeAllPlansText: {
    color: '#3498db',
    fontSize: 16,
  },
});

export default ScheduleServiceScreen;