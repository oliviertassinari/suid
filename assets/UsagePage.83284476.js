var a=Object.defineProperty;var e=(t,o)=>a(t,"name",{value:o,configurable:!0});import{T as r,P as i}from"./index.fc750031.js";import{P as s}from"./PaperCode.f089d6bb.js";import{d as n}from"./vendor.fdf05c31.js";var l=`// @refresh
import Button from "@suid/material/Button";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function c(){return[n(r,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),n(r,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),n(s,{language:"tsx",get value(){return l.split(/\r?\n/).filter(t=>!t.trim().startsWith("// eslint-disable")).join(`
`)}}),n(i,{sx:{mt:2}})]}e(c,"UsagePage");export{c as default};
