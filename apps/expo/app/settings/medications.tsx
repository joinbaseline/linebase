import { MedicationManagementPage } from "@my/app/features/settings/medications/medication-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { AuthHeader } from '@my/ui/src/components/AuthHeader';

function MedicationManagementScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Manage Medications',
          header: () => <AuthHeader title="Manage Medications" />
        }}
      />
      <MedicationManagementPage />
    </SafeAreaView>
  )
}

export default MedicationManagementScreen;