// ============
// Window Resize
// ============
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
};

const refreshCanvas = function() {
  clear();
  background(255);
  circles = [];
  mainMax = 200;
  if (currentAccent === 1) {
    currentAccent = 2;
  } else if (currentAccent === 2) {
    currentAccent = 3;
  } else {
    currentAccent = 1;
  }
};

const random = function(min,max) {
  // getting a random integer:
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const colourSelector = function(num) {
  let rand;
  let returnVal = ``;
  switch(num) {
    case 1: // r randomised, r emphasis
      rand = random(0,30);
      returnVal = `rgb(${rand}, 50, 100)`;
      break;
    case 2: // g randomised, b/g emphasis
      rand = random(30,50);
      returnVal = `rgb(20, ${rand}, 150)`;
      break;
    case 3: // b randomised, pink-orange emphasis
      rand = random(150,190);
      returnVal = `rgb(70, 130, ${rand})`;
      break;
  }
  return returnVal;
};

const getMax = function() {
  let max = width/4;
  max > 200 ? max = 200 : max = max;
  return max;
};

const checkTrigger = function(album) {
  for (let i = 0; i < album.length; i++) {
    if (album[i].isPlaying()) {
      if (album[i].currentTime() > 15 && circles.length < 4) {
        trigger = 2;
      }
      if (album[i].currentTime() > 23 && circles.length < 5) {
        trigger = 1.5;
      }
      if (album[i].currentTime() > 30 && circles.length < 5) {
        trigger = 1.25;
      }
    }
  }
};

const showPlayButton = function() {
  $('#play-pause').removeClass('fa-pause');
  $('#play-pause').addClass('fa-play');
};

const showPauseButton = function() {
  $('#play-pause').removeClass('fa-play');
  $('#play-pause').addClass('fa-pause');
};
