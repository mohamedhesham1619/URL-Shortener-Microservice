// store original url with its short url value
let data = {}

let shortUrlValue = 0

// save the original url with its short url value in 'data' object
function shorten_URL(url){
    data[shortUrlValue] = url
    let respond = {'original_url': url, 'short_url': shortUrlValue}
    console.log(data)
    shortUrlValue++

    return respond
}

function getUrl(shortUrl){
    if(data.hasOwnProperty(shortUrl)) {
        return data[shortUrl]
    }
    return undefined
}

module.exports = {
    shorten_URL: shorten_URL,
    getUrl: getUrl
}