const Movie = require("../models/movie");

const getAllMovies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const searchQuery = req.query.search || "";

  try {
    let query = {};

    if (searchQuery) {
      query = { title: { $regex: new RegExp(searchQuery, "i") } };
    }
    const count = await Movie.countDocuments(query);
    const totalPages = Math.ceil(count / limit);
    const skip = (page - 1) * limit;
    const movies = await Movie.find(query).skip(skip).limit(limit);
    if (!movies) {
      return res.status(204).json({ message: "No movies found!" });
    }
    res.json({
      movies,
      currentPage: page,
      totalPages,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneMovie = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "movie id is required" });
  }
  const movie = await Movie.findOne({ _id: req.params.id }).exec();
  if (!movie) {
    return res
      .status(204)
      .json({ message: `No movies matches with is ${req.params.id}` });
  }
  res.json(movie);
};

module.exports = {
  getAllMovies,
  getOneMovie,
};
