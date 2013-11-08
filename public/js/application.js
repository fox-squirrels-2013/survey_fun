$(document).ready(function() {
	$('#new_survey').on('click', function(){
		$.ajax({
			url: '/surveys/new',
			type: 'GET',
		}).done(function(server_data){
			$("#display_data").html(server_data)
			listenForm()
		}).fail(function(jqXHR, textStatus, errorThrown){
			console.log("fail" + errorThrown)
		});
	}); 

	$('.single-serv').on('click', function(){
		console.log('you just cliked: ', $(this).attr('id'))
		$.ajax({
			url: '/surveys/' + $(this).attr('id'),
			type: 'GET',
		}).done(function(server_data){
			$("#display_data").html(server_data)
			listenForm()
		}).fail(function(jqXHR, textStatus, errorThrown){
			console.log("fail" + errorThrown)
		});
	});   
});

function listenForm() {
	$('#survey').on('submit', function(e){
		e.preventDefault()
		$.ajax({
			url: this.action,
  			type: this.method,
			data: $('#survey').serialize()
		}).done(function(server_data){
			$('body').html(server_data)
		}).fail(function(jqXHR, textStatus, errorThrown){
			console.log("fail" + errorThrown);
		});
	});
}