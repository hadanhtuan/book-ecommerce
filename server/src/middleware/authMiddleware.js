const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ErrorResponse = require("../../utils/errorResponse");

const checkAdminPermission = (req, res, next) => {
	const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, "secret", async (err, decodedToken) => {
            if (err) {
                return next(new ErrorResponse("Không decode được token", 500));
            }
            else {
                User.findById(decodedToken._id)
                    .then((result) => {
                        if (result.role == "admin") {
                            next();
                        }
                        else {
                            return next(new ErrorResponse("UNAUTHORIZED", 401));
                        }
                    })
                    .catch((error) => {
                        return next(new ErrorResponse("UNAUTHORIZED", 401));
                    });
            }
        });
    }
    else {
        return next(new ErrorResponse("UNAUTHORIZED", 401));
    }
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, "secret", async (err, decodedToken) => {
            if (err) {
                return next(new ErrorResponse("Không decode được token", 500));
            }
            else {
                req.userId = decodedToken._id;
                next();
            }
        });
    }
    else {
        return next(new ErrorResponse("Không nhận được token", 500));
    }
}

module.exports = { checkAdminPermission, verifyToken };