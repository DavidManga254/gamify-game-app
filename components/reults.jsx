import { View,Text,Image,StyleSheet,FlatList,Pressable } from "react-native";
import { useState,useEffect } from "react";
import { search } from "../function/fetchers";
import { LoadingScreen } from "./loadingscreen";
import { Header } from "./header";
import { truncateString } from "../function/truncate";
import { navigator } from "../function/navigator";

//styles
const styles = StyleSheet.create({
    parent:{
        backgroundColor:'#232d3b',
        flex:1
    },
    list:{
        width:'100%',
        paddingLeft:'3%',

    },
    gamelist:{
        width:'90%',
        flexDirection:'row',
        marginBottom:'7%'
    },
    imagelist:{
        width:'40%',
        marginRight:'5%'
    },
    image:{
        width:'100%',
        aspectRatio:16/17,
        resizeMode:'stretch'
    },
    details:{
        width:'50%'
    },
    name:{
        marginBottom:'2%',
        fontSize:15,
        color:'#d5d7da'
    },
    story:{
        fontSize:12,
        color:'#71767c'
    }
})


export function Results({route,navigation}){
    //store the search results
    const [results,setResult] = useState(null);

    //store data
    const {data} = route.params;

    //fetch and store the request
    useEffect(()=>{
        search(data).then((response)=>{setResult(response)});
    },[data])

    if(results===null){
        return(
            <LoadingScreen/>
        )
    }else{
        return(
            <View style={styles.parent}>
                <Header Content={data.toUpperCase()}/>
                <View style={styles.list}>
                    <FlatList 
                        data={results}
                        renderItem={({item})=>{
                            if (!item.cover || !item.cover.url) {
                            return null;
                            } else {
                            return (
                                <Pressable onPress={()=>navigator('searchdetails',item.slug,navigation)} style={styles.gamelist}>
                                    <View style={styles.imagelist}>
                                        <Image style={styles.image} source={{uri:`https://${item.cover.url.replace('thumb','720p')}`}} />
                                    </View>
                                    <View style={styles.details}>
                                        <Text style={styles.name}>{item.name} </Text>
                                        <Text style={styles.story}>{item.summary?truncateString(item.summary,20):null} </Text>
                                        
                                    </View>
                                </Pressable>
                            )
                            }
                        }}
                        keyExtractor={item => item.slug}
                    />    
                </View>
            </View>
        )
    }
}