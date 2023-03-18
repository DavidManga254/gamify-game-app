import { Appbar } from "react-native-paper";
import { drawSidebar } from "../function/sidedrawer";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { navigator } from "../function/navigator";



export function Header({Content,position,padding}){
    //navigation
    const navigation = useNavigation();

    //styles
    const styles = StyleSheet.create({
    header:{
        backgroundColor:'transparent',
        position:position,
        zIndex:1,
        justifyContent:'space-between',
        width:'100%',
        paddingTop:padding,
    }
    })

    return(
        <Appbar.Header style={styles.header} >
            <Appbar.Action color="white" icon={"menu"} onPress={() => drawSidebar(navigation)} />
            <Appbar.Content titleStyle={{color:'white'}} title={Content}/>
            <Appbar.Action color="white" icon={"magnify"} onPress={() => navigator('searchscreen','',navigation)} />
        </Appbar.Header>
    )
}
