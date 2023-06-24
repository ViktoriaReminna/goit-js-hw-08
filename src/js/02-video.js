import Vimeo from '@vimeo/player';
// console.log(Vimeo);
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const currentTime = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, currentTime);
}

const restoreCurrentTime = () => {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    const timeJSON = JSON.parse(currentTime);
    const { seconds } = timeJSON;
    return seconds;
  }
};

player
  .setCurrentTime(restoreCurrentTime())
  .then(function (seconds) {})

  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
