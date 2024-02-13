


/*---chatgpt---*/

$(document).ready(function() {


    $(".frame-link").click(function(){

        iframe = $(this).data("iframe");

            $("<div class='webpages'><button class='closeButton'>&times;</button><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>").appendTo("body").draggable({
                scroll: false
            });

            $(".closeButton").on("click", function() {
                $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
            });
        
    })

    $(".webpages")

    // Add click event handler for the close button
    $(".closeButton").on("click", function() {
        $(this).closest(".webpages").hide(); // Hide the iframe when the close button is clicked
    });
});
