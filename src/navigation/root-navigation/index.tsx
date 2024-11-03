import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, AuthStackParams} from '../auth-navigation';
import {NavigatorScreenParams} from '@react-navigation/native';
import {SplashScreen} from '../../screens';

export type RootStackParams = {
  SplashScreen: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
};

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};
