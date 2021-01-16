export interface WeeklyPlan {
  weekStarting: Date;
  days: DayPlan[];
}

export type DayPlan = {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  activity: Run | Rest;
  achieved: boolean;
  briefDescription: string;
};

type Run = TimedEasyRun | DistancedEasyRun | TimedTempoRun | DistancedTempoRun | IntervalRun;
type Rest = null;

type TimedEasyRun = {
  type: 'TimedEasyRun';
  duration: Seconds;
}

type DistancedEasyRun = {
  type: 'DistancedEasyRun';
  distance: Metres;
}

type TimedTempoRun = {
  type: 'TimedTempoRun';
  duration: Seconds;
  pace: MinutePerKm;
}

type DistancedTempoRun = {
  type: 'DistancedTempoRun';
  distance: Metres;
  pace: MinutePerKm;
}

type IntervalRun = {
  type: 'IntervalRun';
  reps: number;
  distance: Metres;
  pace: MinutePerKm;
  restTime: Seconds;
}

type Seconds = number;
type Metres = number;
type MinutePerKm = number;