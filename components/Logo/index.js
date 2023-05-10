import { Image } from "react-native";

// import { SvgXml } from "react-native-svg";
const logo = require("../../assets/logo.svg");

const Logo = (props) => {
  return (
    // <SvgXml
    //   xml={`<svg width="57" height="44" viewBox="0 0 57 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2728 42.3842C26.9585 42.9102 17.971 46.1861 7.57223 41.5596C-3.68538 36.5526 0.227715 22.4942 2.83769 17.42C5.44766 12.3459 5.72023 11.249 5.72023 11.249C5.72023 11.249 2.69954 7.88734 2.08345 4.66375C1.46736 1.44017 1.94529 0 1.94529 0C1.94529 0 5.65302 4.3205 11.6235 4.93611C11.9147 4.96596 44.8885 4.93611 44.9221 4.93611C50.8925 4.3205 54.6003 0 54.6003 0C54.6003 0 55.0819 1.44017 54.4621 4.66375C53.846 7.88734 50.8253 11.249 50.8253 11.249C50.8253 11.249 51.1016 12.3459 53.7079 17.42C56.3141 22.4942 60.2272 36.5526 48.9733 41.5596C38.5783 46.1823 29.5871 42.9102 28.2728 42.3842Z" fill="#51087E"/>
    // <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9076 17.3753C22.4928 17.3753 26.2117 21.0914 26.2117 25.673C26.2117 30.2547 22.4928 33.9708 17.9076 33.9708C13.3224 33.9708 9.60345 30.2547 9.60345 25.673C9.60345 21.0914 13.3224 17.3753 17.9076 17.3753Z" fill="white"/>
    // <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6343 17.3753C43.2194 17.3753 46.9384 21.0914 46.9384 25.673C46.9384 30.2547 43.2194 33.9708 38.6343 33.9708C34.0491 33.9708 30.3301 30.2547 30.3301 25.673C30.3301 21.0914 34.0491 17.3753 38.6343 17.3753Z" fill="white"/>
    // <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9076 20.1325C20.9694 20.1325 23.4524 22.6136 23.4524 25.673C23.4524 28.7324 20.9694 31.2135 17.9076 31.2135C14.8458 31.2135 12.3628 28.7324 12.3628 25.673C12.3628 22.6136 14.8458 20.1325 17.9076 20.1325ZM17.9151 21.8002C19.0726 21.8002 20.0097 22.7367 20.0097 23.8933C20.0097 25.0499 19.0726 25.9864 17.9151 25.9864C16.7576 25.9864 15.8204 25.0499 15.8204 23.8933C15.8204 22.7367 16.7576 21.8002 17.9151 21.8002Z" fill="black"/>
    // <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6305 19.8228C41.6923 19.8228 44.1753 22.3039 44.1753 25.3634C44.1753 28.4228 41.6923 30.9039 38.6305 30.9039C35.5687 30.9039 33.0857 28.4228 33.0857 25.3634C33.0857 22.3039 35.5687 19.8228 38.6305 19.8228ZM38.638 21.4906C39.7955 21.4906 40.7327 22.4271 40.7327 23.5837C40.7327 24.7403 39.7955 25.6768 38.638 25.6768C37.4805 25.6768 36.5433 24.7403 36.5433 23.5837C36.5433 22.4271 37.4805 21.4906 38.638 21.4906Z" fill="black"/>
    // <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4445 40.3806C26.5664 38.1196 22.4405 31.7806 28.1757 31.5493C34.1947 31.3105 29.9157 38.0786 28.4445 40.3806Z" fill="#F29C12"/>
    // </svg>
    // `}
    //   {...props}
    // />
    <Image source={logo} />
  );
};

export default Logo;
