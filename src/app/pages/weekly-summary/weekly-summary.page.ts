import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { WeeklyPlan } from 'src/app/models/plan';
import { RunPlanner } from 'src/app/providers/run-planner.service';

@Component({
  selector: 'app-weekly-summary',
  templateUrl: './weekly-summary.page.html',
  styleUrls: ['./weekly-summary.page.scss'],
})
export class WeeklySummaryPage implements OnInit {

  weeklyPlan: WeeklyPlan | undefined;

  private readonly storageKey = 'WEEKLY_PLAN';

  constructor(
    private _runPlanner: RunPlanner,
    private _storage: Storage,
    public loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loadingElement: HTMLIonLoadingElement = await this.loadingController.create({
      message: 'Please wait...',
    });

    await loadingElement.present();

    const savedData: unknown = await this.getStoredData();

    if (this.isWeeklyPlan(savedData)) {
      this.weeklyPlan = savedData;
    } else {
      const newPlan: WeeklyPlan = this._runPlanner.getWeeklyPlan();
      this.weeklyPlan = newPlan;
      this.saveWeeklyPlan(newPlan);
    }

    loadingElement.dismiss();
  }

  private isWeeklyPlan(data: unknown): data is WeeklyPlan {
    return data !== null; // TODO: implement type guard for WeeklyPlan
  }

  private saveWeeklyPlan(plan: WeeklyPlan): void {
    this._storage.set(this.storageKey, plan); // handle error - what if saving failed?
  }

  private getStoredData(): Promise<unknown> {
    return this._storage.get(this.storageKey); // handle error - what if retrieving failed?
  }

}
