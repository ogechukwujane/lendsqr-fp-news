import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp} from '../../screens';

export type AuthStackParams = {
  Login: undefined;
  Signup: undefined;
};

const AuthStacks = createNativeStackNavigator<AuthStackParams>();

export const AuthStack = () => {
  return (
    <AuthStacks.Navigator screenOptions={{headerShown: false}}>
      <AuthStacks.Screen name="Login" component={Login} />
      <AuthStacks.Screen name="Signup" component={SignUp} />
    </AuthStacks.Navigator>
  );
};
