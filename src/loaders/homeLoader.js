import axios from "axios"

export async function homeLoader(){
    const lastAddedResponse = await axios.get('https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=date_added');
    const mostDownloadsResponse = await axios.get('https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=download_count&order_by=desc');

    return {
        lastAdded : lastAddedResponse.data.data  , 
        mostDownloads : mostDownloadsResponse.data.data 
    }

}