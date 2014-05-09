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
    randomRapper = Math.floor((Math.random() * 22) + 1);
    rapper = $("#rapper_id").val(randomRapper)
    $("#paragraphs").val(1)
    $("#sentences").val(8)
    updateLyricsBox();
    moveToSelectedRapper()
});

function showLyrics() {
    $("#lyrics").show()
}

$(document).on("change", "#rapper_id", function() {
    moveToSelectedRapper()
});


function formatLyrics(lyrics) {
    return lyrics.join("<p>")
}

function putLyrics(lyrics) {
    $('#lyrics').html(formatLyrics(lyrics))
}

function getLyrics(rapper, numSentences, numParagraphs) {
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

    $("#owl-example").owlCarousel({
        items: 22,
        singleItem: true,
        navigation: true,
        navigationText: ["prev", "next"],
        rewindNav: true,
        pagination: false,
        slideSpeed: 0,
        paginationSpeed: 0,
        paginationNumbers: true,
        addClassActive: true,
        afterMove: getSelectedRapper,
        afterMove: changeDropdown
    });

    owl = $("#owl-example").data('owlCarousel');

});

function changeDropdown() {
    item = this.owl.currentItem
    item = item + 1
    $("#rapper_id").val(item);
}

function getSelectedRapper() {
    console.log(this.owl.currentItem + 1)
}

function moveToSelectedRapper() {
    owl.goTo($('#rapper_id').val() - 1) // Go to x slide
}