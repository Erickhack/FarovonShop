import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const CancleSVG = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#454545"
      d="m13.59 12 4.454-4.453a1.126 1.126 0 0 0-1.59-1.594L12 10.406 7.547 5.953a1.127 1.127 0 0 0-1.594 1.594L10.406 12l-4.453 4.453a1.127 1.127 0 0 0 1.594 1.594L12 13.594l4.453 4.453a1.127 1.127 0 0 0 1.594-1.594L13.59 12Z"
    />
  </Svg>
);

export default CancleSVG;
