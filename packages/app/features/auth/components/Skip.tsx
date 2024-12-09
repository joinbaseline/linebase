
import { XStack, Button } from 'tamagui';
import { useRouter } from 'solito/router';

export const SkipButton = () => {
  const router = useRouter();
  return (
    <XStack pos="absolute" zi={-1} r={10} b={-10} jc='flex-end' ai="flex-end" mt="$2">
      <Button
        elevate
        themeInverse
        mah="$4"
        size="$2"
        maw="$8"
        pressStyle={{
          bg: '$color5',
        }}
        bg="$color1"
        onPress={() => {
          router.push('/sign-in');
        }}
        br="$10"
      >
        Skip
      </Button>
    </XStack>
  );
};
