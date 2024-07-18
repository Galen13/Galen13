const gifElement = document.getElementById('myGif');
const animatedGifSrc = '../Image/Rick Roll.gif';
const staticGifSrc = '../Image/Yorha_A2_Chibi(0).jpeg';

let isAnimated = false;

gifElement.addEventListener('click', () => {
  if (isAnimated) {
    gifElement.src = staticGifSrc;
    isAnimated = false;
  } else {
    gifElement.src = animatedGifSrc;
    isAnimated = true;
  }
});