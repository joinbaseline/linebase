import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { View } from "tamagui";

type WaveBackgroundProps = {
  fill?: string;
  flipX?: boolean;
  slideDown?: number;
  viewBoxHeight?: number;
  viewBoxWidth?: number;
}

export const WaveBackground = ({
  fill="#E57474",
  flipX=false,
  slideDown=180,
  viewBoxHeight=500,
  viewBoxWidth=350,
}: WaveBackgroundProps) => {
  return (
    <View style={styles.backgroundContainer}>
      <Svg width="100%" height="100%" viewBox={`0 ${-slideDown} ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="xMidYMin slice">
        <Path
          fill={fill}
          d="M167.12 77.1281C122.212 182.474 25.8197 208.81 -30.1409 208.81V594.414H423.14V23.6157C347.243 -2.44092 212.029 -28.2178 167.12 77.1281Z"
          transform={flipX ? "scale(-1, 1) translate(-350, 0)" : ""}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject, // Makes the SVG container fill the entire screen
    zIndex: -1, // Ensures the SVG is behind other components
  },
})