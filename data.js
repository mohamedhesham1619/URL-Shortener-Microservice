// store original url with its short url value
let data = {}

let shortUrlValue = 0

// save the original url with its short url value in 'data' object
function shorten_URL(url){
    data.shortUrlValue = url
    let respond = {'original_url': url, 'short_url': shortUrlValue}
    shortUrlValue++

    return respond
}

module.exports = {
    shorten_URL: shorten_URL
}