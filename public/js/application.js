$(document).ready(function() {
  $(".container form").on("submit", function(event){
    event.preventDefault()
    var formData = $(this).serialize()
    $.ajax({
      url: "/surveys/create",
      type: "POST",
      data: formData
    }).done(function(server_data) {
      console.log(server_data)
      $('.survey_display').html(server_data)
    })
  })
})
