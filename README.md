# URL Shortener Microservice

## Overview
This microservice shorten url with attaching an integer value to it and save them in hash table, then the integer value can be used to access the url.

### Url: https://url-shortener-microservice11.herokuapp.com/



## Api endpoints
1. Shorten url
```
post: /api/shorturl

Request: {
  url: String
}

Response: {
  original_url: String,
  short_url: Integer
}
```

2. access the original url using the short url value
```
get: /api/shorturl/{short_url}
```
