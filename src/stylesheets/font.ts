import { createGlobalStyle } from 'styled-components';

import OswaldBold from './../assets/fonts/Oswald/Oswald-Bold.ttf';
import OpenSansRegular from './../assets/fonts/Open_Sans/OpenSans-Regular.ttf';
import OpenSansItalic from './../assets/fonts/Open_Sans/OpenSans-Italic.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Oswald';
        src: url(${OswaldBold});
        font-style: normal;
        font-weight: 700;
    }
    
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansRegular});
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansItalic});
        font-style: italic;
        font-weight: 400;
    }
`;

export default FontStyles;