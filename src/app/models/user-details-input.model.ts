import { Duration } from 'moment';
import { SupportedDistance } from './supported-distance';

export interface UserProfile {
  focusedDistance: SupportedDistance;
  targetTime: Duration;
  currentBest?: Duration;
}