import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from './Navigation/Tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import {Provider} from 'react-redux';
import store from './src/store';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Tabs">
          <Drawer.Screen name="Home" component={Tabs} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
