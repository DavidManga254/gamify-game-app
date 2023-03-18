import { View,StyleSheet } from "react-native";
import { useEffect,useState } from "react";
import { LoadingScreen } from "./loadingscreen";
import { Header } from "./header";
import { DisplayList } from "./favouritelist";
import { getData } from "../function/storage";
import { useIsFocused } from "@react-navigation/native";

//styes 
const stylesheet = StyleSheet.create({
    parent:{
        flex:1,
        backgroundColor:'#232d3b'
    }
})


export function Favouritelist({route,navigation}){
    //state to store list 
    const [favourite,setFavourite] = useState(null);

    const [forceUpdate, setForceUpdate] = useState(false);
    const isFocused = useIsFocused();


    useEffect(()=>{
        getData('favorites').then((response)=>setFavourite(response));

        if (isFocused) {
            setForceUpdate((prev) => !prev);
          }

    },[isFocused]);

    if(favourite === null){
        return(
            <LoadingScreen/>
        )
    }else{
        return(
            <View style={stylesheet.parent} >
                <Header Content={'Favourites'}/>
                <DisplayList navigation={navigation} list={favourite}/>
            </View>
        )
    }

}