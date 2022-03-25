var i=Object.defineProperty;var t=(n,e)=>i(n,"name",{value:e,configurable:!0});import{u as c,d as l,N as s}from"./index.056b5311.js";import{C as d}from"./ComponentInfo.52981497.js";import{a as u,r as p,d as r,t as f}from"./vendor.5273475d.js";import"./copyText.224c2700.js";import"./PaperCode.9a1fe640.js";const k=f("<div></div>");function m(){const n=c(),[e,a]=u(!1);return(()=>{const o=k.cloneNode(!0);return p(o,r(l,{onClick:()=>a(!e()),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),o})()}t(m,"SimpleBackdrop");m.code=`import Backdrop from "@suid/material/Backdrop";
import Button from "@suid/material/Button";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export default function SimpleBackdrop() {
  const theme = useTheme();
  const [open, setOpen] = createSignal(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open())}>Show backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1 }}
        open={open()}
        onClick={() => setOpen(false)}
      ></Backdrop>
    </div>
  );
}
`;function I(){return r(d,{get name(){return s.name},examples:[m]})}t(I,"BackdropPage");export{I as default};