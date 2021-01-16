import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Moment, Duration } from 'moment';
import { SupportedDistance } from 'src/app/models/supported-distance';
import { UserProfile } from 'src/app/models/user-details-input.model';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage {

  distance: SupportedDistance | null = null;
  targetTime: string | null = null;
  currentBestTime: string | null = null;

  distanceSelectOptions = {
    header: 'Select a Distance'
  };

  constructor(private _router: Router) {
  }

  onSubmit(): void {
    this._router.navigate(['/weekly-summary']);

    if (this.distance && this.targetTime) {
      const userProfile: UserProfile = {
        focusedDistance: this.distance,
        targetTime: this.getTimeDuration(this.targetTime)
      };

      if (this.currentBestTime) {
        userProfile.currentBest = this.getTimeDuration(this.currentBestTime);
      }

      console.log('Saving User Profile', userProfile)
      // TODO: Persist user input to local storage 
    }

  }

  private getTimeDuration(dateTime: string): Duration {
    const momentDateTime: Moment = moment(dateTime);
    return moment.duration(`PT${momentDateTime.hours()}H${momentDateTime.minutes()}M${momentDateTime.seconds()}S`);
  }

}
