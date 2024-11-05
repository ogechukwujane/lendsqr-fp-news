import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, AuthStackParams} from '../auth-navigation';
import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeScreen, SplashScreen, ViewNewsScreen} from '../../screens';

export type RootStackParams = {
  SplashScreen: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  HomeScreen: undefined;
  ViewNewsScreen: undefined;
};

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ViewNewsScreen" component={ViewNewsScreen} />
    </Stack.Navigator>
  );
};
