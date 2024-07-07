import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

const StackLayout: React.FC = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: 'Home Screen',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
      </Stack>
    </>
  );
};

export default StackLayout;
