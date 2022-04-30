import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import {DrawerContent} from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent} screenOptions={{}}>
      <Drawer.Screen name="tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
