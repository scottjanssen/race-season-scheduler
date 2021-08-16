const express = require('express')
const app = express()

app.get('/schedule', function (req, res) {
    const schedule = [
        {track:"Yas Marina", country:"UAE"}
    ];

    res.json(schedule);
})

app.listen(5000)