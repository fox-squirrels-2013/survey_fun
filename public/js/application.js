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
		var name = $("#new_surv_name").val()
		var desc = $("#new_surv_desc").val()

	    if ((name == null || name == '') || (desc == null || desc == '')) {
	    	alert('please fill out all forms completely')
	    } else {
			$.ajax({
				url: this.action,
	  			type: this.method,
				data: $(this).serialize() 
			}).done(function(server_data){
				$('body').html(server_data)
			}).fail(function(jqXHR, textStatus, errorThrown){
				console.log("fail" + errorThrown);
			});
		}
	});
}