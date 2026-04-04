import express from 'express';
import movieRouter from '../modules/modules/movie/movie.route';
import theatreRouter from '../modules/modules/theatre/theatre.route';
import showRouter from '../modules/modules/show/show.route';


const router = express.Router();

router.use('/movies', movieRouter);
router.use('/theatres', theatreRouter);
router.use('/shows', showRouter);

export default router;