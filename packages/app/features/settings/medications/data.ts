import { MedicationInfo } from "./types";

export const medicationInfo: Record<string, MedicationInfo> = {
  'Lithium': { 
    frequency: 2,
    times: ['09:00', '21:00'],
    hint: 'Typically taken twice daily, morning and evening.',
    doseRange: { min: 300, max: 1800, unit: 'mg' }
  },
  'Quetiapine': { 
    frequency: 1,
    times: ['22:00'],
    hint: 'Usually taken once daily, often at bedtime.',
    doseRange: { min: 25, max: 800, unit: 'mg' }
  },
  'Sertraline': { 
    frequency: 1,
    times: ['08:00'],
    hint: 'Commonly taken once daily in the morning.',
    doseRange: { min: 25, max: 200, unit: 'mg' }
  },
  'Metformin': { 
    frequency: 2,
    times: ['08:00', '18:00'],
    hint: 'Often taken twice daily, with morning and evening meals.',
    doseRange: { min: 500, max: 2550, unit: 'mg' }
  },
  'Amlodipine': { 
    frequency: 1,
    times: ['08:00'],
    hint: 'Typically taken once daily, usually in the morning.',
    doseRange: { min: 2.5, max: 10, unit: 'mg' }
  },
};
