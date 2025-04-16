document.getElementById("save").addEventListener("click", () => {
  const columns = parseInt(document.getElementById("columns").value);
  const hideShorts = document.getElementById("hideShorts").checked;
  const hideEndRecommendations = document.getElementById(
    "hideEndRecommendations"
  ).checked;

  if (columns >= 1 && columns <= 10) {
    chrome.storage.sync.set(
      { columns, hideShorts, hideEndRecommendations },
      () => {
        window.close();
      }
    );
  } else {
    alert("Please enter a number between 1 and 10.");
  }
});

chrome.storage.sync.get(
  ["columns", "hideShorts", "hideEndRecommendations"],
  (result) => {
    if (result.columns) {
      document.getElementById("columns").value = result.columns;
    }
    document.getElementById("hideShorts").checked = result.hideShorts || false;
    document.getElementById("hideEndRecommendations").checked =
      result.hideEndRecommendations || false;
  }
);
