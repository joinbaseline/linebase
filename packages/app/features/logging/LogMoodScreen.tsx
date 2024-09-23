import { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  Keyboard,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Text, XStack, YStack } from "tamagui";

// import { MoodDayTabs } from "./MoodDayTabs";
// import { HistoricMoodPanel } from "./HistoricMoodPanel";

import { MoodPicker } from "./MoodPicker";
import { TimeSelector } from "./TimeSelector";
import { getTimeComponents } from "app/utils/dates/time";
import { PortalSaveButton } from "./PortalSaveButton";
import { useAtom } from "jotai";
import { $moodAtom, $storedMoodsAtom } from "@my/app/utils/entries/atoms";
import moment from "moment";
import Container from "@my/ui/src/components/Container";
import { createEntry } from "@my/app/utils/entries/createEntry";
import { MoodEntry } from "@my/app/utils/entries/types";


const LogPortal: React.FC<{
  time: string;
  setTime: (time: string) => void;
  mood: number;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  saving: boolean;
  success: boolean;
  onSubmitPress: (event: GestureResponderEvent) => void;
}> = ({ time, setTime, mood, visible, setVisible, saving, success, onSubmitPress }) => {
  const handleClose = () => {
    // $state.logmood.entry.set(0);
    setVisible(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onDismiss={handleClose}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={handleClose}
        >
          <YStack
            fullscreen
            jc="center"
            ai="center"
            bg={"rgba(0,0,0,0.55)"}
          >
            <Pressable onPress={Keyboard.dismiss}>
              <YStack
                jc="center"
                ai="center"
                bg="white"
                br={10}
                w="100%"
                p={"$3"}
              >
                <YStack
                  miw="50%"
                  jc="center"
                  ai="center"
                >
                  <XStack jc="flex-end" miw="50%">
                    <TimeSelector
                      time={time} setTime={setTime}
                    />
                  </XStack>
                  <Text
                    maxFontSizeMultiplier={1.25}
                    // @ts-ignore
                    col={`$mood${mood}`}
                    fow="bold"
                    fos={64}
                    mb="$2"
                  >
                    {mood}
                  </Text>
                  {/* NB: Can't uncomment this until backend ready to accept comments
              <TextInput
                style={{
                  backgroundColor: theme.colors.background
                }}
                className="w-3/4 rounded"
                label="optional comment"
              ></TextInput>
              */}
                  {PortalSaveButton(saving, success, onSubmitPress)}
                </YStack>
              </YStack>
            </Pressable>
          </YStack>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export const MoodScreen = () => {
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState<string>(getTimeComponents(new Date()).localTime);
  const [mood, setMood] = useAtom($moodAtom)
  const [moods, setMoods] = useAtom($storedMoodsAtom)

  const _handleValueChange = (value: number) => {
    setMood(value)  
    if (value !== 0) {
      setModalVisible(true);
    }
  }

  const resetTime = () => {
    setTime(getTimeComponents(new Date()).localTime)
  }

  useEffect(() => {
    resetTime();
  }, [])

  const onSubmitPress = async (event: GestureResponderEvent) => {
    const currentValue = mood;
    if (!currentValue || currentValue <= 0) {
      event.preventDefault();
      return;
    }
    setSaving(true);

    // Log mood here (simulated)
    // globalLogMood(moodMutation, time);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const timestamp = moment(time, "HH:mm");
    const entry = {
      value: currentValue,
      timestamp,
      type: 'mood'
    }

    const entries = await createEntry(entry) as MoodEntry[];

    setMoods(entries);
    setMood(0);

    setSuccess(true);
    setSaving(false);
    setTimeout(() => {
      setModalVisible(false);
    }, 100);
    setTimeout(() => {
      setSuccess(false);
    }, 500);
    resetTime();
  };
  return (
    <Container jc="center">
      {/*<MoodDayTabs logscreen={true} />*/}
      <LogPortal
        time={time}
        setTime={setTime}
        visible={modalVisible}
        setVisible={setModalVisible}
        mood={mood}
        saving={saving}
        success={success}
        onSubmitPress={onSubmitPress}
      />
      <YStack ai="center">
        {/*<HistoricMoodPanel onLogScreen />*/}
        <MoodPicker onChange={_handleValueChange} />
      </YStack>
    </Container>
  );
};
