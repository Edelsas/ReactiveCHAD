import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import axios from 'axios';

const OPENAI_API_KEY = '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'; // <-- Replace safely

const Diet = () => {
  const [preference, setPreference] = useState('');
  const [mealType, setMealType] = useState('single'); // 'single' or 'fullDay'
  const [singleMealTime, setSingleMealTime] = useState('Lunch'); // Breakfast, Lunch, Dinner
  const [aiMealPlan, setAiMealPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const generateDiet = async () => {
    if (!preference) return;
    setLoading(true);

    let userPrompt = '';

    if (mealType === 'fullDay') {
      userPrompt = `Create a full-day meal plan (Breakfast, Lunch, Dinner) for the following preference: ${preference}. Include Meal Name, Ingredients List, and Nutrition Information (Calories, Protein, Carbs, Fat) for each meal.`;
    } else {
      userPrompt = `Suggest a ${singleMealTime} based on: ${preference}. Include Meal Name, Ingredients List, and Nutrition Information (Calories, Protein, Carbs, Fat).`;
    }

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful AI dietitian. Always provide meal name, ingredients list, and estimated nutrition facts.' },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.7,
          max_tokens: 600,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
      const aiText = response.data.choices[0].message.content;
      setAiMealPlan(aiText);
    } catch (error) {
      console.error('Error fetching from OpenAI:', error);
      setAiMealPlan('There was an error generating your meal plan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Diet Recommender</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your diet preference (e.g., vegetarian high-protein)"
        value={preference}
        onChangeText={setPreference}
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Meal Plan Type:</Text>
        <Picker
          selectedValue={mealType}
          style={styles.picker}
          onValueChange={(itemValue) => setMealType(itemValue)}
        >
          <Picker.Item label="Single Meal" value="single" />
          <Picker.Item label="Full Day Plan" value="fullDay" />
        </Picker>
      </View>

      {mealType === 'single' && (
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Meal Time:</Text>
          <Picker
            selectedValue={singleMealTime}
            style={styles.picker}
            onValueChange={(itemValue) => setSingleMealTime(itemValue)}
          >
            <Picker.Item label="Breakfast" value="Breakfast" />
            <Picker.Item label="Lunch" value="Lunch" />
            <Picker.Item label="Dinner" value="Dinner" />
            <Picker.Item label="Snack" value="Snack" />
          </Picker>
        </View>
      )}

      <Button title="Generate Meal Plan" onPress={generateDiet} />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : aiMealPlan ? (
        <View style={styles.result}>
          <Text style={styles.resultText}>{aiMealPlan}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Diet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  result: {
    marginTop: 30,
    backgroundColor: '#e0f7fa',
    padding: 20,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 16,
  },
});
