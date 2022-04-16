import * as config from './config.mjs'
export function handle404(req,res,next){
const error =new Error('Not Found');
error.status=404;
next(error)
}
export function basicErrorHandler(error,req,res,next){
    if(res.headersSent){
        return next(error)
    }
    res.locals.message=error.message;
    res.locals.error=res.app.get('env')=='development'?error:{};
    res.status(error.status|| 500)
    res.render('error',{
        error:error,
        title:'error',
        message:error.message
    })
}
export function onError(error){
    const port = config.port ;
    if(error.syscall!=='listen')throw error ;
    const bind =typeof port =='string'?'Pipe '+ port : 'port'+port ;
    switch (error.code){
        case"EACCES":
        console.error(`${bind} requires elevated privilage`);
        process.exit(1);
        break;
        case "EADDRINUSE": 
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
        default :throw error;

    }
}
export function onListening(serve){
    const add =serve.address();
    const bind =typeof add.port=='string'?' Pipe '+add.port:' port '+add.port;
    
    // console.log(`server listening on ${bind}`);
}
