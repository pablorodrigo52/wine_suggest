
class Request {
    constructor(){
        this._requestHeaders = {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                Authorization: 'Token c7d27f85cf45c7fde5cc746f5eb1d37f3b3ca4ff',
                Accept: '*/*'
            }
        }
    }
    get(url, callback){
        console.log(this._requestHeaders);
        fetch(url, this._requestHeaders)
        .then(response => {
            if (!response.ok){
                return null; 
            }
            return response.text();
        })
        .catch(err =>{
            console.log(err);
        })
    }
}

export default Request;