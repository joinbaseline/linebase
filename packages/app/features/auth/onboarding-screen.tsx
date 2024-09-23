import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import {
  XStack,
  YStack,
  Button,
  H2,
  View,
  Paragraph,
  Text,
  Theme,
} from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { useRouter } from 'solito/router'
import { useThemeSetting } from 'app/provider/theme'
import { Dispatch, SetStateAction, useState } from 'react'
import { Alert } from 'react-native'
import Container from '@my/ui/src/components/Container'

const OptionButton = ({ index, label, selected, onPress }: {
  index: number, 
  label: string,
  selected: number[],
  onPress: () => void
}) => {
  return (
  <YStack f={1} ai="center" p="$2" w="100%" style={{ aspectRatio: "1.6", flexBasis: '40%' }}>
    <Button
      f={1}
      bg={selected.includes(index) ? "$color12" : "$color3"}
      onPress={onPress}
      br="$10"
      w="80%"
      hoverStyle={{ bg: selected.includes(index) ? '$color10' : '$color5' }}
      pressStyle={{ bg: selected.includes(index) ? '$color10' : '$color5' }}
    >
      <Text fow="300" col={selected.includes(index) ? "$color2" : "$color12"} ta="center">{label}</Text>
    </Button>
  </YStack>
)};


const OptionsList = ({options, selected, setSelected}: {
  options: string[],
  selected: number[],
  setSelected: Dispatch<SetStateAction<number[]>>
}) => {
  const handlePress = (index) => {
    setSelected((prevSelected) => 
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
    console.log(`Box ${index + 1} selected`);
  };
  return (
    <XStack f={1} fw="wrap">
      {options.map((option, index) => (
        <OptionButton key={index} index={index} label={option} selected={selected} onPress={() => handlePress(index)} />
      ))}
    </XStack>
  ) 
}

const Onboarding = ({ handleContinue=() => { return } }: {handleContinue?: () => void}) => {
  const safeAreaInsets = useSafeAreaInsets()
  const [selected, setSelected] = useState<number[]>([])

  const options = [
    "I think I’m bipolar but I haven’t been diagnosed",
    "I was diagnosed with bipolar",
    "I know someone with bipolar",
    "I’m related to someone with bipolar",
    "I’m a professional seeking more information",
    "I just want to learn / chat"
  ]

  const handleNext = () => {
    if (selected.length === 0) {
      Alert.alert("Select at least one option.")
      return
    }
    const selectedLabels = selected.map(index => options[index]);
    console.log('Selected options:', selectedLabels);
    handleContinue();
  }

  return (
    <Container pt={safeAreaInsets.top}>
      <WaveBackground />
      {/* Two 50/50 evenly spaces YStacks, second one has content at the end */}
      <YStack f={1} jc="space-evenly">
        <YStack f={1/3} px="$5" jc="center" ai="center">
          <YStack ai="center" jc="center" gap="$2">
            <H2 als="center" ta="center" size="$9" ff="$body" col="$color12">
              What brings you to Baseline?
            </H2>
            <Paragraph fow="200" >Pick all that apply</Paragraph>
          </YStack>
        </YStack>
        <OptionsList options={options} selected={selected} setSelected={setSelected} />
        <YStack f={1/3} jc="flex-end">
          <XStack jc="space-between" mb="$4" ai="center" p="$5" gap="$5">
            <Button
              elevate
              pressStyle={{
                bg: '$color5',
                boc: '$color5',
              }}
              themeInverse
              bg="$color1"
              size="$5"
              f={1}
              br="$10"
              onPress={() => handleNext()}
              iconAfter={ChevronRight}
            >
              <Button.Text ml="$4" col="$color" fow={"200"}>Next</Button.Text>
            </Button>
          </XStack>
        </YStack>
      </YStack>
    </Container>
  )
}

export const OnboardingScreen = () => {
  const router = useRouter()
  return <Onboarding handleContinue={() => router.push('/chat-onboarding')} />
}
