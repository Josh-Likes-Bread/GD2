


/*---chatgpt + Ali + a bit of me---*/

$(document).ready(function() {

    $(".frame-link").click(function(){

        iframe = $(this).data("iframe");

        // Create iframe element
        var $iframe = $("<div class='webpages'><button class='closeButton'>&times;</button><h1>Baybayin - <span class='carBaybayinH1'>ᜊᜌ᜔ᜊᜌᜒᜈ᜔</span></h1><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>");

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

        $iframe.draggable(); //<---the only line I wrote

        // Add click event handler for the close button
        $(".closeButton").on("click", function() {
            $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
        });
    });


    // ---------------------------------------------- Hanunoo -------------------------------------------------//


    $(".frame-link-2").click(function(){

        iframe = $(this).data("iframe");

        // Create iframe element
        var $iframe = $("<div class='webpages'><button class='closeButton'>&times;</button><h1>Hanunoo - <span class='carHanunooH1'>ᜱᜨᜳᜨᜳᜢ</span></h1><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>");

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

        $iframe.draggable({
            // containment: "window", 
        });

        // Add click event handler for the close button
        $(".closeButton").on("click", function() {
            $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
        });
    });


    // ---------------------------------------------- close all buttons -------------------------------------------------//

    $("#closeAllButton").on("click", function() {
        $(".webpages").remove(); // Remove all iframes
    });
    

    // ---------------------------------------------- Buhid -------------------------------------------------//


    $(".frame-link-3").click(function(){

        iframe = $(this).data("iframe");

        // Create iframe element
        var $iframe = $("<div class='webpages'><button class='closeButton'>&times;</button><h1>Buhid - <span class='carBuhidH1'>ᝊᝓᝑᝒᝇ</span></h1><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>");

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

        $iframe.draggable({
            // containment: "window", 
        });

        // Add click event handler for the close button
        $(".closeButton").on("click", function() {
            $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
        });
    });

    // ---------------------------------------------- Tagbanwa -------------------------------------------------//


    $(".frame-link-4").click(function(){

        iframe = $(this).data("iframe");

        // Create iframe element
        var $iframe = $("<div class='webpages'><button class='closeButton'>&times;</button><h1>Tagbanwa - <span class='carTagbanwaH1'>ᝦᝤᝪᝨᝯ</span></h1><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>");

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

        $iframe.draggable({
            // containment: "window", 
        });

        // Add click event handler for the close button
        $(".closeButton").on("click", function() {
            $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
        });
    });



// ---------------------------------------------- Kawi -------------------------------------------------//


$(".frame-link-5").click(function(){

    iframe = $(this).data("iframe");

    // Create iframe element
    var $iframe = $("<div class='webpages'><button class='closeButton'>&times;</button><h1>Kawi - <span class='carKawiH1'>𑼄𑼒𑽂𑼰𑼬𑼒𑼮𑼶</span></h1><iframe src='"+ iframe +"' width='100%' height='600px'></iframe></div>");

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

    $iframe.draggable({
        // containment: "window", 
    });

    // Add click event handler for the close button
    $(".closeButton").on("click", function() {
        $(this).closest(".webpages").remove(); // Hide the iframe when the close button is clicked
    });
});

// animation from Dan

$("a.zero").click(function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var target = $(this).attr("href"); // Get the target element's id
    $('html, body').animate({
        scrollLeft: $(target).offset().left // Scroll horizontally to the target element
    }, 1000); // Duration of the scroll animation in milliseconds
});

});






