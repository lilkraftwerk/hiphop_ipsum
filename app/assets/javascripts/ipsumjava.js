$(document).on("click", "#get-lyrics", function(){
  rapper = $("#rapper_id").val()
  numSentences = $("#paragraphs").val()
  numParagraphs = $("#sentences").val()
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

