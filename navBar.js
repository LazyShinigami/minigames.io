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