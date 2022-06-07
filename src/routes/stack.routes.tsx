import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator, Group } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function StackRoutes() {
    return (
        <Navigator>

            <Screen
                name='screenA'
                options={{
                    headerShown: false,
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
                        headerTintColor: '#fff'
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
                        headerTintColor: '#fff'
                    }}
                    component={ScreenC}
                />

            </Group>


        </Navigator>
    )
}