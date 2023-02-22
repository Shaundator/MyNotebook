import Notepad from "../screens/Notepad"
import NotepadList from "../screens/NotepadList"
import Test from "../screens/Test"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function RootStackNavigator(){
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Notepad List" component={NotepadList}/>
            <Stack.Screen name="Notepad" component={Notepad}/>
            <Stack.Screen name="Test" component={Test}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}