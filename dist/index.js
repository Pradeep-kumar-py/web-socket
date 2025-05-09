// import WebSocket, { WebSocketServer } from "ws"
// import http from "http"
// const server = http.createServer((request: any, response: any) => {
//   console.log((new Date()) + "Received request for " + request.url)
//   response.end("Hello WebSocket Server")
// })
// const wss = new WebSocketServer({ server })
// wss.on("connection", (ws) => {
//   let userCount = 0
//   ws.on("error", (error: any) => {
//     console.error("WebSocket error:", error)
//   })
//   ws.on("message", (message: any, isBinary) => {
//     wss.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(message,{ binary: isBinary})
//       }
//     })
//     console.log("Received message:", message)
//   })
//   console.log("userConnected", ++userCount)
//   ws.send("Welcome to the WebSocket server!")
// })
// server.listen(8080, () => {
//   console.log(( new Date()) + "WebSocket server is running on port 8080")
// })
// THis for express server
import express from "express";
import WebSocket, { WebSocketServer } from "ws";
const app = express();
const port = 8080;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const server = app.listen(port, () => {
    console.log(`${(new Date())} Server is running at http://localhost:${port}`);
});
const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
    console.log("New client connected. Total:", wss.clients.size);
    ws.on("error", (error) => {
        console.error("WebSocket error:", error);
    });
    ws.on("message", (message, isBinary) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message, { binary: isBinary });
            }
        });
        console.log("Received message:", message);
    });
    console.log("userConnected");
    ws.send("Welcome to the WebSocket server!");
});
// import express from 'express';
// const app = express()
// const port = 8080
// const wss = new WebSocketServer({ port })
// console.log(`WebSocket server is running on port ${port}`)
// // Handle WebSocket connections`)
// wss.on('connection', (ws) => {
//   console.log('Client connected')
//   ws.on('message', (message) => {
//     console.log(`Received message: ${message}`)
//     ws.send(`Hello, you sent -> ${message}`)
//   })
//   ws.on('close', () => {
//     console.log('Client disconnected')
//   })
// })
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`)
// })
