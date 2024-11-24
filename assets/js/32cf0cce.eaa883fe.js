"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5800],{87001:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"advance/all-server-core","title":"\u670d\u52a1\u7aef\u6838\u5fc3\u6536\u5f55","description":"\u6b64\u9875\u9762\u6b63\u5728\u7f16\u8f91","source":"@site/docs-java/advance/all-server-core.md","sourceDirName":"advance","slug":"/Advance/all-server-code","permalink":"/NitWikit/Java/Advance/all-server-code","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/all-server-core.md","tags":[],"version":"current","lastUpdatedBy":"\u201cpostyizhan\u201d","lastUpdatedAt":1730537924000,"sidebarPosition":13,"frontMatter":{"title":"\u670d\u52a1\u7aef\u6838\u5fc3\u6536\u5f55","slug":"/Advance/all-server-code","sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"\u4e0d\u77e5\u9053\u653e\u5728\u54ea","permalink":"/NitWikit/Java/advance/kether/idk"}}');var l=s(86070),n=s(51582);const d={title:"\u670d\u52a1\u7aef\u6838\u5fc3\u6536\u5f55",slug:"/Advance/all-server-code",sidebar_position:13},r="\u670d\u52a1\u7aef\u6838\u5fc3\u6536\u5f55",a={},h=[{value:"\u5fbd\u7ae0",id:"\u5fbd\u7ae0",level:2},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:3},{value:"\u7ef4\u62a4\u65f6\u95f4",id:"\u7ef4\u62a4\u65f6\u95f4",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u63d2\u4ef6\u7aef",id:"\u63d2\u4ef6\u7aef",level:2},{value:"CraftBukkit",id:"craftbukkit",level:3},{value:"Spigot",id:"spigot",level:3},{value:"\u6df7\u5408\u7aef",id:"\u6df7\u5408\u7aef",level:2},{value:"mod\u7aef",id:"mod\u7aef",level:2}];function o(e){const i={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"\u670d\u52a1\u7aef\u6838\u5fc3\u6536\u5f55",children:"\u670d\u52a1\u7aef\u6838\u5fc3\u6536\u5f55"})}),"\n",(0,l.jsx)(i.admonition,{type:"danger",children:(0,l.jsx)(i.p,{children:"\u6b64\u9875\u9762\u6b63\u5728\u7f16\u8f91"})}),"\n",(0,l.jsx)(i.h2,{id:"\u5fbd\u7ae0",children:"\u5fbd\u7ae0"}),"\n",(0,l.jsx)(i.h3,{id:"\u72b6\u6001",children:"\u72b6\u6001"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E7%A7%AF%E6%9E%81%E7%BB%B4%E6%8A%A4-green?style=for-the-badge",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E4%B8%8D%E5%86%8D%E7%A7%AF%E6%9E%81%E7%BB%B4%E6%8A%A4-yellow?style=for-the-badge",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E5%81%9C%E6%AD%A2%E7%BB%B4%E6%8A%A4-red?style=for-the-badge",alt:""})}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\u7ef4\u62a4\u65f6\u95f4",children:"\u7ef4\u62a4\u65f6\u95f4"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E5%BC%80%E5%A7%8B-xxxx/xx/xx-blue?style=for-the-badge",alt:""})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u9879\u76ee\u5efa\u7acb/\u5f00\u59cb\u7ef4\u62a4\u65f6\u95f4"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E7%BB%93%E6%9D%9F-xxxx/xx/xx-orange?style=for-the-badge",alt:""})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u9879\u76ee\u505c\u6b62\u7ef4\u62a4\u65f6\u95f4\uff08\u4ecd\u5728\u7ef4\u62a4\u5219\u4e0d\u5199\u6b64\u9879\uff09"}),"\n",(0,l.jsx)(i.h3,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/GitHub-%E9%A1%B9%E7%9B%AE%E5%90%8D%E7%A7%B0-blue?style=for-the-badge&logo=github",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/github/license/Bukkit/Bukkit?style=for-the-badge",alt:""})}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"\u63d2\u4ef6\u7aef",children:"\u63d2\u4ef6\u7aef"}),"\n",(0,l.jsx)(i.h3,{id:"craftbukkit",children:"CraftBukkit"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E4%B8%8D%E5%86%8D%E7%A7%AF%E6%9E%81%E7%BB%B4%E6%8A%A4-yellow?style=for-the-badge",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E5%BC%80%E5%A7%8B-xxxx/xx/xx-blue?style=for-the-badge",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/GitHub-%E9%A1%B9%E7%9B%AE%E5%90%8D%E7%A7%B0-blue?style=for-the-badge&logo=github",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/github/license/Bukkit/Bukkit?style=for-the-badge",alt:""})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u63cf\u8ff0xxx"}),"\n",(0,l.jsx)(i.h3,{id:"spigot",children:"Spigot"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E4%B8%8D%E5%86%8D%E7%A7%AF%E6%9E%81%E7%BB%B4%E6%8A%A4-yellow?style=for-the-badge",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/%E5%BC%80%E5%A7%8B-xxxx/xx/xx-blue?style=for-the-badge",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/badge/GitHub-%E9%A1%B9%E7%9B%AE%E5%90%8D%E7%A7%B0-blue?style=for-the-badge&logo=github",alt:""})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.img,{src:"https://img.shields.io/github/license/Bukkit/Bukkit?style=for-the-badge",alt:""})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u63cf\u8ff0xxx"}),"\n",(0,l.jsx)(i.h2,{id:"\u6df7\u5408\u7aef",children:"\u6df7\u5408\u7aef"}),"\n",(0,l.jsx)(i.h2,{id:"mod\u7aef",children:"mod\u7aef"})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},51582:(e,i,s)=>{s.d(i,{R:()=>d,x:()=>r});var t=s(30758);const l={},n=t.createContext(l);function d(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);