import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from './root-navigation';

export type INavSetting = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParams>,
  NativeStackNavigationProp<RootStackParams>
>;
