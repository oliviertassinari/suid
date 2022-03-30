var p=Object.defineProperty;var s=(e,n)=>p(e,"name",{value:n,configurable:!0});import{k as y,l as b,i as g,n as u,s as C,T as k,o as x,p as v,q as V}from"./index.575706a7.js";import{e as h,m as l,a as F,g as L}from"./vendor.7d03e054.js";function D(e){return b("MuiLink",e)}s(D,"getLinkUtilityClass");const T=y("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),c=g()({name:"MuiLink",autoCallUseClasses:!1,selfPropNames:["TypographyClasses","children","classes","color","underline","variant"],propDefaults:({set:e})=>e({color:"primary",component:"a",underline:"always",variant:"inherit"}),utilityClass:D,slotClasses:e=>({root:["root",`underline${u(e.underline)}`,e.component==="button"&&"button",e.focusVisible&&"focusVisible"]})}),R={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},M=s(e=>R[e]||e,"transformDeprecatedColors"),A=C(k,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${u(o.underline)}`],o.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>{const o=x(e,"palette",M(n.color))||n.color;return{...n.underline==="none"&&{textDecoration:"none"},...n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},...n.underline==="always"&&{textDecoration:"underline",textDecorationColor:o!=="inherit"?v(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},...n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${T.focusVisible}`]:{outline:"auto"}}}}),$=c.component(s(function({allProps:n,otherProps:o,props:t}){const i=V(),[d,a]=h(!1),m=l(n,()=>({focusVisible:d()})),f=c.useClasses(m);return F(A,l({get className(){return L(f.root,o.className)},get classes(){return t.TypographyClasses},get color(){return t.color},onBlur:r=>{i.onBlur(r),i.isFocusVisibleRef.current===!1&&a(!1),typeof o.onBlur=="function"&&o.onBlur(r)},onFocus:r=>{i.onFocus(r),i.isFocusVisibleRef.current===!0&&a(!0),typeof o.onFocus=="function"&&o.onFocus(r)},ownerState:n,get variant(){return t.variant}},o,{get component(){return o.component},get children(){return t.children}}))},"Link"));export{$ as L};