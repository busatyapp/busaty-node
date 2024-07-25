const handleِAttendantsSocket = (io, socket) => {
    socket.on("attendants", (eventName, message) => {
        io.sockets.emit(eventName, message);
    });
};

module.exports = handleِAttendantsSocket;
