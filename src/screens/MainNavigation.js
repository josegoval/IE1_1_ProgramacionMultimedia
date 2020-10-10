// React
import React from 'react';
import {Text} from 'react-native';
// React Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import Finder from './Finder';
import Todos from './Todos';
import Minigame from './Minigame';
// Icons
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const createTabOptions = (label, icon, activeColor) => ({
  tabBarLabel: ({focused, color}) => (
    <Text style={{color: focused ? activeColor : color}}>{label}</Text>
  ),
  tabBarIcon: ({focused, color, size}) => (
    <Icon name={icon} color={focused ? activeColor : color} size={size} />
  ),
});

const FinderTabOptions = createTabOptions('Finder', 'search', '#D12621');

const TodosTabOptions = createTabOptions('Todos', 'tasks', '#3351FF');

const MinigameTabOptions = createTabOptions('Minigame', 'dice-d20', '#B921D1');

export default function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Finder"
      tabBarOptions={{allowFontScaling: true}}>
      <Tab.Screen name="Finder" component={Finder} options={FinderTabOptions} />
      <Tab.Screen name="Todos" component={Todos} options={TodosTabOptions} />
      <Tab.Screen
        name="Minigame"
        component={Minigame}
        options={MinigameTabOptions}
      />
    </Tab.Navigator>
  );
}
