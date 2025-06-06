import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Stars = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#FAFAFA"
      d="M10.5 1.875c.345 0 .625.28.625.625 0 1.672.842 3.396 2.16 4.714 1.32 1.319 3.043 2.161 4.715 2.161a.625.625 0 1 1 0 1.25c-1.672 0-3.396.842-4.714 2.16-1.319 1.32-2.161 3.043-2.161 4.715a.625.625 0 1 1-1.25 0c0-1.672-.842-3.396-2.16-4.714-1.32-1.319-3.043-2.161-4.715-2.161a.625.625 0 1 1 0-1.25c1.672 0 3.396-.842 4.714-2.16C9.033 5.894 9.875 4.171 9.875 2.5c0-.345.28-.625.625-.625Z"
      opacity={0.4}
    />
    <Path
      fill="#FAFAFA"
      d="M16.542 1.042a.38.38 0 0 1 .37.296l.196.867a1.57 1.57 0 0 0 1.187 1.187l.866.195a.38.38 0 0 1 0 .742l-.866.196a1.57 1.57 0 0 0-1.187 1.187l-.195.866a.38.38 0 0 1-.742 0l-.196-.866a1.57 1.57 0 0 0-1.187-1.187l-.866-.196a.38.38 0 0 1 0-.742l.866-.195a1.57 1.57 0 0 0 1.187-1.187l.196-.867a.38.38 0 0 1 .37-.296ZM4.458 13.125a.38.38 0 0 1 .371.297l.196.866a1.57 1.57 0 0 0 1.187 1.187l.866.196a.38.38 0 0 1 0 .742l-.866.195a1.57 1.57 0 0 0-1.187 1.187l-.196.866a.38.38 0 0 1-.742 0l-.195-.866a1.57 1.57 0 0 0-1.187-1.187l-.866-.195a.38.38 0 0 1 0-.742l.866-.196a1.57 1.57 0 0 0 1.187-1.187l.195-.866a.38.38 0 0 1 .371-.297Z"
    />
  </Svg>
);
export default Stars;
