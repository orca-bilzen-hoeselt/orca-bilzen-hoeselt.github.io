// Update main footer clock
function updateFooterClock() {
  const footerClock = document.getElementById("footerClock");
  const date = new Date();
  const options = {
    timeZone: 'Europe/Brussels',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  footerClock.innerText = date.toLocaleTimeString('en-GB', options);
}
setInterval(updateFooterClock, 1000);
updateFooterClock();

// Rotating content via iframe
document.addEventListener("DOMContentLoaded", function () {
  const rotatingFrame = document.getElementById("rotatingFrame");
  const rectangle = document.querySelector(".rectangle");
  const footerClock = document.getElementById("footerClock");

  // List of pages for rotation
  const pages = [
    "start.html",
    "lesgevergezocht.html",
    "nieuwebadkleding.html"
  ];

  let currentPage = 0;

  function rotatePage() {
    currentPage = (currentPage + 1) % pages.length;
    rotatingFrame.src = pages[currentPage];

    // For the "proficiat.html" page, hide the main footer clock (if that page shows its own clock)
    if (pages[currentPage] === "winner.html") {
      // footerClock.classList.add("hidden");
      rectangle.classList.add("image-showing");
    } else {
      // footerClock.classList.remove("hidden");
      // Optionally add or remove the "image-showing" class if needed for images
      if (pages[currentPage].endsWith(".html") && pages[currentPage] !== "default.html") {
        rectangle.classList.add("image-showing");
      } else {
        rectangle.classList.remove("image-showing");
      }
    }
  }

  function adjustIframeHeight() {
    var iframe = document.getElementById("rotatingFrame");

    try {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDoc) {
        var newHeight = iframeDoc.documentElement.scrollHeight;
        iframe.style.height = newHeight + "px";
      }
    } catch (error) {
      console.error("Kan de iframe-hoogte niet aanpassen:", error);
    }
  }

  // Zorg ervoor dat de hoogte correct wordt aangepast na het laden
  document.getElementById("rotatingFrame").onload = function () {
    setTimeout(adjustIframeHeight, 100); // Vertraging om inhoud te laden
  };

  // Rotate pages every 30 seconds
  setInterval(rotatePage, 30000);
});
