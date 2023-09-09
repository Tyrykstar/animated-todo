import { StatusBar } from 'expo-status-bar'
import AppContainer from './src/components/app-container'
import Navigator from './src'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

export default function App() {
    // console.log(Dimensions.get('window').width)

    return (
        <AppContainer>
            <Navigator />
        </AppContainer>
    )
}
