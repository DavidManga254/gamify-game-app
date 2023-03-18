import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/homescreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SearchScreen } from "../screens/searchscreen";
import { initializa } from "../function/storage";
import { FavouritesScreen } from "../screens/favouritesScreeen";


//drawer navigater
const Drawer = createDrawerNavigator();

//component to combine all screens
export function CompleteApp(){
    initializa('favorites');
    return(
        <Drawer.Navigator screenOptions={{
            drawerStyle : {backgroundColor:'#232d3b'}
        }}>

            
            <Drawer.Screen options={{
                        drawerLabelStyle:{color:'green'} ,
                        headerShown:false,
                        drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={24} color="green" />
                        ),
                }}  name="Home" component={HomeScreen} />

            
            <Drawer.Screen options={{
                        drawerLabelStyle:{color:'green'} ,
                        headerShown:false,
                        drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" size={24} color="green" />
                        ),
                }}  name="Search" component={SearchScreen} />

            <Drawer.Screen options={{
                        drawerLabelStyle:{color:'green'} ,
                        headerShown:false,
                        drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" size={24} color="green" />
                        ),
                }}  name="Favourites" component={FavouritesScreen} />



        </Drawer.Navigator>
    )
}