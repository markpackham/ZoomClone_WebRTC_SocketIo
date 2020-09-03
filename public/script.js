const socket = io("/");
const videoGrid = document.getElementById("video-grid");
// had to globally install the peer server "npm i -g peer" to use this
// server handles generating our id
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});
const myVideo = document.createElement("video");
// make sure our own video is muted so we don't listen to ourselves
myVideo.muted = true;
const peers = {};

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addVideoStream(myVideo, stream);
  });

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, 10);
});

socket.on("user-connected", (userId) => {
  console.log("User connected: " + userId);
});

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}
