const video = document.getElementsByTagName('video')[0];
const audio = document.getElementsByTagName('audio')[0];
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

let stream = null;

let captureStream = null;
let playback = false;

// code from: https://stackoverflow.com/questions/9644612/access-webcam-without-flash/9646193#9646193
(() => {
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getMedia(
        // constraints
        { video: true, audio: false },

        // success callback
        (mediaStream) => {
          video.srcObject = mediaStream;
          audio.src = mediaStream.getAudioTracks()[0];
          stream = mediaStream;
            // video.src = window.URL.createObjectURL(mediaStream);
            // captureStream = video.captureStream();
            // audio.src = captureStream;
            // console.log(captureStream);
        },   
        //handle error
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
  video.play();
  e.target.innerText = 'snapshot webcam';
  snapshot();
})