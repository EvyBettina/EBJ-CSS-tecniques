function toggletheme () {
//logic for toggle the theme
console.log("Theme button clicker")
}

//find the button that should trigger the function
let themeButton = document.getElementById("toogle-theme")
themeButton.addEventListener("click", toggletheme)