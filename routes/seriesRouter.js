const router = require('express').Router();

const seriesController = require('../controllers/seriesController');

//CRUD


//GET

//http://localhost:3000/series
router.get('/', async (req, res) => {
    try{
        res.json(await seriesController.topRated());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/:tv_id', async (req, res) => {
    try {
        let tv_id = req.params.tv_id;
        res.json(await seriesController.findTvShow(tv_id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});



module.exports = router;