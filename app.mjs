
import express from 'express';
import  {config}  from './config/config.mjs';
import glob from 'glob';
import mongoose from 'mongoose';
import http from 'http'
import {Apphandler} from './config/express.mjs'
import { onListening, onError } from './config/appsupport.mjs';
// mongoose.connect(config.db);
// const db = mongoose.connection;
// db.on('error', () => {
//   throw new Error('unable to connect to database at ' + config.db);
// });

  
const app = express();
export const server=http.createServer(app);
Apphandler(app,config)

server.on('error',onError)
server.on('listening',()=>{
  onListening(server)
})
server.listen(config.development.port, () => {
  console.log('Express server listening on port ' + config.development.port);
});