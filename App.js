import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './App/containers/root/AppNavigator';



export default function App() {
  const onReady = () => {
    SplashScreen.hide();
  }
  return (
    <NavigationContainer onReady={onReady}>
      <AppNavigator />
    </NavigationContainer>
  );
}