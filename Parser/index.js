const request = require ("request")
request('https://www.shazam.com/shazam/v2/ru/UA/web/-/tracks/world-chart-world?pageSize=200&startFrom=0', (error, response, html) => {
    if (!error && response.statusCode == 200){
        const obj = JSON.parse(html);
        for (let i = 0; i < 50; i++){
            console.log(obj['chart'][i]['share']['subject'])
        }
    }
})