import { Component, OnInit } from '@angular/core';
import { WeeklyPlan } from 'src/app/models/plan';
import { RunPlanner } from 'src/app/providers/run-planner.service';

@Component({
  selector: 'app-weekly-summary',
  templateUrl: './weekly-summary.page.html',
  styleUrls: ['./weekly-summary.page.scss'],
})
export class WeeklySummaryPage implements OnInit {

  weeklyPlan!: WeeklyPlan;

  constructor(private _runPlanner: RunPlanner) { }

  ngOnInit() {
    this.weeklyPlan = this._runPlanner.getWeeklyPlan();
  }

}
