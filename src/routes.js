import {Router} from 'express';
import { persona } from './controller.js';

export const router = Router()

router.get('/personas', persona.getAll);
router.post()





