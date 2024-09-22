const handleAdminsSocket = (io, socket) => {
    socket.on("admins", ( message) => {
        const eventName = JSON.parse(message).bus_id;

        io.sockets.emit(eventName, message);
    });
};

module.exports = handleAdminsSocket;
