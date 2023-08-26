$(function() {
    
    // Navbar color
    var $nav = $('.navbar')
    if ($(this).scrollTop() > $nav.height() - 120) {
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() - 120);
    }
    $(document).scroll(function() {
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() - 120);
    });

    // Home button
    $('#home_button').on('click', function() {
        window.open('/', '_self')
    });
    $('#404_button').on('click', function() {
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

    // Mobile navbar
    var links = document.getElementById('mobile_links');
    $('#socials_dropdown').on('click', function() {
        if (links.style.display === 'block') {
            links.style.display = 'none';
        } else {
            links.style.display = 'block'
        }
    });
    $(document).scroll(function() {
        links.style.display = 'none';
    });

    // Hi
    $('#profile_pic').on('click', function(e) {
        alert('Hi 👋');
    });

});
