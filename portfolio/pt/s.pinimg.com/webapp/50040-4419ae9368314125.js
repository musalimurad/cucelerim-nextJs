(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50040,76532,61514],{176532:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(u){a=!0,i=u}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=e.async,r=e.data,o=e.headers,u=e.timeout,c=e.type,l=(e.updateProgress,e.url),d=!1;return{promise:new Promise((function(e,f){var p=u?setTimeout((function(){d="timeout",f({type:"timeout"})}),u):void 0;fetch(l,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({method:c,credentials:"include",mode:"same-origin",keepalive:!t,headers:o},r?{body:r}:{})).then((function(t){p&&clearTimeout(p),d?"timeout"!==d&&f({type:"abort"}):e({status:t.status,statusText:t.statusText,ok:t.status>=200&&t.status<300||304===t.status,headers:{get:function(e){return t.headers.get(e)},_logString:function(){var e,r=[],o=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=i(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,s=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}(t.headers.entries());try{for(o.s();!(e=o.n()).done;){var s=n(e.value,2),a=s[0],u=s[1];r.push("".concat(a,": ").concat(u,"\r\n"))}}catch(c){o.e(c)}finally{o.f()}return r.join("")}},json:function(){return t.json().then((function(e){return e instanceof Object?e:Promise.reject(new Error("JSON.parse did not return an object"))}))}})})).catch((function(){return Promise.reject({type:"timeout"})}))})),abort:function(){d="manual"}}}r.d(t,{Z:function(){return S}});var c=r(635240),l=function(){};function d(e){var t=e.async,r=e.data,n=e.headers,i=e.timeout,o=e.type,s=e.updateProgress,a=e.url,u=new XMLHttpRequest;return{promise:new Promise((function(e,c){var d=i?setTimeout((function(){u.onreadystatechange=l,u.abort(),c({type:"timeout"})}),i):void 0;u.onreadystatechange=function(){if(4===u.readyState){u.onreadystatechange=l,clearTimeout(d);var t=u.status,r=u.statusText,n=u.responseText;if(!t)return void c({type:"abort"});e({status:t,statusText:r,ok:t>=200&&t<300||304===t,headers:{get:function(e){return u.getResponseHeader(e)},_logString:function(){return u.getAllResponseHeaders()}},json:function(){return new Promise((function(e,t){try{var r=JSON.parse(n);r instanceof Object?e(r):t(new Error("JSON.parse did not return an object"))}catch(i){t(i)}}))},responseText:n})}},s&&u.upload.addEventListener("progress",(function(e){var t=null;e.lengthComputable&&(t=e.loaded/e.total*100),s(t)})),u.open(o,a,t),Object.keys(n).forEach((function(e){u.setRequestHeader(e,n[e])})),u.send(r||null)})),abort:function(){u&&u.abort()}}}var f=r(536126),p=r.n(f),m=function(e){if(function(e){var t=e.match(/\s+chrome\/(\d+)\./i);return!!t&&parseInt(t[1],10)>=79}(e))return!0;var t=p()(e).browser,r=t.name,n=void 0===r?"":r,i=t.version,o=parseInt((void 0===i?"":i).replace(/\..*/,""),10)||0;return"chrome"===n.toLowerCase()&&o>=79},b=r(826067),w=r(628551);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=g({async:!0,cache:!1,data:void 0,headers:{},query:{},timeout:0,type:"GET"},e),r=t.url,n=t.data,i=t.type;n&&"object"===v(n)&&("GET"===i?(r=(0,b.ru)(r,n),n=void 0):n instanceof FormData||(n=(0,b.XP)(n))),!1===t.cache&&"GET"===i&&(r=(0,b.ru)(r,{_:Date.now()}));var o=(0,w.needsCsrfToken)(i,r);return o&&!(0,w.getCsrfToken)()?{promise:Promise.reject({type:"csrferror",message:"No csrf token found"}),abort:function(){}}:(!t.async&&"keepalive"in new Request("")&&m(window.navigator.userAgent||"")?u:d)(g(g({},t),{},{url:r,data:n,headers:g(g(g({"X-Requested-With":"XMLHttpRequest",Accept:"application/json, text/javascript, */*, q=0.01","X-APP-VERSION":(0,c.Z)()},"GET"===i||!n||n instanceof FormData?{}:{"Content-Type":"application/x-www-form-urlencoded"}),o?{"X-CSRFToken":(0,w.getCsrfToken)()||""}:{}),t.headers)}))}},991067:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=function(){var e;return!(null===(e=window.performance)||void 0===e||!e.timing)},i=r(985271),o=r(969853);function s(e){return!("desktop"===e&&!n())&&(!!i.Z&&(0,o.v)())}},528961:function(e,t,r){"use strict";r.d(t,{cC:function(){return o},jy:function(){return i},qr:function(){return a},sk:function(){return s}});var n=function(e){return"number"==typeof e?Math.round(e):e},i=function(e){return{type:"I16",value:n(e)}},o=function(e){return{type:"I32",value:n(e)}},s=function(e){return{type:"STRING",value:e}},a=function(e){return{type:"BOOL",value:e}}},638089:function(e,t,r){"use strict";r.d(t,{ng:function(){return h},rA:function(){return S}});var n=r(602738),i=r(226464),o=r(22773),s=r(156381),a=r(543059),u=r(528961);function c(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t){return(e||[]).reduce((function(e,r){return f(f({},e),{},p({},"experiment.".concat(r),(0,u.sk)(t(r))))}),{})},b=function(e,t){return"number"==typeof t?e(t):null},w=function(e){return e.reduce((function(e,t){return e+t}),0)},v=function(e,t){return Object.keys(t).reduce((function(r,n){return f(f({},r),{},p({},"".concat(e).concat(n),t[n]))}),{})},y=function(e){var t=e.filter((function(e){return!!e.responseEnd}));return f(f({},e.length?f(f({},function(e){if(!e.length)return{};var t,r=e.map((function(e){var t=e.startTime,r=e.requestStart||t;return{startTime:t,requestStart:r,responseStart:e.responseStart||r,responseEnd:e.responseEnd}})),n=w(r.map((function(e){return e.requestStart-e.startTime}))),i=w(r.map((function(e){return e.responseStart-e.requestStart}))),o=w(r.map((function(e){return e.responseEnd-e.responseStart}))),s=n+i+o,a=w(e.map((function(e){return e.decodedBodySize||0})));return{decodedBodySize:(0,u.cC)((t=a,Number(Number(t/1024).toFixed(3)))),"duration.all":(0,u.cC)(s),"duration.requestStartToResponseStart":(0,u.cC)(i),"duration.responseStartToResponseEnd":(0,u.cC)(o),"duration.startToRequestStart":(0,u.cC)(n)}}(t)),{},{"count.completed":(0,u.cC)(t.length)}):{}),{},{"count.all":(0,u.cC)(e.length)})},g=function(e,t,r){var s,a,c=window,l=c.devicePixelRatio,d=c.navigator,p=c.innerWidth,m=c.innerHeight,w=c.performance,v=d.deviceMemory,y=d.hardwareConcurrency,g=d.platform,h=d.userAgent,S=d.connection,O=w.memory,k=t.appType,x=t.appVersion,j=t.browserName,T=t.browserVersion,A=t.deviceType,E=t.isAppShell,P=t.isAuthenticated,C=t.isBot,_=t.isSocialBot,D=t.locale,I=t.osName,N=t.stageName,M="desktop"===A?k||5:k||6,q=e.navigationType,R=null;if("initial_app_load"===q){var B;a=1;var z=null===(B=(0,n.Z)("navigation")[0])||void 0===B?void 0:B.transferSize;R=z?parseFloat((.001*z).toFixed(1)):null}else a=4;return f(f({"app.type":(0,u.jy)(M),"app.version":(0,u.sk)(x),"browser.name":(0,u.sk)(j),"browser.version":(0,u.sk)(T),"cpu.speed":(0,u.jy)(y),"device.memory":(0,u.jy)(v),"device.type":(0,u.jy)(0),"device.typeName":(0,u.sk)(A),"device.version":(0,u.sk)("unknown"),"pwt.cause":(0,u.jy)(a),"net.effectiveType":(0,u.sk)((null==S?void 0:S.effectiveType)||null),"net.downlink":(0,u.cC)(b((function(e){return 10*Math.round(e/10)}),null==S?void 0:S.downlink)),"net.downlinkMax":(0,u.cC)(b((function(e){return 10*Math.round(e/10)}),null==S?void 0:S.downlinkMax)),"net.rtt":(0,u.cC)(b((function(e){return 10*Math.round(e/10)}),null==S?void 0:S.rtt)),"net.speed":(0,u.cC)((0,o.Hv)(r,!1)),"pwt.result":(0,u.jy)(1),"view.type":(0,u.cC)(0),"viewport.height":(0,u.cC)(m||0),"viewport.width":(0,u.cC)(p||0),devicePixelRatio:(0,u.cC)(l||0),isAppShell:(0,u.qr)(E),isAuthenticated:(0,u.qr)(P),isBot:(0,u.qr)(C),isSocialBot:(0,u.qr)(_),locale:(0,u.sk)(D),osName:(0,u.sk)(I)},null!==R&&{htmlResponseSize:(0,u.cC)(R)}),{},{nextHopProtocol:(0,u.sk)((null===(s=(0,n.Z)("navigation")[0])||void 0===s?void 0:s.nextHopProtocol)||null),platform:(0,u.sk)(g||null),profilerVersion:(0,u.sk)("3"),pwtActionName:(0,u.jy)((0,i.Rp)(e)),stageName:(0,u.sk)(N),userAgent:(0,u.sk)(h),usedJSHeapSize:(0,u.cC)((null==O?void 0:O.usedJSHeapSize)||0),totalJSHeapSize:(0,u.cC)((null==O?void 0:O.totalJSHeapSize)||0),jsHeapSizeLimit:(0,u.cC)((null==O?void 0:O.jsHeapSizeLimit)||0)})},h=function(e){var t=e.annotateExperiments,r=e.metricId,n=e.pwtStaticContext,i=e.binaryAnnotations,o=void 0===i?{}:i,s=e.performanceResourceTimings,a=void 0===s?[]:s;return f(f(f(f({},m(t,n.getExperimentGroup)),g(r,n,a)),o),{},{stopwatchVersion:(0,u.jy)(1)})},S=function(e){var t=e.annotateExperiments,r=e.binaryAnnotations,n=void 0===r?{}:r,i=e.entries,o=e.metricId,l=e.performanceResources,d=e.pwtEndTime,b=e.pwtStaticContext;return f(f(f(f(f({},n),function(e){var t=["timeSecond1","timeSecond2","timeSecond3"],r={timeSecond1:{start:0,end:0,count:0},timeSecond2:{start:0,end:0,count:0},timeSecond3:{start:0,end:0,count:0}},n={script_deferred:[],external:[],visually_complete:[],script:[],css:[],video:[],image:[],xmlhttprequest:[],other:[]};if(e.length){var i=e[0].timing,o=i.requestStart,s=i.startTime,a=o||s;r.timeSecond1.start=a,r.timeSecond1.end=a+1e3,r.timeSecond2.start=a+1e3,r.timeSecond2.end=a+2e3,r.timeSecond3.start=a+2e3,r.timeSecond3.end=a+3e3,e.forEach((function(e){var i=e.timing;n[e.category]=n[e.category].concat([i]),e.isDeferred&&(n.script_deferred=n.script_deferred.concat([i])),e.isExternal&&(n.external=n.external.concat([i])),e.isVisuallyCompleteRequired&&(n.visually_complete=n.visually_complete.concat([i]));var o=i.requestStart,s=i.startTime,a=i.responseEnd,u=o||s;t.forEach((function(e){var t=r[e],n=t.start,i=t.end;(u>=n&&u<i||u<n&&a>n)&&(r[e].count+=1)}))}))}var c=f({},v("concurrentRequests.",Object.keys(r).reduce((function(e,t){return f(f({},e),{},p({},t,(0,u.cC)(r[t].count)))}),{})));return f({},Object.keys(n).reduce((function(e,t){return f(f({},e),v("resource.".concat(t,"."),y(n[t])))}),c))}(l)),m(t,b.getExperimentGroup)),g(o,b,i)),function(e,t){var r,n=window.navigator.serviceWorker,i=e.surface,o=e.navigationType,l=e.isAuthenticated,d=(0,s.v2)(),p=d.cumulativeLayoutShiftScore,m=d.longTaskDurations;return f(f({},m.length?{"longTask.count":(0,u.cC)(m.length),"longTask.maxDuration":(0,u.cC)(Math.max.apply(Math,c(m))),"longTask.totalDuration":(0,u.cC)(w(m))}:{}),{},{cumulativeLayoutShiftScore:(0,u.cC)(100*p),"masonry.paginationMarkCount":(0,u.cC)((0,a.Ao)(a.at,t)),"metricId.isAuthenticated":(0,u.qr)(l),"metricId.navigationType":(0,u.sk)(o),"metricId.surface":(0,u.sk)(i),resourceBufferClearedCount:(0,u.jy)((0,a.Ao)("resourceBufferCleared",t)),scrollDuringLayout:(0,u.qr)((0,a.BA)("scrollDuringLayout",t)),serviceWorker:(0,u.qr)(n?!!n.controller:null),serviceWorkerState:(0,u.sk)((null==n||null===(r=n.controller)||void 0===r?void 0:r.state)||null)})}(o,d))}},860273:function(e,t,r){"use strict";var n=r(985271);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(u){a=!0,i=u}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.Z=function(){return i(n.Z?n.Z.getEntriesByType("navigation"):[],1)[0]}},558775:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n=null,i=function(e,t){return(n=n||{results:[],context:t}).results.push(e),n},o=r(176532),s=r(7789),a=r(383434),u=r(226464),c=r(790348),l=r(860273),d=r(358864),f=r(602738),p=r(528961);function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e,t){return Object.keys(e).reduce((function(r,n){var i=e[n];return i&&(r[n]={timestamp:t+i}),r}),{})},h=function(e){var t,r=e.span,n=e.timeOrigin;return{id:r.id,parent_id:r.parentId||null,result:1,name:r.name,timestamp:n+r.startTime,duration:r.endTime-r.startTime,annotations:g(r.annotationMap,n),binary_annotations:(t=r.binaryAnnotationMap,Object.keys(t).reduce((function(e,r){var n=t[r];if(!n)return e;var i=n.value,o=n.type;return null==i?e:e.concat({name:r,value:i,annotation_type:o})}),[]))}},S=function(e,t){var r=t.startTime,n=t.endTime,i=t.annotationMap,o=t.binaryAnnotationMap,s=t.parentId,a=t.traceId;return{name:"pwt/".concat(e),startTime:r,endTime:n,annotationMap:i,binaryAnnotationMap:o,parentId:s,id:a}},O=function(e,t){return v(v({},e),{},{annotations:v(v({},(r=t,r.annotations.reduce((function(e,t){var r=t.key,n=t.timestamp;return v(v({},e),{},y({},"server_".concat(r),{timestamp:n}))}),{}))),e.annotations),binary_annotations:[].concat(m(t.binary_annotations),m(e.binary_annotations))});var r},k=function(e){var t=e.traceId,r=e.actionName,n=e.result,i=e.timeOrigin,o=e.serverDataToJoin,s=h({span:S(r,n),timeOrigin:i}),a=null;return o&&(s=O(s,o),a=function(e,t,r){var n,i=(0,l.Z)();return(null==i?void 0:i.responseEnd)?O(h({span:{name:"html",startTime:0,endTime:(null==i?void 0:i.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{nextHopProtocol:(0,p.sk)((null===(n=(0,f.Z)("navigation")[0])||void 0===n?void 0:n.nextHopProtocol)||null)},id:e.server_span_id||(0,d.Z)(),parentId:t},timeOrigin:r}),e):null}(o,t,i)),{trace_id:t,spans:[s].concat(m(a?[a]:[]),m(n.spans.map((function(e){return h({span:e,timeOrigin:i})}))))}};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=(0,a.X)("reportResult");function E(e){var t=e.metricId,r=e.pwtStaticContext,n=e.result,a=e.isAuth,l=r.serverData,d=(0,u.KJ)(t),f="".concat(n.type,".").concat(d),p="".concat(n.type,".sampled.").concat(d),m=void 0!==a&&{tags:{isAuth:a}}||void 0;if((0,c.A9)(n.reason?f.concat(".".concat(n.reason)):f,m),(0,c.A9)(n.reason?p.concat(".".concat(n.reason)):p,j(j({},m),{},{sampleRate:.5})),"COMPLETE"===n.type){var b,w,v=null!==(b=window.performance)&&void 0!==b&&b.now?Date.now()-window.performance.now():"unknown";if("unknown"===v)return A("Unable to convert to absolute times for ".concat(d," due to missing time origin")),void(0,c.A9)("missingTimeOrigin.".concat(d),m);if(s.is&&(window.PWT_LAB_DATA=i(n,r)),n.spans.length&&(n.spans=n.spans.map((function(e){return e.parentId||e.id===n.traceId||"network_resources"===e.name||(e.parentId=n.traceId),e}))),!s.is){var y=t.navigationType&&"initial_app_load"===t.navigationType,g=n.traceId,h=k({traceId:g,actionName:d,result:n,timeOrigin:v,serverDataToJoin:y&&l||null});(0,o.Z)({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(h),report_context:JSON.stringify((w=r,{debugTrace:s.eD,locale:w.locale,stageName:w.stageName}))}}),A("PinTrace ".concat(d," will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/").concat(g.toString(16)),{duration:n.endTime-n.startTime,result:n,pwtStaticContext:r})}}else A("Abort metric ".concat(d),n)}},156381:function(e,t,r){"use strict";r.d(t,{Af:function(){return m},Kj:function(){return p},PJ:function(){return c},UQ:function(){return b},Ux:function(){return l},on:function(){return a},v2:function(){return d}});var n,i=r(581341),o=r(169213),s={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},a=function(){s.longTaskDurations=[]},u=(0,i.Z)((function(){return s.elementTimings})),c=function(){return u.get()},l=function(e){e&&u.save(),s.elementTimings=[]},d=function(){return s},f=0,p=function(){return f},m=function(){return n},b=function(){(0,o.Z)({type:"element",buffered:!0},(function(e){s.elementTimings=s.elementTimings.concat(e.getEntries().reduce((function(e,t){var r=t.identifier,n=t.loadTime,i=t.renderTime;return e.concat("string"==typeof r&&"number"==typeof n&&"number"==typeof i?[{identifier:r,loadTime:n,renderTime:i}]:[])}),[]))})),(0,o.Z)({entryTypes:["longtask"]},(function(e){e.getEntries().map((function(e){return s.longTaskDurations.push(e.duration)}))}),(function(){return a()})),(0,o.Z)({type:"first-input",buffered:!0},(function(e,t){var r=e.getEntries()[0];r&&r.startTime&&r.processingStart&&(s.firstInputDelay={startTime:r.startTime,endTime:r.processingStart},n=s.firstInputDelay.startTime),t.disconnect()}),(function(){s.firstInputDelay=null})),(0,o.Z)({type:"largest-contentful-paint",buffered:!0},(function(e){var t=e.getEntries(),r=t.length,n=t[r-1];n&&(f=r,s.largestContentfulPaint=n.renderTime||n.loadTime||null)})),(0,o.Z)({type:"layout-shift",buffered:!0},(function(e){e.getEntries().forEach((function(e){e.hadRecentInput||(s.cumulativeLayoutShiftScore+=e.value)}))}))}},358864:function(e,t,r){"use strict";function n(){for(var e="",t=0;t<15;t+=1){e+="0123456789"[Math.floor(10*Math.random())]}return Number(e)}r.d(t,{Z:function(){return n}})},536126:function(e,t,r){var n;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=r.nmd(e),function(o,s){"use strict";var a="function",u="undefined",c="object",l="string",d="model",f="name",p="type",m="vendor",b="version",w="architecture",v="console",y="mobile",g="tablet",h="smarttv",S="wearable",O="embedded",k={extend:function(e,t){var r={};for(var n in e)t[n]&&t[n].length%2==0?r[n]=t[n].concat(e[n]):r[n]=e[n];return r},has:function(e,t){return i(e)===l&&-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return i(e)===l?e.replace(/[^\d\.]/g,"").split(".")[0]:s},trim:function(e,t){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t)===u?e:e.substring(0,255)}},x={rgx:function(e,t){for(var r,n,o,u,l,d,f=0;f<t.length&&!l;){var p=t[f],m=t[f+1];for(r=n=0;r<p.length&&!l;)if(l=p[r++].exec(e))for(o=0;o<m.length;o++)d=l[++n],i(u=m[o])===c&&u.length>0?2==u.length?i(u[1])==a?this[u[0]]=u[1].call(this,d):this[u[0]]=u[1]:3==u.length?i(u[1])!==a||u[1].exec&&u[1].test?this[u[0]]=d?d.replace(u[1],u[2]):s:this[u[0]]=d?u[1].call(this,d,u[2]):s:4==u.length&&(this[u[0]]=d?u[3].call(this,d.replace(u[1],u[2])):s):this[u]=d||s;f+=2}},str:function(e,t){for(var r in t)if(i(t[r])===c&&t[r].length>0){for(var n=0;n<t[r].length;n++)if(k.has(t[r][n],e))return"?"===r?s:r}else if(k.has(t[r],e))return"?"===r?s:r;return e}},j={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},T={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[b,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[b,[f,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[f,b],[/opios[\/\s]+([\w\.]+)/i],[b,[f,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[b,[f,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[f,b],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[b,[f,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[b,[f,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[b,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[b,[f,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[b,[f,"IE"]],[/yabrowser\/([\w\.]+)/i],[b,[f,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure Browser"],b],[/focus\/([\w\.]+)/i],[b,[f,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[b,[f,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[b,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[b,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[b,[f,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[b,[f,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[b,[f,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[f,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 Browser"],b],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],b],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[f,b],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[f],[/;fbav\/([\w\.]+);/i],[b,[f,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[f,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[f,b],[/\bgsa\/([\w\.]+)\s.*safari\//i],[b,[f,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[b,[f,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[f,"Chrome WebView"],b],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[b,[f,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[f,b],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[b,[f,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[b,f],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[f,[b,x.str,j.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[f,b],[/(navigator|netscape)\/([\w\.-]+)/i],[[f,"Netscape"],b],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[b,[f,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[f,b]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[w,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,k.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[d,[m,"Samsung"],[p,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[d,[m,"Samsung"],[p,y]],[/\((ip(?:hone|od)[\s\w]*);/i],[d,[m,"Apple"],[p,y]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[m,"Apple"],[p,g]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[d,[m,"Huawei"],[p,g]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[d,[m,"Huawei"],[p,y]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[d,/_/g," "],[m,"Xiaomi"],[p,y]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[d,/_/g," "],[m,"Xiaomi"],[p,g]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[d,[m,"OPPO"],[p,y]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[d,[m,"Vivo"],[p,y]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[d,[m,"Realme"],[p,y]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[d,[m,"Motorola"],[p,y]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[m,"Motorola"],[p,g]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[d,[m,"LG"],[p,g]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[d,[m,"LG"],[p,y]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[d,[m,"Lenovo"],[p,g]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[d,/_/g," "],[m,"Nokia"],[p,y]],[/droid.+;\s(pixel\sc)[\s)]/i],[d,[m,"Google"],[p,g]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[d,[m,"Google"],[p,y]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[m,"Sony"],[p,y]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[d,"Xperia Tablet"],[m,"Sony"],[p,g]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[d,[m,"OnePlus"],[p,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[d,[m,"Amazon"],[p,g]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[d,"Fire Phone"],[m,"Amazon"],[p,y]],[/\((playbook);[\w\s\),;-]+(rim)/i],[d,m,[p,g]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[d,[m,"BlackBerry"],[p,y]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[d,[m,"ASUS"],[p,g]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[d,[m,"ASUS"],[p,y]],[/(nexus\s9)/i],[d,[m,"HTC"],[p,g]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[m,[d,/_/g," "],[p,y]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[d,[m,"Acer"],[p,g]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[d,[m,"Meizu"],[p,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,d,[p,y]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[m,d,[p,g]],[/\s(surface\sduo)\s/i],[d,[m,"Microsoft"],[p,g]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[d,[m,"Fairphone"],[p,y]],[/\s(u304aa)\sbuild/i],[d,[m,"AT&T"],[p,y]],[/sie-(\w*)/i],[d,[m,"Siemens"],[p,y]],[/[;\/]\s?(rct\w+)\sbuild/i],[d,[m,"RCA"],[p,g]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[d,[m,"Dell"],[p,g]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[d,[m,"Verizon"],[p,g]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[d,[m,"Barnes & Noble"],[p,g]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[d,[m,"NuVision"],[p,g]],[/;\s(k88)\sbuild/i],[d,[m,"ZTE"],[p,g]],[/;\s(nx\d{3}j)\sbuild/i],[d,[m,"ZTE"],[p,y]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[d,[m,"Swiss"],[p,y]],[/[;\/]\s?(zur\d{3})\sbuild/i],[d,[m,"Swiss"],[p,g]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[d,[m,"Zeki"],[p,g]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[m,"Dragon Touch"],d,[p,g]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[d,[m,"Insignia"],[p,g]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[d,[m,"NextBook"],[p,g]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[m,"Voice"],d,[p,y]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[m,"LvTel"],d,[p,y]],[/;\s(ph-1)\s/i],[d,[m,"Essential"],[p,y]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[d,[m,"Envizen"],[p,g]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[d,[m,"MachSpeed"],[p,g]],[/[;\/]\s?tu_(1491)\sbuild/i],[d,[m,"Rotor"],[p,g]],[/(shield[\w\s]+)\sbuild/i],[d,[m,"Nvidia"],[p,g]],[/(sprint)\s(\w+)/i],[m,d,[p,y]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[m,"Microsoft"],[p,y]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[m,"Zebra"],[p,g]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[m,"Zebra"],[p,y]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[m,d,[p,v]],[/droid.+;\s(shield)\sbuild/i],[d,[m,"Nvidia"],[p,v]],[/(playstation\s[345portablevi]+)/i],[d,[m,"Sony"],[p,v]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[d,[m,"Microsoft"],[p,v]],[/smart-tv.+(samsung)/i],[m,[p,h]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[m,"Samsung"],[p,h]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[m,"LG"],[p,h]],[/(apple)\s?tv/i],[m,[d,"Apple TV"],[p,h]],[/crkey/i],[[d,"Chromecast"],[m,"Google"],[p,h]],[/droid.+aft([\w])(\sbuild\/|\))/i],[d,[m,"Amazon"],[p,h]],[/\(dtv[\);].+(aquos)/i],[d,[m,"Sharp"],[p,h]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,k.trim],[d,k.trim],[p,h]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[p,h]],[/((pebble))app\/[\d\.]+\s/i],[m,d,[p,S]],[/droid.+;\s(glass)\s\d/i],[d,[m,"Google"],[p,S]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[d,[m,"Zebra"],[p,S]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[m,[p,O]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[d,[p,y]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[d,[p,g]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[p,k.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[d,[m,"Generic"]],[/(phone)/i],[[p,y]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[b,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[f,b],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[b,f]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[f,b],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[f,[b,x.str,j.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[f,"Windows"],[b,x.str,j.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[b,/_/g,"."],[f,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[f,"Mac OS"],[b,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[f,b],[/\(bb(10);/i],[b,[f,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[b,[f,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[f,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[b,[f,"webOS"]],[/crkey\/([\d\.]+)/i],[b,[f,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[f,"Chromium OS"],b],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[f,b],[/(sunos)\s?([\w\.\d]*)/i],[[f,"Solaris"],b],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[f,b]]},A=function e(t,r){if("object"===i(t)&&(r=t,t=s),!(this instanceof e))return new e(t,r).getResult();var n=t||(void 0!==o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),a=r?k.extend(T,r):T;return this.getBrowser=function(){var e={name:s,version:s};return x.rgx.call(e,n,a.browser),e.major=k.major(e.version),e},this.getCPU=function(){var e={architecture:s};return x.rgx.call(e,n,a.cpu),e},this.getDevice=function(){var e={vendor:s,model:s,type:s};return x.rgx.call(e,n,a.device),e},this.getEngine=function(){var e={name:s,version:s};return x.rgx.call(e,n,a.engine),e},this.getOS=function(){var e={name:s,version:s};return x.rgx.call(e,n,a.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=i(e)===l&&e.length>255?k.trim(e,255):e,this},this.setUA(n),this};A.VERSION="0.7.28",A.BROWSER={NAME:f,MAJOR:"major",VERSION:b},A.CPU={ARCHITECTURE:w},A.DEVICE={MODEL:d,VENDOR:m,TYPE:p,CONSOLE:v,MOBILE:y,SMARTTV:h,TABLET:g,WEARABLE:S,EMBEDDED:O},A.ENGINE={NAME:f,VERSION:b},A.OS={NAME:f,VERSION:b},i(t)!==u?(i(e)!==u&&e.exports&&(t=e.exports=A),t.UAParser=A):(n=function(){return A}.call(t,r,t,e))===s||(e.exports=n);var E=void 0!==o&&(o.jQuery||o.Zepto);if(E&&!E.ua){var P=new A;E.ua=P.getResult(),E.ua.get=function(){return P.getUA()},E.ua.set=function(e){P.setUA(e);var t=P.getResult();for(var r in t)E.ua[r]=t[r]}}}("object"===("undefined"==typeof window?"undefined":i(window))?window:this)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/50040-4419ae9368314125.js.map