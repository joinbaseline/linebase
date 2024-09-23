import { Todo } from "./Todos";

export const todos: Todo[] = [
  { 
    type: 'mood', 
    label: 'Log your mood', 
    link: '/(tabs)/log', 
  },
  { 
    type: 'takeMedication', 
    label: 'Take your medication', 
  },
  { 
    type: 'addCaregiver',
    label: 'Add a caregiver',
    link: '/settings/caregivers',
  },
];