import { Activity } from "./activity";

export interface WeeklyPlan {
  weekStarting: Date;
  days: DayPlan[];
}

export type DayPlan = {
  day: Day
  activity: Activity;
  achieved: boolean;
  briefDescription: string;
};

type Day
  = 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';