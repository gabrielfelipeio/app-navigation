import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator, Group } = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes() {
    return (
        <Navigator>

            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
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
                        drawerLabel: 'Add',
                        drawerIcon: ({ color, size }) => (
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
                        drawerLabel: 'Delete',
                        drawerIcon: ({ color, size }) => (
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