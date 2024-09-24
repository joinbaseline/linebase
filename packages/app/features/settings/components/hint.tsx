import { XStack, Text } from 'tamagui';
import { Info } from '@tamagui/lucide-icons';

export const Hint = ({ body, isWarning = false }: { body: string, isWarning?: boolean }) => (
  <XStack ai='center' gap='$2'>
    <Info col={isWarning ? "$orange10" : "$blue10"} size="$1" /> 
    <Text col={isWarning ? "$orange10" : "$blue10"} fos="$2" verticalAlign='center'>
      {body}
    </Text>
  </XStack>
);
