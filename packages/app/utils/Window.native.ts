
import { Dimensions, PixelRatio } from "react-native";

const ScreenDimensions = Dimensions.get("screen");

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH, fontScale: FONT_SCALE } = ScreenDimensions;

export const PIXEL_RATIO = PixelRatio.get();

// You can also use PixelRatio to convert between pixels and device-independent pixels (dp)
export const WIDTH_DP = PixelRatio.getPixelSizeForLayoutSize(SCREEN_WIDTH);
export const HEIGHT_DP = PixelRatio.getPixelSizeForLayoutSize(SCREEN_HEIGHT);
