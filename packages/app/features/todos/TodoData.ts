import { Todo } from "./Todos";

export const todos: Todo[] = [
  { 
    type: 'mood', 
    label: 'Log your mood', 
    link: '/(tabs)/log', 
  },
  { 
    type: 'recordActivities', 
    label: 'Record key activities', 
  },
  { 
    type: 'takeMedication', 
    label: 'Take your medication', 
  },
  { 
    type: 'custom', 
    label: 'Tidy your room', 
  },
];