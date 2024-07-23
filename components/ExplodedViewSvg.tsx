import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Rect, Circle, Text, Line } from 'react-native-svg';

const ExplodedViewSvg = () => {

  const handlePressBody = () => {
    console.log('Body pressed');
  };

  const handlePressEngine = () => {
    console.log('Engine pressed');
  };

  const handlePressFrontLeftWheel = () => {
    console.log('Front Left Wheel pressed');
  };

  const handlePressFrontRightWheel = () => {
    console.log('Front Right Wheel pressed');
  };

  const handlePressRearLeftWheel = () => {
    console.log('Rear Left Wheel pressed');
  };

  const handlePressRearRightWheel = () => {
    console.log('Rear Right Wheel pressed');
  };

  const handlePressRoof = () => {
    console.log('Roof pressed');
  };

  return (
    <View style={styles.container}>
      <Svg height="400" width="500">
        {/* Engine */}
        <Rect x="210" y="70" width="80" height="40" fill="green" />
        <Text x="250" y="95" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Engine</Text>
        <Line x1="250" y1="150" x2="250" y2="110" stroke="black" />

        {/* Body */}
        <Rect x="180" y="150" width="140" height="50" fill="blue" />
        <Text x="250" y="180" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Body</Text>
        
        {/* Roof */}
        <Rect x="210" y="250" width="80" height="30" fill="red" />
        <Text x="250" y="270" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Roof</Text>
        <Line x1="250" y1="200" x2="250" y2="250" stroke="black" />

        {/* Front Left Wheel */}
        <Circle cx="120" cy="150" r="20" fill="black" />
        <Text x="120" y="155" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">FL</Text>
        <Line x1="180" y1="175" x2="120" y2="150" stroke="black" />

        {/* Front Right Wheel */}
        <Circle cx="380" cy="150" r="20" fill="black" />
        <Text x="380" y="155" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">FR</Text>
        <Line x1="320" y1="175" x2="380" y2="150" stroke="black" />

        {/* Rear Left Wheel */}
        <Circle cx="120" cy="300" r="20" fill="black" />
        <Text x="120" y="305" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">RL</Text>
        <Line x1="180" y1="225" x2="120" y2="300" stroke="black" />

        {/* Rear Right Wheel */}
        <Circle cx="380" cy="300" r="20" fill="black" />
        <Text x="380" y="305" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">RR</Text>
        <Line x1="320" y1="225" x2="380" y2="300" stroke="black" />
      </Svg>

      {/* TouchableOpacity for Body */}
      <TouchableOpacity onPress={handlePressBody} style={[styles.touchable, { top: 150, left: 180, width: 140, height: 50 }]} />

      {/* TouchableOpacity for Engine */}
      <TouchableOpacity onPress={handlePressEngine} style={[styles.touchable, { top: 70, left: 210, width: 80, height: 40 }]} />

      {/* TouchableOpacity for Roof */}
      <TouchableOpacity onPress={handlePressRoof} style={[styles.touchable, { top: 250, left: 210, width: 80, height: 30 }]} />

      {/* TouchableOpacity for Front Left Wheel */}
      <TouchableOpacity onPress={handlePressFrontLeftWheel} style={[styles.touchable, { top: 150 - 20, left: 120 - 20, width: 40, height: 40 }]} />

      {/* TouchableOpacity for Front Right Wheel */}
      <TouchableOpacity onPress={handlePressFrontRightWheel} style={[styles.touchable, { top: 150 - 20, left: 380 - 20, width: 40, height: 40 }]} />

      {/* TouchableOpacity for Rear Left Wheel */}
      <TouchableOpacity onPress={handlePressRearLeftWheel} style={[styles.touchable, { top: 300 - 20, left: 120 - 20, width: 40, height: 40 }]} />

      {/* TouchableOpacity for Rear Right Wheel */}
      <TouchableOpacity onPress={handlePressRearRightWheel} style={[styles.touchable, { top: 300 - 20, left: 380 - 20, width: 40, height: 40 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    position: 'relative',
  },
  touchable: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});

export default ExplodedViewSvg;
