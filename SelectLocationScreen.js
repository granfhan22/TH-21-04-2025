import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity, Alert } from 'react-native';

const SelectLocationScreen = () => {
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState('');

  const handleSubmit = () => {
    if (!area) {
      Alert.alert('Error', 'Please select your area');
      return;
    }
    Alert.alert('Success', `Zone: ${zone}, Area: ${area}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Select Your Location</Text>
      <Text>Zone</Text>
      <Picker selectedValue={zone} onValueChange={setZone}>
        <Picker.Item label="Banasree" value="Banasree" />
        <Picker.Item label="Uttara" value="Uttara" />
        {/* Thêm các zone khác nếu cần */}
      </Picker>
      <Text>Area</Text>
      <Picker selectedValue={area} onValueChange={setArea}>
        <Picker.Item label="Select Area" value="" />
        <Picker.Item label="Sector 1" value="Sector 1" />
        <Picker.Item label="Sector 2" value="Sector 2" />
        {/* Thêm các area khác nếu cần */}
      </Picker>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectLocationScreen;
