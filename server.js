const http=require('http');
const app = require('./app/app');

const server= http.createServer(app);
const PORT=process.env.PORT||2020;

// server
server.listen(PORT,console.log(`Server is running on port ${PORT}`));