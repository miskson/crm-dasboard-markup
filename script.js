window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    const page = document.querySelector(".dashboard-page")
    setTimeout(() => {
        page.classList.remove("hidden")
        loader.classList.add("hidden")
    }, 1500)
})