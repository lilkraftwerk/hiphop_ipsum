$(document).on("click", "#get-lyrics", function(){
  rapper = $("#rapper_id").val()
  numParagraphs = $("#paragraphs").val()
  numSentences = $("#sentences").val()
  getLyrics(rapper, numSentences, numParagraphs)
});

function formatLyrics(lyrics){
    return lyrics.join("<p>")
}

function putLyrics(lyrics) {
  $('#lyrics').html(formatLyrics(lyrics))
}

function getLyrics(rapper, numSentences, numParagraphs) {
  rapperData = {id: rapper, paras: numParagraphs, sentences: numSentences}
  $.ajax({
    url: '/ipsum',
    data: rapperData,
    type: 'GET'
  }).done(function(lyrics){
    putLyrics(lyrics);
  })
}

$(document).ready(function() {

  $("#owl-example").owlCarousel({
    items: 22,
    singleItem: true,
    navigation : true,
    navigationText : ["prev","next"],
    rewindNav : true,
    pagination : true,
    paginationNumbers: false,
  });

});