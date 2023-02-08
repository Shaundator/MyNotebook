import Notepad from "../screens/Notepad"
import NotepadList from "../screens/NotepadList"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Stack = createNativeStackNavigator();


export default function RootStackNavigator(){
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Notepad List" component={NotepadList}/>
            <Stack.Screen name="Notepad" component={Notepad}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}