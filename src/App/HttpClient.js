
export class HttpClient {


    static get = async (url) => {
        try {
            return await fetch(url, {
                method: 'get',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                referrerPolicy: "unsafe-url"
            });
        } catch (err) {
            console.log(err);
            return [];
        }

    }

    static post = async (url, data) => {
        try {
            return await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                referrerPolicy: "unsafe-url",
                body: JSON.stringify(data)
            });
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}