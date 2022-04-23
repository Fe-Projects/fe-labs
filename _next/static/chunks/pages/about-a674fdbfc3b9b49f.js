(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3321:function(e,t,o){"use strict";o.d(t,{Z:function(){return z}});var n=o(3366),r=o(7462),a=o(7294),i=o(6010),l=o(7925),c=o(7192),s=o(1796),d=o(1496),u=o(3616),p=o(7739),h=o(8216),m=o(8979);function f(e){return(0,m.Z)("MuiButton",e)}var b=(0,o(6087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var v=a.createContext({}),g=o(5893);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,h.Z)(o.color)}`],t[`size${(0,h.Z)(o.size)}`],t[`${o.variant}Size${(0,h.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${b.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${b.disabled}`]:(0,r.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,s.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},x(e)))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},x(e))));var z=a.forwardRef((function(e,t){const o=a.useContext(v),s=(0,l.Z)(o,e),d=(0,u.Z)({props:s,name:"MuiButton"}),{children:p,color:m="primary",component:b="button",className:x,disabled:z=!1,disableElevation:k=!1,disableFocusRipple:C=!1,endIcon:O,focusVisibleClassName:R,fullWidth:N=!1,size:I="medium",startIcon:$,type:P,variant:j="text"}=d,M=(0,n.Z)(d,y),E=(0,r.Z)({},d,{color:m,component:b,disabled:z,disableElevation:k,disableFocusRipple:C,fullWidth:N,size:I,type:P,variant:j}),B=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:a,variant:i,classes:l}=e,s={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(a)}`,`${i}Size${(0,h.Z)(a)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(a)}`]},d=(0,c.Z)(s,f,l);return(0,r.Z)({},l,d)})(E),F=$&&(0,g.jsx)(S,{className:B.startIcon,ownerState:E,children:$}),L=O&&(0,g.jsx)(w,{className:B.endIcon,ownerState:E,children:O});return(0,g.jsxs)(Z,(0,r.Z)({ownerState:E,className:(0,i.Z)(x,o.className),component:b,disabled:z,focusRipple:!C,focusVisibleClassName:(0,i.Z)(B.focusVisible,R),ref:t,type:P},M,{classes:B,children:[F,p,L]}))}))},4613:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return o(1159)}])},1159:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return T}});var n=o(5944),r=o(7294),a=o(7948),i=o(5861),l=o(7357),c=o(3321),s=o(6010),d=o(1163),u=o(1664),p=o(3366),h=o(7462),m=o(7192),f=o(4844),b=o(1796),v=o(8216),g=o(1496),y=o(3616),x=o(8791),Z=o(1705),S=o(8979);function w(e){return(0,S.Z)("MuiLink",e)}var z=(0,o(6087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=o(5893);const C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=(0,g.ZP)(i.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`underline${(0,v.Z)(o.underline)}`],"button"===o.component&&t.button]}})((({theme:e,ownerState:t})=>{const o=(0,f.D)(e,`palette.${(e=>O[e]||e)(t.color)}`)||t.color;return(0,h.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==o?(0,b.Fq)(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${z.focusVisible}`]:{outline:"auto"}})}));var N=r.forwardRef((function(e,t){const o=(0,y.Z)({props:e,name:"MuiLink"}),{className:n,color:a="primary",component:i="a",onBlur:l,onFocus:c,TypographyClasses:d,underline:u="always",variant:f="inherit"}=o,b=(0,p.Z)(o,C),{isFocusVisibleRef:g,onBlur:S,onFocus:z,ref:O}=(0,x.Z)(),[N,I]=r.useState(!1),$=(0,Z.Z)(t,O),P=(0,h.Z)({},o,{color:a,component:i,focusVisible:N,underline:u,variant:f}),j=(e=>{const{classes:t,component:o,focusVisible:n,underline:r}=e,a={root:["root",`underline${(0,v.Z)(r)}`,"button"===o&&"button",n&&"focusVisible"]};return(0,m.Z)(a,w,t)})(P);return(0,k.jsx)(R,(0,h.Z)({className:(0,s.Z)(j.root,n),classes:d,color:a,component:i,onBlur:e=>{S(e),!1===g.current&&I(!1),l&&l(e)},onFocus:e=>{z(e),!0===g.current&&I(!0),c&&c(e)},ref:$,ownerState:P,variant:f},b))}));function I(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function $(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){I(e,t,o[t])}))}return e}function P(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var j=(0,g.ZP)("a")({}),M=r.forwardRef((function(e,t){var o=e.to,r=e.linkAs,a=(e.href,e.replace),i=e.scroll,l=e.shallow,c=e.prefetch,s=e.locale,d=P(e,["to","linkAs","href","replace","scroll","shallow","prefetch","locale"]);return(0,n.tZ)(u.default,{href:o,prefetch:c,as:r,replace:a,scroll:i,shallow:l,passHref:!0,locale:s,children:(0,n.tZ)(j,$({ref:t},d))})})),E=r.forwardRef((function(e,t){var o=e.activeClassName,r=void 0===o?"active":o,a=e.as,i=e.className,l=e.href,c=e.noLinkStyle,u=(e.role,P(e,["activeClassName","as","className","href","noLinkStyle","role"])),p=(0,d.useRouter)(),h="string"===typeof l?l:l.pathname,m=(0,s.Z)(i,I({},r,p.pathname===h&&r));return"string"===typeof l&&(0===l.indexOf("http")||0===l.indexOf("mailto:"))?c?(0,n.tZ)(j,$({className:m,href:l,ref:t},u)):(0,n.tZ)(N,$({className:m,href:l,ref:t},u)):c?(0,n.tZ)(M,$({className:m,ref:t,to:l},u)):(0,n.tZ)(N,$({component:M,linkAs:a,className:m,ref:t,to:l},u))})),B=o(3219);function F(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function L(e){return(0,n.tZ)(B.Z,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){F(e,t,o[t])}))}return e}({},e,{children:(0,n.tZ)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}))}function V(){return(0,n.BX)(i.Z,{sx:{mt:6,mb:3},color:"text.secondary",children:[(0,n.tZ)(L,{sx:{mr:1,verticalAlign:"middle"}}),"Pro tip: See more ",(0,n.tZ)(N,{href:"https://mui.com/getting-started/templates/",children:"templates"})," on the MUI documentation."]})}function W(){return(0,n.BX)(i.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,n.tZ)(N,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}function T(){return(0,n.tZ)(a.Z,{maxWidth:"lg",children:(0,n.BX)(l.Z,{sx:{my:4,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,n.tZ)(i.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI v5 + Next.js with TypeScript example"}),(0,n.tZ)(l.Z,{maxWidth:"sm",children:(0,n.tZ)(c.Z,{variant:"contained",component:E,noLinkStyle:!0,href:"/",children:"Go to the home page"})}),(0,n.tZ)(V,{}),(0,n.tZ)(W,{})]})})}},1163:function(e,t,o){e.exports=o(880)}},function(e){e.O(0,[756,774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);