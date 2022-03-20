import React from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

const Navigation = createBottomTabNavigator();

function MainScreen() {
  const [size, setSize] = React.useState('')
  const [priceFloor, setPriceFloor] = React.useState('')
  const [priceInstall, setPriceInstall] = React.useState('')
  const [switchValue, setSwitchValue] = React.useState(false)

  const toggleSwitch = () => {
    setSwitchValue((previousState) => !previousState)
    {
      switchValue ?
      (setSize(size * 10.764),
        setPriceFloor(priceFloor / 10.764),
        setPriceInstall(priceInstall / 10.764))
      : (setSize(size / 10.764),
        setPriceFloor(priceFloor * 10.764),
        setPriceInstall(priceInstall * 10.764));
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {switchValue ?
        <>
          <Text>Size of a room in square meters</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSize(text)}
            keyboardType='numeric'
            value={size.toString()} />
          <Text></Text>
          <Text>Price per unit of flooring</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPriceFloor(text)}
            keyboardType='numeric'
            value={priceFloor.toString()}
          />
          <Text></Text>
          <Text>Price per unit of floor installation</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPriceInstall(text)}
            keyboardType='numeric'
            value={priceInstall.toString()} />
          <Text></Text>
          <Text>Cost Summary:</Text>
          <Text>Installation cost before tax: ${(size * priceInstall).toFixed(2)}</Text>
          <Text>Flooring cost before tax: ${(size * priceFloor).toFixed(2)}</Text>
          <Text>Total cost: ${((size * priceFloor) + (size * priceInstall)).toFixed(2)}</Text>
          <Text>Tax: ${(((size * priceFloor) + (size * priceInstall)) * 0.13).toFixed(2)}</Text>
        </>
        :
        <>
          <Text>Size of a room in square feet</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSize(text)}
            keyboardType='numeric'
            value={size.toString()} />
          <Text></Text>
          <Text>Price per unit of flooring</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPriceFloor(text)}
            keyboardType='numeric'
            value={priceFloor.toString()} />
          <Text></Text>
          <Text>Price per unit of floor installation</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPriceInstall(text)}
            keyboardType='numeric'
            value={priceInstall.toString()} />
          <Text></Text>
          <Text>Cost Summary:</Text>
          <Text>Installation cost before tax: ${(size * priceInstall).toFixed(2)}</Text>
          <Text>Flooring cost before tax: ${(size * priceFloor).toFixed(2)}</Text>
          <Text>Total cost: ${((size * priceFloor) + (size * priceInstall)).toFixed(2)}</Text>
          <Text>Tax: ${(((size * priceFloor) + (size * priceInstall)) * 0.13).toFixed(2)}</Text>
          <Text></Text>
        </>
      }
      <Text></Text>
      <Text style={styles.text}>Square Feet | Square Meters </Text>
      <Switch
        style={{ marginTop: 0 }}
        onValueChange={toggleSwitch}
        value={switchValue} />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Name: Dilan Piyasenage Don</Text>
      <Text>Student ID: 101278656</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigation.Navigator intialRouteName='Main'>
        <Navigation.Screen name='Main' component={MainScreen}></Navigation.Screen>
        <Navigation.Screen name='About' component={AboutScreen}></Navigation.Screen>
      </Navigation.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    paddingLeft: 24
  },
  input: {
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    paddingBottom: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
