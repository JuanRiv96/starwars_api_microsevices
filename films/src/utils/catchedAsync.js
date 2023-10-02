module.exports = (fn) => {
    return function (res, req, next) {
        fn(res, req).catch( (err) => {
            next(err);
        });
    };
};
