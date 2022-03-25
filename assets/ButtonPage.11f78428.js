var i=Object.defineProperty;var o=(e,r)=>i(e,"name",{value:r,configurable:!0});import{d as n}from"./index.056b5311.js";import{C as u}from"./ComponentInfo.52981497.js";import{S as c}from"./copyText.224c2700.js";import{d as t}from"./vendor.5273475d.js";import"./PaperCode.9a1fe640.js";function a(){return t(c,{spacing:2,direction:"row",get children(){return[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]}})}o(a,"BasicButtons");a.code=`import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
`;function f(){return t(u,{get name(){return n.name},docsName:"buttons",examples:[a]})}o(f,"ButtonPage");export{f as default};