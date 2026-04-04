import * as TheatreController from './theatre.controller';
import express from 'express';
import {validate} from '../../../middlewares/validate';

import {TheatreSchema} from './theatre.validations';

const router=express.Router();

router.post('/',validate(TheatreSchema),TheatreController.createTheatre);
router.get('/',TheatreController.getTheatres);

export default router;