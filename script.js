console.log("Its working")

let theme = localStorage.getItem("theme")

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log("Option clicked: ", mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode=='light') {
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode=='dark') {
        document.getElementById('theme-style').href = 'dark.css'
    }
    if (mode=='funky') {
        document.getElementById('theme-style').href = 'funky.css'
    }

    localStorage.setItem('theme', mode)
}