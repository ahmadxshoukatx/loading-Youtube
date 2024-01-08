if (document.getElementById("loading-progress") === null) {
  // Inject the loading bar.
  document.body.insertAdjacentHTML(
    "beforeend",
    '<div id="loading-progress"><div id="loading-progress-bar"></div><div id="loading-progress-shadow"></div></div>'
  );

  // Animate the loading progress gradually.
  var loadingProgressBar = document.getElementById("loading-progress");
  var width = 1;
  var interval = setInterval(function () {
    if (width >= 150) {
      clearInterval(interval);
      loadingProgressBar.style.opacity = "0";
      setTimeout(function () {
        // Remove the loading bar.
        loadingProgressBar.parentNode.removeChild(loadingProgressBar);
      }, 500);
    } else {
      width++;
      loadingProgressBar.style.width = width + "%";
    }
  }, 15);
}
