"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    console.log("Starte Server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    starteServer(port);
    function starteServer(_port) {
        let server = Http.createServer();
        console.log("Starting Server" + port);
        server.addListener("request", handleRequest);
        server.listen(port);
    }
    let databaseURL = "mongodb+srv://user1:12345@clustergis.8spcp.mongodb.net/Endabgabe?retryWrites=true&w=majority";
    async function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            let input = { name: url.query.name + " ", email: url.query.email + " ", subject: url.query.subject + " " };
            if (path == "/sendData") {
                let data = await sendDatabaseData(databaseURL, input);
                _response.write(data);
            }
            else if (path == "/getData") {
                let data = await getDatabaseData(databaseURL);
                _response.write(JSON.stringify(data));
                console.log(data);
            }
        }
        _response.end();
    }
    async function getDatabaseData(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders = mongoClient.db("Endabgabe").collection("Bilder");
        console.log(" Database connection", orders != undefined);
        let cursor = orders.find();
        let data = await cursor.toArray();
        return data;
    }
    async function sendDatabaseData(_url, _formData) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders = mongoClient.db("Endabgabe").collection("Bilder");
        orders.insertOne(_formData);
        let answer = "ThisIsTheAnswer";
        return answer;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=script.js.map