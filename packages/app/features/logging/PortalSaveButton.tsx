import { ActivityIndicator, GestureResponderEvent } from "react-native";
import { Button, Text, YStack } from "tamagui";


export const PortalSaveButton = (
  saving: boolean,
  success: boolean,
  onSubmitPress: (event: GestureResponderEvent) => void
) => {
  return (
    <YStack w="100%" h="auto">
      {success ? (
        <Button
          bg="$color6"
          maxFontSizeMultiplier={1.5}
          onPress={() => null}
        >
          <Text maxFontSizeMultiplier={1.5} fos={20} lh={24} col="white">
            Saved!
          </Text>
        </Button>
      ) : (
        <Button
          bg="$color9"
          maxFontSizeMultiplier={1.5}
          onPress={success ? () => null : onSubmitPress}
        >
          {saving ? (
            <ActivityIndicator />
          ) : (
            <Text
              ta="center"
              fos={20}
              lh={24}
              col="white"
            >
              Save
            </Text>
          )}
        </Button>
      )}
    </YStack>
  );
}
