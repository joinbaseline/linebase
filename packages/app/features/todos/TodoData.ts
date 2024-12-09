import { Todo } from './Todos'

export const todos: Todo[] = [
  {
    type: 'mood',
    label: 'Log your mood',
    link: '/logging',
  },
  {
    type: 'addMedication',
    label: 'Add your medication',
    link: '/settings/medications',
  },
  {
    type: 'addCaregiver',
    label: 'Add a caregiver',
    link: '/settings/caregivers',
  },
  {
    type: 'takeMedication',
    label: 'Take your medication',
  },
]
