import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import MapaScreen from "../screens/MapaScreen";

// const Stack = createNativeStackNavigator();
const Stack = createDrawerNavigator();

export default function PrivateRoutes() {
    return(
        <NavigationContainer>
             <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
                <Stack.Screen name="Contatos" component={HomeScreen} options={{ headerShown: true }} />
                <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: true }} />
                <Stack.Screen name="Mapa" component={MapaScreen} options={{ headerShown: true }} />
             </Stack.Navigator>
        </NavigationContainer>
    );
}