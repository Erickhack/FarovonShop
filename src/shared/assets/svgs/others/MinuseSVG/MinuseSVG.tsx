import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const MinuseSVG = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={12} cy={12} r={12} fill="#F1F1F1" />
    <Path
      stroke="#454545"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.151 12h9.698"
    />
  </Svg>
);

export default MinuseSVG;
