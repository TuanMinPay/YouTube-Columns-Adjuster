(function () {
  "use strict";
  chrome.storage.sync.get(
    ["columns", "hideShorts", "hideEndRecommendations"],
    (result) => {
      const columns = result.columns || 5;
      document.documentElement.style.setProperty("--youtube-columns", columns);

      const shortsElements = document.querySelectorAll("[is-shorts]");
      shortsElements.forEach((el) => {
        el.setAttribute("data-hidden", result.hideShorts ? "true" : "false");
      });

      const endRecElements = document.querySelectorAll(".ytp-ce-element");
      endRecElements.forEach((el) => {
        el.setAttribute(
          "data-hidden",
          result.hideEndRecommendations ? "true" : "false"
        );
      });
    }
  );
})();
