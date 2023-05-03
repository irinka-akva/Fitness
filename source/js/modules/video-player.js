const videoWrapper = document.querySelector('[data-video-wrapper]');
const video = videoWrapper.querySelector('[data-video]');
const videoCover = videoWrapper.querySelector('[data-cover]');
const videoButton = videoWrapper.querySelector('[data-video-button]');

const makeVideoActive = () => {
  videoCover.style.display = 'none';
  const newVideo = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe > ';
  video.insertAdjacentHTML('afterbegin', newVideo);
};

const videoPlayHandler = () => {
  videoButton.addEventListener('click', makeVideoActive);
  videoButton.addEventListener('touch', makeVideoActive);
};


export {videoPlayHandler};
