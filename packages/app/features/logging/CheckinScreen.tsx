import { useState, useEffect, useRef } from 'react';
import { Card, Stack, XStack, YStack, Text, Button, Input, Switch, ScrollView, Theme, Slider, styled } from 'tamagui';
import { Sun, Moon, Activity, Pill, Smile, PartyPopper } from '@tamagui/lucide-icons';
import { validToken } from '@my/ui';
import { TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { SCREEN_HEIGHT } from 'app/utils/Window.native';
import { ProfileTabIcon } from '@my/ui/src/components/ProfileIcon';

const emotions = ['Happy', 'Sad', 'Angry', 'Anxious', 'Excited', 'Calm'];

const emotionColors = {
  Happy: '#DFFFD6',
  Sad: '#B3E5FC',
  Anxious: '#90CAF9', // Deeper blue than Sad
  Angry: '#FF8A80',
  Excited: '#FFF59D',
  Calm: '#8EE6C9',
};

type WeeklyData = {
  timestamp: number;
  value?: number;
};

// Helper function to generate mock data for the past week
const generateMockData = (metric: string): WeeklyData[] => {
  return Array.from({ length: 7 }, (_, i) => {
    const timestamp = Date.now() - (6 - i) * 24 * 60 * 60 * 1000;
    let value;
    switch (metric) {
      case 'mood':
        value = Math.floor(Math.random() * 10) + 1;
        break;
      case 'sleep':
        value = Math.floor(Math.random() * 10) + 4;
        break;
      case 'exercise':
        value = Math.random() > 0.3 ? Math.floor(Math.random() * 60) + 30 : 0;
        break;
      case 'meds':
        value = Math.random() > 0.1 ? 1 : 0;
        break;
      default:
        value = 0;
    }
    return { timestamp, value };
  });
};

const MoodBubble = ({ value, selected, onPress, size = 30, opacity=1 }) => {
  return (
    <Stack
      w={size}
      h={size}
      br={size / 2}
      ai="center"
      jc="center"
      pressStyle={{ scale: 0.95 }}
      hoverStyle={{ scale: 1.1 }}
      bg={validToken(`$mood${value}`)}
      onPress={() => onPress(value)}
      style={{
        transform: selected ? [{ scale: 1.2 }] : [{ scale: 1 }],
        opacity: selected ? opacity : opacity * 0.8,
      }}
    >
      <Text fos={14} col="white" fow="bold">
        {value}
      </Text>
    </Stack>
  );
};

type CheckinData = {
  mood?: number;
  sleep?: number;
  emotions: string[];
  exercised: boolean;
  exerciseDuration: number;
  medsTaken: boolean;
};

const StyledCard = styled(Card, {
  bg: '$color1',
  o: 0.95,
  br: '$4',
  elevation: 1,
  w: '100%',
  py: '$6',
  ai: 'center',
  jc: 'center',
  gap: '$4',
  pos: 'relative',
});


export const CheckinScreen = () => {
  const [checkinData, setCheckinData] = useState<CheckinData>({
    mood: undefined,
    sleep: 8,
    emotions: [],
    exercised: false,
    exerciseDuration: 0,
    medsTaken: false,
  });
  const [weeklyData, setWeeklyData] = useState<{
    mood: WeeklyData[];
    sleep: WeeklyData[];
    exercise: WeeklyData[];
    meds: WeeklyData[];
  }>({
    mood: [],
    sleep: [],
    exercise: [],
    meds: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const confettiCannonRef = useRef(null);

  useEffect(() => {
    setWeeklyData({
      mood: generateMockData('mood'),
      sleep: generateMockData('sleep'),
      exercise: generateMockData('exercise'),
      meds: generateMockData('meds'),
    });
  }, []);

  const handleSubmit = () => {
    console.log('Submitting data:', checkinData);
    setWeeklyData(prevData => ({
      mood: [...prevData.mood.slice(1), { timestamp: Date.now(), value: checkinData?.mood }],
      sleep: [...prevData.sleep.slice(1), { timestamp: Date.now(), value: checkinData.sleep }],
      exercise: [...prevData.exercise.slice(1), { timestamp: Date.now(), value: checkinData.exercised ? checkinData.exerciseDuration : 0 }],
      meds: [...prevData.meds.slice(1), { timestamp: Date.now(), value: checkinData.medsTaken ? 1 : 0 }],
    }));
    setSubmitted(true);
  };

  const handleEmotionToggle = (emotion) => {
    setCheckinData(prev => ({
      ...prev,
      emotions: prev.emotions.includes(emotion)
        ? prev.emotions.filter(e => e !== emotion)
        : [...prev.emotions, emotion]
    }));
  };

  return (
    <ScrollView bg='$color1' f={1}>
        {!submitted ? (
          <YStack f={1}>
            <StyledCard>
              <Text fos={18} fow="bold">How's your mood?</Text>
              <XStack jc="space-evenly" w="90%" fw="wrap">
                {[1, 3, 5, 7, 9].map((value) => (
                  <MoodBubble
                    key={value}
                    value={value}
                    selected={checkinData.mood === value}
                    onPress={(value) => setCheckinData({ ...checkinData, mood: value })}
                  />
                ))}
              </XStack>
              <XStack jc="space-evenly" w="90%" fw="wrap">
                {[2, 4, 6, 8, 10].map((value) => (
                  <MoodBubble
                    key={value}
                    value={value}
                    selected={checkinData.mood === value}
                    onPress={(value) => setCheckinData({ ...checkinData, mood: value })}
                  />
                ))}
              </XStack>
              <XStack jc="space-between" w="90%">
                <Text fos={12} col="$gray11">Very Low</Text>
                <Text fos={12} col="$gray11">Very High</Text>
              </XStack>
            </StyledCard>
            <StyledCard>
              <Text fos={18} fow="bold">How did you sleep?</Text>
              <XStack ai="center" gap="$2">
                <Moon size={24} />
                <Theme name="blue">
                  <Slider
                    onValueChange={(value) => setCheckinData({ ...checkinData, sleep: value[0] })}
                    min={0}
                    defaultValue={[8]}
                    max={16}
                    step={1}
                    w={200}
                  >
                    <Slider.Track>
                      <Slider.TrackActive />
                    </Slider.Track>
                    <Slider.Thumb themeInverse size="$2" index={0} circular />
                  </Slider>
                </Theme>
                <Sun size={24} />
              </XStack>
              <Text fos={16}>{checkinData.sleep} hours</Text>
            </StyledCard>

            <StyledCard>
              <Text fos={18} fow="bold">What do you feel most?</Text>
              <XStack fw="wrap" jc="center" gap="$2">
                {emotions.map(emotion => (
                  <Button
                    key={emotion}
                    bg={checkinData.emotions.includes(emotion) ? emotionColors[emotion] : "$color1"}
                    variant={checkinData.emotions.includes(emotion) ? undefined : "outlined"}
                    onPress={() => handleEmotionToggle(emotion)}
                    size="$3"
                  >
                    {emotion}
                  </Button>
                ))}
              </XStack>
            </StyledCard>

            <StyledCard>
              <Text fos={18} fow="bold">Did you exercise?</Text>
              <XStack ai="center" gap="$2">
                <Activity size={24} />
                <Theme name="orange">
                  <Switch
                    checked={checkinData.exercised}
                    onCheckedChange={(checked) => setCheckinData({ ...checkinData, exercised: checked })}
                  >
                    <Switch.Thumb animation="bouncy" />
                  </Switch>
                </Theme>
              </XStack>
            </StyledCard>

            <StyledCard>
              <Text fos={18} fow="bold">Did you take your meds?</Text>
              <XStack ai="center" gap="$2">
                <Pill size={24} />
                <Theme name="green">
                  <Switch
                    checked={checkinData.medsTaken}
                    onCheckedChange={(checked) => setCheckinData({ ...checkinData, medsTaken: !!checked })}
                  >
                    <Switch.Thumb animation="bouncy" />
                  </Switch>
                </Theme>
              </XStack>
            </StyledCard>
            <StyledCard>
              <Button themeInverse onPress={handleSubmit}>Submit</Button>
            </StyledCard>
          </YStack>
        ) : (
          <YStack mih={SCREEN_HEIGHT} f={1} bg='$orange2' p="$4">
            <XStack jc="space-between" ai="center" w="100%">
              <Text fos={18} fow="bold">Today's summary</Text>
              <ProfileTabIcon size={40} color='$background' />
            </XStack>
            <YStack f={1} ai="center" jc="center" gap="$4">
              <YStack w="100%" ai="center">
                <XStack fw="wrap" jc="center" gap="$4">
                  <XStack ai='center' jc='space-between' gap='$4' w="25%">
                    <Smile size={14} />
                    <MoodBubble opacity={0.9} size={20} value={checkinData.mood} selected onPress={() => {}} />
                  </XStack>
                  <XStack ai='center' jc='space-between' gap='$4' w="25%">
                    <Activity size={14} />
                    <Text fos={14}>{checkinData.exercised ? 'Yes' : 'No'}</Text>
                  </XStack>
                  <XStack ai='center' jc='space-between' gap='$4' w="25%">
                    <Moon size={14} />
                    <Text fos={14}>{checkinData.sleep}</Text>
                  </XStack>
                  <XStack ai='center' jc='space-between' gap='$4' w="25%">
                    <Pill size={14} />
                    <Text fos={14}>{checkinData.medsTaken ? 'Yes' : 'No'}</Text>
                  </XStack>
                </XStack>
              </YStack>
              <YStack ai="center" jc="center" gap="$2">
                {checkinData.emotions.map((emotion, index) => (
                  <Text key={index} fos={14}>{emotion}</Text>
                ))}
              </YStack>
              <Text fos={14} ta="center" p="$2">This is a brief bio or summary text about the user's day or feelings.</Text>
            </YStack>
          </YStack>
        )}
    </ScrollView>
  );
};