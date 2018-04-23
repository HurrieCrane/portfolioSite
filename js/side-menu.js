function openMenu() {
    document.getElementById("sideNav").style.width = "250px";

    /*
        There's a slight bug with this, because the div top has padding at the top
        it's not clickable there. However, to make up for the bug there's an
        x button
    */
}

function closeMenu() {
    document.getElementById("sideNav").style.width = "0px";
}