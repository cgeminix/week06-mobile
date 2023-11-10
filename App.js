import Screen1 from "./components/Screen1"
import Screen2 from "./components/Screen2"
import Screen3 from "./components/Screen3"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{headerShown:false}}
        />
        <Stack.Screen options={{headerShown:false}} name="Screen2" component={Screen2}/>
        <Stack.Screen options={{headerShown:false}} name="Screen3" component={Screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

