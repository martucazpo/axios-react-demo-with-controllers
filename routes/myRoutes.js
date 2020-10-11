const router = require('express').Router();
const coursesController = require("../controllers/coursesController")

router.route('/courses')
    .get(coursesController.getCourses)
    .post(coursesController.createCourses);

router.route('/courses/:id')
    .patch(coursesController.updateCourses)
    .delete(coursesController.deleteCourses);

module.exports = router;