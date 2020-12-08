$('#carousel-logo-editing').carousel({ 
    interval: 2000 
});
$('#carousel-brosur').carousel({ 
    interval: 3000 
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
    const dist = document.querySelector('#darkSwitch');
    document.querySelector('#darkSwitch').addEventListener('click', () => {
        dist.classList.remove('click-animation');
        window.requestAnimationFrame(function() {
            dist.classList.add('click-animation');
        });
    });
});

$(window).scroll(function () {
    if ($('#about-me-text').isInViewport()) {
        $('#about-me-text').addClass('typewriter');
    }

    if ($('#my-works-text').isInViewport()) {
        $('#my-works-text').addClass('typewriter-card');
    }

    if ($('#my-resume-text').isInViewport()) {
        $('#my-resume-text').addClass('typewriter');
    }

    if ($('#my-service-text').isInViewport()) {
        $('#my-service-text').addClass('typewriter-card');
    }

    if ($('#get-in-text').isInViewport()) {
        $('#get-in-text').addClass('typewriter-card');
    }
});

$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};