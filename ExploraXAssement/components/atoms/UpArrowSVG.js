import Svg, { Path } from "react-native-svg";

export default function UpArrowSVG(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.50"
        d="m19 15-7-6-7 6"
      />
    </Svg>
  );
}
