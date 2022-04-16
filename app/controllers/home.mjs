export async function home(req,res,next){
    console.log(req.url)
await res.render('clock')
}