
function setTheme() {
    const html = document.getElementById("master_setting")
    const theme = document.getElementById("theme")
    let theme_state = html.getAttribute("data-bs-theme")
    if (theme_state == "light") {
        html.setAttribute("data-bs-theme", "dark")
        theme.innerText = "dark_mode"
    }
    if (theme_state == "dark") {
        html.setAttribute("data-bs-theme", "light")
        theme.innerText = "light_mode"
    }
}