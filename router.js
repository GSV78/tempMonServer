import Router from 'express';
import DataController from './DataController.js';

const router = new Router();

router.post('/tempData', DataController.create);
router.get('/tempData', DataController.getAll);
router.get('/tempData/:day', DataController.getOneDay);
// router.put('/posts', PostController.update);
// router.delete('/posts/:id', PostController.delete);

export default router;
