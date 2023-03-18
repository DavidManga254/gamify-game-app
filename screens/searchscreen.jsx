import { createStackNavigator } from "@react-navigation/stack";
import { SearchGame } from "../components/searchbar";
import { Results } from "../components/reults";
import { Gamedetails } from "../components/gamedetails";


//stack navigator
const Stack = createStackNavigator()

//search screen stack navigator
export function SearchScreen({route,navigation}){
    return(
        <Stack.Navigator>
            <Stack.Screen name="searchscreen" component={SearchGame} options={{headerShown:false}} />
            <Stack.Screen name="searchresults" component={Results} options={{headerShown:false}} />
            <Stack.Screen name="searchdetails" options={{headerShown:false}}>
                {
                    ({route,navigation})=> <Gamedetails route={route} navigation={navigation} screen='searchdetails'/>
                }
            </Stack.Screen>
        </Stack.Navigator>
    )
}