// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the menu button and surah list
    const menuButton = document.querySelector(".menu-button");
    const surahList = document.querySelector(".surahlist");

    if (!menuButton || !surahList) {
        console.warn("Menu button or Surah list not found in the DOM.");
        return;
    }

    // Add a click event listener to the menu button
    menuButton.addEventListener("click", function () {
        // Toggle the visibility of the Surah list
        surahList.classList.toggle("show");

        // Remove focus outline from the menu button after toggling
        menuButton.blur();
    });

    // Add a click event listener to the document to close the menu if clicked outside
    document.addEventListener("click", function (event) {
        // Check if the click happened outside the menu button and Surah list
        if (
            !menuButton.contains(event.target) &&
            !surahList.contains(event.target)
        ) {
            surahList.classList.remove("show");
        }
    });
});
