import { useState } from 'react';
import { 
  XStack, 
  Text, 
  Button, 
  Sheet,
  ScrollView
} from 'tamagui';
import { Plus, X } from '@tamagui/lucide-icons';
import { Container } from '@my/ui/src/components/Container';
import type { Medication } from '@my/app/features/settings/medications/types';
import { MedicationForm } from '@my/app/features/settings/medications/medication-form';
import { MedicationItem } from '@my/app/features/settings/medications/medication-item';
import { TouchableOpacity } from 'react-native';

export const MedicationManagementPage = () => {
  const [medications, setMedications] = useState<Medication[]>([
    { id: 1, name: 'Lithium', dosage: 300, unit: 'mg', frequency: 2, times: ['09:00', '21:00'] },
    { id: 2, name: 'Quetiapine', dosage: 100, unit: 'mg', frequency: 1, times: ['22:00'] },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentMedication, setCurrentMedication] = useState<Medication | null>(null);

  const addMedication = (newMedication: Medication) => {
    setMedications([...medications, { ...newMedication, id: Date.now() }]);
    setIsAddModalOpen(false);
  };

  const editMedication = (updatedMedication: Medication) => {
    setMedications(medications.map(m => m.id === updatedMedication.id ? updatedMedication : m));
    setIsEditModalOpen(false);
  };

  const deleteMedication = (id: number) => {
    setMedications(medications.filter(medication => medication.id !== id));
  };

  return (
    <Container>
      <ScrollView p="$4">
        {medications.map(medication => (
          <MedicationItem
            key={medication.id}
            {...medication}
            onEdit={() => {
              setCurrentMedication(medication);
              setIsEditModalOpen(true);
            }}
            onDelete={() => deleteMedication(medication.id)}
          />
        ))}
      </ScrollView>

      <XStack ai='center'>
        <Button
          bg="$color4"
          elevation={5}
          icon={Plus} onPress={() => setIsAddModalOpen(true)} chromeless circular style={{ margin: 16 }} />
        <Text onPress={() => setIsAddModalOpen(true)}>Add Medication</Text>
      </XStack>

      <Sheet
        modal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        snapPoints={[85]}
      >
        <Sheet.Frame br={40}>
          <Sheet.Handle />
          <ScrollView p="$4">
            <XStack f={1} jc="space-between" ai='center' mb="$4">
              <Text fos="$6" fow="bold">Add New Medication</Text>
              <TouchableOpacity onPress={() => setIsAddModalOpen(false)}>
                <X />
              </TouchableOpacity>
            </XStack>
            <MedicationForm
              onSubmit={addMedication}
              onCancel={() => setIsAddModalOpen(false)}
            />
          </ScrollView>
        </Sheet.Frame>
      </Sheet>

      <Sheet
        modal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        snapPoints={[85]}
      >
        <Sheet.Frame br={40}>
          <Sheet.Handle />
          <ScrollView px="$4" pt="$3">
            <XStack f={1} jc="space-between" ai='center' mb="$4">
              <Text fos="$6" fow="bold">Edit Medication</Text>
              <TouchableOpacity onPress={() => setIsEditModalOpen(false)}>
                <X />
              </TouchableOpacity>
            </XStack>
            <MedicationForm
              medication={currentMedication}
              onSubmit={editMedication}
              onCancel={() => setIsEditModalOpen(false)}
            />
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </Container>
  );
};
