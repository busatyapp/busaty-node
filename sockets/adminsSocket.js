const handleAdminsSocket = (io, socket) => {
    socket.on("admins", (eventName, message) => {
        io.sockets.emit(eventName, message);
    });
};

module.exports = handleAdminsSocket;
