(function (window) {
  function VideoPlayer(elem) {
    this.containerElem = elem;
    this.videoElem = this.containerElem.querySelector('[data-player="video"]');
    this.playPauseIconElem = this.containerElem.querySelector(
      '[data-player="play-pause-icon"]'
    );
    this.controlPlayPauseElem = this.containerElem.querySelector(
      '[data-player="control-play"]'
    );

    // events
    this.videoElem.addEventListener("click", this.toggle.bind(this));
    this.controlPlayPauseElem.addEventListener("click", this.toggle.bind(this));
    window.addEventListener("keydown", this.keydown.bind(this));
  }

  VideoPlayer.prototype = {
    constructor: VideoPlayer,
    play: function () {
      this.videoElem.play();
      this.playPauseIconElem.classList.add("play-mode");
      this.playPauseIconElem.style.display = "";
      window.setTimeout(this.hidePlayPauseIcon.bind(this), 500);
    },
    pause: function () {
      this.videoElem.pause();
      this.playPauseIconElem.classList.add("pause-mode");
      this.playPauseIconElem.style.display = "";
      window.setTimeout(this.hidePlayPauseIcon.bind(this), 500);
    },
    toggle: function () {
      if (this.videoElem.paused) this.play();
      else this.pause();
      this.containerElem.classList.toggle("is-playing");
    },
    hidePlayPauseIcon: function () {
      this.playPauseIconElem.classList.remove("play-mode");
      this.playPauseIconElem.classList.remove("pause-mode");
      this.playPauseIconElem.style.display = "none";
    },
    keydown: function (e) {
      switch (e.keyCode) {
        case 32:
        case 75:
          this.toggle();
          if (e.target === document.body) e.preventDefault();
          break;
        default:
          break;
      }
    },
  };

  // also, latch onto something to expose to the wider world
  window.VideoPlayer = VideoPlayer;

  [].forEach.call(
    document.querySelectorAll('[data-player="container"]'),
    function (elem) {
      new VideoPlayer(elem);
    }
  );
})(window);
