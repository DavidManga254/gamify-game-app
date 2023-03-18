import { Header } from "./header";
import { View,Text,Image,ScrollView,StyleSheet,Pressable } from "react-native";
import { useState,useEffect } from "react";
import { homepage } from "../function/fetchers";
import { LoadingScreen } from "./loadingscreen";
import { navigator } from "../function/navigator";


//styles
const styles = StyleSheet.create({
    parent:{
        width:'100%',
        backgroundColor:'#232d3b'
    },
    slideShow:{
        width:'100%',
        marginBottom:'5%'
    },
    slideImage:{
        width:'100%',
        aspectRatio:16/13,
        resizeMode:'stretch'
    },
    slidetext:{
        position:'absolute',
        color:'white',
        bottom:0,
        fontSize:25,
        fontWeight:'bold'
    },
    adImage:{
        width:'97%',
        marginBottom:'8%'
    },
    games:{
        width:'30%',
        marginRight:'3.3%',
        marginBottom:'8%'

    },
    display:{
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:'3%',
        paddingTop:'3%'
    },
    gameImage:{
        width:'100%',
        aspectRatio:16/21,
        resizeMode:'stretch'
    },
    innerAd:{
        width:'100%',
        aspectRatio:16/5,
        resizeMode:'stretch'
    },
    gameText:{
        color:'white',
        position:'absolute',
        bottom:0
    }
})


export function Homer({route,navigation}){
    //state to store the game list
    const [gameList,setGameList] = useState(null);
    

    //state to handle slider games
    const [slideshow,setslideshow] = useState(null)

    //fetch the games and store in the gamelist
    useEffect(() =>{
        try{

            //fetch games
            homepage().then((result) => setGameList(result));

        }catch(error){
            console.log('error setting homegamelist',error);
        }
    },[])

    useEffect(() => {
        let intervalId;
        if (gameList !== null) {
          const slides = gameList.slice(-3);
          let index = 0;
          intervalId = setInterval(() => {
            if (index > 2) {
              index = 0;
            }
            setslideshow(slides[index]);
            index++;
          }, 10000);
        }
        return () => clearInterval(intervalId);
      }, [gameList]);
    


    if (gameList === null){
        return (
            <LoadingScreen/>
        )
    }else{
        return(
            <ScrollView style={styles.parent}>
                <View style={styles.parent}>
                    <Header position={'absolute'} padding={'10%'} />


                    <Pressable style={styles.slideShow} onPress={()=>navigator('homegamesdetails',slideshow.slug,navigation) } >
                        <Image source={{uri:slideshow!==null?`https://${slideshow.cover.url.replace('thumb','720p')}`:null}} style={styles.slideImage} />
                        
                        <Text style={styles.slidetext} >{slideshow !== null? slideshow.name:null}</Text>
                    </Pressable>

                    <View style={styles.display} >
                        {
                            //map the games
                            gameList.map((game,index) =>{
                                
                                //every fourth game
                                if( (index+1) % 10 === 0 && index !==0 ){
                                    return(
                                        <Pressable onPress={()=>navigator('homegamesdetails',game.slug,navigation)} style={styles.adImage} key={game.name}>
                                            <Image style={styles.innerAd} source={{uri:`https://${game.cover.url.replace('thumb','720p')}`}} />
                                        </Pressable>
                                    )
                                }else{
                                    return(
                                        <Pressable onPress={()=>navigator('homegamesdetails',game.slug,navigation)} style={styles.games} key={game.name} >
                                            <Image style={styles.gameImage} source={{uri:`https://${game.cover.url.replace('thumb','720p')}`}} />
                                            <Text style={styles.gameText} >{game.name}</Text>
                                        </Pressable>
                                    )
                                }
                            })
                        }
                    </View>

                </View>
            </ScrollView>
        )
    }
}