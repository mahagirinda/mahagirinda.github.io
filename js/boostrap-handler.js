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