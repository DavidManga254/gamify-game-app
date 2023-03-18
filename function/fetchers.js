
const Client_ID = 'kap700e2v542f8g2udfzh6uomld85y'
const Authorization = 'Bearer scgmdprdqso6id4sosy2s09gj60qbi'


//fetch for the homepage
export async function homepage(){
    //api endpoint
    const url = 'https://api.igdb.com/v4/games/';

    //body of the post fetch
    const body = `fields name,slug, cover.url;
    where (
        franchises.name = "Call of Duty" | franchises.name = "Mortal Kombat" | franchises.name = "Battlefield" | franchises.name = "Need for Speed" | franchises.name = "Ghost Recon" | franchises.name = "Doom" | franchises.name = "Dying Light" | franchises.name = "Red Dead" | franchises.name = "Halo" | franchises.name = "Just Cause" | franchises.name = "Grand Theft Auto" | franchises.name = "Horizon" | franchises.name = "Days Gone" | franchises.name = "Apex" | franchises.name = "Far Cry"
        );
    sort popularity desc;
    limit 34;`;

    //options of the fetch call
    const options = {
        method : 'POST',
        headers  : {
            'Client-ID' : Client_ID,
            'Authorization' : Authorization,
            'Content-Type' : 'application/json'
        },
        body : body
    }
    //fetch and store result
    try{
        var result = await fetch(url,options);
    }
    catch(error){
        console.log('error fetching homepage games',error)
    }

    //convert to json
    result = await result.json();

    //console.log("fetched result is",result)
    return result
}


//fetch for the game details
export async function gameDetails(slug){
    //api endpoint
    const url = 'https://api.igdb.com/v4/games';

    //body of the post fetch
    const body = `fields name,cover.url,involved_companies.company.name,screenshots.url,similar_games.slug,similar_games.name,similar_games.cover.url,storyline,videos.video_id ;where slug = "${slug}";`;

    //options of the fetch call
    const options = {
        method : 'POST',
        headers  : {
            'Client-ID' : Client_ID,
            'Authorization' : Authorization,
            'Content-Type' : 'application/json'
        },
        body : body
    }

    //fetch and store result
    try{
        var result = await fetch(url,options);
    }
    catch(error){
        console.log('error fetching the popular',error)
    }

    //convert to json
    result = await result.json();
    
    return result[0];
}


//search game
export async function search(name){
    //api endpoint
    const url = 'https://api.igdb.com/v4/games/';

    //body of the post fetch
    const body = `fields name,slug,cover.url,summary;search "${name}"; limit 50;`;

    //options of the fetch call
    const options = {
        method : 'POST',
        headers  : {
            'Client-ID' : Client_ID,
            'Authorization' : Authorization,
            'Content-Type' : 'application/json'
        },
        body : body
    }
    //fetch and store result
    try{
        var result = await fetch(url,options);
    }
    catch(error){
        console.log('error fetching the popular',error)
    }

    //convert to json
    result = await result.json();
    return result
}