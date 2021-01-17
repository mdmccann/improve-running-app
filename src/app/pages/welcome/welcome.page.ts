import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { Moment, Duration } from 'moment';
import { SupportedDistance } from 'src/app/models/supported-distance';
import { UserProfile } from 'src/app/models/user-details-input.model';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  distance: SupportedDistance | null = null;
  targetTime: string | null = null;
  currentBestTime: string | null = null;

  distanceSelectOptions = {
    header: 'Select a Distance'
  };

  private readonly storageKey = 'USER_PROFILE2';

  constructor(private _router: Router,
    private _storage: Storage,
    private _loadingController: LoadingController) {
  }

  async ngOnInit() {
    const loadingElement: HTMLIonLoadingElement = await this._loadingController.create({
      message: 'Please wait...',
    });

    await loadingElement.present();

    const savedProfile: UserProfile | null = await this.getUserProfile();

    if (savedProfile !== null) {
      this._router.navigate(['/weekly-summary']);
    }

    loadingElement.dismiss();
  }

  onSubmit(): void {
    if (this.distance && this.targetTime) {

      const userProfile: UserProfile = {
        focusedDistance: this.distance,
        targetTime: this.getTimeDuration(this.targetTime)
      };

      if (this.currentBestTime) {
        userProfile.currentBest = this.getTimeDuration(this.currentBestTime);
      }

      this.saveUserProfile(userProfile);
      this._router.navigate(['/weekly-summary']);
    }
  }

  private async getUserProfile(): Promise<UserProfile | null> {
    const savedData = await this._storage.get(this.storageKey);
    if (savedData !== null) {
      return JSON.parse(savedData);
    }
    return null;
  }
  
  private saveUserProfile(profile: UserProfile): void {
    this._storage.set(this.storageKey, JSON.stringify(profile));
  }

  private getTimeDuration(dateTime: string): Duration {
    const momentDateTime: Moment = moment(dateTime);
    return moment.duration(`PT${momentDateTime.hours()}H${momentDateTime.minutes()}M${momentDateTime.seconds()}S`);
  }

}
