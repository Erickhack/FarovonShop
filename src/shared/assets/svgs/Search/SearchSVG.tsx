import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const SearchSVG = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4D6373"
        d="m22.436 20.898-3.683-3.673a8.58 8.58 0 0 0 1.83-5.308 8.667 8.667 0 1 0-8.666 8.666 8.58 8.58 0 0 0 5.308-1.83l3.672 3.683a1.082 1.082 0 0 0 1.539 0 1.082 1.082 0 0 0 0-1.538Zm-17.02-8.981a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SearchSVG;
