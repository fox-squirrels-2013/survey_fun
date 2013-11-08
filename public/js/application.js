// var survey_create_button = '<div class="container"><form action="/surveys/create" method="post"><input type="text" name="survey[name]"><textarea name="survey[description]"></textarea><input type="submit" value="Create Survey"></form></div>'


$(document).ready(function() {
  $("#new_survey").on('click', function(e){
    console.log("This clicked");
    e.preventDefault()
    $.ajax({
      url: "surveys/new",
      type: 'get'
      }).done(function(data,status){
        console.log("ALARM!")
        console.log(status)
        console.log(data)
        $("#survey_form").html(data)
      })

    // (html)
    // $("#survey_form").append html

    

  })
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
