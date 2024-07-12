const express = require("express");
const router = express.Router();
const movieController = require('../controllers/movieController');

router.route("/").get(movieController.getAllMovies);
router.route('/:id').get(movieController.getOneMovie);

module.exports = router;