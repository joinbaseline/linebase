import { useState, useEffect, useRef } from 'react';
import { Card, Stack, XStack, YStack, Text, Button, Input, Switch, ScrollView, Theme, Slider } from 'tamagui';
import { ChevronLeft, Sun, Moon, Activity, Pill, ArrowRight, Smile, PartyPopper } from '@tamagui/lucide-icons';
import { LineChart } from 'react-native-wagmi-charts';
import { validToken } from '@my/ui';
import { TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';


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

const ChartCard = ({ data, color, title, onPress }) => {
  return (
    <Stack
      bg="$gray2"
      br={16}
      p={16}
      w="48%"
      onPress={onPress}
    >
      <Text fos={14} fow="bold" col="$gray11" mb={8}>
        {title}
      </Text>
      <LineChart.Provider data={data}>
        <LineChart height={100} width={150}>
          <LineChart.Path color={color} />
          <LineChart.CursorCrosshair color={color} />
        </LineChart>
      </LineChart.Provider>
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

export const CardBasedHealthCheckin = () => {
  const [currentCard, setCurrentCard] = useState(0);
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

  const confettiCannonRef = useRef(null);

  useEffect(() => {
    setWeeklyData({
      mood: generateMockData('mood'),
      sleep: generateMockData('sleep'),
      exercise: generateMockData('exercise'),
      meds: generateMockData('meds'),
    });
  }, []);

  const handleNext = () => {
    if (currentCard < 5) {
      setCurrentCard(currentCard + 1);
    } else {
      console.log('Submitting data:', checkinData);
      setWeeklyData(prevData => ({
        mood: [...prevData.mood.slice(1), { timestamp: Date.now(), value: checkinData?.mood }],
        sleep: [...prevData.sleep.slice(1), { timestamp: Date.now(), value: checkinData.sleep }],
        exercise: [...prevData.exercise.slice(1), { timestamp: Date.now(), value: checkinData.exercised ? checkinData.exerciseDuration : 0 }],
        meds: [...prevData.meds.slice(1), { timestamp: Date.now(), value: checkinData.medsTaken ? 1 : 0 }],
      }));
      setCurrentCard(0);
    }
  };

  const handleBack = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleEmotionToggle = (emotion) => {
    setCheckinData(prev => ({
      ...prev,
      emotions: prev.emotions.includes(emotion)
        ? prev.emotions.filter(e => e !== emotion)
        : [...prev.emotions, emotion]
    }));
  };

  const renderCard = () => {
    const cardContent = () => {
      switch (currentCard) {
        case 0:
          // Mood
          return (
            <>
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
                <Text fos={14} col="$gray11">Very Low</Text>
                <Text fos={14} col="$gray11">Very High</Text>
              </XStack>
            </>
          );
        case 1:
          // Sleep
          return (
            <>
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
            </>
          );
        case 2:
          // Emotions
          return (
            <>
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
            </>
          );
        case 3:
          return (
            <>
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
            </>
          );
        case 4:
          return (
            <>
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
            </>
          );
        case 5:
          // Summary and Celebration
          return (
            <>
              <YStack f={1} ai="center" jc="center" gap="$4">

                <XStack ai="center" jc="center" gap="$4">
                  <XStack ai='center' jc='space-between' gap='$4'>
                    <Smile size={14} />
                    <MoodBubble opacity={0.9} size={20} value={checkinData.mood} selected onPress={() => {}} />
                  </XStack>
                  <XStack ai='center' jc='space-between' gap='$4'>
                    <Activity size={14} />
                    <Text fos={14}>{checkinData.exercised ? 'Yes' : 'No'}</Text>
                  </XStack>
                </XStack>
                <XStack ai="center" jc="center" gap="$4">
                  <XStack ai='center' jc='space-between' gap='$4'>
                    <Moon size={14} />
                    <Text fos={14}>{checkinData.sleep}</Text>
                  </XStack>
                  <XStack ai='center' jc='space-between' gap='$4'>
                    <Pill size={14} />
                    <Text fos={14}>{checkinData.medsTaken ? 'Yes' : 'No'}</Text>
                  </XStack>
                </XStack>
                <XStack ai="center" jc="center" gap="$2">
                  {checkinData.emotions.map((emotion, index) => (
                    <Text key={index} fos={14}>{emotion}</Text>
                  ))}
                </XStack>
              </YStack>
            </>
          );
        default:
          return null;
      }
    };
    const getTitle = () => {
      switch (currentCard) {
        case 0:
          return "How's your mood?";
        case 1:
          return "How did you sleep?";
        case 2:
          return "What do you feel most?";
        case 3:
          return "Did you exercise?";
        case 4:
          return "Did you take your meds?";
        case 5:
          return "";
        default:
          return "";
      }
    }    
    return (
      <Card h={220} bg="$color1" borderColor="$color7" bw={0.25} o={0.95} br="$4" elevation={1} w="99%" py="$4">
        {currentCard === 5 && (
          <>
            <ConfettiCannon 
              ref={confettiCannonRef}
              count={200} 
              origin={{x: 0, y: -100}} 
              fallSpeed={3000} 
              explosionSpeed={3000} 
              fadeOut={false} 
              autoStart={false} 
            />
            <TouchableOpacity hitSlop={10} style={{position: "absolute", left: 10, top: 10, zIndex: 10}} onPress={() => confettiCannonRef.current.start()}>
              <PartyPopper col="$color11" />
            </TouchableOpacity>
          </>
        )}
        <YStack f={1} ai="center" jc='space-between' gap="$2" pos="relative">
          <Text fos={24} fow="bold">{getTitle()}</Text>
          {cardContent()}

            <XStack w="80%" ai='center' jc='center' gap="$4">
              <TouchableOpacity onPress={handleBack}>
                {currentCard > 0 && <ChevronLeft />}
              </TouchableOpacity>

              {currentCard < 5 ?
                <Button
                  onPress={handleNext}
                  iconAfter={currentCard < 4 ? ArrowRight : undefined}
                >
                  {currentCard < 4 ? 'Next' : 'Submit'}
                </Button>: <></>
              }
            </XStack>
        </YStack>
      </Card>
    );
  };

  return (
    <ScrollView>
      <Stack>
        {renderCard()}

      </Stack>
    <YStack gap="$4">
      <XStack gap="$4" jc="space-between">
        {/*
        <ChartCard 
          data={weeklyData.mood} 
          color="#22c55e" 
          title="Mood (Last Week)" 
          onPress={() => setCurrentCard(0)}
        />
        <ChartCard 
          data={weeklyData.sleep} 
          color="#3b82f6" 
          title="Sleep (Last Week)" 
          onPress={() => setCurrentCard(1)}
        />
      </XStack>
      <XStack gap="$4" jc="space-between">
        <ChartCard 
          data={weeklyData.exercise} 
          color="#f59e0b" 
          title="Exercise (Last Week)" 
          onPress={() => setCurrentCard(3)}
        />
        <ChartCard 
          data={weeklyData.meds} 
          color="#ec4899" 
          title="Meds Taken (Last Week)" 
          onPress={() => setCurrentCard(4)}
        />
      */}
      </XStack>
    </YStack>
    </ScrollView>
  );
};