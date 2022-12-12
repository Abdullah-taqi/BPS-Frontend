import io from "socket.io-client";
let socket;

export const initiateSocket = (namespace) => {
  socket = io(`http://192.168.1.137:3000/${namespace}`);
  console.log(`connected to socket...`);
};
export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};
export const subscribeToStream = (event, cb) => {
  if (!socket) return true;
  socket.on(event, (msg) => {
    console.log("Websocket event received!");
    return cb(msg);
  });
};

export const joinRoom = (event, room, streamevent) => {
  console.log(`Joining room...`);
  if (socket && event && room) socket.emit(event, { room: room, event:streamevent });
};

export const leaveRoom = (event, room) => {
  if (socket && event && room) {
    socket.emit(event, { room: room });
  }
};

export const sendMessage = (event, room, message) => {
  if (socket) socket.emit(event, { message, room });
};
