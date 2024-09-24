export type Medication = {
  id: number;
  name: string;
  dosage: number;
  unit: string;
  frequency: number;
  times: string[];
};

type DoseRange = {
  min: number;
  max: number;
  unit: string;
};

export type MedicationInfo = {
  frequency: number;
  times: string[];
  hint: string;
  doseRange: DoseRange;
};

