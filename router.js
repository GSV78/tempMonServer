import Router from 'express';
import DataController from './DataController.js';
import cors from 'cors';

const router = new Router();

router.options('/tempData', cors());
router.head('/tempData', cors(), (req, res) => {
  console.info('HEAD /simple-cors');
  res.sendStatus(204);
});
router.post('/tempData', cors(), DataController.create);
router.get('/tempData', DataController.getAll);
router.get('/tempData/:day', DataController.getOneDay);
// router.put('/posts', PostController.update);
// router.delete('/posts/:id', PostController.delete);

export default router;
