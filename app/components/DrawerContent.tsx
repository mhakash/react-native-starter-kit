import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {Linking} from 'react-native';

export const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() =>
          Linking.openURL('https://reactnavigation.org/docs/drawer-navigator/')
        }
      />
      <DrawerItem
        label="Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </DrawerContentScrollView>
  );
};
