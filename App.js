import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const {width, height} = Dimensions.get('window');

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#ff3232',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#ff3232',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#ff3232',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#ff3232',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#ff3232',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#ff3232',
};

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const data = [
    {
      label: 'Ordered and Approved',
      status: 'Your order has been placed',
      dateTime: 'Sat, 3rd Nov 11:49pm',
    },
    {
      label: 'Packed',
      status: 'Your item has been packed',
      dateTime: 'Sun, 4th Nov 12:30am',
    },
    {
      label: 'Shipped',
      status: 'Your item has been shipped',
      dateTime: 'Sun, 3rd Nov 03:30pm',
    },
    {
      label: 'Out for Delivery',
      status: 'Your item is out for delivery',
      dateTime: 'Sun, 4th Nov 5:30pm',
    },
    {
      label: 'Delivered',
      status: 'Your item has been delivered',
      dateTime: 'Sun, 4th Nov 08:30pm',
    },
  ];

  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };

  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Order Summary</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          direction="vertical"
          renderLabel={({position, stepStatus, label, crntPosition}) => {
            return (
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{data[position].label}</Text>
                <Text style={[styles.status, {marginTop: 5}]}>
                  {data[position].status}
                </Text>
                <Text style={styles.status}>{data[position].dateTime}</Text>
              </View>
            );
          }}
        />
        <TouchableOpacity style={styles.nextBtn} onPress={() => nextStep()}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    height: 55,
    padding: 10,
    width: '100%',
    backgroundColor: '#000',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#ff3232',
    fontSize: 22,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    height: height - 170,
    width: width - 30,
    padding: 20,
    paddingTop: 0,
    margin: 15,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: '#000',
  },
  labelContainer: {
    marginTop: 40,
    padding: 10,
    paddingLeft: 5,
    width: width - 100,
  },
  labelText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  status: {
    fontSize: 15,
    color: 'gray',
  },
  nextBtn: {
    alignSelf: 'flex-end',
  },
  text: {
    color: '#ff3232',
    fontSize: 18,
  },
});

export default App;
