const video = document.querySelector('.js-video');

window.navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

window.navigator.getUserMedia({ video: true }, (localMediaStream) => {
    video.src = window.URL.createObjectURL(localMediaStream);
    video.onloadedmetadata = (e) => {
        // Ready to go. Do some stuff.
    };
}, () => {
    alert('fail.');
});
