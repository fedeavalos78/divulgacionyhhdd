const Twit = require('twit')

const T = new Twit({
    consumer_key:         'duwBxSd41fT5omLyjrg2seleY',
    consumer_secret:      '6ZWlogzghmRG2fVuUtzCQZ8rCZU8YGJw8yY5C67hIvpJHjiqTf',
    access_token:         '1592522272052547589-hStMzEdzgpsMtWcISCdMH1996x4jnv',
    access_token_secret:  'vWAwEd6U6wUBf8xKFENDttxQvRRm6G6sCDI1dWDTULMsq',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

T.get(
    'search/tweets', 
    { q: '#divulgacion since:2022-1-1', count: 100 }, 
    function(err, data, response) {
        const allTweetsDto = data.statuses.map (tweet => tweetToDto(tweet));
        saveInDataBase(allTweetsDto)
  })  

function tweetToDto(tweet) {
    return {
        created_at: tweet.created_at,
        text: tweet.text,
        name: tweet.user.name,
        location: tweet.user.location,
    }
}

function saveInDataBase (allTweetsDto){
    //guarda en abse de datos
}