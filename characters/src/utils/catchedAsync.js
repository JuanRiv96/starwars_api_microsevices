module.exports = (fn) => {
    return function (res, req, next) {
        fn(res, req).catch( (err) => {
            next(err);
        });
    };
};

//Otra manera de escribir el manejador de errores
// module.exports = (fn) => (res, req, next)=>
//  fn(res, req).catch( (err) => next(err) );

