const express = require('express');


// make an instance of the server and set env variables
const app = express();
const PORT = process.env.PORT || 'localhost';
const HOST = process.env.HOST || 3000;



// GET localhost/3000/
// app.get(route path, callback function)
app.get('/', (request, response) => {

    response.send(`Hello World, this Mr Server here`);

});

const importedRouter = require('./controllers/PokemonController')
app.use('/pokemon', importedRouter);


// Configure the server - above this line

// Activate the server below the line

app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`);
});




