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

  $(".container form#create_form").on("submit", function(event){
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

  $("button.delete").on("click", function(event) {
    event.preventDefault()
    var button_id_string = $(this).attr('id')
    var button_id = parseInt(button_id_string)
    $.ajax({
      url: '/surveys/' + button_id + '/delete',
      type: "delete",
      data: {submit: true}
    }).done(function(server_data) {
      $('#' + button_id + "-delete").closest('li').remove()
    })
  })

  $("button.update").on("click", function(event) {
    event.preventDefault()
    var button_id_string = $(this).attr('id')
    var button_id = parseInt(button_id_string)
    $.ajax({
      url: '/surveys/' + button_id + '/update',
      type: 'get',
      data: {submit: true}
    }).done(function(server_data) {
      $('div#update_form_' + button_id).html(server_data)
    })
  })

  $("form.update_form").on("submit", function(event) {
    event.preventDefault()
    var form_data = $(this).serialize()
    var button_id_string = $(this).attr('id')
    var button_id = parseInt(button_id_string)
    $.ajax({
      url: '/surveys/' + button_id + '/update',
      type: 'puts',
      data: form_data
    }).done(function(server_data) {
      console.log(server_data)
    })
  })
})
