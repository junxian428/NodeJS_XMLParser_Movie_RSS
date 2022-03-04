var parseString = require('xml2js').parseString;
const request = require('request-promise');
request('https://www.kkw360.com/map/rss.xml')
.then(response => {
    parseString(response, {trim: true}, function (err, result) {
        console.log(result['rss']['channel'][0]['item'][0]['title'][0]);
    });  
})
.catch(error => {
    console.log(error)
});



