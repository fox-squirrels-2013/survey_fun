$(document).ready(function() {
  $('#show_survey').on("click", function(event){
    event.preventDefault()
    $.ajax({
      url: "surveys/new",
      type: "GET",
      data: {submit: true}
    }).done(function(server_data) {
      $('.new_form').html(server_data)
    })
  })

  $(".container form").on("submit", function(event){
    event.preventDefault()
    var formData = $(this).serialize()
    $.ajax({
      url: "/surveys/create",
      type: "POST",
      data: formData
    }).done(function(server_data) {
      $('.survey_display').html(server_data)
    })
  })
})
