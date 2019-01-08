const video = document.getElementsByTagName('video')[0];
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

let stream = null;

let captureStream = null;

// code from: https://stackoverflow.com/questions/9644612/access-webcam-without-flash/9646193#9646193
(() => {
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getMedia(
        { video: true, audio: false },

        (mediaStream) => {
          video.srcObject = mediaStream;
          stream = mediaStream;
        },   
        (error) => {
            console.log(error);
        })   
})();

const stopWebcam = () => {
  stream.stop();
}

const snapshot = () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

const recordButton = document.getElementsByClassName('record-button')[0];
recordButton.addEventListener('click', e => {
  e.target.innerText = 'snap photo';
  snapshot();
})