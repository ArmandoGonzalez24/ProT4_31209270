import {Router} from 'express';
import { persona } from './controller.js';

export const router = Router()

router.get('/personas', persona.getAll);
router.post('/persona',persona.add);
router.delete ('/persona', persona.delete);
router.put ('/persona',persona.update);






