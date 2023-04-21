const videoWrapper = document.querySelector('[data-video-wrapper]');
const iframeVideo = videoWrapper.querySelector('[data-iframe-video]');
const videoCover = videoWrapper.querySelector('[data-cover]');
const videoButton = videoWrapper.querySelector('[data-video-button]');

const makeVideoActive = () => {
  if (iframeVideo) {
    videoCover.style.display = 'none';
    iframeVideo.src += '?autoplay=1';
  }
};

const videoPlayHandler = () => {
  videoButton.addEventListener('click', makeVideoActive);
};

export {videoPlayHandler};
