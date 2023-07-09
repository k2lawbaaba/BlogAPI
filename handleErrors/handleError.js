module.exports.dbSchemaErrors=(err)=>{
    let errors={username:""}

    if(err.code===11000){
        errors.username="Username already exist";
        return errors;
    }
    if(err.message.includes("User validation failed")){
        Object.values(err.errors).forEach(({properties} )=> {
            errors[properties.path]= properties.message;
        });
    }
    return errors;
}

module.exports.JoiErrorHandler=(err)=>{
    let errors={username:"", password:""};
    Object.values(err.details).forEach(({path, message})=>{
        errors[path]= message
    });
    return errors;

}