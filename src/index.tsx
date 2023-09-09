import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'
import { View } from 'native-base'

const Drawer = createDrawerNavigator()

const App = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                drawerType: 'back',
                overlayColor: '#000000'
            }}
        >
            <Drawer.Screen name="Main" component={MainScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}

export default App
