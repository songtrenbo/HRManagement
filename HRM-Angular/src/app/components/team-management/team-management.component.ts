import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit, OnDestroy{
  constructor(private teamService: TeamService){}

  subscription!: SubscriptionLike;
  teams: Team[] = [];
  ngOnInit(): void {
    this.getTeams();
  }
  getTeams(): void{
    this.subscription = this.teamService.getAllTeam().subscribe((res:Team[])=>{
      this.teams = res;
      console.log(res)
    })
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }    
  }

}
