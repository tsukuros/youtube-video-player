(function (window) {
  function VideoPlayer(elem) {
    this.containerElem = elem;
    this.videoElem = this.containerElem.querySelector('[data-player="video"]');

    // events
    this.videoElem.addEventListener("click", this.toggle.bind(this));
  }

  VideoPlayer.prototype = {
    constructor: VideoPlayer,
    play: function () {
      this.videoElem.play();
    },
    pause: function () {
      this.videoElem.pause();
    },
    toggle: function () {
      if (this.videoElem.paused) this.play();
      else this.pause();
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
