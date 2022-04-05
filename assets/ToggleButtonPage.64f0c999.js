var H=Object.defineProperty;var u=(e,t)=>H(e,"name",{value:t,configurable:!0});import{ak as F,q as T,r as B,s as y,v,w as $,ac as M,y as m,al as N,m as h,d as r,A as R,c as f,t as g,a as W}from"./index.b7957beb.js";import{C as G}from"./ComponentInfo.e6ba9f4e.js";import"./Link.314b9cd9.js";import"./copyText.458eb312.js";import"./PaperCode.37f24fed.js";const x=F({});function I(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.indexOf(e)>=0:e===t}u(I,"isValueSelected");function L(e){return B("MuiToggleButton",e)}u(L,"getToggleButtonUtilityClass");const C=T("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),z=y()({name:"MuiToggleButton",selfPropNames:["children","classes","color","disableFocusRipple","disabled","fullWidth","onChange","onClick","selected","size","value"],propDefaults:({set:e})=>e({color:"standard",disabled:!1,disableFocusRipple:!1,fullWidth:!1,size:"medium"}),autoCallUseClasses:!1,utilityClass:L,slotClasses:e=>({root:["root",!!e.selected&&"selected",e.disabled&&"disabled",e.fullWidth&&"fullWidth",`size${v(e.size)}`,e.color]})}),k=$(M,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`size${v(n.size)}`]]}})(({theme:e,ownerState:t})=>{const n=t.color==="standard"?e.palette.text.primary:e.palette[t.color].main;return{...e.typography.button,borderRadius:e.shape.borderRadius,padding:11,border:`1px solid ${e.palette.divider}`,color:e.palette.action.active,...t.fullWidth&&{width:"100%"},[`&.${C.disabled}`]:{color:e.palette.action.disabled,border:`1px solid ${e.palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:m(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{color:n,backgroundColor:m(n,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:m(n,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:m(n,e.palette.action.selectedOpacity)}}},...t.size==="small"&&{padding:7,fontSize:e.typography.pxToRem(13)},...t.size==="large"&&{padding:15,fontSize:e.typography.pxToRem(15)}}}),c=z.component(u(function({allProps:t,otherProps:n,props:l}){const o=N(x),a=h(()=>({color:o.color,disabled:o.disabled,size:o.size,selected:I(l.value,o.value)}),t,()=>({fullWidth:o.fullWidth,onChange:o.onChange})),d=z.useClasses(a);return r(k,h({get className(){return R(o.className,d.root,n.className)},get disabled(){return a.disabled},get focusRipple(){return!l.disableFocusRipple},onClick:i=>{typeof l.onClick=="function"&&(l.onClick(i,l.value),i.defaultPrevented)||typeof a.onChange=="function"&&a.onChange(i,l.value)},get onChange(){return a.onChange},get value(){return l.value},ownerState:a,get["aria-pressed"](){return a.selected}},n,{get component(){return n.component},get children(){return l.children}}))},"ToggleButton")),_=g('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),O=g('<svg><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path></svg>',4,!0);var V=f(()=>[_.cloneNode(!0),O.cloneNode(!0)],"FormatAlignCenter");const j=g('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),J=g('<svg><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path></svg>',4,!0);var P=f(()=>[j.cloneNode(!0),J.cloneNode(!0)],"FormatAlignJustify");const U=g('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),D=g('<svg><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path></svg>',4,!0);var E=f(()=>[U.cloneNode(!0),D.cloneNode(!0)],"FormatAlignLeft");const q=g('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),S=g('<svg><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path></svg>',4,!0);var K=f(()=>[q.cloneNode(!0),S.cloneNode(!0)],"FormatAlignRight");function Q(e){return B("MuiToggleButtonGroup",e)}u(Q,"getToggleButtonGroupUtilityClass");const s=T("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),X=y()({name:"MuiToggleButtonGroup",selfPropNames:["children","classes","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],propDefaults:({set:e})=>e({color:"standard",disabled:!1,exclusive:!1,fullWidth:!1,orientation:"horizontal",size:"medium"}),utilityClass:Q,slotClasses:e=>({root:["root",e.orientation==="vertical"&&"vertical",e.fullWidth&&"fullWidth"],grouped:["grouped",`grouped${v(e.orientation)}`,e.disabled&&"disabled"]})}),Y=$("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${s.grouped}`]:t.grouped},{[`& .${s.grouped}`]:t[`grouped${v(n.orientation)}`]},t.root,n.orientation==="vertical"&&t.vertical,n.fullWidth&&t.fullWidth]}})(({ownerState:e,theme:t})=>({display:"inline-flex",borderRadius:t.shape.borderRadius,...e.orientation==="vertical"&&{flexDirection:"column"},...e.fullWidth&&{width:"100%"},[`& .${s.grouped}`]:{...e.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderTop:0,marginTop:0}}}})),Z=X.component(u(function({allProps:t,classes:n,otherProps:l,props:o}){return r(x.Provider,{value:{get className(){return n.grouped},get value(){return o.value},get size(){return o.size},get fullWidth(){return o.fullWidth},get color(){return o.color},get disabled(){return o.disabled},onChange:(a,d)=>{if(o.onChange){if(o.exclusive){o.onChange(a,o.value===d?null:d);return}}else return;const i=o.value,b=i&&i.indexOf(d);let p;i&&b>=0?(p=i.slice(),p.splice(b,1)):p=i?i.concat(d):[d],o.onChange(a,p)}},get children(){return r(Y,h({role:"group",get className(){return R(n.root,l.className)},ownerState:t},l,{get children(){return o.children}}))}})},"ToggleButtonGroup"));function A(){const[e,t]=W("left");return r(Z,{get value(){return e()},exclusive:!0,onChange:(n,l)=>{t(l)},"aria-label":"text alignment",get children(){return[r(c,{value:"left","aria-label":"left aligned",get children(){return r(E,{})}}),r(c,{value:"center","aria-label":"centered",get children(){return r(V,{})}}),r(c,{value:"right","aria-label":"right aligned",get children(){return r(K,{})}}),r(c,{value:"justify","aria-label":"justified",disabled:!0,get children(){return r(P,{})}})]}})}u(A,"ExclusiveSelection");A.code=`import FormatAlignCenterIcon from "@suid/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@suid/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@suid/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@suid/icons-material/FormatAlignRight";
import ToggleButton from "@suid/material/ToggleButton";
import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import { createSignal } from "solid-js";

export default function ExclusiveSelection() {
  const [alignment, setAlignment] = createSignal("left");

  return (
    <ToggleButtonGroup
      value={alignment()}
      exclusive
      onChange={(event, newAlignment) => {
        setAlignment(newAlignment);
      }}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;function re(){return r(G,{get name(){return c.name},examples:[A]})}u(re,"ToggleButtonPage");export{re as default};