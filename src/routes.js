import {Router} from 'express';
import libros from './controller.js';

export const router = Router()

router.get('/libros', libros.getAll);
router.get("/libros/:id", libros.getOne);
router.post('/libros',libros.add);
router.delete ('/libros', libros.delete);
router.put ('/libros',libros.update);
