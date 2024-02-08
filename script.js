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
        containment: ".webpages",
        scroll: false
    });
});