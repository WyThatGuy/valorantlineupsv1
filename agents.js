var text = document.getElementById("textArt")
var agentFull = document.getElementById("agentArt")

function changeAgent(agent) {
    text.src = "backgroundText/" + agent + "_Background_Text.webp"
    agentFull.src = "fullArt/" + agent + "_Artwork_Full.webp"
}

