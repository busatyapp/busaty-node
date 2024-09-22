const handleAdminsSocket = (io, socket) => {
    socket.on("admins", (message) => {
        const schema = Joi.object().keys({
            bus_id: Joi.string().required(),
            // Add more fields to validate as needed
          });
      
          const { error, value } = schema.validate(message);
      
          if (error) {
            console.error(`Invalid message: ${error.message}`);
            return;
          }
      
          const eventName = value.bus_id;
          io.sockets.emit(eventName, message);
    });
};

module.exports = handleAdminsSocket;
