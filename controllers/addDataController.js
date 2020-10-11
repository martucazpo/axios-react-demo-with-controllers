const db = require("../models/DemoData");
const data = require("../data.json");

module.exports = {
    addData: function (req, res) {
        db.create(data)
        .then(res.sendStatus(200))
        .catch(err => console.log(err));
    }
};