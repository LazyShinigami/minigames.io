const checkBox = document.getElementById("checkbox")
checkBox.addEventListener("change", () => {
    document.getElementById("body").classList.toggle("night")
})

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdownButton]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdownButton].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})


// Styling a sticky navigation bar that changes background on scroll

const navBar = document.querySelector(".navBar") // navigation bar
let isDesktop = window.innerWidth
if (isDesktop > 999) {
    isDesktop = true
} else {
    isDesktop = false
}
const emptyArea = document.querySelector(".emptyArea") // rest of the code of the page
const emptyAreaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navBar.classList.add("navBarScrolled")
        } else {
            navBar.classList.remove("navBarScrolled")
        }
    })
}, 
{
    threshold: 0,
    rootMargin: (isDesktop === true) ? "-80px" : "-100px"    
})
emptyAreaObserver.observe(emptyArea)


