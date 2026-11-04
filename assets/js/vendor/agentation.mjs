var b1=Object.create;var th=Object.defineProperty;var k1=Object.getOwnPropertyDescriptor;var C1=Object.getOwnPropertyNames;var S1=Object.getPrototypeOf,M1=Object.prototype.hasOwnProperty;var Ao=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var E1=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of C1(t))!M1.call(e,r)&&r!==n&&th(e,r,{get:()=>t[r],enumerable:!(o=k1(t,r))||o.enumerable});return e};var Ee=(e,t,n)=>(n=e!=null?b1(S1(e)):{},E1(t||!e||!e.__esModule?th(n,"default",{value:e,enumerable:!0}):n,e));var fh=Ao(He=>{"use strict";var hi=Symbol.for("react.element"),L1=Symbol.for("react.portal"),N1=Symbol.for("react.fragment"),I1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),R1=Symbol.for("react.provider"),T1=Symbol.for("react.context"),P1=Symbol.for("react.forward_ref"),D1=Symbol.for("react.suspense"),B1=Symbol.for("react.memo"),z1=Symbol.for("react.lazy"),nh=Symbol.iterator;function O1(e){return e===null||typeof e!="object"?null:(e=nh&&e[nh]||e["@@iterator"],typeof e=="function"?e:null)}var lh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ih=Object.assign,sh={};function gl(e,t,n){this.props=e,this.context=t,this.refs=sh,this.updater=n||lh}gl.prototype.isReactComponent={};gl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ah(){}ah.prototype=gl.prototype;function sd(e,t,n){this.props=e,this.context=t,this.refs=sh,this.updater=n||lh}var ad=sd.prototype=new ah;ad.constructor=sd;ih(ad,gl.prototype);ad.isPureReactComponent=!0;var oh=Array.isArray,ch=Object.prototype.hasOwnProperty,cd={current:null},dh={key:!0,ref:!0,__self:!0,__source:!0};function uh(e,t,n){var o,r={},l=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ch.call(t,o)&&!dh.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)r[o]===void 0&&(r[o]=s[o]);return{$$typeof:hi,type:e,key:l,ref:i,props:r,_owner:cd.current}}function A1(e,t){return{$$typeof:hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dd(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function F1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rh=/\/+/g;function id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?F1(""+e.key):t.toString(36)}function Fs(e,t,n,o,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hi:case L1:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+id(i,0):o,oh(r)?(n="",e!=null&&(n=e.replace(rh,"$&/")+"/"),Fs(r,t,n,"",function(u){return u})):r!=null&&(dd(r)&&(r=A1(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(rh,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",oh(e))for(var s=0;s<e.length;s++){l=e[s];var a=o+id(l,s);i+=Fs(l,t,n,a,r)}else if(a=O1(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=o+id(l,s++),i+=Fs(l,t,n,a,r);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function As(e,t,n){if(e==null)return e;var o=[],r=0;return Fs(e,o,"","",function(l){return t.call(n,l,r++)}),o}function W1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var wn={current:null},Ws={transition:null},j1={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:cd};function _h(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:As,forEach:function(e,t,n){As(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return As(e,function(){t++}),t},toArray:function(e){return As(e,function(t){return t})||[]},only:function(e){if(!dd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};He.Component=gl;He.Fragment=N1;He.Profiler=$1;He.PureComponent=sd;He.StrictMode=I1;He.Suspense=D1;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;He.act=_h;He.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ih({},e.props),r=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=cd.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ch.call(t,a)&&!dh.hasOwnProperty(a)&&(o[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:hi,type:e.type,key:r,ref:l,props:o,_owner:i}};He.createContext=function(e){return e={$$typeof:T1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:R1,_context:e},e.Consumer=e};He.createElement=uh;He.createFactory=function(e){var t=uh.bind(null,e);return t.type=e,t};He.createRef=function(){return{current:null}};He.forwardRef=function(e){return{$$typeof:P1,render:e}};He.isValidElement=dd;He.lazy=function(e){return{$$typeof:z1,_payload:{_status:-1,_result:e},_init:W1}};He.memo=function(e,t){return{$$typeof:B1,type:e,compare:t===void 0?null:t}};He.startTransition=function(e){var t=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=t}};He.unstable_act=_h;He.useCallback=function(e,t){return wn.current.useCallback(e,t)};He.useContext=function(e){return wn.current.useContext(e)};He.useDebugValue=function(){};He.useDeferredValue=function(e){return wn.current.useDeferredValue(e)};He.useEffect=function(e,t){return wn.current.useEffect(e,t)};He.useId=function(){return wn.current.useId()};He.useImperativeHandle=function(e,t,n){return wn.current.useImperativeHandle(e,t,n)};He.useInsertionEffect=function(e,t){return wn.current.useInsertionEffect(e,t)};He.useLayoutEffect=function(e,t){return wn.current.useLayoutEffect(e,t)};He.useMemo=function(e,t){return wn.current.useMemo(e,t)};He.useReducer=function(e,t,n){return wn.current.useReducer(e,t,n)};He.useRef=function(e){return wn.current.useRef(e)};He.useState=function(e){return wn.current.useState(e)};He.useSyncExternalStore=function(e,t,n){return wn.current.useSyncExternalStore(e,t,n)};He.useTransition=function(){return wn.current.useTransition()};He.version="18.3.1"});var St=Ao((Bw,hh)=>{"use strict";hh.exports=fh()});var Ch=Ao(bt=>{"use strict";function hd(e,t){var n=e.length;e.push(t);e:for(;0<n;){var o=n-1>>>1,r=e[o];if(0<js(r,t))e[o]=t,e[n]=r,n=o;else break e}}function _o(e){return e.length===0?null:e[0]}function Us(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var o=0,r=e.length,l=r>>>1;o<l;){var i=2*(o+1)-1,s=e[i],a=i+1,u=e[a];if(0>js(s,n))a<r&&0>js(u,s)?(e[o]=u,e[a]=n,o=a):(e[o]=s,e[i]=n,o=i);else if(a<r&&0>js(u,n))e[o]=u,e[a]=n,o=a;else break e}}return t}function js(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(ph=performance,bt.unstable_now=function(){return ph.now()}):(ud=Date,mh=ud.now(),bt.unstable_now=function(){return ud.now()-mh});var ph,ud,mh,Mo=[],tr=[],H1=1,Jn=null,dn=3,Ys=!1,Ar=!1,mi=!1,xh=typeof setTimeout=="function"?setTimeout:null,vh=typeof clearTimeout=="function"?clearTimeout:null,gh=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pd(e){for(var t=_o(tr);t!==null;){if(t.callback===null)Us(tr);else if(t.startTime<=e)Us(tr),t.sortIndex=t.expirationTime,hd(Mo,t);else break;t=_o(tr)}}function md(e){if(mi=!1,pd(e),!Ar)if(_o(Mo)!==null)Ar=!0,yd(gd);else{var t=_o(tr);t!==null&&xd(md,t.startTime-e)}}function gd(e,t){Ar=!1,mi&&(mi=!1,vh(gi),gi=-1),Ys=!0;var n=dn;try{for(pd(t),Jn=_o(Mo);Jn!==null&&(!(Jn.expirationTime>t)||e&&!kh());){var o=Jn.callback;if(typeof o=="function"){Jn.callback=null,dn=Jn.priorityLevel;var r=o(Jn.expirationTime<=t);t=bt.unstable_now(),typeof r=="function"?Jn.callback=r:Jn===_o(Mo)&&Us(Mo),pd(t)}else Us(Mo);Jn=_o(Mo)}if(Jn!==null)var l=!0;else{var i=_o(tr);i!==null&&xd(md,i.startTime-t),l=!1}return l}finally{Jn=null,dn=n,Ys=!1}}var Qs=!1,Hs=null,gi=-1,wh=5,bh=-1;function kh(){return!(bt.unstable_now()-bh<wh)}function _d(){if(Hs!==null){var e=bt.unstable_now();bh=e;var t=!0;try{t=Hs(!0,e)}finally{t?pi():(Qs=!1,Hs=null)}}else Qs=!1}var pi;typeof gh=="function"?pi=function(){gh(_d)}:typeof MessageChannel!="undefined"?(fd=new MessageChannel,yh=fd.port2,fd.port1.onmessage=_d,pi=function(){yh.postMessage(null)}):pi=function(){xh(_d,0)};var fd,yh;function yd(e){Hs=e,Qs||(Qs=!0,pi())}function xd(e,t){gi=xh(function(){e(bt.unstable_now())},t)}bt.unstable_IdlePriority=5;bt.unstable_ImmediatePriority=1;bt.unstable_LowPriority=4;bt.unstable_NormalPriority=3;bt.unstable_Profiling=null;bt.unstable_UserBlockingPriority=2;bt.unstable_cancelCallback=function(e){e.callback=null};bt.unstable_continueExecution=function(){Ar||Ys||(Ar=!0,yd(gd))};bt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wh=0<e?Math.floor(1e3/e):5};bt.unstable_getCurrentPriorityLevel=function(){return dn};bt.unstable_getFirstCallbackNode=function(){return _o(Mo)};bt.unstable_next=function(e){switch(dn){case 1:case 2:case 3:var t=3;break;default:t=dn}var n=dn;dn=t;try{return e()}finally{dn=n}};bt.unstable_pauseExecution=function(){};bt.unstable_requestPaint=function(){};bt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=dn;dn=e;try{return t()}finally{dn=n}};bt.unstable_scheduleCallback=function(e,t,n){var o=bt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?o+n:o):n=o,e){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,e={id:H1++,callback:t,priorityLevel:e,startTime:n,expirationTime:r,sortIndex:-1},n>o?(e.sortIndex=n,hd(tr,e),_o(Mo)===null&&e===_o(tr)&&(mi?(vh(gi),gi=-1):mi=!0,xd(md,n-o))):(e.sortIndex=r,hd(Mo,e),Ar||Ys||(Ar=!0,yd(gd))),e};bt.unstable_shouldYield=kh;bt.unstable_wrapCallback=function(e){var t=dn;return function(){var n=dn;dn=t;try{return e.apply(this,arguments)}finally{dn=n}}}});var Mh=Ao((Ow,Sh)=>{"use strict";Sh.exports=Ch()});var I0=Ao(Un=>{"use strict";var U1=St(),jn=Mh();function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,Ai={};function Jr(e,t){Ol(e,t),Ol(e+"Capture",t)}function Ol(e,t){for(Ai[e]=t,e=0;e<t.length;e++)Tp.add(t[e])}var Yo=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),jd=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eh={},Lh={};function Q1(e){return jd.call(Lh,e)?!0:jd.call(Eh,e)?!1:Y1.test(e)?Lh[e]=!0:(Eh[e]=!0,!1)}function V1(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X1(e,t,n,o){if(t===null||typeof t=="undefined"||V1(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Cn(e,t,n,o,r,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nn[e]=new Cn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nn[t]=new Cn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nn[e]=new Cn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nn[e]=new Cn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nn[e]=new Cn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nn[e]=new Cn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nn[e]=new Cn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nn[e]=new Cn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nn[e]=new Cn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pu=/[\-:]([a-z])/g;function Du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pu,Du);nn[t]=new Cn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pu,Du);nn[t]=new Cn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pu,Du);nn[t]=new Cn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nn[e]=new Cn(e,1,!1,e.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nn[e]=new Cn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bu(e,t,n,o){var r=nn.hasOwnProperty(t)?nn[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X1(t,n,r,o)&&(n=null),o||r===null?Q1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Go=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),vl=Symbol.for("react.portal"),wl=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),Dp=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),or=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Bp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Nh=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=Nh&&e[Nh]||e["@@iterator"],typeof e=="function"?e:null)}var Tt=Object.assign,vd;function Mi(e){if(vd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vd=t&&t[1]||""}return`
`+vd+e}var wd=!1;function bd(e,t){if(!e||wd)return"";wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var o=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){o=u}e.call(t.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),l=o.stack.split(`
`),i=r.length-1,s=l.length-1;1<=i&&0<=s&&r[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(r[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||r[i]!==l[s]){var a=`
`+r[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{wd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mi(e):""}function G1(e){switch(e.tag){case 5:return Mi(e.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return e=bd(e.type,!1),e;case 11:return e=bd(e.type.render,!1),e;case 1:return e=bd(e.type,!0),e;default:return""}}function Qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wl:return"Fragment";case vl:return"Portal";case Hd:return"Profiler";case zu:return"StrictMode";case Ud:return"Suspense";case Yd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dp:return(e.displayName||"Context")+".Consumer";case Pp:return(e._context.displayName||"Context")+".Provider";case Ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Au:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case or:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}function q1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(t);case 8:return t===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function K1(e){var t=zp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=K1(e))}function Op(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=zp(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vd(e,t){var n=t.checked;return Tt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ih(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=gr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ap(e,t){t=t.checked,t!=null&&Bu(e,"checked",t,!1)}function Xd(e,t){Ap(e,t);var n=gr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gd(e,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $h(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gd(e,t,n){(t!=="number"||ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ei=Array.isArray;function Rl(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+gr(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function qd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(X(91));return Tt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(X(92));if(Ei(n)){if(1<n.length)throw Error(X(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gr(n)}}function Fp(e,t){var n=gr(t.value),o=gr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Th(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gs,jp=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J1=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){J1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function Hp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function Up(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Hp(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Z1=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jd(e,t){if(t){if(Z1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(X(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(X(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(X(61))}if(t.style!=null&&typeof t.style!="object")throw Error(X(62))}}function Zd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tu=null,Tl=null,Pl=null;function Ph(e){if(e=rs(e)){if(typeof tu!="function")throw Error(X(280));var t=e.stateNode;t&&(t=qa(t),tu(e.stateNode,e.type,t))}}function Yp(e){Tl?Pl?Pl.push(e):Pl=[e]:Tl=e}function Qp(){if(Tl){var e=Tl,t=Pl;if(Pl=Tl=null,Ph(e),t)for(e=0;e<t.length;e++)Ph(t[e])}}function Vp(e,t){return e(t)}function Xp(){}var kd=!1;function Gp(e,t,n){if(kd)return e(t,n);kd=!0;try{return Vp(e,t,n)}finally{kd=!1,(Tl!==null||Pl!==null)&&(Xp(),Qp())}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var o=qa(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(X(231,t,typeof n));return n}var nu=!1;if(Yo)try{yl={},Object.defineProperty(yl,"passive",{get:function(){nu=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{nu=!1}var yl;function ey(e,t,n,o,r,l,i,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var $i=!1,ka=null,Ca=!1,ou=null,ty={onError:function(e){$i=!0,ka=e}};function ny(e,t,n,o,r,l,i,s,a){$i=!1,ka=null,ey.apply(ty,arguments)}function oy(e,t,n,o,r,l,i,s,a){if(ny.apply(this,arguments),$i){if($i){var u=ka;$i=!1,ka=null}else throw Error(X(198));Ca||(Ca=!0,ou=u)}}function Zr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dh(e){if(Zr(e)!==e)throw Error(X(188))}function ry(e){var t=e.alternate;if(!t){if(t=Zr(e),t===null)throw Error(X(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var l=r.alternate;if(l===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===n)return Dh(r),e;if(l===o)return Dh(r),t;l=l.sibling}throw Error(X(188))}if(n.return!==o.return)n=r,o=l;else{for(var i=!1,s=r.child;s;){if(s===n){i=!0,n=r,o=l;break}if(s===o){i=!0,o=r,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,o=r;break}if(s===o){i=!0,o=l,n=r;break}s=s.sibling}if(!i)throw Error(X(189))}}if(n.alternate!==o)throw Error(X(190))}if(n.tag!==3)throw Error(X(188));return n.stateNode.current===n?e:t}function Kp(e){return e=ry(e),e!==null?Jp(e):null}function Jp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jp(e);if(t!==null)return t;e=e.sibling}return null}var Zp=jn.unstable_scheduleCallback,Bh=jn.unstable_cancelCallback,ly=jn.unstable_shouldYield,iy=jn.unstable_requestPaint,Ot=jn.unstable_now,sy=jn.unstable_getCurrentPriorityLevel,Wu=jn.unstable_ImmediatePriority,em=jn.unstable_UserBlockingPriority,Sa=jn.unstable_NormalPriority,ay=jn.unstable_LowPriority,tm=jn.unstable_IdlePriority,Qa=null,Io=null;function cy(e){if(Io&&typeof Io.onCommitFiberRoot=="function")try{Io.onCommitFiberRoot(Qa,e,void 0,(e.current.flags&128)===128)}catch{}}var go=Math.clz32?Math.clz32:_y,dy=Math.log,uy=Math.LN2;function _y(e){return e>>>=0,e===0?32:31-(dy(e)/uy|0)|0}var qs=64,Ks=4194304;function Li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~r;s!==0?o=Li(s):(l&=i,l!==0&&(o=Li(l)))}else i=n&~r,i!==0?o=Li(i):l!==0&&(o=Li(l));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,l=t&-t,r>=l||r===16&&(l&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-go(t),r=1<<n,o|=e[n],t&=~r;return o}function fy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hy(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-go(l),s=1<<i,a=r[i];a===-1?(!(s&n)||s&o)&&(r[i]=fy(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nm(){var e=qs;return qs<<=1,!(qs&4194240)&&(qs=64),e}function Cd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ns(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-go(t),e[t]=n}function py(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-go(n),l=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~l}}function ju(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-go(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var ct=0;function om(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rm,Hu,lm,im,sm,lu=!1,Js=[],cr=null,dr=null,ur=null,ji=new Map,Hi=new Map,lr=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zh(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function xi(e,t,n,o,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[r]},t!==null&&(t=rs(t),t!==null&&Hu(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function gy(e,t,n,o,r){switch(t){case"focusin":return cr=xi(cr,e,t,n,o,r),!0;case"dragenter":return dr=xi(dr,e,t,n,o,r),!0;case"mouseover":return ur=xi(ur,e,t,n,o,r),!0;case"pointerover":var l=r.pointerId;return ji.set(l,xi(ji.get(l)||null,e,t,n,o,r)),!0;case"gotpointercapture":return l=r.pointerId,Hi.set(l,xi(Hi.get(l)||null,e,t,n,o,r)),!0}return!1}function am(e){var t=jr(e.target);if(t!==null){var n=Zr(t);if(n!==null){if(t=n.tag,t===13){if(t=qp(n),t!==null){e.blockedOn=t,sm(e.priority,function(){lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);eu=o,n.target.dispatchEvent(o),eu=null}else return t=rs(n),t!==null&&Hu(t),e.blockedOn=n,!1;t.shift()}return!0}function Oh(e,t,n){_a(e)&&n.delete(t)}function yy(){lu=!1,cr!==null&&_a(cr)&&(cr=null),dr!==null&&_a(dr)&&(dr=null),ur!==null&&_a(ur)&&(ur=null),ji.forEach(Oh),Hi.forEach(Oh)}function vi(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,yy)))}function Ui(e){function t(r){return vi(r,e)}if(0<Js.length){vi(Js[0],e);for(var n=1;n<Js.length;n++){var o=Js[n];o.blockedOn===e&&(o.blockedOn=null)}}for(cr!==null&&vi(cr,e),dr!==null&&vi(dr,e),ur!==null&&vi(ur,e),ji.forEach(t),Hi.forEach(t),n=0;n<lr.length;n++)o=lr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)am(n),n.blockedOn===null&&lr.shift()}var Dl=Go.ReactCurrentBatchConfig,Ea=!0;function xy(e,t,n,o){var r=ct,l=Dl.transition;Dl.transition=null;try{ct=1,Uu(e,t,n,o)}finally{ct=r,Dl.transition=l}}function vy(e,t,n,o){var r=ct,l=Dl.transition;Dl.transition=null;try{ct=4,Uu(e,t,n,o)}finally{ct=r,Dl.transition=l}}function Uu(e,t,n,o){if(Ea){var r=iu(e,t,n,o);if(r===null)$d(e,t,o,La,n),zh(e,o);else if(gy(r,e,t,n,o))o.stopPropagation();else if(zh(e,o),t&4&&-1<my.indexOf(e)){for(;r!==null;){var l=rs(r);if(l!==null&&rm(l),l=iu(e,t,n,o),l===null&&$d(e,t,o,La,n),l===r)break;r=l}r!==null&&o.stopPropagation()}else $d(e,t,o,null,n)}}var La=null;function iu(e,t,n,o){if(La=null,e=Fu(o),e=jr(e),e!==null)if(t=Zr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return La=e,null}function cm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sy()){case Wu:return 1;case em:return 4;case Sa:case ay:return 16;case tm:return 536870912;default:return 16}default:return 16}}var sr=null,Yu=null,fa=null;function dm(){if(fa)return fa;var e,t=Yu,n=t.length,o,r="value"in sr?sr.value:sr.textContent,l=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[l-o];o++);return fa=r.slice(e,1<o?1-o:void 0)}function ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function Ah(){return!1}function Hn(e){function t(n,o,r,l,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Zs:Ah,this.isPropagationStopped=Ah,this}return Tt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var Yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=Hn(Yl),os=Tt({},Yl,{view:0,detail:0}),wy=Hn(os),Sd,Md,wi,Va=Tt({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Sd=e.screenX-wi.screenX,Md=e.screenY-wi.screenY):Md=Sd=0,wi=e),Sd)},movementY:function(e){return"movementY"in e?e.movementY:Md}}),Fh=Hn(Va),by=Tt({},Va,{dataTransfer:0}),ky=Hn(by),Cy=Tt({},os,{relatedTarget:0}),Ed=Hn(Cy),Sy=Tt({},Yl,{animationName:0,elapsedTime:0,pseudoElement:0}),My=Hn(Sy),Ey=Tt({},Yl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ly=Hn(Ey),Ny=Tt({},Yl,{data:0}),Wh=Hn(Ny),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ry[e])?!!t[e]:!1}function Vu(){return Ty}var Py=Tt({},os,{key:function(e){if(e.key){var t=Iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dy=Hn(Py),By=Tt({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Hn(By),zy=Tt({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Oy=Hn(zy),Ay=Tt({},Yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Hn(Ay),Wy=Tt({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=Hn(Wy),Hy=[9,13,27,32],Xu=Yo&&"CompositionEvent"in window,Ri=null;Yo&&"documentMode"in document&&(Ri=document.documentMode);var Uy=Yo&&"TextEvent"in window&&!Ri,um=Yo&&(!Xu||Ri&&8<Ri&&11>=Ri),Hh=" ",Uh=!1;function _m(e,t){switch(e){case"keyup":return Hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function Yy(e,t){switch(e){case"compositionend":return fm(t);case"keypress":return t.which!==32?null:(Uh=!0,Hh);case"textInput":return e=t.data,e===Hh&&Uh?null:e;default:return null}}function Qy(e,t){if(bl)return e==="compositionend"||!Xu&&_m(e,t)?(e=dm(),fa=Yu=sr=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return um&&t.locale!=="ko"?null:t.data;default:return null}}var Vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vy[e.type]:t==="textarea"}function hm(e,t,n,o){Yp(o),t=Na(t,"onChange"),0<t.length&&(n=new Qu("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Ti=null,Yi=null;function Xy(e){Sm(e,0)}function Xa(e){var t=Sl(e);if(Op(t))return e}function Gy(e,t){if(e==="change")return t}var pm=!1;Yo&&(Yo?(ta="oninput"in document,ta||(Ld=document.createElement("div"),Ld.setAttribute("oninput","return;"),ta=typeof Ld.oninput=="function"),ea=ta):ea=!1,pm=ea&&(!document.documentMode||9<document.documentMode));var ea,ta,Ld;function Qh(){Ti&&(Ti.detachEvent("onpropertychange",mm),Yi=Ti=null)}function mm(e){if(e.propertyName==="value"&&Xa(Yi)){var t=[];hm(t,Yi,e,Fu(e)),Gp(Xy,t)}}function qy(e,t,n){e==="focusin"?(Qh(),Ti=t,Yi=n,Ti.attachEvent("onpropertychange",mm)):e==="focusout"&&Qh()}function Ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xa(Yi)}function Jy(e,t){if(e==="click")return Xa(t)}function Zy(e,t){if(e==="input"||e==="change")return Xa(t)}function e5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xo=typeof Object.is=="function"?Object.is:e5;function Qi(e,t){if(xo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!jd.call(t,r)||!xo(e[r],t[r]))return!1}return!0}function Vh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xh(e,t){var n=Vh(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function gm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ym(){for(var e=window,t=ba();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ba(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t5(e){var t=ym(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gm(n.ownerDocument.documentElement,n)){if(o!==null&&Gu(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,l=Math.min(o.start,r);o=o.end===void 0?l:Math.min(o.end,r),!e.extend&&l>o&&(r=o,o=l,l=r),r=Xh(n,l);var i=Xh(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n5=Yo&&"documentMode"in document&&11>=document.documentMode,kl=null,su=null,Pi=null,au=!1;function Gh(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||kl==null||kl!==ba(o)||(o=kl,"selectionStart"in o&&Gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Pi&&Qi(Pi,o)||(Pi=o,o=Na(su,"onSelect"),0<o.length&&(t=new Qu("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=kl)))}function na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cl={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Nd={},xm={};Yo&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete Cl.animationend.animation,delete Cl.animationiteration.animation,delete Cl.animationstart.animation),"TransitionEvent"in window||delete Cl.transitionend.transition);function Ga(e){if(Nd[e])return Nd[e];if(!Cl[e])return e;var t=Cl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xm)return Nd[e]=t[n];return e}var vm=Ga("animationend"),wm=Ga("animationiteration"),bm=Ga("animationstart"),km=Ga("transitionend"),Cm=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){Cm.set(e,t),Jr(t,[e])}for(oa=0;oa<qh.length;oa++)ra=qh[oa],Kh=ra.toLowerCase(),Jh=ra[0].toUpperCase()+ra.slice(1),xr(Kh,"on"+Jh);var ra,Kh,Jh,oa;xr(vm,"onAnimationEnd");xr(wm,"onAnimationIteration");xr(bm,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(km,"onTransitionEnd");Ol("onMouseEnter",["mouseout","mouseover"]);Ol("onMouseLeave",["mouseout","mouseover"]);Ol("onPointerEnter",["pointerout","pointerover"]);Ol("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o5=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function Zh(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,oy(o,t,void 0,e),e.currentTarget=null}function Sm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==l&&r.isPropagationStopped())break e;Zh(r,s,u),l=a}else for(i=0;i<o.length;i++){if(s=o[i],a=s.instance,u=s.currentTarget,s=s.listener,a!==l&&r.isPropagationStopped())break e;Zh(r,s,u),l=a}}}if(Ca)throw e=ou,Ca=!1,ou=null,e}function Mt(e,t){var n=t[fu];n===void 0&&(n=t[fu]=new Set);var o=e+"__bubble";n.has(o)||(Mm(t,e,2,!1),n.add(o))}function Id(e,t,n){var o=0;t&&(o|=4),Mm(n,e,o,t)}var la="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[la]){e[la]=!0,Tp.forEach(function(n){n!=="selectionchange"&&(o5.has(n)||Id(n,!1,e),Id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[la]||(t[la]=!0,Id("selectionchange",!1,t))}}function Mm(e,t,n,o){switch(cm(t)){case 1:var r=xy;break;case 4:r=vy;break;default:r=Uu}n=r.bind(null,t,n,e),r=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function $d(e,t,n,o,r){var l=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;i=i.return}for(;s!==null;){if(i=jr(s),i===null)return;if(a=i.tag,a===5||a===6){o=l=i;continue e}s=s.parentNode}}o=o.return}Gp(function(){var u=l,m=Fu(n),f=[];e:{var h=Cm.get(e);if(h!==void 0){var C=Qu,k=e;switch(e){case"keypress":if(ha(n)===0)break e;case"keydown":case"keyup":C=Dy;break;case"focusin":k="focus",C=Ed;break;case"focusout":k="blur",C=Ed;break;case"beforeblur":case"afterblur":C=Ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Oy;break;case vm:case wm:case bm:C=My;break;case km:C=Fy;break;case"scroll":C=wy;break;case"wheel":C=jy;break;case"copy":case"cut":case"paste":C=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=jh}var L=(t&4)!==0,R=!L&&e==="scroll",x=L?h!==null?h+"Capture":null:h;L=[];for(var b=u,w;b!==null;){w=b;var p=w.stateNode;if(w.tag===5&&p!==null&&(w=p,x!==null&&(p=Wi(b,x),p!=null&&L.push(Xi(b,p,w)))),R)break;b=b.return}0<L.length&&(h=new C(h,k,null,n,m),f.push({event:h,listeners:L}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",h&&n!==eu&&(k=n.relatedTarget||n.fromElement)&&(jr(k)||k[Qo]))break e;if((C||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,C?(k=n.relatedTarget||n.toElement,C=u,k=k?jr(k):null,k!==null&&(R=Zr(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(C=null,k=u),C!==k)){if(L=Fh,p="onMouseLeave",x="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(L=jh,p="onPointerLeave",x="onPointerEnter",b="pointer"),R=C==null?h:Sl(C),w=k==null?h:Sl(k),h=new L(p,b+"leave",C,n,m),h.target=R,h.relatedTarget=w,p=null,jr(m)===u&&(L=new L(x,b+"enter",k,n,m),L.target=w,L.relatedTarget=R,p=L),R=p,C&&k)t:{for(L=C,x=k,b=0,w=L;w;w=xl(w))b++;for(w=0,p=x;p;p=xl(p))w++;for(;0<b-w;)L=xl(L),b--;for(;0<w-b;)x=xl(x),w--;for(;b--;){if(L===x||x!==null&&L===x.alternate)break t;L=xl(L),x=xl(x)}L=null}else L=null;C!==null&&ep(f,h,C,L,!1),k!==null&&R!==null&&ep(f,R,k,L,!0)}}e:{if(h=u?Sl(u):window,C=h.nodeName&&h.nodeName.toLowerCase(),C==="select"||C==="input"&&h.type==="file")var D=Gy;else if(Yh(h))if(pm)D=Zy;else{D=Ky;var j=qy}else(C=h.nodeName)&&C.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(D=Jy);if(D&&(D=D(e,u))){hm(f,D,n,m);break e}j&&j(e,h,u),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&Gd(h,"number",h.value)}switch(j=u?Sl(u):window,e){case"focusin":(Yh(j)||j.contentEditable==="true")&&(kl=j,su=u,Pi=null);break;case"focusout":Pi=su=kl=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Gh(f,n,m);break;case"selectionchange":if(n5)break;case"keydown":case"keyup":Gh(f,n,m)}var P;if(Xu)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else bl?_m(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(um&&n.locale!=="ko"&&(bl||G!=="onCompositionStart"?G==="onCompositionEnd"&&bl&&(P=dm()):(sr=m,Yu="value"in sr?sr.value:sr.textContent,bl=!0)),j=Na(u,G),0<j.length&&(G=new Wh(G,e,null,n,m),f.push({event:G,listeners:j}),P?G.data=P:(P=fm(n),P!==null&&(G.data=P)))),(P=Uy?Yy(e,n):Qy(e,n))&&(u=Na(u,"onBeforeInput"),0<u.length&&(m=new Wh("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:u}),m.data=P))}Sm(f,t)})}function Xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Na(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=Wi(e,n),l!=null&&o.unshift(Xi(e,l,r)),l=Wi(e,t),l!=null&&o.push(Xi(e,l,r))),e=e.return}return o}function xl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ep(e,t,n,o,r){for(var l=t._reactName,i=[];n!==null&&n!==o;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===o)break;s.tag===5&&u!==null&&(s=u,r?(a=Wi(n,l),a!=null&&i.unshift(Xi(n,a,s))):r||(a=Wi(n,l),a!=null&&i.push(Xi(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var r5=/\r\n?/g,l5=/\u0000|\uFFFD/g;function tp(e){return(typeof e=="string"?e:""+e).replace(r5,`
`).replace(l5,"")}function ia(e,t,n){if(t=tp(t),tp(e)!==t&&n)throw Error(X(425))}function Ia(){}var cu=null,du=null;function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,i5=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,s5=typeof queueMicrotask=="function"?queueMicrotask:typeof np!="undefined"?function(e){return np.resolve(null).then(e).catch(a5)}:_u;function a5(e){setTimeout(function(){throw e})}function Rd(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Ui(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Ui(t)}function _r(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function op(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ql=Math.random().toString(36).slice(2),No="__reactFiber$"+Ql,Gi="__reactProps$"+Ql,Qo="__reactContainer$"+Ql,fu="__reactEvents$"+Ql,c5="__reactListeners$"+Ql,d5="__reactHandles$"+Ql;function jr(e){var t=e[No];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qo]||n[No]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=op(e);e!==null;){if(n=e[No])return n;e=op(e)}return t}e=n,n=e.parentNode}return null}function rs(e){return e=e[No]||e[Qo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(X(33))}function qa(e){return e[Gi]||null}var hu=[],Ml=-1;function vr(e){return{current:e}}function Et(e){0>Ml||(e.current=hu[Ml],hu[Ml]=null,Ml--)}function kt(e,t){Ml++,hu[Ml]=e.current,e.current=t}var yr={},hn=vr(yr),$n=vr(!1),Vr=yr;function Al(e,t){var n=e.type.contextTypes;if(!n)return yr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in n)r[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(e){return e=e.childContextTypes,e!=null}function $a(){Et($n),Et(hn)}function rp(e,t,n){if(hn.current!==yr)throw Error(X(168));kt(hn,t),kt($n,n)}function Em(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(X(108,q1(e)||"Unknown",r));return Tt({},n,o)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yr,Vr=hn.current,kt(hn,e),kt($n,$n.current),!0}function lp(e,t,n){var o=e.stateNode;if(!o)throw Error(X(169));n?(e=Em(e,t,Vr),o.__reactInternalMemoizedMergedChildContext=e,Et($n),Et(hn),kt(hn,e)):Et($n),kt($n,n)}var Wo=null,Ka=!1,Td=!1;function Lm(e){Wo===null?Wo=[e]:Wo.push(e)}function u5(e){Ka=!0,Lm(e)}function wr(){if(!Td&&Wo!==null){Td=!0;var e=0,t=ct;try{var n=Wo;for(ct=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Wo=null,Ka=!1}catch(r){throw Wo!==null&&(Wo=Wo.slice(e+1)),Zp(Wu,wr),r}finally{ct=t,Td=!1}}return null}var El=[],Ll=0,Ta=null,Pa=0,Zn=[],eo=0,Xr=null,jo=1,Ho="";function Fr(e,t){El[Ll++]=Pa,El[Ll++]=Ta,Ta=e,Pa=t}function Nm(e,t,n){Zn[eo++]=jo,Zn[eo++]=Ho,Zn[eo++]=Xr,Xr=e;var o=jo;e=Ho;var r=32-go(o)-1;o&=~(1<<r),n+=1;var l=32-go(t)+r;if(30<l){var i=r-r%5;l=(o&(1<<i)-1).toString(32),o>>=i,r-=i,jo=1<<32-go(t)+r|n<<r|o,Ho=l+e}else jo=1<<l|n<<r|o,Ho=e}function qu(e){e.return!==null&&(Fr(e,1),Nm(e,1,0))}function Ku(e){for(;e===Ta;)Ta=El[--Ll],El[Ll]=null,Pa=El[--Ll],El[Ll]=null;for(;e===Xr;)Xr=Zn[--eo],Zn[eo]=null,Ho=Zn[--eo],Zn[eo]=null,jo=Zn[--eo],Zn[eo]=null}var Wn=null,Fn=null,It=!1,mo=null;function Im(e,t){var n=to(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ip(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Wn=e,Fn=_r(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Wn=e,Fn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xr!==null?{id:jo,overflow:Ho}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=to(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Wn=e,Fn=null,!0):!1;default:return!1}}function pu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mu(e){if(It){var t=Fn;if(t){var n=t;if(!ip(e,t)){if(pu(e))throw Error(X(418));t=_r(n.nextSibling);var o=Wn;t&&ip(e,t)?Im(o,n):(e.flags=e.flags&-4097|2,It=!1,Wn=e)}}else{if(pu(e))throw Error(X(418));e.flags=e.flags&-4097|2,It=!1,Wn=e}}}function sp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Wn=e}function sa(e){if(e!==Wn)return!1;if(!It)return sp(e),It=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uu(e.type,e.memoizedProps)),t&&(t=Fn)){if(pu(e))throw $m(),Error(X(418));for(;t;)Im(e,t),t=_r(t.nextSibling)}if(sp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fn=_r(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fn=null}}else Fn=Wn?_r(e.stateNode.nextSibling):null;return!0}function $m(){for(var e=Fn;e;)e=_r(e.nextSibling)}function Fl(){Fn=Wn=null,It=!1}function Ju(e){mo===null?mo=[e]:mo.push(e)}var _5=Go.ReactCurrentBatchConfig;function bi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(X(309));var o=n.stateNode}if(!o)throw Error(X(147,e));var r=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=r.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(X(284));if(!n._owner)throw Error(X(290,e))}return e}function aa(e,t){throw e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ap(e){var t=e._init;return t(e._payload)}function Rm(e){function t(x,b){if(e){var w=x.deletions;w===null?(x.deletions=[b],x.flags|=16):w.push(b)}}function n(x,b){if(!e)return null;for(;b!==null;)t(x,b),b=b.sibling;return null}function o(x,b){for(x=new Map;b!==null;)b.key!==null?x.set(b.key,b):x.set(b.index,b),b=b.sibling;return x}function r(x,b){return x=mr(x,b),x.index=0,x.sibling=null,x}function l(x,b,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<b?(x.flags|=2,b):w):(x.flags|=2,b)):(x.flags|=1048576,b)}function i(x){return e&&x.alternate===null&&(x.flags|=2),x}function s(x,b,w,p){return b===null||b.tag!==6?(b=Fd(w,x.mode,p),b.return=x,b):(b=r(b,w),b.return=x,b)}function a(x,b,w,p){var D=w.type;return D===wl?m(x,b,w.props.children,p,w.key):b!==null&&(b.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===or&&ap(D)===b.type)?(p=r(b,w.props),p.ref=bi(x,b,w),p.return=x,p):(p=wa(w.type,w.key,w.props,null,x.mode,p),p.ref=bi(x,b,w),p.return=x,p)}function u(x,b,w,p){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=Wd(w,x.mode,p),b.return=x,b):(b=r(b,w.children||[]),b.return=x,b)}function m(x,b,w,p,D){return b===null||b.tag!==7?(b=Qr(w,x.mode,p,D),b.return=x,b):(b=r(b,w),b.return=x,b)}function f(x,b,w){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Fd(""+b,x.mode,w),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Vs:return w=wa(b.type,b.key,b.props,null,x.mode,w),w.ref=bi(x,null,b),w.return=x,w;case vl:return b=Wd(b,x.mode,w),b.return=x,b;case or:var p=b._init;return f(x,p(b._payload),w)}if(Ei(b)||yi(b))return b=Qr(b,x.mode,w,null),b.return=x,b;aa(x,b)}return null}function h(x,b,w,p){var D=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return D!==null?null:s(x,b,""+w,p);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Vs:return w.key===D?a(x,b,w,p):null;case vl:return w.key===D?u(x,b,w,p):null;case or:return D=w._init,h(x,b,D(w._payload),p)}if(Ei(w)||yi(w))return D!==null?null:m(x,b,w,p,null);aa(x,w)}return null}function C(x,b,w,p,D){if(typeof p=="string"&&p!==""||typeof p=="number")return x=x.get(w)||null,s(b,x,""+p,D);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vs:return x=x.get(p.key===null?w:p.key)||null,a(b,x,p,D);case vl:return x=x.get(p.key===null?w:p.key)||null,u(b,x,p,D);case or:var j=p._init;return C(x,b,w,j(p._payload),D)}if(Ei(p)||yi(p))return x=x.get(w)||null,m(b,x,p,D,null);aa(b,p)}return null}function k(x,b,w,p){for(var D=null,j=null,P=b,G=b=0,O=null;P!==null&&G<w.length;G++){P.index>G?(O=P,P=null):O=P.sibling;var K=h(x,P,w[G],p);if(K===null){P===null&&(P=O);break}e&&P&&K.alternate===null&&t(x,P),b=l(K,b,G),j===null?D=K:j.sibling=K,j=K,P=O}if(G===w.length)return n(x,P),It&&Fr(x,G),D;if(P===null){for(;G<w.length;G++)P=f(x,w[G],p),P!==null&&(b=l(P,b,G),j===null?D=P:j.sibling=P,j=P);return It&&Fr(x,G),D}for(P=o(x,P);G<w.length;G++)O=C(P,x,G,w[G],p),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?G:O.key),b=l(O,b,G),j===null?D=O:j.sibling=O,j=O);return e&&P.forEach(function(re){return t(x,re)}),It&&Fr(x,G),D}function L(x,b,w,p){var D=yi(w);if(typeof D!="function")throw Error(X(150));if(w=D.call(w),w==null)throw Error(X(151));for(var j=D=null,P=b,G=b=0,O=null,K=w.next();P!==null&&!K.done;G++,K=w.next()){P.index>G?(O=P,P=null):O=P.sibling;var re=h(x,P,K.value,p);if(re===null){P===null&&(P=O);break}e&&P&&re.alternate===null&&t(x,P),b=l(re,b,G),j===null?D=re:j.sibling=re,j=re,P=O}if(K.done)return n(x,P),It&&Fr(x,G),D;if(P===null){for(;!K.done;G++,K=w.next())K=f(x,K.value,p),K!==null&&(b=l(K,b,G),j===null?D=K:j.sibling=K,j=K);return It&&Fr(x,G),D}for(P=o(x,P);!K.done;G++,K=w.next())K=C(P,x,G,K.value,p),K!==null&&(e&&K.alternate!==null&&P.delete(K.key===null?G:K.key),b=l(K,b,G),j===null?D=K:j.sibling=K,j=K);return e&&P.forEach(function(J){return t(x,J)}),It&&Fr(x,G),D}function R(x,b,w,p){if(typeof w=="object"&&w!==null&&w.type===wl&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Vs:e:{for(var D=w.key,j=b;j!==null;){if(j.key===D){if(D=w.type,D===wl){if(j.tag===7){n(x,j.sibling),b=r(j,w.props.children),b.return=x,x=b;break e}}else if(j.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===or&&ap(D)===j.type){n(x,j.sibling),b=r(j,w.props),b.ref=bi(x,j,w),b.return=x,x=b;break e}n(x,j);break}else t(x,j);j=j.sibling}w.type===wl?(b=Qr(w.props.children,x.mode,p,w.key),b.return=x,x=b):(p=wa(w.type,w.key,w.props,null,x.mode,p),p.ref=bi(x,b,w),p.return=x,x=p)}return i(x);case vl:e:{for(j=w.key;b!==null;){if(b.key===j)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){n(x,b.sibling),b=r(b,w.children||[]),b.return=x,x=b;break e}else{n(x,b);break}else t(x,b);b=b.sibling}b=Wd(w,x.mode,p),b.return=x,x=b}return i(x);case or:return j=w._init,R(x,b,j(w._payload),p)}if(Ei(w))return k(x,b,w,p);if(yi(w))return L(x,b,w,p);aa(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,b!==null&&b.tag===6?(n(x,b.sibling),b=r(b,w),b.return=x,x=b):(n(x,b),b=Fd(w,x.mode,p),b.return=x,x=b),i(x)):n(x,b)}return R}var Wl=Rm(!0),Tm=Rm(!1),Da=vr(null),Ba=null,Nl=null,Zu=null;function e_(){Zu=Nl=Ba=null}function t_(e){var t=Da.current;Et(Da),e._currentValue=t}function gu(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Bl(e,t){Ba=e,Zu=Nl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(In=!0),e.firstContext=null)}function oo(e){var t=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:t,next:null},Nl===null){if(Ba===null)throw Error(X(308));Nl=e,Ba.dependencies={lanes:0,firstContext:e}}else Nl=Nl.next=e;return t}var Hr=null;function n_(e){Hr===null?Hr=[e]:Hr.push(e)}function Pm(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,n_(t)):(n.next=r.next,r.next=n),t.interleaved=n,Vo(e,o)}function Vo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function o_(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Uo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Ze&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,Vo(e,n)}return r=o.interleaved,r===null?(t.next=t,n_(o)):(t.next=r.next,r.next=t),o.interleaved=t,Vo(e,n)}function pa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ju(e,n)}}function cp(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?r=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?r=l=t:l=l.next=t}else r=l=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,o){var r=e.updateQueue;rr=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var a=s,u=a.next;a.next=null,i===null?l=u:i.next=u,i=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=a))}if(l!==null){var f=r.baseState;i=0,m=u=a=null,s=l;do{var h=s.lane,C=s.eventTime;if((o&h)===h){m!==null&&(m=m.next={eventTime:C,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,L=s;switch(h=t,C=n,L.tag){case 1:if(k=L.payload,typeof k=="function"){f=k.call(C,f,h);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=L.payload,h=typeof k=="function"?k.call(C,f,h):k,h==null)break e;f=Tt({},f,h);break e;case 2:rr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else C={eventTime:C,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=C,a=f):m=m.next=C,i|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(m===null&&(a=f),r.baseState=a,r.firstBaseUpdate=u,r.lastBaseUpdate=m,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else l===null&&(r.shared.lanes=0);qr|=i,e.lanes=i,e.memoizedState=f}}function dp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(X(191,r));r.call(o)}}}var ls={},$o=vr(ls),qi=vr(ls),Ki=vr(ls);function Ur(e){if(e===ls)throw Error(X(174));return e}function r_(e,t){switch(kt(Ki,t),kt(qi,e),kt($o,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kd(t,e)}Et($o),kt($o,t)}function jl(){Et($o),Et(qi),Et(Ki)}function Bm(e){Ur(Ki.current);var t=Ur($o.current),n=Kd(t,e.type);t!==n&&(kt(qi,e),kt($o,n))}function l_(e){qi.current===e&&(Et($o),Et(qi))}var $t=vr(0);function Oa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pd=[];function i_(){for(var e=0;e<Pd.length;e++)Pd[e]._workInProgressVersionPrimary=null;Pd.length=0}var ma=Go.ReactCurrentDispatcher,Dd=Go.ReactCurrentBatchConfig,Gr=0,Rt=null,Qt=null,Xt=null,Aa=!1,Di=!1,Ji=0,f5=0;function un(){throw Error(X(321))}function s_(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xo(e[n],t[n]))return!1;return!0}function a_(e,t,n,o,r,l){if(Gr=l,Rt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ma.current=e===null||e.memoizedState===null?g5:y5,e=n(o,r),Di){l=0;do{if(Di=!1,Ji=0,25<=l)throw Error(X(301));l+=1,Xt=Qt=null,t.updateQueue=null,ma.current=x5,e=n(o,r)}while(Di)}if(ma.current=Fa,t=Qt!==null&&Qt.next!==null,Gr=0,Xt=Qt=Rt=null,Aa=!1,t)throw Error(X(300));return e}function c_(){var e=Ji!==0;return Ji=0,e}function Lo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Rt.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function ro(){if(Qt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var t=Xt===null?Rt.memoizedState:Xt.next;if(t!==null)Xt=t,Qt=e;else{if(e===null)throw Error(X(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},Xt===null?Rt.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function Zi(e,t){return typeof t=="function"?t(e):t}function Bd(e){var t=ro(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var o=Qt,r=o.baseQueue,l=n.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}o.baseQueue=r=l,n.pending=null}if(r!==null){l=r.next,o=o.baseState;var s=i=null,a=null,u=l;do{var m=u.lane;if((Gr&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,i=o):a=a.next=f,Rt.lanes|=m,qr|=m}u=u.next}while(u!==null&&u!==l);a===null?i=o:a.next=s,xo(o,t.memoizedState)||(In=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=a,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do l=r.lane,Rt.lanes|=l,qr|=l,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zd(e){var t=ro(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,l=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do l=e(l,i.action),i=i.next;while(i!==r);xo(l,t.memoizedState)||(In=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,o]}function zm(){}function Om(e,t){var n=Rt,o=ro(),r=t(),l=!xo(o.memoizedState,r);if(l&&(o.memoizedState=r,In=!0),o=o.queue,d_(Wm.bind(null,n,o,e),[e]),o.getSnapshot!==t||l||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,es(9,Fm.bind(null,n,o,r,t),void 0,null),Gt===null)throw Error(X(349));Gr&30||Am(n,t,r)}return r}function Am(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Rt.updateQueue,t===null?(t={lastEffect:null,stores:null},Rt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fm(e,t,n,o){t.value=n,t.getSnapshot=o,jm(t)&&Hm(e)}function Wm(e,t,n){return n(function(){jm(t)&&Hm(e)})}function jm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xo(e,n)}catch{return!0}}function Hm(e){var t=Vo(e,1);t!==null&&yo(t,e,1,-1)}function up(e){var t=Lo();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=m5.bind(null,Rt,e),[t.memoizedState,e]}function es(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Rt.updateQueue,t===null?(t={lastEffect:null,stores:null},Rt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Um(){return ro().memoizedState}function ga(e,t,n,o){var r=Lo();Rt.flags|=e,r.memoizedState=es(1|t,n,void 0,o===void 0?null:o)}function Ja(e,t,n,o){var r=ro();o=o===void 0?null:o;var l=void 0;if(Qt!==null){var i=Qt.memoizedState;if(l=i.destroy,o!==null&&s_(o,i.deps)){r.memoizedState=es(t,n,l,o);return}}Rt.flags|=e,r.memoizedState=es(1|t,n,l,o)}function _p(e,t){return ga(8390656,8,e,t)}function d_(e,t){return Ja(2048,8,e,t)}function Ym(e,t){return Ja(4,2,e,t)}function Qm(e,t){return Ja(4,4,e,t)}function Vm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xm(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,Vm.bind(null,t,e),n)}function u_(){}function Gm(e,t){var n=ro();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&s_(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function qm(e,t){var n=ro();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&s_(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Km(e,t,n){return Gr&21?(xo(n,t)||(n=nm(),Rt.lanes|=n,qr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,In=!0),e.memoizedState=n)}function h5(e,t){var n=ct;ct=n!==0&&4>n?n:4,e(!0);var o=Dd.transition;Dd.transition={};try{e(!1),t()}finally{ct=n,Dd.transition=o}}function Jm(){return ro().memoizedState}function p5(e,t,n){var o=pr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Zm(e))e0(t,n);else if(n=Pm(e,t,n,o),n!==null){var r=kn();yo(n,e,o,r),t0(n,t,o)}}function m5(e,t,n){var o=pr(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zm(e))e0(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(r.hasEagerState=!0,r.eagerState=s,xo(s,i)){var a=t.interleaved;a===null?(r.next=r,n_(t)):(r.next=a.next,a.next=r),t.interleaved=r;return}}catch{}finally{}n=Pm(e,t,r,o),n!==null&&(r=kn(),yo(n,e,o,r),t0(n,t,o))}}function Zm(e){var t=e.alternate;return e===Rt||t!==null&&t===Rt}function e0(e,t){Di=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t0(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ju(e,n)}}var Fa={readContext:oo,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},g5={readContext:oo,useCallback:function(e,t){return Lo().memoizedState=[e,t===void 0?null:t],e},useContext:oo,useEffect:_p,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ga(4194308,4,Vm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return ga(4,2,e,t)},useMemo:function(e,t){var n=Lo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Lo();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=p5.bind(null,Rt,e),[o.memoizedState,e]},useRef:function(e){var t=Lo();return e={current:e},t.memoizedState=e},useState:up,useDebugValue:u_,useDeferredValue:function(e){return Lo().memoizedState=e},useTransition:function(){var e=up(!1),t=e[0];return e=h5.bind(null,e[1]),Lo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Rt,r=Lo();if(It){if(n===void 0)throw Error(X(407));n=n()}else{if(n=t(),Gt===null)throw Error(X(349));Gr&30||Am(o,t,n)}r.memoizedState=n;var l={value:n,getSnapshot:t};return r.queue=l,_p(Wm.bind(null,o,l,e),[e]),o.flags|=2048,es(9,Fm.bind(null,o,l,n,t),void 0,null),n},useId:function(){var e=Lo(),t=Gt.identifierPrefix;if(It){var n=Ho,o=jo;n=(o&~(1<<32-go(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=f5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y5={readContext:oo,useCallback:Gm,useContext:oo,useEffect:d_,useImperativeHandle:Xm,useInsertionEffect:Ym,useLayoutEffect:Qm,useMemo:qm,useReducer:Bd,useRef:Um,useState:function(){return Bd(Zi)},useDebugValue:u_,useDeferredValue:function(e){var t=ro();return Km(t,Qt.memoizedState,e)},useTransition:function(){var e=Bd(Zi)[0],t=ro().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Om,useId:Jm,unstable_isNewReconciler:!1},x5={readContext:oo,useCallback:Gm,useContext:oo,useEffect:d_,useImperativeHandle:Xm,useInsertionEffect:Ym,useLayoutEffect:Qm,useMemo:qm,useReducer:zd,useRef:Um,useState:function(){return zd(Zi)},useDebugValue:u_,useDeferredValue:function(e){var t=ro();return Qt===null?t.memoizedState=e:Km(t,Qt.memoizedState,e)},useTransition:function(){var e=zd(Zi)[0],t=ro().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Om,useId:Jm,unstable_isNewReconciler:!1};function ho(e,t){if(e&&e.defaultProps){t=Tt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Tt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Za={isMounted:function(e){return(e=e._reactInternals)?Zr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=kn(),r=pr(e),l=Uo(o,r);l.payload=t,n!=null&&(l.callback=n),t=fr(e,l,r),t!==null&&(yo(t,e,r,o),pa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=kn(),r=pr(e),l=Uo(o,r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=fr(e,l,r),t!==null&&(yo(t,e,r,o),pa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kn(),o=pr(e),r=Uo(n,o);r.tag=2,t!=null&&(r.callback=t),t=fr(e,r,o),t!==null&&(yo(t,e,o,n),pa(t,e,o))}};function fp(e,t,n,o,r,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,i):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,o)||!Qi(r,l):!0}function n0(e,t,n){var o=!1,r=yr,l=t.contextType;return typeof l=="object"&&l!==null?l=oo(l):(r=Rn(t)?Vr:hn.current,o=t.contextTypes,l=(o=o!=null)?Al(e,r):yr),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Za,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),t}function hp(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Za.enqueueReplaceState(t,t.state,null)}function xu(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},o_(e);var l=t.contextType;typeof l=="object"&&l!==null?r.context=oo(l):(l=Rn(t)?Vr:hn.current,r.context=Al(e,l)),r.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(yu(e,t,l,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Za.enqueueReplaceState(r,r.state,null),za(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Hl(e,t){try{var n="",o=t;do n+=G1(o),o=o.return;while(o);var r=n}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:r,digest:null}}function Od(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function vu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var v5=typeof WeakMap=="function"?WeakMap:Map;function o0(e,t,n){n=Uo(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ja||(ja=!0,Iu=o),vu(e,t)},n}function r0(e,t,n){n=Uo(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){vu(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){vu(e,t),typeof o!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function pp(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new v5;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=P5.bind(null,e,t,n),t.then(e,e))}function mp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gp(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Uo(-1,1),t.tag=2,fr(n,t,1))),n.lanes|=1),e)}var w5=Go.ReactCurrentOwner,In=!1;function bn(e,t,n,o){t.child=e===null?Tm(t,null,n,o):Wl(t,e.child,n,o)}function yp(e,t,n,o,r){n=n.render;var l=t.ref;return Bl(t,r),o=a_(e,t,n,o,l,r),n=c_(),e!==null&&!In?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xo(e,t,r)):(It&&n&&qu(t),t.flags|=1,bn(e,t,o,r),t.child)}function xp(e,t,n,o,r){if(e===null){var l=n.type;return typeof l=="function"&&!x_(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,l0(e,t,l,o,r)):(e=wa(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&r)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(i,o)&&e.ref===t.ref)return Xo(e,t,r)}return t.flags|=1,e=mr(l,o),e.ref=t.ref,e.return=t,t.child=e}function l0(e,t,n,o,r){if(e!==null){var l=e.memoizedProps;if(Qi(l,o)&&e.ref===t.ref)if(In=!1,t.pendingProps=o=l,(e.lanes&r)!==0)e.flags&131072&&(In=!0);else return t.lanes=e.lanes,Xo(e,t,r)}return wu(e,t,n,o,r)}function i0(e,t,n){var o=t.pendingProps,r=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt($l,An),An|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,kt($l,An),An|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:n,kt($l,An),An|=o}else l!==null?(o=l.baseLanes|n,t.memoizedState=null):o=n,kt($l,An),An|=o;return bn(e,t,r,n),t.child}function s0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wu(e,t,n,o,r){var l=Rn(n)?Vr:hn.current;return l=Al(t,l),Bl(t,r),n=a_(e,t,n,o,l,r),o=c_(),e!==null&&!In?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xo(e,t,r)):(It&&o&&qu(t),t.flags|=1,bn(e,t,n,r),t.child)}function vp(e,t,n,o,r){if(Rn(n)){var l=!0;Ra(t)}else l=!1;if(Bl(t,r),t.stateNode===null)ya(e,t),n0(t,n,o),xu(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=oo(u):(u=Rn(n)?Vr:hn.current,u=Al(t,u));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==o||a!==u)&&hp(t,i,o,u),rr=!1;var h=t.memoizedState;i.state=h,za(t,o,i,r),a=t.memoizedState,s!==o||h!==a||$n.current||rr?(typeof m=="function"&&(yu(t,n,m,o),a=t.memoizedState),(s=rr||fp(t,n,s,o,h,a,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=a),i.props=o,i.state=a,i.context=u,o=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Dm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ho(t.type,s),i.props=u,f=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=oo(a):(a=Rn(n)?Vr:hn.current,a=Al(t,a));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||h!==a)&&hp(t,i,o,a),rr=!1,h=t.memoizedState,i.state=h,za(t,o,i,r);var k=t.memoizedState;s!==f||h!==k||$n.current||rr?(typeof C=="function"&&(yu(t,n,C,o),k=t.memoizedState),(u=rr||fp(t,n,u,o,h,k,a)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,k,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,k,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=k),i.props=o,i.state=k,i.context=a,o=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),o=!1)}return bu(e,t,n,o,l,r)}function bu(e,t,n,o,r,l){s0(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&lp(t,n,!1),Xo(e,t,l);o=t.stateNode,w5.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Wl(t,e.child,null,l),t.child=Wl(t,null,s,l)):bn(e,t,s,l),t.memoizedState=o.state,r&&lp(t,n,!0),t.child}function a0(e){var t=e.stateNode;t.pendingContext?rp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rp(e,t.context,!1),r_(e,t.containerInfo)}function wp(e,t,n,o,r){return Fl(),Ju(r),t.flags|=256,bn(e,t,n,o),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function c0(e,t,n){var o=t.pendingProps,r=$t.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),kt($t,r&1),e===null)return mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,l?(o=t.mode,l=t.child,i={mode:"hidden",children:i},!(o&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=nc(i,o,0,null),e=Qr(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Cu(n),t.memoizedState=ku,e):__(t,i));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return b5(e,t,i,o,s,r,n);if(l){l=o.fallback,i=t.mode,r=e.child,s=r.sibling;var a={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=a,t.deletions=null):(o=mr(r,a),o.subtreeFlags=r.subtreeFlags&14680064),s!==null?l=mr(s,l):(l=Qr(l,i,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,i=e.child.memoizedState,i=i===null?Cu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ku,o}return l=e.child,e=l.sibling,o=mr(l,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function __(e,t){return t=nc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,n,o){return o!==null&&Ju(o),Wl(t,e.child,null,n),e=__(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b5(e,t,n,o,r,l,i){if(n)return t.flags&256?(t.flags&=-257,o=Od(Error(X(422))),ca(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,r=t.mode,o=nc({mode:"visible",children:o.children},r,0,null),l=Qr(l,r,i,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,t.mode&1&&Wl(t,e.child,null,i),t.child.memoizedState=Cu(i),t.memoizedState=ku,l);if(!(t.mode&1))return ca(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var s=o.dgst;return o=s,l=Error(X(419)),o=Od(l,o,void 0),ca(e,t,i,o)}if(s=(i&e.childLanes)!==0,In||s){if(o=Gt,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,Vo(e,r),yo(o,e,r,-1))}return y_(),o=Od(Error(X(421))),ca(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=D5.bind(null,e),r._reactRetry=t,null):(e=l.treeContext,Fn=_r(r.nextSibling),Wn=t,It=!0,mo=null,e!==null&&(Zn[eo++]=jo,Zn[eo++]=Ho,Zn[eo++]=Xr,jo=e.id,Ho=e.overflow,Xr=t),t=__(t,o.children),t.flags|=4096,t)}function bp(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),gu(e.return,t,n)}function Ad(e,t,n,o,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=n,l.tailMode=r)}function d0(e,t,n){var o=t.pendingProps,r=o.revealOrder,l=o.tail;if(bn(e,t,o.children,n),o=$t.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bp(e,n,t);else if(e.tag===19)bp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(kt($t,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Oa(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ad(t,!1,r,n,l);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Oa(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ad(t,!0,n,null,l);break;case"together":Ad(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,n=mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function k5(e,t,n){switch(t.tag){case 3:a0(t),Fl();break;case 5:Bm(t);break;case 1:Rn(t.type)&&Ra(t);break;case 4:r_(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;kt(Da,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(kt($t,$t.current&1),t.flags|=128,null):n&t.child.childLanes?c0(e,t,n):(kt($t,$t.current&1),e=Xo(e,t,n),e!==null?e.sibling:null);kt($t,$t.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return d0(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),kt($t,$t.current),o)break;return null;case 22:case 23:return t.lanes=0,i0(e,t,n)}return Xo(e,t,n)}var u0,Su,_0,f0;u0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Su=function(){};_0=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Ur($o.current);var l=null;switch(n){case"input":r=Vd(e,r),o=Vd(e,o),l=[];break;case"select":r=Tt({},r,{value:void 0}),o=Tt({},o,{value:void 0}),l=[];break;case"textarea":r=qd(e,r),o=qd(e,o),l=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ia)}Jd(n,o);var i;n=null;for(u in r)if(!o.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ai.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in o){var a=o[u];if(s=r!=null?r[u]:void 0,o.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Mt("scroll",e),l||s===a||(l=[])):(l=l||[]).push(u,a))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};f0=function(e,t,n,o){n!==o&&(t.flags|=4)};function ki(e,t){if(!It)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _n(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function C5(e,t,n){var o=t.pendingProps;switch(Ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(t),null;case 1:return Rn(t.type)&&$a(),_n(t),null;case 3:return o=t.stateNode,jl(),Et($n),Et(hn),i_(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mo!==null&&(Tu(mo),mo=null))),Su(e,t),_n(t),null;case 5:l_(t);var r=Ur(Ki.current);if(n=t.type,e!==null&&t.stateNode!=null)_0(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(X(166));return _n(t),null}if(e=Ur($o.current),sa(t)){o=t.stateNode,n=t.type;var l=t.memoizedProps;switch(o[No]=t,o[Gi]=l,e=(t.mode&1)!==0,n){case"dialog":Mt("cancel",o),Mt("close",o);break;case"iframe":case"object":case"embed":Mt("load",o);break;case"video":case"audio":for(r=0;r<Ni.length;r++)Mt(Ni[r],o);break;case"source":Mt("error",o);break;case"img":case"image":case"link":Mt("error",o),Mt("load",o);break;case"details":Mt("toggle",o);break;case"input":Ih(o,l),Mt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},Mt("invalid",o);break;case"textarea":Rh(o,l),Mt("invalid",o)}Jd(n,l),r=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?o.textContent!==s&&(l.suppressHydrationWarning!==!0&&ia(o.textContent,s,e),r=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&ia(o.textContent,s,e),r=["children",""+s]):Ai.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Mt("scroll",o)}switch(n){case"input":Xs(o),$h(o,l,!0);break;case"textarea":Xs(o),Th(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Ia)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[No]=t,e[Gi]=o,u0(e,t,!1,!1),t.stateNode=e;e:{switch(i=Zd(n,o),n){case"dialog":Mt("cancel",e),Mt("close",e),r=o;break;case"iframe":case"object":case"embed":Mt("load",e),r=o;break;case"video":case"audio":for(r=0;r<Ni.length;r++)Mt(Ni[r],e);r=o;break;case"source":Mt("error",e),r=o;break;case"img":case"image":case"link":Mt("error",e),Mt("load",e),r=o;break;case"details":Mt("toggle",e),r=o;break;case"input":Ih(e,o),r=Vd(e,o),Mt("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=Tt({},o,{value:void 0}),Mt("invalid",e);break;case"textarea":Rh(e,o),r=qd(e,o),Mt("invalid",e);break;default:r=o}Jd(n,r),s=r;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Up(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&jp(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fi(e,a):typeof a=="number"&&Fi(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ai.hasOwnProperty(l)?a!=null&&l==="onScroll"&&Mt("scroll",e):a!=null&&Bu(e,l,a,i))}switch(n){case"input":Xs(e),$h(e,o,!1);break;case"textarea":Xs(e),Th(e);break;case"option":o.value!=null&&e.setAttribute("value",""+gr(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Rl(e,!!o.multiple,l,!1):o.defaultValue!=null&&Rl(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ia)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _n(t),null;case 6:if(e&&t.stateNode!=null)f0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(X(166));if(n=Ur(Ki.current),Ur($o.current),sa(t)){if(o=t.stateNode,n=t.memoizedProps,o[No]=t,(l=o.nodeValue!==n)&&(e=Wn,e!==null))switch(e.tag){case 3:ia(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(o.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[No]=t,t.stateNode=o}return _n(t),null;case 13:if(Et($t),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(It&&Fn!==null&&t.mode&1&&!(t.flags&128))$m(),Fl(),t.flags|=98560,l=!1;else if(l=sa(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(X(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(X(317));l[No]=t}else Fl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_n(t),l=!1}else mo!==null&&(Tu(mo),mo=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||$t.current&1?Vt===0&&(Vt=3):y_())),t.updateQueue!==null&&(t.flags|=4),_n(t),null);case 4:return jl(),Su(e,t),e===null&&Vi(t.stateNode.containerInfo),_n(t),null;case 10:return t_(t.type._context),_n(t),null;case 17:return Rn(t.type)&&$a(),_n(t),null;case 19:if(Et($t),l=t.memoizedState,l===null)return _n(t),null;if(o=(t.flags&128)!==0,i=l.rendering,i===null)if(o)ki(l,!1);else{if(Vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Oa(e),i!==null){for(t.flags|=128,ki(l,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)l=n,e=o,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return kt($t,$t.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ot()>Ul&&(t.flags|=128,o=!0,ki(l,!1),t.lanes=4194304)}else{if(!o)if(e=Oa(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ki(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!It)return _n(t),null}else 2*Ot()-l.renderingStartTime>Ul&&n!==1073741824&&(t.flags|=128,o=!0,ki(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ot(),t.sibling=null,n=$t.current,kt($t,o?n&1|2:n&1),t):(_n(t),null);case 22:case 23:return g_(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?An&1073741824&&(_n(t),t.subtreeFlags&6&&(t.flags|=8192)):_n(t),null;case 24:return null;case 25:return null}throw Error(X(156,t.tag))}function S5(e,t){switch(Ku(t),t.tag){case 1:return Rn(t.type)&&$a(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jl(),Et($n),Et(hn),i_(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return l_(t),null;case 13:if(Et($t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));Fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Et($t),null;case 4:return jl(),null;case 10:return t_(t.type._context),null;case 22:case 23:return g_(),null;case 24:return null;default:return null}}var da=!1,fn=!1,M5=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Il(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Dt(e,t,o)}else n.current=null}function Mu(e,t,n){try{n()}catch(o){Dt(e,t,o)}}var kp=!1;function E5(e,t){if(cu=Ea,e=ym(),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,u=0,m=0,f=e,h=null;t:for(;;){for(var C;f!==n||r!==0&&f.nodeType!==3||(s=i+r),f!==l||o!==0&&f.nodeType!==3||(a=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(C=f.firstChild)!==null;)h=f,f=C;for(;;){if(f===e)break t;if(h===n&&++u===r&&(s=i),h===l&&++m===o&&(a=i),(C=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=C}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},Ea=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var L=k.memoizedProps,R=k.memoizedState,x=t.stateNode,b=x.getSnapshotBeforeUpdate(t.elementType===t.type?L:ho(t.type,L),R);x.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(p){Dt(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return k=kp,kp=!1,k}function Bi(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&Mu(t,n,l)}r=r.next}while(r!==o)}}function ec(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h0(e){var t=e.alternate;t!==null&&(e.alternate=null,h0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[No],delete t[Gi],delete t[fu],delete t[c5],delete t[d5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function p0(e){return e.tag===5||e.tag===3||e.tag===4}function Cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||p0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ia));else if(o!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Nu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Nu(e,t,n),e=e.sibling;e!==null;)Nu(e,t,n),e=e.sibling}var en=null,po=!1;function nr(e,t,n){for(n=n.child;n!==null;)m0(e,t,n),n=n.sibling}function m0(e,t,n){if(Io&&typeof Io.onCommitFiberUnmount=="function")try{Io.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:fn||Il(n,t);case 6:var o=en,r=po;en=null,nr(e,t,n),en=o,po=r,en!==null&&(po?(e=en,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(po?(e=en,n=n.stateNode,e.nodeType===8?Rd(e.parentNode,n):e.nodeType===1&&Rd(e,n),Ui(e)):Rd(en,n.stateNode));break;case 4:o=en,r=po,en=n.stateNode.containerInfo,po=!0,nr(e,t,n),en=o,po=r;break;case 0:case 11:case 14:case 15:if(!fn&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var l=r,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Mu(n,t,i),r=r.next}while(r!==o)}nr(e,t,n);break;case 1:if(!fn&&(Il(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){Dt(n,t,s)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(fn=(o=fn)||n.memoizedState!==null,nr(e,t,n),fn=o):nr(e,t,n);break;default:nr(e,t,n)}}function Sp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new M5),t.forEach(function(o){var r=B5.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function fo(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:en=s.stateNode,po=!1;break e;case 3:en=s.stateNode.containerInfo,po=!0;break e;case 4:en=s.stateNode.containerInfo,po=!0;break e}s=s.return}if(en===null)throw Error(X(160));m0(l,i,r),en=null,po=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(u){Dt(r,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)g0(t,e),t=t.sibling}function g0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fo(t,e),Eo(e),o&4){try{Bi(3,e,e.return),ec(3,e)}catch(L){Dt(e,e.return,L)}try{Bi(5,e,e.return)}catch(L){Dt(e,e.return,L)}}break;case 1:fo(t,e),Eo(e),o&512&&n!==null&&Il(n,n.return);break;case 5:if(fo(t,e),Eo(e),o&512&&n!==null&&Il(n,n.return),e.flags&32){var r=e.stateNode;try{Fi(r,"")}catch(L){Dt(e,e.return,L)}}if(o&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ap(r,l),Zd(s,i);var u=Zd(s,l);for(i=0;i<a.length;i+=2){var m=a[i],f=a[i+1];m==="style"?Up(r,f):m==="dangerouslySetInnerHTML"?jp(r,f):m==="children"?Fi(r,f):Bu(r,m,f,u)}switch(s){case"input":Xd(r,l);break;case"textarea":Fp(r,l);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?Rl(r,!!l.multiple,C,!1):h!==!!l.multiple&&(l.defaultValue!=null?Rl(r,!!l.multiple,l.defaultValue,!0):Rl(r,!!l.multiple,l.multiple?[]:"",!1))}r[Gi]=l}catch(L){Dt(e,e.return,L)}}break;case 6:if(fo(t,e),Eo(e),o&4){if(e.stateNode===null)throw Error(X(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(L){Dt(e,e.return,L)}}break;case 3:if(fo(t,e),Eo(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(t.containerInfo)}catch(L){Dt(e,e.return,L)}break;case 4:fo(t,e),Eo(e);break;case 13:fo(t,e),Eo(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(p_=Ot())),o&4&&Sp(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fn=(u=fn)||m,fo(t,e),fn=u):fo(t,e),Eo(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(fe=e,m=e.child;m!==null;){for(f=fe=m;fe!==null;){switch(h=fe,C=h.child,h.tag){case 0:case 11:case 14:case 15:Bi(4,h,h.return);break;case 1:Il(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){o=h,n=h.return;try{t=o,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(L){Dt(o,n,L)}}break;case 5:Il(h,h.return);break;case 22:if(h.memoizedState!==null){Ep(f);continue}}C!==null?(C.return=h,fe=C):Ep(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{r=f.stateNode,u?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Hp("display",i))}catch(L){Dt(e,e.return,L)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(L){Dt(e,e.return,L)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:fo(t,e),Eo(e),o&4&&Sp(e);break;case 21:break;default:fo(t,e),Eo(e)}}function Eo(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(p0(n)){var o=n;break e}n=n.return}throw Error(X(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Fi(r,""),o.flags&=-33);var l=Cp(e);Nu(e,l,r);break;case 3:case 4:var i=o.stateNode.containerInfo,s=Cp(e);Lu(e,s,i);break;default:throw Error(X(161))}}catch(a){Dt(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L5(e,t,n){fe=e,y0(e,t,n)}function y0(e,t,n){for(var o=(e.mode&1)!==0;fe!==null;){var r=fe,l=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||da;if(!i){var s=r.alternate,a=s!==null&&s.memoizedState!==null||fn;s=da;var u=fn;if(da=i,(fn=a)&&!u)for(fe=r;fe!==null;)i=fe,a=i.child,i.tag===22&&i.memoizedState!==null?Lp(r):a!==null?(a.return=i,fe=a):Lp(r);for(;l!==null;)fe=l,y0(l,t,n),l=l.sibling;fe=r,da=s,fn=u}Mp(e,t,n)}else r.subtreeFlags&8772&&l!==null?(l.return=r,fe=l):Mp(e,t,n)}}function Mp(e){for(;fe!==null;){var t=fe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fn||ec(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!fn)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:ho(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&dp(t,l,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dp(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Ui(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}fn||t.flags&512&&Eu(t)}catch(h){Dt(t,t.return,h)}}if(t===e){fe=null;break}if(n=t.sibling,n!==null){n.return=t.return,fe=n;break}fe=t.return}}function Ep(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,fe=n;break}fe=t.return}}function Lp(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ec(4,t)}catch(a){Dt(t,n,a)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(a){Dt(t,r,a)}}var l=t.return;try{Eu(t)}catch(a){Dt(t,l,a)}break;case 5:var i=t.return;try{Eu(t)}catch(a){Dt(t,i,a)}}}catch(a){Dt(t,t.return,a)}if(t===e){fe=null;break}var s=t.sibling;if(s!==null){s.return=t.return,fe=s;break}fe=t.return}}var N5=Math.ceil,Wa=Go.ReactCurrentDispatcher,f_=Go.ReactCurrentOwner,no=Go.ReactCurrentBatchConfig,Ze=0,Gt=null,Wt=null,tn=0,An=0,$l=vr(0),Vt=0,ts=null,qr=0,tc=0,h_=0,zi=null,Nn=null,p_=0,Ul=1/0,Fo=null,ja=!1,Iu=null,hr=null,ua=!1,ar=null,Ha=0,Oi=0,$u=null,xa=-1,va=0;function kn(){return Ze&6?Ot():xa!==-1?xa:xa=Ot()}function pr(e){return e.mode&1?Ze&2&&tn!==0?tn&-tn:_5.transition!==null?(va===0&&(va=nm()),va):(e=ct,e!==0||(e=window.event,e=e===void 0?16:cm(e.type)),e):1}function yo(e,t,n,o){if(50<Oi)throw Oi=0,$u=null,Error(X(185));ns(e,n,o),(!(Ze&2)||e!==Gt)&&(e===Gt&&(!(Ze&2)&&(tc|=n),Vt===4&&ir(e,tn)),Tn(e,o),n===1&&Ze===0&&!(t.mode&1)&&(Ul=Ot()+500,Ka&&wr()))}function Tn(e,t){var n=e.callbackNode;hy(e,t);var o=Ma(e,e===Gt?tn:0);if(o===0)n!==null&&Bh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Bh(n),t===1)e.tag===0?u5(Np.bind(null,e)):Lm(Np.bind(null,e)),s5(function(){!(Ze&6)&&wr()}),n=null;else{switch(om(o)){case 1:n=Wu;break;case 4:n=em;break;case 16:n=Sa;break;case 536870912:n=tm;break;default:n=Sa}n=M0(n,x0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function x0(e,t){if(xa=-1,va=0,Ze&6)throw Error(X(327));var n=e.callbackNode;if(zl()&&e.callbackNode!==n)return null;var o=Ma(e,e===Gt?tn:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ua(e,o);else{t=o;var r=Ze;Ze|=2;var l=w0();(Gt!==e||tn!==t)&&(Fo=null,Ul=Ot()+500,Yr(e,t));do try{R5();break}catch(s){v0(e,s)}while(!0);e_(),Wa.current=l,Ze=r,Wt!==null?t=0:(Gt=null,tn=0,t=Vt)}if(t!==0){if(t===2&&(r=ru(e),r!==0&&(o=r,t=Ru(e,r))),t===1)throw n=ts,Yr(e,0),ir(e,o),Tn(e,Ot()),n;if(t===6)ir(e,o);else{if(r=e.current.alternate,!(o&30)&&!I5(r)&&(t=Ua(e,o),t===2&&(l=ru(e),l!==0&&(o=l,t=Ru(e,l))),t===1))throw n=ts,Yr(e,0),ir(e,o),Tn(e,Ot()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(X(345));case 2:Wr(e,Nn,Fo);break;case 3:if(ir(e,o),(o&130023424)===o&&(t=p_+500-Ot(),10<t)){if(Ma(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){kn(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=_u(Wr.bind(null,e,Nn,Fo),t);break}Wr(e,Nn,Fo);break;case 4:if(ir(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-go(o);l=1<<i,i=t[i],i>r&&(r=i),o&=~l}if(o=r,o=Ot()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*N5(o/1960))-o,10<o){e.timeoutHandle=_u(Wr.bind(null,e,Nn,Fo),o);break}Wr(e,Nn,Fo);break;case 5:Wr(e,Nn,Fo);break;default:throw Error(X(329))}}}return Tn(e,Ot()),e.callbackNode===n?x0.bind(null,e):null}function Ru(e,t){var n=zi;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=Ua(e,t),e!==2&&(t=Nn,Nn=n,t!==null&&Tu(t)),e}function Tu(e){Nn===null?Nn=e:Nn.push.apply(Nn,e)}function I5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],l=r.getSnapshot;r=r.value;try{if(!xo(l(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ir(e,t){for(t&=~h_,t&=~tc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-go(t),o=1<<n;e[n]=-1,t&=~o}}function Np(e){if(Ze&6)throw Error(X(327));zl();var t=Ma(e,0);if(!(t&1))return Tn(e,Ot()),null;var n=Ua(e,t);if(e.tag!==0&&n===2){var o=ru(e);o!==0&&(t=o,n=Ru(e,o))}if(n===1)throw n=ts,Yr(e,0),ir(e,t),Tn(e,Ot()),n;if(n===6)throw Error(X(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wr(e,Nn,Fo),Tn(e,Ot()),null}function m_(e,t){var n=Ze;Ze|=1;try{return e(t)}finally{Ze=n,Ze===0&&(Ul=Ot()+500,Ka&&wr())}}function Kr(e){ar!==null&&ar.tag===0&&!(Ze&6)&&zl();var t=Ze;Ze|=1;var n=no.transition,o=ct;try{if(no.transition=null,ct=1,e)return e()}finally{ct=o,no.transition=n,Ze=t,!(Ze&6)&&wr()}}function g_(){An=$l.current,Et($l)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,i5(n)),Wt!==null)for(n=Wt.return;n!==null;){var o=n;switch(Ku(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&$a();break;case 3:jl(),Et($n),Et(hn),i_();break;case 5:l_(o);break;case 4:jl();break;case 13:Et($t);break;case 19:Et($t);break;case 10:t_(o.type._context);break;case 22:case 23:g_()}n=n.return}if(Gt=e,Wt=e=mr(e.current,null),tn=An=t,Vt=0,ts=null,h_=tc=qr=0,Nn=zi=null,Hr!==null){for(t=0;t<Hr.length;t++)if(n=Hr[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,l=n.pending;if(l!==null){var i=l.next;l.next=r,o.next=i}n.pending=o}Hr=null}return e}function v0(e,t){do{var n=Wt;try{if(e_(),ma.current=Fa,Aa){for(var o=Rt.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Aa=!1}if(Gr=0,Xt=Qt=Rt=null,Di=!1,Ji=0,f_.current=null,n===null||n.return===null){Vt=1,ts=t,Wt=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=tn,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=s,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=mp(i);if(C!==null){C.flags&=-257,gp(C,i,s,l,t),C.mode&1&&pp(l,u,t),t=C,a=u;var k=t.updateQueue;if(k===null){var L=new Set;L.add(a),t.updateQueue=L}else k.add(a);break e}else{if(!(t&1)){pp(l,u,t),y_();break e}a=Error(X(426))}}else if(It&&s.mode&1){var R=mp(i);if(R!==null){!(R.flags&65536)&&(R.flags|=256),gp(R,i,s,l,t),Ju(Hl(a,s));break e}}l=a=Hl(a,s),Vt!==4&&(Vt=2),zi===null?zi=[l]:zi.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var x=o0(l,a,t);cp(l,x);break e;case 1:s=a;var b=l.type,w=l.stateNode;if(!(l.flags&128)&&(typeof b.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(hr===null||!hr.has(w)))){l.flags|=65536,t&=-t,l.lanes|=t;var p=r0(l,s,t);cp(l,p);break e}}l=l.return}while(l!==null)}k0(n)}catch(D){t=D,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function w0(){var e=Wa.current;return Wa.current=Fa,e===null?Fa:e}function y_(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Gt===null||!(qr&268435455)&&!(tc&268435455)||ir(Gt,tn)}function Ua(e,t){var n=Ze;Ze|=2;var o=w0();(Gt!==e||tn!==t)&&(Fo=null,Yr(e,t));do try{$5();break}catch(r){v0(e,r)}while(!0);if(e_(),Ze=n,Wa.current=o,Wt!==null)throw Error(X(261));return Gt=null,tn=0,Vt}function $5(){for(;Wt!==null;)b0(Wt)}function R5(){for(;Wt!==null&&!ly();)b0(Wt)}function b0(e){var t=S0(e.alternate,e,An);e.memoizedProps=e.pendingProps,t===null?k0(e):Wt=t,f_.current=null}function k0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=S5(n,t),n!==null){n.flags&=32767,Wt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Vt=6,Wt=null;return}}else if(n=C5(n,t,An),n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Vt===0&&(Vt=5)}function Wr(e,t,n){var o=ct,r=no.transition;try{no.transition=null,ct=1,T5(e,t,n,o)}finally{no.transition=r,ct=o}return null}function T5(e,t,n,o){do zl();while(ar!==null);if(Ze&6)throw Error(X(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(X(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(py(e,l),e===Gt&&(Wt=Gt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,M0(Sa,function(){return zl(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=no.transition,no.transition=null;var i=ct;ct=1;var s=Ze;Ze|=4,f_.current=null,E5(e,n),g0(n,e),t5(du),Ea=!!cu,du=cu=null,e.current=n,L5(n,e,r),iy(),Ze=s,ct=i,no.transition=l}else e.current=n;if(ua&&(ua=!1,ar=e,Ha=r),l=e.pendingLanes,l===0&&(hr=null),cy(n.stateNode,o),Tn(e,Ot()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(ja)throw ja=!1,e=Iu,Iu=null,e;return Ha&1&&e.tag!==0&&zl(),l=e.pendingLanes,l&1?e===$u?Oi++:(Oi=0,$u=e):Oi=0,wr(),null}function zl(){if(ar!==null){var e=om(Ha),t=no.transition,n=ct;try{if(no.transition=null,ct=16>e?16:e,ar===null)var o=!1;else{if(e=ar,ar=null,Ha=0,Ze&6)throw Error(X(331));var r=Ze;for(Ze|=4,fe=e.current;fe!==null;){var l=fe,i=l.child;if(fe.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(fe=u;fe!==null;){var m=fe;switch(m.tag){case 0:case 11:case 15:Bi(8,m,l)}var f=m.child;if(f!==null)f.return=m,fe=f;else for(;fe!==null;){m=fe;var h=m.sibling,C=m.return;if(h0(m),m===u){fe=null;break}if(h!==null){h.return=C,fe=h;break}fe=C}}}var k=l.alternate;if(k!==null){var L=k.child;if(L!==null){k.child=null;do{var R=L.sibling;L.sibling=null,L=R}while(L!==null)}}fe=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,fe=i;else e:for(;fe!==null;){if(l=fe,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Bi(9,l,l.return)}var x=l.sibling;if(x!==null){x.return=l.return,fe=x;break e}fe=l.return}}var b=e.current;for(fe=b;fe!==null;){i=fe;var w=i.child;if(i.subtreeFlags&2064&&w!==null)w.return=i,fe=w;else e:for(i=b;fe!==null;){if(s=fe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ec(9,s)}}catch(D){Dt(s,s.return,D)}if(s===i){fe=null;break e}var p=s.sibling;if(p!==null){p.return=s.return,fe=p;break e}fe=s.return}}if(Ze=r,wr(),Io&&typeof Io.onPostCommitFiberRoot=="function")try{Io.onPostCommitFiberRoot(Qa,e)}catch{}o=!0}return o}finally{ct=n,no.transition=t}}return!1}function Ip(e,t,n){t=Hl(n,t),t=o0(e,t,1),e=fr(e,t,1),t=kn(),e!==null&&(ns(e,1,t),Tn(e,t))}function Dt(e,t,n){if(e.tag===3)Ip(e,e,n);else for(;t!==null;){if(t.tag===3){Ip(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hr===null||!hr.has(o))){e=Hl(n,e),e=r0(t,e,1),t=fr(t,e,1),e=kn(),t!==null&&(ns(t,1,e),Tn(t,e));break}}t=t.return}}function P5(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=kn(),e.pingedLanes|=e.suspendedLanes&n,Gt===e&&(tn&n)===n&&(Vt===4||Vt===3&&(tn&130023424)===tn&&500>Ot()-p_?Yr(e,0):h_|=n),Tn(e,t)}function C0(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var n=kn();e=Vo(e,t),e!==null&&(ns(e,t,n),Tn(e,n))}function D5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),C0(e,n)}function B5(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(X(314))}o!==null&&o.delete(t),C0(e,n)}var S0;S0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$n.current)In=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return In=!1,k5(e,t,n);In=!!(e.flags&131072)}else In=!1,It&&t.flags&1048576&&Nm(t,Pa,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ya(e,t),e=t.pendingProps;var r=Al(t,hn.current);Bl(t,n),r=a_(null,t,o,e,r,n);var l=c_();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rn(o)?(l=!0,Ra(t)):l=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,o_(t),r.updater=Za,t.stateNode=r,r._reactInternals=t,xu(t,o,e,n),t=bu(null,t,o,!0,l,n)):(t.tag=0,It&&l&&qu(t),bn(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ya(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=O5(o),e=ho(o,e),r){case 0:t=wu(null,t,o,e,n);break e;case 1:t=vp(null,t,o,e,n);break e;case 11:t=yp(null,t,o,e,n);break e;case 14:t=xp(null,t,o,ho(o.type,e),n);break e}throw Error(X(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ho(o,r),wu(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ho(o,r),vp(e,t,o,r,n);case 3:e:{if(a0(t),e===null)throw Error(X(387));o=t.pendingProps,l=t.memoizedState,r=l.element,Dm(e,t),za(t,o,null,n);var i=t.memoizedState;if(o=i.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){r=Hl(Error(X(423)),t),t=wp(e,t,o,n,r);break e}else if(o!==r){r=Hl(Error(X(424)),t),t=wp(e,t,o,n,r);break e}else for(Fn=_r(t.stateNode.containerInfo.firstChild),Wn=t,It=!0,mo=null,n=Tm(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fl(),o===r){t=Xo(e,t,n);break e}bn(e,t,o,n)}t=t.child}return t;case 5:return Bm(t),e===null&&mu(t),o=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,uu(o,r)?i=null:l!==null&&uu(o,l)&&(t.flags|=32),s0(e,t),bn(e,t,i,n),t.child;case 6:return e===null&&mu(t),null;case 13:return c0(e,t,n);case 4:return r_(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Wl(t,null,o,n):bn(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ho(o,r),yp(e,t,o,r,n);case 7:return bn(e,t,t.pendingProps,n),t.child;case 8:return bn(e,t,t.pendingProps.children,n),t.child;case 12:return bn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,l=t.memoizedProps,i=r.value,kt(Da,o._currentValue),o._currentValue=i,l!==null)if(xo(l.value,i)){if(l.children===r.children&&!$n.current){t=Xo(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===o){if(l.tag===1){a=Uo(-1,n&-n),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),gu(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(X(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),gu(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}bn(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Bl(t,n),r=oo(r),o=o(r),t.flags|=1,bn(e,t,o,n),t.child;case 14:return o=t.type,r=ho(o,t.pendingProps),r=ho(o.type,r),xp(e,t,o,r,n);case 15:return l0(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:ho(o,r),ya(e,t),t.tag=1,Rn(o)?(e=!0,Ra(t)):e=!1,Bl(t,n),n0(t,o,r),xu(t,o,r,n),bu(null,t,o,!0,e,n);case 19:return d0(e,t,n);case 22:return i0(e,t,n)}throw Error(X(156,t.tag))};function M0(e,t){return Zp(e,t)}function z5(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function to(e,t,n,o){return new z5(e,t,n,o)}function x_(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O5(e){if(typeof e=="function")return x_(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===Au)return 14}return 2}function mr(e,t){var n=e.alternate;return n===null?(n=to(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wa(e,t,n,o,r,l){var i=2;if(o=e,typeof e=="function")x_(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case wl:return Qr(n.children,r,l,t);case zu:i=8,r|=8;break;case Hd:return e=to(12,n,t,r|2),e.elementType=Hd,e.lanes=l,e;case Ud:return e=to(13,n,t,r),e.elementType=Ud,e.lanes=l,e;case Yd:return e=to(19,n,t,r),e.elementType=Yd,e.lanes=l,e;case Bp:return nc(n,r,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pp:i=10;break e;case Dp:i=9;break e;case Ou:i=11;break e;case Au:i=14;break e;case or:i=16,o=null;break e}throw Error(X(130,e==null?e:typeof e,""))}return t=to(i,n,t,r),t.elementType=e,t.type=o,t.lanes=l,t}function Qr(e,t,n,o){return e=to(7,e,o,t),e.lanes=n,e}function nc(e,t,n,o){return e=to(22,e,o,t),e.elementType=Bp,e.lanes=n,e.stateNode={isHidden:!1},e}function Fd(e,t,n){return e=to(6,e,null,t),e.lanes=n,e}function Wd(e,t,n){return t=to(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function A5(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function v_(e,t,n,o,r,l,i,s,a){return e=new A5(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=to(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},o_(l),e}function F5(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vl,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function E0(e){if(!e)return yr;e=e._reactInternals;e:{if(Zr(e)!==e||e.tag!==1)throw Error(X(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(X(171))}if(e.tag===1){var n=e.type;if(Rn(n))return Em(e,n,t)}return t}function L0(e,t,n,o,r,l,i,s,a){return e=v_(n,o,!0,e,r,l,i,s,a),e.context=E0(null),n=e.current,o=kn(),r=pr(n),l=Uo(o,r),l.callback=t!=null?t:null,fr(n,l,r),e.current.lanes=r,ns(e,r,o),Tn(e,o),e}function oc(e,t,n,o){var r=t.current,l=kn(),i=pr(r);return n=E0(n),t.context===null?t.context=n:t.pendingContext=n,t=Uo(l,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=fr(r,t,i),e!==null&&(yo(e,r,i,l),pa(e,r,i)),i}function Ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $p(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function w_(e,t){$p(e,t),(e=e.alternate)&&$p(e,t)}function W5(){return null}var N0=typeof reportError=="function"?reportError:function(e){console.error(e)};function b_(e){this._internalRoot=e}rc.prototype.render=b_.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));oc(e,t,null,null)};rc.prototype.unmount=b_.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){oc(null,e,null,null)}),t[Qo]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var t=im();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lr.length&&t!==0&&t<lr[n].priority;n++);lr.splice(n,0,e),n===0&&am(e)}};function k_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function j5(e,t,n,o,r){if(r){if(typeof o=="function"){var l=o;o=function(){var u=Ya(i);l.call(u)}}var i=L0(t,o,e,0,null,!1,!1,"",Rp);return e._reactRootContainer=i,e[Qo]=i.current,Vi(e.nodeType===8?e.parentNode:e),Kr(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var s=o;o=function(){var u=Ya(a);s.call(u)}}var a=v_(e,0,!1,null,null,!1,!1,"",Rp);return e._reactRootContainer=a,e[Qo]=a.current,Vi(e.nodeType===8?e.parentNode:e),Kr(function(){oc(t,a,n,o)}),a}function ic(e,t,n,o,r){var l=n._reactRootContainer;if(l){var i=l;if(typeof r=="function"){var s=r;r=function(){var a=Ya(i);s.call(a)}}oc(t,i,e,r)}else i=j5(n,t,e,r,o);return Ya(i)}rm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Li(t.pendingLanes);n!==0&&(ju(t,n|1),Tn(t,Ot()),!(Ze&6)&&(Ul=Ot()+500,wr()))}break;case 13:Kr(function(){var o=Vo(e,1);if(o!==null){var r=kn();yo(o,e,1,r)}}),w_(e,1)}};Hu=function(e){if(e.tag===13){var t=Vo(e,134217728);if(t!==null){var n=kn();yo(t,e,134217728,n)}w_(e,134217728)}};lm=function(e){if(e.tag===13){var t=pr(e),n=Vo(e,t);if(n!==null){var o=kn();yo(n,e,t,o)}w_(e,t)}};im=function(){return ct};sm=function(e,t){var n=ct;try{return ct=e,t()}finally{ct=n}};tu=function(e,t,n){switch(t){case"input":if(Xd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=qa(o);if(!r)throw Error(X(90));Op(o),Xd(o,r)}}}break;case"textarea":Fp(e,n);break;case"select":t=n.value,t!=null&&Rl(e,!!n.multiple,t,!1)}};Vp=m_;Xp=Kr;var H5={usingClientEntryPoint:!1,Events:[rs,Sl,qa,Yp,Qp,m_]},Ci={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U5={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Go.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||W5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Si=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Si.isDisabled&&Si.supportsFiber))try{Qa=Si.inject(U5),Io=Si}catch{}var Si;Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H5;Un.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k_(t))throw Error(X(200));return F5(e,t,null,n)};Un.createRoot=function(e,t){if(!k_(e))throw Error(X(299));var n=!1,o="",r=N0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=v_(e,1,!1,null,null,n,!1,o,r),e[Qo]=t.current,Vi(e.nodeType===8?e.parentNode:e),new b_(t)};Un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=Kp(t),e=e===null?null:e.stateNode,e};Un.flushSync=function(e){return Kr(e)};Un.hydrate=function(e,t,n){if(!lc(t))throw Error(X(200));return ic(null,e,t,!0,n)};Un.hydrateRoot=function(e,t,n){if(!k_(e))throw Error(X(405));var o=n!=null&&n.hydratedSources||null,r=!1,l="",i=N0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=L0(t,null,e,1,n!=null?n:null,r,!1,l,i),e[Qo]=t.current,Vi(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new rc(t)};Un.render=function(e,t,n){if(!lc(t))throw Error(X(200));return ic(null,e,t,!1,n)};Un.unmountComponentAtNode=function(e){if(!lc(e))throw Error(X(40));return e._reactRootContainer?(Kr(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Qo]=null})}),!0):!1};Un.unstable_batchedUpdates=m_;Un.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!lc(n))throw Error(X(200));if(e==null||e._reactInternals===void 0)throw Error(X(38));return ic(e,t,n,!1,o)};Un.version="18.3.1-next-f1338f8080-20240426"});var is=Ao((Fw,R0)=>{"use strict";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(e){console.error(e)}}$0(),R0.exports=I0()});var P0=Ao(C_=>{"use strict";var T0=is();C_.createRoot=T0.createRoot,C_.hydrateRoot=T0.hydrateRoot;var Ww});var B0=Ao(sc=>{"use strict";var Y5=St(),Q5=Symbol.for("react.element"),V5=Symbol.for("react.fragment"),X5=Object.prototype.hasOwnProperty,G5=Y5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q5={key:!0,ref:!0,__self:!0,__source:!0};function D0(e,t,n){var o,r={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)X5.call(t,o)&&!q5.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Q5,type:e,key:l,ref:i,props:r,_owner:G5.current}}sc.Fragment=V5;sc.jsx=D0;sc.jsxs=D0});var jt=Ao((Uw,z0)=>{"use strict";z0.exports=B0()});var Gg=Ee(St()),qg=Ee(P0());var Ec=Ee(St(),1),S=Ee(St(),1),Nc=Ee(St(),1),Sg=Ee(is(),1),ei=Ee(St(),1),ti=Ee(St(),1),Mg=Ee(is(),1),Eg=Ee(jt(),1),qt=Ee(St(),1),ms=Ee(St(),1),Ng=Ee(St(),1),pn=Ee(St(),1),et=Ee(jt(),1),O_=Ee(jt(),1),se=Ee(jt(),1),To=Ee(St(),1),Rg=Ee(is(),1),ol=Ee(jt(),1),A_=Ee(jt(),1),nl=Ee(jt(),1),rt=Ee(St(),1),d=Ee(jt(),1),yt=Ee(jt(),1),Kt=Ee(St(),1),Sr=Ee(St(),1),c=Ee(jt(),1),ke=Ee(St(),1),Ge=Ee(jt(),1),Xv=Ee(St(),1),Pn=Ee(St(),1),Q_=Ee(jt(),1),lo=Ee(St(),1),Ro=Ee(jt(),1),Cr=Ee(St(),1),ys=Ee(jt(),1),Qg=Ee(St(),1),ql=Ee(jt(),1),Kl=Ee(jt(),1),ce=Ee(jt(),1),$c=Ee(St(),1),xs=Ee(jt(),1),Q=Ee(jt(),1),Vg=Ee(St(),1),gg=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],S_=gg.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),B_="feedback-freeze-styles",z_="__agentation_freeze";function K5(){var t;return typeof window=="undefined"?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:(t=window[z_])!=null?t:{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}var Ue=K5();function yg(){var t;if(typeof window=="undefined")return;let e=window;Ue=(t=e[z_])!=null?t:e[z_]=Ue,!Ue.installed&&(window.setTimeout=(n,o,...r)=>typeof n=="string"?Ue.origSetTimeout(n,o):Ue.origSetTimeout((...l)=>{Ue.frozen?Ue.frozenTimeoutQueue.push(()=>n(...l)):n(...l)},o,...r),window.setInterval=(n,o,...r)=>typeof n=="string"?Ue.origSetInterval(n,o):Ue.origSetInterval((...l)=>{Ue.frozen||n(...l)},o,...r),window.requestAnimationFrame=n=>Ue.origRAF(o=>{Ue.frozen?Ue.frozenRAFQueue.push(n):n(o)}),Ue.installed=!0)}var ot=Ue.origSetTimeout,xg=Ue.origSetInterval,Sc=Ue.origRAF;function J5(e){return e?gg.some(t=>{var n;return!!((n=e.closest)!=null&&n.call(e,`[${t}]`))}):!1}function Z5(){if(typeof document=="undefined"||(yg(),Ue.frozen))return;Ue.frozen=!0,Ue.frozenTimeoutQueue=[],Ue.frozenRAFQueue=[];let e=document.getElementById(B_);e||(e=document.createElement("style"),e.id=B_),e.textContent=`
    *${S_},
    *${S_}::before,
    *${S_}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Ue.pausedAnimations=[];try{document.getAnimations().forEach(t=>{var o;if(t.playState!=="running")return;let n=(o=t.effect)==null?void 0:o.target;J5(n)||(t.pause(),Ue.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function O0(){var n;if(typeof document=="undefined"||!Ue.frozen)return;Ue.frozen=!1;let e=Ue.frozenTimeoutQueue;Ue.frozenTimeoutQueue=[];for(let o of e)Ue.origSetTimeout(()=>{if(Ue.frozen){Ue.frozenTimeoutQueue.push(o);return}try{o()}catch(r){console.warn("[agentation] Error replaying queued timeout:",r)}},0);let t=Ue.frozenRAFQueue;Ue.frozenRAFQueue=[];for(let o of t)Ue.origRAF(r=>{if(Ue.frozen){Ue.frozenRAFQueue.push(o);return}o(r)});for(let o of Ue.pausedAnimations)try{o.play()}catch(r){console.warn("[agentation] Error resuming animation:",r)}Ue.pausedAnimations=[],(n=document.getElementById(B_))==null||n.remove(),document.querySelectorAll("video").forEach(o=>{o.dataset.wasPaused==="false"&&(o.play().catch(()=>{}),delete o.dataset.wasPaused)})}function A0(){let e=(0,Ec.useMemo)(()=>{let t=0,n=new Set,o=()=>(n.forEach(clearTimeout),n.clear(),++t),r=i=>i===t;return{start:o,isCurrent:r,schedule:(i,s,a)=>{if(!r(i))return;let u=ot(()=>{n.delete(u),r(i)&&s()},a);n.add(u)}}},[]);return(0,Ec.useEffect)(()=>()=>{e.start()},[e]),e}function e2(e,t,n,o){let r=u=>{var m;return(m=o.get(u.id))!=null?m:u.id},l=new Map(e.map(u=>[r(u),u])),i=new Map(t.map(u=>[r(u),u])),s=new Set(n.map(u=>u.id)),a=[];for(let u of n){let m=l.get(u.id),f=i.get(u.id);if(m&&!f)continue;let h=f&&m&&f.comment!==m.comment;a.push(h?{...u,comment:f.comment}:u)}for(let[u,m]of i)!l.has(u)&&!s.has(u)&&a.push(m);return a}function vs(e){if(e.tagName!=="IFRAME")return null;try{return e.contentDocument}catch{return null}}function Yn(e,t=document){var n;if(e===t)return null;try{return(n=e.defaultView)==null?void 0:n.frameElement}catch{return null}}function V_(e){return e.nodeType===11&&"host"in e}function Zl(e){var m;let t=e.getBoundingClientRect(),n=e.offsetWidth?t.width/e.offsetWidth:1,o=e.offsetHeight?t.height/e.offsetHeight:1,r=(m=e.ownerDocument.defaultView)==null?void 0:m.getComputedStyle(e),l=f=>parseFloat(f||"0")||0,i=l(r==null?void 0:r.paddingLeft),s=l(r==null?void 0:r.paddingTop),a=e.clientWidth-i-l(r==null?void 0:r.paddingRight),u=e.clientHeight-s-l(r==null?void 0:r.paddingBottom);return{x:t.left+(e.clientLeft+i)*n,y:t.top+(e.clientTop+s)*o,sx:n,sy:o,width:a*n,height:u*o}}function F0(e){try{let t=new URL(e);return t.origin+t.pathname}catch{return e}}function t2(e,t,n,o=document){let r=Yn(e,o);for(;r;){let l=Zl(r);t=l.x+t*l.sx,n=l.y+n*l.sy,r=Yn(r.ownerDocument,o)}return{x:t,y:n}}function Ht(e,t=document){let n=e.getBoundingClientRect();return vg(e.ownerDocument,n,t)}function vg(e,t,n){if(!Yn(e,n))return t;let o=t.left,r=t.top,l=t.right,i=t.bottom,s=Yn(e,n);for(;s;){let a=Zl(s);o=Math.max(a.x,a.x+o*a.sx),r=Math.max(a.y,a.y+r*a.sy),l=Math.min(a.x+a.width,a.x+l*a.sx),i=Math.min(a.y+a.height,a.y+i*a.sy),s=Yn(s.ownerDocument,n)}return new DOMRect(o,r,Math.max(0,l-o),Math.max(0,i-r))}function Lc(e){let t=[];for(let n of e.querySelectorAll("*"))n.tagName==="IFRAME"&&t.push(n),n.shadowRoot&&n.tagName!=="AGENTATION-TOOLBAR"&&t.push(...Lc(n.shadowRoot));return t}function n2(e,t,n,o=document){let r=[];for(let f=Yn(e.ownerDocument,o);f;f=Yn(f.ownerDocument,o))r.unshift(f);if(!r.length)return;let l=r.map(f=>{var C,k;let h=Zl(f);return t=(t-h.x)/h.sx,n=(n-h.y)/h.sy,{index:Lc(f.ownerDocument).indexOf(f),id:f.id||void 0,url:(k=(C=vs(f))==null?void 0:C.URL)!=null?k:""}}),i=e.ownerDocument.defaultView,s=!1;for(let f=e;f;f=f.parentElement)if(["fixed","sticky"].includes(i.getComputedStyle(f).position)){s=!0;break}let a=s?0:i.scrollX,u=s?0:i.scrollY,m=e.getBoundingClientRect();return{path:l,x:t+a,y:n+u,fixed:s,boundingBox:{x:m.left+a,y:m.top+u,width:m.width,height:m.height}}}function o2(e=document){let t=new Map,n=o=>{let r=t.get(o);return r||(r=Lc(o),t.set(o,r)),r};return o=>r2(o,e,n)}function r2(e,t=document,n=Lc){let o=e.frame;if(!o)return e;let r=t;for(let C of o.path){let k=n(r),L=C.id?k.find(x=>x.id===C.id):k[C.index],R=L&&vs(L);if(!R||F0(R.URL)!==F0(C.url))return null;r=R}let l=r.defaultView,i=o.fixed?0:l.scrollX,s=o.fixed?0:l.scrollY,a=o.x-i,u=o.y-s;for(let C=r,k=Yn(r,t);k;k=Yn(C,t)){let L=C.defaultView;if(a<0||u<0||a>L.innerWidth||u>L.innerHeight)return null;let R=Zl(k);if(R.width<=0||R.height<=0)return null;a=R.x+a*R.sx,u=R.y+u*R.sy,C=k.ownerDocument}let m=o.boundingBox,f=vg(r,new DOMRect(m.x-i,m.y-s,m.width,m.height),t),h=t.defaultView;return{...e,x:a/h.innerWidth*100,y:u+(e.isFixed?0:h.scrollY),boundingBox:{x:f.x,y:f.y+(e.isFixed?0:h.scrollY),width:f.width,height:f.height}}}function l2(e,t,n){if(!("clientX"in e)||t===n)return e;let o=t2(t,e.clientX,e.clientY,n);return new Proxy(e,{get(r,l){if(l==="clientX")return o.x;if(l==="clientY")return o.y;let i=Reflect.get(r,l,r);return typeof i=="function"?i.bind(r):i}})}function i2(e,t){let n=new Set([e]),o=new Set,r=[],l=new Set,i=!1,s=!1,a,u=(f,h)=>{let C=k=>f.listener(l2(k,h,e));f.handlers.set(h,C),h.addEventListener(f.type,C,f.options)},m=()=>{if(i=!1,!s)return;let f=new Set,h=new Set,C=[],k=L=>{C.push(L);for(let R of L.querySelectorAll("*"))if(!R.matches("agentation-toolbar, [data-agentation-portal]")&&(R.shadowRoot&&k(R.shadowRoot),R.tagName==="IFRAME")){h.add(R);let x=vs(R);x&&!f.has(x)&&(f.add(x),k(x))}};f.add(e),k(e);for(let L of n)if(!f.has(L)){for(let R of o){let x=R.handlers.get(L);x&&L.removeEventListener(R.type,x,R.options),R.handlers.delete(L)}n.delete(L)}for(let L of f)if(!n.has(L)){n.add(L);for(let R of o)u(R,L)}for(let L of l)h.has(L)||L.removeEventListener("load",m);for(let L of h)l.has(L)||L.addEventListener("load",m);l=h,a==null||a.disconnect(),l.forEach(L=>a==null?void 0:a.observe(L)),r.forEach(L=>L.disconnect()),r=C.map(L=>{let R=new MutationObserver(x=>{x.some(w=>[...w.addedNodes,...w.removedNodes].some(p=>p.nodeType===1&&!p.closest("agentation-toolbar, [data-agentation-portal]")&&(p.tagName==="IFRAME"||!!p.shadowRoot||!!p.querySelector("iframe"))))&&!i&&(i=!0,queueMicrotask(m))});return R.observe(L,{childList:!0,subtree:!0}),R}),t==null||t()};return{start(){s||(s=!0,typeof ResizeObserver=="function"&&(a=new ResizeObserver(()=>t==null?void 0:t())),m())},stop(){s=!1,a==null||a.disconnect(),a=void 0,r.forEach(f=>f.disconnect()),r=[];for(let f of l)f.removeEventListener("load",m);l.clear();for(let f of o)for(let[h,C]of f.handlers)h.removeEventListener(f.type,C,f.options);o.clear(),n.clear(),n.add(e)},addEventListener(f,h,C){let k={type:f,listener:h,options:C,handlers:new Map};o.add(k);for(let L of n)u(k,L)},removeEventListener(f,h,C){for(let k of o)if(k.type===f&&k.listener===h){for(let[L,R]of k.handlers)L.removeEventListener(f,R,k.options);o.delete(k)}},querySelectorAll(f){return[...n].flatMap(h=>[...h.querySelectorAll(f)])}}}var X_=["data-testid","data-test","data-qa","data-cy","data-component"];function fs(e,t=X_){let n={};for(let o of[...new Set(t)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(o))continue;let r=e.getAttribute(o);r!=null&&r.length<=500&&Object.defineProperty(n,o,{value:r,enumerable:!0})}return n}function s2(e,t=X_){return Object.entries(fs(e,t)).filter(([n,o])=>/^data-[a-z0-9_-]+$/.test(n)&&o.length<=120).slice(0,2).map(([n,o])=>`[${n}="${o.replace(/[\\"\n\r\f\0]/g,r=>r==="\\"||r==='"'?`\\${r}`:`\\${r.charCodeAt(0).toString(16)} `)}"]`).join("")}function Jl(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return V_(t)?t.host:null}function rn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Jl(n)}return null}function wg(e,t=4,n){let o=[],r=e,l=0;for(;r&&l<t;){let s=r.tagName.toLowerCase();if(s==="html"||s==="body"){o.length===0&&o.push(s);break}let a=s;if(r.id)a=`#${r.id}`;else if(r.className&&typeof r.className=="string"){let m=r.className.split(/\s+/).find(f=>f.length>2&&!f.match(/^[a-z]{1,2}$/)&&!f.match(/[A-Z0-9]{5,}/));m&&(a=`.${m.split("_")[0]}`)}a+=s2(r,n);let u=Jl(r);!r.parentElement&&u&&(a=`\u27E8shadow\u27E9 ${a}`),o.unshift(a),r=u,l++}let i=Yn(e.ownerDocument);return(i?wg(i,2)+" > \u27E8iframe\u27E9 ":"")+o.join(" > ")}function a2(e){var n;let t="";for(let o of e.childNodes)if(o.nodeType===Node.TEXT_NODE){let r=(n=o.textContent)==null?void 0:n.trim();r&&(t+=(t?" ":"")+r)}return t}function Gl(e,t){var r,l,i,s,a,u,m,f;let n=wg(e,4,t);if(e.dataset.element)return{name:e.dataset.element,path:n};let o=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(o)){let h=rn(e,"svg");if(h){let C=Jl(h);if((C==null?void 0:C.namespaceURI)==="http://www.w3.org/1999/xhtml")return{name:`graphic in ${Gl(C).name}`,path:n}}return{name:"graphic element",path:n}}if(o==="svg"){let h=Jl(e);if((h==null?void 0:h.tagName.toLowerCase())==="button"){let C=(r=h.textContent)==null?void 0:r.trim();return{name:C?`icon in "${C}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(o==="button"){let h=(l=e.textContent)==null?void 0:l.trim(),C=e.getAttribute("aria-label");return C?{name:`button [${C}]`,path:n}:{name:h?`button "${h.slice(0,25)}"`:"button",path:n}}if(o==="a"){let h=(i=e.textContent)==null?void 0:i.trim(),C=e.getAttribute("href");return h?{name:`link "${h.slice(0,25)}"`,path:n}:C?{name:`link to ${C.slice(0,30)}`,path:n}:{name:"link",path:n}}if(o==="input"){let h=e.getAttribute("type")||"text",C=e.getAttribute("placeholder"),k=e.getAttribute("name");return C?{name:`input "${C}"`,path:n}:k?{name:`input [${k}]`,path:n}:{name:`${h} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(o)){let h=(s=e.textContent)==null?void 0:s.trim();return{name:h?`${o} "${h.slice(0,35)}"`:o,path:n}}if(o==="p"){let h=(a=e.textContent)==null?void 0:a.trim();return h?{name:`paragraph: "${h.slice(0,40)}${h.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(o==="span"||o==="label"){let h=(u=e.textContent)==null?void 0:u.trim();return h&&h.length<40?{name:`"${h}"`,path:n}:{name:o,path:n}}if(o==="li"){let h=(m=e.textContent)==null?void 0:m.trim();return h&&h.length<40?{name:`list item: "${h.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(o==="blockquote")return{name:"blockquote",path:n};if(o==="code"){let h=(f=e.textContent)==null?void 0:f.trim();return h&&h.length<30?{name:`code: \`${h}\``,path:n}:{name:"code",path:n}}if(o==="pre")return{name:"code block",path:n};if(o==="img"){let h=e.getAttribute("alt");return{name:h?`image "${h.slice(0,30)}"`:"image",path:n}}if(o==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(o)){let h=e.className,C=e.getAttribute("role"),k=e.getAttribute("aria-label");if(k)return{name:`${o} [${k}]`,path:n};if(C)return{name:`${C}`,path:n};let L=a2(e);if(L&&L.length<50)return{name:`"${L}"`,path:n};if(typeof h=="string"&&h){let R=h.split(/[\s_-]+/).map(x=>x.replace(/[A-Z0-9]{5,}.*$/,"")).filter(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x)).slice(0,2);if(R.length>0)return{name:R.join(" "),path:n}}return{name:o==="div"?"container":o,path:n}}return{name:o,path:n}}function ss(e){var l,i,s;let t=[],n=(l=e.textContent)==null?void 0:l.trim();n&&n.length<100&&t.push(n);let o=e.previousElementSibling;if(o){let a=(i=o.textContent)==null?void 0:i.trim();a&&a.length<50&&t.unshift(`[before: "${a.slice(0,40)}"]`)}let r=e.nextElementSibling;if(r){let a=(s=r.textContent)==null?void 0:s.trim();a&&a.length<50&&t.push(`[after: "${a.slice(0,40)}"]`)}return t.join(" ")}function ac(e){let t=Jl(e);if(!t)return"";let n=e.getRootNode(),r=(V_(n)&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(m=>m!==e&&m.namespaceURI==="http://www.w3.org/1999/xhtml");if(r.length===0)return"";let l=r.slice(0,4).map(m=>{var k;let f=m.tagName.toLowerCase(),h=m.className,C="";if(typeof h=="string"&&h){let L=h.split(/\s+/).map(R=>R.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(R=>R.length>2&&!/^[a-z]{1,2}$/.test(R));L&&(C=`.${L}`)}if(f==="button"||f==="a"){let L=(k=m.textContent)==null?void 0:k.trim().slice(0,15);if(L)return`${f}${C} "${L}"`}return`${f}${C}`}),s=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){let m=t.className.split(/\s+/).map(f=>f.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(f=>f.length>2&&!/^[a-z]{1,2}$/.test(f));m&&(s=`.${m}`)}let a=t.children.length,u=a>l.length+1?` (${a} total in ${s})`:"";return l.join(", ")+u}function as(e){let t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(o=>o.length>0).map(o=>{let r=o.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return r?r[1]:o}).filter((o,r,l)=>l.indexOf(o)===r).join(", ")}var bg=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),c2=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),d2=new Set(["input","textarea","select"]),u2=new Set(["img","video","canvas","svg"]),_2=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function cc(e){var l;if(typeof window=="undefined")return{};let t=((l=e.ownerDocument.defaultView)!=null?l:window).getComputedStyle(e),n={},o=e.tagName.toLowerCase(),r;c2.has(o)?r=["color","fontSize","fontWeight","fontFamily","lineHeight"]:o==="button"||o==="a"&&e.getAttribute("role")==="button"?r=["backgroundColor","color","padding","borderRadius","fontSize"]:d2.has(o)?r=["backgroundColor","color","padding","borderRadius","fontSize"]:u2.has(o)?r=["width","height","objectFit","borderRadius"]:_2.has(o)?r=["display","padding","margin","gap","backgroundColor"]:r=["color","fontSize","margin","padding","backgroundColor"];for(let i of r){let s=i.replace(/([A-Z])/g,"-$1").toLowerCase(),a=t.getPropertyValue(s);a&&!bg.has(a)&&(n[i]=a)}return n}var f2=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function dc(e){var o;if(typeof window=="undefined")return"";let t=((o=e.ownerDocument.defaultView)!=null?o:window).getComputedStyle(e),n=[];for(let r of f2){let l=r.replace(/([A-Z])/g,"-$1").toLowerCase(),i=t.getPropertyValue(l);i&&!bg.has(i)&&n.push(`${l}: ${i}`)}return n.join("; ")}function h2(e){if(!e)return;let t={},n=e.split(";").map(o=>o.trim()).filter(Boolean);for(let o of n){let r=o.indexOf(":");if(r>0){let l=o.slice(0,r).trim(),i=o.slice(r+1).trim();l&&i&&(t[l]=i)}}return Object.keys(t).length>0?t:void 0}function uc(e){let t=[],n=e.getAttribute("role"),o=e.getAttribute("aria-label"),r=e.getAttribute("aria-describedby"),l=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),o&&t.push(`aria-label="${o}"`),r&&t.push(`aria-describedby="${r}"`),l&&t.push(`tabindex=${l}`),i==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function hs(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!=="html";){let r=n.tagName.toLowerCase(),l=r;if(n.id)l=`${r}#${n.id}`;else if(n.className&&typeof n.className=="string"){let s=n.className.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2);s&&(l=`${r}.${s}`)}let i=Jl(n);!n.parentElement&&i&&(l=`\u27E8shadow\u27E9 ${l}`),t.unshift(l),n=i}let o=Yn(e.ownerDocument);return(o?hs(o)+" > \u27E8iframe\u27E9 ":"")+t.join(" > ")}var kg="agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]",p2=new Set(["DIV","SPAN","SECTION","ARTICLE","MAIN","ASIDE","HEADER","FOOTER","NAV"]);function kc(e,t){var r,l,i;let n=document.elementFromPoint(e,t),o=new Set;for(;n&&!o.has(n);){o.add(n);let s=vs(n),a;if(s){let u=Zl(n);e=(e-u.x)/u.sx,t=(t-u.y)/u.sy,a=(r=s.elementFromPoint)==null?void 0:r.call(s,e,t)}else a=(i=(l=n.shadowRoot)==null?void 0:l.elementFromPoint)==null?void 0:i.call(l,e,t);if(!a||a===n)break;n=a}return n}function m2(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let t=getComputedStyle(e);if(t.visibility==="hidden"||t.visibility==="collapse")return!1;let n=e;for(;n;){let o=getComputedStyle(n);if(o.opacity==="0"||o.display==="none"||o.contentVisibility==="hidden")return!1;let r=n.getRootNode();n=n.parentElement||(V_(r)?r.host:null)}return!0}function Cg(e,t){var l,i;let n=[],o=new Set,r=(s,a,u)=>{var m,f,h,C,k,L;for(let R of s){if(o.has(R))continue;if(o.add(R),R.shadowRoot){let b=R.shadowRoot,w=(f=(m=b.elementsFromPoint)==null?void 0:m.call(b,a,u))!=null?f:[];r(w.length?w:[(h=b.elementFromPoint)==null?void 0:h.call(b,a,u)].filter(Boolean),a,u)}let x=vs(R);if(x){let b=Zl(R),w=(a-b.x)/b.sx,p=(u-b.y)/b.sy;r((L=(C=x.elementsFromPoint)==null?void 0:C.call(x,w,p))!=null?L:[(k=x.elementFromPoint)==null?void 0:k.call(x,w,p)].filter(Boolean),w,p)}R!==R.ownerDocument.body&&R!==R.ownerDocument.documentElement&&!rn(R,kg)&&m2(R)&&n.push(R)}};return r((i=(l=document.elementsFromPoint)==null?void 0:l.call(document,e,t))!=null?i:[document.elementFromPoint(e,t)].filter(Boolean),e,t),n}function _c(e,t,n){if(n.width<=0||n.height<=0)return null;let o=null,r=1/0;for(let l of Cg(e,t)){let i=Ht(l),s=i.width/n.width,a=i.height/n.height;if(s<.5||s>2||a<.5||a>2)continue;let u=Math.abs(Math.log(s))+Math.abs(Math.log(a));u<r&&(o=l,r=u)}return o}function W0(e,t){let n=kc(e,t);if(!n||rn(n,kg))return null;let o=Cg(e,t);for(let i of o)if(!p2.has(i.tagName)&&!i.shadowRoot||Array.from(i.childNodes).some(s=>{var a;return s.nodeType===Node.TEXT_NODE&&((a=s.textContent)==null?void 0:a.trim())}))return i;let r=null,l=1/0;for(let i of o){let s=Ht(i),a=s.width*s.height;a>0&&a<l&&(r=i,l=a)}return r}function g2(e){let t=(0,Nc.useCallback)(n=>e?(window.addEventListener("hashchange",n),window.addEventListener("popstate",n),()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)}):()=>{},[e]);return(0,Nc.useSyncExternalStore)(t,()=>window.location.pathname+(e?window.location.hash:""),()=>"/")}var fc=new Map;function y2(e,t){var r;let n=((r=fc.get(e))!=null?r:Promise.resolve()).then(t),o=n.then(()=>{},()=>{});return fc.set(e,o),o.then(()=>{fc.get(e)===o&&fc.delete(e)}),n}function x2(e,t,n){try{let o=new URL(e,n);return o.origin===n&&o.pathname+o.hash===t}catch{return!1}}var j0=typeof window=="undefined"?ei.useEffect:ei.useLayoutEffect;function v2(e){let[t,n]=(0,ei.useState)(null);return j0(()=>{let o=document.createElement("div");return o.setAttribute("data-agentation-portal",""),o.style.display="contents",n(o),()=>o.remove()},[]),j0(()=>{var i;if(!t)return;let o=e!=null?e:document.body;if(o.ownerDocument!==document){console.warn("[Agentation] portalContainer belongs to another document; the toolbar will not render.");return}let r=document.activeElement;for(;(i=r==null?void 0:r.shadowRoot)!=null&&i.activeElement;)r=r.shadowRoot.activeElement;let l=r&&t.contains(document.activeElement)?r:null;typeof t.hidePopover=="function"&&t.matches(":popover-open")&&t.hidePopover(),o.appendChild(t),e&&typeof t.showPopover=="function"?(t.setAttribute("popover","manual"),t.style.cssText="position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none",t.showPopover()):(t.removeAttribute("popover"),t.style.cssText="display:contents"),l==null||l.focus({preventScroll:!0})},[t,e]),t}var w2=({mode:e="open",delegatesFocus:t,slotAssignment:n,host:o="div",children:r,className:l,...i})=>{let s=(0,ti.useRef)(null),[a,u]=(0,ti.useState)(null);return(0,ti.useLayoutEffect)(()=>{let f=s.current;if(!f||f.shadowRoot)return;let h=f.attachShadow({mode:e,delegatesFocus:t,slotAssignment:n});u(h)},[]),(0,Eg.jsx)(o,{ref:s,...i,...o.includes("-")?{class:l}:{className:l},children:a&&(0,Mg.createPortal)(r,a)})};function G_(e,t,n){let o=(0,ms.useRef)(n);(0,ms.useLayoutEffect)(()=>{o.current=n},[n]),(0,ms.useLayoutEffect)(()=>{var s,a;let r=e.current;if(!t||!r)return;let l=!1,i=(a=(s=r.getAnimations)==null?void 0:s.call(r))!=null?a:[];return Promise.allSettled(i.map(u=>u.finished)).then(()=>{l||o.current()}),()=>{l=!0}},[e,t])}var Lg=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  pointer-events: none;
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "\u2026";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,ze={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",sourceAction:"styles-module__sourceAction___EabJb",light:"styles-module__light___6AaSQ",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteButton:"styles-module__deleteButton___4VuAE",deleteWrapper:"styles-module__deleteWrapper___oSjdo",sharedForm:"styles-module__sharedForm___8GvQl",previewExcerpt:"styles-module__previewExcerpt___DCOIL",sharedNote:"styles-module__sharedNote___OYVi5",sharedNoteContent:"styles-module__sharedNoteContent___6q3KD",sharedExtra:"styles-module__sharedExtra___RUBKC",sharedActions:"styles-module__sharedActions___6Glpl",sharedExtraInner:"styles-module__sharedExtraInner___EuUh4"},M_="data-agentation-styles";function Ig(e,t,n){if(!n||!e)return;let o=e.nodeType===9?e.head:e.nodeType===11?e:null;if(!o||typeof o.querySelector!="function"||o.querySelector(`style[${M_}~="toolbar"], style[${M_}~="${t}"]`))return;let l=(e.nodeType===9?e:e.ownerDocument).createElement("style");l.setAttribute(M_,t),l.textContent=n,o.appendChild(l)}function q_(e,t){return(0,Ng.useCallback)(n=>{n&&Ig(n.getRootNode(),e,t)},[e,t])}function H0(e){if(!e)return;let t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus({preventScroll:!0})}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var $g=(0,pn.forwardRef)(function({element:t,timestamp:n,selectedText:o,placeholder:r="What should change?",initialValue:l="",submitLabel:i="Add",onSubmit:s,onCancel:a,onDelete:u,onOpenSource:m,allowEmpty:f=!1,accentColor:h="#3c82f7",computedStyles:C,disabled:k=!1,preview:L=!1,resetOnPreview:R=!0,variant:x="popup"},b){let w=x==="card",[p,D]=(0,pn.useState)(l),[j,P]=(0,pn.useState)(!1),[G,O]=(0,pn.useState)(!1),K=(0,pn.useRef)(null),re=(0,pn.useRef)(null),J=o?` "${o.slice(0,30)}${o.length>30?"...":""}"`:"";(0,pn.useLayoutEffect)(()=>{var at;let de=re.current,xe=K.current;if(!w||!de||!xe)return;let Ct=()=>{de.style.setProperty("--editor-field-height",`${xe.offsetHeight}px`)};if(Ct(),"CanvasRenderingContext2D"in window){let Pe=document.createElement("canvas").getContext("2d");if(Pe){let st=getComputedStyle(xe).fontFamily;Pe.font=`13px ${st}`;let At=Pe.measureText(l.replace(/\s+/g," ")).width;Pe.font=`italic 12px ${st}`;let mn=Pe.measureText(t+J).width,Ne=Math.min(200,Math.max(120,Math.ceil(Math.max(At,mn))+24));(at=de.closest("[data-annotation-card]"))==null||at.style.setProperty("--preview-width",`${Ne}px`);let Mn=de.querySelector("[data-shared-note]");Mn&&Mn.toggleAttribute("data-truncated",At>Ne-24)}}let Ie=typeof ResizeObserver!="undefined"?new ResizeObserver(Ct):null;return Ie==null||Ie.observe(xe),()=>Ie==null?void 0:Ie.disconnect()},[w,t,l,J]),(0,pn.useLayoutEffect)(()=>{L&&R&&(D(l),O(!1),K.current&&(K.current.scrollTop=0,K.current.scrollLeft=0))},[L,R,l]),(0,pn.useImperativeHandle)(b,()=>({focus(){let de=K.current;H0(de),de&&(de.selectionStart=de.selectionEnd=de.value.length,de.scrollTop=w?0:de.scrollHeight)}}),[w]);let pe=(0,pn.useCallback)(()=>{k||!p.trim()&&!f||s(p.trim())},[k,p,f,s]),ne=de=>{de.stopPropagation(),!de.nativeEvent.isComposing&&(de.key==="Enter"&&!de.shiftKey&&(de.preventDefault(),pe()),de.key==="Escape"&&a())};return(0,et.jsxs)("div",{ref:re,className:w?ze.sharedForm:void 0,style:w?void 0:{display:"contents"},"data-annotation-editor":!0,"data-preview":L||void 0,children:[(0,et.jsxs)("div",{className:ze.header,"data-editor-heading":!0,children:[C&&Object.keys(C).length>0?(0,et.jsxs)("button",{className:ze.headerToggle,onClick:()=>{let de=G;O(!G),de&&ot(()=>H0(K.current),0)},type:"button",children:[(0,et.jsx)("svg",{className:`${ze.chevron} ${G?ze.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,et.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,et.jsxs)("span",{className:ze.element,children:[t,w&&J&&(0,et.jsx)("span",{className:ze.previewExcerpt,children:J})]})]}):(0,et.jsxs)("span",{className:ze.element,children:[t,w&&J&&(0,et.jsx)("span",{className:ze.previewExcerpt,children:J})]}),n&&(0,et.jsx)("span",{className:ze.timestamp,children:n})]}),m&&(0,et.jsx)("div",{className:w?ze.sharedExtra:void 0,style:w?void 0:{display:"contents"},children:(0,et.jsx)("div",{className:w?ze.sharedExtraInner:void 0,style:w?void 0:{display:"contents"},children:(0,et.jsx)("button",{type:"button",className:ze.sourceAction,onClick:m,children:"Open in editor"})})}),C&&Object.keys(C).length>0&&(0,et.jsx)("div",{className:`${ze.stylesWrapper} ${G?ze.expanded:""}`,children:(0,et.jsx)("div",{className:ze.stylesInner,children:(0,et.jsx)("div",{className:ze.stylesBlock,children:Object.entries(C).map(([de,xe])=>(0,et.jsxs)("div",{className:ze.styleLine,children:[(0,et.jsx)("span",{className:ze.styleProperty,children:de.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,et.jsx)("span",{className:ze.styleValue,children:xe}),";"]},de))})})}),o&&(0,et.jsx)("div",{className:w?ze.sharedExtra:void 0,style:w?void 0:{display:"contents"},children:(0,et.jsx)("div",{className:w?ze.sharedExtraInner:void 0,style:w?void 0:{display:"contents"},children:(0,et.jsxs)("div",{className:ze.quote,children:["\u201C",o.slice(0,80),o.length>80?"...":"","\u201D"]})})}),(0,et.jsx)("div",{"data-shared-note":!0,className:w?ze.sharedNote:void 0,style:w?{"--field-border":j?h:void 0}:{display:"contents"},children:(0,et.jsx)("div",{className:w?ze.sharedNoteContent:void 0,style:w?void 0:{display:"contents"},children:(0,et.jsx)("textarea",{ref:K,className:ze.textarea,readOnly:L,"aria-hidden":L,style:w?void 0:{borderColor:j?h:void 0},placeholder:r,value:L?p.replace(/\s+/g," "):p,onChange:de=>D(de.target.value),onFocus:()=>P(!0),onBlur:()=>P(!1),rows:2,onKeyDown:ne})})}),(0,et.jsx)("div",{"data-editor-actions":!0,className:w?ze.sharedActions:void 0,style:w?void 0:{display:"contents"},children:(0,et.jsxs)("div",{className:ze.actions,children:[u&&(0,et.jsx)("div",{className:ze.deleteWrapper,children:(0,et.jsx)("button",{className:ze.deleteButton,onClick:u,type:"button","aria-label":"Delete annotation",children:"Delete"})}),(0,et.jsx)("button",{className:ze.cancel,onClick:a,children:"Cancel"}),(0,et.jsx)("button",{className:ze.submit,style:{backgroundColor:h,opacity:p.trim()||f?1:.4},onClick:pe,disabled:k||!p.trim()&&!f,children:i})]})})]})}),K_=(0,qt.forwardRef)(function({element:t,timestamp:n,selectedText:o,placeholder:r="What should change?",initialValue:l="",submitLabel:i="Add",onSubmit:s,onCancel:a,onDelete:u,onOpenSource:m,allowEmpty:f=!1,style:h,accentColor:C="#3c82f7",isExiting:k=!1,onExitComplete:L,lightMode:R=!1,computedStyles:x},b){let[w,p]=(0,qt.useState)(!1),[D,j]=(0,qt.useState)("initial"),P=(0,qt.useRef)(null),G=(0,qt.useRef)(null);(0,qt.useEffect)(()=>{var ne;Ig((ne=G.current)==null?void 0:ne.getRootNode(),"annotation-popup",Lg)},[]);let O=(0,qt.useRef)(null);(0,qt.useEffect)(()=>{let ne=ot(()=>{j(de=>de==="initial"?"enter":de)},0);return()=>{clearTimeout(ne),O.current&&clearTimeout(O.current)}},[]),(0,qt.useEffect)(()=>{if(k)return;let ne=ot(()=>{var de;return(de=P.current)==null?void 0:de.focus()},50);return()=>clearTimeout(ne)},[k]);let K=(0,qt.useCallback)(()=>{O.current&&clearTimeout(O.current),p(!0),O.current=ot(()=>{var ne;p(!1),(ne=P.current)==null||ne.focus()},250)},[]);(0,qt.useImperativeHandle)(b,()=>({shake:K}),[K]);let re=(0,qt.useCallback)(()=>{if(L){a();return}j("exit")},[a,L]),J=k?"exit":D;G_(G,J==="exit",()=>{k?L==null||L():a()});let pe=[ze.popup,R?ze.light:"",J==="enter"?ze.enter:"",J==="entered"?ze.entered:"",J==="exit"?ze.exit:"",w&&J!=="exit"?ze.shake:""].filter(Boolean).join(" ");return(0,O_.jsx)("div",{ref:G,className:pe,"data-annotation-popup":!0,style:h,onAnimationEnd:ne=>{ne.target===ne.currentTarget&&ne.animationName.includes("popupEnter")&&!k&&j("entered")},onKeyDownCapture:ne=>{ne.key!=="Escape"||ne.nativeEvent.isComposing||(ne.preventDefault(),ne.stopPropagation(),re())},onClick:ne=>ne.stopPropagation(),children:(0,O_.jsx)($g,{ref:P,element:t,timestamp:n,selectedText:o,placeholder:r,initialValue:l,submitLabel:i,onSubmit:s,onCancel:re,onDelete:u,onOpenSource:m,allowEmpty:f,accentColor:C,computedStyles:x,disabled:J==="exit"})})}),Ic=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,mt={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};var b2=({size:e=16})=>(0,se.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:(0,se.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var k2=({size:e=20,...t})=>(0,se.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,se.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,se.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var C2=({size:e=24,copied:t=!1,tint:n})=>(0,se.jsxs)("svg",{ref:q_("icon-transitions",Ic),width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[(0,se.jsxs)("g",{className:`${mt.iconState} ${t?mt.hiddenScaled:mt.visibleScaled}`,children:[(0,se.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,se.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,se.jsxs)("g",{className:`${mt.iconState} ${t?mt.visibleScaled:mt.hiddenScaled}`,children:[(0,se.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),S2=({size:e=24,state:t="idle"})=>{let n=t==="idle",o=t==="sent",r=t==="failed",l=t==="sending";return(0,se.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,se.jsx)("g",{className:`${mt.iconStateFast} ${n?mt.visibleScaled:l?mt.sending:mt.hiddenScaled}`,children:(0,se.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,se.jsxs)("g",{className:`${mt.iconStateFast} ${o?mt.visibleScaled:mt.hiddenScaled}`,children:[(0,se.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,se.jsxs)("g",{className:`${mt.iconStateFast} ${r?mt.visibleScaled:mt.hiddenScaled}`,children:[(0,se.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,se.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var M2=({size:e=24,isOpen:t=!0})=>(0,se.jsxs)("svg",{ref:q_("icon-transitions",Ic),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,se.jsxs)("g",{className:`${mt.iconFade} ${t?mt.visible:mt.hidden}`,children:[(0,se.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,se.jsxs)("g",{className:`${mt.iconFade} ${t?mt.hidden:mt.visible}`,children:[(0,se.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,se.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),E2=({size:e=24,isPaused:t=!1})=>(0,se.jsxs)("svg",{ref:q_("icon-transitions",Ic),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,se.jsxs)("g",{className:`${mt.iconFadeFast} ${t?mt.hidden:mt.visible}`,children:[(0,se.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,se.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,se.jsx)("path",{className:`${mt.iconFadeFast} ${t?mt.visible:mt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var L2=({size:e=16})=>(0,se.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,se.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var N2=({size:e=16})=>(0,se.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,se.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var I2=({size:e=16})=>(0,se.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,se.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,se.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,se.jsx)("defs",{children:(0,se.jsx)("clipPath",{id:"clip0_2_53",children:(0,se.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]});var $2=({size:e=16})=>(0,se.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[(0,se.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,se.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),R2=({size:e=16})=>(0,se.jsx)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:(0,se.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),T2=({size:e=16})=>(0,se.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,se.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})});var P2=({size:e=16})=>(0,se.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,se.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var D2=({size:e=24})=>(0,se.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,se.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,se.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,se.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),B2=({content:e,children:t,...n})=>{let[o,r]=(0,To.useState)(!1),[l,i]=(0,To.useState)(!1),[s,a]=(0,To.useState)({top:0,right:0}),u=(0,To.useRef)(null),m=(0,To.useRef)(null),f=(0,To.useRef)(null),h=()=>{if(u.current){let L=u.current.getBoundingClientRect();a({top:L.top+L.height/2,right:window.innerWidth-L.left+8})}},C=()=>{i(!0),f.current&&(clearTimeout(f.current),f.current=null),h(),m.current=ot(()=>{r(!0)},500)},k=()=>{m.current&&(clearTimeout(m.current),m.current=null),r(!1),f.current=ot(()=>{i(!1)},150)};return(0,To.useEffect)(()=>()=>{m.current&&clearTimeout(m.current),f.current&&clearTimeout(f.current)},[]),(0,ol.jsxs)(ol.Fragment,{children:[(0,ol.jsx)("span",{ref:u,onMouseEnter:C,onMouseLeave:k,...n,children:t}),l&&(0,Rg.createPortal)((0,ol.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:s.top,right:s.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:o?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},z2=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,U0={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"},tl=({content:e})=>(0,A_.jsx)(B2,{className:U0.tooltip,content:e,children:(0,A_.jsx)(k2,{className:U0.tooltipIcon})}),O2=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 3px;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,W={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",positionContext:"styles-module__positionContext___AZFHE",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",buttonWrapper:"styles-module__buttonWrapper___rBcdv",toggleWrapper:"styles-module__toggleWrapper___7N0-q",togglePlaceholder:"styles-module__togglePlaceholder___wnqrL",toggleContent:"styles-module__toggleContent___0yfyP",expandedToggle:"styles-module__expandedToggle___F7SRN",toggleGlyph:"styles-module__toggleGlyph___R7Oom",toggleIcon:"styles-module__toggleIcon___Jbtus",toggleTopLine:"styles-module__toggleTopLine___hQaCm",toggleMiddleLine:"styles-module__toggleMiddleLine___sFFVe",toggleBottomLine:"styles-module__toggleBottomLine___V-jX3",toggleSparkle:"styles-module__toggleSparkle___eeF99",controlButton:"styles-module__controlButton___8Q0jc",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};function A2({active:e}){return(0,nl.jsxs)("svg",{className:W.toggleGlyph,"data-active":e,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,nl.jsx)("path",{className:W.toggleTopLine,d:"M5.5 6.75H18.5"}),(0,nl.jsx)("path",{className:W.toggleMiddleLine,d:"M5.5 12H11.5"}),(0,nl.jsx)("path",{className:W.toggleBottomLine,d:"M5.5 17.25H9.25"}),(0,nl.jsx)("path",{className:W.toggleSparkle,d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z"})]})}var ae={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Tg=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...ae.navigation},{type:"header",label:"Header",...ae.header},{type:"hero",label:"Hero",...ae.hero},{type:"section",label:"Section",...ae.section},{type:"sidebar",label:"Sidebar",...ae.sidebar},{type:"footer",label:"Footer",...ae.footer},{type:"modal",label:"Modal",...ae.modal},{type:"banner",label:"Banner",...ae.banner},{type:"drawer",label:"Drawer",...ae.drawer},{type:"popover",label:"Popover",...ae.popover},{type:"divider",label:"Divider",...ae.divider}]},{section:"Content",items:[{type:"card",label:"Card",...ae.card},{type:"text",label:"Text",...ae.text},{type:"image",label:"Image",...ae.image},{type:"video",label:"Video",...ae.video},{type:"table",label:"Table",...ae.table},{type:"grid",label:"Grid",...ae.grid},{type:"list",label:"List",...ae.list},{type:"chart",label:"Chart",...ae.chart},{type:"codeBlock",label:"Code Block",...ae.codeBlock},{type:"map",label:"Map",...ae.map},{type:"timeline",label:"Timeline",...ae.timeline},{type:"calendar",label:"Calendar",...ae.calendar},{type:"accordion",label:"Accordion",...ae.accordion},{type:"carousel",label:"Carousel",...ae.carousel},{type:"logo",label:"Logo",...ae.logo},{type:"faq",label:"FAQ",...ae.faq},{type:"gallery",label:"Gallery",...ae.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...ae.button},{type:"input",label:"Input",...ae.input},{type:"search",label:"Search",...ae.search},{type:"form",label:"Form",...ae.form},{type:"tabs",label:"Tabs",...ae.tabs},{type:"dropdown",label:"Dropdown",...ae.dropdown},{type:"toggle",label:"Toggle",...ae.toggle},{type:"stepper",label:"Stepper",...ae.stepper},{type:"rating",label:"Rating",...ae.rating},{type:"fileUpload",label:"File Upload",...ae.fileUpload},{type:"checkbox",label:"Checkbox",...ae.checkbox},{type:"radio",label:"Radio",...ae.radio},{type:"slider",label:"Slider",...ae.slider},{type:"datePicker",label:"Date Picker",...ae.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...ae.avatar},{type:"badge",label:"Badge",...ae.badge},{type:"tag",label:"Tag",...ae.tag},{type:"breadcrumb",label:"Breadcrumb",...ae.breadcrumb},{type:"pagination",label:"Pagination",...ae.pagination},{type:"progress",label:"Progress",...ae.progress},{type:"alert",label:"Alert",...ae.alert},{type:"toast",label:"Toast",...ae.toast},{type:"notification",label:"Notification",...ae.notification},{type:"tooltip",label:"Tooltip",...ae.tooltip},{type:"stat",label:"Stat",...ae.stat},{type:"skeleton",label:"Skeleton",...ae.skeleton},{type:"chip",label:"Chip",...ae.chip},{type:"icon",label:"Icon",...ae.icon},{type:"spinner",label:"Spinner",...ae.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...ae.pricing},{type:"testimonial",label:"Testimonial",...ae.testimonial},{type:"cta",label:"CTA",...ae.cta},{type:"productCard",label:"Product Card",...ae.productCard},{type:"profile",label:"Profile",...ae.profile},{type:"feature",label:"Feature",...ae.feature},{type:"team",label:"Team",...ae.team},{type:"login",label:"Login",...ae.login},{type:"contact",label:"Contact",...ae.contact}]}],vo={};for(let e of Tg)for(let t of e.items)vo[t.type]=t;function H({w:e,h:t=3,strong:n}){return(0,d.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function dt({w:e,h:t,radius:n=3,style:o}){return(0,d.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...o}})}function Sn({size:e}){return(0,d.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function F2({width:e,height:t}){let n=Math.max(8,t*.2);return(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[(0,d.jsx)(dt,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[(0,d.jsx)(H,{w:e*.06}),(0,d.jsx)(H,{w:e*.07}),(0,d.jsx)(H,{w:e*.05}),(0,d.jsx)(H,{w:e*.06})]}),(0,d.jsx)(dt,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function W2({width:e,height:t,text:n}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?(0,d.jsx)("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):(0,d.jsx)(H,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,d.jsx)(H,{w:e*.6}),(0,d.jsx)(H,{w:e*.4}),(0,d.jsx)(dt,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function j2({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,d.jsxs)("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[(0,d.jsx)(H,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,d.jsx)(dt,{w:10,h:10,radius:2}),(0,d.jsx)(H,{w:e*(.4+r*17%30/100)})]},r))]})}function H2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,d.jsx)("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(H,{w:"60%",h:3,strong:!0}),(0,d.jsx)(H,{w:"80%",h:2}),(0,d.jsx)(H,{w:"70%",h:2}),(0,d.jsx)(H,{w:"60%",h:2})]},r))})}function U2({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,d.jsx)(H,{w:e*.3,h:4,strong:!0}),(0,d.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,d.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,d.jsx)(H,{w:"90%"}),(0,d.jsx)(H,{w:"70%"}),(0,d.jsx)(H,{w:"80%"})]}),(0,d.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,d.jsx)(dt,{w:70,h:26,radius:4}),(0,d.jsx)(dt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Y2({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,d.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,d.jsx)(H,{w:"70%",h:4,strong:!0}),(0,d.jsx)(H,{w:"95%",h:2}),(0,d.jsx)(H,{w:"85%",h:2}),(0,d.jsx)(H,{w:"50%",h:2})]})]})}function Q2({width:e,height:t,text:n}){if(n)return(0,d.jsx)("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let o=Math.max(2,Math.floor(t/18));return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,d.jsx)(H,{w:e*.6,h:5,strong:!0}),Array.from({length:o},(r,l)=>(0,d.jsx)(H,{w:`${70+l*13%25}%`,h:2},l))]})}function V2({width:e,height:t}){return(0,d.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[(0,d.jsx)("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function X2({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),o=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(r,l)=>(0,d.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,d.jsx)(H,{w:"70%",h:3,strong:!0})},l))}),Array.from({length:o},(r,l)=>(0,d.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(i,s)=>(0,d.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,d.jsx)(H,{w:`${50+(l*7+s*13)%40}%`,h:2})},s))},l))]})}function G2({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,d.jsx)(Sn,{size:8}),(0,d.jsx)(H,{w:`${55+r*17%35}%`,h:2})]},r))})}function q2({width:e,height:t,text:n}){return(0,d.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?(0,d.jsx)("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):(0,d.jsx)(H,{w:Math.max(20,e*.5),h:3,strong:!0})})}function K2({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,d.jsx)(H,{w:Math.min(80,e*.3),h:2}),(0,d.jsx)("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,d.jsx)(H,{w:"40%",h:2})})]})}function J2({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(H,{w:60+r*17%30,h:2}),(0,d.jsx)(dt,{w:"100%",h:28,radius:4})]},r)),(0,d.jsx)(dt,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Z2({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,r)=>(0,d.jsx)("div",{style:{padding:"8px 12px",borderBottom:r===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,d.jsx)(H,{w:60,h:3,strong:r===0})},r))}),(0,d.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,d.jsx)(H,{w:"80%",h:2}),(0,d.jsx)(H,{w:"65%",h:2}),(0,d.jsx)(H,{w:"75%",h:2})]})]})}function ex({width:e,height:t}){let n=Math.min(e,t)/2;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,d.jsx)("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,d.jsx)("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function tx({width:e,height:t}){return(0,d.jsx)("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)(H,{w:Math.max(16,e*.5),h:2,strong:!0})})}function nx({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,d.jsx)(H,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,d.jsx)(H,{w:e*.35})]})}function ox({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[(0,d.jsx)(H,{w:e*.3,h:4,strong:!0}),(0,d.jsx)(H,{w:e*.7}),(0,d.jsx)(H,{w:e*.5}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[(0,d.jsx)(dt,{w:"33%",h:"100%",radius:4}),(0,d.jsx)(dt,{w:"33%",h:"100%",radius:4}),(0,d.jsx)(dt,{w:"33%",h:"100%",radius:4})]})]})}function rx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*o},(r,l)=>(0,d.jsx)(dt,{w:"100%",h:"100%",radius:4},l))})}function lx({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,d.jsx)(H,{w:e*.5,h:3,strong:!0})}),(0,d.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(o,r)=>(0,d.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:r===0?"var(--agd-fill)":"transparent"},children:(0,d.jsx)(H,{w:`${50+r*17%35}%`,h:2,strong:r===0})},r))})]})}function ix({width:e,height:t}){let n=Math.min(e,t)/2;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function sx({width:e,height:t}){let n=Math.min(t/2,20);return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[(0,d.jsx)(Sn,{size:Math.min(14,t*.4)}),(0,d.jsx)(H,{w:"50%",h:2})]})}function ax({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,d.jsx)(Sn,{size:Math.min(20,t*.5)}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:"60%",h:3,strong:!0}),(0,d.jsx)(H,{w:"80%",h:2})]}),(0,d.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function cx({width:e,height:t}){return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,d.jsx)("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function dx({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),o=e/(n*2);return(0,d.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(r,l)=>{let i=30+(l*37+17)%55;return(0,d.jsx)(dt,{w:o,h:`${i}%`,radius:2},l)})})}function ux({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,d.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(dt,{w:"100%",h:"100%",radius:4}),(0,d.jsx)("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function _x({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)(H,{w:"60%",h:2})}),(0,d.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function fx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r>0&&(0,d.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,d.jsx)(H,{w:40+r*13%20,h:2,strong:r===n-1})]},r))})}function hx({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),o=Math.min(28,t*.8);return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(r,l)=>(0,d.jsx)(dt,{w:o,h:o,radius:4,style:l===1?{background:"var(--agd-bar)"}:void 0},l))})}function px({width:e}){return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,d.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function mx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,d.jsx)(H,{w:`${40+r*17%25}%`,h:3,strong:!0}),(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function gx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,d.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,d.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,d.jsx)(dt,{w:"100%",h:"100%",radius:4}),(0,d.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,d.jsx)(Sn,{size:5}),(0,d.jsx)(Sn,{size:5}),(0,d.jsx)(Sn,{size:5})]})]})}function yx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[(0,d.jsx)(H,{w:e*.4,h:3,strong:!0}),(0,d.jsx)(H,{w:e*.3,h:6,strong:!0}),(0,d.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,o)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)(Sn,{size:5}),(0,d.jsx)(H,{w:`${50+o*17%35}%`,h:2})]},o))}),(0,d.jsx)(dt,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function xx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,d.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(H,{w:"90%",h:2}),(0,d.jsx)(H,{w:"75%",h:2}),(0,d.jsx)(H,{w:"60%",h:2})]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,d.jsx)(Sn,{size:20}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,d.jsx)(H,{w:60,h:3,strong:!0}),(0,d.jsx)(H,{w:40,h:2})]})]})]})}function vx({width:e,height:t}){return(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,d.jsx)(H,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,d.jsx)(H,{w:e*.35}),(0,d.jsx)(dt,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function wx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,d.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,d.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:"40%",h:3,strong:!0}),(0,d.jsx)(H,{w:"70%",h:2})]})]})}function bx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,d.jsx)(H,{w:e*.4,h:3,strong:!0}),(0,d.jsx)(dt,{w:60,h:Math.min(24,t*.6),radius:4})]})}function kx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,d.jsx)(H,{w:e*.5,h:2}),(0,d.jsx)(H,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,d.jsx)(H,{w:e*.3,h:2})]})}function Cx({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),o=Math.min(12,t*.35);return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(r,l)=>(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,d.jsx)("div",{style:{width:o,height:o,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:l===0?"var(--agd-bar)":"transparent",flexShrink:0}}),l<n-1&&(0,d.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},l))})}function Sx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,d.jsx)(H,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,d.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Mx({width:e,height:t}){let o=Math.min(t*.7,e/7.5);return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:o*.2},children:Array.from({length:5},(r,l)=>(0,d.jsx)("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:(0,d.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:l<3?"var(--agd-bar)":"none"})},l))})}function Ex({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,d.jsx)("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,d.jsx)("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,d.jsx)("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,d.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,d.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,d.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,d.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Lx({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,d.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,d.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,d.jsx)(Sn,{size:8}),r<n-1&&(0,d.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},r))}),(0,d.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:`${35+r*13%25}%`,h:3,strong:!0}),(0,d.jsx)(H,{w:`${50+r*17%30}%`,h:2})]},r))})]})}function Nx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,d.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,d.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,d.jsx)(H,{w:e*.4,h:2}),(0,d.jsx)(H,{w:e*.25,h:2})]})}function Ix({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,d.jsx)(Sn,{size:6}),(0,d.jsx)(Sn,{size:6}),(0,d.jsx)(Sn,{size:6})]}),Array.from({length:n},(o,r)=>(0,d.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:r>0&&r<n-1?12:0},children:(0,d.jsx)(H,{w:`${25+r*23%50}%`,h:2,strong:r===0})},r))]})}function $x({width:e,height:t}){let r=Math.min((e-16)/7,(t-40)/6);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,d.jsx)(H,{w:e*.3,h:3,strong:!0}),(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(l,i)=>(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r*.6},children:(0,d.jsx)(H,{w:r*.5,h:2})},`h${i}`)),Array.from({length:7*5},(l,i)=>(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r},children:(0,d.jsx)("div",{style:{width:r*.6,height:r*.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:.3}})})},i))]})]})}function Rx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,d.jsx)(Sn,{size:Math.min(32,t*.55)}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:"50%",h:3,strong:!0}),(0,d.jsx)(H,{w:"75%",h:2})]}),(0,d.jsx)(H,{w:30,h:2})]})}function Tx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,d.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,d.jsx)(H,{w:"65%",h:4,strong:!0}),(0,d.jsx)(H,{w:"40%",h:3}),(0,d.jsx)("div",{style:{flex:1}}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,d.jsx)(H,{w:"30%",h:5,strong:!0}),(0,d.jsx)(dt,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function Px({width:e,height:t}){let n=Math.min(48,t*.3);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,d.jsx)(Sn,{size:n}),(0,d.jsx)(H,{w:e*.45,h:4,strong:!0}),(0,d.jsx)(H,{w:e*.3,h:2}),(0,d.jsxs)("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,d.jsx)(H,{w:20,h:3,strong:!0}),(0,d.jsx)(H,{w:28,h:2})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,d.jsx)(H,{w:20,h:3,strong:!0}),(0,d.jsx)(H,{w:28,h:2})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,d.jsx)(H,{w:20,h:3,strong:!0}),(0,d.jsx)(H,{w:28,h:2})]})]})]})}function Dx({width:e,height:t}){let n=Math.max(e*.6,80),o=Math.max(3,Math.floor(t/40));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,d.jsx)("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),(0,d.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[(0,d.jsx)(H,{w:n*.4,h:4,strong:!0}),(0,d.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:o},(r,l)=>(0,d.jsx)("div",{style:{padding:"6px 0"},children:(0,d.jsx)(H,{w:`${50+l*17%35}%`,h:2,strong:l===0})},l))]})]})}function Bx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,d.jsx)(H,{w:"70%",h:3,strong:!0}),(0,d.jsx)(H,{w:"90%",h:2}),(0,d.jsx)(H,{w:"60%",h:2})]}),(0,d.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function zx({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[(0,d.jsx)(dt,{w:n,h:n,radius:n*.25}),(0,d.jsx)(H,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Ox({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,d.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,d.jsx)(H,{w:e*(.3+r*13%25/100),h:3,strong:!0})]}),(0,d.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"\u25BC":"\u25B6"})]},r))})}function Ax({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*o},(r,l)=>(0,d.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,d.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,d.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},l))})}function Fx({width:e,height:t}){let n=Math.min(e,t);return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,d.jsx)("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Wx({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function jx({width:e,height:t}){let n=Math.max(2,t*.12),o=Math.min(t*.35,10),r=e*.55;return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,d.jsx)("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,d.jsx)("div",{style:{width:r,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),(0,d.jsx)("div",{style:{position:"absolute",left:r-o,width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Hx({width:e,height:t}){let n=Math.min(36,t*.15),o=7,r=4,l=Math.min((e-16)/o,(t-n-40)/(r+1));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsxs)("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,d.jsx)(H,{w:"40%",h:2}),(0,d.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,d.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,d.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,d.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,d.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,d.jsx)(H,{w:e*.25,h:2,strong:!0}),(0,d.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:o*r},(i,s)=>(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:l},children:(0,d.jsx)("div",{style:{width:l*.5,height:l*.5,borderRadius:"50%",background:s===10?"var(--agd-bar)":"transparent"},children:(0,d.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:s===10?1:.25}})})})},s))})]})]})}function Ux({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[(0,d.jsx)("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,d.jsx)("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,d.jsx)("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,d.jsx)("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Yx({width:e,height:t}){return(0,d.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,d.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[(0,d.jsx)(H,{w:"60%",h:2,strong:!0}),(0,d.jsx)("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Qx({width:e,height:t}){let n=Math.min(e,t);return(0,d.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:(0,d.jsx)("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Vx({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,d.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,d.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,d.jsx)("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Xx({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),o=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:o},(r,l)=>(0,d.jsxs)("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[(0,d.jsx)(dt,{w:n,h:n,radius:n*.25}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,d.jsx)(H,{w:`${40+l*13%20}%`,h:3,strong:!0}),(0,d.jsx)(H,{w:`${60+l*17%25}%`,h:2})]})]},l))})}function Gx({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.min(36,t*.25);return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[(0,d.jsx)(H,{w:e*.3,h:4,strong:!0}),(0,d.jsx)("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(r,l)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,d.jsx)(Sn,{size:o}),(0,d.jsx)(H,{w:e*.12,h:3,strong:!0}),(0,d.jsx)(H,{w:e*.08,h:2})]},l))})]})}function qx({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[(0,d.jsx)(H,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,d.jsx)(H,{w:e*.35,h:2}),(0,d.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(o,r)=>(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:Math.min(60,e*.2),h:2}),(0,d.jsx)(dt,{w:"100%",h:Math.min(32,t*.1),radius:4})]},r))}),(0,d.jsx)(dt,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),(0,d.jsx)(H,{w:e*.4,h:2})]})}function Kx({width:e,height:t}){return(0,d.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[(0,d.jsx)(H,{w:e*.4,h:4,strong:!0}),(0,d.jsx)(H,{w:e*.6,h:2}),(0,d.jsxs)("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:50,h:2}),(0,d.jsx)(dt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:40,h:2}),(0,d.jsx)(dt,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,d.jsx)(H,{w:50,h:2}),(0,d.jsx)(dt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,d.jsx)(H,{w:60,h:2}),(0,d.jsx)(dt,{w:"100%",h:"100%",radius:4})]}),(0,d.jsx)(dt,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Jx={navigation:F2,hero:W2,sidebar:j2,footer:H2,modal:U2,card:Y2,text:Q2,image:V2,table:X2,list:G2,button:q2,input:K2,form:J2,tabs:Z2,avatar:ex,badge:tx,header:nx,section:ox,grid:rx,dropdown:lx,toggle:ix,search:sx,toast:ax,progress:cx,chart:dx,video:ux,tooltip:_x,breadcrumb:fx,pagination:hx,divider:px,accordion:mx,carousel:gx,pricing:yx,testimonial:xx,cta:vx,alert:wx,banner:bx,stat:kx,stepper:Cx,tag:Sx,rating:Mx,map:Ex,timeline:Lx,fileUpload:Nx,codeBlock:Ix,calendar:$x,notification:Rx,productCard:Tx,profile:Px,drawer:Dx,popover:Bx,logo:zx,faq:Ox,gallery:Ax,checkbox:Fx,radio:Wx,slider:jx,datePicker:Hx,skeleton:Ux,chip:Yx,icon:Qx,spinner:Vx,feature:Xx,team:Gx,login:qx,contact:Kx};function Zx({type:e,width:t,height:n,text:o}){let r=Jx[e];return r?(0,d.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,d.jsx)(r,{width:t,height:n,text:o})}):(0,d.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var ev=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,z={overlay:"styles-module__overlay___aWh-q",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",overlayExiting:"styles-module__overlayExiting___iEmYr",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"},Vl=24,hc=5;function Y0(e,t,n,o,r){let l=1/0,i=1/0,s=e.x,a=e.x+e.width,u=e.x+e.width/2,m=e.y,f=e.y+e.height,h=e.y+e.height/2,C=!o,k=C?[s,a,u]:[...o.left?[s]:[],...o.right?[a]:[]],L=C?[m,f,h]:[...o.top?[m]:[],...o.bottom?[f]:[]],R=[];for(let re of t)n.has(re.id)||R.push(re);r&&R.push(...r);for(let re of R){let J=re.x,pe=re.x+re.width,ne=re.x+re.width/2,de=re.y,xe=re.y+re.height,Ct=re.y+re.height/2;for(let Ie of k)for(let at of[J,pe,ne]){let Pe=at-Ie;Math.abs(Pe)<hc&&Math.abs(Pe)<Math.abs(l)&&(l=Pe)}for(let Ie of L)for(let at of[de,xe,Ct]){let Pe=at-Ie;Math.abs(Pe)<hc&&Math.abs(Pe)<Math.abs(i)&&(i=Pe)}}let x=Math.abs(l)<hc?l:0,b=Math.abs(i)<hc?i:0,w=[],p=new Set,D=s+x,j=a+x,P=u+x,G=m+b,O=f+b,K=h+b;for(let re of R){let J=re.x,pe=re.x+re.width,ne=re.x+re.width/2,de=re.y,xe=re.y+re.height,Ct=re.y+re.height/2;for(let Ie of[J,ne,pe])for(let at of[D,P,j])if(Math.abs(at-Ie)<.5){let Pe=`x:${Math.round(Ie)}`;p.has(Pe)||(p.add(Pe),w.push({axis:"x",pos:Ie}))}for(let Ie of[de,Ct,xe])for(let at of[G,K,O])if(Math.abs(at-Ie)<.5){let Pe=`y:${Math.round(Ie)}`;p.has(Pe)||(p.add(Pe),w.push({axis:"y",pos:Ie}))}}return{dx:x,dy:b,guides:w}}function Q0(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function tv({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:o,isDarkMode:r,exiting:l,onInteractionChange:i,className:s,passthrough:a,extraSnapRects:u,onSelectionChange:m,deselectSignal:f,onDragMove:h,onDragEnd:C,clearingPlacements:k,wireframe:L}){let[R,x]=(0,rt.useState)(new Set),[b,w]=(0,rt.useState)(null),[p,D]=(0,rt.useState)(null),[j,P]=(0,rt.useState)(null),[G,O]=(0,rt.useState)([]),[K,re]=(0,rt.useState)(null),[J,pe]=(0,rt.useState)(!1),ne=(0,rt.useRef)(!1),[de,xe]=(0,rt.useState)(new Set),Ct=(0,rt.useRef)(new Map),Ie=(0,rt.useRef)(null),at=(0,rt.useRef)(null),Pe=(0,rt.useRef)(e);Pe.current=e;let st=(0,rt.useRef)(m);st.current=m;let At=(0,rt.useRef)(h);At.current=h;let mn=(0,rt.useRef)(C);mn.current=C;let Ne=(0,rt.useRef)(f);(0,rt.useEffect)(()=>{f!==Ne.current&&(Ne.current=f,x(new Set))},[f]),(0,rt.useEffect)(()=>{k!=null&&k.length&&(x(q=>new Set([...q].filter(ye=>!k.some(Le=>Le.id===ye)))),at.current=null)},[k]),(0,rt.useEffect)(()=>{let q=ye=>{let Le=ye.composedPath()[0]||ye.target;if(!(Le.tagName==="INPUT"||Le.tagName==="TEXTAREA"||Le.isContentEditable)){if((ye.key==="Backspace"||ye.key==="Delete")&&R.size>0){ye.preventDefault();let We=new Set(R);xe(We),x(new Set),ot(()=>{t(Pe.current.filter($e=>!We.has($e.id))),xe(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ye.key)&&R.size>0){ye.preventDefault();let We=ye.shiftKey?20:1,$e=ye.key==="ArrowLeft"?-We:ye.key==="ArrowRight"?We:0,Oe=ye.key==="ArrowUp"?-We:ye.key==="ArrowDown"?We:0;t(e.map(qe=>R.has(qe.id)?{...qe,x:Math.max(0,qe.x+$e),y:Math.max(0,qe.y+Oe)}:qe));return}if(ye.key==="Escape"){n?o(null):R.size>0&&x(new Set);return}}};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[R,n,e,t,o]);let Mn=(0,rt.useCallback)(q=>{if(q.button!==0||a||q.target.closest(`.${z.placement}`))return;q.preventDefault(),q.stopPropagation();let Le=window.scrollY,Ce=q.clientX,We=q.clientY;if(n){at.current="place",i==null||i(!0);let $e=!1,Oe=Ce,qe=We,Ye=E=>{Oe=E.clientX,qe=E.clientY;let I=Math.abs(Oe-Ce),F=Math.abs(qe-We);if((I>5||F>5)&&($e=!0),$e){let U=Math.min(Ce,Oe),le=Math.min(We,qe),ie=Math.abs(Oe-Ce),Z=Math.abs(qe-We);w({x:U,y:le,w:ie,h:Z}),P({x:E.clientX+12,y:E.clientY+12,text:`${Math.round(ie)} \xD7 ${Math.round(Z)}`})}},Y=E=>{window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",Y),w(null),P(null),at.current=null,i==null||i(!1);let I=ae[n],F,U,le,ie;$e?(F=Math.min(Ce,Oe),U=Math.min(We,qe)+Le,le=Math.max(Vl,Math.abs(Oe-Ce)),ie=Math.max(Vl,Math.abs(qe-We))):(le=I.width,ie=I.height,F=Ce-le/2,U=We+Le-ie/2),F=Math.max(0,F),U=Math.max(0,U);let Z={id:Q0(),type:n,x:F,y:U,width:le,height:ie,scrollY:Le,timestamp:Date.now()},De=[...e,Z];t(De),x(new Set([Z.id])),o(null)};window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",Y)}else{q.shiftKey||x(new Set),at.current="select";let $e=!1,Oe=Ye=>{let Y=Math.abs(Ye.clientX-Ce),E=Math.abs(Ye.clientY-We);if((Y>4||E>4)&&($e=!0),$e){let I=Math.min(Ce,Ye.clientX),F=Math.min(We,Ye.clientY);D({x:I,y:F,w:Math.abs(Ye.clientX-Ce),h:Math.abs(Ye.clientY-We)})}},qe=Ye=>{if(window.removeEventListener("mousemove",Oe),window.removeEventListener("mouseup",qe),at.current=null,$e){let Y=Math.min(Ce,Ye.clientX),E=Math.min(We,Ye.clientY)+Le,I=Math.abs(Ye.clientX-Ce),F=Math.abs(Ye.clientY-We),U=new Set(q.shiftKey?R:new Set);for(let le of e){let ie=le.y-Le;le.x+le.width>Y&&le.x<Y+I&&le.y+le.height>E&&le.y<E+F&&U.add(le.id)}x(U)}D(null)};window.addEventListener("mousemove",Oe),window.addEventListener("mouseup",qe)}},[n,a,e,t,R]),Po=(0,rt.useCallback)((q,ye)=>{var De;if(q.button!==0)return;let Le=q.target;if(Le.closest(`.${z.handle}`)||Le.closest(`.${z.deleteButton}`))return;q.preventDefault(),q.stopPropagation();let Ce;q.shiftKey?(Ce=new Set(R),Ce.has(ye)?Ce.delete(ye):Ce.add(ye)):R.has(ye)?Ce=new Set(R):Ce=new Set([ye]),x(Ce),(Ce.size!==R.size||[...Ce].some(ge=>!R.has(ge)))&&((De=st.current)==null||De.call(st,Ce,q.shiftKey));let $e=window.scrollY,Oe=q.clientX,qe=q.clientY,Ye=new Map;for(let ge of e)Ce.has(ge.id)&&Ye.set(ge.id,{x:ge.x,y:ge.y});at.current="move",i==null||i(!0);let Y=!1,E=!1,I=e,F=0,U=0,le=new Map;for(let ge of e)Ye.has(ge.id)&&le.set(ge.id,{w:ge.width,h:ge.height});let ie=ge=>{var ft;let Re=ge.clientX-Oe,Ke=ge.clientY-qe;if((Math.abs(Re)>2||Math.abs(Ke)>2)&&(Y=!0),!Y)return;if(ge.altKey&&!E){E=!0;let te=[];for(let Lt of e)Ye.has(Lt.id)&&te.push({...Lt,id:Q0(),timestamp:Date.now()});I=[...e,...te]}let ve=1/0,je=1/0,Te=-1/0,gt=-1/0;for(let[te,Lt]of Ye){let zt=le.get(te);zt&&(ve=Math.min(ve,Lt.x+Re),je=Math.min(je,Lt.y+Ke),Te=Math.max(Te,Lt.x+Re+zt.w),gt=Math.max(gt,Lt.y+Ke+zt.h))}let tt={x:ve,y:je,width:Te-ve,height:gt-je},{dx:ut,dy:xt,guides:Xe}=Y0(tt,I,new Set(Ye.keys()),void 0,u);O(Xe);let Ve=Re+ut,_t=Ke+xt;F=Ve,U=_t,t(I.map(te=>{let Lt=Ye.get(te.id);return Lt?{...te,x:Math.max(0,Lt.x+Ve),y:Math.max(0,Lt.y+_t)}:te})),(ft=At.current)==null||ft.call(At,Ve,_t)},Z=()=>{var ge;window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",Z),at.current=null,i==null||i(!1),O([]),(ge=mn.current)==null||ge.call(mn,F,U,Y)};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",Z)},[R,e,t,i]),qo=(0,rt.useCallback)((q,ye,Le)=>{q.preventDefault(),q.stopPropagation();let Ce=e.find(U=>U.id===ye);if(!Ce)return;x(new Set([ye])),at.current="resize",i==null||i(!0);let We=q.clientX,$e=q.clientY,Oe=Ce.width,qe=Ce.height,Ye=Ce.x,Y=Ce.y,E={left:Le.includes("w"),right:Le.includes("e"),top:Le.includes("n"),bottom:Le.includes("s")},I=U=>{let le=U.clientX-We,ie=U.clientY-$e,Z=Oe,De=qe,ge=Ye,Re=Y;Le.includes("e")&&(Z=Math.max(Vl,Oe+le)),Le.includes("w")&&(Z=Math.max(Vl,Oe-le),ge=Ye+Oe-Z),Le.includes("s")&&(De=Math.max(Vl,qe+ie)),Le.includes("n")&&(De=Math.max(Vl,qe-ie),Re=Y+qe-De);let Ke={x:ge,y:Re,width:Z,height:De},{dx:ve,dy:je,guides:Te}=Y0(Ke,Pe.current,new Set([ye]),E,u);O(Te),ve!==0&&(E.right?Z+=ve:E.left&&(ge+=ve,Z-=ve)),je!==0&&(E.bottom?De+=je:E.top&&(Re+=je,De-=je)),t(Pe.current.map(gt=>gt.id===ye?{...gt,x:ge,y:Re,width:Z,height:De}:gt)),P({x:U.clientX+12,y:U.clientY+12,text:`${Math.round(Z)} \xD7 ${Math.round(De)}`})},F=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",F),P(null),at.current=null,i==null||i(!1),O([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",F)},[e,t,i]),Ko=(0,rt.useCallback)(q=>{at.current=null,xe(ye=>{let Le=new Set(ye);return Le.add(q),Le}),x(ye=>{let Le=new Set(ye);return Le.delete(q),Le}),ot(()=>{t(Pe.current.filter(ye=>ye.id!==q)),xe(ye=>{let Le=new Set(ye);return Le.delete(q),Le})},180)},[t]),Ut=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),Dn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},gn=(0,rt.useCallback)(q=>{let ye=e.find(Le=>Le.id===q);ye&&(ne.current=!!ye.text,re(q),pe(!1))},[e]),Bt=(0,rt.useCallback)(()=>{K&&(pe(!0),ot(()=>{re(null),pe(!1)},150))},[K]);(0,rt.useEffect)(()=>{l&&K&&Bt()},[l]);let io=(0,rt.useCallback)(q=>{K&&(t(e.map(ye=>ye.id===K?{...ye,text:q.trim()||void 0}:ye)),Bt())},[K,e,t,Bt]),wo=typeof window!="undefined"?window.scrollY:0,Mr=["nw","ne","se","sw"],Qn=L?"#f97316":"#3c82f7",Do=[{dir:"n",cls:z.edgeN,arrow:(0,yt.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,yt.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:Qn})})},{dir:"e",cls:z.edgeE,arrow:(0,yt.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,yt.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:Qn})})},{dir:"s",cls:z.edgeS,arrow:(0,yt.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,yt.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:Qn})})},{dir:"w",cls:z.edgeW,arrow:(0,yt.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,yt.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:Qn})})}];return(0,yt.jsxs)(yt.Fragment,{children:[(0,yt.jsx)("div",{ref:Ie,className:`${z.overlay} ${r?"":z.light} ${n?z.placing:""} ${a?z.passthrough:""} ${l?z.overlayExiting:""} ${L?z.wireframe:""}${s?` ${s}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Mn,children:e.map(q=>{var We;let ye=R.has(q.id),Le=((We=vo[q.type])==null?void 0:We.label)||q.type,Ce=q.y-wo;return(0,yt.jsxs)("div",{"data-design-placement":q.id,className:`${z.placement} ${ye?z.selected:""} ${de.has(q.id)||k!=null&&k.includes(q)?z.exiting:""}`,style:{left:q.x,top:Ce,width:q.width,height:q.height,position:"fixed"},onMouseDown:$e=>Po($e,q.id),onDoubleClick:()=>gn(q.id),children:[(0,yt.jsx)("span",{className:z.placementLabel,children:Le}),(0,yt.jsx)("span",{className:`${z.placementAnnotation} ${q.text?z.annotationVisible:""}`,children:(q.text&&Ct.current.set(q.id,q.text),q.text||Ct.current.get(q.id)||"")}),(0,yt.jsx)("div",{className:z.placementContent,children:(0,yt.jsx)(Zx,{type:q.type,width:q.width,height:q.height,text:q.text})}),(0,yt.jsx)("div",{className:z.deleteButton,onMouseDown:$e=>$e.stopPropagation(),onClick:()=>Ko(q.id),children:"\u2715"}),Mr.map($e=>(0,yt.jsx)("div",{className:`${z.handle} ${z[`handle${$e.charAt(0).toUpperCase()}${$e.slice(1)}`]}`,onMouseDown:Oe=>qo(Oe,q.id,$e)},$e)),Do.map(({dir:$e,cls:Oe,arrow:qe})=>(0,yt.jsx)("div",{className:`${z.edgeHandle} ${Oe}`,onMouseDown:Ye=>qo(Ye,q.id,$e),children:qe},$e))]},q.id)})}),K&&(()=>{var Y,E;let q=e.find(I=>I.id===K);if(!q)return null;let ye=q.y-wo,Le=q.x+q.width/2,Ce=ye-8,We=ye+q.height+8,$e=Ce>200,Oe=We<window.innerHeight-100,qe=Math.max(160,Math.min(window.innerWidth-160,Le)),Ye;return $e?Ye={left:qe,bottom:window.innerHeight-Ce}:Oe?Ye={left:qe,top:We}:Ye={left:qe,top:Math.max(80,window.innerHeight/2-80)},(0,yt.jsx)(K_,{element:((Y=vo[q.type])==null?void 0:Y.label)||q.type,placeholder:Dn[q.type]||"Label or content text",initialValue:(E=q.text)!=null?E:"",submitLabel:ne.current?"Save":"Set",onSubmit:io,onCancel:Bt,onDelete:ne.current?()=>{io("")}:void 0,isExiting:J,lightMode:!r,style:Ye})})(),b&&(0,yt.jsx)("div",{className:z.drawBox,style:{left:b.x,top:b.y,width:b.w,height:b.h},"data-feedback-toolbar":!0}),p&&(0,yt.jsx)("div",{className:z.selectBox,style:{left:p.x,top:p.y,width:p.w,height:p.h},"data-feedback-toolbar":!0}),j&&(0,yt.jsx)("div",{className:z.sizeIndicator,style:{left:j.x,top:j.y},"data-feedback-toolbar":!0,children:j.text}),G.map((q,ye)=>(0,yt.jsx)("div",{className:z.guideLine,style:q.axis==="x"?{position:"fixed",left:q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:q.pos-wo,right:0,height:1},"data-feedback-toolbar":!0},`${q.axis}-${q.pos}-${ye}`))]})}function Pg(e,{keepMounted:t=!1,onExited:n}={}){let[o,r]=(0,Sr.useState)(t||e),l=(0,Sr.useRef)(null),i=(0,Sr.useRef)(n);return e&&!o&&r(!0),(0,Sr.useLayoutEffect)(()=>{i.current=n},[n]),(0,Sr.useLayoutEffect)(()=>{var m,f;let s=l.current;if(!s||s.dataset.panelOpen==="true"===e)return;getComputedStyle(s).opacity,s.dataset.panelPresent="true",s.dataset.panelOpen=String(e);let a=!1,u=(f=(m=s.getAnimations)==null?void 0:m.call(s))!=null?f:[];return Promise.allSettled(u.map(h=>h.finished)).then(()=>{var h;a||e||(delete s.dataset.panelPresent,t||r(!1),(h=i.current)==null||h.call(i))}),()=>{a=!0}},[e,o,t]),{ref:l,mounted:o}}function nv(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?z.fadeTop:""} ${n?z.fadeBottom:""}`}var y="currentColor",B="0.5";function ov({type:e}){switch(e){case"navigation":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:y,opacity:".4"}),(0,c.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"})]});case"header":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:y,opacity:".35"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:y,opacity:".15"})]});case"hero":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".35"}),(0,c.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:y,strokeWidth:B})]});case"section":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".15"})]});case"sidebar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:y,opacity:".15"})]});case"footer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:y,opacity:".2"})]});case"modal":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:y,strokeWidth:B})]});case"divider":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:y,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:y,opacity:".04"}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".12"})]});case"text":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"image":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"video":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:y,strokeWidth:B,fill:y,opacity:".15"})]});case"table":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:y,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:y,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:B})]});case"list":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".2"})]});case"chart":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:y,opacity:".2"})]});case"accordion":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:B})]});case"carousel":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:y,strokeWidth:B,opacity:".35"}),(0,c.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:y,strokeWidth:B,opacity:".35"}),(0,c.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:y,opacity:".35"}),(0,c.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:y,opacity:".15"}),(0,c.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:y,opacity:".15"})]});case"button":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"})]});case"input":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"search":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:B,opacity:".3"}),(0,c.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:y,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"form":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:y,strokeWidth:B})]});case"tabs":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:B})]});case"dropdown":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:y,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:y,strokeWidth:B,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:y,opacity:".3"})]});case"avatar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:y,strokeWidth:B}),(0,c.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:y,strokeWidth:B})]});case"badge":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"})]});case"breadcrumb":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:y,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("path",{d:"M14 7l1 1-1 1",stroke:y,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:y,opacity:".15"})]});case"pagination":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:y,opacity:".15",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:B})]});case"progress":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:y,opacity:".2"})]});case"toast":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:y,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"tooltip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:y,strokeWidth:B})]});case"pricing":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),(0,c.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),(0,c.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:y,opacity:".2"})]});case"testimonial":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:y,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".12"}),(0,c.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:y,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:y,opacity:".15"})]});case"cta":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:y,strokeWidth:B})]});case"alert":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:B,opacity:".3"}),(0,c.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:y,strokeWidth:"0.6",opacity:".5"}),(0,c.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:y,opacity:".5"}),(0,c.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".2"})]});case"banner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:y,strokeWidth:B})]});case"stat":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"stepper":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:y,opacity:".2",stroke:y,strokeWidth:B}),(0,c.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:y,strokeWidth:B}),(0,c.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:y,strokeWidth:B})]});case"tag":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:y,strokeWidth:B,opacity:".2"}),(0,c.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:y,strokeWidth:B,opacity:".2"})]});case"rating":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:y,opacity:".25"}),(0,c.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:y,opacity:".25"}),(0,c.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:y,strokeWidth:B,opacity:".25"})]});case"map":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:y,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:y,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:y,opacity:".15",stroke:y,strokeWidth:B})]});case"timeline":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:y,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:y,opacity:".2",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:y,opacity:".15"})]});case"fileUpload":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:B,strokeDasharray:"2 1"}),(0,c.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:y,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"})]});case"codeBlock":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:y,opacity:".3"}),(0,c.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:y,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:y,opacity:".3"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"calendar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:y,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:y,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:y,opacity:".2"})]});case"notification":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:y,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:y,opacity:".12"}),(0,c.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:y,opacity:".25"})]});case"productCard":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:y,opacity:".04"}),(0,c.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:y,strokeWidth:B})]});case"profile":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"drawer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:B,opacity:".15"})]});case"popover":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:y,strokeWidth:B})]});case"logo":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:y,strokeWidth:B}),(0,c.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:y,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:y,opacity:".12"})]});case"faq":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:y,opacity:".12"}),(0,c.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"gallery":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:B})]});case"checkbox":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:y,strokeWidth:B,opacity:".35"})]});case"radio":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:y,strokeWidth:B}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:y,opacity:".3"})]});case"slider":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:y,strokeWidth:B})]});case"datePicker":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:y,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:y,strokeWidth:B,strokeDasharray:"2 1",opacity:".3"}),(0,c.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:y,opacity:".3"}),(0,c.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:y,opacity:".2"})]});case"skeleton":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:y,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:y,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:y,opacity:".08"})]});case"chip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:y,opacity:".08",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:y,strokeWidth:B,opacity:".2"}),(0,c.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:y,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:y,strokeWidth:B,opacity:".25"})]});case"icon":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:y,strokeWidth:B,opacity:".3"})});case"spinner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:y,strokeWidth:B,opacity:".12"}),(0,c.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:y,strokeWidth:B,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:y,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"team":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:y,strokeWidth:B,opacity:".5"}),(0,c.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:y,opacity:".1"})]});case"login":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:y,opacity:".2"})]});case"contact":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:y,strokeWidth:B}),(0,c.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:y,opacity:".2"})]});default:return null}}function rv({activeType:e,onSelect:t,onDragStart:n,scrollRef:o,fadeClass:r,blankCanvas:l}){return(0,c.jsx)("div",{ref:o,className:`${z.placeScroll} ${r||""}`,children:Tg.map(i=>(0,c.jsxs)("div",{className:z.paletteSection,children:[(0,c.jsx)("div",{className:z.paletteSectionTitle,children:i.section}),i.items.map(s=>(0,c.jsxs)("button",{type:"button","aria-pressed":e===s.type,className:`${z.paletteItem} ${e===s.type?z.active:""} ${l?z.wireframe:""}`,onClick:()=>t(s.type),onMouseDown:a=>{a.button===0&&n(s.type,a)},children:[(0,c.jsx)("span",{className:z.paletteItemIcon,"aria-hidden":"true",children:(0,c.jsx)(ov,{type:s.type})}),(0,c.jsx)("span",{className:z.paletteItemLabel,children:s.label})]},s.type))]},i.section))})}function lv({value:e,suffix:t}){let[n,o]=(0,Kt.useState)(null),[r,l]=(0,Kt.useState)(t),[i,s]=(0,Kt.useState)("up"),a=(0,Kt.useRef)(e),u=(0,Kt.useRef)(t),m=(0,Kt.useRef)(),f=n!==null&&r!==t;return(0,Kt.useEffect)(()=>{if(e!==a.current){if(e===0){a.current=e,u.current=t,o(null);return}s(e>a.current?"up":"down"),o(a.current),l(u.current),a.current=e,u.current=t,clearTimeout(m.current),m.current=ot(()=>o(null),250)}else u.current=t},[e,t]),n===null?(0,c.jsxs)(c.Fragment,{children:[e,t?` ${t}`:""]}):f?(0,c.jsxs)("span",{className:z.rollingWrap,children:[(0,c.jsxs)("span",{style:{visibility:"hidden"},children:[e," ",t]}),(0,c.jsxs)("span",{className:`${z.rollingNum} ${i==="up"?z.exitUp:z.exitDown}`,children:[n," ",r]},`o${n}-${e}`),(0,c.jsxs)("span",{className:`${z.rollingNum} ${i==="up"?z.enterUp:z.enterDown}`,children:[e," ",t]},`n${e}`)]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("span",{className:z.rollingWrap,children:[(0,c.jsx)("span",{style:{visibility:"hidden"},children:e}),(0,c.jsx)("span",{className:`${z.rollingNum} ${i==="up"?z.exitUp:z.exitDown}`,children:n},`o${n}-${e}`),(0,c.jsx)("span",{className:`${z.rollingNum} ${i==="up"?z.enterUp:z.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function iv({activeType:e,onSelect:t,isDarkMode:n,sectionCount:o,onDetectSections:r,visible:l,onExited:i,placementCount:s,onClearPlacements:a,onDragStart:u,blankCanvas:m,onBlankCanvasChange:f,wireframePurpose:h,onWireframePurposeChange:C,Tooltip:k}){let{ref:L,mounted:R}=Pg(l,{onExited:i}),[x,b]=(0,Kt.useState)(!1),[w,p]=(0,Kt.useState)(!0),D=(0,Kt.useRef)(0),j=(0,Kt.useRef)(""),P=(0,Kt.useRef)(null),[G,O]=(0,Kt.useState)(""),K=s>0||o>0,re=s+o;if(re>0&&(D.current=re,j.current=m?re===1?"Component":"Components":re===1?"Change":"Changes"),(0,Kt.useEffect)(()=>{if(K)x?p(!1):(p(!0),b(!0),Sc(()=>{Sc(()=>{p(!1)})}));else{p(!0);let pe=ot(()=>b(!1),300);return()=>clearTimeout(pe)}},[K]),(0,Kt.useEffect)(()=>{if(!l)return;let pe=P.current;if(!pe)return;let ne=()=>O(nv(pe));pe.addEventListener("scroll",ne,{passive:!0});let de=new ResizeObserver(ne);return de.observe(pe),()=>{pe.removeEventListener("scroll",ne),de.disconnect()}},[l]),!R)return null;let J=[];return s>0&&J.push("placed"),o>0&&J.push("captured"),(0,c.jsxs)("div",{className:`${z.palette} ${n?"":z.light}`,ref:pe=>{L.current=pe,pe==null||pe.toggleAttribute("inert",!l)},"aria-hidden":!l,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:pe=>pe.stopPropagation(),onMouseDown:pe=>pe.stopPropagation(),children:[(0,c.jsxs)("div",{className:z.paletteHeader,children:[(0,c.jsx)("div",{className:z.paletteHeaderTitle,children:"Layout Mode"}),(0,c.jsxs)("div",{className:z.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,c.jsx)("a",{href:"https://agentation.com/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,c.jsxs)("button",{type:"button","aria-pressed":m,className:`${z.canvasToggle} ${m?z.active:""}`,onClick:()=>f(!m),children:[(0,c.jsx)("span",{className:z.canvasToggleIcon,"aria-hidden":"true",children:(0,c.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,c.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,c.jsx)("span",{className:z.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,c.jsx)("div",{className:`${z.wireframePurposeWrap} ${m?"":z.collapsed}`,"aria-hidden":!m,ref:pe=>{pe==null||pe.toggleAttribute("inert",!m)},children:(0,c.jsx)("div",{className:z.wireframePurposeInner,children:(0,c.jsx)("textarea",{className:z.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:h,onChange:pe=>C(pe.target.value),rows:2})})}),(0,c.jsx)(rv,{activeType:e,onSelect:t,onDragStart:u,scrollRef:P,fadeClass:G,blankCanvas:m}),x&&(0,c.jsx)("div",{className:`${z.paletteFooterWrap} ${w?z.footerHidden:""}`,children:(0,c.jsx)("div",{className:z.paletteFooterInner,children:(0,c.jsx)("div",{className:z.paletteFooterInnerContent,children:(0,c.jsxs)("div",{className:z.paletteFooter,children:[(0,c.jsx)("span",{className:z.paletteFooterCount,children:(0,c.jsx)(lv,{value:D.current,suffix:j.current})}),(0,c.jsx)("button",{className:z.paletteFooterClear,onClick:a,children:"Clear"})]})})})})]})}var sv=new Set(["nav","header","main","section","article","footer","aside"]),F_={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},V0={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},av=new Set(["script","style","noscript","link","meta"]),cv=40;function Dg(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function rl(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){let r=e.className.split(/\s+/).filter(l=>l.length>0).find(l=>l.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(l)&&!/^[a-z]{1,2}$/.test(l));if(r){let l=`${t}.${CSS.escape(r)}`;if(document.querySelectorAll(l).length===1)return l}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":rl(n)} > ${t}:nth-child(${r})`}return t}function Mc(e){var i;let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let o=e.getAttribute("role");if(o&&F_[o])return F_[o];if(V0[t])return V0[t];let r=e.querySelector("h1, h2, h3, h4, h5, h6");if(r){let s=(i=r.textContent)==null?void 0:i.trim();if(s&&s.length<=50)return s;if(s)return s.slice(0,47)+"..."}let{name:l}=Gl(e);return l.charAt(0).toUpperCase()+l.slice(1)}function Bg(e){let t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(o=>o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(o=>o.length>2&&!/^[a-z]{1,2}$/.test(o))||null}function zg(e){var o;let t=(o=e.textContent)==null?void 0:o.trim();if(!t)return null;let n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"\u2026"}function dv(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let o=[];return n.forEach((r,l)=>{if(!(r instanceof HTMLElement))return;let i=r.tagName.toLowerCase();if(av.has(i)||r.hasAttribute("data-feedback-toolbar")||r.closest("[data-feedback-toolbar]"))return;let s=window.getComputedStyle(r);if(s.display==="none"||s.visibility==="hidden")return;let a=r.getBoundingClientRect();if(a.height<cv)return;let u=sv.has(i),m=r.getAttribute("role")&&F_[r.getAttribute("role")],f=i==="div"&&a.height>=60;if(!u&&!m&&!f)return;let h=window.scrollY,C=Dg(r),k={x:a.x,y:C?a.y:a.y+h,width:a.width,height:a.height};o.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Mc(r),tagName:i,selector:rl(r),role:r.getAttribute("role"),className:Bg(r),textSnippet:zg(r),originalRect:k,currentRect:{...k},originalIndex:l,isFixed:C})}),o}function uv(e){let t=window.scrollY,n=e.getBoundingClientRect(),o=Dg(e),r={x:n.x,y:o?n.y:n.y+t,width:n.width,height:n.height},l=e.parentElement,i=0;return l&&(i=Array.from(l.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Mc(e),tagName:e.tagName.toLowerCase(),selector:rl(e),role:e.getAttribute("role"),className:Bg(e),textSnippet:zg(e),originalRect:r,currentRect:{...r},originalIndex:i,isFixed:o}}var X0={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},G0=["nw","n","ne","e","se","s","sw","w"],pc=24,q0=16,mc=5;function K0(e,t,n,o){let r=1/0,l=1/0,i=e.x,s=e.x+e.width,a=e.x+e.width/2,u=e.y,m=e.y+e.height,f=e.y+e.height/2,h=[];for(let P of t)n.has(P.id)||h.push(P.currentRect);o&&h.push(...o);for(let P of h){let G=P.x,O=P.x+P.width,K=P.x+P.width/2,re=P.y,J=P.y+P.height,pe=P.y+P.height/2;for(let ne of[i,s,a])for(let de of[G,O,K]){let xe=de-ne;Math.abs(xe)<mc&&Math.abs(xe)<Math.abs(r)&&(r=xe)}for(let ne of[u,m,f])for(let de of[re,J,pe]){let xe=de-ne;Math.abs(xe)<mc&&Math.abs(xe)<Math.abs(l)&&(l=xe)}}let C=Math.abs(r)<mc?r:0,k=Math.abs(l)<mc?l:0,L=[],R=new Set,x=i+C,b=s+C,w=a+C,p=u+k,D=m+k,j=f+k;for(let P of h){let G=P.x,O=P.x+P.width,K=P.x+P.width/2,re=P.y,J=P.y+P.height,pe=P.y+P.height/2;for(let ne of[G,K,O])for(let de of[x,w,b])if(Math.abs(de-ne)<.5){let xe=`x:${Math.round(ne)}`;R.has(xe)||(R.add(xe),L.push({axis:"x",pos:ne}))}for(let ne of[re,pe,J])for(let de of[p,j,D])if(Math.abs(de-ne)<.5){let xe=`y:${Math.round(ne)}`;R.has(xe)||(R.add(xe),L.push({axis:"y",pos:ne}))}}return{dx:C,dy:k,guides:L}}var _v=new Set(["script","style","noscript","link","meta","br","hr"]);function J0(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(_v.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=q0&&n.height>=q0)return t;t=t.parentElement}return null}function fv({rearrangeState:e,onChange:t,isDarkMode:n,exiting:o,className:r,blankCanvas:l,extraSnapRects:i,onSelectionChange:s,deselectSignal:a,onDragMove:u,onDragEnd:m,clearing:f}){let{sections:h}=e,C=(0,ke.useRef)(e);C.current=e;let[k,L]=(0,ke.useState)(new Set);(0,ke.useEffect)(()=>{f&&L(new Set)},[f]);let R=(0,ke.useRef)(a);(0,ke.useEffect)(()=>{a!==R.current&&(R.current=a,L(new Set))},[a]);let[x,b]=(0,ke.useState)(null),[w,p]=(0,ke.useState)(!1),D=(0,ke.useRef)(!1),j=(0,ke.useCallback)(E=>{let I=h.find(F=>F.id===E);I&&(D.current=!!I.note,b(E),p(!1))},[h]),P=(0,ke.useCallback)(()=>{x&&(p(!0),ot(()=>{b(null),p(!1)},150))},[x]),G=(0,ke.useCallback)(E=>{x&&(t({...e,sections:h.map(I=>I.id===x?{...I,note:E.trim()||void 0}:I)}),P())},[x,h,e,t,P]);(0,ke.useEffect)(()=>{o&&x&&P()},[o]);let[O,K]=(0,ke.useState)(new Set),re=(0,ke.useRef)(new Map),[J,pe]=(0,ke.useState)(null),[ne,de]=(0,ke.useState)(null),[xe,Ct]=(0,ke.useState)([]),[Ie,at]=(0,ke.useState)(0),Pe=(0,ke.useRef)(null),st=(0,ke.useRef)(new Set),At=(0,ke.useRef)(new Map),[mn,Ne]=(0,ke.useState)(new Map),[Mn,Po]=(0,ke.useState)(new Map),qo=(0,ke.useRef)(new Set),Ko=(0,ke.useRef)(new Map),Ut=(0,ke.useRef)(s);Ut.current=s;let Dn=(0,ke.useRef)(u);Dn.current=u;let gn=(0,ke.useRef)(m);gn.current=m,(0,ke.useEffect)(()=>{l&&L(new Set)},[l]);let[Bt,io]=(0,ke.useState)(()=>!e.sections.some(E=>{let I=E.originalRect,F=E.currentRect;return Math.abs(I.x-F.x)>1||Math.abs(I.y-F.y)>1||Math.abs(I.width-F.width)>1||Math.abs(I.height-F.height)>1}));(0,ke.useEffect)(()=>{if(!Bt){let E=ot(()=>io(!0),380);return()=>clearTimeout(E)}},[]);let wo=(0,ke.useRef)(new Set);(0,ke.useEffect)(()=>{wo.current=new Set(h.map(E=>E.selector))},[h]),(0,ke.useEffect)(()=>{let E=()=>at(window.scrollY);return E(),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E)}},[]),(0,ke.useEffect)(()=>{let E=I=>{if(Pe.current){pe(null);return}let F=document.elementFromPoint(I.clientX,I.clientY);if(!F){pe(null);return}if(F.closest("[data-feedback-toolbar]")){pe(null);return}if(F.closest("[data-design-placement]")){pe(null);return}if(F.closest("[data-annotation-popup]")){pe(null);return}let U=J0(F);if(!U){pe(null);return}for(let ie of wo.current)try{let Z=document.querySelector(ie);if(Z&&(Z===U||U.contains(Z))){pe(null);return}}catch{}let le=U.getBoundingClientRect();pe({x:le.x,y:le.y,w:le.width,h:le.height})};return document.addEventListener("mousemove",E,{passive:!0}),()=>document.removeEventListener("mousemove",E)},[h]),(0,ke.useEffect)(()=>{let E=document.body.style.userSelect;return document.body.style.webkitUserSelect="none",document.body.style.userSelect="none",()=>{document.body.style.webkitUserSelect=E,document.body.style.userSelect=E}},[]),(0,ke.useEffect)(()=>{let E=I=>{var Z,De,ge,Re,Ke;if(Pe.current||I.button!==0)return;let F=(Z=I.composedPath()[0])!=null?Z:I.target;if(!F||F.closest("[data-feedback-toolbar]")||F.closest("[data-design-placement]")||F.closest("[data-annotation-popup]"))return;let U=J0(F),le=!1;if(U)for(let ve of wo.current)try{let je=document.querySelector(ve);if(je&&(je===U||U.contains(je))){le=!0;break}}catch{}let ie=!!(I.shiftKey||I.metaKey||I.ctrlKey);if(U&&!le){I.preventDefault(),I.stopPropagation();let ve=uv(U),je=[...h,ve],Te=[...e.originalOrder,ve.id];t({...e,sections:je,originalOrder:Te});let gt=new Set([ve.id]);L(gt),(De=Ut.current)==null||De.call(Ut,gt,ie),pe(null);let tt=I.clientX,ut=I.clientY,xt={x:ve.currentRect.x,y:ve.currentRect.y},Xe=ve.originalRect,Ve=!1,_t=0,ft=0;Pe.current="move";let te=zt=>{var On;let Bn=zt.clientX-tt,yn=zt.clientY-ut;if(!Ve&&(Math.abs(Bn)>2||Math.abs(yn)>2)&&(Ve=!0),!Ve)return;let xn={x:xt.x+Bn,y:xt.y+yn,width:ve.currentRect.width,height:ve.currentRect.height},so=K0(xn,je,new Set([ve.id]),i);Ct(so.guides);let ln=Bn+so.dx,vn=yn+so.dy;_t=ln,ft=vn;let zn=Y().querySelector(`[data-rearrange-section="${ve.id}"]`);zn&&(zn.style.transform=`translate(${ln}px, ${vn}px)`),Ne(new Map([[ve.id,{x:xt.x+ln,y:xt.y+vn,width:ve.currentRect.width,height:ve.currentRect.height}]])),(On=Dn.current)==null||On.call(Dn,ln,vn)},Lt=()=>{var Bn;window.removeEventListener("mousemove",te),window.removeEventListener("mouseup",Lt),Pe.current=null,Ct([]),Ne(new Map);let zt=Y().querySelector(`[data-rearrange-section="${ve.id}"]`);zt&&(zt.style.transform=""),Ve&&t({...e,sections:je.map(yn=>yn.id===ve.id?{...yn,currentRect:{...yn.currentRect,x:Math.max(0,xt.x+_t),y:Math.max(0,xt.y+ft)}}:yn),originalOrder:Te}),(Bn=gn.current)==null||Bn.call(gn,_t,ft,Ve)};window.addEventListener("mousemove",te),window.addEventListener("mouseup",Lt)}else if(le&&U){I.preventDefault();for(let ve of h)try{let je=document.querySelector(ve.selector);if(je&&je===U){let Te=new Set([ve.id]);L(Te),(ge=Ut.current)==null||ge.call(Ut,Te,ie);return}}catch{}ie||(L(new Set),(Re=Ut.current)==null||Re.call(Ut,new Set,!1))}else ie||(L(new Set),(Ke=Ut.current)==null||Ke.call(Ut,new Set,!1))};return document.addEventListener("mousedown",E,!0),()=>document.removeEventListener("mousedown",E,!0)},[h,e,t]),(0,ke.useEffect)(()=>{let E=I=>{let F=I.composedPath()[0]||I.target;if(!(F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable)){if((I.key==="Backspace"||I.key==="Delete")&&k.size>0){I.preventDefault();let U=new Set(k);K(le=>{let ie=new Set(le);for(let Z of U)ie.add(Z);return ie}),L(new Set),ot(()=>{let le=C.current;t({...le,sections:le.sections.filter(ie=>!U.has(ie.id)),originalOrder:le.originalOrder.filter(ie=>!U.has(ie))}),K(ie=>{let Z=new Set(ie);for(let De of U)Z.delete(De);return Z})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(I.key)&&k.size>0){I.preventDefault();let U=I.shiftKey?20:1,le=I.key==="ArrowLeft"?-U:I.key==="ArrowRight"?U:0,ie=I.key==="ArrowUp"?-U:I.key==="ArrowDown"?U:0;t({...e,sections:h.map(Z=>k.has(Z.id)?{...Z,currentRect:{...Z.currentRect,x:Math.max(0,Z.currentRect.x+le),y:Math.max(0,Z.currentRect.y+ie)}}:Z)});return}I.key==="Escape"&&k.size>0&&L(new Set)}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[k,h,e,t]);let Mr=(0,ke.useCallback)((E,I)=>{var gt;if(E.button!==0)return;let F=E.target;if(F.closest(`.${z.handle}`)||F.closest(`.${z.deleteButton}`))return;E.preventDefault(),E.stopPropagation();let U;E.shiftKey||E.metaKey||E.ctrlKey?(U=new Set(k),U.has(I)?U.delete(I):U.add(I)):k.has(I)?U=new Set(k):U=new Set([I]),L(U),(U.size!==k.size||[...U].some(tt=>!k.has(tt)))&&((gt=Ut.current)==null||gt.call(Ut,U,!!(E.shiftKey||E.metaKey||E.ctrlKey)));let ie=E.clientX,Z=E.clientY,De=new Map;for(let tt of h)U.has(tt.id)&&De.set(tt.id,{x:tt.currentRect.x,y:tt.currentRect.y});Pe.current="move";let ge=!1,Re=0,Ke=0,ve=new Map;for(let tt of h)if(U.has(tt.id)){let ut=Y().querySelector(`[data-rearrange-section="${tt.id}"]`);ve.set(tt.id,{outlineEl:ut,curW:tt.currentRect.width,curH:tt.currentRect.height})}let je=tt=>{var yn;let ut=tt.clientX-ie,xt=tt.clientY-Z;if(ut===0&&xt===0)return;ge=!0;let Xe=1/0,Ve=1/0,_t=-1/0,ft=-1/0;for(let[xn,{curW:so,curH:ln}]of ve){let vn=De.get(xn);if(!vn)continue;let zn=vn.x+ut,On=vn.y+xt;Xe=Math.min(Xe,zn),Ve=Math.min(Ve,On),_t=Math.max(_t,zn+so),ft=Math.max(ft,On+ln)}let te=K0({x:Xe,y:Ve,width:_t-Xe,height:ft-Ve},h,U,i),Lt=ut+te.dx,zt=xt+te.dy;Re=Lt,Ke=zt,Ct(te.guides);for(let[,{outlineEl:xn}]of ve)xn&&(xn.style.transform=`translate(${Lt}px, ${zt}px)`);let Bn=new Map;for(let[xn,{curW:so,curH:ln}]of ve){let vn=De.get(xn);if(vn){let zn={x:Math.max(0,vn.x+Lt),y:Math.max(0,vn.y+zt),width:so,height:ln};Bn.set(xn,zn)}}Ne(Bn),(yn=Dn.current)==null||yn.call(Dn,Lt,zt)},Te=tt=>{var ut,xt;window.removeEventListener("mousemove",je),window.removeEventListener("mouseup",Te),Pe.current=null,Ct([]),Ne(new Map);for(let[,{outlineEl:Xe}]of ve)Xe&&(Xe.style.transform="");if(ge){let Xe=tt.clientX-ie,Ve=tt.clientY-Z;if(Math.abs(Xe)<5&&Math.abs(Ve)<5)t({...e,sections:h.map(_t=>{let ft=De.get(_t.id);return ft?{..._t,currentRect:{..._t.currentRect,x:ft.x,y:ft.y}}:_t})});else{t({...e,sections:h.map(_t=>{let ft=De.get(_t.id);return ft?{..._t,currentRect:{..._t.currentRect,x:Math.max(0,ft.x+Re),y:Math.max(0,ft.y+Ke)}}:_t})}),(ut=gn.current)==null||ut.call(gn,Re,Ke,!0);return}}(xt=gn.current)==null||xt.call(gn,0,0,!1)};window.addEventListener("mousemove",je),window.addEventListener("mouseup",Te)},[k,h,e,t]),Qn=(0,ke.useCallback)((E,I,F)=>{E.preventDefault(),E.stopPropagation();let U=h.find(Te=>Te.id===I);if(!U)return;L(new Set([I])),Pe.current="resize";let le=E.clientX,ie=E.clientY,Z={...U.currentRect},De=U.originalRect,ge=Z.width/Z.height,Re={...Z},Ke=Y().querySelector(`[data-rearrange-section="${I}"]`),ve=Te=>{let gt=Te.clientX-le,tt=Te.clientY-ie,ut=Z.x,xt=Z.y,Xe=Z.width,Ve=Z.height;if(F.includes("e")&&(Xe=Math.max(pc,Z.width+gt)),F.includes("w")&&(Xe=Math.max(pc,Z.width-gt),ut=Z.x+Z.width-Xe),F.includes("s")&&(Ve=Math.max(pc,Z.height+tt)),F.includes("n")&&(Ve=Math.max(pc,Z.height-tt),xt=Z.y+Z.height-Ve),Te.shiftKey)if(F.length===2){let ft=Math.abs(Xe-Z.width),te=Math.abs(Ve-Z.height);ft>te?Ve=Xe/ge:Xe=Ve*ge,F.includes("w")&&(ut=Z.x+Z.width-Xe),F.includes("n")&&(xt=Z.y+Z.height-Ve)}else F==="e"||F==="w"?Ve=Xe/ge:Xe=Ve*ge,F==="w"&&(ut=Z.x+Z.width-Xe),F==="n"&&(xt=Z.y+Z.height-Ve);Re={x:ut,y:xt,width:Xe,height:Ve},Ke&&(Ke.style.left=`${ut}px`,Ke.style.top=`${xt-Ie}px`,Ke.style.width=`${Xe}px`,Ke.style.height=`${Ve}px`),de({x:Te.clientX+12,y:Te.clientY+12,text:`${Math.round(Xe)} \xD7 ${Math.round(Ve)}`}),Ne(new Map([[I,Re]]))},je=()=>{window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",je),de(null),Pe.current=null,Ne(new Map),t({...e,sections:h.map(Te=>Te.id===I?{...Te,currentRect:Re}:Te)})};window.addEventListener("mousemove",ve),window.addEventListener("mouseup",je)},[h,e,t,Ie]),Do=(0,ke.useCallback)(E=>{K(I=>{let F=new Set(I);return F.add(E),F}),L(I=>{let F=new Set(I);return F.delete(E),F}),ot(()=>{let I=C.current;t({...I,sections:I.sections.filter(F=>F.id!==E),originalOrder:I.originalOrder.filter(F=>F!==E)}),K(F=>{let U=new Set(F);return U.delete(E),U})},180)},[t]),q=E=>{let I=E.originalRect,F=E.currentRect;return Math.abs(I.x-F.x)>1||Math.abs(I.y-F.y)>1||Math.abs(I.width-F.width)>1||Math.abs(I.height-F.height)>1},ye=E=>{let I=E.originalRect,F=E.currentRect;return Math.abs(I.x-F.x)>1||Math.abs(I.y-F.y)>1},Le=E=>{let I=E.originalRect,F=E.currentRect;return Math.abs(I.width-F.width)>1||Math.abs(I.height-F.height)>1};for(let E of h)At.current.has(E.id)||(ye(E)?At.current.set(E.id,"move"):Le(E)&&At.current.set(E.id,"resize"));for(let E of At.current.keys())h.some(I=>I.id===E)||At.current.delete(E);let Ce=h.filter(E=>{try{if(O.has(E.id)||k.has(E.id))return!0;let I=document.querySelector(E.selector);if(!I)return!1;let F=I.getBoundingClientRect(),U=E.originalRect;return Math.abs(F.width-U.width)+Math.abs(F.height-U.height)<200}catch{return!1}}),We=Ce.filter(E=>q(E)),$e=Ce.filter(E=>!q(E)),Oe=new Set(We.map(E=>E.id));for(let E of st.current)Oe.has(E)||st.current.delete(E);let qe=[...Oe].sort().join(",");for(let E of We)Ko.current.set(E.id,{currentRect:E.currentRect,originalRect:E.originalRect,isFixed:E.isFixed});(0,ke.useEffect)(()=>{let E=qo.current;qo.current=Oe;let I=new Map;for(let F of E)if(!Oe.has(F)){if(!h.some(le=>le.id===F))continue;let U=Ko.current.get(F);U&&(I.set(F,{orig:U.originalRect,target:U.currentRect,isFixed:U.isFixed}),Ko.current.delete(F))}if(I.size>0){Po(U=>{let le=new Map(U);for(let[ie,Z]of I)le.set(ie,Z);return le});let F=ot(()=>{Po(U=>{let le=new Map(U);for(let ie of I.keys())le.delete(ie);return le})},250);return()=>clearTimeout(F)}},[qe,h]);let Ye=(0,ke.useRef)(null),Y=()=>{var E,I;return(I=(E=Ye.current)==null?void 0:E.getRootNode())!=null?I:document};return(0,Ge.jsxs)(Ge.Fragment,{children:[(0,Ge.jsxs)("div",{ref:Ye,className:`${z.rearrangeOverlay} ${n?"":z.light} ${o?z.overlayExiting:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,children:[J&&(0,Ge.jsx)("div",{className:z.hoverHighlight,style:{left:J.x,top:J.y,width:J.w,height:J.h}}),$e.map(E=>{let I=E.currentRect,F=E.isFixed?I.y:I.y-Ie,U=X0,le=k.has(E.id);return(0,Ge.jsxs)("div",{"data-rearrange-section":E.id,className:`${z.sectionOutline} ${le?z.selected:""} ${f||o||O.has(E.id)?z.exiting:""}`,style:{left:I.x,top:F,width:I.width,height:I.height,borderColor:U.border,backgroundColor:U.bg,...Bt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ie=>Mr(ie,E.id),onDoubleClick:()=>j(E.id),children:[(0,Ge.jsx)("span",{className:z.sectionLabel,style:{backgroundColor:U.pill},children:E.label}),(0,Ge.jsx)("span",{className:`${z.sectionAnnotation} ${E.note?z.annotationVisible:""}`,children:(E.note&&re.current.set(E.id,E.note),E.note||re.current.get(E.id)||"")}),(0,Ge.jsxs)("span",{className:z.sectionDimensions,children:[Math.round(I.width)," \xD7 ",Math.round(I.height)]}),(0,Ge.jsx)("div",{className:z.deleteButton,onMouseDown:ie=>ie.stopPropagation(),onClick:()=>Do(E.id),children:"\u2715"}),G0.map(ie=>(0,Ge.jsx)("div",{className:`${z.handle} ${z[`handle${ie.charAt(0).toUpperCase()}${ie.slice(1)}`]}`,onMouseDown:Z=>Qn(Z,E.id,ie)},ie))]},E.id)}),We.map(E=>{let I=E.currentRect,F=E.isFixed?I.y:I.y-Ie,U=k.has(E.id),le=ye(E),ie=Le(E);if(l&&!U)return null;let De=!st.current.has(E.id);return De&&st.current.add(E.id),(0,Ge.jsxs)("div",{"data-rearrange-section":E.id,className:`${z.ghostOutline} ${U?z.selected:""} ${f||o||O.has(E.id)?z.exiting:""}`,style:{left:I.x,top:F,width:I.width,height:I.height,...Bt?{}:{opacity:0,animation:"none",transition:"none"},...De?{}:{animation:"none"}},onMouseDown:ge=>Mr(ge,E.id),onDoubleClick:()=>j(E.id),children:[(0,Ge.jsx)("span",{className:z.sectionLabel,style:{backgroundColor:X0.pill},children:E.label}),(0,Ge.jsx)("span",{className:`${z.sectionAnnotation} ${E.note?z.annotationVisible:""}`,children:(E.note&&re.current.set(E.id,E.note),E.note||re.current.get(E.id)||"")}),(0,Ge.jsxs)("span",{className:z.sectionDimensions,children:[Math.round(I.width)," \xD7 ",Math.round(I.height)]}),(0,Ge.jsx)("div",{className:z.deleteButton,onMouseDown:ge=>ge.stopPropagation(),onClick:()=>Do(E.id),children:"\u2715"}),G0.map(ge=>(0,Ge.jsx)("div",{className:`${z.handle} ${z[`handle${ge.charAt(0).toUpperCase()}${ge.slice(1)}`]}`,onMouseDown:Re=>Qn(Re,E.id,ge)},ge)),(0,Ge.jsx)("span",{className:z.ghostBadge,children:(()=>{let ge=At.current.get(E.id);if(le&&ie){let[Re,Ke]=ge==="resize"?["Resize","Move"]:["Move","Resize"];return(0,Ge.jsxs)(Ge.Fragment,{children:["Suggested ",Re," ",(0,Ge.jsxs)("span",{className:z.ghostBadgeExtra,children:["& ",Ke]})]})}return`Suggested ${ie?"Resize":"Move"}`})()})]},E.id)})]}),!l&&(()=>{let E=[];for(let I of We){let F=mn.get(I.id);E.push({id:I.id,orig:I.originalRect,target:F||I.currentRect,isFixed:I.isFixed,isSelected:k.has(I.id),isExiting:O.has(I.id)})}for(let[I,F]of mn)if(!E.some(U=>U.id===I)){let U=h.find(le=>le.id===I);U&&E.push({id:I,orig:U.originalRect,target:F,isFixed:U.isFixed,isSelected:k.has(I)})}for(let[I,F]of Mn)E.some(U=>U.id===I)||E.push({id:I,orig:F.orig,target:F.target,isFixed:F.isFixed,isSelected:!1,isExiting:!0});return E.length===0?null:(0,Ge.jsxs)("svg",{className:`${z.connectorSvg} ${f||o?z.connectorExiting:""}`,children:[E.map(({id:I,orig:F,target:U,isFixed:le,isSelected:ie,isExiting:Z})=>{let De=F.x+F.width/2,ge=(le?F.y:F.y-Ie)+F.height/2,Re=U.x+U.width/2,Ke=(le?U.y:U.y-Ie)+U.height/2,ve=Re-De,je=Ke-ge,Te=Math.sqrt(ve*ve+je*je);if(Te<2)return null;let gt=Math.min(1,Te/40),tt=Math.min(Te*.3,60),ut=Te>0?-je/Te:0,xt=Te>0?ve/Te:0,Xe=(De+Re)/2+ut*tt,Ve=(ge+Ke)/2+xt*tt,_t=mn.has(I),ft=_t||ie?1:.4,te=_t||ie?1:.5;return(0,Ge.jsxs)("g",{className:Z?z.connectorExiting:"",children:[(0,Ge.jsx)("path",{className:z.connectorLine,d:`M ${De} ${ge} Q ${Xe} ${Ve} ${Re} ${Ke}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:ft*gt}),(0,Ge.jsx)("circle",{className:z.connectorDot,cx:De,cy:ge,r:4*gt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:te*gt,filter:"url(#connDotShadow)"}),(0,Ge.jsx)("circle",{className:z.connectorDot,cx:Re,cy:Ke,r:4*gt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:te*gt,filter:"url(#connDotShadow)"})]},`conn-${I}`)}),(0,Ge.jsx)("defs",{children:(0,Ge.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,Ge.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),x&&(()=>{var Ke;let E=h.find(ve=>ve.id===x);if(!E)return null;let I=E.currentRect,F=E.isFixed?I.y:I.y-Ie,U=I.x+I.width/2,le=F-8,ie=F+I.height+8,Z=le>200,De=ie<window.innerHeight-100,ge=Math.max(160,Math.min(window.innerWidth-160,U)),Re;return Z?Re={left:ge,bottom:window.innerHeight-le}:De?Re={left:ge,top:ie}:Re={left:ge,top:Math.max(80,window.innerHeight/2-80)},(0,Ge.jsx)(K_,{element:E.label,placeholder:"Add a note about this section",initialValue:(Ke=E.note)!=null?Ke:"",submitLabel:D.current?"Save":"Set",onSubmit:G,onCancel:P,onDelete:D.current?()=>{G("")}:void 0,isExiting:w,lightMode:!n,style:Re})})(),ne&&(0,Ge.jsx)("div",{className:z.sizeIndicator,style:{left:ne.x,top:ne.y},"data-feedback-toolbar":!0,children:ne.text}),xe.map((E,I)=>(0,Ge.jsx)("div",{className:z.guideLine,style:E.axis==="x"?{position:"fixed",left:E.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:E.pos-Ie,width:"100vw",height:1}},`${E.axis}-${E.pos}-${I}`))]})}var W_=new Set(["script","style","noscript","link","meta","br","hr"]);function hv(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),o=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let r of o){if(!(r instanceof HTMLElement)||W_.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;let l=window.getComputedStyle(r);if(l.display==="none"||l.visibility==="hidden")continue;let i=r.getBoundingClientRect();if(!(i.height<10||i.width<10)){t.push({label:Mc(r),selector:rl(r),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(let s of Array.from(r.children)){if(!(s instanceof HTMLElement)||W_.has(s.tagName.toLowerCase())||s.hasAttribute("data-feedback-toolbar"))continue;let a=window.getComputedStyle(s);if(a.display==="none"||a.visibility==="hidden")continue;let u=s.getBoundingClientRect();u.height<10||u.width<10||t.push({label:Mc(s),selector:rl(s),top:u.top,bottom:u.bottom,left:u.left,right:u.right,area:u.width*u.height})}}}return t}function pv(e){let t=window.scrollY;return e.map(({label:n,selector:o,rect:r})=>{let l=r.y-t;return{label:n,selector:o,top:l,bottom:l+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function mv(e){let t=window.scrollY,n=e.y-t,o=e.x;return{top:n,bottom:n+e.height,left:o,right:o+e.width,area:e.width*e.height}}function j_(e,t){let n=t?pv(t):hv(),o=mv(e),r=null,l=null,i=null,s=null,a=null;for(let k of n){if(Math.abs(k.left-o.left)<2&&Math.abs(k.top-o.top)<2&&Math.abs(k.right-k.left-e.width)<2&&Math.abs(k.bottom-k.top-e.height)<2)continue;k.left<=o.left+2&&k.right>=o.right-2&&k.top<=o.top+2&&k.bottom>=o.bottom-2&&k.area>o.area*1.5&&(!a||k.area<a._area)&&(a={label:k.label,selector:k.selector,_area:k.area});let L=o.right>k.left+5&&o.left<k.right-5,R=o.bottom>k.top+5&&o.top<k.bottom-5;if(L&&k.bottom<=o.top+5){let x=Math.round(o.top-k.bottom);(!r||x<r._dist)&&(r={label:k.label,selector:k.selector,gap:Math.max(0,x),_dist:x})}if(L&&k.top>=o.bottom-5){let x=Math.round(k.top-o.bottom);(!l||x<l._dist)&&(l={label:k.label,selector:k.selector,gap:Math.max(0,x),_dist:x})}if(R&&k.right<=o.left+5){let x=Math.round(o.left-k.right);(!i||x<i._dist)&&(i={label:k.label,selector:k.selector,gap:Math.max(0,x),_dist:x})}if(R&&k.left>=o.right-5){let x=Math.round(k.left-o.right);(!s||x<s._dist)&&(s={label:k.label,selector:k.selector,gap:Math.max(0,x),_dist:x})}}let u=window.innerWidth,m=window.innerHeight,f=yv(e,u),h=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,C=gv(o,e,u,m,a?{label:a.label,selector:a.selector,_area:a._area}:null,n);return{above:h(r),below:h(l),left:h(i),right:h(s),alignment:f,containedIn:a?{label:a.label,selector:a.selector}:null,outOfBounds:C}}function gv(e,t,n,o,r,l){let i={},s=!1,a=[];if(e.left<-2&&a.push("left"),e.right>n+2&&a.push("right"),e.top<-2&&a.push("top"),e.bottom>o+2&&a.push("bottom"),a.length>0&&(i.viewport=a,s=!0),r){let u=l.find(m=>m.label===r.label&&m.selector===r.selector&&Math.abs(m.area-r._area)<10);if(u){let m=[];e.left<u.left-2&&m.push("left"),e.right>u.right+2&&m.push("right"),e.top<u.top-2&&m.push("top"),e.bottom>u.bottom+2&&m.push("bottom"),m.length>0&&(i.container={label:r.label,edges:m},s=!0)}}return s?i:null}function yv(e,t){if(e.width/t>.85)return"full-width";let o=e.x+e.width/2,r=t/2,l=o-r,i=t*.08;return Math.abs(l)<i?"center":l<0?"left":"right"}function Og(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Ag(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));let o=Og(e.alignment);return e.containedIn?n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in \`${e.containedIn.label}\``):n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function xv(e,t,n){var l,i;let o=[];e.above&&o.push(`below \`${e.above.label}\``),e.below&&o.push(`above \`${e.below.label}\``),e.left&&o.push(`right of \`${e.left.label}\``),e.right&&o.push(`left of \`${e.right.label}\``),e.containedIn&&o.push(`inside \`${e.containedIn.label}\``),o.push(Og(e.alignment)),(l=e.outOfBounds)!=null&&l.viewport&&o.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(i=e.outOfBounds)!=null&&i.container&&o.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let r=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${r}: ${o.join(", ")}`}var Z0=15;function eg(e){if(e.length<2)return[];let t=[],n=new Set;for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let l=o+1;l<e.length;l++)n.has(l)||Math.abs(e[o].rect.y-e[l].rect.y)<Z0&&r.push(l);if(r.length>=2){let l=r.map(a=>e[a]);l.sort((a,u)=>a.rect.x-u.rect.x);let i=[];for(let a=0;a<l.length-1;a++)i.push(Math.round(l[a+1].rect.x-(l[a].rect.x+l[a].rect.width)));let s=Math.round(l.reduce((a,u)=>a+u.rect.y,0)/l.length);t.push({labels:l.map(a=>a.label),type:"row",sharedEdge:s,gaps:i,avgGap:i.length?Math.round(i.reduce((a,u)=>a+u,0)/i.length):0}),r.forEach(a=>n.add(a))}}for(let o=0;o<e.length;o++){if(n.has(o))continue;let r=[o];for(let l=o+1;l<e.length;l++)n.has(l)||Math.abs(e[o].rect.x-e[l].rect.x)<Z0&&r.push(l);if(r.length>=2){let l=r.map(a=>e[a]);l.sort((a,u)=>a.rect.y-u.rect.y);let i=[];for(let a=0;a<l.length-1;a++)i.push(Math.round(l[a+1].rect.y-(l[a].rect.y+l[a].rect.height)));let s=Math.round(l.reduce((a,u)=>a+u.rect.x,0)/l.length);t.push({labels:l.map(a=>a.label),type:"column",sharedEdge:s,gaps:i,avgGap:i.length?Math.round(i.reduce((a,u)=>a+u,0)/i.length):0}),r.forEach(a=>n.add(a))}}return t}function vv(e){var i;if(e.length<2)return[];let t=eg(e.map(s=>({label:s.label,rect:s.originalRect}))),n=eg(e.map(s=>({label:s.label,rect:s.currentRect}))),o=[],r=new Set;for(let s of t){let a=new Set(s.labels),u=null,m=0;for(let f of n){let h=f.labels.filter(C=>a.has(C)).length;h>=2&&h>m&&(u=f,m=h)}if(u){let f=u.labels.filter(C=>a.has(C)),h=f.join(", ");if(u.type!==s.type){let C=s.type==="row"?"y":"x",k=u.type==="row"?"y":"x";o.push(`**${h}**: ${s.type} (${C}\u2248${s.sharedEdge}, ${s.avgGap}px gaps) \u2192 ${u.type} (${k}\u2248${u.sharedEdge}, ${u.avgGap}px gaps)`)}else if(Math.abs(s.sharedEdge-u.sharedEdge)>20||Math.abs(s.avgGap-u.avgGap)>5){let C=s.type==="row"?"y":"x",k=Math.abs(s.sharedEdge-u.sharedEdge)>20?` ${C}: ${s.sharedEdge} \u2192 ${u.sharedEdge}`:"",L=Math.abs(s.avgGap-u.avgGap)>5?` gaps: ${s.avgGap}px \u2192 ${u.avgGap}px`:"";o.push(`**${h}**: ${s.type} shifted \u2014${k}${L}`)}f.forEach(C=>r.add(C))}else{let f=s.labels.join(", "),h=s.type==="row"?"y":"x";o.push(`**${f}**: ${s.type} (${h}\u2248${s.sharedEdge}) dissolved`),s.labels.forEach(C=>r.add(C))}}for(let s of n){if(s.labels.every(m=>r.has(m))||s.labels.filter(m=>!r.has(m)).length<2)continue;if(!t.some(m=>m.labels.filter(h=>s.labels.includes(h)).length>=2)){let m=s.type==="row"?"y":"x";o.push(`**${s.labels.join(", ")}**: new ${s.type} (${m}\u2248${s.sharedEdge}, ${s.avgGap}px gaps)`),s.labels.forEach(f=>r.add(f))}}let l=e.filter(s=>!r.has(s.label));if(l.length>=2){let s={};for(let a of l){let u=Math.round(a.currentRect.x/5)*5;((i=s[u])!=null?i:s[u]=[]).push(a.label)}for(let[a,u]of Object.entries(s))u.length>=2&&o.push(`**${u.join(", ")}**: shared left edge at x\u2248${a}`)}return o}function Fg(e){if(typeof document=="undefined")return{viewport:e,contentArea:null};let t=[],n=new Set,o=s=>{n.has(s)||s instanceof HTMLElement&&(s.hasAttribute("data-feedback-toolbar")||W_.has(s.tagName.toLowerCase())||(n.add(s),t.push(s)))},r=document.querySelector("main");r&&o(r);let l=document.querySelector("[role='main']");l&&o(l);for(let s of Array.from(document.body.children))if(o(s),s.children){for(let a of Array.from(s.children))if(o(a),a.children)for(let u of Array.from(a.children))o(u)}let i=null;for(let s of t){let a=s.getBoundingClientRect();if(a.height<50)continue;let u=getComputedStyle(s);if(u.maxWidth&&u.maxWidth!=="none"&&u.maxWidth!=="0px"){(!i||a.width<i.rect.width)&&(i={el:s,rect:a});continue}!i&&a.width<e.width-20&&a.width>100&&(i={el:s,rect:a})}if(i){let{el:s,rect:a}=i;return{viewport:e,contentArea:{width:Math.round(a.width),left:Math.round(a.left),right:Math.round(a.right),centerX:Math.round(a.left+a.width/2),selector:rl(s)}}}return{viewport:e,contentArea:null}}function wv(e){if(typeof document=="undefined")return null;let t=document.querySelector(e);if(!(t!=null&&t.parentElement))return null;let n=getComputedStyle(t.parentElement),o={parentDisplay:n.display,parentSelector:rl(t.parentElement)};return n.display.includes("flex")&&(o.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(o.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(o.gap=n.gap),o}function Wg(e,t){let n=t.contentArea,o=n?n.width:t.viewport.width,r=n?n.left:0,l=n?n.centerX:Math.round(t.viewport.width/2),i=Math.round(e.x-r),s=Math.round(r+o-(e.x+e.width)),a=(e.width/o*100).toFixed(1),u=e.x+e.width/2,m=Math.abs(u-l)<20,f=e.width/o>.95,h=[];return f?h.push("`width: 100%` of container"):h.push(`left \`${i}px\` in container, right \`${s}px\`, width \`${a}%\` (\`${Math.round(e.width)}px\`)`),m&&!f&&h.push("centered \u2014 `margin-inline: auto`"),h.join(" \u2014 ")}function jg(e){let{viewport:t,contentArea:n}=e,o=`### Reference Frame
`;if(o+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let r=n;o+=`- Content area: \`${r.width}px\` wide, left edge at \`x=${r.left}\`, right at \`x=${r.right}\` (\`${r.selector}\`)
`,o+=`- Pixel \u2192 CSS translation:
`,o+=`  - **Horizontal position in container**: \`element.x - ${r.left}\` \u2192 use as \`margin-left\` or \`left\`
`,o+=`  - **Width as % of container**: \`element.width / ${r.width} \xD7 100\` \u2192 use as \`width: X%\`
`,o+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",o+=`  - **Centered**: if \`|element.centerX - ${r.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else o+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,o+=`- Pixel \u2192 CSS translation:
`,o+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,o+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return o+=`
`,o}function bv(e){let t=wv(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function tg(e,t,n,o="standard"){var R,x,b,w;if(e.length===0)return"";let r=[...e].sort((p,D)=>Math.abs(p.y-D.y)<20?p.x-D.x:p.y-D.y),l="";if(n!=null&&n.blankCanvas?(l+=`## Wireframe: New Page

`,n.wireframePurpose&&(l+=`> **Purpose:** ${n.wireframePurpose}
>
`),l+=`> ${e.length} component${e.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):l+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,o==="compact")return l+=`### Components
`,r.forEach((p,D)=>{var P;let j=((P=vo[p.type])==null?void 0:P.label)||p.type;l+=`${D+1}. **${j}** \u2014 \`${Math.round(p.width)}\xD7${Math.round(p.height)}px\` at \`(${Math.round(p.x)}, ${Math.round(p.y)})\`
`,p.text&&(l+=`   - Note: "${p.text}"
`)}),l;let i=Fg(t);l+=jg(i),l+=`### Components
`,r.forEach((p,D)=>{var J;let j=((J=vo[p.type])==null?void 0:J.label)||p.type,P={x:p.x,y:p.y,width:p.width,height:p.height};l+=`${D+1}. **${j}** \u2014 \`${Math.round(p.width)}\xD7${Math.round(p.height)}px\` at \`(${Math.round(p.x)}, ${Math.round(p.y)})\`
`,p.text&&(l+=`   - Note: "${p.text}"
`);let G=j_(P),K=Ag(G,{includeLeftRight:o==="detailed"||o==="forensic"});for(let pe of K)l+=`   - ${pe}
`;let re=Wg(P,i);re&&(l+=`   - CSS: ${re}
`)}),l+=`
### Layout Analysis
`;let s=[];for(let p of r){let D=s.find(j=>Math.abs(j.y-p.y)<30);D?D.items.push(p):s.push({y:p.y,items:[p]})}if(s.sort((p,D)=>p.y-D.y),s.forEach((p,D)=>{p.items.sort((P,G)=>P.x-G.x);let j=p.items.map(P=>{var G;return((G=vo[P.type])==null?void 0:G.label)||P.type});if(p.items.length===1){let G=p.items[0].width>t.width*.8;l+=`- Row ${D+1} (y\u2248${Math.round(p.y)}): ${j[0]}${G?" \u2014 full width":""}
`}else l+=`- Row ${D+1} (y\u2248${Math.round(p.y)}): ${j.join(" | ")} \u2014 ${p.items.length} items side by side
`}),o==="detailed"||o==="forensic"){l+=`
### Spacing & Gaps
`;for(let p=0;p<r.length-1;p++){let D=r[p],j=r[p+1],P=((R=vo[D.type])==null?void 0:R.label)||D.type,G=((x=vo[j.type])==null?void 0:x.label)||j.type,O=Math.round(j.y-(D.y+D.height)),K=Math.round(j.x-(D.x+D.width));Math.abs(D.y-j.y)<30?l+=`- ${P} \u2192 ${G}: \`${K}px\` horizontal gap
`:l+=`- ${P} \u2192 ${G}: \`${O}px\` vertical gap
`}if(o==="forensic"&&r.length>2){l+=`
### All Pairwise Gaps
`;for(let p=0;p<r.length;p++)for(let D=p+1;D<r.length;D++){let j=r[p],P=r[D],G=((b=vo[j.type])==null?void 0:b.label)||j.type,O=((w=vo[P.type])==null?void 0:w.label)||P.type,K=Math.round(P.y-(j.y+j.height)),re=Math.round(P.x-(j.x+j.width));l+=`- ${G} \u2194 ${O}: h=\`${re}px\` v=\`${K}px\`
`}}o==="forensic"&&(l+=`
### Z-Order (placement order)
`,e.forEach((p,D)=>{var P;let j=((P=vo[p.type])==null?void 0:P.label)||p.type;l+=`${D}. ${j} at \`(${Math.round(p.x)}, ${Math.round(p.y)})\`
`}))}l+=`
### Suggested Implementation
`;let a=r.some(p=>p.type==="navigation"),u=r.some(p=>p.type==="hero"),m=r.some(p=>p.type==="sidebar"),f=r.some(p=>p.type==="footer"),h=r.filter(p=>p.type==="card"),C=r.filter(p=>p.type==="form"),k=r.filter(p=>p.type==="table"),L=r.filter(p=>p.type==="modal");if(a&&(l+=`- Top navigation bar with logo + nav links + CTA
`),u&&(l+=`- Hero section with heading, subtext, and call-to-action
`),m&&(l+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),h.length>1?l+=`- ${h.length}-column card grid \u2014 use CSS Grid or Flexbox
`:h.length===1&&(l+=`- Card component with image + content area
`),C.length>0&&(l+=`- ${C.length} form${C.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),k.length>0&&(l+=`- Data table \u2014 consider sortable columns and pagination
`),L.length>0&&(l+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),f&&(l+=`- Multi-column footer with links
`),o==="detailed"||o==="forensic"){if(l+=`
### CSS Suggestions
`,m){let p=r.find(D=>D.type==="sidebar");l+=`- \`display: grid; grid-template-columns: ${Math.round(p.width)}px 1fr;\`
`}if(h.length>1){let p=Math.round(h[0].width);l+=`- \`display: grid; grid-template-columns: repeat(${h.length}, ${p}px); gap: 16px;\`
`}a&&(l+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return l}function ng(e,t="standard",n){let{sections:o}=e,r=[];for(let m of o){let f=m.originalRect,h=m.currentRect,C=Math.abs(f.x-h.x)>1||Math.abs(f.y-h.y)>1,k=Math.abs(f.width-h.width)>1||Math.abs(f.height-h.height)>1,L=!!m.note;if(!C&&!k&&!L){t==="forensic"&&r.push({section:m,posMoved:!1,sizeChanged:!1});continue}r.push({section:m,posMoved:C,sizeChanged:k})}if(r.length===0||t!=="forensic"&&r.every(m=>!m.posMoved&&!m.sizeChanged&&!m.section.note))return"";let l=`## Suggested Layout Changes

`,i=n?n.width:typeof window!="undefined"?window.innerWidth:0,s=n?n.height:typeof window!="undefined"?window.innerHeight:0,a=Fg({width:i,height:s});t!=="compact"&&(l+=jg(a)),t==="forensic"&&(l+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,l+=`> Total sections: ${o.length}

`);let u=m=>o.map(f=>({label:f.label,selector:f.selector,rect:m==="original"?f.originalRect:f.currentRect}));l+=`**Changes:**
`;for(let{section:m,posMoved:f,sizeChanged:h}of r){let C=m.originalRect,k=m.currentRect;if(!f&&!h){m.note?(l+=`- **${m.label}** \u2014 note only
`,l+=`  - Note: "${m.note}"
`):l+=`- ${m.label} \u2014 unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`;continue}if(t==="compact"){f&&h?l+=`- Suggested: move **${m.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`:f?l+=`- Suggested: move **${m.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:l+=`- Suggested: resize **${m.label}** to ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`,m.note&&(l+=`  - Note: "${m.note}"
`);continue}if(f&&h?l+=`- Suggested: move and resize **${m.label}**
`:f?l+=`- Suggested: move **${m.label}**
`:l+=`- Suggested: resize **${m.label}** from ${Math.round(C.width)}\xD7${Math.round(C.height)}px to ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`,m.note&&(l+=`  - Note: "${m.note}"
`),f){let R=j_(C,u("original")),x=j_(k,u("current")),b=h?{width:C.width,height:C.height}:void 0;l+=`  - Currently ${xv(R,{x:C.x,y:C.y},b)}
`;let w=h?{width:k.width,height:k.height}:void 0,p=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,D=w?`, ${Math.round(w.width)}\xD7${Math.round(w.height)}px`:"",P=Ag(x,{includeLeftRight:t==="detailed"||t==="forensic"});if(P.length>0){l+=`  - Suggested position ${p}${D}: ${P[0]}
`;for(let O=1;O<P.length;O++)l+=`    ${P[O]}
`}else l+=`  - Suggested position ${p}${D}
`;let G=Wg(k,a);G&&(l+=`  - CSS: ${G}
`)}let L=bv(m.selector);if(L&&(l+=`  - ${L}
`),l+=`  - Selector: \`${m.selector}\`
`,t==="detailed"||t==="forensic"){let R=m.className?`${m.tagName}.${m.className.split(" ")[0]}`:m.tagName;R!==m.selector&&(l+=`  - Element: \`${R}\`
`),m.role&&(l+=`  - Role: \`${m.role}\`
`),t==="forensic"&&m.textSnippet&&(l+=`  - Text: "${m.textSnippet}"
`)}t==="forensic"&&(l+=`  - Original rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`,l+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(t!=="compact"){let m=r.filter(h=>h.posMoved).map(h=>({label:h.section.label,originalRect:h.section.originalRect,currentRect:h.section.currentRect})),f=vv(m);if(f.length>0){l+=`
### Layout Summary
`;for(let h of f)l+=`- ${h}
`}}if(t!=="compact"&&o.length>1){l+=`
### All Sections (current positions)
`;let m=[...o].sort((f,h)=>Math.abs(f.currentRect.y-h.currentRect.y)<20?f.currentRect.x-h.currentRect.x:f.currentRect.y-h.currentRect.y);for(let f of m){let h=f.currentRect,C=Math.abs(h.x-f.originalRect.x)>1||Math.abs(h.y-f.originalRect.y)>1||Math.abs(h.width-f.originalRect.width)>1||Math.abs(h.height-f.originalRect.height)>1;l+=`- ${f.label}: \`${Math.round(h.width)}\xD7${Math.round(h.height)}px\` at \`(${Math.round(h.x)}, ${Math.round(h.y)})\`${C?" \u2190 suggested":""}
`}}return l}var H_="feedback-annotations-",Hg=7;function J_(e){return`${H_}${e}`}function br(e){if(typeof window=="undefined")return[];try{let t=localStorage.getItem(J_(e));if(!t)return[];let n=JSON.parse(t),o=Date.now()-Hg*24*60*60*1e3;return n.filter(r=>!r.timestamp||r.timestamp>o)}catch{return[]}}function Ug(e,t){if(typeof window!="undefined")try{localStorage.setItem(J_(e),JSON.stringify(t))}catch{}}function kv(){let e=new Map;if(typeof window=="undefined")return e;try{let t=Date.now()-Hg*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let o=localStorage.key(n);if(o!=null&&o.startsWith(H_)){let r=o.slice(H_.length),l=localStorage.getItem(o);if(l){let s=JSON.parse(l).filter(a=>!a.timestamp||a.timestamp>t);s.length>0&&e.set(r,s)}}}}catch{}return e}function E_(e,t,n){let o=t.map(r=>({...r,_syncedTo:n}));Ug(e,o)}var Z_="agentation-design-";function Cv(e){if(typeof window=="undefined")return[];try{let t=localStorage.getItem(`${Z_}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function Sv(e,t){if(typeof window!="undefined")try{localStorage.setItem(`${Z_}${e}`,JSON.stringify(t))}catch{}}function Mv(e){if(typeof window!="undefined")try{localStorage.removeItem(`${Z_}${e}`)}catch{}}var ef="agentation-rearrange-";function Ev(e){if(typeof window=="undefined")return null;try{let t=localStorage.getItem(`${ef}${e}`);return t?JSON.parse(t):null}catch{return null}}function Lv(e,t){if(typeof window!="undefined")try{localStorage.setItem(`${ef}${e}`,JSON.stringify(t))}catch{}}function Nv(e){if(typeof window!="undefined")try{localStorage.removeItem(`${ef}${e}`)}catch{}}var tf="agentation-wireframe-";function Iv(e){if(typeof window=="undefined")return null;try{let t=localStorage.getItem(`${tf}${e}`);return t?JSON.parse(t):null}catch{return null}}function og(e,t){if(typeof window!="undefined")try{localStorage.setItem(`${tf}${e}`,JSON.stringify(t))}catch{}}function gc(e){if(typeof window!="undefined")try{localStorage.removeItem(`${tf}${e}`)}catch{}}var Yg="agentation-session-";function nf(e){return`${Yg}${e}`}function $v(e){if(typeof window=="undefined")return null;try{return localStorage.getItem(nf(e))}catch{return null}}function L_(e,t){if(typeof window!="undefined")try{localStorage.setItem(nf(e),t)}catch{}}function Rv(e){if(typeof window!="undefined")try{localStorage.removeItem(nf(e))}catch{}}var U_=`${Yg}toolbar-hidden`;function Tv(){if(typeof window=="undefined")return!1;try{return sessionStorage.getItem(U_)==="1"}catch{return!1}}function Pv(e){if(typeof window!="undefined")try{e?sessionStorage.setItem(U_,"1"):sessionStorage.removeItem(U_)}catch{}}async function N_(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function rg(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function lg(e,t,n){!n.elementPath&&(n.element==="body"||n.element==="html")&&(n={...n,elementPath:n.element});let o=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to sync annotation: ${o.status}`);return o.json()}async function I_(e,t,n){let o=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to update annotation: ${o.status}`);return o.json()}async function yc(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var it={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},ig=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),sg=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Dv=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Bv(e){var o,r,l,i;let t=(o=e==null?void 0:e.mode)!=null?o:"filtered",n=ig;if(e!=null&&e.skipExact){let s=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...ig,...s])}return{maxComponents:(r=e==null?void 0:e.maxComponents)!=null?r:6,maxDepth:(l=e==null?void 0:e.maxDepth)!=null?l:30,mode:t,skipExact:n,skipPatterns:e!=null&&e.skipPatterns?[...sg,...e.skipPatterns]:sg,userPatterns:(i=e==null?void 0:e.userPatterns)!=null?i:Dv,filter:e==null?void 0:e.filter}}function zv(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Ov(e,t=10){let n=new Set,o=e,r=0;for(;o&&r<t;)o.className&&typeof o.className=="string"&&o.className.split(/\s+/).forEach(l=>{if(l.length>1){let i=l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();i.length>1&&n.add(i)}}),o=o.parentElement,r++;return n}function Av(e,t){let n=zv(e);for(let o of t){if(o===n)return!0;let r=n.split("-").filter(i=>i.length>2),l=o.split("-").filter(i=>i.length>2);for(let i of r)for(let s of l)if(i===s||i.includes(s)||s.includes(i))return!0}return!1}function Fv(e,t,n,o){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e))?!1:!!(o&&Av(e,o)||n.userPatterns.some(r=>r.test(e)));default:return!0}}var Xl=null,Wv=new WeakMap;function $_(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function jv(){if(Xl!==null)return Xl;if(typeof document=="undefined")return!1;if(document.body&&$_(document.body))return Xl=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&$_(n))return Xl=!0,!0}if(document.body){for(let t of document.body.children)if($_(t))return Xl=!0,!0}return Xl=!1,!1}var cs={map:Wv};function Hv(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function Uv(e){let t=Hv(e);return t?e[t]:null}function el(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Yv(e){var r;let{tag:t,type:n,elementType:o}=e;if(t===it.HostComponent||t===it.HostText||t===it.HostHoistable||t===it.HostSingleton||t===it.Fragment||t===it.Mode||t===it.Profiler||t===it.DehydratedFragment||t===it.HostRoot||t===it.HostPortal||t===it.ScopeComponent||t===it.OffscreenComponent||t===it.LegacyHiddenComponent||t===it.CacheComponent||t===it.TracingMarkerComponent||t===it.Throw||t===it.ViewTransitionComponent||t===it.ActivityComponent)return null;if(t===it.ForwardRef){let l=o;if(l!=null&&l.render){let i=el(l.render);if(i)return i}return l!=null&&l.displayName?l.displayName:el(n)}if(t===it.MemoComponent||t===it.SimpleMemoComponent){let l=o;if(l!=null&&l.type){let i=el(l.type);if(i)return i}return l!=null&&l.displayName?l.displayName:el(n)}if(t===it.ContextProvider){let l=n;return(r=l==null?void 0:l._context)!=null&&r.displayName?`${l._context.displayName}.Provider`:null}if(t===it.ContextConsumer){let l=n;return l!=null&&l.displayName?`${l.displayName}.Consumer`:null}if(t===it.LazyComponent){let l=o;return(l==null?void 0:l._status)===1&&l._result?el(l._result):null}return t===it.SuspenseComponent||t===it.SuspenseListComponent?null:t===it.IncompleteClassComponent||t===it.IncompleteFunctionComponent||t===it.FunctionComponent||t===it.ClassComponent||t===it.IndeterminateComponent?el(n):null}function Qv(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Vv(e,t){let n=Bv(t),o=n.mode==="all";if(o){let a=cs.map.get(e);if(a!==void 0)return a}if(!jv()){let a={path:null,components:[]};return o&&cs.map.set(e,a),a}let r=n.mode==="smart"?Ov(e):void 0,l=[];try{let a=Uv(e),u=0;for(;a&&u<n.maxDepth&&l.length<n.maxComponents;){let m=Yv(a);m&&!Qv(m)&&Fv(m,u,n,r)&&l.push(m),a=a.return,u++}}catch{let a={path:null,components:[]};return o&&cs.map.set(e,a),a}if(l.length===0){let a={path:null,components:[]};return o&&cs.map.set(e,a),a}let s={path:l.slice().reverse().map(a=>`<${a}>`).join(" "),components:l};return o&&cs.map.set(e,s),s}var ds={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function Gv(e){if(!e||typeof e!="object")return null;let t=Object.keys(e),n=t.find(l=>l.startsWith("__reactFiber$"));if(n)return e[n]||null;let o=t.find(l=>l.startsWith("__reactInternalInstance$"));if(o)return e[o]||null;let r=t.find(l=>{if(!l.startsWith("__react"))return!1;let i=e[l];return i&&typeof i=="object"&&"_debugSource"in i});return r&&e[r]||null}function gs(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function qv(e,t=50){var r;let n=e,o=0;for(;n&&o<t;){if(n._debugSource)return{source:n._debugSource,componentName:gs(n)};if((r=n._debugOwner)!=null&&r._debugSource)return{source:n._debugOwner._debugSource,componentName:gs(n._debugOwner)};n=n.return,o++}return null}function Kv(e){let t=e,n=0,o=50;for(;t&&n<o;){let r=t,l=["_debugSource","__source","_source","debugSource"];for(let i of l){let s=r[i];if(s&&typeof s=="object"&&"fileName"in s)return{source:s,componentName:gs(t)}}if(t.memoizedProps){let i=t.memoizedProps;if(i.__source&&typeof i.__source=="object"){let s=i.__source;if(s.fileName&&s.lineNumber)return{source:{fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber},componentName:gs(t)}}}t=t.return,n++}return null}var xc=new Map;function Jv(e){var r;let t=e.tag,n=e.type,o=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&((r=n.prototype)!=null&&r.isReactComponent))return null;if((t===ds.FunctionComponent||t===ds.IndeterminateComponent)&&typeof n=="function")return n;if(t===ds.ForwardRef&&o){let l=o.render;if(typeof l=="function")return l}if((t===ds.MemoComponent||t===ds.SimpleMemoComponent)&&o){let l=o.type;if(typeof l=="function")return l}return typeof n=="function"?n:null}function Zv(){let e=Xv,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:o=>{t.H=o}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let o=n.ReactCurrentDispatcher;if(o&&"current"in o)return{get:()=>o.current,set:r=>{o.current=r}}}return null}function ew(e,t){let n=e.split(`
`),o=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,l=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let i of n){let s=i.trim();if(!s||o.some(u=>u.test(s)))continue;if(t){let u=t.replace(/^bound /,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(!new RegExp(`(?:at (?:Object\\.)?|^)${u}(?: \\(|@| \\[)`).test(s))continue}let a=r.exec(s)||l.exec(s);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function tw(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function nw(e){let t=Jv(e);if(!t)return null;if(xc.has(t))return xc.get(t);let n=Zv();if(!n)return xc.set(t,null),null;let o=n.get(),r=null;try{let l=new Proxy({},{get(){throw new Error("probe")}});n.set(l);try{t({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){let s=ew(i.stack,t.name);s&&(r={fileName:tw(s.fileName),lineNumber:s.line,columnNumber:s.column,componentName:gs(e)||void 0})}}}finally{n.set(o)}return xc.set(t,r),r}function ow(e,t=15){let n=e,o=0;for(;n&&o<t;){let r=nw(n);if(r)return r;n=n.return,o++}return null}function Y_(e){let t=Gv(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=qv(t);if(n||(n=Kv(t)),n!=null&&n.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let o=ow(t);return o?{found:!0,source:o,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function rw(e,t="path"){let{fileName:n,lineNumber:o,columnNumber:r}=e,l=`${n}:${o}`;return r!==void 0&&(l+=`:${r}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${l}`:l}function lw(e,t=10){let n=e,o=0;for(;n&&o<t;){let r=Y_(n);if(r.found)return r;n=n.parentElement,o++}return Y_(e)}var us=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Cc(e,t){let n=`## Page Feedback: ${e}
`,o=t==null?void 0:t.replace(/[\r\n\t]+/g," ").trim();return o&&(n+=`**App:** ${o.replace(/[\\`*_\[\]<>]/g,"\\$&")}
`),n}function ag(e,t,n="standard",o={}){if(e.length===0)return"";let r=typeof window!="undefined"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",l=Cc(t,o.appName);return n==="forensic"?(l+=`
**Environment:**
`,l+=`- Viewport: ${r}
`,typeof window!="undefined"&&(l+=`- URL: ${window.location.href}
`,l+=`- User Agent: ${navigator.userAgent}
`,l+=`- Timestamp: ${new Date().toISOString()}
`,l+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),l+=`
---
`):n!=="compact"&&(l+=`**Viewport:** ${r}
`),l+=`
`,e.forEach((i,s)=>{n==="compact"?(l+=`${s+1}. **${i.element}**${i.sourceFile?` (${i.sourceFile})`:""}: ${i.comment}`,i.selectedText&&(l+=` (re: "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}")`),l+=`
`):n==="forensic"?(l+=`### ${s+1}. ${i.element}
`,i.isMultiSelect&&i.fullPath&&(l+=`*Forensic data shown for first element of selection*
`),i.fullPath&&(l+=`**Full DOM Path:** ${i.fullPath}
`),i.cssClasses&&(l+=`**CSS Classes:** ${i.cssClasses}
`),i.boundingBox&&(l+=`**Position:** x:${Math.round(i.boundingBox.x)}, y:${Math.round(i.boundingBox.y)} (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`),l+=`**Annotation at:** ${i.x.toFixed(1)}% from left, ${Math.round(i.y)}px from top
`,i.selectedText&&(l+=`**Selected text:** "${i.selectedText}"
`),i.nearbyText&&!i.selectedText&&(l+=`**Context:** ${i.nearbyText.slice(0,100)}
`),i.computedStyles&&(l+=`**Computed Styles:** ${i.computedStyles}
`),i.accessibility&&(l+=`**Accessibility:** ${i.accessibility}
`),i.nearbyElements&&(l+=`**Nearby Elements:** ${i.nearbyElements}
`),i.sourceFile&&(l+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(l+=`**React:** ${i.reactComponents}
`),l+=`**Feedback:** ${i.comment}

`):(l+=`### ${s+1}. ${i.element}
`,l+=`**Location:** ${i.elementPath}
`,i.sourceFile&&(l+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(l+=`**React:** ${i.reactComponents}
`),n==="detailed"&&(i.cssClasses&&(l+=`**Classes:** ${i.cssClasses}
`),i.boundingBox&&(l+=`**Position:** ${Math.round(i.boundingBox.x)}px, ${Math.round(i.boundingBox.y)}px (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`)),i.selectedText&&(l+=`**Selected text:** "${i.selectedText}"
`),n==="detailed"&&i.nearbyText&&!i.selectedText&&(l+=`**Context:** ${i.nearbyText.slice(0,100)}
`),l+=`**Feedback:** ${i.comment}

`)}),l.trim()}function cg(e,t,n="markdown"){return n==="markdown"?t:[...new Set(e.map(o=>{var r;return n==="source"?o.sourceFile:n==="classes"?o.cssClasses:(r=o.attributes)==null?void 0:r[n.attribute]}).filter(o=>typeof o=="string"&&o.length>0))].join(`
`)}async function iw(e){var t;if(typeof window=="undefined")return!1;try{if((t=navigator.clipboard)!=null&&t.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return sw(e)}function sw(e){var s;let t=document.createElement("textarea"),n=document.activeElement;for(;(s=n==null?void 0:n.shadowRoot)!=null&&s.activeElement;)n=n.shadowRoot.activeElement;let o=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null,r=o&&o.selectionStart!==null?{start:o.selectionStart,end:o.selectionEnd,direction:o.selectionDirection}:null,l=document.getSelection(),i=l?Array.from({length:l.rangeCount},(a,u)=>l.getRangeAt(u).cloneRange()):[];try{return t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;",document.body.appendChild(t),t.focus({preventScroll:!0}),t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}catch{return!1}finally{if(t.remove(),n instanceof HTMLElement&&n.isConnected&&(n.focus({preventScroll:!0}),o&&r&&o.setSelectionRange(r.start,r.end,r.direction)),l){l.removeAllRanges();for(let a of i)l.addRange(a)}}}function dg(e){if(!e)return e;try{let t=new URL(e,"http://agentation.invalid");return t.pathname+t.search+t.hash}catch{return e}}function ug(e,t,n=[]){let o=new Map,r=new Map(n.map(s=>[s.id,s])),l=!1;async function i(s,a){if(l||a.running||a.timer)return;let u=a.desired,m=t.get(s);if(!u&&!m){o.delete(s),t.delete(s);return}let f=u?JSON.stringify(u):void 0;if(!(u&&m&&a.synced===f)){a.running=!0;try{if(!u)await e.remove(m),t.delete(s),a.synced=void 0;else if(m)await e.update(m,u),a.synced=f;else{t.set(s,"");let h=await e.create(u);t.set(s,h.id),a.synced=f}a.retries=0,a.running=!1,!l&&o.get(s)===a&&i(s,a)}catch(h){if(a.running=!1,!l&&o.get(s)===a&&(console.warn("[Agentation] Failed to sync layout feedback:",h),t.get(s)&&a.retries<3)){let C=500*2**a.retries++;a.timer=ot(()=>{a.timer=void 0,i(s,a)},C)}}}}return{replace(s){let a=new Map(s.map(u=>[u.id,u]));for(let[u,m]of a){let f=o.get(u);if(!f){f={running:!1,retries:0},o.set(u,f);let h=[...r.values()].find(C=>C.kind===m.kind&&dg(C.url)===dg(m.url)&&(m.kind==="placement"?C.timestamp===m.timestamp&&C.element===m.element:C.element===m.element));h&&(t.set(u,h.id),r.delete(h.id))}JSON.stringify(f.desired)!==JSON.stringify(m)&&(f.retries=0,f.timer&&clearTimeout(f.timer),f.timer=void 0),f.desired=m}for(let[u,m]of o)a.has(u)||(m.desired=void 0),i(u,m)},forget(s){let a=o.get(s);a!=null&&a.timer&&clearTimeout(a.timer),o.delete(s),t.delete(s)},dispose(){l=!0;for(let s of o.values())s.timer&&clearTimeout(s.timer)}}}function aw(e,t,n,o){let r=!1,l,i,s=1e3,a,u=C=>{!r&&((C==null?void 0:C.status)==="resolved"||(C==null?void 0:C.status)==="dismissed")&&o(C)},m=async()=>{if(r||a||!n())return;let C=new AbortController;a=C;let k=ot(()=>C.abort(),5e3);try{let L=await fetch(`${e}/sessions/${t}`,{signal:C.signal});if(!L.ok)return;let R=await L.json();!r&&!C.signal.aborted&&Array.isArray(R.annotations)&&R.annotations.forEach(u)}catch{}finally{clearTimeout(k),a===C&&(a=void 0)}},f=()=>{if(r)return;let C=new EventSource(`${e}/sessions/${t}/events`),k=()=>{s=1e3,m()},L=x=>{try{u(JSON.parse(x.data).payload)}catch{}},R=()=>{C.readyState!==EventSource.CLOSED||r||i!==void 0||(l==null||l(),i=ot(()=>{i=void 0,f()},s),s=Math.min(s*2,1e4))};C.addEventListener("open",k),C.addEventListener("annotation.updated",L),C.addEventListener("error",R),l=()=>{C.removeEventListener("open",k),C.removeEventListener("annotation.updated",L),C.removeEventListener("error",R),C.close()}};f();let h=xg(()=>{m()},1e4);return()=>{r=!0,l==null||l(),i!==void 0&&clearTimeout(i),clearInterval(h),a==null||a.abort()}}var cw=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,dw={surface:"styles-module__surface___7qnpJ"},uw=(0,Pn.forwardRef)(function({annotation:t,editing:n,exiting:o,restorePreview:r,editorProps:l,lightMode:i,scrollY:s,onExited:a},u){let m=(0,Pn.useRef)({annotation:t,editorProps:l}),f=t!=null?t:m.current.annotation,h=t?l:m.current.editorProps,C=(0,Pn.useRef)(null),k=(0,Pn.useRef)(null),L=(0,Pn.useRef)(),R=(0,Pn.useRef)(s),x=n&&!o?"edit":t&&(!n||r)?"preview":"hidden",b=x==="preview"||!n;return(0,Pn.useLayoutEffect)(()=>{t&&(m.current={annotation:t,editorProps:l})},[t,l]),(0,Pn.useLayoutEffect)(()=>{let w=C.current;if(!w||!f)return;let p=x==="edit"&&(L.current!==f.id||w.dataset.state==="hidden"&&getComputedStyle(w).opacity==="0");p&&(w.dataset.directEntry="true");let D=()=>{let G=f.x/100*window.innerWidth,O=f.isFixed?f.y:f.y-s,K=x==="preview"||!n,re=parseFloat(w.style.getPropertyValue("--preview-width"))||200,J=Math.min(re,window.innerWidth-24),pe=Math.max(12,Math.min(window.innerWidth-J-12,G-J/2)),ne=K?J:Math.min(280,window.innerWidth-24),de=Math.min(K?12:20,(window.innerWidth-ne)/2),xe=O>window.innerHeight-(K?101:290);w.style.left=`${Math.max(de,Math.min(window.innerWidth-ne-de,pe))}px`,w.style.right="auto",w.style.top=`${Math.max(12,Math.min(window.innerHeight-12,O+(xe?-21:21)))}px`,w.style.bottom="auto",w.style.transform=xe?"translateY(-100%)":"translateY(0)",w.style.maxHeight=`${Math.max(100,xe?O-33:window.innerHeight-O-33)}px`},j=L.current!==f.id||R.current!==s||w.dataset.state==="hidden";j&&(w.dataset.positioning="true"),D(),(j||p)&&w.getBoundingClientRect(),delete w.dataset.positioning,delete w.dataset.directEntry,w.dataset.state=x,w.inert=x!=="edit",L.current=f.id,R.current=s;let P=()=>{w.dataset.positioning="true",D(),w.getBoundingClientRect(),delete w.dataset.positioning};return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[f==null?void 0:f.id,f==null?void 0:f.x,f==null?void 0:f.y,f==null?void 0:f.isFixed,x,n,s,f==null?void 0:f.comment]),(0,Pn.useLayoutEffect)(()=>{var w;n&&!o&&((w=k.current)==null||w.focus())},[n,o,f==null?void 0:f.id]),G_(C,o,a),(0,Pn.useImperativeHandle)(u,()=>({shake(){var w,p,D;(p=(w=C.current)==null?void 0:w.animate)==null||p.call(w,[{translate:"0px"},{translate:"-3px"},{translate:"3px"},{translate:"-2px"},{translate:"2px"},{translate:"0px"}],{duration:250}),(D=k.current)==null||D.focus()}}),[]),!f||!h?null:(0,Q_.jsx)("div",{ref:C,className:`${ze.popup} ${dw.surface} ${i?ze.light:""}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":n?"":void 0,"data-state":"hidden","aria-hidden":x==="hidden",onClick:w=>w.stopPropagation(),onKeyDownCapture:w=>{w.key!=="Escape"||w.nativeEvent.isComposing||!n||(w.preventDefault(),w.stopPropagation(),h.onCancel())},children:(0,Q_.jsx)($g,{ref:k,...h,variant:"card",preview:b,resetOnPreview:!n,disabled:!n||o},f.id)})}),_w=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,on={marker:"styles-module__marker___9CKF7",previewVisible:"styles-module__previewVisible___imMag",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",confirm:"styles-module__confirm___BtMvq",markerIn:"styles-module__markerIn___x4G8D",markerConfirm:"styles-module__markerConfirm___RT4Sk",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",number:"styles-module__number___1JFu9",numberGlyph:"styles-module__numberGlyph___qchdk",actionGlyph:"styles-module__actionGlyph___AFRt0",actionVisible:"styles-module__actionVisible___Kb--l",plus:"styles-module__plus___xslMP"},_g=(0,lo.memo)(function({annotation:t,pending:n=!1,globalIndex:o,layerIndex:r,layerSize:l,isExiting:i,isClearing:s,isAnimated:a,isNew:u,isHovered:m,isRemoving:f,onRemoveComplete:h,isEditingAny:C,renumberFrom:k,markerClickBehavior:L,onHoverEnter:R,onEnterComplete:x,onHoverLeave:b,onClick:w,onContextMenu:p}){let[D,j]=(0,lo.useState)(a),P=(0,lo.useRef)(n),[G,O]=(0,lo.useState)(!1),K=P.current&&!n&&D&&!G;(0,lo.useLayoutEffect)(()=>{i&&j(!1)},[i]);let re=(0,lo.useRef)(null),J=(0,lo.useRef)({action:!1,delete:!1}),pe=m&&!C,ne=pe&&L==="delete";(0,lo.useLayoutEffect)(()=>{f||(J.current={action:pe,delete:ne})},[f,pe,ne]);let de=f?J.current.action:pe,xe=f?J.current.delete:ne;G_(re,f,()=>h(t.id));let Ct=t.isMultiSelect,Ie=Ct?"var(--agentation-color-green)":"var(--agentation-color-accent)",at=s?on.clearing:i||f?on.exit:K?on.confirm:!a&&!D?on.enter:"",Pe=s?`${Math.min(r*20,120)}ms`:f||n||K?"0ms":i?`${(l-1-r)*20}ms`:`${u?0:r*20}ms`;return(0,Ro.jsxs)("button",{ref:re,type:"button","aria-label":n?"Pending annotation":`${L==="delete"?"Delete":"Edit"} annotation ${o+1}: ${t.element}`,disabled:n||i||f||s,tabIndex:n||C?-1:0,className:`${on.marker} ${n?on.pending:""} ${Ct?on.multiSelect:""} ${at} ${!n&&de?on.actionVisible:""} ${xe?on.hovered:""} ${m&&!C&&!f?on.previewVisible:""}`,"data-annotation-marker":n?void 0:"","data-annotation-pending":n?"":void 0,style:{left:`${t.x}%`,top:t.y,backgroundColor:xe?void 0:Ie,animationDelay:Pe},onAnimationEnd:st=>{st.target===st.currentTarget&&(at===on.enter||at===on.confirm)&&(j(!0),n||O(!0),n||x(t.id))},onMouseOver:()=>{n||R(t)},onMouseOut:st=>{let At=st.relatedTarget;(!(At instanceof Node)||!st.currentTarget.contains(At))&&b(t.id)},onFocus:st=>{!n&&st.currentTarget.matches(":focus-visible")&&R(t)},onBlur:()=>b(t.id),onClick:st=>{st.stopPropagation(),!n&&!i&&!f&&w(t,st.currentTarget)},onContextMenu:p?st=>{L==="delete"&&(st.preventDefault(),st.stopPropagation(),!n&&!i&&!f&&p(t,st.currentTarget))}:void 0,children:[(0,Ro.jsx)("span",{className:`${on.number} ${k!==null&&o>=k?on.renumber:""}`,"aria-hidden":"true",children:(0,Ro.jsx)("span",{className:on.numberGlyph,children:o+1})},o),(0,Ro.jsx)("span",{className:on.actionGlyph,"aria-hidden":"true",children:L==="delete"?(0,Ro.jsx)(I2,{size:Ct?18:16}):(0,Ro.jsx)(T2,{size:16})}),P.current&&(0,Ro.jsx)("span",{className:on.plus,"aria-hidden":"true",children:(0,Ro.jsx)(b2,{size:12})})]})}),fw=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,R_={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"},T_=({className:e="",checked:t,onChange:n,...o})=>(0,ys.jsxs)("div",{className:`${R_.switchContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,ys.jsx)("input",{className:R_.switchInput,checked:t,onChange:n,type:"checkbox",...o}),(0,ys.jsx)("div",{className:R_.switchThumb})]}),hw=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,vc={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"},pw=({className:e="",checked:t,onChange:n,...o})=>(0,ql.jsxs)("div",{className:`${vc.checkboxContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,ql.jsx)("input",{className:vc.checkboxInput,type:"checkbox",checked:t,onChange:n,...o}),(0,ql.jsx)("svg",{className:vc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,ql.jsx)("path",{className:vc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),mw=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,fg={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"},hg=({className:e="",label:t,tooltip:n,checked:o,onChange:r,...l})=>{let i=(0,Qg.useId)();return(0,Kl.jsxs)("div",{className:`${fg.container} ${e}`,...l,children:[(0,Kl.jsx)(pw,{id:i,onChange:r,checked:o}),(0,Kl.jsx)("label",{className:fg.label,htmlFor:i,children:t}),n&&(0,Kl.jsx)(tl,{content:n})]})},gw=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 253px;
  max-width: calc(100vw - 20px);
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #333;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,he={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",below:"styles-module__below___Vpv-k",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"},yw=(0,Cr.memo)(function({settings:t,onSettingsChange:n,isDarkMode:o,onToggleTheme:r,isDevMode:l,connectionStatus:i,endpoint:s,onExited:a,isOpen:u,toolbarNearBottom:m,settingsPage:f,onSettingsPageChange:h,onHideToolbar:C}){var w;let{ref:k}=Pg(u,{keepMounted:!0,onExited:a}),L=(0,Cr.useRef)(null),R=(0,Cr.useRef)(null),x=(0,Cr.useRef)(!1);(0,Cr.useLayoutEffect)(()=>{var p;!u||!x.current||(x.current=!1,(p=(f==="automations"?R:L).current)==null||p.focus())},[u,f]);let b=o?"Switch to light mode":"Switch to dark mode";return(0,ce.jsx)("div",{className:`${he.settingsPanel} ${m?he.below:""}`,style:m?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,ref:p=>{k.current=p,p==null||p.toggleAttribute("inert",!u)},role:"group","aria-label":"Feedback settings","aria-hidden":!u,children:(0,ce.jsxs)("div",{className:he.settingsPanelContainer,children:[(0,ce.jsxs)("div",{className:`${he.settingsPage} ${f==="automations"?he.slideLeft:""}`,ref:p=>{p==null||p.toggleAttribute("inert",f!=="main")},"aria-hidden":f!=="main",children:[(0,ce.jsxs)("div",{className:he.settingsHeader,children:[(0,ce.jsx)("a",{className:he.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Agentation",children:"Agentation"}),(0,ce.jsxs)("p",{className:he.settingsVersion,children:["v","3.1.2"]}),(0,ce.jsx)("button",{className:he.themeToggle,onClick:r,title:b,"aria-label":b,children:(0,ce.jsx)("span",{className:he.themeIconWrapper,children:(0,ce.jsx)("span",{className:he.themeIcon,children:o?(0,ce.jsx)($2,{size:20}):(0,ce.jsx)(R2,{size:20})},o?"sun":"moon")})})]}),(0,ce.jsx)("div",{className:he.divider}),(0,ce.jsxs)("div",{className:he.settingsSection,children:[(0,ce.jsxs)("div",{className:he.settingsRow,children:[(0,ce.jsxs)("div",{className:he.settingsLabel,children:["Output Detail",(0,ce.jsx)(tl,{content:"Controls how much detail is included in the copied output"})]}),(0,ce.jsxs)("button",{className:he.cycleButton,onClick:()=>{let D=(us.findIndex(j=>j.value===t.outputDetail)+1)%us.length;n({outputDetail:us[D].value})},children:[(0,ce.jsx)("span",{className:he.cycleButtonText,children:(w=us.find(p=>p.value===t.outputDetail))==null?void 0:w.label},t.outputDetail),(0,ce.jsx)("span",{className:he.cycleDots,children:us.map(p=>(0,ce.jsx)("span",{className:`${he.cycleDot} ${t.outputDetail===p.value?he.active:""}`},p.value))})]})]}),(0,ce.jsxs)("div",{className:`${he.settingsRow} ${he.settingsRowMarginTop} ${l?"":he.settingsRowDisabled}`,children:[(0,ce.jsxs)("div",{className:he.settingsLabel,children:["React Components",(0,ce.jsx)(tl,{content:l?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,ce.jsx)(T_,{"aria-label":"React Components",checked:l&&t.reactEnabled,onChange:p=>n({reactEnabled:p.target.checked}),disabled:!l})]}),(0,ce.jsxs)("div",{className:`${he.settingsRow} ${he.settingsRowMarginTop}`,children:[(0,ce.jsxs)("div",{className:he.settingsLabel,children:["Hide Until Restart",(0,ce.jsx)(tl,{content:"Hides the toolbar until you open a new tab"})]}),(0,ce.jsx)(T_,{"aria-label":"Hide Until Restart",checked:!1,onChange:p=>{p.target.checked&&C()}})]})]}),(0,ce.jsx)("div",{className:he.divider}),(0,ce.jsxs)("div",{className:he.settingsSection,children:[(0,ce.jsx)("div",{className:`${he.settingsLabel} ${he.settingsLabelMarker}`,children:"Marker Color"}),(0,ce.jsx)("div",{className:he.colorOptions,children:ps.map(p=>(0,ce.jsx)("button",{className:`${he.colorOption} ${t.annotationColorId===p.id?he.selected:""}`,style:{"--swatch":p.srgb,"--swatch-p3":p.p3},onClick:()=>n({annotationColorId:p.id}),title:p.label,"aria-label":p.label,type:"button"},p.id))})]}),(0,ce.jsx)("div",{className:he.divider}),(0,ce.jsxs)("div",{className:he.settingsSection,children:[(0,ce.jsx)(hg,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:p=>n({autoClearAfterCopy:p.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,ce.jsx)(hg,{className:he.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:p=>n({blockInteractions:p.target.checked})})]}),(0,ce.jsx)("div",{className:he.divider}),(0,ce.jsxs)("button",{className:he.settingsNavLink,ref:L,onClick:p=>{x.current=p.detail===0,p.currentTarget.blur(),h("automations")},children:[(0,ce.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,ce.jsxs)("span",{className:he.settingsNavLinkRight,children:[s&&i!=="disconnected"&&(0,ce.jsx)("span",{className:`${he.mcpNavIndicator} ${he[i]}`}),(0,ce.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ce.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,ce.jsxs)("div",{className:`${he.settingsPage} ${he.automationsPage} ${f==="automations"?he.slideIn:""}`,ref:p=>{p==null||p.toggleAttribute("inert",f!=="automations")},"aria-hidden":f!=="automations",children:[(0,ce.jsxs)("button",{className:he.settingsBackButton,ref:R,"aria-label":"Back to settings",onClick:p=>{x.current=p.detail===0,p.currentTarget.blur(),h("main")},children:[(0,ce.jsx)(P2,{size:16}),(0,ce.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,ce.jsx)("div",{className:he.divider}),(0,ce.jsxs)("div",{className:he.settingsSection,children:[(0,ce.jsxs)("div",{className:he.settingsRow,children:[(0,ce.jsxs)("span",{className:he.automationHeader,children:["MCP Connection",(0,ce.jsx)(tl,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),s&&(0,ce.jsx)("div",{className:`${he.mcpStatusDot} ${he[i]}`,title:i==="connected"?"Connected":i==="connecting"?"Connecting...":"Disconnected"})]}),(0,ce.jsxs)("p",{className:he.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,ce.jsx)("a",{href:"https://agentation.com/mcp",target:"_blank",rel:"noopener noreferrer",className:he.learnMoreLink,children:"Learn more"})]})]}),(0,ce.jsx)("div",{className:he.divider}),(0,ce.jsxs)("div",{className:`${he.settingsSection} ${he.settingsSectionGrow}`,children:[(0,ce.jsxs)("div",{className:he.settingsRow,children:[(0,ce.jsxs)("span",{className:he.automationHeader,children:["Webhooks",(0,ce.jsx)(tl,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,ce.jsxs)("div",{className:he.autoSendContainer,children:[(0,ce.jsx)("label",{htmlFor:"agentation-auto-send",className:`${he.autoSendLabel} ${t.webhooksEnabled?he.active:""} ${t.webhookUrl?"":he.disabled}`,children:"Auto-Send"}),(0,ce.jsx)(T_,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:p=>n({webhooksEnabled:p.target.checked}),disabled:!t.webhookUrl})]})]}),(0,ce.jsx)("p",{className:he.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,ce.jsx)("textarea",{className:he.webhookUrlInput,placeholder:"Webhook URL","aria-label":"Webhook URL",value:t.webhookUrl,onKeyDown:p=>p.stopPropagation(),onChange:p=>n({webhookUrl:p.target.value})})]})]})]})})});function xw({x:e,y:t,elementName:n,reactComponents:o}){let r=(0,$c.useRef)(null);return(0,$c.useLayoutEffect)(()=>{let l=r.current;if(!l)return;let i=()=>{let s=l.offsetWidth,a=l.offsetHeight;l.style.left=`${Math.max(8,Math.min(e,window.innerWidth-s-8))}px`;let u=t-a-8;l.style.top=`${Math.max(8,Math.min(u,window.innerHeight-a-8))}px`};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e,t,n,o]),(0,xs.jsxs)("div",{ref:r,className:`${W.hoverTooltip} ${W.enter}`,children:[o&&(0,xs.jsx)("div",{className:W.hoverReactPath,children:o}),(0,xs.jsx)("div",{className:W.hoverElementName,children:n})]})}var vw=`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the \u2018X\u2019 from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,ww=[vw,O2,Lg,hw,ev,z2,Ic,_w,cw,mw,gw,fw].join(`
`);function wc(e,t="filtered",n){let{name:o,path:r}=Gl(e,n);if(t==="off")return{name:o,elementName:o,path:r,reactComponents:null};let l=Vv(e,{mode:t});return{name:l.path?`${l.path} ${o}`:o,elementName:o,path:r,reactComponents:l.path}}var pg=!1,P_={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},mg=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},bw={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},kr=e=>e.metaKey||e.ctrlKey,ps=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],kw=[...ps.map(e=>`
    [data-agentation-accent="${e.id}"] {
      --agentation-color-accent: ${e.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.p3};
      }
    }
  `),`:host {
    ${ps.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${ps.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
    }
  }`].join("");function D_(e){let t=e;for(let o=Yn(t.ownerDocument);o;o=Yn(t.ownerDocument))t=o;let n=t;for(;n&&n!==document.body;){let r=window.getComputedStyle(n).position;if(r==="fixed"||r==="sticky")return!0;n=n.parentElement}return!1}function _s(e){return e.kind!=="placement"&&e.kind!=="rearrange"&&e.status!=="resolved"&&e.status!=="dismissed"}function bc(e){let t=Y_(e),n=t.found?t:lw(e);if(n.found&&n.source)return rw(n.source,"path")}function Xg(e={}){var r;let t=g2((r=e.useHashLocation)!=null?r:!1),n=(0,S.useState)(!1),o=v2(e.portalContainer);return o?(0,Sg.createPortal)((0,Vg.createElement)(Cw,{...e,key:e.useHashLocation?t:void 0,pathname:t,activeState:n,portalHost:o}),o):null}function Cw({pathname:e,activeState:t,portalHost:n,useHashLocation:o=!1,appName:r,enableKeyboardShortcuts:l=!0,identifyingAttributes:i=X_,copyFormat:s="markdown",onOpenSource:a,portalContainer:u,demoAnnotations:m,demoDelay:f=1e3,enableDemoMode:h=!1,onAnnotationAdd:C,onAnnotationDelete:k,onAnnotationUpdate:L,onAnnotationsClear:R,onCopy:x,onSubmit:b,copyToClipboard:w=!0,endpoint:p,sessionId:D,onSessionCreated:j,webhookUrl:P,className:G}){var Qf,Vf,Xf,Gf,qf,Kf,Jf,Zf,eh;let[O,K]=t,[,re]=(0,S.useState)(0),[J]=(0,S.useState)(()=>i2(document,()=>re(_=>_+1)));(0,S.useEffect)(()=>(J.start(),()=>J.stop()),[J]);let pe=typeof s=="object"?s.attribute:void 0,ne=(0,S.useMemo)(()=>pe?[...i,pe]:i,[i,pe]),de=(0,S.useRef)(!0);(0,S.useLayoutEffect)(()=>(de.current=!0,()=>{de.current=!1}),[]);let xe=(0,S.useCallback)(_=>o?y2(JSON.stringify([p,e]),_):_(),[p,e,o]),Ct=(0,S.useRef)(new Map),Ie=(0,S.useRef)(new Set),at=_=>_s(_)&&!Ie.current.has(_.id),Pe=async(..._)=>{let g=await lg(..._),v=_[2],M=v.id;if(M&&(Ct.current.set(M,g.id),Ie.current.has(M)&&Ie.current.add(g.id)),!o){let T=new URL(v.url||window.location.href).pathname,N=br(T).find($=>$.id===M);try{if(Ie.current.has(M))await yc(_[0],g.id);else if(N&&N.comment!==v.comment)return await I_(_[0],g.id,{comment:N.comment}),{...g,comment:N.comment}}catch($){console.warn("[Agentation] Failed to apply changes made during sync:",$)}}return g},st=_=>o?{..._,annotations:_.annotations.filter(g=>!Ie.current.has(g.id)&&x2(g.url||_.url,e,window.location.origin))}:_,At=(0,S.useRef)(e);At.current=e;let mn=(_,g,v,M=e)=>{let T=e2(_,br(M),g,Ct.current).filter(at);M===At.current&&de.current&&Mn(T),E_(M,T,v)},[Ne,Mn]=(0,S.useState)([]),[Po,qo]=(0,S.useState)(!0),[Ko,Ut]=(0,S.useState)(()=>Tv()),[Dn,gn]=(0,S.useState)(!1);(0,S.useLayoutEffect)(()=>{yg()},[]);let Bt=(0,S.useRef)(null),io=(0,S.useRef)(null),wo=(0,S.useRef)(null),Mr=(0,S.useRef)(null),Qn=(0,S.useRef)(!1),Do=(0,S.useRef)(!1),q=(0,S.useRef)(!1);(0,S.useLayoutEffect)(()=>{var _,g,v;O&&Qn.current?(Qn.current=!1,(g=(_=wo.current)==null?void 0:_.querySelector("button:not(:disabled)"))==null||g.focus()):!O&&Do.current&&(Do.current=!1,(v=io.current)==null||v.focus())},[O]),(0,S.useEffect)(()=>{let _=v=>{let M=Bt.current;M&&v.composedPath().includes(M)&&v.stopPropagation()},g=["mousedown","click","pointerdown"];return g.forEach(v=>n.addEventListener(v,_)),()=>{g.forEach(v=>n.removeEventListener(v,_))}},[n]);let[ye,Le]=(0,S.useState)(!1),[Ce,We]=(0,S.useState)(!1),[$e,Oe]=(0,S.useState)(null),[qe,Ye]=(0,S.useState)({x:0,y:0}),[Y,E]=(0,S.useState)(null),[I,F]=(0,S.useState)(!1),U=A0(),le=A0(),[ie,Z]=(0,S.useState)("idle"),[De,ge]=(0,S.useState)(!1),Re=(0,S.useRef)(new Set),Ke=(0,S.useRef)(new Set),ve=(0,S.useRef)(),je=(0,S.useCallback)(()=>{!Re.current.size&&!ve.current&&ge(!1)},[]);(0,S.useEffect)(()=>()=>clearTimeout(ve.current),[]);let[Te,gt]=(0,S.useState)(null),[tt,ut]=(0,S.useState)(null),[xt,Xe]=(0,S.useState)([]),[Ve,_t]=(0,S.useState)(null),ft=(0,S.useRef)(null);(0,S.useEffect)(()=>()=>{ft.current&&clearTimeout(ft.current)},[]);let[te,Lt]=(0,S.useState)(null),zt=(0,S.useRef)(null),Bn=(0,S.useRef)(!1),[yn,xn]=(0,S.useState)(!1);(0,S.useLayoutEffect)(()=>{if(te||!zt.current)return;let _=zt.current;if(zt.current=null,Y)return;let g=O&&_.isConnected&&!_.disabled?_:io.current;g==null||g.focus({preventScroll:!0})},[te,O,Y]);let[so,ln]=(0,S.useState)(null),[vn,zn]=(0,S.useState)([]),[On,of]=(0,S.useState)(0),[rf,lf]=(0,S.useState)(!1),[lt,Kg]=(0,S.useState)(!1),[Vn,sf]=(0,S.useState)(!1),[sn,Er]=(0,S.useState)(!1),[Jg,af]=(0,S.useState)("main"),[cf,Rc]=(0,S.useState)(!1),[Je,Tc]=(0,S.useState)(!1),[Lr,ni]=(0,S.useState)(!1),[Ae,Bo]=(0,S.useState)([]),[ll,Nr]=(0,S.useState)(null),Pc=(0,S.useRef)(!1),[vt,df]=(0,S.useState)(!1),[uf,Dc]=(0,S.useState)(!1),[_f,Zg]=(0,S.useState)(1),[ff,Sw]=(0,S.useState)("new-page"),[an,ws]=(0,S.useState)(""),[e1,t1]=(0,S.useState)(!1),[ee,bo]=(0,S.useState)(null),Bc=(0,S.useRef)(!1),zc=(0,S.useRef)({rearrange:null,placements:[]}),Ir=(0,S.useRef)({rearrange:null,placements:[]}),[n1,hf]=(0,S.useState)(0),[o1,r1]=(0,S.useState)(0),[il,pf]=(0,S.useState)([]),[sl,mf]=(0,S.useState)(null),gf=(0,S.useRef)({designPlacements:Ae,rearrangeState:ee,blankCanvas:vt,wireframePurpose:an});gf.current={designPlacements:Ae,rearrangeState:ee,blankCanvas:vt,wireframePurpose:an};let al=(0,S.useRef)({placements:il,rearrange:sl}),oi=(0,S.useRef)(new Set),bs=(0,S.useRef)(new Set),ao=(0,S.useRef)(null),cl=(0,S.useRef)(),yf=Je&&O&&!Lr&&vt;(0,S.useEffect)(()=>{if(yf){Dc(!1);let _=Sc(()=>{Dc(!0)});return()=>cancelAnimationFrame(_)}else Dc(!1)},[yf]);let Oc=(0,S.useRef)(new Map),Ac=(0,S.useRef)([]),Fc=(0,S.useRef)(new Map),$r=(0,S.useRef)(null),[Xn,Wc]=(0,S.useState)(!1),[co,l1]=(0,S.useState)([]),jc=(0,S.useRef)(co);jc.current=co;let[xf,Mw]=(0,S.useState)(null),Hc=(0,S.useRef)(null),Ew=(0,S.useRef)(!1),Lw=(0,S.useRef)([]),Nw=(0,S.useRef)(0),Iw=(0,S.useRef)(null),$w=(0,S.useRef)(null),Rw=(0,S.useRef)(1),[Uc,vf]=(0,S.useState)(!1),dl=(0,S.useRef)(null),[En,Jo]=(0,S.useState)([]),ri=(0,S.useRef)(!1),cn=()=>{Rc(!0)},i1=()=>{Rc(!1)},wf=()=>{Uc||(dl.current=ot(()=>vf(!0),850))},bf=()=>{dl.current&&(clearTimeout(dl.current),dl.current=null),vf(!1),i1()};(0,S.useEffect)(()=>()=>{dl.current&&clearTimeout(dl.current)},[]);let[nt,s1]=(0,S.useState)(()=>{var _;try{let g=JSON.parse((_=localStorage.getItem("feedback-toolbar-settings"))!=null?_:"");return{...P_,...g,annotationColorId:ps.find(v=>v.id===g.annotationColorId)?g.annotationColorId:P_.annotationColorId}}catch{return P_}}),[ko,kf]=(0,S.useState)(!0),[Cf,Sf]=(0,S.useState)(!1),a1=(0,S.useCallback)(_=>{s1(g=>({...g,..._}))},[]),c1=(0,S.useCallback)(()=>{var _;(_=Bt.current)==null||_.classList.add(W.disableTransitions),kf(g=>!g),Sc(()=>{var g;(g=Bt.current)==null||g.classList.remove(W.disableTransitions)})},[]),Mf=!1,zo=Mf&&nt.reactEnabled?bw[nt.outputDetail]:"off",[Yt,Yc]=(0,S.useState)(o?null:D!=null?D:null),Ef=(0,S.useRef)(!1),[Rr,Tr]=(0,S.useState)(p?"connecting":"disconnected"),[Pt,Qc]=(0,S.useState)(null),[ks,Lf]=(0,S.useState)(!1),li=(0,S.useRef)(null),Cs=(0,S.useRef)(!1),Pr=(0,S.useRef)(new Set),Ss=(0,S.useRef)(new Map),Nf=(0,S.useCallback)(_=>{Pr.current.add(_),uo.current===_&&(uo.current=null)},[]),[Zo,Ms]=(0,S.useState)(new Set),[Gn,ii]=(0,S.useState)(!1),[Dr,ul]=(0,S.useState)(!1),[Oo,Vc]=(0,S.useState)(!1),Br=(0,S.useRef)(null),qn=(0,S.useRef)(null),si=(0,S.useRef)(null),_l=(0,S.useRef)(null),ai=(0,S.useRef)(!1),If=(0,S.useRef)(0),uo=(0,S.useRef)(null),$f=(0,S.useRef)(null),Xc=8,d1=50,Gc=(0,S.useRef)(null),Es=(0,S.useRef)(null),ci=(0,S.useRef)(null),u1=(0,S.useCallback)(()=>af("main"),[]);(0,S.useEffect)(()=>{sn||Rc(!1)},[sn]),(0,S.useLayoutEffect)(()=>{var _,g;sn&&q.current&&(q.current=!1,(g=(_=Bt.current)==null?void 0:_.querySelector("[data-agentation-settings-panel] button"))==null||g.focus())},[sn]);let Ls=O&&Po&&!Je;(0,S.useEffect)(()=>{if(Ls)We(!1),Le(!0),Pr.current.clear();else if(ye){We(!0);let _=ot(()=>{Le(!1),We(!1)},250);return()=>clearTimeout(_)}},[Ls]),(0,S.useEffect)(()=>{Kg(!0),of(window.scrollY);let _=br(e);Mn(_.filter(_s)),pg||(Sf(!0),pg=!0,ot(()=>Sf(!1),750));try{let g=localStorage.getItem("feedback-toolbar-theme");g!==null&&kf(g==="dark")}catch{}try{let g=localStorage.getItem("feedback-toolbar-position");if(g){let v=JSON.parse(g);typeof v.x=="number"&&typeof v.y=="number"&&Qc(v)}}catch{}},[e]),(0,S.useEffect)(()=>{lt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(nt))},[nt,lt]),(0,S.useEffect)(()=>{lt&&localStorage.setItem("feedback-toolbar-theme",ko?"dark":"light")},[ko,lt]);let Rf=(0,S.useRef)(!1);(0,S.useEffect)(()=>{let _=Rf.current;Rf.current=ks,_&&!ks&&Pt&&lt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Pt))},[ks,Pt,lt]),(0,S.useEffect)(()=>{if(!p||!lt||Ef.current)return;Ef.current=!0,Tr("connecting");let _=window.location.href;xe(async()=>{try{let v=$v(e),M=D||v,T=!1;if(M)try{let N=br(e),$=st(await rg(p,M));Ac.current=$.annotations.filter(V=>V.kind==="placement"||V.kind==="rearrange"),de.current&&(Yc($.id),Tr("connected")),L_(e,$.id),T=!0;let A=br(e).filter(_s),oe=new Set($.annotations.map(V=>V.id)),_e=A.filter(V=>!oe.has(V.id));if(_e.length>0){let ue=`${typeof window!="undefined"?window.location.origin:""}${e}`,Be=(await Promise.allSettled(_e.map(be=>Pe(p,$.id,{...be,sessionId:$.id,url:ue})))).map((be,Fe)=>be.status==="fulfilled"?be.value:(console.warn("[Agentation] Failed to sync annotation:",be.reason),_e[Fe])),me=[...$.annotations,...Be];mn(N,me,$.id)}else mn(N,$.annotations,$.id)}catch(N){console.warn("[Agentation] Could not join session, creating new:",N),Rv(e)}if(!T){let N=await N_(p,_);L_(e,N.id),de.current&&(Yc(N.id),Tr("connected"),j==null||j(N.id));let $=o?new Map([[e,br(e)]]):kv(),A=typeof window!="undefined"?window.location.origin:"",oe=[];for(let[_e,V]of $){let ue=V.filter(me=>_s(me)&&!me._syncedTo);if(ue.length===0)continue;let we=`${A}${_e}`,Be=_e===e;oe.push((async()=>{try{let me=Be?N:await N_(p,we),Fe=(await Promise.allSettled(ue.map(Qe=>Pe(p,me.id,{...Qe,sessionId:me.id,url:we})))).map((Qe,Nt)=>Qe.status==="fulfilled"?Qe.value:(console.warn("[Agentation] Failed to sync annotation:",Qe.reason),ue[Nt]));mn(ue,Fe,me.id,_e)}catch(me){console.warn(`[Agentation] Failed to sync annotations for ${_e}:`,me)}})())}await Promise.allSettled(oe)}}catch(v){de.current&&Tr("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",v)}})},[p,D,lt,j,e,xe]),(0,S.useEffect)(()=>{if(!p||!lt)return;let _=async()=>{try{(await fetch(`${p}/health`)).ok?Tr("connected"):Tr("disconnected")}catch{Tr("disconnected")}};_();let g=xg(_,1e4);return()=>clearInterval(g)},[p,lt]);let Ns=(0,S.useRef)(Ne),Tf=(0,S.useRef)(!1);(0,S.useLayoutEffect)(()=>{var _;Ns.current=Ne,Tf.current=Ne.length>0||Ae.length>0||((_=ee==null?void 0:ee.sections.length)!=null?_:0)>0},[Ne,Ae.length,ee==null?void 0:ee.sections.length]);let qc=(0,S.useCallback)(_=>{let g=Re.current.has(_);if(g&&(Ke.current.delete(_),Ke.current.size))return;let v=g?new Set(Re.current):new Set([_]);g&&(Re.current.clear(),je());for(let N of v)Ss.current.delete(N),Pr.current.delete(N);Mn(N=>N.filter($=>!v.has($.id))),Ms(N=>new Set([...N].filter($=>!v.has($))));let M=g?[]:Ns.current.filter(N=>N.kind!=="placement"&&N.kind!=="rearrange"),T=M.findIndex(N=>N.id===_);T>=0&&T<M.length-1&&(_t(N=>N===null?T:Math.min(N,T)),ft.current&&clearTimeout(ft.current),ft.current=ot(()=>_t(null),200))},[je]);(0,S.useEffect)(()=>!p||!lt||!Yt?void 0:aw(p,Yt,()=>Tf.current,v=>{var N,$;let{id:M,kind:T}=v;if(T==="placement"){for(let[A,oe]of Oc.current)if(oe===M){(N=$r.current)==null||N.placements.forget(A),Bo(_e=>_e.filter(V=>V.id!==A));break}}else if(T==="rearrange"){for(let[A,oe]of Fc.current)if(oe===M){($=$r.current)==null||$.rearrange.forget(A),bo(_e=>{if(!_e)return null;let V=_e.sections.filter(ue=>ue.id!==A);return V.length===0?null:{..._e,sections:V}});break}}else{if(!Ns.current.some(A=>A.id===M))return;Ms(A=>new Set(A).add(M))}}),[p,lt,Yt]),(0,S.useEffect)(()=>{if(!p||!lt)return;let _=$f.current==="disconnected",g=Rr==="connected";$f.current=Rr,_&&g&&xe(async()=>{try{let M=br(e).filter(_s);if(M.length===0)return;let N=`${typeof window!="undefined"?window.location.origin:""}${e}`,$=Yt,A=[];if($)try{A=st(await rg(p,$)).annotations}catch{$=null}$||($=(await N_(p,N)).id,de.current&&Yc($),L_(e,$));let oe=new Set(A.map(V=>V.id)),_e=M.filter(V=>!oe.has(V.id));if(_e.length>0){let ue=(await Promise.allSettled(_e.map(Be=>Pe(p,$,{...Be,sessionId:$,url:N})))).map((Be,me)=>Be.status==="fulfilled"?Be.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Be.reason),_e[me])),we=[...A,...ue];mn(M,we,$)}}catch(M){console.warn("[Agentation] Failed to sync on reconnect:",M)}})},[Rr,p,lt,Yt,e,xe]);let _1=(0,S.useCallback)(()=>{Dn||(gn(!0),Er(!1),K(!1),ot(()=>{Pv(!0),Ut(!0),gn(!1)},400))},[Dn]);(0,S.useEffect)(()=>{if(!h||!lt||!m||m.length===0||Ne.length>0)return;let _=[];return _.push(ot(()=>{K(!0)},f-200)),m.forEach((g,v)=>{let M=f+v*300;_.push(ot(()=>{let T=document.querySelector(g.selector);if(!T)return;let N=Ht(T),{name:$,path:A}=Gl(T),oe={id:`demo-${Date.now()}-${v}`,x:(N.left+N.width/2)/window.innerWidth*100,y:N.top+N.height/2+window.scrollY,comment:g.comment,element:$,elementPath:A,timestamp:Date.now(),selectedText:g.selectedText,boundingBox:{x:N.left,y:N.top+window.scrollY,width:N.width,height:N.height},nearbyText:ss(T),cssClasses:as(T)};Mn(_e=>[..._e,oe])},M))}),()=>{_.forEach(clearTimeout)}},[h,lt,m,f]),(0,S.useEffect)(()=>{let _=()=>{of(window.scrollY),re(g=>g+1),lf(!0),ci.current&&clearTimeout(ci.current),ci.current=ot(()=>{lf(!1)},150)};return J.addEventListener("scroll",_,{passive:!0,capture:!0}),()=>{J.removeEventListener("scroll",_,!0),ci.current&&clearTimeout(ci.current)}},[J]),(0,S.useEffect)(()=>{if(!lt)return;let _=Ne.filter(g=>!Zo.has(g.id));_.length>0?Yt?E_(e,_,Yt):Ug(e,_):localStorage.removeItem(J_(e))},[Ne,e,lt,Yt,De,Zo]),(0,S.useEffect)(()=>{if(lt&&!Pc.current){Pc.current=!0;let _=Cv(e);_.length>0&&Bo(_)}},[lt,e]),(0,S.useEffect)(()=>{if(lt&&Pc.current&&!vt){let _=Ae.filter(g=>!il.includes(g));_.length>0?Sv(e,_):Mv(e)}},[Ae,e,lt,vt,il]),(0,S.useEffect)(()=>{if(lt&&!Bc.current){Bc.current=!0;let _=Ev(e);if(_){let g={..._,sections:_.sections.map(v=>{var M;return{...v,currentRect:(M=v.currentRect)!=null?M:{...v.originalRect}}})};bo(g)}}},[lt,e]),(0,S.useEffect)(()=>{lt&&Bc.current&&!vt&&(ee&&ee!==sl?Lv(e,ee):Nv(e))},[ee,e,lt,vt,sl]);let Kc=(0,S.useRef)(!1);(0,S.useEffect)(()=>{if(lt&&!Kc.current){Kc.current=!0;let _=Iv(e);_&&(Ir.current={rearrange:_.rearrange,placements:_.placements||[]},_.purpose&&ws(_.purpose))}},[lt,e]),(0,S.useEffect)(()=>{var g,v,M,T,N;if(!lt||!Kc.current||De)return;let _=Ir.current;vt?((v=(g=ee==null?void 0:ee.sections)==null?void 0:g.length)!=null?v:0)>0||Ae.length>0||an?og(e,{rearrange:ee,placements:Ae,purpose:an}):gc(e):((N=(T=(M=_.rearrange)==null?void 0:M.sections)==null?void 0:T.length)!=null?N:0)>0||_.placements.length>0||an?og(e,{rearrange:_.rearrange,placements:_.placements,purpose:an}):gc(e)},[ee,Ae,an,vt,e,lt,De]),(0,S.useEffect)(()=>{Je&&!ee&&bo({sections:[],originalOrder:[],detectedAt:Date.now()})},[Je,ee]),(0,S.useEffect)(()=>{if(!p||!Yt)return;let _={create:v=>xe(()=>lg(p,Yt,v)),update:(v,M)=>xe(()=>I_(p,v,M)),remove:v=>xe(()=>yc(p,v))};Oc.current=new Map,Fc.current=new Map;let g={placements:ug(_,Oc.current,Ac.current.filter(v=>v.kind==="placement")),rearrange:ug(_,Fc.current,Ac.current.filter(v=>v.kind==="rearrange"))};return $r.current=g,()=>{g.placements.dispose(),g.rearrange.dispose(),$r.current===g&&($r.current=null)}},[p,Yt,e,xe]),(0,S.useEffect)(()=>{var g;let _=window.location.pathname+window.location.search+window.location.hash;(g=$r.current)==null||g.placements.replace(Ae.filter(v=>!il.includes(v)).map(v=>({id:v.id,x:v.x/window.innerWidth*100,y:v.y,comment:`Place ${v.type} at (${Math.round(v.x)}, ${Math.round(v.y)}), ${v.width}\xD7${v.height}px${v.text?` \u2014 "${v.text}"`:""}`,element:`[design:${v.type}]`,elementPath:"[placement]",timestamp:v.timestamp,url:_,intent:"change",severity:"important",kind:"placement",placement:{componentType:v.type,width:v.width,height:v.height,scrollY:v.scrollY,text:v.text}})))},[Ae,p,Yt,e,il]),(0,S.useEffect)(()=>{let _=$r.current;if(!_)return;if(ee===sl){_.rearrange.replace([]);return}let g=ot(()=>{var T;let v=window.location.pathname+window.location.search+window.location.hash,M=[];for(let N of(T=ee==null?void 0:ee.sections)!=null?T:[]){let $=N.originalRect,A=N.currentRect,oe=Math.abs($.x-A.x)>1||Math.abs($.y-A.y)>1||Math.abs($.width-A.width)>1||Math.abs($.height-A.height)>1;if(!oe&&!N.note)continue;let _e=N.note?` \u2014 "${N.note}"`:"";M.push({id:N.id,x:A.x/window.innerWidth*100,y:A.y,comment:oe?`Move ${N.label} section (${N.tagName}) \u2014 from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}\xD7${Math.round($.height)} to (${Math.round(A.x)},${Math.round(A.y)}) ${Math.round(A.width)}\xD7${Math.round(A.height)}${_e}`:`Note on ${N.label} section (${N.tagName})${_e}`,element:N.selector,elementPath:"[rearrange]",timestamp:ee.detectedAt,url:v,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:N.selector,label:N.label,tagName:N.tagName,originalRect:$,currentRect:A}})}_.rearrange.replace(M)},300);return()=>clearTimeout(g)},[ee,p,Yt,e,sl]);let Jc=(0,S.useCallback)(()=>{clearTimeout(cl.current),ni(!1),Tc(!0)},[]);(0,S.useEffect)(()=>()=>clearTimeout(cl.current),[]);let di=(0,S.useCallback)(()=>{ni(!0),Tc(!1),Nr(null),clearTimeout(cl.current),cl.current=ot(()=>{ni(!1)},300)},[]),Is=(0,S.useCallback)(()=>{var g,v,M;let _=(g=io.current)==null?void 0:g.getRootNode();Do.current=!!(_!=null&&_.activeElement)&&!!((v=Bt.current)!=null&&v.contains(_.activeElement)),Do.current&&((M=_==null?void 0:_.activeElement)==null||M.blur()),Er(!1),Je&&(ni(!0),Tc(!1),Nr(null),clearTimeout(cl.current),cl.current=ot(()=>{ni(!1)},300)),K(!1)},[Je]),Pf=(0,S.useCallback)(()=>{Vn||(Z5(),sf(!0))},[Vn]),$s=(0,S.useCallback)(()=>{Vn&&(O0(),sf(!1))},[Vn]),Zc=(0,S.useCallback)(()=>{Vn?$s():Pf()},[Vn,Pf,$s]),ui=(0,S.useCallback)((_=En)=>{let g=_.filter($=>$.element.isConnected);if(g.length===0){Jo([]);return}let v=g[0],M=v.element,T=g.length>1,N=g.map($=>Ht($.element));if(T){let $={left:Math.min(...N.map(Fe=>Fe.left)),top:Math.min(...N.map(Fe=>Fe.top)),right:Math.max(...N.map(Fe=>Fe.right)),bottom:Math.max(...N.map(Fe=>Fe.bottom))},A=g.slice(0,5).map(Fe=>Fe.name).join(", "),oe=g.length>5?` +${g.length-5} more`:"",_e=N.map(Fe=>({x:Fe.left,y:Fe.top+window.scrollY,width:Fe.width,height:Fe.height})),ue=g[g.length-1].element,we=N[N.length-1],Be=we.left+we.width/2,me=we.top+we.height/2,be=D_(ue);E({id:Date.now().toString(),x:Be/window.innerWidth*100,y:be?me:me+window.scrollY,clientY:me,element:`${g.length} elements: ${A}${oe}`,elementPath:"multi-select",boundingBox:{x:$.left,y:$.top+window.scrollY,width:$.right-$.left,height:$.bottom-$.top},isMultiSelect:!0,isFixed:be,elementBoundingBoxes:_e,multiSelectElements:g.map(Fe=>Fe.element),targetElement:ue,fullPath:hs(M),accessibility:uc(M),computedStyles:dc(M),computedStylesObj:cc(M),nearbyElements:ac(M),cssClasses:as(M),nearbyText:ss(M),sourceFile:bc(M),attributes:fs(M,ne)})}else{let $=N[0],A=D_(M);E({id:Date.now().toString(),x:$.left/window.innerWidth*100,y:A?$.top:$.top+window.scrollY,clientY:$.top,element:v.name,elementPath:v.path,boundingBox:{x:$.left,y:A?$.top:$.top+window.scrollY,width:$.width,height:$.height},isFixed:A,fullPath:hs(M),accessibility:uc(M),computedStyles:dc(M),computedStylesObj:cc(M),nearbyElements:ac(M),cssClasses:as(M),nearbyText:ss(M),reactComponents:v.reactComponents,targetElement:M,sourceFile:bc(M),attributes:fs(M,ne)})}Jo([]),Oe(null)},[En,ne]);(0,S.useEffect)(()=>{O||(E(null),Lt(null),ln(null),zn([]),Oe(null),Er(!1),Jo([]),ri.current=!1,Vn&&$s())},[O,Vn,$s]),(0,S.useEffect)(()=>()=>{O0()},[]),(0,S.useEffect)(()=>{if(!O)return;let _=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),g=document.createElement("style");return g.id="agentation-cursor",g.textContent=`
      body { cursor: crosshair !important; }
      body :is(${_}) { cursor: text !important; }
    `,document.head.appendChild(g),()=>{let v=document.getElementById("agentation-cursor");v&&v.remove()}},[O]),(0,S.useEffect)(()=>{if(xf!==null&&O)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[xf,O]),(0,S.useEffect)(()=>{if(!O||Y||te||Xn||Je)return;let _=null,g=(N,$,A)=>{let oe=kc(N,$),_e=A?W0(N,$):oe;if(!_e||rn(_e,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){Oe(null);return}let{name:V,elementName:ue,path:we,reactComponents:Be}=wc(_e,zo,ne);Oe({element:V,elementName:ue,elementPath:we,rect:Ht(_e),reactComponents:Be,isPiercing:A&&_e!==oe}),Ye({x:N,y:$})},v=N=>{let $=N.composedPath()[0]||N.target;if(rn($,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){_=null,Oe(null);return}_={x:N.clientX,y:N.clientY},g(N.clientX,N.clientY,kr(N))},M=N=>{(N.key==="Meta"||N.key==="Control")&&_&&g(_.x,_.y,kr(N))},T=()=>{_=null,Oe(null)};return J.addEventListener("mousemove",v),J.addEventListener("keydown",M),J.addEventListener("keyup",M),J.addEventListener("mouseleave",T),window.addEventListener("blur",T),()=>{J.removeEventListener("mousemove",v),J.removeEventListener("keydown",M),J.removeEventListener("keyup",M),J.removeEventListener("mouseleave",T),window.removeEventListener("blur",T)}},[O,Y,te,Xn,Je,zo,ne]);let Rs=(0,S.useCallback)((_,g)=>{var v,M,T,N,$;if(te&&!Dr){(v=Es.current)==null||v.shake();return}if(Y&&!Gn){let A=(M=Bt.current)==null?void 0:M.querySelector("[data-annotation-popup]:not([data-annotation-card]) textarea");if(A!=null&&A.value.trim()){(T=Gc.current)==null||T.shake();return}ii(!0)}if(zt.current=g!=null?g:null,Bn.current=(N=g==null?void 0:g.matches(":focus-visible"))!=null?N:!1,xn(!1),ul(!1),Lt(_),gt(null),ut(null),Xe([]),($=_.elementBoundingBoxes)!=null&&$.length){let A=[];for(let oe of _.elementBoundingBoxes){let _e=oe.x+oe.width/2,V=oe.y+oe.height/2-window.scrollY,ue=_c(_e,V,oe);ue&&A.push(ue)}zn(A),ln(null)}else if(_.boundingBox){let A=_.boundingBox,oe=A.x+A.width/2,_e=_.isFixed?A.y+A.height/2:A.y+A.height/2-window.scrollY,V=_c(oe,_e,A);if(V){let ue=Ht(V),we=ue.width/A.width,Be=ue.height/A.height;we<.5||Be<.5?ln(null):ln(V)}else ln(null);zn([])}else ln(null),zn([])},[Y,Gn,te,Dr]);(0,S.useEffect)(()=>{if(!O||Xn||Je)return;let _=g=>{var Fe,Qe,Nt;if(ai.current){ai.current=!1,g.preventDefault(),g.stopPropagation();return}let v=g.composedPath()[0]||g.target;if(rn(v,"[data-feedback-toolbar]")||rn(v,"[data-annotation-popup]")||rn(v,"[data-annotation-marker]"))return;if(kr(g)&&!Y&&!te){g.preventDefault(),g.stopPropagation(),ri.current=g.shiftKey;let wt=W0(g.clientX,g.clientY);if(!wt)return;let Se=Ht(wt),{name:Me,path:ht,reactComponents:pt}=wc(wt,zo,ne),Ln=En.findIndex(Jt=>Jt.element===wt);Ln>=0?Jo(Jt=>Jt.filter((hl,pl)=>pl!==Ln)):Jo(Jt=>[...Jt,{element:wt,rect:Se,name:Me,path:ht,reactComponents:pt!=null?pt:void 0}]);return}let M=rn(v,"button, a, input, select, textarea, [role='button'], [onclick]");if(nt.blockInteractions&&(g.preventDefault(),g.stopPropagation()),Y&&!Gn){if(M&&!nt.blockInteractions)return;g.preventDefault(),(Fe=Gc.current)==null||Fe.shake();return}if(te&&!Dr){if(M&&!nt.blockInteractions)return;g.preventDefault(),(Qe=Es.current)==null||Qe.shake();return}g.preventDefault();let T=kc(g.clientX,g.clientY);if(!T)return;let{name:N,path:$,reactComponents:A}=wc(T,zo,ne),oe=Ht(T),_e=g.clientX/window.innerWidth*100,V=D_(T),ue=V?g.clientY:g.clientY+window.scrollY,we=(Nt=T.ownerDocument.defaultView)==null?void 0:Nt.getSelection(),Be;we&&we.toString().trim().length>0&&(Be=we.toString().trim().slice(0,500));let me=cc(T),be=dc(T);ii(!1),E({id:Date.now().toString(),x:_e,y:ue,clientY:g.clientY,element:N,elementPath:$,selectedText:Be,boundingBox:{x:oe.left,y:V?oe.top:oe.top+window.scrollY,width:oe.width,height:oe.height},nearbyText:ss(T),cssClasses:as(T),isFixed:V,fullPath:hs(T),accessibility:uc(T),computedStyles:be,computedStylesObj:me,nearbyElements:ac(T),reactComponents:A!=null?A:void 0,sourceFile:bc(T),attributes:fs(T,ne),frame:n2(T,g.clientX,g.clientY),targetElement:T}),Oe(null)};return J.addEventListener("click",_,!0),()=>J.removeEventListener("click",_,!0)},[O,Xn,Je,Y,Gn,te,Dr,nt.blockInteractions,zo,ne,En]),(0,S.useEffect)(()=>{if(!O)return;let _=v=>{let M=(v.key==="Meta"||v.key==="Control")&&!kr(v),T=v.key==="Shift"&&ri.current;(M||T)&&!qn.current&&En.length>0&&ui()},g=()=>{var v;ri.current=!1,Jo([]),Oe(null),Br.current=null,qn.current=null,Vc(!1),(v=_l.current)==null||v.replaceChildren()};return J.addEventListener("keyup",_),window.addEventListener("blur",g),()=>{J.removeEventListener("keyup",_),window.removeEventListener("blur",g)}},[O,En,ui]),(0,S.useEffect)(()=>{if(!O||Y||Xn||Je)return;let _=g=>{if(g.button!==0)return;ai.current=!1;let v=g.composedPath()[0]||g.target;if(rn(v,"[data-feedback-toolbar]")||rn(v,"[data-annotation-marker]")||rn(v,"[data-annotation-popup]"))return;let M=new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]);!kr(g)&&(M.has(v.tagName)||v.isContentEditable)||(g.preventDefault(),Br.current={x:g.clientX,y:g.clientY})};return J.addEventListener("mousedown",_),()=>J.removeEventListener("mousedown",_)},[O,Y,Xn,Je]),(0,S.useEffect)(()=>{if(!O||Y)return;let _=g=>{if(!Br.current)return;let v=g.clientX-Br.current.x,M=g.clientY-Br.current.y,T=v*v+M*M,N=Xc*Xc;if(!Oo&&T>=N&&(qn.current=Br.current,Vc(!0),g.preventDefault()),(Oo||T>=N)&&qn.current){if(si.current){let Se=Math.min(qn.current.x,g.clientX),Me=Math.min(qn.current.y,g.clientY),ht=Math.abs(g.clientX-qn.current.x),pt=Math.abs(g.clientY-qn.current.y);si.current.style.transform=`translate(${Se}px, ${Me}px)`,si.current.style.width=`${ht}px`,si.current.style.height=`${pt}px`}let $=Date.now();if($-If.current<d1)return;If.current=$;let A=qn.current.x,oe=qn.current.y,_e=Math.min(A,g.clientX),V=Math.min(oe,g.clientY),ue=Math.max(A,g.clientX),we=Math.max(oe,g.clientY),Be=(_e+ue)/2,me=(V+we)/2,be=new Set,Fe=[[_e,V],[ue,V],[_e,we],[ue,we],[Be,me],[Be,V],[Be,we],[_e,me],[ue,me]];for(let[Se,Me]of Fe){let ht=document.elementsFromPoint(Se,Me);for(let pt of ht)pt instanceof HTMLElement&&be.add(pt)}let Qe=J.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let Se of Qe)if(Se instanceof HTMLElement){let Me=Ht(Se),ht=Me.left+Me.width/2,pt=Me.top+Me.height/2,Ln=ht>=_e&&ht<=ue&&pt>=V&&pt<=we,Jt=Math.min(Me.right,ue)-Math.max(Me.left,_e),hl=Math.min(Me.bottom,we)-Math.max(Me.top,V),pl=Jt>0&&hl>0?Jt*hl:0,Zt=Me.width*Me.height,fi=Zt>0?pl/Zt:0;(Ln||fi>.5)&&be.add(Se)}let Nt=[],wt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let Se of be){if(rn(Se,"[data-feedback-toolbar]")||rn(Se,"[data-annotation-marker]"))continue;let Me=Ht(Se);if(!(Me.width>window.innerWidth*.8&&Me.height>window.innerHeight*.5)&&!(Me.width<10||Me.height<10)&&Me.left<ue&&Me.right>_e&&Me.top<we&&Me.bottom>V){let ht=Se.tagName,pt=wt.has(ht);if(!pt&&(ht==="DIV"||ht==="SPAN")){let Ln=Se.textContent&&Se.textContent.trim().length>0,Jt=Se.onclick!==null||Se.getAttribute("role")==="button"||Se.getAttribute("role")==="link"||Se.classList.contains("clickable")||Se.hasAttribute("data-clickable");(Ln||Jt)&&!Se.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(pt=!0)}if(pt){let Ln=!1;for(let Jt of Nt)if(Jt.left<=Me.left&&Jt.right>=Me.right&&Jt.top<=Me.top&&Jt.bottom>=Me.bottom){Ln=!0;break}Ln||Nt.push(Me)}}}if(_l.current){let Se=_l.current;for(;Se.children.length>Nt.length;)Se.removeChild(Se.lastChild);Nt.forEach((Me,ht)=>{let pt=Se.children[ht];pt||(pt=document.createElement("div"),pt.className=W.selectedElementHighlight,Se.appendChild(pt)),pt.style.transform=`translate(${Me.left}px, ${Me.top}px)`,pt.style.width=`${Me.width}px`,pt.style.height=`${Me.height}px`})}}};return J.addEventListener("mousemove",_,{passive:!0}),()=>J.removeEventListener("mousemove",_)},[O,Y,Oo,Xc]),(0,S.useEffect)(()=>{if(!O)return;let _=g=>{let v=Oo,M=qn.current;if(Oo&&M){ai.current=!0;let T=Math.min(M.x,g.clientX),N=Math.min(M.y,g.clientY),$=Math.max(M.x,g.clientX),A=Math.max(M.y,g.clientY),oe=[];J.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(me=>{if(!(me instanceof HTMLElement)||rn(me,"[data-feedback-toolbar]")||rn(me,"[data-annotation-marker]"))return;let be=Ht(me);be.width>window.innerWidth*.8&&be.height>window.innerHeight*.5||be.width<10||be.height<10||be.left<$&&be.right>T&&be.top<A&&be.bottom>N&&oe.push({element:me,rect:be})});let V=oe.filter(({element:me})=>!oe.some(({element:be})=>be!==me&&me.contains(be))),ue=g.clientX/window.innerWidth*100,we=g.clientY+window.scrollY,Be=(kr(g)||En.length>0)&&!Y&&!te;if(V.length>0)if(Be){let me=[...En];for(let{element:be,rect:Fe}of V){if(me.some(Se=>Se.element===be))continue;let{name:Qe,path:Nt,reactComponents:wt}=wc(be,zo,ne);me.push({element:be,rect:Fe,name:Qe,path:Nt,reactComponents:wt!=null?wt:void 0})}ri.current=g.shiftKey,kr(g)?Jo(me):ui(me)}else{let me=V.reduce((Se,{rect:Me})=>({left:Math.min(Se.left,Me.left),top:Math.min(Se.top,Me.top),right:Math.max(Se.right,Me.right),bottom:Math.max(Se.bottom,Me.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),be=V.slice(0,5).map(({element:Se})=>Gl(Se).name).join(", "),Fe=V.length>5?` +${V.length-5} more`:"",Qe=V[0].element,Nt=cc(Qe),wt=dc(Qe);E({id:Date.now().toString(),x:ue,y:we,clientY:g.clientY,element:`${V.length} elements: ${be}${Fe}`,elementPath:"multi-select",boundingBox:{x:me.left,y:me.top+window.scrollY,width:me.right-me.left,height:me.bottom-me.top},isMultiSelect:!0,fullPath:hs(Qe),accessibility:uc(Qe),computedStyles:wt,computedStylesObj:Nt,nearbyElements:ac(Qe),cssClasses:as(Qe),nearbyText:ss(Qe),sourceFile:bc(Qe),attributes:fs(Qe,ne)})}else if(Be&&!kr(g))ui();else if(!Be){let me=Math.abs($-T),be=Math.abs(A-N);me>20&&be>20&&E({id:Date.now().toString(),x:ue,y:we,clientY:g.clientY,element:"Area selection",elementPath:`region at (${Math.round(T)}, ${Math.round(N)})`,boundingBox:{x:T,y:N+window.scrollY,width:me,height:be},isMultiSelect:!0})}Oe(null)}else v&&(ai.current=!0);Br.current=null,qn.current=null,Vc(!1),_l.current&&(_l.current.innerHTML="")};return J.addEventListener("mouseup",_),()=>J.removeEventListener("mouseup",_)},[O,Oo,Y,te,zo,ne,En,ui]);let Co=(0,S.useCallback)(async(_,g,v)=>{let M=nt.webhookUrl||P;if(!M||!nt.webhooksEnabled&&!v)return!1;try{return(await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:_,timestamp:Date.now(),url:typeof window!="undefined"?window.location.href:void 0,...g})})).ok}catch(T){return console.warn("[Agentation] Webhook failed:",T),!1}},[P,nt.webhookUrl,nt.webhooksEnabled]),f1=(0,S.useCallback)(_=>{var v;if(!Y||Y.isSubmitted)return;let g={id:Y.id,x:Y.x,y:Y.y,comment:_,element:Y.element,elementPath:Y.elementPath,timestamp:Date.now(),selectedText:Y.selectedText,boundingBox:Y.boundingBox,nearbyText:Y.nearbyText,cssClasses:Y.cssClasses,isMultiSelect:Y.isMultiSelect,isFixed:Y.isFixed,fullPath:Y.fullPath,accessibility:Y.accessibility,computedStyles:Y.computedStyles,nearbyElements:Y.nearbyElements,reactComponents:Y.reactComponents,sourceFile:Y.sourceFile,attributes:Y.attributes,frame:Y.frame,elementBoundingBoxes:Y.elementBoundingBoxes,...p&&Yt?{sessionId:Yt,url:typeof window!="undefined"?window.location.href:void 0,status:"pending"}:{}};Mn(M=>[...M,g]),E({...Y,isSubmitted:!0}),uo.current=g.id,C==null||C(g),Co("annotation.add",{annotation:g}),ii(!0),(v=window.getSelection())==null||v.removeAllRanges(),p&&Yt&&xe(async()=>{let M=await Pe(p,Yt,g);if(o){let T=br(e);E_(e,T.map(N=>N.id===g.id?{...N,id:M.id}:N),Yt)}!de.current||Ie.current.has(g.id)||M.id!==g.id&&(Ss.current.set(M.id,g.id),uo.current===g.id&&(uo.current=M.id),Mn(T=>T.map(N=>N.id===g.id?{...N,id:M.id}:N)),Pr.current.delete(g.id)&&Pr.current.add(M.id))}).catch(M=>{console.warn("[Agentation] Failed to sync annotation:",M)})},[Y,C,Co,p,Yt,xe,e,o]),ed=(0,S.useCallback)(()=>{ii(!0)},[]),td=(0,S.useCallback)(()=>{E(null),ii(!1)},[]),nd=(0,S.useCallback)(_=>{if(Ie.current.has(_))return;Ie.current.add(_);let g=Ne.find(v=>v.id===_);(te==null?void 0:te.id)===_&&(xn(!1),ul(!0)),Ms(v=>new Set(v).add(_)),g&&(k==null||k(g),Co("annotation.delete",{annotation:g})),p&&xe(()=>{var v;return yc(p,(v=Ct.current.get(_))!=null?v:_)}).catch(v=>{console.warn("[Agentation] Failed to delete annotation from server:",v)})},[Ne,te,k,Co,p,xe]),Ts=(0,S.useCallback)(_=>{var g;if(!_){gt(null),ut(null),Xe([]);return}if(gt(_.id),(g=_.elementBoundingBoxes)!=null&&g.length){let v=[];for(let M of _.elementBoundingBoxes){let T=M.x+M.width/2,N=M.y+M.height/2-window.scrollY,$=_c(T,N,M);$&&v.push($)}Xe(v),ut(null)}else if(_.boundingBox){let v=_.boundingBox,M=v.x+v.width/2,T=_.isFixed?v.y+v.height/2:v.y+v.height/2-window.scrollY,N=_c(M,T,v);if(N){let $=Ht(N),A=$.width/v.width,oe=$.height/v.height;A<.5||oe<.5?ut(null):ut(N)}else ut(null);Xe([])}else ut(null),Xe([])},[]),h1=(0,S.useCallback)(_=>{var v;if(!te)return;let g={...te,comment:_};Lt(g),Mn(M=>M.map(T=>T.id===te.id?g:T)),L==null||L(g),Co("annotation.update",{annotation:g}),p&&xe(()=>{var M;return I_(p,(M=Ct.current.get(te.id))!=null?M:te.id,{comment:_})}).catch(M=>{console.warn("[Agentation] Failed to update annotation on server:",M)}),xn(Bn.current||!!((v=zt.current)!=null&&v.matches(":hover"))),ul(!0)},[te,L,Co,p,xe]),p1=(0,S.useCallback)(()=>{var _;xn(Bn.current||!!((_=zt.current)!=null&&_.matches(":hover"))),ul(!0)},[]),m1=(0,S.useCallback)(()=>{yn&&te&&!Y&&gt(te.id),Lt(null),ln(null),zn([]),ul(!1)},[yn,te,Y]),Ps=(0,S.useCallback)((_,g)=>{if(!_.length&&!g)return;ge(!0);let v={placements:[...al.current.placements,..._],rearrange:g!=null?g:al.current.rearrange};al.current=v,pf(v.placements),mf(v.rearrange),clearTimeout(ve.current),ve.current=ot(()=>{Bo(M=>M.filter(T=>!v.placements.includes(T))),bo(M=>M===v.rearrange?null:M),al.current={placements:[],rearrange:null},pf([]),mf(null),ve.current=void 0,je()},200)},[je]),zr=(0,S.useCallback)(()=>{var A,oe,_e;if(!de.current)return;let _=new Map(Ns.current.map(V=>[V.id,V])),g=[];for(let V of Ne){let ue=(oe=_.get((A=Ct.current.get(V.id))!=null?A:V.id))!=null?oe:_.get(V.id);ue&&ue.comment===V.comment&&!Ie.current.has(ue.id)&&!g.includes(ue)&&g.push(ue)}let v=g.length,M=gf.current,T=Ae.filter(V=>M.designPlacements.includes(V)&&!al.current.placements.includes(V)),N=ee===M.rearrangeState&&ee!==al.current.rearrange?ee:null,$=co.filter(V=>jc.current.includes(V));if(!(v===0&&$.length===0&&T.length===0&&!N)){for(let V of g)Ie.current.add(V.id),Re.current.add(V.id),Ke.current.add(V.id);if(Ms(V=>new Set([...V,...g.map(ue=>ue.id)])),R==null||R(g),Co("annotations.clear",{annotations:g}),p&&Promise.all(g.map(V=>xe(()=>{var ue;return yc(p,(ue=Ct.current.get(V.id))!=null?ue:V.id)}).catch(ue=>{console.warn("[Agentation] Failed to delete annotation from server:",ue)}))),ge(!0),l1(V=>V.filter(ue=>!$.includes(ue))),$.length>0&&$.length===jc.current.length){let V=Hc.current;(_e=V==null?void 0:V.getContext("2d"))==null||_e.clearRect(0,0,V.width,V.height)}Ps(T,N),vt===M.blankCanvas&&an===M.wireframePurpose&&Ae===M.designPlacements&&ee===M.rearrangeState&&(vt&&df(!1),an&&ws(""),Ir.current={rearrange:null,placements:[]},gc(e)),je()}},[e,Ne,co,Ae,ee,vt,an,R,Co,p,xe,je,Ps]),od=(0,S.useCallback)(async()=>{let _=U.start(),g=typeof window!="undefined"?window.location.pathname+window.location.search+window.location.hash:e,v=Je&&vt,M;if(v){if(Ae.length===0&&!ee&&!an)return;M=r?Cc(g,r):""}else{if(M=ag(Ne,g,nt.outputDetail,{appName:r}),!M&&co.length===0&&Ae.length===0&&!ee)return;M||(M=Cc(g,r))}if(!v&&co.length>0){let N=new Set;for(let _e of Ne)_e.drawingIndex!=null&&N.add(_e.drawingIndex);let $=Hc.current;$&&($.style.visibility="hidden");let A=[],oe=window.scrollY;for(let _e=0;_e<co.length;_e++){if(N.has(_e))continue;let V=co[_e];if(V.points.length<2)continue;let ue=V.fixed?V.points:V.points.map(Ft=>({x:Ft.x,y:Ft.y-oe})),we=1/0,Be=1/0,me=-1/0,be=-1/0;for(let Ft of ue)we=Math.min(we,Ft.x),Be=Math.min(Be,Ft.y),me=Math.max(me,Ft.x),be=Math.max(be,Ft.y);let Fe=me-we,Qe=be-Be,Nt=Math.hypot(Fe,Qe),wt=ue[0],Se=ue[ue.length-1],Me=Math.hypot(Se.x-wt.x,Se.y-wt.y),ht,pt=Me<Nt*.35,Ln=Fe/Math.max(Qe,1);if(pt&&Nt>20){let Ft=Math.max(Fe,Qe)*.15,er=0;for(let Or of ue){let y1=Or.x-we<Ft,x1=me-Or.x<Ft,v1=Or.y-Be<Ft,w1=be-Or.y<Ft;(y1||x1)&&(v1||w1)&&er++}ht=er>ue.length*.15?"box":"circle"}else Ln>3&&Qe<40?ht="underline":Me>Nt*.5?ht="arrow":ht="drawing";let Jt=Math.min(10,ue.length),hl=Math.max(1,Math.floor(ue.length/Jt)),pl=new Set,Zt=[],fi=[wt];for(let Ft=hl;Ft<ue.length-1;Ft+=hl)fi.push(ue[Ft]);fi.push(Se);for(let Ft of fi){let er=kc(Ft.x,Ft.y);if(!er||pl.has(er)||rn(er,"[data-feedback-toolbar]"))continue;pl.add(er);let{name:Or}=Gl(er);Zt.includes(Or)||Zt.push(Or)}let Os=`${Math.round(we)},${Math.round(Be)} \u2192 ${Math.round(me)},${Math.round(be)}`,ml;(ht==="circle"||ht==="box")&&Zt.length>0?ml=`${ht==="box"?"Boxed":"Circled"} **${Zt[0]}**${Zt.length>1?` (and ${Zt.slice(1).join(", ")})`:""} (region: ${Os})`:ht==="underline"&&Zt.length>0?ml=`Underlined **${Zt[0]}** (${Os})`:ht==="arrow"&&Zt.length>=2?ml=`Arrow from **${Zt[0]}** to **${Zt[Zt.length-1]}** (${Math.round(wt.x)},${Math.round(wt.y)} \u2192 ${Math.round(Se.x)},${Math.round(Se.y)})`:Zt.length>0?ml=`${ht==="arrow"?"Arrow":"Drawing"} near **${Zt.join("**, **")}** (region: ${Os})`:ml=`Drawing at ${Os}`,A.push(ml)}$&&($.style.visibility=""),A.length>0&&(M+=`
**Drawings:**
`,A.forEach((_e,V)=>{M+=`${V+1}. ${_e}
`}))}if((Ae.length>0||v&&an)&&(M+=`
`+tg(Ae,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:vt,wireframePurpose:an||void 0},nt.outputDetail)),ee){let N=ng(ee,nt.outputDetail,{width:window.innerWidth,height:window.innerHeight});N&&(M+=`
`+N)}if(M=cg(Ne,M,s),!M){F(!1);return}let T=!w||await iw(M);x==null||x(M),U.isCurrent(_)&&(F(T),T&&(U.schedule(_,()=>F(!1),2e3),nt.autoClearAfterCopy&&U.schedule(_,zr,500)))},[Ne,co,Ae,ee,vt,Je,ff,an,e,nt.outputDetail,zo,ne,nt.autoClearAfterCopy,zr,U,w,s,r,x]),rd=mg(nt.webhookUrl)||mg(P||""),So=b!=null||rd&&!nt.webhooksEnabled,Ds=O?So?337:297:44,ld=(0,S.useCallback)(async()=>{let _=le.start(),g=typeof window!="undefined"?window.location.href:e,v=typeof window!="undefined"?window.location.pathname+window.location.search+window.location.hash:e,M=ag(Ne,v,nt.outputDetail,{appName:r});if(!M&&Ae.length===0&&!ee)return;if(M||(M=Cc(v,r)),Ae.length>0&&(M+=`
`+tg(Ae,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:vt,wireframePurpose:an||void 0},nt.outputDetail)),ee){let A=ng(ee,nt.outputDetail,{width:window.innerWidth,height:window.innerHeight});A&&(M+=`
`+A)}Z("sending");let T=!0;try{await(b==null?void 0:b(M,Ne))}catch(A){console.warn("[Agentation] Submit callback failed:",A),T=!1}if(!le.isCurrent(_))return;let N=rd?await Co("submit",{output:M,annotations:Ne,url:g},!0):!0,$=T&&N&&So;le.isCurrent(_)&&(Z($?"sent":"failed"),le.schedule(_,()=>Z("idle"),2500),$&&nt.autoClearAfterCopy&&le.schedule(_,zr,500))},[b,r,Co,Ne,Ae,ee,vt,ff,e,nt.outputDetail,zo,ne,nt.autoClearAfterCopy,zr,rd,So,le]);(0,S.useEffect)(()=>{let g=(N=!1)=>{var $;($=li.current)!=null&&$.dragging&&(Cs.current=N,Lf(!1)),li.current=null},v=N=>{let $=li.current;if(!$)return;if(!(N.buttons&1)){g();return}let A=N.clientX-$.x,oe=N.clientY-$.y,_e=Math.sqrt(A*A+oe*oe);if(!$.dragging&&_e>10&&($.dragging=!0,Lf(!0)),$.dragging){let V=$.toolbarX+A,ue=$.toolbarY+oe,we=20,Be=337,me=44,Fe=Be-Ds,Qe=we-Fe,Nt=window.innerWidth-we-Be;V=Math.max(Qe,Math.min(Nt,V)),ue=Math.max(we,Math.min(window.innerHeight-me-we,ue)),Qc({x:V,y:ue})}},M=()=>g(!0),T=()=>g();return J.addEventListener("mousemove",v),J.addEventListener("mouseup",M,!0),window.addEventListener("blur",T),()=>{J.removeEventListener("mousemove",v),J.removeEventListener("mouseup",M,!0),window.removeEventListener("blur",T)}},[Ds]);let g1=(0,S.useCallback)(_=>{if(Cs.current=!1,li.current=null,_.button!==0||_.target.closest("button")&&(_.target.closest("button")!==io.current||O)||_.target.closest("[data-agentation-settings-panel]"))return;let g=_.currentTarget.parentElement;if(!g)return;let v=Ht(g);li.current={x:_.clientX,y:_.clientY,toolbarX:v.left,toolbarY:v.top,dragging:!1}},[O]);(0,S.useLayoutEffect)(()=>{if(!Pt)return;let _=()=>{let T=Pt.x,N=Pt.y,oe=20-(337-Ds),_e=window.innerWidth-20-337;T=Math.max(oe,Math.min(_e,T)),N=Math.max(20,Math.min(window.innerHeight-44-20,N)),(T!==Pt.x||N!==Pt.y)&&Qc({x:T,y:N})};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[Pt,Ds]),(0,S.useEffect)(()=>{if(!l)return;let _=v=>{var N,$;if(v.defaultPrevented||v.isComposing||v.altKey)return;let M=v.composedPath()[0]||v.target,T=M.tagName==="INPUT"||M.tagName==="TEXTAREA"||M.tagName==="SELECT"||M.isContentEditable;if(v.key==="Escape"){if(u&&!Y&&!te&&(O||sn||Je||Xn||En.length)&&(v.preventDefault(),v.stopPropagation()),sn){v.preventDefault(),Er(!1),(N=Mr.current)==null||N.focus();return}if(Je){ll?Nr(null):di();return}if(Xn){Wc(!1);return}if(En.length>0){Jo([]);return}Y||te||O&&(cn(),Is())}if((v.metaKey||v.ctrlKey)&&v.shiftKey&&(v.key==="f"||v.key==="F")){v.preventDefault(),cn(),O?Is():(($=io.current)==null||$.blur(),Qn.current=!0,K(!0));return}!O||T||v.metaKey||v.ctrlKey||v.repeat||((v.key==="p"||v.key==="P")&&(v.preventDefault(),cn(),Zc()),(v.key==="l"||v.key==="L")&&(v.preventDefault(),cn(),Xn&&Wc(!1),sn&&Er(!1),Y&&ed(),Je?di():Jc()),(v.key==="h"||v.key==="H")&&Ne.length>0&&(v.preventDefault(),cn(),qo(A=>!A)),(v.key==="c"||v.key==="C")&&(Ne.length>0||Ae.length>0||ee)&&(v.preventDefault(),cn(),od()),(v.key==="x"||v.key==="X")&&(Ne.length>0||Ae.length>0||ee)&&(v.preventDefault(),cn(),zr(),Ae.length>0&&Bo([]),ee&&bo(null)),(v.key==="s"||v.key==="S")&&Ne.length>0&&So&&ie==="idle"&&(v.preventDefault(),cn(),ld()))},g=!!u;return J.addEventListener("keydown",_,g),()=>J.removeEventListener("keydown",_,g)},[l,u,te,O,Xn,Je,ll,Ae,ee,Y,Ne.length,So,ie,ld,Zc,od,zr,En,sn,Is,Jc,di]);let _i=Ne.length>0,Bs=o2(),zs=Ne.filter(_=>_.kind!=="placement"&&_.kind!=="rearrange"),Df=zs.flatMap((_,g)=>{let v=Bs(_);return v?[{annotation:v,index:g}]:[]}),Bf=Y&&!Y.isSubmitted?Bs({...Y,comment:"",timestamp:0}):null,zf=[...ye?Df.map(_=>({..._,pending:!1})):[],...Bf?[{annotation:Bf,index:zs.length,pending:!0}]:[]];(0,S.useEffect)(()=>{let _=new Set(ye&&!Ko?Df.map(({annotation:g})=>g.id):[]);uo.current&&!_.has(uo.current)&&(uo.current=null);for(let g of Zo)_.has(g)||qc(g)}),(0,S.useEffect)(()=>{te&&Zo.has(te.id)&&(xn(!1),ul(!0))},[te,Zo]);let Of=(0,S.useCallback)(_=>{!Ce&&_.id!==uo.current&&Ts(_)},[Ce,Ts]),Af=(0,S.useCallback)(_=>{Te===_&&Ts(null)},[Te,Ts]),Ff=(0,S.useCallback)((_,g)=>{var v;if(te&&!Dr){(v=Es.current)==null||v.shake();return}Gn&&td(),nt.markerClickBehavior==="delete"?nd(_.id):Rs(_,g)},[nt.markerClickBehavior,nd,Rs,Gn,td,te,Dr]),Kn=te!=null?te:Ls&&!Y&&!De?Ne.find(_=>_.id===Te&&!Zo.has(_.id)):null,Wf=Vn?"Resume animations":"Pause animations",jf=Je?"Exit layout mode":"Layout mode",Hf=Po?"Hide markers":"Show markers",Uf=s!=="markdown"&&!cg(Ne,"",s),Yf=typeof s=="object"?`Copy ${s.attribute}`:s==="source"?"Copy source paths":s==="classes"?"Copy classes":Je&&vt?"Copy layout":"Copy feedback",fl=O?0:-1;return!lt||Ko?null:(0,Q.jsxs)(w2,{host:"agentation-toolbar",className:G,children:[(0,Q.jsxs)("style",{"data-agentation-styles":"toolbar",children:[ww,kw]}),(0,Q.jsxs)("div",{ref:Bt,className:W.positionContext,style:{display:"contents"},"data-agentation-theme":ko?"dark":"light","data-agentation-accent":nt.annotationColorId,"data-agentation-root":"",children:[(0,Q.jsx)("div",{className:W.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":ks||void 0,style:Pt?{left:Pt.x,top:Pt.y,right:"auto",bottom:"auto"}:void 0,children:(0,Q.jsxs)("div",{className:`${W.toolbarContainer} ${O?W.expanded:W.collapsed} ${Cf?W.entrance:""} ${Dn?W.hiding:""} ${So?W.serverConnected:""}`,onMouseDown:g1,children:[(0,Q.jsxs)("div",{className:`${W.controlsContent} ${O?W.visible:W.hidden} ${Pt&&Pt.y<100?W.tooltipBelow:""} ${cf||sn?W.tooltipsHidden:""} ${Uc?W.tooltipsInSession:""}`,ref:_=>{wo.current=_,_==null||_.toggleAttribute("inert",!O)},role:"group","aria-label":"Feedback controls","aria-hidden":!O,onMouseEnter:wf,onMouseLeave:bf,children:[(0,Q.jsxs)("div",{className:`${W.buttonWrapper} ${Pt&&Pt.x<120?W.buttonWrapperAlignLeft:""}`,children:[(0,Q.jsx)("button",{className:W.controlButton,onClick:_=>{_.stopPropagation(),cn(),Zc()},"data-active":Vn,"aria-label":Wf,"aria-pressed":Vn,tabIndex:fl,children:(0,Q.jsx)(E2,{size:24,isPaused:Vn})}),(0,Q.jsxs)("span",{className:W.buttonTooltip,children:[Wf,l&&(0,Q.jsx)("span",{className:W.shortcut,children:"P"})]})]}),(0,Q.jsxs)("div",{className:W.buttonWrapper,children:[(0,Q.jsx)("button",{className:`${W.controlButton} ${ko?"":W.light}`,onClick:_=>{_.stopPropagation(),cn(),Xn&&Wc(!1),sn&&Er(!1),Y&&ed(),Je?di():Jc()},"data-active":Je,"aria-label":jf,"aria-pressed":Je,tabIndex:fl,style:Je&&vt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,Q.jsx)(D2,{size:21})}),(0,Q.jsxs)("span",{className:W.buttonTooltip,children:[jf,l&&(0,Q.jsx)("span",{className:W.shortcut,children:"L"})]})]}),(0,Q.jsxs)("div",{className:W.buttonWrapper,children:[(0,Q.jsx)("button",{className:W.controlButton,onClick:_=>{_.stopPropagation(),cn(),qo(!Po)},disabled:!_i||Je,"aria-label":Hf,tabIndex:fl,children:(0,Q.jsx)(M2,{size:24,isOpen:Po})}),(0,Q.jsxs)("span",{className:W.buttonTooltip,children:[Hf,l&&(0,Q.jsx)("span",{className:W.shortcut,children:"H"})]})]}),(0,Q.jsxs)("div",{className:W.buttonWrapper,children:[(0,Q.jsx)("button",{className:`${W.controlButton} ${I?W.statusShowing:""}`,onClick:_=>{_.stopPropagation(),cn(),od()},disabled:Uf||(Je&&vt?Ae.length===0&&!((Qf=ee==null?void 0:ee.sections)!=null&&Qf.length):!_i&&co.length===0&&Ae.length===0&&!((Vf=ee==null?void 0:ee.sections)!=null&&Vf.length)),"data-active":I,"aria-label":Yf,tabIndex:fl,children:(0,Q.jsx)(C2,{size:24,copied:I,tint:Je&&vt&&(Ae.length>0||(Xf=ee==null?void 0:ee.sections)!=null&&Xf.length)?"#f97316":void 0})}),(0,Q.jsxs)("span",{className:W.buttonTooltip,children:[Uf?"No matching metadata":Yf,l&&(0,Q.jsx)("span",{className:W.shortcut,children:"C"})]})]}),(0,Q.jsxs)("div",{className:`${W.buttonWrapper} ${W.sendButtonWrapper} ${O&&So?W.sendButtonVisible:""}`,children:[(0,Q.jsxs)("button",{className:`${W.controlButton} ${ie==="sent"||ie==="failed"?W.statusShowing:""}`,onClick:_=>{_.stopPropagation(),cn(),ld()},disabled:!_i||!So||ie==="sending","data-no-hover":ie==="sent"||ie==="failed",tabIndex:O&&So?0:-1,"aria-label":"Send Annotations","aria-hidden":!So,children:[(0,Q.jsx)(S2,{size:24,state:ie}),_i&&ie==="idle"&&(0,Q.jsx)("span",{className:W.buttonBadge,children:Ne.length})]}),(0,Q.jsxs)("span",{className:W.buttonTooltip,children:["Send Annotations",l&&(0,Q.jsx)("span",{className:W.shortcut,children:"S"})]})]}),(0,Q.jsxs)("div",{className:W.buttonWrapper,children:[(0,Q.jsx)("button",{className:W.controlButton,onClick:_=>{_.stopPropagation(),cn(),zr()},disabled:!_i&&co.length===0&&Ae.length===0&&!((Gf=ee==null?void 0:ee.sections)!=null&&Gf.length),"data-danger":!0,"aria-label":"Clear all",tabIndex:fl,children:(0,Q.jsx)(N2,{size:24})}),(0,Q.jsxs)("span",{className:W.buttonTooltip,children:["Clear all",l&&(0,Q.jsx)("span",{className:W.shortcut,children:"X"})]})]}),(0,Q.jsxs)("div",{className:W.buttonWrapper,children:[(0,Q.jsx)("button",{ref:Mr,"aria-label":"Settings","aria-expanded":sn,tabIndex:fl,className:W.controlButton,onClick:_=>{_.stopPropagation(),cn(),Je&&di(),q.current=!sn&&_.detail===0,Er(!sn)},children:(0,Q.jsx)(L2,{size:24})}),p&&Rr!=="disconnected"&&(0,Q.jsx)("span",{className:`${W.mcpIndicator} ${W[Rr]} ${sn?W.hidden:""}`,title:Rr==="connected"?"MCP Connected":"MCP Connecting..."}),(0,Q.jsx)("span",{className:W.buttonTooltip,children:"Settings"})]}),(0,Q.jsx)("div",{className:W.divider}),(0,Q.jsx)("div",{className:W.togglePlaceholder,"aria-hidden":"true"})]}),(0,Q.jsxs)("div",{className:`${W.buttonWrapper} ${W.toggleWrapper} ${Pt&&Pt.y<100?W.tooltipBelow:""} ${!O||cf||sn?W.tooltipsHidden:""} ${Uc?W.tooltipsInSession:""} ${Pt&&typeof window!="undefined"&&Pt.x>window.innerWidth-120?W.buttonWrapperAlignRight:""}`,onMouseEnter:wf,onMouseLeave:bf,children:[(0,Q.jsx)("button",{ref:io,type:"button",className:`${W.toggleContent} ${O?W.expandedToggle:""}`,"aria-label":O?"Exit":"Start feedback mode","aria-expanded":O,"aria-keyshortcuts":l?"Meta+Shift+F Control+Shift+F":void 0,title:O?void 0:l?"Start feedback mode (\u2318\u21E7F / Ctrl+Shift+F)":"Start feedback mode",onClick:_=>{if(Cs.current){Cs.current=!1,_.preventDefault();return}_.stopPropagation(),O?(cn(),Is()):(_.currentTarget.blur(),Qn.current=_.detail===0,K(!0))},children:(0,Q.jsxs)("span",{className:W.toggleIcon,children:[(0,Q.jsx)(A2,{active:O}),zs.length>0&&(0,Q.jsx)("span",{className:`${W.badge} ${O?W.fadeOut:""} ${Cf?W.entrance:""}`,children:zs.length})]})}),(0,Q.jsxs)("span",{className:W.buttonTooltip,"aria-hidden":!O,children:["Exit",l&&(0,Q.jsx)("span",{className:W.shortcut,children:"Esc"})]})]}),(0,Q.jsx)(iv,{visible:Je&&O,activeType:ll,onSelect:_=>{Nr(ll===_?null:_)},isDarkMode:ko,sectionCount:(qf=ee==null?void 0:ee.sections.length)!=null?qf:0,onDetectSections:()=>{var $,A;let _=dv(),g=($=ee==null?void 0:ee.sections)!=null?$:[],v=new Set(g.map(oe=>oe.selector)),M=_.filter(oe=>!v.has(oe.selector)),T=[...g,...M],N=[...(A=ee==null?void 0:ee.originalOrder)!=null?A:[],...M.map(oe=>oe.id)];bo({sections:T,originalOrder:N,detectedAt:Date.now()})},placementCount:Ae.length,onClearPlacements:()=>{Ps(Ae,ee)},blankCanvas:vt,onBlankCanvasChange:_=>{let g={sections:[],originalOrder:[],detectedAt:Date.now()};_?(zc.current={rearrange:ee,placements:Ae},bo(Ir.current.rearrange||g),Bo(Ir.current.placements),Nr(null)):(Ir.current={rearrange:ee,placements:Ae},bo(zc.current.rearrange||g),Bo(zc.current.placements)),df(_)},wireframePurpose:an,onWireframePurposeChange:ws,Tooltip:tl,onDragStart:(_,g)=>{var ue;g.preventDefault();let v=ae[_],M=null,T=!1,N=g.clientX,$=g.clientY,A=g.target.closest("[data-feedback-toolbar]"),oe=(ue=A==null?void 0:A.getBoundingClientRect().top)!=null?ue:window.innerHeight,_e=we=>{var Ln;let Be=we.clientX-N,me=we.clientY-$;if(!T&&(Math.abs(Be)>4||Math.abs(me)>4)&&(T=!0,M=document.createElement("div"),M.className=`${z.dragPreview}${vt?` ${z.dragPreviewWireframe}`:""}`,(Ln=Bt.current)==null||Ln.appendChild(M)),!M)return;let be=Math.max(0,oe-we.clientY),Fe=Math.min(1,be/180),Qe=1-Math.pow(1-Fe,2),Nt=28,wt=20,Se=Math.min(140,v.width*.18),Me=Math.min(90,v.height*.18),ht=Nt+(Se-Nt)*Qe,pt=wt+(Me-wt)*Qe;M.style.width=`${ht}px`,M.style.height=`${pt}px`,M.style.left=`${we.clientX-ht/2}px`,M.style.top=`${we.clientY-pt/2}px`,M.style.opacity=`${.5+.5*Qe}`,M.textContent=Qe>.25?_:""},V=we=>{if(window.removeEventListener("mousemove",_e),window.removeEventListener("mouseup",V),M&&M.remove(),T){let Be=v.width,me=v.height,be=window.scrollY,Fe=Math.max(0,we.clientX-Be/2),Qe=Math.max(0,we.clientY+be-me/2),Nt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:_,x:Fe,y:Qe,width:Be,height:me,scrollY:be,timestamp:Date.now()};Bo(wt=>[...wt,Nt]),Nr(null),oi.current=new Set,hf(wt=>wt+1)}};window.addEventListener("mousemove",_e),window.addEventListener("mouseup",V)}}),(0,Q.jsx)(yw,{settings:nt,onSettingsChange:a1,isDarkMode:ko,onToggleTheme:c1,isDevMode:Mf,connectionStatus:Rr,endpoint:p,onExited:u1,isOpen:O&&sn,toolbarNearBottom:!!Pt&&Pt.y<230,settingsPage:Jg,onSettingsPageChange:af,onHideToolbar:_1})]})}),(Je||Lr)&&(0,Q.jsx)("div",{className:`${z.blankCanvas} ${uf?z.visible:""} ${e1?z.gridActive:""}`,style:{"--canvas-opacity":_f},"data-feedback-toolbar":!0}),Je&&vt&&uf&&(0,Q.jsxs)("div",{className:z.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,Q.jsxs)("div",{className:z.wireframeOpacityRow,children:[(0,Q.jsx)("span",{className:z.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,Q.jsx)("input",{type:"range",className:z.wireframeOpacitySlider,min:0,max:1,step:.01,value:_f,onChange:_=>Zg(Number(_.target.value))})]}),(0,Q.jsxs)("div",{className:z.wireframeNoticeTitleRow,children:[(0,Q.jsx)("span",{className:z.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,Q.jsx)("span",{className:z.wireframeNoticeDivider}),(0,Q.jsx)("button",{className:z.wireframeStartOver,onClick:()=>{Ps(Ae,ee),Ir.current={rearrange:null,placements:[]},ws(""),gc(e)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,Q.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(Je||Lr)&&(0,Q.jsx)(tv,{placements:Ae,onChange:Bo,activeComponent:Lr?null:ll,onActiveComponentChange:Nr,isDarkMode:ko,exiting:Lr,onInteractionChange:t1,passthrough:!ll,extraSnapRects:ee==null?void 0:ee.sections.map(_=>_.currentRect),deselectSignal:n1,clearingPlacements:il,wireframe:vt,onSelectionChange:(_,g)=>{oi.current=_,g||(bs.current=new Set,r1(v=>v+1))},onDragMove:(_,g)=>{var M;let v=bs.current;if(!(!v.size||!ee)){if(!ao.current){ao.current=new Map;for(let T of ee.sections)v.has(T.id)&&ao.current.set(T.id,{x:T.currentRect.x,y:T.currentRect.y})}for(let T of ee.sections){if(!v.has(T.id)||!ao.current.get(T.id))continue;let $=(M=Bt.current)==null?void 0:M.querySelector(`[data-rearrange-section="${T.id}"]`);$&&($.style.transform=`translate(${_}px, ${g}px)`)}}},onDragEnd:(_,g,v)=>{var N;let M=bs.current,T=ao.current;if(ao.current=null,!(!M.size||!ee||!T)){for(let $ of M){let A=(N=Bt.current)==null?void 0:N.querySelector(`[data-rearrange-section="${$}"]`);A&&(A.style.transform="")}v&&bo($=>$&&{...$,sections:$.sections.map(A=>{let oe=T.get(A.id);return oe?{...A,currentRect:{...A.currentRect,x:Math.max(0,oe.x+_),y:Math.max(0,oe.y+g)}}:A})})}}}),(Je||Lr)&&ee&&(0,Q.jsx)(fv,{rearrangeState:ee,onChange:bo,isDarkMode:ko,exiting:Lr,blankCanvas:vt,extraSnapRects:Ae.map(_=>({x:_.x,y:_.y,width:_.width,height:_.height})),clearing:ee===sl,deselectSignal:o1,onSelectionChange:(_,g)=>{bs.current=_,g||(oi.current=new Set,hf(v=>v+1))},onDragMove:(_,g)=>{var M;let v=oi.current;if(v.size){if(!ao.current){ao.current=new Map;for(let T of Ae)v.has(T.id)&&ao.current.set(T.id,{x:T.x,y:T.y})}for(let T of v){let N=(M=Bt.current)==null?void 0:M.querySelector(`[data-design-placement="${T}"]`);N&&(N.style.transform=`translate(${_}px, ${g}px)`)}}},onDragEnd:(_,g,v)=>{var N;let M=oi.current,T=ao.current;if(ao.current=null,!(!M.size||!T)){for(let $ of M){let A=(N=Bt.current)==null?void 0:N.querySelector(`[data-design-placement="${$}"]`);A&&(A.style.transform="")}v&&Bo($=>$.map(A=>{let oe=T.get(A.id);return oe?{...A,x:Math.max(0,oe.x+_),y:Math.max(0,oe.y+g)}:A}))}}}),(0,Q.jsx)("canvas",{ref:Hc,className:`${W.drawCanvas} ${Xn?W.active:""}`,"aria-hidden":"true",style:{opacity:Ls?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,Q.jsx)("div",{className:W.markersLayer,"data-feedback-toolbar":!0,children:zf.filter(({annotation:_})=>!_.isFixed).map(({annotation:_,index:g,pending:v},M,T)=>{var N;return(0,Q.jsx)(_g,{annotation:_,pending:v,globalIndex:g,layerIndex:M,layerSize:T.length,isExiting:v?Gn:Ce,isClearing:Re.current.has(_.id),isAnimated:Pr.current.has(_.id),isNew:uo.current===_.id,onEnterComplete:Nf,isHovered:!Ce&&Te===_.id,isRemoving:Zo.has(_.id),onRemoveComplete:qc,isEditingAny:!!te,renumberFrom:Ve,markerClickBehavior:nt.markerClickBehavior,onHoverEnter:Of,onHoverLeave:Af,onClick:Ff,onContextMenu:Rs},(N=Ss.current.get(_.id))!=null?N:_.id)})}),(0,Q.jsx)("div",{className:W.fixedMarkersLayer,"data-feedback-toolbar":!0,children:zf.filter(({annotation:_})=>_.isFixed).map(({annotation:_,index:g,pending:v},M,T)=>{var N;return(0,Q.jsx)(_g,{annotation:_,pending:v,globalIndex:g,layerIndex:M,layerSize:T.length,isExiting:v?Gn:Ce,isClearing:Re.current.has(_.id),isAnimated:Pr.current.has(_.id),isNew:uo.current===_.id,onEnterComplete:Nf,isHovered:!Ce&&Te===_.id,isRemoving:Zo.has(_.id),onRemoveComplete:qc,isEditingAny:!!te,renumberFrom:Ve,markerClickBehavior:nt.markerClickBehavior,onHoverEnter:Of,onHoverLeave:Af,onClick:Ff,onContextMenu:Rs},(N=Ss.current.get(_.id))!=null?N:_.id)})}),O&&$e&&!Y&&!te&&!rf&&!Oo&&(0,Q.jsx)(xw,{x:qe.x,y:qe.y,elementName:$e.elementName,reactComponents:$e.reactComponents}),O&&(0,Q.jsxs)("div",{className:W.overlay,"data-feedback-toolbar":!0,style:Y||te?{zIndex:"inherit"}:void 0,children:[($e==null?void 0:$e.rect)&&!Y&&!rf&&!Oo&&(0,Q.jsx)("div",{className:`${W.hoverHighlight} ${W.enter}`,style:{left:$e.rect.left,top:$e.rect.top,width:$e.rect.width,height:$e.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)",...$e.isPiercing?{borderStyle:"dashed"}:{}}}),En.filter(_=>_.element.isConnected).map((_,g)=>{let v=Ht(_.element),M=En.length>1;return(0,Q.jsx)("div",{className:M?W.multiSelectOutline:W.singleSelectOutline,style:{position:"fixed",left:v.left,top:v.top,width:v.width,height:v.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},g)}),Te&&!Y&&(()=>{var T;let _=Ne.find(N=>N.id===Te);if(!(_!=null&&_.boundingBox))return null;if((T=_.elementBoundingBoxes)!=null&&T.length)return xt.length>0?xt.filter(N=>N.isConnected).map((N,$)=>{let A=Ht(N);return(0,Q.jsx)("div",{className:`${W.multiSelectOutline} ${W.enter}`,style:{left:A.left,top:A.top,width:A.width,height:A.height}},`hover-outline-live-${$}`)}):_.elementBoundingBoxes.map((N,$)=>(0,Q.jsx)("div",{className:`${W.multiSelectOutline} ${W.enter}`,style:{left:N.x,top:N.y-On,width:N.width,height:N.height}},`hover-outline-${$}`));let g=tt&&tt.isConnected?Ht(tt):null,v=g?{x:g.left,y:g.top,width:g.width,height:g.height}:{x:_.boundingBox.x,y:_.isFixed?_.boundingBox.y:_.boundingBox.y-On,width:_.boundingBox.width,height:_.boundingBox.height},M=_.isMultiSelect;return(0,Q.jsx)("div",{className:`${M?W.multiSelectOutline:W.singleSelectOutline} ${W.enter}`,style:{left:v.x,top:v.y,width:v.width,height:v.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Y&&(0,Q.jsxs)(Q.Fragment,{children:[(Kf=Y.multiSelectElements)!=null&&Kf.length?Y.multiSelectElements.filter(_=>_.isConnected).map((_,g)=>{let v=Ht(_);return(0,Q.jsx)("div",{className:`${W.multiSelectOutline} ${Gn?W.exit:W.enter}`,style:{left:v.left,top:v.top,width:v.width,height:v.height}},`pending-multi-${g}`)}):Y.targetElement&&Y.targetElement.isConnected?(()=>{let _=Ht(Y.targetElement);return(0,Q.jsx)("div",{className:`${W.singleSelectOutline} ${Gn?W.exit:W.enter}`,style:{left:_.left,top:_.top,width:_.width,height:_.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():Y.boundingBox&&(0,Q.jsx)("div",{className:`${Y.isMultiSelect?W.multiSelectOutline:W.singleSelectOutline} ${Gn?W.exit:W.enter}`,style:{left:Y.boundingBox.x,top:Y.boundingBox.y-On,width:Y.boundingBox.width,height:Y.boundingBox.height,...Y.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{var M,T,N;let _=(M=Bs(Y))!=null?M:Y,g=_.x,v=_.isFixed?_.y:_.y-On;return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsx)(K_,{ref:Gc,element:Y.element,selectedText:Y.selectedText,allowEmpty:typeof s=="object"&&!!((T=Y.attributes)!=null&&T[s.attribute]),onOpenSource:a&&Y.sourceFile?()=>a(Y.sourceFile):void 0,computedStyles:Y.computedStylesObj,placeholder:typeof s=="object"&&((N=Y.attributes)!=null&&N[s.attribute])?"Add a note (optional)":Y.element==="Area selection"?"What should change in this area?":Y.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:f1,onExitComplete:td,onCancel:ed,isExiting:Gn,lightMode:!ko,accentColor:Y.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,g/100*window.innerWidth)),...v>window.innerHeight-290?{bottom:window.innerHeight-v+20}:{top:v+20}}},Y.id)})})()]}),te&&(0,Q.jsx)(Q.Fragment,{children:(Jf=te.elementBoundingBoxes)!=null&&Jf.length?vn.length>0?vn.filter(_=>_.isConnected).map((_,g)=>{let v=Ht(_);return(0,Q.jsx)("div",{className:`${W.multiSelectOutline} ${W.enter}`,style:{left:v.left,top:v.top,width:v.width,height:v.height}},`edit-multi-live-${g}`)}):te.elementBoundingBoxes.map((_,g)=>(0,Q.jsx)("div",{className:`${W.multiSelectOutline} ${W.enter}`,style:{left:_.x,top:_.y-On,width:_.width,height:_.height}},`edit-multi-${g}`)):(()=>{let _=so&&so.isConnected?Ht(so):null,g=_?{x:_.left,y:_.top,width:_.width,height:_.height}:te.boundingBox?{x:te.boundingBox.x,y:te.isFixed?te.boundingBox.y:te.boundingBox.y-On,width:te.boundingBox.width,height:te.boundingBox.height}:null;return g?(0,Q.jsx)("div",{className:`${te.isMultiSelect?W.multiSelectOutline:W.singleSelectOutline} ${W.enter}`,style:{left:g.x,top:g.y,width:g.width,height:g.height,...te.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})()}),Oo&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("div",{ref:si,className:W.dragSelection}),(0,Q.jsx)("div",{ref:_l,className:W.highlightsContainer})]})]}),(0,Q.jsx)(uw,{ref:Es,annotation:Kn?(Zf=Bs(Kn))!=null?Zf:te:null,editing:!!te,exiting:Dr,restorePreview:yn,scrollY:On,lightMode:!ko,onExited:m1,editorProps:Kn?{element:Kn.element,selectedText:Kn.selectedText,allowEmpty:typeof s=="object"&&!!((eh=Kn.attributes)!=null&&eh[s.attribute]),onOpenSource:a&&Kn.sourceFile?()=>a(Kn.sourceFile):void 0,computedStyles:h2(Kn.computedStyles),placeholder:"Edit your feedback...",initialValue:Kn.comment,submitLabel:"Save",onSubmit:h1,onCancel:p1,onDelete:()=>nd(Kn.id),accentColor:Kn.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"}:void 0})]})]})}function Vw(e){let t=document.createElement("div");return t.id="agentation-root",document.body.appendChild(t),(0,qg.createRoot)(t).render((0,Gg.createElement)(Xg,e)),t}export{Vw as mount};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
