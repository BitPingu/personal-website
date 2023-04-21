$(function() {

    // Check for dark mode
    var currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            $('.switch').trigger('click')
        }
    }

    // Dark mode switch
    $('.switch').on('click', function(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile navbar
    $('#socials_button').on('click', function(e) {
        var links = document.getElementById('mobile_links');
        if (links.style.display === 'block') {
            links.style.display = 'none';
        } else {
            links.style.display = 'block'
        }
    });

    // Hi
    $('#profile_pic').on('click', function(e) {
        alert('Hi 👋');
    });

});
