import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from './root-navigation';
import {AuthStackParams} from './auth-navigation';

export type INavSetting = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParams>,
  NativeStackNavigationProp<RootStackParams>
>;
