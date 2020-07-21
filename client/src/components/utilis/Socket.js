import io from "socket.io-client";

const Socket = () => {
  return io("http://localhost:5000");
};

export default Socket;
