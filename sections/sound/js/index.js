// ================
// GLOBAL VARIABLES
// ================
// re inputs
let mic, xo, ratatat, xo2, ratatat2, currentSource, currentAlbum, lastPressed, inputMode;
let switching = false;
// re amplitude
let amplitude;


function preload() {
  // setup() will not run until these are loaded
  xo = [loadSound('./audio/ratatat/elgar.mp3'), loadSound('./audio/ratatat/debussy.mp3'), loadSound('./audio/ratatat/bridge.mp3')];
  ratatat = [loadSound('./audio/ratatat/williams.mp3'), loadSound('./audio/ratatat/strauss.mp3'), loadSound('./audio/ratatat/ravel.mp3')];
    xo2 = [loadSound('./audio/ratatat/stravinsky.mp3'), loadSound('./audio/ratatat/schonberg.mp3'), loadSound('./audio/ratatat/cage.mp3')];
  ratatat2 = [loadSound('./audio/ratatat/einaudi.mp3'), loadSound('./audio/ratatat/bax.mp3'), loadSound('./audio/ratatat/britten.mp3')];
};


function setup() {
  // add song names to album arrays
  setNames(xo,xoNames);
  setNames(ratatat,ratatatNames);
      setNames(xo2,xo2Names);
  setNames(ratatat2,ratatat2Names);

  // MIC SETUP //
  mic = new p5.AudioIn();
  currentSource = mic;
  currentSource.start();

  // CHANGE USER CONTROLS TEXT //
  $('#loading').addClass('invisible');

  // CANVAS //
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('myCanvas');
  width = windowWidth;
  height = windowHeight;
  width < height ? smlAxis = width : smlAxis = height;


  // SOUND ANALYSIS: AMPLITUDE //
  amplitude = new p5.Amplitude();

  // SET SOURCE //
  toggleInput(2); // start with ratatat on refresh

  // USER CONTROLS //
  $('#refresh').on('click', function() {
    refreshCanvas();
  });
  $("#info").click(function() {
    $('#modal-overlay').fadeIn(200);
  });
  $('#modal-overlay').click(function() {
     $('#modal-overlay').fadeOut(200);
  });
  $('#mic').on('click', function() {
    switching = true;
    toggleInput(0);
    refreshCanvas();
  });
  $('#xo').on('click', function() {
    switching = true;
    toggleInput(1);
    refreshCanvas();
    showPlayButton();
  });
  $('#ratatat').on('click', function() {
    switching = true;
    toggleInput(2);
    refreshCanvas();
    showPlayButton();
  });
    
      $('#xo2').on('click', function() {
    switching = true;
    toggleInput(3);
    refreshCanvas();
    showPlayButton();
  });

    
      $('#ratatat2').on('click', function() {
    switching = true;
    toggleInput(4);
    refreshCanvas();
    showPlayButton();
  });


  // ====================
  // USER CONTROLS FOR AUDIO
  // ====================
  $('#play-pause').on('click', function() {
    // getAudioContext().resume();
    if (currentSource.isPlaying()) {
      lastPressed = 'pause';
      currentSource.pause();
      showPlayButton();
    } else {
      lastPressed = 'play';
      currentSource.play();
      showPauseButton();
    }
  });
  $('#next').on('click', function() {
    lastPressed = 'next';
    let current = checkTrack(currentAlbum);
    if (current < currentAlbum.length - 1) {
      currentSource.stop();
      refreshCanvas();
    }
    showPauseButton();
  });
  $('#previous').on('click', function() {
    lastPressed = 'previous';
    switching = true;
    getPreviousTrack(currentAlbum);
    refreshCanvas();
    showPauseButton();
  });

}; //end of setup function


// ================
// FULL SONGS
// ================

// xo = [loadSound('./audio/xo/Bled White.mp3'), loadSound('./audio/xo/sweet-adeline.mp3'), loadSound('./audio/xo/Tomorrow Tomorrow.mp3'), loadSound('./audio/xo/Baby Britain.mp3'), loadSound('./audio/xo/Pitseleh.mp3'), loadSound('./audio/xo/Independence Day.mp3'), loadSound('./audio/xo/waltz.mp3')];

// ratatat = [loadSound('./audio/ratatat/cherry.mp3'), loadSound('./audio/ratatat/desert-eagle.mp3'), loadSound('./audio/ratatat/crips.mp3'), loadSound('./audio/ratatat/breaking-away.mp3'), loadSound('./audio/ratatat/el-pico.mp3')];

// ===================
// PLAY MODE
// ===================
// for (let i = 0; i < ratatat.length; i++) {
//   ratatat[i].playMode('restart');
// };
// for (let i = 0; i < xo.length; i++) {
//   xo[i].playMode('restart');
// };
