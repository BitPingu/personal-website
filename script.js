if (localStorage.getItem("theme") == 'dark') {
    document.getElementById("checkbox").checked = true
    document.body.classList.toggle('dark')
}

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    if (localStorage.getItem("theme") != 'dark') {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
    console.log(localStorage.getItem('theme'))
});