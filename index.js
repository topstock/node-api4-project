require('dotenv').config();
const server = require('./api/server.js');
// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;
// a dynamic port allows each environment, each developer each computer to have its own ports.
//change port for environment without changing the source code.  
//They all have a way to add variables from outside the source code.  
//You can extract out variables: environment variables.  
//Hosting providers have secure options for environment variables.

server.get('*', (req, res) => { 
    res.status(200).json({ message: 'this api is for devs only'});
});

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

