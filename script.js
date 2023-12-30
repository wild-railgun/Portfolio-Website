function toggleNavMenu() {
    const menu = document.querySelector(".burger-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function focus() {
    const menu = document.querySelector(".child1");
    const icon = document.querySelector(".child2");
    menu.classList.toggle("clicked");
    icon.classList.toggle("clicked");
}