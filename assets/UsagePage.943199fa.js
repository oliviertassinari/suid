var a=Object.defineProperty;var r=(e,o)=>a(e,"name",{value:o,configurable:!0});import{L as i}from"./Link.d3ce06b2.js";import{T as n,v as s}from"./index.575706a7.js";import{P as m}from"./PaperCode.2d840087.js";import{a as t}from"./vendor.7d03e054.js";var l=`// @refresh
import Button from "@suid/material/Button";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function h(){return[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(n,{variant:"body1",sx:{mt:2},get children(){return["For a completed usage guide, please go to"," ",t(i,{href:"https://mui.com",target:"_blank",children:"MUI"}),"."]}}),t(n,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(m,{language:"tsx",get value(){return l.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}}),t(s,{sx:{mt:2}})]}r(h,"UsagePage");export{h as default};