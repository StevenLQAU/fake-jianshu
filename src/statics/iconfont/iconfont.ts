import { injectGlobal } from 'styled-components';


// tslint:disable-next-line:no-unused-expression
injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1533887027370'); /* IE9*/
  src: url('./iconfont.eot?t=1533887027370#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1533887027370') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1533887027370#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
