const handleMzaodinSocket = (io, socket) => {
    socket.on("mzaodin", (eventName, message) => {
        io.sockets.emit(eventName, message);
    });
};

module.exports = handleMzaodinSocket;
