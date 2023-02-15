import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/', UserController.apiGetAllUsers);
router.get('/getMembersTeam/:id', UserController.apiGetMembersFromTeam);

router.post('/', UserController.apiCreateUser);

export const userRoute = router;
