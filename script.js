$(function() {
    
    // Navbar color
    var $nav = $('.navbar')
    if ($(this).scrollTop() > $nav.height() - 120) {
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() - 120);
    }
    $(document).scroll(function() {
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() - 120);
    });

    // Home buttons
    $('#home_button').on('click', function() {
        window.open('/', '_self')
    });
    $('#return_button').on('click', function() {
        window.open('/', '_self')
    })
    $('#return_button2').on('click', function() {
        window.open('/', '_self')
    })

    // Social buttons
    $('#email').on('click', function() {
        window.open('mailto:gavin.eugenio@gmail.com', '_blank')
    });
    $('#email_m').on('click', function() {
        window.open('mailto:gavin.eugenio@gmail.com', '_blank')
    });
    $('#github').on('click', function() {
        window.open('https://github.com/BitPingu', '_blank')
    });
    $('#github_m').on('click', function() {
        window.open('https://github.com/BitPingu', '_blank')
    });
    $('#linkedin').on('click', function() {
        window.open('https://www.linkedin.com/in/gavin-eugenio', '_blank')
    });
    $('#linkedin_m').on('click', function() {
        window.open('https://www.linkedin.com/in/gavin-eugenio', '_blank')
    });

    // Hi
    $('#profile_pic').on('click', function(e) {
        alert('Hi 👋');
    });

});
