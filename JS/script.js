// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {  

    // STEP 1: Select all tab buttons and tab content sections
    const tabs = document.querySelectorAll(".tab");   // Get all elements with class "tab"
    const contents = document.querySelectorAll(".tab-content");  // Get all elements with class "tab-content"

    // STEP 2: Loop through each tab and attach a click event listener
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            // STEP 3: Get the target tab ID from the clicked tab's "data-tab" attribute
            const target = this.getAttribute("data-tab");

            // STEP 4: Remove the "active" class from all tabs (to deactivate previous tab)
            tabs.forEach(t => t.classList.remove("active"));

            // STEP 5: Remove the "active" class from all content sections (to hide previous content)
            contents.forEach(c => c.classList.remove("active"));

            // STEP 6: Add "active" class to the clicked tab (highlight the selected tab)
            this.classList.add("active");

            // STEP 7: Find the corresponding content section and make it visible by adding "active" class
            document.getElementById(`tab-${target}`).classList.add("active");
        });
    });

});
