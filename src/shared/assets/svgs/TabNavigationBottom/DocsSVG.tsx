import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const DocsSVG = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill={props.fill}
      d="M16.5 22.75h-13c-.96 0-1.75-.79-1.75-1.75V8c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v8c0 4.42-2.33 6.75-6.75 6.75Zm-8-20C4.92 2.75 3.25 4.42 3.25 8v13c0 .14.11.25.25.25h13c3.58 0 5.25-1.67 5.25-5.25V8c0-3.58-1.67-5.25-5.25-5.25h-8Z"
    />
    <Path
      fill={props.fill}
      d="M17.5 10.25h-10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 15.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
);

export default DocsSVG;
