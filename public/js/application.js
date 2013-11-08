$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('#form_id').on('submit', function(e){
    console.log("success")
    e.preventDefault();
    var form_data= $(this).serialize();
    $.ajax({
      url: '/surveys/create',
      type: 'post',
      data: form_data
    }).done(function(data) {
      console.log("done!", data.survey.description, data.survey.name)
      $('')    })  
  })




  // (server_data){
  // console.log("success" + server_data);
  // //Once you have success, use jQuery to display server data
  // }).fail(function(){
  // console.log("fail");;
});


