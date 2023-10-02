module.exports =  ( res, statusCode, data ) => {
    return res.status( statusCode ).json({
        error: false,
        data: data
    });
};
