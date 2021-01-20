const biblotekistiMiddleware = (req, res, next) => {
    if (!req.session.biblotekisti) {
        res.redirect('/')
    }

    else {
        next()
    }
}

module.exports = biblotekistiMiddleware