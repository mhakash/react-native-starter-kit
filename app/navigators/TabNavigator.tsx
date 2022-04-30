import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();

const Tab1 = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab 1</Text>
      <Button
        title="home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab 2</Text>
    </View>
  );
};

export const TabNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="tab1"
        component={Tab1}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="alpha-a" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab2"
        component={Tab2}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="alpha-b" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
