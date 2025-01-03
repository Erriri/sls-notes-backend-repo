const getUserID = (headers) => {
    return headers.app_user_id;
}

const getUserName = (headers) => {
    return headers.app_user_name;
}

const getResponseHeaders = () => {
    return {
        'Access-Control-Allow-Origin': '*'
    };
}

module.exports = {
    getUserID,
    getUserName,
    getResponseHeaders
}