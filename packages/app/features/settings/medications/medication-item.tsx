import { 
  XStack, 
  Text, 
  Button, 
  Card,
} from 'tamagui';
import { Pencil, Trash2 } from '@tamagui/lucide-icons';
import type { Medication } from '@my/app/features/settings/medications/types';

export const MedicationItem = ({ name, dosage, unit, frequency, times, onEdit, onDelete }: Medication & { onEdit: () => void, onDelete: () => void }) => (
  <Card elevation={1} bg="$color1" bordered p="$3" rowGap='$1.5'>
    <XStack jc="space-between" ai="center" mb="$2">
      <Text fos="$6" fow="bold">{name}</Text>
      <XStack gap="$2">
        <Button icon={Pencil} onPress={onEdit} chromeless circular />
        <Button icon={Trash2} onPress={onDelete} chromeless circular />
      </XStack>
    </XStack>
    <Text col="$gray11">{dosage} {unit}</Text>
    <Text fos="$3" col="$gray11">{frequency} time(s) per day</Text>
    <Text fos="$3" col="$gray11">Times: {times.join(', ')}</Text>
  </Card>
);

