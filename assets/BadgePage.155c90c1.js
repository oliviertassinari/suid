var q=Object.defineProperty;var l=(o,n)=>q(o,"name",{value:n,configurable:!0});import{m as e,a8 as U,q as P,r as K,a9 as G,f as J,K as h,s as T,v as c,d as s,A as R,n as V,aa as $,w as k,ab as Q,c as X,t as y,a as M,a6 as u,h as B,B as Y}from"./index.b7957beb.js";import{C as S}from"./ComponentInfo.e6ba9f4e.js";import{A as w}from"./Add.39b3634a.js";import{M as x}from"./Mail.6f569c05.js";import"./Link.314b9cd9.js";import"./copyText.458eb312.js";import"./PaperCode.37f24fed.js";function I(o,n,a){const i=e(()=>n().ownerState,()=>a);return e(n,()=>U(o())?{}:{ownerState:i})}l(I,"appendOwnerState");function W(o){return K("MuiBadge",o)}l(W,"getBadgeUtilityClass");const nn=P("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function _(o,n){const a=n.reduce((t,r)=>(t[r]=o[r],t),{}),i=G(a);for(const t of n)J(r=>(i[t]=r,o[t]),o[t]);return i}l(_,"usePreviousProps");function L(o){return h(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(L,"useBadgeInvisibleMemo");function on(o){const n=e({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),a=_(n,["anchorOrigin","badgeContent","max","variant"]),i=L(n),t=e(()=>i()?a:n),r=h(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent});return e(t,()=>({invisible:i(),displayValue:r()}))}l(on,"useBadge");const z=T()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:W,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),an=z.component(l(function({allProps:n,otherProps:a,props:i}){const t=on(n),r=e(n,t),m=h(()=>a.component||i.components.Root||"span"),d=I(m,()=>e(a,i.componentsProps.root||{}),r),p=h(()=>i.components.Badge||"span"),v=I(p,()=>i.componentsProps.badge||{},r),f=z.useClasses(r);return s($,e(d,a,{get component(){return m()},get className(){return R(f.root,d.className,a.className)},get children(){return[V(()=>i.children),s($,e(v,{get component(){return p()},get className(){return R(f.badge,v.className)},get children(){return t.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},nn,P("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),N=T()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:W,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),O=10,C=4,A=l(o=>!o||!U(o),"shouldSpreadAdditionalProps"),tn=k("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),rn=k("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:a}=o;return[n.badge,n[a.variant],n[`anchorOrigin${c(a.anchorOrigin.vertical)}${c(a.anchorOrigin.horizontal)}${c(a.overlap)}`],a.color!=="default"&&n[`color${c(a.color)}`],a.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:O*2,lineHeight:1,padding:"0 6px",height:O*2,borderRadius:O,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:C,height:C*2,minWidth:C*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),b=N.component(l(function({allProps:n,otherProps:a,props:i}){const[,t]=Q(a,["component"]),r=_(n,["anchorOrigin","color","overlap"]),m=L(n),d=e(()=>m()?r:n),p=e(n,()=>({invisible:m()})),v=N.useClasses(p),f=e({Root:tn,Badge:rn},()=>a.components),j=e(()=>a.componentsProps.root?.ownerState||{},{color:d.color,overlap:d.overlap}),F=e(()=>a.componentsProps.badge?.ownerState||{},{color:d.color,overlap:d.overlap}),E={root:e(()=>a.componentsProps.root||{},()=>A(a.components.Root)&&{as:a.component,ownerState:j}),badge:e(()=>a.componentsProps.badge||{},()=>A(a.components.Badge)&&{ownerState:F})};return s(an,e({get variant(){return i.variant}},t,{components:f,componentsProps:E,classes:v}))},"Badge")),en=y('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),sn=y('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0);var ln=X(()=>[en.cloneNode(!0),sn.cloneNode(!0)],"Remove");const D=y("<div></div>");function Z(){const[o,n]=M(1),[a,i]=M(!1),t=l(()=>{i(!a())},"handleBadgeVisibility");return s(Y,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const r=D.cloneNode(!0);return u(r,s(b,{color:"secondary",get badgeContent(){return o()},get children(){return s(x,{})}}),null),u(r,s(B,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return s(ln,{fontSize:"small"})}}),null),u(r,s(B,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return s(w,{fontSize:"small"})}}),null),r})(),(()=>{const r=D.cloneNode(!0);return u(r,s(b,{color:"secondary",variant:"dot",get invisible(){return a()},get children(){return s(x,{})}}),null),u(r,s(B,{onClick:t,get children(){return["invisible=",V(()=>a()?"true":"false")]}}),null),r})()]}})}l(Z,"BadgeVisibility");Z.code=`import AddIcon from "@suid/icons-material/Add";
import MailIcon from "@suid/icons-material/Mail";
import RemoveIcon from "@suid/icons-material/Remove";
import Badge from "@suid/material/Badge";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import { createSignal } from "solid-js";

export default function BadgeVisibility() {
  const [count, setCount] = createSignal(1);
  const [invisible, setInvisible] = createSignal(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible());
  };

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count()}>
          <MailIcon />
        </Badge>
        <Button
          aria-label="reduce"
          onClick={() => {
            setCount(Math.max(count() - 1, 0));
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Button
          aria-label="increase"
          onClick={() => {
            setCount(count() + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </div>
      <div>
        <Badge color="secondary" variant="dot" invisible={invisible()}>
          <MailIcon />
        </Badge>

        <Button onClick={handleBadgeVisibility}>
          invisible={invisible() ? "true" : "false"}
        </Button>
      </div>
    </Box>
  );
}
`;function H(){return s(b,{badgeContent:4,color:"primary",get children(){return s(x,{color:"action"})}})}l(H,"SimpleBadge");H.code=`import MailIcon from "@suid/icons-material/Mail";
import Badge from "@suid/material/Badge";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function hn(){return s(S,{get name(){return b.name},docsName:"badges",examples:[H,Z]})}l(hn,"BadgePage");export{hn as default};