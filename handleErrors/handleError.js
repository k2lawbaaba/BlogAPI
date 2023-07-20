module.exports.dbSchemaErrors=(err)=>{
    let errors={}

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

module.exports.JoiErrorHandler=(error)=>{
    let errors="";

    var errorType = error.details[0].type;
    switch (errorType) {
      case "string.empty":
        errors +=(error.message);
        break;
      case "string.pattern.base":
        errors +=(error.message);
        break;
      case "any.required":
        errors += (error.message);
        break;
      default:
        break;
    }
    return errors;
}

// module.exports.postJoiErrorHandler=(error)=>{
//     let error={title:"", content:""};
//     Object.values(error.details).forEach()
// }