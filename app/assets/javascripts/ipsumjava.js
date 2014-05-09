$(document).on("click", "#get-lyrics", function(){
  getLyrics(1, 2)
});


function putLyrics(lyrics) {
  $('#lyrics').text(lyrics)
}

function getLyrics(numSentences, numParagraphs) {
  $.ajax({
    url: '/ipsum',
    data: {id: 1, paras: 3, sentences: 5},
    type: 'GET'
  }).done(function(lyrics){
    putLyrics(lyrics);
  })
}

