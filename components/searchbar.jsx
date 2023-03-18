import { TextInput } from "react-native-paper";
import { View,Text,ImageBackground,StyleSheet } from "react-native";
import { useState } from "react";
import { Header } from "./header";
import { navigator } from "../function/navigator";

//styles
const styles = StyleSheet.create({
    parentview:{
        width:'100%',
        height:'100%',
        backgroundColor:'#232d3b',
        justifyContent:'center'
    },
    searchbar:{
        width:'80%',
        marginLeft:'10%',
    }
})

export function SearchGame({route,navigation}){
    //value to hold game to be searched
    const [game,setGame] = useState('')


    return(
            <View style={{backgroundColor:"#232d3b"}}>
                <Header/>
                <View style={styles.parentview}>
                            
                            <View>
                                <TextInput
                                    onEndEditing={()=>navigator('searchresults',game,navigation)}
                                    style={styles.searchbar}
                                    value={game}
                                    placeholder={'Search Game'}
                                    onChangeText={text => setGame((text))}
                                    right={<TextInput.Icon icon='magnify'/> }
                                    mode={'flat'}
                                />
                            </View>
                        </View>
        
            </View>
        
        
    )
}