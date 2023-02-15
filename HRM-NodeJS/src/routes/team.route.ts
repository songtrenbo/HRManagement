import express from 'express';
import TeamController from '../controllers/team.controller';

const router = express.Router();

router.get('/getTeamsMember/:id', TeamController.apiGetTeamsOfMember);
router.get('/', TeamController.apiGetAllTeams);

router.post('/', TeamController.apiCreateTeam);
router.post('/addMember', TeamController.apiAddMemberToTeam);

export const teamRoute = router;
