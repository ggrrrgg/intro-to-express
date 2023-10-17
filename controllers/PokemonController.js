const express = require('express');

const router = express.Router();


router.get('/', (request, response) => {

    response.json ({
        message:'Hello from a router'
    })
})

router.get("/bananas", async (request, response) => {

	let result = await fetch("https://pokeapi.co/api/v2/pokemon/25");
	let data = await result.json();


	response.json({
		message: "bananas!",
		pokemonName: data.name
	});
});


// CRUD

router.post('/', (request, response) => {
    response.json({
        message:'POST request received'
    })
})

module.exports = router;