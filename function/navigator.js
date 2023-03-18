
//function to navigate to various screens
export function navigator(screenName,data,navigation){
    navigation.navigate(screenName,{
        data:data
    })
}

//push navigator
export function pushNavigator(screenName,data,navigation){
    navigation.push(screenName,{
        data:data
    })
}

