import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function PublicRoutes() {
    return(
        <NavigationContainer>
             <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={} />
             </Stack.Navigator>
        </NavigationContainer>
    );
}