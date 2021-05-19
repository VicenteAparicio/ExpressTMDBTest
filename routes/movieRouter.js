const router = require('express').Router();

const movieController = require('../controllers/movieController');



//CRUD


//GET

//http://localhost:3000/movies
router.get('/bytitle/:movie', async (req, res) => {
    try {
        let movie = req.params.movie;
        res.json(await movieController.searchMovieByTitle(movie));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});



router.get('/toprated', async (req, res) => {
    try {
        res.json(await movieController.findTopRated());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchid/:id', async (req, res) => {
    try{
        let id = req.params.id;
        res.json(await movieController.searchById(id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchgenre', async (req, res) => {
    try{
        res.json(await movieController.searchByGenreName());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

module.exports = router;