const { PeerServer } = require("peer");

const peerServer = PeerServer({
    port: 8000
});
peerServer.on("connection", (client) => {
    console.log(client.getId())
})