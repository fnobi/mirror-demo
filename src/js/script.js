window.navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

const el = document.querySelector('.js-video');

window.navigator.getUserMedia({ video: true }, (localMediaStream) => {
    el.src = window.URL.createObjectURL(localMediaStream);
    el.onloadedmetadata = (e) => {
        // TODO: 描画状況・透明ピクセルを計測して、アスペクト比出して、いい具合にトリミング

        el.addEventListener('click', () => {
            el.paused ? el.play() : el.pause();
        });
    };
}, () => {
    alert('fail.');
});
