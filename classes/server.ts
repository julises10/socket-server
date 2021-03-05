import express from 'express';
import { SERVER_PORT } from '../global/environments';

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    //start( callback: Function ) { //Esto da error, se debe cambiar por () => void
    start( callback: () => void ) {
        this.app.listen( this.port, callback );
    }
}