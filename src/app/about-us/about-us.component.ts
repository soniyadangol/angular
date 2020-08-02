import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
	leaders: Leader[];

  constructor(
  	private leaderService: LeaderService,
  ) { }

  ngOnInit() {
  	this.leaders = this.leaderService.getLeaders();
  }

}
