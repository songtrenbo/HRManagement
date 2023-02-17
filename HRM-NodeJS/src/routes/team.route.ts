import express from 'express';
import TeamController from '../controllers/team.controller';
import { tokenChecker } from '../middlewares/tokenChecker';

const router = express.Router();

router.get('/getTeamsMember/:id', TeamController.apiGetTeamsOfMember);
router.get('/', tokenChecker, TeamController.apiGetAllTeams);

router.post('/', TeamController.apiCreateTeam);
router.post('/addMember', TeamController.apiAddMemberToTeam);

export const teamRoute = router;
