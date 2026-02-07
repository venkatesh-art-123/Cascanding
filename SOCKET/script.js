const socket = io("http://localhost:4321");
socket.on("connect", (socket) => {
    console.log("Connection is established")
})