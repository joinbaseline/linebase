import { MomentInput } from 'moment';

export type GenericEntry = {
  type: string;
  label?: string;
  value: number | string | boolean;
  timestamp: MomentInput;
}

export type MoodEntry = GenericEntry & {
  value: number;
}

export type BooleanEntry = GenericEntry & {
  value: boolean;
}

export type NumberEntry = GenericEntry & {  
  value: number;
}

export type StringEntry = GenericEntry & {
  value: string;
}
