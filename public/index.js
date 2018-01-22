console.log('is this working?');

function handleSubmitButton() {
	$('.registrationForm').on('submit', function(event) {
		event.preventDefault();
		console.log('do something');
		const fName = $('#firstName').val();
		const lName = $('#LastName').val();
		const email = $('#email').val();
		const pWord = $('#password').val();

		const settings = {
    		url: 'http://localhost:8080/user',
    		data: {
    			firstName: fName,
    			lastName: lName,
    			email: email,
    			password: pWord
    		},
    		dataType: 'json',
    		type: 'POST',
    		success: function (response) {
    			console.log('does this function work?');
    			console.log(response);
    		}
  		};

  		// Make call to API with ajax
  		$.ajax(settings);
		});
}

function getDataFromApi(searchTerm, callback) {

}

$(handleSubmitButton);