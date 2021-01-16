import { Injectable } from '@angular/core';
import { WeeklyPlan } from '../models/plan';

@Injectable({ providedIn: 'root' })
export class RunPlanner {

  getWeeklyPlan(): WeeklyPlan {
    return {
      weekStarting: new Date('2020-01-11'),
      days: [
        {
          day: 'monday',
          activity: {
            type: 'DistancedEasyRun',
            distance: 3000
          },
          achieved: false,
          briefDescription: 'Run at an easy pace for 3km'
        },
        {
          day: 'tuesday',
          activity: null,
          achieved: false,
          briefDescription: 'Rest and recover'
        },
        {
          day: 'wednesday',
          activity: {
            type: 'IntervalRun',
            reps: 5,
            distance: 400,
            pace: 4,
            restTime: 30
          },
          achieved: false,
          briefDescription: '5x400m @ 4:00/km (30sec rests between)'
        },
        {
          day: 'thursday',
          activity: {
            type: 'TimedTempoRun',
            duration: 1800,
            pace: 5
          },
          achieved: false,
          briefDescription: 'Tempo run for 30minutes @ 5:00/km'
        },
        {
          day: 'friday',
          activity: null,
          achieved: false,
          briefDescription: 'Rest and recover'
        },
        {
          day: 'saturday',
          activity: {
            type: 'DistancedEasyRun',
            distance: 6000
          },
          achieved: false,
          briefDescription: 'Run at an easy pace for 6km'
        },
        {
          day: 'sunday',
          activity: {
            type: 'TimedEasyRun',
            duration: 3600
          },
          achieved: false,
          briefDescription: 'Run at an easy pace for 60 minutes'
        }
      ]
    }
  }

}