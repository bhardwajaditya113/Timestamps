const timesmp = require('../models/time');


exports.gettimestamp = (req, res, next) => {
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);

    const timesm = new timesmp({
        timestamp: currentTimeInSeconds
    })

    timesm.save().then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })


}


exports.passtoreact = (req, res, next) => {
    timesmp.find({}).then(data => {
        res.json({ data: data })
    }).catch(err => {
        console.log(err);
    })
}