import { createStackNavigator } from "@react-navigation/stack";
import { useState,useEffect } from "react";
import { Favouritelist } from "../components/favourite";
import { Gamedetails } from "../components/gamedetails";


//stack navigator
const Stack = createStackNavigator();

export function FavouritesScreen({route,navigation}){
   return(
    <Stack.Navigator>
        <Stack.Screen name='favouritelist' component={Favouritelist} options={{headerShown:false}} />
        <Stack.Screen name='favoritedetails' options={{headerShown:false}} >
            {
               ({route,navigation}) => <Gamedetails route={route} navigation={navigation} screen={'favoritedetails'} />
            }
        </Stack.Screen>
    </Stack.Navigator>
   )
}