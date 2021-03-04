import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProductScreen from '../screens/ProductScreen';

import {colors, sizes} from '../styles/Styles'; 

const Stack = createStackNavigator();


export default function AppNavigator() { 

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="Welcome" 
                    screenOptions={{
                        cardStyle: { // DEFAULT "CONTAINER" STYLING FOR ALL SCREENS
                            backgroundColor: colors.white,
                        },
                        headerStyle: {
                            height: sizes.headerHeight,
                            backgroundColor: colors.white, // debug : colors.accent,
                            borderBottomColor: "transparent",
                            shadowColor: "transparent", // Removes underline below header
                            elevation: 0, // for android
                        },
                        headerBackImage: () => <Image source={require('../../assets/icons/back.png')} />,
                        headerBackTitleVisible: false,
                        headerLeftContainerStyle: {
                            alignItems: 'center',
                            marginLeft: sizes.base * 2,
                            paddingRight: sizes.base,
                        },
                        headerRightContainerStyle: {
                            alignItems: 'center',
                            paddingRight: sizes.base,
                        },              
                    }}
                >
                    <Stack.Screen 
                        name="Welcome" 
                        component={WelcomeScreen} 
                        options={{title: false, headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{title: false, headerShown: false }}
                    />
                    <Stack.Screen 
                        name="Explore" 
                        component={ExploreScreen} 
                        options={{title: false}}
                    />
                    <Stack.Screen 
                        name="Product" 
                        component={ProductScreen} 
                        options={{title: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}