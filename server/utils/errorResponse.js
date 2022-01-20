class ErrorResponse extends Error {
    constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    }
}

//error có dạng: {error, message}
module.exports = ErrorResponse;


