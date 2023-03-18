import { createStackNavigator } from "@react-navigation/stack";
import { Homer } from "../components/homecomponent";
import { Gamedetails } from "../components/gamedetails";

//stack navigator
const Stack = createStackNavigator();

export function HomeScreen({route,navigation}){

    return(
        <Stack.Navigator>
            <Stack.Screen name="homescreen" component={Homer} options={{headerShown:false}}/>
            <Stack.Screen name="homegamesdetails"  options={{headerShown:false}}>
                {
                    ({route,navigation})=> <Gamedetails route={route} navigation={navigation} screen={'homegamesdetails'}/>
                }
            </Stack.Screen>
        </Stack.Navigator>
    )
    
}
    