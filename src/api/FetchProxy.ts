export default class FetchProxy {
    static fetchViaProxy(url: string): Promise<Response> {
        return fetch('https://cors-anywhere.herokuapp.com/' + url,
            {"credentials": "omit",
            "headers":
                {"accept": "*/*",
                 "accept-language": "en-US,en;q=0.9",
                 "cache-control": "no-cache",
                 "pragma":"no-cache",
                 "sec-fetch-mode":"cors",
                 "sec-fetch-site":"cross-site"},
            "referrerPolicy":"no-referrer-when-downgrade",
            "body":null,
            "method":"GET",
            "mode":"cors"});
    }
}
