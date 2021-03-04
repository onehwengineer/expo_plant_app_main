/*
 * Authentication flow is omitted here for simplicity.
 * Need to integrate AWS Amplify authentication later.
 * https://github.com/onehwengineer/expo_amplify_init2
 */

import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';


export default function App() {
    return (
        <AppNavigator />
    );
}