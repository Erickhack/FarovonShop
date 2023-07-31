import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CirclePluseSVG16 = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#031627"
      d="M8 15.167A7.173 7.173 0 0 1 .833 8 7.173 7.173 0 0 1 8 .833 7.173 7.173 0 0 1 15.167 8 7.173 7.173 0 0 1 8 15.167ZM8 1.833A6.174 6.174 0 0 0 1.833 8c0 3.4 2.767 6.167 6.167 6.167S14.167 11.4 14.167 8 11.4 1.833 8 1.833Z"
    />
    <Path
      fill="#031627"
      d="M10.667 8.5H5.333a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h5.334c.273 0 .5.227.5.5s-.227.5-.5.5Z"
    />
    <Path
      fill="#031627"
      d="M8 11.167a.504.504 0 0 1-.5-.5V5.334c0-.274.227-.5.5-.5s.5.226.5.5v5.333c0 .273-.227.5-.5.5Z"
    />
  </Svg>
);
export default CirclePluseSVG16;
