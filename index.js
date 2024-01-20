require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Recieved request: ${req.method} : ${req.url}`);
    next();
}); 

app.get('/', (req, res) => {

    res.write('welcome\n');
    
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))