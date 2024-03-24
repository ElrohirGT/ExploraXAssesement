import Svg, { Path } from "react-native-svg";

export default function StoreSVG(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path
        fill="white"
        fill-rule="evenodd"
        d="M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61c.166.487.312.953.416 1.347c.11.42.148.675.148.779c0 .18-.032.355-.09.515c-.06.161-.144.3-.243.412c-.1.111-.21.192-.324.245a.809.809 0 0 1-.686 0a1.004 1.004 0 0 1-.324-.245c-.1-.112-.183-.25-.242-.412a1.473 1.473 0 0 1-.091-.515a1 1 0 1 0-2 0a1.4 1.4 0 0 1-.333.927a.896.896 0 0 1-.667.323a.896.896 0 0 1-.667-.323A1.401 1.401 0 0 1 13 9.736a1 1 0 1 0-2 0a1.4 1.4 0 0 1-.333.927a.896.896 0 0 1-.667.323a.896.896 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.504 1.504 0 0 1-.18.712a1.22 1.22 0 0 1-.146.209l-.007.007a1.01 1.01 0 0 1-.325.248a.82.82 0 0 1-.316.08a.973.973 0 0 1-.563-.256a1.224 1.224 0 0 1-.102-.103A1.518 1.518 0 0 1 5 9.724v-.006a2.543 2.543 0 0 1 .029-.207c.024-.132.06-.296.11-.49c.098-.385.237-.85.395-1.344ZM4 12.112a3.521 3.521 0 0 1-1-2.376c0-.349.098-.8.202-1.208c.112-.441.264-.95.428-1.46c.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243c.258.641.67 1.697 1.019 2.72a22.3 22.3 0 0 1 .457 1.487c.114.433.214.903.214 1.286c0 .412-.072.821-.214 1.207A3.288 3.288 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2zM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
    </Svg>
  );
}