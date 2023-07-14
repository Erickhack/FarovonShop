import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const CirculeAddSVG = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Circle cx={14} cy={14} r={14} fill="#F1F1F1" />
    <Path
      stroke="#454545"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 8.343v11.314M8.343 14h11.314"
    />
  </Svg>
);

export default CirculeAddSVG;
