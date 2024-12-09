import DateTimePicker from "react-native-modal-datetime-picker";
import { Clock } from "@tamagui/lucide-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Spinner, Text, XStack } from "tamagui";
import { getTimeComponents, TimeComponents } from "app/utils/dates/time";

export type TimeSelectorProps = {
  time?: string;
  disabled?: boolean;
  setTime: (time: string) => void;
  // onConfirm should save the time to the server
  // and maybe update the UI with a toast message
  onConfirm?: (timeComponents: TimeComponents) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({disabled, time, setTime, onConfirm}) => {
  const [show, setShow] = useState(false)
  const handleConfirm = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    const timeComponents = getTimeComponents(selectedDate);
    setTime(timeComponents.localTime);
    setShow(false);
    if (onConfirm) {
      onConfirm(timeComponents);
    }
  }
  return (
  <>
    <TouchableOpacity
      style={{
          backgroundColor: "hsl(246, 100%, 98%)",
          opacity: disabled ? 0.4 : 1,
          borderRadius: 10,
          padding: 8,
          minWidth: 40
      }}
      // disabled={disabled}
      onPress={() => setShow(true)}
      >
      <XStack columnGap={4} jc="center" ai="center">
        <Clock col="$red6" size={20} />
        <DateTimePicker
            isVisible={show}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={() => setShow(false)}
        />
        {time ? (
            time === "loading" ? <Spinner /> :
            <Text col="$red6" fow="600" fos="$5" maxFontSizeMultiplier={1}>{time}</Text>
        ) : null
        }
      </XStack>
    </TouchableOpacity>
  </>
)}
