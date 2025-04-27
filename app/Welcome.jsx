import { Button, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


// custom resuable button
const WideButton = props => {
  const router = useRouter();

  return (
    <TouchableHighlight 
      onPress={() => router.navigate(props.navigate)}
      style={styles.button}
      underlayColor={'rgb(47, 131, 188)'}
      >
      <Text style={styles.buttonText}>{props.text}</Text>

    </TouchableHighlight>
  );
}

const Welcome = () => {
  const router = useRouter();
  
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>

      <Text style={styles.title}>Welcome to C.H.A.D.</Text>

      <View style={styles.buttonLayout}>
        <WideButton text="Profile" navigate="/Profile"></WideButton>
        <WideButton text="Health Trackers" navigate="/OverallHealth"></WideButton>
        <WideButton text="Diet Recommender" navigate="/Diet"></WideButton>
        <WideButton text="Workout Planner" navigate="/Workout"></WideButton>
        <WideButton text="Settings" navigate="/Settings"></WideButton>
        <WideButton text="Support" navigate="/Profile"></WideButton>

        <TouchableHighlight 
          onPress={() => router.back()}
          style={styles.smallButton}
          underlayColor={'rgba(188, 54, 47, 0.63)'}
          >
          <Text style={styles.buttonText}>Log Out</Text>

        </TouchableHighlight>

      </View>

    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  linkText: {
    color: 'blue'
  },
  buttonLayout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    width: '70%',
    backgroundColor: 'rgb(70, 181, 255)', 
    borderRadius: 20,
    marginVertical: 13
  },
  smallButton: {
    padding: 15,
    width: '30%',
    backgroundColor: 'rgb(228, 34, 34)', 
    borderRadius: 20,
    marginVertical: 13
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
})