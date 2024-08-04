require('dotenv').config()


const handleDriversSocket = require('./driversSocket');
const handleAdminsSocket = require('./adminsSocket');
const handleِAttendantsSocket = require('./attendantSocket');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const setupSockets = (io) => {
    io.on('connection', (socket) => {
        const userToken = socket.handshake.query.token;
        try {
            verify(userToken, JWT_SECRET_KEY);

            handleDriversSocket(io, socket);
            handleAdminsSocket(io, socket);
            handleِAttendantsSocket(io, socket);

            socket.on('disconnect', () => {
                console.log('Disconnected');
            });
        } catch (error) {
        }
    });
};

const verify = (userToken, JWT_SECRET_KEY) => {
    if (userToken != JWT_SECRET_KEY) {
        throw new Error('not authorized');
    }
};

module.exports = setupSockets;
