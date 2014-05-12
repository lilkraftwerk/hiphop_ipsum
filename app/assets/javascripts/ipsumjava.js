$(document).on("click", "#get-lyrics", function() {
    updateLyricsBox()
});

function updateLyricsBox() {
    showLyrics()
    rapper = $("#rapper_id").val()
    numParagraphs = $("#paragraphs").val()
    numSentences = $("#sentences").val()
    getLyrics(rapper, numSentences, numParagraphs)
}


$(document).on("click", "#random-two", function() {
    rapper = $("#rapper_id").val(Math.floor((Math.random() * 23) + 1))
    $("#paragraphs").val(1)
    $("#sentences").val(8)
    updateLyricsBox();
    changeRapperPicture(rapper)
});

function showLyrics() {
    $("#lyrics").show()
}

$(document).on("change", "#rapper_id", function() {
    changeRapperPicture($("#rapper_id").val())
});


function formatLyrics(lyrics) {
    return lyrics.join("<p>")
}

function putLyrics(lyrics) {
    $('#lyrics').html(formatLyrics(lyrics))
}

function getLyrics(rapper, numSentences, numParagraphs) {
    randomJargon()
    rapperData = {
        id: rapper,
        paras: numParagraphs,
        sentences: numSentences
    }
    $.ajax({
        url: '/ipsum',
        data: rapperData,
        type: 'GET'
    }).done(function(lyrics) {
        putLyrics(lyrics);
    })
}

$(document).ready(function() {
    $("#lyrics").hide();
    changeRapperPicture(1)
});

function changeRapperPicture(rapperId) {
    $('#headshot-box').html($("#" + rapperId).html())
}

function randomJargon() {
    var rapJargon = [
        "Reticulating splines...", "Diggin' in the crates...", "Turning up...", "Rendering bars...", "Bleeping and blooping...", "Rendering the RapZone...", "Formatting lyrical prowess...", "Receiving packets from BasedWorld...", "Going SSJ like Goku...", "Rollin' and scratchin'...", "Keepin' it moving..."
    ]
    jargonNumber = Math.floor((Math.random() * rapJargon.length))
    $("#lyrics").html(rapJargon[jargonNumber])
}