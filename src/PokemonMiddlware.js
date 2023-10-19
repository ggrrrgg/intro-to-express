

// Function for authorisation
// If user name is not George, respnd with messgae
// Else mve to next function


function checkForGeorge (request, response, next) {
	// if body data contains a username that is not GEORGE 
    if (request.body.username != "George"){
        // break out of route chain
		return response.json({
			message:"You are not authorised!"
		});
	} else {
        // move to the next step in the chain
		next();
	}
}

module.exports = {
    checkForGeorge
}