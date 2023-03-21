/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MainProvider from './MainProvider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainProvider);
