import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppleSDGothicNeoT from './assets/font/AppleSDGothicNeoT.ttf';
import AppleSDGothicNeoUL from './assets/font/AppleSDGothicNeoUL.ttf';
import AppleSDGothicNeoL from './assets/font/AppleSDGothicNeoL.ttf';
import AppleSDGothicNeoR from './assets/font/AppleSDGothicNeoR.ttf';
import AppleSDGothicNeoM from './assets/font/AppleSDGothicNeoM.ttf';
import AppleSDGothicNeoSB from './assets/font/AppleSDGothicNeoSB.ttf';
import AppleSDGothicNeoB from './assets/font/AppleSDGothicNeoB.ttf';
import AppleSDGothicNeoEB from './assets/font/AppleSDGothicNeoEB.ttf';
import AppleSDGothicNeoH from './assets/font/AppleSDGothicNeoH.ttf';

const GlobalStyles = createGlobalStyle`
  ${reset}
 
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoT}) format('truetype'); font-weight: 100; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoUL}) format('truetype'); font-weight: 200; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoL}) format('truetype'); font-weight: 300; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoR}) format('truetype'); font-weight: 400; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoM}) format('truetype'); font-weight: 500; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoSB}) format('truetype'); font-weight: 600; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoB}) format('truetype'); font-weight: 700; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoEB}) format('truetype'); font-weight: 800; 
  }
  @font-face { 
    font-family: 'Apple SD Gothic Neo'; 
    src: url(${AppleSDGothicNeoH}) format('truetype'); font-weight: 900; 
  }
   /* @font-face { 
    font-family: 'Spoqa Han Sans'; 
    src: url('./assets/font/spoqahansans/SpoqaHanSansNeo-Thin.ttf') format('truetype'); 
    font-weight: 100; 
  }
  @font-face { 
    font-family: 'Spoqa Han Sans'; 
    src: url('./assets/font/spoqahansans/SpoqaHanSansNeo-Light.ttf') format('truetype'); 
    font-weight: 300; 
  }
  @font-face { 
    font-family: 'Spoqa Han Sans'; 
    src: url('./assets/font/spoqahansans/SpoqaHanSansNeo-Regular.ttf') format('truetype'); 
    font-weight: 400; 
  }
  @font-face { 
    font-family: 'Spoqa Han Sans'; 
    src: url('./assets/font/spoqahansans/SpoqaHanSansNeo-Medium.ttf') format('truetype'); 
    font-weight: 500; 
  }
  @font-face { 
    font-family: 'Spoqa Han Sans'; 
    src: url('./assets/font/spoqahansans/SpoqaHanSansNeo-Bold.ttf') format('truetype'); 
    font-weight: 700; 
  } */
`;

export default GlobalStyles;
