


/*---chatgpt---*/

$(document).ready(function() {

    $(".frame-link").click(function(){

        iframe = $(this).data("iframe");

        // Create iframe element
        var $iframe = $("<div class='webpages'><button class='closeButton'>&times;</button><h1>Baybayin - ᜊᜌ᜔ᜊᜌᜒᜈ᜔</h1><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>");

        // Append iframe to body
        $("body").append($iframe);

        // Get viewport dimensions
        var viewportWidth = $(window).width();
        var viewportHeight = $(window).height();

        // Calculate random position within viewport
        var randomX = Math.random() * (viewportWidth - $iframe.outerWidth());
        var randomY = Math.random() * (viewportHeight - $iframe.outerHeight());

        // Apply random position using CSS
        $iframe.css({
            left: randomX + 'px',
            top: randomY + 'px',
            position: 'fixed' // Ensure the iframe is positioned relative to the viewport
        });

        $iframe.draggable();

        // Add click event handler for the close button
        $(".closeButton").on("click", function() {
            $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
        });
    });


    // ---------------------------------------------- Hanunoo -------------------------------------------------//


    $(".frame-link-2").click(function(){

        iframe = $(this).data("iframe");

        // Create iframe element
        var $iframe = $("<div class='webpages'><button class='closeButton'>&times;</button><h1>Hanunoo - ᜰᜳᜬᜦ᜴ </h1><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>");

        // Append iframe to body
        $("body").append($iframe);

        // Get viewport dimensions
        var viewportWidth = $(window).width();
        var viewportHeight = $(window).height();

        // Calculate random position within viewport
        var randomX = Math.random() * (viewportWidth - $iframe.outerWidth());
        var randomY = Math.random() * (viewportHeight - $iframe.outerHeight());

        // Apply random position using CSS
        $iframe.css({
            left: randomX + 'px',
            top: randomY + 'px',
            position: 'fixed' // Ensure the iframe is positioned relative to the viewport
        });

        $iframe.draggable();

        // Add click event handler for the close button
        $(".closeButton").on("click", function() {
            $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
        });
    });

});
