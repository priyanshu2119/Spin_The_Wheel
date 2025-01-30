// Type definitions for the application
export interface UserSpin {
  id?: string;
  name: string;
  mobile: string;
  prize: string;
  timestamp: Date;
}

export interface WheelProbability {
  id?: string;
  optionName: string;
  probability: number;
  updatedAt: Date;
}