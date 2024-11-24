"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3521],{25549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"bds-core/process/BDSX/bdsx","title":"BDSX","description":"BDSX \u662f\u4e00\u4e2a\u652f\u6301 node.js \u7684 Minecraft \u57fa\u5ca9\u7248\u4e13\u7528\u670d\u52a1\u5668\uff08BDS\uff09\u4fee\u6539\u7248\u672c\u3002\u57fa\u4e8e\u5b98\u65b9 BDS \u5b9e\u73b0\uff0c\u5305\u542b\u4e86\u539f\u7248 Minecraft \u7684\u6240\u6709\u7279\u6027\uff0c\u5e76\u652f\u6301 Hook \u51fd\u6570\u4e0e\u7f51\u7edc\u6570\u636e\u5305\u4ee5\u6dfb\u52a0\u6216\u4fee\u6539\u670d\u52a1\u5668\u7684\u529f\u80fd\u4e0e\u8868\u73b0\u3002","source":"@site/docs-bedrock/bds-core/process/BDSX/bdsx.md","sourceDirName":"bds-core/process/BDSX","slug":"/bds-core/process/BDSX/","permalink":"/NitWikit/Bedrock/bds-core/process/BDSX/","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/BDSX/bdsx.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727731002000,"sidebarPosition":3,"frontMatter":{"title":"BDSX","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u63d2\u4ef6\u52a0\u8f7d\u5668\u9009\u62e9","permalink":"/NitWikit/Bedrock/bds-core/process/plugins/plugins-loader-choose"},"next":{"title":"BDSX \u5b89\u88c5\u6559\u7a0b","permalink":"/NitWikit/Bedrock/bds-core/process/BDSX/bdsx-install"}}');var s=r(86070),o=r(51582),i=r(36988);const c={title:"BDSX",sidebar_position:3},l="BDSX",a={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"bdsx",children:"BDSX"})}),"\n",(0,s.jsx)(t.p,{children:"BDSX \u662f\u4e00\u4e2a\u652f\u6301 node.js \u7684 Minecraft \u57fa\u5ca9\u7248\u4e13\u7528\u670d\u52a1\u5668\uff08BDS\uff09\u4fee\u6539\u7248\u672c\u3002\u57fa\u4e8e\u5b98\u65b9 BDS \u5b9e\u73b0\uff0c\u5305\u542b\u4e86\u539f\u7248 Minecraft \u7684\u6240\u6709\u7279\u6027\uff0c\u5e76\u652f\u6301 Hook \u51fd\u6570\u4e0e\u7f51\u7edc\u6570\u636e\u5305\u4ee5\u6dfb\u52a0\u6216\u4fee\u6539\u670d\u52a1\u5668\u7684\u529f\u80fd\u4e0e\u8868\u73b0\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u4e3a BDSX \u7684\u914d\u7f6e\u6559\u7a0b"}),"\n","\n",(0,s.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},36988:(e,t,r)=>{r.d(t,{A:()=>g});r(30758);var n=r(13526),s=r(4766),o=r(94040),i=r(61849),c=r(10944),l=r(47681),a=r(38291);const d={cardContainer:"cardContainer_s_sQ",cardTitle:"cardTitle_QyUf",cardDescription:"cardDescription_FGW3"};var u=r(86070);function p(e){let{href:t,children:r}=e;return(0,u.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:o}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),o&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(b,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},61849:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(30758),s=r(48832);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}},51582:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(30758);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);