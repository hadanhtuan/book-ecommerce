const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ErrorResponse = require("../../utils/errorResponse");

const checkAdminPermission = (req, res, next) => {
	const token = req.body.token;

    if (token) {
        jwt.verify(token, "secret", async (err, decodedToken) => {
            if (err) {
                res.status(401).send({message: "Unauthorized"});
            }
            else {
                User.findById(decodedToken._id)
                    .then((result) => {
                        if (result.role == "admin") {
                            next();
                        }
                        else {
                            res.status(401).send({message: "Unauthorized"});
                        }
                    })
                    .catch((error) => {
                        res.status(401).send({message: "Unauthorized"});
                    });
            }
        });
    }
    else {
        res.status(401).send({message: "Unauthorized"});
    }
}

module.exports = { checkAdminPermission };