const express = require('express')
const router = express.Router()

const db = require('../config/db')

//Get :http://localhost:3000/user
router.get('/', (req, res) => {
    // For pool initialization, see above
    db.query('SELECT * FROM users', function (err, rows) {
        if (err) {
            console.log('ERROR fetching data from users table',err)
            return
        }

        return res.status(200).json(rows)
    });
})

module.exports = router