import { Stack } from "expo-router";
import { SequencedTransition } from "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={ {headerShown: false} }></Stack.Screen>
      <Stack.Screen name="register" options={ {headerShown: false} }></Stack.Screen>
      <Stack.Screen name="Welcome" options={ {headerShown: false} }></Stack.Screen>
      <Stack.Screen name="OverallHealth" options={ {headerTitle: ""}} ></Stack.Screen>
      <Stack.Screen name="Workout" options={ {headerShown: false} }></Stack.Screen>

    </Stack>
  );
}
