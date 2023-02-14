import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/user', UserController.apiGetAllUsers);
router.post('/user', UserController.apiCreateUser);

export const userRoute = router;
