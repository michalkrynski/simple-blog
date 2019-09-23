import express from 'express';
import postController from '../controller/post';
import verifyToken from '../middleware/auth';

const router = express.Router();

router.get('/', postController.getPosts);
router.get('/:slug', postController.getPost);
router.post('/', verifyToken, postController.addPost);

export default router;
