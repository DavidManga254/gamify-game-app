import { View,Text,Modal,Image,StyleSheet,ScrollView,FlatList,Dimensions,Pressable } from "react-native";
import { useState,useEffect } from "react";
import { LoadingScreen } from "./loadingscreen";
import { Header } from "./header";
import { gameDetails } from "../function/fetchers";
import YoutubePlayer from "react-native-youtube-iframe";
import { pushNavigator } from "../function/navigator";
import CollapsibleView from "./collapse";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { storeData } from "../function/storage";

//styles
const styles = StyleSheet.create({
    scroll:{
        width:'100%',
        backgroundColor:'#232d3b'
    },
    mainparent:{
        width:'100%'
    },
    gameImage:{
        width:'100%',
        marginBottom:'4%'
    },
    coverImage:{
        width:'100%',
        aspectRatio:16/13,
        resizeMode:'stretch'
    },
    gamename:{
        color:'white',
        
        fontSize:30,
        fontWeight:'bold',
        
    },
    gradient:{
        position:'absolute',
        bottom:0,
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7)'
    },
    company:{
        color:'#b9352b',
        fontSize:15,
        marginBottom:'2%'
    },
    content:{
        paddingLeft:'3%',
        paddingRight:'3%',
        marginBottom:'4%'
    },
    storyline:{
        color:'#818385',
        fontSize:15
    },
    media:{
        paddingLeft:'3%'
    },
    media2:{
        width:'100%',
        paddingLeft:'3%',
        paddingRight:'3%',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    youtube:{
        width:'100%',
        height:400
    },
    games:{
        width:'30%',
        marginRight:'3.3%',
        marginBottom:'8%'

    },
    gameImage2:{
        width:'100%',
        aspectRatio:16/21,
        resizeMode:'stretch'
    },
    gameText:{
        color:'white',
        position:'absolute',
        bottom:0
    },
    press:{
        flexDirection:'row',
    }
})

export function Gamedetails({route,navigation,screen}){
    //state to hold game details
    const [gameData,setGamedata] = useState(null);

    const { width, height } = Dimensions.get('window');

    //slug fot the game
    let {data} = route.params;

    useEffect(()=>{
        //fetch the details of game and store in gameData
        gameDetails(data).then((response) => {setGamedata(response)
        })

    },[data]);

    if(gameData === null){
        return(
            <LoadingScreen/>
        )
    }else{
        return(
            <ScrollView style={styles.scroll} >
                <View>
                    <Header position={'absolute'} padding={'10%'} />
                <View style={styles.mainparent} >
                    <View style={styles.gameImage}>
                        <Image style={styles.coverImage} source={{uri:`https://${gameData.cover.url.replace('thumb','720p')}`}} />
                        <View style={styles.gradient}>
                            <Text style={styles.gamename} >{gameData.name}</Text>
                        </View>
                        
                    </View>
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.company} >{gameData.involved_companies[0].company.name}</Text>
                        </View>
                        <Pressable onPress={()=>storeData({name:gameData.name,cover:gameData.cover.url,slug:data},'favorites')} style={styles.press} >
                            <MaterialCommunityIcons name="heart" size={24} color="#b9352b" /><Text style={styles.company} >Add to Favorites</Text>
                        </Pressable>
                        <View>
                            <CollapsibleView text={gameData.storyline?gameData.storyline:''}/>
                            
                        </View>
                    </View>
                    <View style={styles.media}>
                        <Text style={styles.company}>Snapshots</Text>
                        <FlatList 
                                    horizontal={true}
                                    data={gameData.screenshots}
                                    renderItem={({item})=> <Image style={{aspectRatio: 16/11,
                                    width: width * 0.7 - 12, // Set the width to 50% of the screen width minus some margin
                                    margin: 6,resizeMode:'stretch'}} source={{uri:`https://${item.url.replace('thumb','720p')}`}}/> }
                                    keyExtractor={item => item.id}
                        />

                       <Text style={styles.company}>Trailers</Text>
                        <FlatList 
                                    horizontal={true}
                                    data={gameData.videos}
                                    renderItem={({item})=> <View style={{aspectRatio: 16/9,
                                    width: width * 0.85 - 12, // Set the width to 50% of the screen width minus some margin
                                    margin: 6}}>
                                                <YoutubePlayer
                                                                height={300}
                                                                style={{
                                                                aspectRatio:16/9}}
                                                                play={false}
                                                                videoId={item.video_id}
                                                                webViewStyle={ {opacity:0.99} }
                                    />

                                    </View> }
                                    keyExtractor={item => item.video_id}
                        />

                        <Text style={styles.company}>Similar Games</Text>
                    </View>
                    <View style={styles.media2}>
                        
                        {
                            gameData.similar_games.map((game,index)=>{
                                if(game.cover!==undefined){
                                    return(
                                    <Pressable onPress={()=>pushNavigator(screen,game.slug,navigation)} style={styles.games} key={index} >
                                            <Image style={styles.gameImage2} source={{uri:`https://${game.cover.url.replace('thumb','720p')}`}} />
                                            <Text style={styles.gameText} >{game.name}</Text>
                                    </Pressable>
                                )
                                }
                                
                            })
                        }
                    </View>
                </View>
                </View>
                
            </ScrollView>

        )
    }
}