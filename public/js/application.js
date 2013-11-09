$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $( "#survey_create_form").on("submit", function(e) {
    e.preventDefault();
    var newSurvey_name = $("#survey_name_input").val())
    var newSurvey_desc = $("#survey_description_text").val()
    $.ajax({
      url: "/surveys/create",
      type: "POST",
      data: { survey: {name: newSurvey_name, description: newSurvey_desc }},
      success: function(data) {
        // want to create survey data at a different route
        $('.container').append(newElement(data.))
      }
    })
  });

// $( "#dataTable tbody tr" ).on( "click", function() {
//   alert( $( this ).text() );
// });

});
