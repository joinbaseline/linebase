import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Input, 
  Popover,
  Separator,
  ScrollView
} from 'tamagui';
import { ChevronDown } from '@tamagui/lucide-icons';
import type { Medication } from '@my/app/features/settings/medications/types';
import { medicationInfo } from '@my/app/features/settings/medications/data';
import { Hint } from '@my/app/features/settings/components/hint';


export const MedicationForm = ({ medication = null, onSubmit }: { medication?: Medication | null, onSubmit: (data: Medication) => void}) => {
  const [formData, setFormData] = useState<Medication>(medication || { 
    id: Date.now(),
    name: '',
    dosage: 0,
    unit: 'mg',
    frequency: 1,
    times: ['08:00']
  });
  const [hint, setHint] = useState('');
  const [doseHint, setDoseHint] = useState('');
  const [isDoseWarning, setIsDoseWarning] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const matchedMedications = Object.keys(medicationInfo).filter(med => 
      med.toLowerCase().includes(formData.name.toLowerCase())
    );
    setSuggestions(matchedMedications);

    if (formData.name) {
      const exactMatch = medicationInfo[formData.name];
      if (exactMatch) {
        setHint(exactMatch.hint);
        setDoseHint(`Typical dose range: ${exactMatch.doseRange.min}-${exactMatch.doseRange.max} ${exactMatch.doseRange.unit}`);
        
        const dosageInMg = formData.unit === 'g' ? formData.dosage * 1000 : formData.dosage * (formData.frequency || 1);
        const minDoseInMg = exactMatch.doseRange.unit === 'g' ? exactMatch.doseRange.min * 1000 : exactMatch.doseRange.min * exactMatch.frequency;
        const maxDoseInMg = exactMatch.doseRange.unit === 'g' ? exactMatch.doseRange.max * 1000 : exactMatch.doseRange.max * exactMatch.frequency;

        setIsDoseWarning(dosageInMg < minDoseInMg || dosageInMg > maxDoseInMg);
        setSuggestions([]); // Remove suggestions after exact match
      } else {
        setHint('');
        setDoseHint('');
        setIsDoseWarning(false);
      }
    } else {
      setHint('');
      setDoseHint('');
      setIsDoseWarning(false);
    }
  }, [formData.name, formData.dosage, formData.unit, formData.frequency]);

  const handleChange = (name: keyof Medication, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeChange = (index: number, value: string) => {
    const newTimes = [...formData.times];
    newTimes[index] = value;
    setFormData(prev => ({ ...prev, times: newTimes }));
  };

  const updateFormDataWithFrequency = (newFrequency) => {
    if (newFrequency <= 0) {
      Alert.alert('Please enter a frequency greater than 0.');
      return;
    }
    if (newFrequency && !isNaN(newFrequency)) {
      if (newFrequency >= 20) {
        Alert.alert('Please enter a frequency less than 20.');
        return;
      }
      setFormData(prev => {
        const updatedTimes = newFrequency > prev.times.length
          ? prev.times.concat(Array(newFrequency - prev.times.length).fill('08:00'))
          : prev.times.slice(0, newFrequency);
        return {
          ...prev,
          frequency: newFrequency,
          times: newFrequency ? updatedTimes : prev.times
        };
      });
    } else {
      handleChange('frequency', '')
    }
  };

  useEffect(() => {
    if (medication) {
      setFormData(medication);
    }
  }, [medication]);

  return (
    <YStack gap="$4">
      <Text col="$color11" fow="300" fos="$5">Medication Name</Text>
      <Input
        f={1}
        placeholder="Medication Name"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      {suggestions.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <XStack gap="$2">
            {suggestions.map((suggestion, index) => (
              <Button key={index} onPress={() => handleChange('name', suggestion)}>{suggestion}</Button>
            ))}
          </XStack>
        </ScrollView>
      )}
      <Separator />

      <Text col="$color11" fow="300" fos="$5">Dosage</Text>
      <XStack gap="$2">
        <Input
          f={1}
          placeholder={"100"}
          keyboardType="numeric"
          value={formData.dosage ? formData.dosage.toString() : ''}
          onChangeText={(value) => {
            const parsedValue = parseInt(value);
            handleChange('dosage', isNaN(parsedValue) ? 0 : parsedValue);
          }}
        />
        <Popover>
          <Popover.Trigger asChild>
            <Button iconAfter={ChevronDown} w={100}>
              {formData.unit || "Unit"}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <YStack gap='$2'>
              {["mg", "g"].map((unit, index) => (
                <Button 
                  px={30} 
                  key={index} 
                  onPress={() => handleChange('unit', unit)}
                  bg={formData.unit === unit ? '$accentBackground' : '$background'}
                >
                  {unit}
                </Button>
              ))}
            </YStack>
          </Popover.Content>
        </Popover>
      </XStack>
      {/*<Text>{formData.dosage}{formData.unit} {formData.frequency <= 1 ? "once" : formData.frequency + " times"} a day</Text>*/}
      <Text>Total: {formData.dosage * (formData.frequency || 1)}{formData.unit}</Text>
      {doseHint && <Hint body={doseHint} isWarning={isDoseWarning} />}
      <Separator />
      <Text col="$color11" fow="300" fos="$5">Frequency</Text>
      <XStack ai="center" gap="$2">
        <Text>time(s) per day</Text>
        <Input
          px="$4"
          placeholder={"1"}
          keyboardType="numeric"
          value={isNaN(formData.frequency) ? '' : formData.frequency.toString()}
          onChangeText={(value) => {
            const newFrequency = parseInt(value);
            updateFormDataWithFrequency(newFrequency);
          }}
        />
      </XStack>
      <ScrollView horizontal showsHorizontalScrollIndicator>
      {formData.times.map((time, index) => (
        <XStack key={index} gap="$2" px="$2" ai="center" bg="$background" pos="relative">
          {formData.times.length > 1 ?
            <XStack
              pos="absolute" zi={1} t={-5} r={5}
              ai="center" jc="center" bg="$accentBackground"
              br={50} px={4} py={5}
            >
              <Text fos={8} fow="500" col="$color">{index + 1}</Text>
            </XStack>: null
          }
          <Input
            f={1}
            placeholder="HH:MM"
            value={time}
            onChangeText={(value) => handleTimeChange(index, value)}
            bg="$background"
            br="$2"
          />
        </XStack>
      ))}
      </ScrollView>
      {hint && <Hint body={hint} />}

      <XStack gap="$2" jc="flex-end">
        <Button onPress={() => onSubmit(formData)}>Save</Button>
      </XStack>

    </YStack>
  );
};
