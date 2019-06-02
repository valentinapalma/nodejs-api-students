const express = require('express');
const router = express.Router();

const student = require('./students.js');

// Middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

// Metoder
router.post("/students", student.post);
router.get("/students", student.get);
router.get("/students/:id", student.getById);
// router.get("/students/:id", student.get);
router.put("/students/:id", student.put);
router.delete("/students/:id", student.deleteStudent);

module.exports = router