const { validationResult } = require('express-validator');


const validarCampos = ( req, res, next ) => {

    const errors = validationResult(req);

    const errorsResponse = errors.array().map(error => {
        return {
            msg: error.msg
        }
    })

    if( !errors.isEmpty() ){
        return res.status(400).json({
            errors: errorsResponse
        });
    }

    next();
}



module.exports = {
    validarCampos
}
