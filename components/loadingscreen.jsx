import { StyleSheet,View } from "react-native"
import { ActivityIndicator } from "react-native-paper"

//styles
const styles = StyleSheet.create({
    loadview:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#232d3b'
    }
})

export function LoadingScreen(){
    return(
        <View style={styles.loadview}>
                <ActivityIndicator size={70} animating={true} color={'#4eb547'} />
        </View>
    )
}