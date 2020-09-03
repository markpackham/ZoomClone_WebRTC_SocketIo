const socket = io("/");
const videoGrid = document.getElementById("video-grid");

socket.emit("join-room", ROOM_ID, 10);

socket.on("user-connected", (userId) => {
  console.log("User connected: " + userId);
});
