import Auth from "./screens/Auth"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "./screens/Signup";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false, title: '' }}

        />

        <Stack.Screen
          name="auth"
          component={Auth}
          options={{ headerShown: false, title: '' }}
        />
        <Stack.Screen
          name="signup"
          component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
