import { SCREEN_HEIGHT } from "app/utils/Window.native";
import { H4, XStack, YStack } from "tamagui"
import { TouchableOpacity } from "react-native";

export const MoodPicker = ({
  onChange,
}: {
  onChange: (value: number) => void;
}) => {
  const min = 1;
  const max = 10;

  // Pad such that we can fit 5 of these pills in each row and only take up 40% of screen height
  const k = 2.5
  const pillYPadding = (SCREEN_HEIGHT * 0.5) / (10 * k);

  return (
    <XStack
      jc="center"
      ai="center"
      fw={"wrap-reverse"}
      px="$3"
      columnGap={"$3"}
      rowGap={SCREEN_HEIGHT < 600 ? "$2": "$3"}
    >
      {/* Create a button in range max to min */}
      {[...Array(max + 1).keys()].slice(min).map((value) => {
        return (
          <TouchableOpacity
            key={value}
            onPress={() => {
              onChange(value);
            }}
            style={{
              flexBasis: "34%",
              flex: 1
            }}
          >
            <YStack
              br="$2"
              // @ts-ignore
              bg={`$mood${value}`}
              paddingVertical={pillYPadding}
            >
              <H4 maxFontSizeMultiplier={1} ta="center" col="white">{value}</H4>
            </YStack>
          </TouchableOpacity>
        );
      })}
    </XStack>
  );
};
