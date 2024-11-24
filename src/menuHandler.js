// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the menu button and Surah list
    const menuButton = document.querySelector(".menu-button");
    const surahList = document.querySelector(".surahlist");

    // Ensure elements exist
    if (!menuButton || !surahList) {
        console.warn("Menu button or Surah list not found in the DOM.");
        return;
    }

    // Add a click event listener to the menu button
    menuButton.addEventListener("click", function (event) {
        // Toggle the visibility of the Surah list
        surahList.classList.toggle("show");

        // Stop propagation to prevent the document listener from firing
        event.stopPropagation();
    });

    // Add a click event listener to the document to close the menu if clicked outside
    document.addEventListener("click", function (event) {
        // Check if the click happened outside the menu button and Surah list
        if (
            !menuButton.contains(event.target) &&
            !surahList.contains(event.target)
        ) {
            // Remove the 'show' class to minimize the menu
            surahList.classList.remove("show");
        }
    });
});
