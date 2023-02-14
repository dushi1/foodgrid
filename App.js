import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Auth from './App/containers/Auth';

const Stack = createNativeStackNavigator();

export default function App() {
  const onReady = () => {
    SplashScreen.hide();
  }
  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator>
        <Stack.Screen name='Auth' component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}