"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1094],{91064:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"process/maintenance/optimize/jvm/dragonwell8","title":"Dragonwell 8","description":"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 Dragonwell 8","source":"@site/docs-java/process/maintenance/optimize/jvm/dragonwell8.md","sourceDirName":"process/maintenance/optimize/jvm","slug":"/optimize/jvm/dragonwell8","permalink":"/Java/optimize/jvm/dragonwell8","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/dragonwell8.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727754229000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Dragonwell 8","slug":"/optimize/jvm/dragonwell8"},"sidebar":"tutorialSidebar","previous":{"title":"\u901a\u7528\u4f18\u5316\u53c2\u6570","permalink":"/Java/optimize/jvm/common"},"next":{"title":"Dragonwell 11","permalink":"/Java/optimize/jvm/dragonwell"}}');var l=n(86070),r=n(51582);const t={sidebar_position:3,title:"Dragonwell 8",slug:"/optimize/jvm/dragonwell8"},s="Dragonwell 8",o={},c=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"G1GC \u53c2\u6570",id:"g1gc-\u53c2\u6570",level:2},{value:"JWarmup",id:"jwarmup",level:2},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",level:3},{value:"\u8bb0\u5f55\u9636\u6bb5(\u4e00\u822c\u662fbeta\u73af\u5883)\uff0c\u57285\u5206\u949f\u540e\u751f\u6210profiling data",id:"\u8bb0\u5f55\u9636\u6bb5\u4e00\u822c\u662fbeta\u73af\u5883\u57285\u5206\u949f\u540e\u751f\u6210profiling-data",level:4},{value:"\u4f7f\u7528\u9636\u6bb5(\u4e00\u822c\u662f\u751f\u4ea7\u73af\u5883)",id:"\u4f7f\u7528\u9636\u6bb5\u4e00\u822c\u662f\u751f\u4ea7\u73af\u5883",level:4},{value:"\u5bf9\u8c61\u5934\u538b\u7f29",id:"\u5bf9\u8c61\u5934\u538b\u7f29",level:2},{value:"Wisp",id:"wisp",level:2},{value:"G1ElasticHeap",id:"g1elasticheap",level:2}];function d(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"dragonwell-8",children:"Dragonwell 8"})}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 Dragonwell 8"}),"\n",(0,l.jsx)(i.h2,{id:"\u57fa\u7840",children:"\u57fa\u7840"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-text",children:"-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+ParallelRefProcEnabled -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+PerfDisableSharedMem -XX:+AggressiveOpts -XX:+UseFastAccessorMethods -XX:MaxInlineLevel=15 -XX:MaxVectorSize=32 -XX:+UseCompressedOops -XX:ThreadPriorityPolicy=1 -XX:+UseDynamicNumberOfGCThreads -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=350M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseFPUForSpilling\n"})}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u4e9b\u662f\u57fa\u7840\u53c2\u6570"}),"\n",(0,l.jsx)(i.p,{children:"x86 Java 8 \u7528\u6237\u53ef\u4ee5\u6dfb\u52a0\u4ee5\u4e0b\u9644\u52a0\u53c2\u6570\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-text",children:"-XX:+UseXMMForArrayCopy\n"})}),"\n",(0,l.jsx)(i.p,{children:"\u5982\u679c\u4f7f\u7528\u7684\u662f\u4ece GitHub \u4e0b\u8f7d\u7684\u9884\u89c8\u7248\u53ef\u4ee5\u6dfb\u52a0"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-text",children:"-XX:+UseBigDecimalOpt\n"})}),"\n",(0,l.jsx)(i.h2,{id:"g1gc-\u53c2\u6570",children:"G1GC \u53c2\u6570"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-text",children:"-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 \n"})}),"\n",(0,l.jsx)(i.h2,{id:"jwarmup",children:"JWarmup"}),"\n",(0,l.jsx)(i.p,{children:"JWarmup\u7684\u57fa\u672c\u539f\u7406: \u6839\u636e\u524d\u4e00\u6b21\u7a0b\u5e8f\u8fd0\u884c\u7684\u60c5\u51b5\uff0c\u8bb0\u5f55\u4e0b\u70ed\u70b9\u65b9\u6cd5\u3001\u7c7b\u7f16\u8bd1\u987a\u5e8f\u7b49\u4fe1\u606f\uff0c\u5728\u5e94\u7528\u4e0b\u4e00\u6b21\u542f\u52a8\u7684\u65f6\u5019\u79ef\u6781\u52a0\u8f7d\u76f8\u5173\u7684\u7c7b\uff0c\u5e76\u79ef\u6781\u7f16\u8bd1\u76f8\u5173\u7684\u65b9\u6cd5\uff0c\u8fdb\u800c\u5e94\u7528\u542f\u52a8\u540e\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u7f16\u8bd1\u597d\u7684Java\u4ee3\u7801(C2\u7f16\u8bd1)\u3002"}),"\n",(0,l.jsx)(i.h3,{id:"\u4f7f\u7528\u6b65\u9aa4",children:"\u4f7f\u7528\u6b65\u9aa4"}),"\n",(0,l.jsx)(i.h4,{id:"\u8bb0\u5f55\u9636\u6bb5\u4e00\u822c\u662fbeta\u73af\u5883\u57285\u5206\u949f\u540e\u751f\u6210profiling-data",children:"\u8bb0\u5f55\u9636\u6bb5(\u4e00\u822c\u662fbeta\u73af\u5883)\uff0c\u57285\u5206\u949f\u540e\u751f\u6210profiling data"}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570",(0,l.jsx)(i.code,{children:"-XX:-ClassUnloading -XX:-CMSClassUnloadingEnabled -XX:-ClassUnloadingWithConcurrentMark -XX:CompilationWarmUpLogfile=jwarmup.log -XX:+CompilationWarmUpRecording -XX:CompilationWarmUpRecordTime=300"})]}),"\n",(0,l.jsx)(i.h4,{id:"\u4f7f\u7528\u9636\u6bb5\u4e00\u822c\u662f\u751f\u4ea7\u73af\u5883",children:"\u4f7f\u7528\u9636\u6bb5(\u4e00\u822c\u662f\u751f\u4ea7\u73af\u5883)"}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570",(0,l.jsx)(i.code,{children:"-XX:+CompilationWarmUp -XX:-TieredCompilation -XX:CompilationWarmUpLogfile=jwarmup.log -XX:CompilationWarmUpDeoptTime=0"})]}),"\n",(0,l.jsx)(i.h2,{id:"\u5bf9\u8c61\u5934\u538b\u7f29",children:"\u5bf9\u8c61\u5934\u538b\u7f29"}),"\n",(0,l.jsx)(i.p,{children:"\u53ef\u4ee5\u8282\u7ea610%\u5de6\u53f3\u7684Java\u5bf9\u8c61\u5185\u5b58\u5360\u7528\uff0c\u5e76\u53ef\u80fd\u63d0\u5347\u7a0b\u5e8f\u6027\u80fd\u3002"}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570",(0,l.jsx)(i.code,{children:"-XX:+UseCompactObjectHeaders"})]}),"\n",(0,l.jsx)(i.h2,{id:"wisp",children:"Wisp"}),"\n",(0,l.jsx)(i.p,{children:"Wisp\u5728JVM\u4e0a\u63d0\u4f9b\u4e86\u4e00\u79cd\u7528\u6237\u6001\u7684\u7ebf\u7a0b\u5b9e\u73b0\u3002\u5f00\u542fWisp2\u540e\uff0cJava\u7ebf\u7a0b\u4e0d\u518d\u7b80\u5355\u5730\u6620\u5c04\u5230\u5185\u6838\u7ea7\u7ebf\u7a0b\uff0c\u800c\u662f\u5bf9\u5e94\u5230\u4e00\u4e2a\u534f\u7a0b\uff0cJVM\u5728\u5c11\u91cf\u5185\u6838\u7ebf\u4e0a\u8c03\u5ea6\u5927\u91cf\u534f\u7a0b\u6267\u884c\uff0c\u4ee5\u51cf\u5c11\u5185\u6838\u7684\u8c03\u5ea6\u5f00\u9500"}),"\n",(0,l.jsx)(i.p,{children:"\u53ea\u9700\u6dfb\u52a0JVM\u53c2\u6570\u5373\u53ef\u5f00\u542fWisp2\uff0c\u65e0\u9700\u66f4\u6539\u7a0b\u5e8f\uff01\uff01"}),"\n",(0,l.jsx)(i.admonition,{type:"tip",children:(0,l.jsx)(i.p,{children:"\u4ec5\u652f\u6301Linux x64"})}),"\n",(0,l.jsxs)(i.p,{children:["\u6dfb\u52a0\u53c2\u6570",(0,l.jsx)(i.code,{children:"-XX:+UnlockExperimentalVMOptions -XX:+UseWisp2"})]}),"\n",(0,l.jsx)(i.h2,{id:"g1elasticheap",children:"G1ElasticHeap"}),"\n",(0,l.jsx)(i.p,{children:"G1ElasticHeap \u662f\u4e00\u79cd GC \u529f\u80fd\uff0c\u7528\u4e8e\u5c06 Java \u5806\u7684\u5185\u5b58\u8fd4\u56de\u7ed9\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4ee5\u51cf\u5c11 Java \u8fdb\u7a0b\u7684\u5185\u5b58\u5360\u7528\u3002\u8981\u542f\u7528\u6b64\u529f\u80fd\uff0c\u4f60\u9700\u8981\u901a\u8fc7\u4ee5\u4e0b\u9009\u9879\u4f7f\u7528 G1 GC\uff1a"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-text",children:"-XX:+G1ElasticHeap -XX:+ElasticHeapPeriodicUncommit\n"})})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},51582:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>s});var a=n(30758);const l={},r=a.createContext(l);function t(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);