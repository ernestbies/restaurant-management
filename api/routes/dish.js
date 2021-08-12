import express from 'express';
import dishController from '../controllers/dishController';
const router = express.Router();

router.get('/dishes', dishController.getAllDishes);
router.get('/dishes/:id', dishController.getDish);
router.post('/dishes', dishController.createDish);
router.put('/dishes/:id', dishController.updateDish);
router.delete('/dishes/:id', dishController.deleteDish);

export default router;
