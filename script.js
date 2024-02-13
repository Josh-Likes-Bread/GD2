function toggleFrame(frameID, src) {
    var frame = document.getElementById(frameID);
    var iframe = frame.querySelector("iframe");
    if (frame.style.display === "none" || frame.style.display === "") {
        iframe.src = src;
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
    }
}


/*---chatgpt---*/

$(document).ready(function() {
    $(".webpages").draggable({
        scroll: false
    });

    // Add click event handler for the close button
    $(".closeButton").on("click", function() {
        $(this).closest(".webpages").hide(); // Hide the iframe when the close button is clicked
    });
});
