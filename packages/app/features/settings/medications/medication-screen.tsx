import { useState } from 'react';
import { 
  XStack, 
  YStack, 
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
      <YStack>
        <ScrollView p="$4" contentContainerStyle={{gap: "$4"}}>
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
            elevate
            bg="$color4"
            icon={Plus} onPress={() => setIsAddModalOpen(true)} chromeless circular style={{ margin: 16 }} />
          <Text onPress={() => setIsAddModalOpen(true)}>Add Medication</Text>
        </XStack>
      </YStack>
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
              <Text fos="$7" fow="300">Add New Medication</Text>
              <TouchableOpacity onPress={() => setIsAddModalOpen(false)}>
                <X />
              </TouchableOpacity>
            </XStack>
            <MedicationForm
              onSubmit={addMedication}
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
              <Text fos="$7" fow="300">Edit Medication</Text>
              <TouchableOpacity onPress={() => setIsEditModalOpen(false)}>
                <X />
              </TouchableOpacity>
            </XStack>
            <MedicationForm
              medication={currentMedication}
              onSubmit={editMedication}
            />
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </Container>
  );
};
