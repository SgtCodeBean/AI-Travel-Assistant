// JavaScript to handle search results
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  const resultsContainer = document.getElementById("results-container");

  if (query && query.toLowerCase() === "japan") {
    resultsContainer.innerHTML = `
    <ul>
        <li>Trip to Japan: Tokyo, Kyoto, Osaka</li>
        <li>Cherry Blossom Tour in Japan</li>
    </ul>
    `;
  } else {
    resultsContainer.innerHTML =
      "<p>No results found for your search. Please try a different keyphrase.</p>";
  }
});