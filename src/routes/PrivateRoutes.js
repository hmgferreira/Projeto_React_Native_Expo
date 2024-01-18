import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";

// const Stack = createNativeStackNavigator();
const Stack = createDrawerNavigator();

export default function PrivateRoutes() {
    return(
        <NavigationContainer>
             <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
                <Stack.Screen name="Contatos" component={HomeScreen} options={{ headerShown: true }} />
             </Stack.Navigator>
        </NavigationContainer>
    );
}