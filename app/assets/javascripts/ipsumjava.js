$(document).on("click", "#get-lyrics", function(){
  rapper = $("")
  getLyrics(1, 2)
});

function formatLyrics(lyrics){
    return lyrics.join("<p>")
}

function putLyrics(lyrics) {
  $('#lyrics').html(formatLyrics(lyrics))
}

function getLyrics(numSentences, numParagraphs) {
  rapperData = {id: 6, paras: 5, sentences: 5}
  console.log(rapperData)
  $.ajax({
    url: '/ipsum',
    data: rapperData,
    type: 'GET'
  }).done(function(lyrics){
    console.log(lyrics)
    putLyrics(lyrics);
  })
}

