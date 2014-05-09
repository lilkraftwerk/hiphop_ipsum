$(document).on("click", "#get-lyrics", function(){
  rapper = $("#rapper_id").val()
  numParagraphs = $("#paragraphs").val()
  numSentences = $("#sentences").val()
  getLyrics(rapper, numSentences, numParagraphs)
});


$(document).on("change", "#rapper_id", function(){
  moveToSelectedRapper()
});


$('#rapper_id').on('change', function() {
  alert( this.value ); // or $(this).val()
});

$( "#rapper_id" ).select(function() {
  alert( "Handler for .select() called." );
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
    addClassActive: true,
    afterMove: getSelectedRapper,
  });

  owl = $("#owl-example").data('owlCarousel');

});

function getSelectedRapper(){
  console.log(this.owl.currentItem + 1)
}

function moveToSelectedRapper(){
  owl.goTo($('#rapper_id').val() -1)  // Go to x slide
}