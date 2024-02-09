function toggleFrame() {
    var frame = document.querySelector(".webpages");
    if (frame.style.display === "none" || frame.style.display === "") {
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
    }
}

$(document).ready(function() {
    $(".webpages").draggable({
        scroll: false
    });

    // Add click event handler for the close button
    $(".closeButton").on("click", function() {
        $(".webpages").hide(); // Hide the iframe when the close button is clicked
    });
});
