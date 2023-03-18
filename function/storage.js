import AsyncStorage from '@react-native-async-storage/async-storage';

//store data
export async function storeData(data,name){
    try{
       await getData(name).then(async (response)=>{
        const exists = response.some(item=> item.name === data.name)
        if(exists !== true){
            
            let newList = [...response,data];
         
            await AsyncStorage.setItem(name,JSON.stringify(newList));
        }
         
       })
    }catch(error){
        console.log('error setting data',error);
    }
}

export async function getData(name){
    try{
        const retrievedData = await AsyncStorage.getItem(name);

        const newData = retrievedData !== null? JSON.parse(retrievedData):null;

        return newData;
    }catch(error){
        console.log("error fetching data",error);
    }
}

export async function initializa(name){
    try{
        const data = await AsyncStorage.getItem(name);
        

        if(data === null){
            await AsyncStorage.setItem(name,JSON.stringify([]));
        }
    }catch(error){
        console.log('error initializing',error);
    }
}