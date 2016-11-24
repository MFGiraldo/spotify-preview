var template = Handlebars.compile($("#results-template").html());

$("#search").keypress(function(event) {
  if (event.which == 13) {

    $.getJSON("https://api.spotify.com/v1/search?q=" + $(this).val() + "&type=track", function(result) {
      $(".tracks").html(template({ results: result.tracks.items }));
    });

    $(this).val(" ");
  }
});