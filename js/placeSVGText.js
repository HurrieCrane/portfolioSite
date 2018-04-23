var copy = {
    0: "",
    1: ["On 1st September 2016 I co-founded a company called Vandie Studios:", 
        "at first we worked on a game called Hope, which was up for the",
        "YGD Bafta, and then a game called Chief. We then went to produce",
        "educational software, we worked on a system called Thanks which",
        "was a reward system for schools.On 1st August 2017 I left Vandie",
        "Studios to work on the Shelf brand and in 7th September 2017 we",
        "released Cables, our logo and a link to our site is included in ",
        "the gallery below, and we hope to release more games in the future.",
        "When I left IV form I worked at a company called Mast Group, ",
        "a pharmaceutical supply company, developing a vial stock control",
        "system and after two months I left for Shop Direct. I joined Shop",
        " Direct in September of 2017. I'm currently an iOS developer, ",
        "which I've come to very much enjoy."]
}

function placeText(at) {
    var xOffset
    var yOffset;

    var targetElementId;

    switch (at) {
        case 0:
            xOffset = 7;
            yOffset = 5;
            targetElementId = "aboutme"
            break;
        case 1:
            xOffset = 3;
            yOffset = 5;
            targetElementId = "pastwork"
            break;

        default:
            xOffset = 0;
            yOffset = 0;
            break;
    }

    var lastTspan = document.createElement("tspan");
    lastTspan.setAttribute("x", xOffset + "%");
    lastTspan.setAttribute("y", yOffset + "%");
    lastTspan.innerText = "lolololol";

    document.getElementById(targetElementId).appendChild(lastTspan);

    console.log(copy[1].length);

    for (var i = 1; i < copy[1].length; i++) {
        // continually offset the place of the tspan
        var newPlace = (yOffset * i) + 4.2;
        
        var tspan = document.createElement("tspan");
        tspan.setAttribute("x", xOffset + "%");
        tspan.setAttribute("y", newPlace + "%");
        tspan.innerText = "Lololololololo"; // gets the text from the specific copy and the specific line

        document.getElementById(targetElementId).appendChild(tspan)
    }
}