import { createNativeStackNavigator } from "@react-navigation/native-stack"
// Navigator: RoutesControl || Screen: DisplayComponentsReactNative
const { Navigator, Screen } = createNativeStackNavigator()

// Screens
import { Home } from "../screens/Home"
import { New } from "../screens/New"
import { Habits } from "../screens/Habits"

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="home"
                component={Home}
            />
            <Screen 
                name="new"
                component={New}
            />
            <Screen 
                name="habits"
                component={Habits}
            />
        </Navigator>
    )
}
