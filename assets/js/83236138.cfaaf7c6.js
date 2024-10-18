"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6819],{86976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(86070),s=r(31503),c=r(90456);const i={title:"\u57fa\u7840\u77e5\u8bc6",sidebar_position:1},o="\u57fa\u7840\u77e5\u8bc6",a={id:"bds-core/start/basic/basic",title:"\u57fa\u7840\u77e5\u8bc6",description:"\u8003\u8651\u5230\u7b28\u86cb\u6559\u7a0b\u4e3b\u8981\u9762\u5411\u65b0\u624b\uff0c\u6211\u4eec\u65e0\u6cd5\u4e86\u89e3\u4f60\u4e86\u89e3\u4ec0\u4e48\u4e0d\u4e86\u89e3\u4ec0\u4e48\u3002",source:"@site/docs-bedrock/bds-core/start/basic/basic.md",sourceDirName:"bds-core/start/basic",slug:"/bds-core/start/basic/",permalink:"/Bedrock/bds-core/start/basic/",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/start/basic/basic.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1727693356e3,sidebarPosition:1,frontMatter:{title:"\u57fa\u7840\u77e5\u8bc6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb\u9636\u6bb5",permalink:"/Bedrock/bds-core/start/"},next:{title:"\u670d\u52a1\u7aef\u7ed3\u6784",permalink:"/Bedrock/bds-core/start/basic/server-file-structure"}},l={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u57fa\u7840\u77e5\u8bc6",children:"\u57fa\u7840\u77e5\u8bc6"})}),"\n",(0,n.jsx)(t.p,{children:"\u8003\u8651\u5230\u7b28\u86cb\u6559\u7a0b\u4e3b\u8981\u9762\u5411\u65b0\u624b\uff0c\u6211\u4eec\u65e0\u6cd5\u4e86\u89e3\u4f60\u4e86\u89e3\u4ec0\u4e48\u4e0d\u4e86\u89e3\u4ec0\u4e48\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u672c\u6587\u6863\u6682\u65f6\u5c31\u5f00\u670d\u6700\u91cd\u8981\u7684\u57fa\u7840\u6982\u5ff5\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5982\u679c\u6709\u4f60\u81ea\u8ba4\u4e3a\u975e\u5e38\u4e86\u89e3\u6216\u8005\u4e0d\u91cd\u8981\u7684\u90e8\u5206\uff0c"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u8df3\u8fc7\u4ed6\u5427"}),"\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u540e\u9762\u518d\u6b21\u63d0\u5230\u8fd9\u4e9b\u6982\u5ff5\u7684\u65f6\u5019\u4f1a\u91cd\u65b0\u8df3\u8f6c\u5230\u5bf9\u5e94\u94fe\u63a5\u3002"]}),"\n","\n",(0,n.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},90456:(e,t,r)=>{r.d(t,{A:()=>g});r(30758);var n=r(13526),s=r(95989),c=r(43166),i=r(45388),o=r(35222),a=r(28618),l=r(51523);const d={cardContainer:"cardContainer_LiRU",cardTitle:"cardTitle_bpRp",cardDescription:"cardDescription_oMgc"};var u=r(86070);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(c.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:c}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),c&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const c=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:c.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(b,{item:e})},t)))})}},45388:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(30758),s=r(19970);const c=["zero","one","two","few","many","other"];function i(e){return c.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),c=r.pluralForms.indexOf(s);return n[Math.min(c,n.length-1)]}(r,t,e)}}},31503:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(30758);const s={},c=n.createContext(s);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);