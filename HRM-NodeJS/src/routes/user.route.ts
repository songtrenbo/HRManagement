import express from 'express';
import UserController from '../controllers/user.controller';
import { tokenChecker } from '../middlewares/tokenChecker';

const router = express.Router();

router.get('/', UserController.apiGetAllUsers);
router.get('/getMembersTeam/:id', UserController.apiGetMembersFromTeam);

router.post('/login', UserController.apiLogin);
router.post('/', UserController.apiCreateUser);

export const userRoute = router;
