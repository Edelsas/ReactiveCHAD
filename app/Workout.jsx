import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

// extras downloaded through npm
import Slider from '@react-native-community/slider'
import { SelectList } from 'react-native-dropdown-select-list'

const Workout = () => {
    const router = useRouter();

    const [workout, setWorkout] = useState("");
    const [value, setValue] = useState(3);

    const workoutData = [
        {key: '1', value: "Legs"},
        {key: '2', value: "Arms"},
        {key: '3', value: "Abs"},
        {key: '4', value: "Cardio"},
    ]

    return (
        <SafeAreaView style={styles.centerAlign}>
            <Text style={styles.title}>Workout Planner</Text>
            
            <View style={{width: '80%'}}>
                <Text style={styles.header}>Workout Area</Text>

                {/* There's probably a better one to use than this one */}
                <SelectList
                    data={workoutData}
                    placeholder={workout}
                    setSelected={(val) => setWorkout(val)}
                    search={false}
                    maxHeight={120}
                />

                <View style={{paddingVertical: 32}}></View>
                
                <Text style={styles.header}>Workout Intensity</Text>
                <Text>Level {value}</Text>

                <Slider
                    style={{width: "100%", height: 40}}
                    minimumValue={1}
                    maximumValue={5}
                    value={value}  
                    onValueChange={setValue}
                    step={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />

            </View>

            <View style={{paddingVertical: 24}}></View>

            <Button title="Start" onPress={() => router.back()}></Button>
            <Button title="Back" onPress={() => router.back()}></Button>
        </SafeAreaView>
  )
}

export default Workout

const styles = StyleSheet.create({
    centerAlign: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: 'center',
        paddingBottom: 24
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingBottom: 16
    },
    line: {
        backgroundColor: 'black',
        width: '100%',
        height: 4
    }
})