const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
let i = 0
app.get('/express_backend', (req, res) => { 
    console.log(`server app.get has been called ${i} times`)
    i = i + 1
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});