const Router = require('../../framework/router');
const controller = require('../controllers/genreController');
const router = new Router();

router.get('/genres', controller.getGenres);
router.post('/genres', controller.createGenre);
router.put('/genres', controller.updateGenre);
router.delete('/genres', controller.deleteGenre);

module.exports = router;
