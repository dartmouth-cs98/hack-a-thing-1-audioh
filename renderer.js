const video = document.getElementsByTagName('video')[0];
const recordButton = document.getElementsByClassName('record-button')[0];
recordButton.addEventListener('click', e => {
  video.play();
}

(function () {
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getMedia(
        // constraints
        {video:true, audio:false},

        // success callback
        function (mediaStream) {
            video.src = window.URL.createObjectURL(mediaStream);
        },   
        //handle error
        function (error) {
            console.log(error);
        })   
})();