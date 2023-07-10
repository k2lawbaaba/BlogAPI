
const logOut=(req, res)=>{
    res.cookie("jwToken", "",{maxAge:1});
    res.status(201).send("Successfully logged out");
}
module.exports=logOut