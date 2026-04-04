import express from 'express';
import * as MovieController from './movie.controller';
import { MovieSchema } from './movie.validations';
import {validate} from '../../../middlewares/validate';


const router = express.Router();

router.post('/',validate(MovieSchema), MovieController.createMovie);   //why is ordering of routers important? because if we put /:id before /top then it will treat 'top' as an id and will never reach the /top route. So always put specific routes before dynamic routes.
router.get('/', MovieController.getAllMovies);
router.get('/top', MovieController.getTopMoviesByVotes);
router.get('/:id', MovieController.getMovieById);

export default router;
