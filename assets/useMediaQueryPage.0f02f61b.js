var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{b as a}from"./index.056b5311.js";import{C as s}from"./ComponentInfo.52981497.js";import{r as i,t as o,d as p}from"./vendor.5273475d.js";import"./copyText.224c2700.js";import"./PaperCode.9a1fe640.js";const u=o("<span></span>");function r(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return p(s,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};