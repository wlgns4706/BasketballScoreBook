"use strict";const performance=require("./vs/base/common/performance");performance.mark("code/fork/start");const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node");bootstrapNode.removeGlobalNodeModuleLookupPaths(),bootstrap.enableASARSupport(void 0),process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH&&bootstrapNode.injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),!!process.send&&process.env.VSCODE_PIPE_LOGGING==="true"&&pipeLoggingToParent(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||handleExceptions(),process.env.VSCODE_PARENT_PID&&terminateWhenParentTerminates(),configureCrashReporter(),require("./bootstrap-amd").load(process.env.VSCODE_AMD_ENTRYPOINT);function pipeLoggingToParent(){const o=1e5;function n(e){const t=[],c=[];if(e.length)for(let r=0;r<e.length;r++){if(typeof e[r]=="undefined")e[r]="undefined";else if(e[r]instanceof Error){const a=e[r];a.stack?e[r]=a.stack:e[r]=a.toString()}c.push(e[r])}if(process.env.VSCODE_LOG_STACK==="true"){const r=new Error().stack;r&&c.push({__$stack:r.split(`
`).slice(3).join(`
`)})}try{const r=JSON.stringify(c,function(a,i){if(u(i)||Array.isArray(i)){if(t.indexOf(i)!==-1)return"[Circular]";t.push(i)}return i});return r.length>o?"Output omitted for a large object that exceeds the limits":r}catch(r){return`Output omitted for an object that cannot be inspected ('${r.toString()}')`}}function f(e){try{process.send&&process.send(e)}catch(t){}}function u(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}function p(e,t){f({type:"__$console",severity:e,arguments:t})}function s(e,t){if(process.env.VSCODE_LOG_NATIVE==="true"){const c=console[e];console[e]=function(){p(t,n(arguments));const r=e==="error"||e==="warn"?process.stderr:process.stdout;r.write(`
START_NATIVE_LOG
`),c.apply(console,arguments),r.write(`
END_NATIVE_LOG
`)}}else console[e]=function(){p(t,n(arguments))}}process.env.VSCODE_VERBOSE_LOGGING==="true"?(s("info","log"),s("log","log"),s("warn","warn"),s("error","error")):process.env.VSCODE_LOG_NATIVE!=="true"&&(console.log=function(){},console.warn=function(){},console.info=function(){},s("error","error"))}function handleExceptions(){process.on("uncaughtException",function(o){console.error("Uncaught Exception: ",o)}),process.on("unhandledRejection",function(o){console.error("Unhandled Promise Rejection: ",o)})}function terminateWhenParentTerminates(){const o=Number(process.env.VSCODE_PARENT_PID);typeof o=="number"&&!isNaN(o)&&setInterval(function(){try{process.kill(o,0)}catch(n){process.exit()}},5e3)}function configureCrashReporter(){const o=process.env.VSCODE_CRASH_REPORTER_START_OPTIONS;if(typeof o=="string")try{const n=JSON.parse(o);n&&process.crashReporter&&process.crashReporter.start(n)}catch(n){console.error(n)}}

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/b4c1bd0a9b03c749ea011b06c6d2676c8091a70c/core/bootstrap-fork.js.map
