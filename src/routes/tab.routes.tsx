import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator, Group } = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray'
            }}
        >

            <Screen
                name='screenA'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
                component={ScreenA}
            />

            <Group
                screenOptions={{
                    headerTitleAlign: 'center',
                }}
            >

                <Screen
                    name='screenB'
                    options={{
                        title: 'Screen B',
                        headerStyle: {
                            backgroundColor: 'navy'
                        },
                        headerTintColor: '#fff',
                        tabBarLabel: 'Add',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="add"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                    component={ScreenB}
                />

                <Screen
                    name='screenC'
                    options={{
                        title: 'Screen C',
                        headerStyle: {
                            backgroundColor: '#2F450D'
                        },
                        headerTintColor: '#fff',
                        tabBarLabel: 'Delete',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="delete"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                    component={ScreenC}
                />

            </Group>


        </Navigator>
    )
}