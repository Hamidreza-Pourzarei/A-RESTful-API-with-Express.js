const Joi = require('joi'); 
const express = require('express');
const func = require('joi/lib/types/func');
const genres = require('./routes/genres'); 
const app = express(); 

app.use(express.json()); 
app.use('/api/genres', genres); 

app.get('/', (req, res) => {
    res.send('Hello Big Brain!'); 
});


app.get('/api/genres/:id', (req,res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id)); 
    if(!genre) return res.status(404).send('The genre with the given ID was not found!');
    res.send(genre);
});

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`listening to the port ${port}`)); 