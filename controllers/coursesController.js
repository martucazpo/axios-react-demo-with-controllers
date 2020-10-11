const db = require("../models/DemoData");

module.exports = {
getCourses: function (req, res) {
    db.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
},

createCourses: function (req, res) {
    db.create(req.body)
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
},

updateCourses: function (req, res) {
    let id = req.params.id;
    let { title } = req.body;
    db.findOneAndUpdate({ id: id }, { $set:{ title } }, { new: true })
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
},

deleteCourses: function (req, res) {
    let id = req.params.id;
    db.findOneAndDelete({ id: id })
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
}
};