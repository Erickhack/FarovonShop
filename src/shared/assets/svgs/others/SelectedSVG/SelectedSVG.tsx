import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const SelectedSVG = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={12} fill="#032E4D" />
    <Path
      fill="#fff"
      d="M10.578 15.168a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22Z"
    />
  </Svg>
)
export default SelectedSVG