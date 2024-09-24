import { useState } from 'react';
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Alert } from 'react-native';
import { Plus, Trash2, Pencil } from '@tamagui/lucide-icons';
import {
  YStack, XStack, Button, Input, Text, Card,
  Sheet, ScrollView
} from 'tamagui';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { AuthHeader } from '@my/ui/src/components/AuthHeader';
import { Container } from '@my/ui/src/components/Container';

type Caregiver = {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
};

const caregiversAtom = atomWithStorage<Caregiver[]>('caregivers', [
  { id: 1, name: 'Jane Doe', role: 'Primary Caregiver', email: 'jane@example.com', phone: '(123) 456-7890' },
  { id: 2, name: 'John Smith', role: 'Therapist', email: 'john@example.com', phone: '(098) 765-4321' },
]);

const CaregiverItem = ({ name, role, email, phone, onEdit, onDelete }) => (
  <Card elevate bordered mb="$4" p="$4">
    <XStack jc="space-between" ai="center" mb="$2">
      <Text fos="$6" fow="bold">{name}</Text>
      <XStack gap="$2">
        <Button icon={Pencil} onPress={onEdit} chromeless circular />
        <Button icon={Trash2} onPress={onDelete} chromeless circular />
      </XStack>
    </XStack>
    <Text col="$gray11" mb="$1">{role}</Text>
    <Text fos="$3" col="$gray10" mb="$1">{email}</Text>
    <Text fos="$3" col="$gray10">{phone}</Text>
  </Card>
);

const CaregiverForm = ({ caregiver, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Caregiver>(caregiver || { id: 0, name: '', role: '', email: '', phone: '' });

  const handleChange = (name: keyof Caregiver, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <YStack gap="$4">
      <Input
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
        placeholder="Name"
      />
      <Input
        value={formData.role}
        onChangeText={(value) => handleChange('role', value)}
        placeholder="Role"
      />
      <Input
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        value={formData.phone}
        onChangeText={(value) => handleChange('phone', value)}
        placeholder="Phone"
        keyboardType="phone-pad"
      />
      <XStack jc="flex-end" gap="$2">
        <Button variant="outlined" onPress={onCancel}>Cancel</Button>
        <Button onPress={handleSubmit}>Save</Button>
      </XStack>
    </YStack>
  );
};

const CaregiverManagementPage = () => {
  const [caregivers, setCaregivers] = useAtom(caregiversAtom);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCaregiver, setCurrentCaregiver] = useState<Caregiver | null>(null);

  const addCaregiver = (newCaregiver: Omit<Caregiver, 'id'>) => {
    setCaregivers([...caregivers, { ...newCaregiver, id: Date.now() }]);
    setIsAddModalOpen(false);
  };

  const editCaregiver = (updatedCaregiver: Caregiver) => {
    setCaregivers(caregivers.map(c => c.id === updatedCaregiver.id ? updatedCaregiver : c));
    setIsEditModalOpen(false);
  };

  const deleteCaregiver = (caregiver: Caregiver) => {
    Alert.alert(
      "Confirm Delete",
      `Are you sure you want to delete ${caregiver.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            setCaregivers(caregivers.filter(c => c.id !== caregiver.id));
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <Container jc="flex-start">
      <YStack pt="$4">
        <FlatList
          data={caregivers}
          renderItem={({ item }) => (
            <CaregiverItem
              {...item}
              onEdit={() => {
                setCurrentCaregiver(item);
                setIsEditModalOpen(true);
              }}
              onDelete={() => deleteCaregiver(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ padding: 16 }}
          ListEmptyComponent={() => (
            <Card elevate bordered mb="$4" p="$4">
              <XStack jc="space-between" ai="center" mb="$2">
                <Text fos="$6" fow="bold">No Caregivers</Text>
                <Button icon={Plus} onPress={() => setIsAddModalOpen(true)} chromeless circular />
              </XStack>
              <Text col="$gray11" mb="$1">Add a new caregiver to get started.</Text>
            </Card>
          )}
        />

        {caregivers.length > 0 && (
          <XStack ai='center'>
            <Button
              bg="$color4"
              elevation={5}
              icon={Plus} onPress={() => setIsAddModalOpen(true)} chromeless circular style={{ margin: 16 }} />
            <Text onPress={() => setIsAddModalOpen(true)}>Add Caregiver</Text>
          </XStack>
        )}
      </YStack>

      <Sheet
        modal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        snapPoints={[70]}
      >
        <Sheet.Frame>
          <Sheet.Handle />
          <ScrollView>
            <YStack p="$4" gap="$4">
              <Text fos="$6" fow="bold">Add New Caregiver</Text>
              <CaregiverForm
                caregiver={{ id: 0, name: '', role: '', email: '', phone: '' }}
                onSubmit={addCaregiver}
                onCancel={() => setIsAddModalOpen(false)}
              />
            </YStack>
          </ScrollView>
        </Sheet.Frame>
      </Sheet>

      <Sheet
        modal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        snapPoints={[70]}
      >
        <Sheet.Frame>
          <Sheet.Handle />
          <ScrollView>
            <YStack p="$4" gap="$4">
              <Text fos="$6" fow="bold">Edit Caregiver</Text>
              <CaregiverForm
                caregiver={currentCaregiver}
                onSubmit={editCaregiver}
                onCancel={() => setIsEditModalOpen(false)}
              />
            </YStack>
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </Container>
  );
};
function CaregiverScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Manage Caregivers',
          header: () => <AuthHeader title="Manage Caregivers" />
        }}
      />
      <CaregiverManagementPage />
    </SafeAreaView>
  )
}

export default CaregiverScreen;