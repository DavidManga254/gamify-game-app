import { View,Text,Image,ScrollView,Pressable,StyleSheet } from "react-native";
import { navigator } from "../function/navigator";

const styles = StyleSheet.create({
    scroll:{
        width:'100%'
    },
    parent:{
        flex:1,
        backgroundColor:"#232d3b"
    },
    list:{
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:'3%',
        paddingTop:"3%"
    },
    game:{
        width:'45%',
        marginRight:'5%',
        marginBottom:'10%'
    },
    imageview:{
        width:'100%',
        
    },
    imageview2:{
        width:'90%',
        backgroundColor:'yellow'
    },
    image:{
        width:'100%',
        aspectRatio:16/20,
        resizeMode:'stretch'
    },
    image2:{
        width:'10%',
        aspectRatio:1,
        resizeMode:'contain'
    },
    text:{
        color:'#d9dade',
        fontSize:17
    },
    text2:{
        textAlign:"center",
        fontSize:30,
        color:'#cbcdd0'
    },
    message:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'

    }
})
//component to display 
export function DisplayList({list,navigation}){

    if(list.length===0){
        return(
            <View style={styles.message}>
                <View style={styles.imageview}>
                    <Text style={styles.text2}>No Favorites Available</Text>
                </View>
            </View>
        )
    }else{
        return(
                <ScrollView style={styles.scroll}>
                    <View style={styles.list}>
                        {
                            list.map((game)=>{
                                return(
                                    <Pressable onPress={()=>navigator('favoritedetails',game.slug,navigation)} key={game.name} style={styles.game}>
                                        <View style={styles.imageview}>
                                            <Image style={styles.image} source={{uri:`https://${game.cover.replace('thumb','720p')}`}}/>
                                        </View>
                                    <Text style={styles.text} >{game.name}</Text>
    
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </ScrollView>
        )
    }
    
}