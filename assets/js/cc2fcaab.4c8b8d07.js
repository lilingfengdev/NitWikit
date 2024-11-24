"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[2584],{74359:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>X});const a=JSON.parse('{"id":"process/maintenance/optimize/jvm/graal","title":"GraalVM EE","description":"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 GraalVM EE","source":"@site/docs-java/process/maintenance/optimize/jvm/graal.md","sourceDirName":"process/maintenance/optimize/jvm","slug":"/optimize/jvm/graalvm","permalink":"/NitWikit/Java/optimize/jvm/graalvm","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/graal.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1732239362000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"GraalVM EE","slug":"/optimize/jvm/graalvm"},"sidebar":"tutorialSidebar","previous":{"title":"Dragonwell 11","permalink":"/NitWikit/Java/optimize/jvm/dragonwell"},"next":{"title":"Azul Zing","permalink":"/NitWikit/Java/optimize/jvm/zing"}}');var r=t(86070),n=t(51582);const o={sidebar_position:5,title:"GraalVM EE",slug:"/optimize/jvm/graalvm"},s="GraalVM",l={},X=[{value:"\u57fa\u7840\u53c2\u6570",id:"\u57fa\u7840\u53c2\u6570",level:2},{value:"ZGC",id:"zgc",level:2},{value:"\u6b63\u5728\u8003\u8651\u7684flag",id:"\u6b63\u5728\u8003\u8651\u7684flag",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"graalvm",children:"GraalVM"})}),"\n",(0,r.jsx)(i.p,{children:"::: tip"}),"\n",(0,r.jsx)(i.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 GraalVM EE"}),"\n",(0,r.jsx)(i.p,{children:":::"}),"\n",(0,r.jsx)(i.h2,{id:"\u57fa\u7840\u53c2\u6570",children:"\u57fa\u7840\u53c2\u6570"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-text",children:" -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1MaxNewSizePercent=50 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=15 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=20 -XX:G1MixedGCLiveThresholdPercent=90 -XX:SurvivorRatio=32 -XX:G1HeapWastePercent=5 -XX:MaxTenuringThreshold=1 -XX:+PerfDisableSharedMem -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:AllocatePrefetchStyle=3 -XX:+AlwaysActAsServerClassMachine -XX:+EagerJVMCI -XX:+UseStringDeduplication -XX:+UseAES -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+OptimizeStringConcat -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseCopySignIntrinsic -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+UseFastJNIAccessors -XX:+UseInlineCaches -XX:+SegmentedCodeCache -Djdk.nio.maxCachedBufferSize=262144 -Dgraal.UsePriorityInlining=true -Dgraal.Vectorization=true -Dgraal.OptDuplication=true -Dgraal.DetectInvertedLoopsAsCounted=true  -Dgraal.LoopInversion=true -Dgraal.VectorizeHashes=true -Dgraal.EnterprisePartialUnroll=true -Dgraal.VectorizeSIMD=true -Dgraal.StripMineNonCountedLoops=true  -Dgraal.SpeculativeGuardMovement=true -Dgraal.TuneInlinerExploration=1 -Dgraal.LoopRotation=true -Dgraal.OptWriteMotion=true -Dgraal.WriteableCodeCache=true -Dgraal.CompilerConfiguration=enterprise \n"})}),"\n",(0,r.jsx)(i.h2,{id:"zgc",children:"ZGC"}),"\n",(0,r.jsx)(i.p,{children:"GraalVM \u4e0d\u9002\u5408\u4f7f\u7528 ZGC,\u4f1a\u5bfc\u81f4\u91cd\u8981\u4f18\u5316\u88ab\u7981\u7528"}),"\n",(0,r.jsx)(i.h2,{id:"\u6b63\u5728\u8003\u8651\u7684flag",children:"\u6b63\u5728\u8003\u8651\u7684flag"}),"\n",(0,r.jsxs)(i.p,{children:["\u66f4\u6fc0\u8fdb\u7684\u5185\u8054\uff0c\u5728 Graal \u4e2d\u901a\u8fc7",(0,r.jsx)(i.code,{children:"-Dgraal.BaseTargetSpending=160"}),"(\u9ed8\u8ba4\u4e3a 120)\u548c OpenJDK \u4e2d\u7684\u5176\u4ed6\u4e00\u4e9b\u6807\u5fd7\u3002\u5177\u6709\u8f83\u5927\u7f13\u5b58\u7684 CPU \u53ef\u80fd\u4f1a\u4ece\u4e2d\u53d7\u76ca"]})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},51582:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>s});var a=t(30758);const r={},n=a.createContext(r);function o(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);