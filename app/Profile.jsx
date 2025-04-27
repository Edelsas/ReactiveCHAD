import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Profile = () => {
  
  const router = useRouter();

  // same variables in the android app
  let username = "username";
  let weight = "35";
  let weightGoal = "";
  let calorieIntake = "";
  let preferredDiet = "";

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Profile Information</Text>

      <View>
        <Text>Username: {username}</Text>
        <Text>Weight: {weight}</Text>
        <Text>🎯 Weight Goal: {weightGoal}</Text>
        <Text>🔥 Calorie Intake: {calorieIntake}</Text>
        <Text>Preferred Diet: {preferredDiet}</Text>
      </View>

      <View style={{paddingVertical: 24}}/>

      <TouchableOpacity style={styles.button} onPress={() => router.navigate('/EditProfile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBack} onPress={()=> router.back()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    marginBottom: 16
  },
  button: {
    padding: 15,
    width: '70%',
    backgroundColor: 'rgb(70, 181, 255)', 
    borderRadius: 20,
    marginVertical: 13
  },
  buttonBack: {
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