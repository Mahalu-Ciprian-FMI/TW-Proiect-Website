app.use(function(req,res,next){
    res.status(404).render()
})
app.listen(3000,()=>
{
    console.log("test")
});