const https = require('https');
const http = require('http');
const Url = require('url');


const server = http.createServer();
server.on('request', (req, res) => {
    const { method, url } = req;
    const pathName = Url.parse(url).pathname;
    const queryString = Url.parse(url).query;
    console.log(method, pathName, queryString)
    if (method === 'GET' && pathName === '/') {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(req.url)
        https.get('https://jobs.github.com/positions.json?' + queryString, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                res.setHeader('Content-Type', 'application/json');
                res.write(data);
                res.end();
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
            res.end();
        });
    } else {
        res.end();
    }
});
server.listen(3000);
