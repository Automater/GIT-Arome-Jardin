function Vg(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(n,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var cx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function C0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gg={exports:{}},Uc={},qg={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.element"),ux=Symbol.for("react.portal"),dx=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),hx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),xx=Symbol.for("react.memo"),yx=Symbol.for("react.lazy"),Mh=Symbol.iterator;function wx(e){return e===null||typeof e!="object"?null:(e=Mh&&e[Mh]||e["@@iterator"],typeof e=="function"?e:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xg=Object.assign,Qg={};function Lo(e,t,r){this.props=e,this.context=t,this.refs=Qg,this.updater=r||Yg}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kg(){}Kg.prototype=Lo.prototype;function E0(e,t,r){this.props=e,this.context=t,this.refs=Qg,this.updater=r||Yg}var z0=E0.prototype=new Kg;z0.constructor=E0;Xg(z0,Lo.prototype);z0.isPureReactComponent=!0;var Nh=Array.isArray,Zg=Object.prototype.hasOwnProperty,_0={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function e2(e,t,r){var n,i={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Zg.call(t,n)&&!Jg.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:as,type:e,key:a,ref:s,props:i,_owner:_0.current}}function bx(e,t){return{$$typeof:as,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $0(e){return typeof e=="object"&&e!==null&&e.$$typeof===as}function jx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Oh=/\/+/g;function Hu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jx(""+e.key):t.toString(36)}function Sl(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case as:case ux:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Hu(s,0):n,Nh(i)?(r="",e!=null&&(r=e.replace(Oh,"$&/")+"/"),Sl(i,t,r,"",function(u){return u})):i!=null&&($0(i)&&(i=bx(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Oh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",Nh(e))for(var l=0;l<e.length;l++){a=e[l];var c=n+Hu(a,l);s+=Sl(a,t,r,c,i)}else if(c=wx(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=n+Hu(a,l++),s+=Sl(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Os(e,t,r){if(e==null)return e;var n=[],i=0;return Sl(e,n,"","",function(a){return t.call(r,a,i++)}),n}function kx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},Cl={transition:null},Sx={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:_0};function t2(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Os,forEach:function(e,t,r){Os(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Os(e,function(){t++}),t},toArray:function(e){return Os(e,function(t){return t})||[]},only:function(e){if(!$0(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=Lo;pe.Fragment=dx;pe.Profiler=hx;pe.PureComponent=E0;pe.StrictMode=fx;pe.Suspense=vx;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;pe.act=t2;pe.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Xg({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=_0.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Zg.call(t,c)&&!Jg.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:as,type:e.type,key:i,ref:a,props:n,_owner:s}};pe.createContext=function(e){return e={$$typeof:mx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:px,_context:e},e.Consumer=e};pe.createElement=e2;pe.createFactory=function(e){var t=e2.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:gx,render:e}};pe.isValidElement=$0;pe.lazy=function(e){return{$$typeof:yx,_payload:{_status:-1,_result:e},_init:kx}};pe.memo=function(e,t){return{$$typeof:xx,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Cl.transition;Cl.transition={};try{e()}finally{Cl.transition=t}};pe.unstable_act=t2;pe.useCallback=function(e,t){return bt.current.useCallback(e,t)};pe.useContext=function(e){return bt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return bt.current.useEffect(e,t)};pe.useId=function(){return bt.current.useId()};pe.useImperativeHandle=function(e,t,r){return bt.current.useImperativeHandle(e,t,r)};pe.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return bt.current.useMemo(e,t)};pe.useReducer=function(e,t,r){return bt.current.useReducer(e,t,r)};pe.useRef=function(e){return bt.current.useRef(e)};pe.useState=function(e){return bt.current.useState(e)};pe.useSyncExternalStore=function(e,t,r){return bt.current.useSyncExternalStore(e,t,r)};pe.useTransition=function(){return bt.current.useTransition()};pe.version="18.3.1";qg.exports=pe;var b=qg.exports;const ce=C0(b),Yd=Vg({__proto__:null,default:ce},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=b,Ex=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),_x=Object.prototype.hasOwnProperty,$x=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Px={key:!0,ref:!0,__self:!0,__source:!0};function r2(e,t,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)_x.call(t,n)&&!Px.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Ex,type:e,key:a,ref:s,props:i,_owner:$x.current}}Uc.Fragment=zx;Uc.jsx=r2;Uc.jsxs=r2;Gg.exports=Uc;var o=Gg.exports,Xd={},n2={exports:{}},Bt={},i2={exports:{}},o2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,N){var A=R.length;R.push(N);e:for(;0<A;){var B=A-1>>>1,G=R[B];if(0<i(G,N))R[B]=N,R[A]=G,A=B;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var N=R[0],A=R.pop();if(A!==N){R[0]=A;e:for(var B=0,G=R.length,ye=G>>>1;B<ye;){var ae=2*(B+1)-1,ke=R[ae],D=ae+1,ie=R[D];if(0>i(ke,A))D<G&&0>i(ie,ke)?(R[B]=ie,R[D]=A,B=D):(R[B]=ke,R[ae]=A,B=ae);else if(D<G&&0>i(ie,A))R[B]=ie,R[D]=A,B=D;else break e}}return N}function i(R,N){var A=R.sortIndex-N.sortIndex;return A!==0?A:R.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],f=1,h=null,m=3,w=!1,x=!1,j=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var N=r(u);N!==null;){if(N.callback===null)n(u);else if(N.startTime<=R)n(u),N.sortIndex=N.expirationTime,t(c,N);else break;N=r(u)}}function k(R){if(j=!1,v(R),!x)if(r(c)!==null)x=!0,ue(z);else{var N=r(u);N!==null&&J(k,N.startTime-R)}}function z(R,N){x=!1,j&&(j=!1,g(S),S=-1),w=!0;var A=m;try{for(v(N),h=r(c);h!==null&&(!(h.expirationTime>N)||R&&!I());){var B=h.callback;if(typeof B=="function"){h.callback=null,m=h.priorityLevel;var G=B(h.expirationTime<=N);N=e.unstable_now(),typeof G=="function"?h.callback=G:h===r(c)&&n(c),v(N)}else n(c);h=r(c)}if(h!==null)var ye=!0;else{var ae=r(u);ae!==null&&J(k,ae.startTime-N),ye=!1}return ye}finally{h=null,m=A,w=!1}}var y=!1,C=null,S=-1,P=5,L=-1;function I(){return!(e.unstable_now()-L<P)}function O(){if(C!==null){var R=e.unstable_now();L=R;var N=!0;try{N=C(!0,R)}finally{N?U():(y=!1,C=null)}}else y=!1}var U;if(typeof p=="function")U=function(){p(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,K=W.port2;W.port1.onmessage=O,U=function(){K.postMessage(null)}}else U=function(){E(O,0)};function ue(R){C=R,y||(y=!0,U())}function J(R,N){S=E(function(){R(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,ue(z))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var A=m;m=N;try{return R()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,N){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var A=m;m=R;try{return N()}finally{m=A}},e.unstable_scheduleCallback=function(R,N,A){var B=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?B+A:B):A=B,R){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=A+G,R={id:f++,callback:N,priorityLevel:R,startTime:A,expirationTime:G,sortIndex:-1},A>B?(R.sortIndex=A,t(u,R),r(c)===null&&R===r(u)&&(j?(g(S),S=-1):j=!0,J(k,A-B))):(R.sortIndex=G,t(c,R),x||w||(x=!0,ue(z))),R},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(R){var N=m;return function(){var A=m;m=N;try{return R.apply(this,arguments)}finally{m=A}}}})(o2);i2.exports=o2;var Tx=i2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx=b,Ot=Tx;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a2=new Set,Ta={};function mi(e,t){fo(e,t),fo(e+"Capture",t)}function fo(e,t){for(Ta[e]=t,e=0;e<t.length;e++)a2.add(t[e])}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=Object.prototype.hasOwnProperty,Ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Fh={};function Ix(e){return Qd.call(Fh,e)?!0:Qd.call(Dh,e)?!1:Ax.test(e)?Fh[e]=!0:(Dh[e]=!0,!1)}function Rx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mx(e,t,r,n){if(t===null||typeof t>"u"||Rx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,r,n,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ut[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ut[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ut[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ut[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ut[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ut[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ut[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ut[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ut[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var P0=/[\-:]([a-z])/g;function T0(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P0,T0);ut[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P0,T0);ut[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P0,T0);ut[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ut[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});ut.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ut[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function L0(e,t,r,n){var i=ut.hasOwnProperty(t)?ut[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mx(t,r,i,n)&&(r=null),n||i===null?Ix(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var en=Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),s2=Symbol.for("react.provider"),l2=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),R0=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),c2=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function Wo(e){return e===null||typeof e!="object"?null:(e=Bh&&e[Bh]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,Wu;function ca(e){if(Wu===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Wu=t&&t[1]||""}return`
`+Wu+e}var Vu=!1;function Gu(e,t){if(!e||Vu)return"";Vu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Vu=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ca(e):""}function Nx(e){switch(e.tag){case 5:return ca(e.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return e=Gu(e.type,!1),e;case 11:return e=Gu(e.type.render,!1),e;case 1:return e=Gu(e.type,!0),e;default:return""}}function ef(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ui:return"Fragment";case Bi:return"Portal";case Kd:return"Profiler";case A0:return"StrictMode";case Zd:return"Suspense";case Jd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l2:return(e.displayName||"Context")+".Consumer";case s2:return(e._context.displayName||"Context")+".Provider";case I0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R0:return t=e.displayName||null,t!==null?t:ef(e.type)||"Memo";case dn:t=e._payload,e=e._init;try{return ef(e(t))}catch{}}return null}function Ox(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(t);case 8:return t===A0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function u2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dx(e){var t=u2(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fs(e){e._valueTracker||(e._valueTracker=Dx(e))}function d2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=u2(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tf(e,t){var r=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Uh(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=_n(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function f2(e,t){t=t.checked,t!=null&&L0(e,"checked",t,!1)}function rf(e,t){f2(e,t);var r=_n(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nf(e,t.type,r):t.hasOwnProperty("defaultValue")&&nf(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hh(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function nf(e,t,r){(t!=="number"||Xl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ua=Array.isArray;function ro(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+_n(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wh(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(F(92));if(ua(r)){if(1<r.length)throw Error(F(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:_n(r)}}function h2(e,t){var r=_n(t.value),n=_n(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Vh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function p2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?p2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,m2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function La(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fx=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(e){Fx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xa[t]=xa[e]})});function g2(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||xa.hasOwnProperty(e)&&xa[e]?(""+t).trim():t+"px"}function v2(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=g2(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Bx=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(e,t){if(t){if(Bx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function lf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function M0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uf=null,no=null,io=null;function Gh(e){if(e=cs(e)){if(typeof uf!="function")throw Error(F(280));var t=e.stateNode;t&&(t=qc(t),uf(e.stateNode,e.type,t))}}function x2(e){no?io?io.push(e):io=[e]:no=e}function y2(){if(no){var e=no,t=io;if(io=no=null,Gh(e),t)for(e=0;e<t.length;e++)Gh(t[e])}}function w2(e,t){return e(t)}function b2(){}var qu=!1;function j2(e,t,r){if(qu)return e(t,r);qu=!0;try{return w2(e,t,r)}finally{qu=!1,(no!==null||io!==null)&&(b2(),y2())}}function Aa(e,t){var r=e.stateNode;if(r===null)return null;var n=qc(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,t,typeof r));return r}var df=!1;if(Gr)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){df=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{df=!1}function Ux(e,t,r,n,i,a,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var ya=!1,Ql=null,Kl=!1,ff=null,Hx={onError:function(e){ya=!0,Ql=e}};function Wx(e,t,r,n,i,a,s,l,c){ya=!1,Ql=null,Ux.apply(Hx,arguments)}function Vx(e,t,r,n,i,a,s,l,c){if(Wx.apply(this,arguments),ya){if(ya){var u=Ql;ya=!1,Ql=null}else throw Error(F(198));Kl||(Kl=!0,ff=u)}}function gi(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function k2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qh(e){if(gi(e)!==e)throw Error(F(188))}function Gx(e){var t=e.alternate;if(!t){if(t=gi(e),t===null)throw Error(F(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return qh(i),e;if(a===n)return qh(i),t;a=a.sibling}throw Error(F(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=a;break}if(l===n){s=!0,n=i,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=i;break}if(l===n){s=!0,n=a,r=i;break}l=l.sibling}if(!s)throw Error(F(189))}}if(r.alternate!==n)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:t}function S2(e){return e=Gx(e),e!==null?C2(e):null}function C2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=C2(e);if(t!==null)return t;e=e.sibling}return null}var E2=Ot.unstable_scheduleCallback,Yh=Ot.unstable_cancelCallback,qx=Ot.unstable_shouldYield,Yx=Ot.unstable_requestPaint,Ye=Ot.unstable_now,Xx=Ot.unstable_getCurrentPriorityLevel,N0=Ot.unstable_ImmediatePriority,z2=Ot.unstable_UserBlockingPriority,Zl=Ot.unstable_NormalPriority,Qx=Ot.unstable_LowPriority,_2=Ot.unstable_IdlePriority,Hc=null,br=null;function Kx(e){if(br&&typeof br.onCommitFiberRoot=="function")try{br.onCommitFiberRoot(Hc,e,void 0,(e.current.flags&128)===128)}catch{}}var cr=Math.clz32?Math.clz32:ey,Zx=Math.log,Jx=Math.LN2;function ey(e){return e>>>=0,e===0?32:31-(Zx(e)/Jx|0)|0}var Us=64,Hs=4194304;function da(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jl(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=da(l):(a&=s,a!==0&&(n=da(a)))}else s=r&~i,s!==0?n=da(s):a!==0&&(n=da(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-cr(t),i=1<<r,n|=e[r],t&=~i;return n}function ty(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-cr(a),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=ty(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $2(){var e=Us;return Us<<=1,!(Us&4194240)&&(Us=64),e}function Yu(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ss(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cr(t),e[t]=r}function ny(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-cr(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function O0(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-cr(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var Ce=0;function P2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var T2,D0,L2,A2,I2,pf=!1,Ws=[],yn=null,wn=null,bn=null,Ia=new Map,Ra=new Map,hn=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xh(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(t.pointerId)}}function Go(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=cs(t),t!==null&&D0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function oy(e,t,r,n,i){switch(t){case"focusin":return yn=Go(yn,e,t,r,n,i),!0;case"dragenter":return wn=Go(wn,e,t,r,n,i),!0;case"mouseover":return bn=Go(bn,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Ia.set(a,Go(Ia.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Ra.set(a,Go(Ra.get(a)||null,e,t,r,n,i)),!0}return!1}function R2(e){var t=Yn(e.target);if(t!==null){var r=gi(t);if(r!==null){if(t=r.tag,t===13){if(t=k2(r),t!==null){e.blockedOn=t,I2(e.priority,function(){L2(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function El(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=mf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);cf=n,r.target.dispatchEvent(n),cf=null}else return t=cs(r),t!==null&&D0(t),e.blockedOn=r,!1;t.shift()}return!0}function Qh(e,t,r){El(e)&&r.delete(t)}function ay(){pf=!1,yn!==null&&El(yn)&&(yn=null),wn!==null&&El(wn)&&(wn=null),bn!==null&&El(bn)&&(bn=null),Ia.forEach(Qh),Ra.forEach(Qh)}function qo(e,t){e.blockedOn===t&&(e.blockedOn=null,pf||(pf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,ay)))}function Ma(e){function t(i){return qo(i,e)}if(0<Ws.length){qo(Ws[0],e);for(var r=1;r<Ws.length;r++){var n=Ws[r];n.blockedOn===e&&(n.blockedOn=null)}}for(yn!==null&&qo(yn,e),wn!==null&&qo(wn,e),bn!==null&&qo(bn,e),Ia.forEach(t),Ra.forEach(t),r=0;r<hn.length;r++)n=hn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<hn.length&&(r=hn[0],r.blockedOn===null);)R2(r),r.blockedOn===null&&hn.shift()}var oo=en.ReactCurrentBatchConfig,ec=!0;function sy(e,t,r,n){var i=Ce,a=oo.transition;oo.transition=null;try{Ce=1,F0(e,t,r,n)}finally{Ce=i,oo.transition=a}}function ly(e,t,r,n){var i=Ce,a=oo.transition;oo.transition=null;try{Ce=4,F0(e,t,r,n)}finally{Ce=i,oo.transition=a}}function F0(e,t,r,n){if(ec){var i=mf(e,t,r,n);if(i===null)id(e,t,n,tc,r),Xh(e,n);else if(oy(i,e,t,r,n))n.stopPropagation();else if(Xh(e,n),t&4&&-1<iy.indexOf(e)){for(;i!==null;){var a=cs(i);if(a!==null&&T2(a),a=mf(e,t,r,n),a===null&&id(e,t,n,tc,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else id(e,t,n,null,r)}}var tc=null;function mf(e,t,r,n){if(tc=null,e=M0(n),e=Yn(e),e!==null)if(t=gi(e),t===null)e=null;else if(r=t.tag,r===13){if(e=k2(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tc=e,null}function M2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case N0:return 1;case z2:return 4;case Zl:case Qx:return 16;case _2:return 536870912;default:return 16}default:return 16}}var mn=null,B0=null,zl=null;function N2(){if(zl)return zl;var e,t=B0,r=t.length,n,i="value"in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[a-n];n++);return zl=i.slice(e,1<n?1-n:void 0)}function _l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function Kh(){return!1}function Ut(e){function t(r,n,i,a,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vs:Kh,this.isPropagationStopped=Kh,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},U0=Ut(Ao),ls=He({},Ao,{view:0,detail:0}),cy=Ut(ls),Xu,Qu,Yo,Wc=He({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:H0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yo&&(Yo&&e.type==="mousemove"?(Xu=e.screenX-Yo.screenX,Qu=e.screenY-Yo.screenY):Qu=Xu=0,Yo=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Zh=Ut(Wc),uy=He({},Wc,{dataTransfer:0}),dy=Ut(uy),fy=He({},ls,{relatedTarget:0}),Ku=Ut(fy),hy=He({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Ut(hy),my=He({},Ao,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gy=Ut(my),vy=He({},Ao,{data:0}),Jh=Ut(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wy[e])?!!t[e]:!1}function H0(){return by}var jy=He({},ls,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:H0,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ky=Ut(jy),Sy=He({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Ut(Sy),Cy=He({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:H0}),Ey=Ut(Cy),zy=He({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Ut(zy),$y=He({},Wc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=Ut($y),Ty=[9,13,27,32],W0=Gr&&"CompositionEvent"in window,wa=null;Gr&&"documentMode"in document&&(wa=document.documentMode);var Ly=Gr&&"TextEvent"in window&&!wa,O2=Gr&&(!W0||wa&&8<wa&&11>=wa),tp=" ",rp=!1;function D2(e,t){switch(e){case"keyup":return Ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hi=!1;function Ay(e,t){switch(e){case"compositionend":return F2(t);case"keypress":return t.which!==32?null:(rp=!0,tp);case"textInput":return e=t.data,e===tp&&rp?null:e;default:return null}}function Iy(e,t){if(Hi)return e==="compositionend"||!W0&&D2(e,t)?(e=N2(),zl=B0=mn=null,Hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return O2&&t.locale!=="ko"?null:t.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ry[e.type]:t==="textarea"}function B2(e,t,r,n){x2(n),t=rc(t,"onChange"),0<t.length&&(r=new U0("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var ba=null,Na=null;function My(e){Z2(e,0)}function Vc(e){var t=Gi(e);if(d2(t))return e}function Ny(e,t){if(e==="change")return t}var U2=!1;if(Gr){var Zu;if(Gr){var Ju="oninput"in document;if(!Ju){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),Ju=typeof ip.oninput=="function"}Zu=Ju}else Zu=!1;U2=Zu&&(!document.documentMode||9<document.documentMode)}function op(){ba&&(ba.detachEvent("onpropertychange",H2),Na=ba=null)}function H2(e){if(e.propertyName==="value"&&Vc(Na)){var t=[];B2(t,Na,e,M0(e)),j2(My,t)}}function Oy(e,t,r){e==="focusin"?(op(),ba=t,Na=r,ba.attachEvent("onpropertychange",H2)):e==="focusout"&&op()}function Dy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vc(Na)}function Fy(e,t){if(e==="click")return Vc(t)}function By(e,t){if(e==="input"||e==="change")return Vc(t)}function Uy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hr=typeof Object.is=="function"?Object.is:Uy;function Oa(e,t){if(hr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Qd.call(t,i)||!hr(e[i],t[i]))return!1}return!0}function ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var r=ap(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ap(r)}}function W2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?W2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function V2(){for(var e=window,t=Xl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Xl(e.document)}return t}function V0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hy(e){var t=V2(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&W2(r.ownerDocument.documentElement,r)){if(n!==null&&V0(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=sp(r,a);var s=sp(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wy=Gr&&"documentMode"in document&&11>=document.documentMode,Wi=null,gf=null,ja=null,vf=!1;function lp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vf||Wi==null||Wi!==Xl(n)||(n=Wi,"selectionStart"in n&&V0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ja&&Oa(ja,n)||(ja=n,n=rc(gf,"onSelect"),0<n.length&&(t=new U0("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Wi)))}function Gs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Vi={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},ed={},G2={};Gr&&(G2=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function Gc(e){if(ed[e])return ed[e];if(!Vi[e])return e;var t=Vi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in G2)return ed[e]=t[r];return e}var q2=Gc("animationend"),Y2=Gc("animationiteration"),X2=Gc("animationstart"),Q2=Gc("transitionend"),K2=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){K2.set(e,t),mi(t,[e])}for(var td=0;td<cp.length;td++){var rd=cp[td],Vy=rd.toLowerCase(),Gy=rd[0].toUpperCase()+rd.slice(1);Rn(Vy,"on"+Gy)}Rn(q2,"onAnimationEnd");Rn(Y2,"onAnimationIteration");Rn(X2,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(Q2,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function up(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Vx(n,t,void 0,e),e.currentTarget=null}function Z2(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;up(i,l,u),a=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;up(i,l,u),a=c}}}if(Kl)throw e=ff,Kl=!1,ff=null,e}function Ie(e,t){var r=t[jf];r===void 0&&(r=t[jf]=new Set);var n=e+"__bubble";r.has(n)||(J2(t,e,2,!1),r.add(n))}function nd(e,t,r){var n=0;t&&(n|=4),J2(r,e,n,t)}var qs="_reactListening"+Math.random().toString(36).slice(2);function Da(e){if(!e[qs]){e[qs]=!0,a2.forEach(function(r){r!=="selectionchange"&&(qy.has(r)||nd(r,!1,e),nd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qs]||(t[qs]=!0,nd("selectionchange",!1,t))}}function J2(e,t,r,n){switch(M2(t)){case 1:var i=sy;break;case 4:i=ly;break;default:i=F0}r=i.bind(null,t,r,e),i=void 0,!df||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function id(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Yn(l),s===null)return;if(c=s.tag,c===5||c===6){n=a=s;continue e}l=l.parentNode}}n=n.return}j2(function(){var u=a,f=M0(r),h=[];e:{var m=K2.get(e);if(m!==void 0){var w=U0,x=e;switch(e){case"keypress":if(_l(r)===0)break e;case"keydown":case"keyup":w=ky;break;case"focusin":x="focus",w=Ku;break;case"focusout":x="blur",w=Ku;break;case"beforeblur":case"afterblur":w=Ku;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ey;break;case q2:case Y2:case X2:w=py;break;case Q2:w=_y;break;case"scroll":w=cy;break;case"wheel":w=Py;break;case"copy":case"cut":case"paste":w=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ep}var j=(t&4)!==0,E=!j&&e==="scroll",g=j?m!==null?m+"Capture":null:m;j=[];for(var p=u,v;p!==null;){v=p;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Aa(p,g),k!=null&&j.push(Fa(p,k,v)))),E)break;p=p.return}0<j.length&&(m=new w(m,x,null,r,f),h.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&r!==cf&&(x=r.relatedTarget||r.fromElement)&&(Yn(x)||x[qr]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=r.relatedTarget||r.toElement,w=u,x=x?Yn(x):null,x!==null&&(E=gi(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(j=Zh,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=ep,k="onPointerLeave",g="onPointerEnter",p="pointer"),E=w==null?m:Gi(w),v=x==null?m:Gi(x),m=new j(k,p+"leave",w,r,f),m.target=E,m.relatedTarget=v,k=null,Yn(f)===u&&(j=new j(g,p+"enter",x,r,f),j.target=v,j.relatedTarget=E,k=j),E=k,w&&x)t:{for(j=w,g=x,p=0,v=j;v;v=Ci(v))p++;for(v=0,k=g;k;k=Ci(k))v++;for(;0<p-v;)j=Ci(j),p--;for(;0<v-p;)g=Ci(g),v--;for(;p--;){if(j===g||g!==null&&j===g.alternate)break t;j=Ci(j),g=Ci(g)}j=null}else j=null;w!==null&&dp(h,m,w,j,!1),x!==null&&E!==null&&dp(h,E,x,j,!0)}}e:{if(m=u?Gi(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var z=Ny;else if(np(m))if(U2)z=By;else{z=Dy;var y=Oy}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=Fy);if(z&&(z=z(e,u))){B2(h,z,r,f);break e}y&&y(e,m,u),e==="focusout"&&(y=m._wrapperState)&&y.controlled&&m.type==="number"&&nf(m,"number",m.value)}switch(y=u?Gi(u):window,e){case"focusin":(np(y)||y.contentEditable==="true")&&(Wi=y,gf=u,ja=null);break;case"focusout":ja=gf=Wi=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,lp(h,r,f);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":lp(h,r,f)}var C;if(W0)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Hi?D2(e,r)&&(S="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(S="onCompositionStart");S&&(O2&&r.locale!=="ko"&&(Hi||S!=="onCompositionStart"?S==="onCompositionEnd"&&Hi&&(C=N2()):(mn=f,B0="value"in mn?mn.value:mn.textContent,Hi=!0)),y=rc(u,S),0<y.length&&(S=new Jh(S,e,null,r,f),h.push({event:S,listeners:y}),C?S.data=C:(C=F2(r),C!==null&&(S.data=C)))),(C=Ly?Ay(e,r):Iy(e,r))&&(u=rc(u,"onBeforeInput"),0<u.length&&(f=new Jh("onBeforeInput","beforeinput",null,r,f),h.push({event:f,listeners:u}),f.data=C))}Z2(h,t)})}function Fa(e,t,r){return{instance:e,listener:t,currentTarget:r}}function rc(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Aa(e,r),a!=null&&n.unshift(Fa(e,a,i)),a=Aa(e,t),a!=null&&n.push(Fa(e,a,i))),e=e.return}return n}function Ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dp(e,t,r,n,i){for(var a=t._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=Aa(r,a),c!=null&&s.unshift(Fa(r,c,l))):i||(c=Aa(r,a),c!=null&&s.push(Fa(r,c,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Yy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function fp(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Xy,"")}function Ys(e,t,r){if(t=fp(t),fp(e)!==t&&r)throw Error(F(425))}function nc(){}var xf=null,yf=null;function wf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(e){return hp.resolve(null).then(e).catch(Zy)}:bf;function Zy(e){setTimeout(function(){throw e})}function od(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ma(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ma(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Io=Math.random().toString(36).slice(2),wr="__reactFiber$"+Io,Ba="__reactProps$"+Io,qr="__reactContainer$"+Io,jf="__reactEvents$"+Io,Jy="__reactListeners$"+Io,e6="__reactHandles$"+Io;function Yn(e){var t=e[wr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qr]||r[wr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pp(e);e!==null;){if(r=e[wr])return r;e=pp(e)}return t}e=r,r=e.parentNode}return null}function cs(e){return e=e[wr]||e[qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function qc(e){return e[Ba]||null}var kf=[],qi=-1;function Mn(e){return{current:e}}function Me(e){0>qi||(e.current=kf[qi],kf[qi]=null,qi--)}function Le(e,t){qi++,kf[qi]=e.current,e.current=t}var $n={},mt=Mn($n),zt=Mn(!1),oi=$n;function ho(e,t){var r=e.type.contextTypes;if(!r)return $n;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function ic(){Me(zt),Me(mt)}function mp(e,t,r){if(mt.current!==$n)throw Error(F(168));Le(mt,t),Le(zt,r)}function ev(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(F(108,Ox(e)||"Unknown",i));return He({},r,n)}function oc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,oi=mt.current,Le(mt,e),Le(zt,zt.current),!0}function gp(e,t,r){var n=e.stateNode;if(!n)throw Error(F(169));r?(e=ev(e,t,oi),n.__reactInternalMemoizedMergedChildContext=e,Me(zt),Me(mt),Le(mt,e)):Me(zt),Le(zt,r)}var Rr=null,Yc=!1,ad=!1;function tv(e){Rr===null?Rr=[e]:Rr.push(e)}function t6(e){Yc=!0,tv(e)}function Nn(){if(!ad&&Rr!==null){ad=!0;var e=0,t=Ce;try{var r=Rr;for(Ce=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Rr=null,Yc=!1}catch(i){throw Rr!==null&&(Rr=Rr.slice(e+1)),E2(N0,Nn),i}finally{Ce=t,ad=!1}}return null}var Yi=[],Xi=0,ac=null,sc=0,Ht=[],Wt=0,ai=null,Or=1,Dr="";function Wn(e,t){Yi[Xi++]=sc,Yi[Xi++]=ac,ac=e,sc=t}function rv(e,t,r){Ht[Wt++]=Or,Ht[Wt++]=Dr,Ht[Wt++]=ai,ai=e;var n=Or;e=Dr;var i=32-cr(n)-1;n&=~(1<<i),r+=1;var a=32-cr(t)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Or=1<<32-cr(t)+i|r<<i|n,Dr=a+e}else Or=1<<a|r<<i|n,Dr=e}function G0(e){e.return!==null&&(Wn(e,1),rv(e,1,0))}function q0(e){for(;e===ac;)ac=Yi[--Xi],Yi[Xi]=null,sc=Yi[--Xi],Yi[Xi]=null;for(;e===ai;)ai=Ht[--Wt],Ht[Wt]=null,Dr=Ht[--Wt],Ht[Wt]=null,Or=Ht[--Wt],Ht[Wt]=null}var Nt=null,Rt=null,De=!1,ir=null;function nv(e,t){var r=Gt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function vp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,Rt=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ai!==null?{id:Or,overflow:Dr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Gt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Nt=e,Rt=null,!0):!1;default:return!1}}function Sf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cf(e){if(De){var t=Rt;if(t){var r=t;if(!vp(e,t)){if(Sf(e))throw Error(F(418));t=jn(r.nextSibling);var n=Nt;t&&vp(e,t)?nv(n,r):(e.flags=e.flags&-4097|2,De=!1,Nt=e)}}else{if(Sf(e))throw Error(F(418));e.flags=e.flags&-4097|2,De=!1,Nt=e}}}function xp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function Xs(e){if(e!==Nt)return!1;if(!De)return xp(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wf(e.type,e.memoizedProps)),t&&(t=Rt)){if(Sf(e))throw iv(),Error(F(418));for(;t;)nv(e,t),t=jn(t.nextSibling)}if(xp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Rt=jn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Nt?jn(e.stateNode.nextSibling):null;return!0}function iv(){for(var e=Rt;e;)e=jn(e.nextSibling)}function po(){Rt=Nt=null,De=!1}function Y0(e){ir===null?ir=[e]:ir.push(e)}var r6=en.ReactCurrentBatchConfig;function Xo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var n=r.stateNode}if(!n)throw Error(F(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function Qs(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yp(e){var t=e._init;return t(e._payload)}function ov(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function r(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function n(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=En(g,p),g.index=0,g.sibling=null,g}function a(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,p,v,k){return p===null||p.tag!==6?(p=hd(v,g.mode,k),p.return=g,p):(p=i(p,v),p.return=g,p)}function c(g,p,v,k){var z=v.type;return z===Ui?f(g,p,v.props.children,k,v.key):p!==null&&(p.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===dn&&yp(z)===p.type)?(k=i(p,v.props),k.ref=Xo(g,p,v),k.return=g,k):(k=Rl(v.type,v.key,v.props,null,g.mode,k),k.ref=Xo(g,p,v),k.return=g,k)}function u(g,p,v,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=pd(v,g.mode,k),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function f(g,p,v,k,z){return p===null||p.tag!==7?(p=ri(v,g.mode,k,z),p.return=g,p):(p=i(p,v),p.return=g,p)}function h(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hd(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ds:return v=Rl(p.type,p.key,p.props,null,g.mode,v),v.ref=Xo(g,null,p),v.return=g,v;case Bi:return p=pd(p,g.mode,v),p.return=g,p;case dn:var k=p._init;return h(g,k(p._payload),v)}if(ua(p)||Wo(p))return p=ri(p,g.mode,v,null),p.return=g,p;Qs(g,p)}return null}function m(g,p,v,k){var z=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return z!==null?null:l(g,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ds:return v.key===z?c(g,p,v,k):null;case Bi:return v.key===z?u(g,p,v,k):null;case dn:return z=v._init,m(g,p,z(v._payload),k)}if(ua(v)||Wo(v))return z!==null?null:f(g,p,v,k,null);Qs(g,v)}return null}function w(g,p,v,k,z){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,l(p,g,""+k,z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ds:return g=g.get(k.key===null?v:k.key)||null,c(p,g,k,z);case Bi:return g=g.get(k.key===null?v:k.key)||null,u(p,g,k,z);case dn:var y=k._init;return w(g,p,v,y(k._payload),z)}if(ua(k)||Wo(k))return g=g.get(v)||null,f(p,g,k,z,null);Qs(p,k)}return null}function x(g,p,v,k){for(var z=null,y=null,C=p,S=p=0,P=null;C!==null&&S<v.length;S++){C.index>S?(P=C,C=null):P=C.sibling;var L=m(g,C,v[S],k);if(L===null){C===null&&(C=P);break}e&&C&&L.alternate===null&&t(g,C),p=a(L,p,S),y===null?z=L:y.sibling=L,y=L,C=P}if(S===v.length)return r(g,C),De&&Wn(g,S),z;if(C===null){for(;S<v.length;S++)C=h(g,v[S],k),C!==null&&(p=a(C,p,S),y===null?z=C:y.sibling=C,y=C);return De&&Wn(g,S),z}for(C=n(g,C);S<v.length;S++)P=w(C,g,S,v[S],k),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?S:P.key),p=a(P,p,S),y===null?z=P:y.sibling=P,y=P);return e&&C.forEach(function(I){return t(g,I)}),De&&Wn(g,S),z}function j(g,p,v,k){var z=Wo(v);if(typeof z!="function")throw Error(F(150));if(v=z.call(v),v==null)throw Error(F(151));for(var y=z=null,C=p,S=p=0,P=null,L=v.next();C!==null&&!L.done;S++,L=v.next()){C.index>S?(P=C,C=null):P=C.sibling;var I=m(g,C,L.value,k);if(I===null){C===null&&(C=P);break}e&&C&&I.alternate===null&&t(g,C),p=a(I,p,S),y===null?z=I:y.sibling=I,y=I,C=P}if(L.done)return r(g,C),De&&Wn(g,S),z;if(C===null){for(;!L.done;S++,L=v.next())L=h(g,L.value,k),L!==null&&(p=a(L,p,S),y===null?z=L:y.sibling=L,y=L);return De&&Wn(g,S),z}for(C=n(g,C);!L.done;S++,L=v.next())L=w(C,g,S,L.value,k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?S:L.key),p=a(L,p,S),y===null?z=L:y.sibling=L,y=L);return e&&C.forEach(function(O){return t(g,O)}),De&&Wn(g,S),z}function E(g,p,v,k){if(typeof v=="object"&&v!==null&&v.type===Ui&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ds:e:{for(var z=v.key,y=p;y!==null;){if(y.key===z){if(z=v.type,z===Ui){if(y.tag===7){r(g,y.sibling),p=i(y,v.props.children),p.return=g,g=p;break e}}else if(y.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===dn&&yp(z)===y.type){r(g,y.sibling),p=i(y,v.props),p.ref=Xo(g,y,v),p.return=g,g=p;break e}r(g,y);break}else t(g,y);y=y.sibling}v.type===Ui?(p=ri(v.props.children,g.mode,k,v.key),p.return=g,g=p):(k=Rl(v.type,v.key,v.props,null,g.mode,k),k.ref=Xo(g,p,v),k.return=g,g=k)}return s(g);case Bi:e:{for(y=v.key;p!==null;){if(p.key===y)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){r(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{r(g,p);break}else t(g,p);p=p.sibling}p=pd(v,g.mode,k),p.return=g,g=p}return s(g);case dn:return y=v._init,E(g,p,y(v._payload),k)}if(ua(v))return x(g,p,v,k);if(Wo(v))return j(g,p,v,k);Qs(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(r(g,p.sibling),p=i(p,v),p.return=g,g=p):(r(g,p),p=hd(v,g.mode,k),p.return=g,g=p),s(g)):r(g,p)}return E}var mo=ov(!0),av=ov(!1),lc=Mn(null),cc=null,Qi=null,X0=null;function Q0(){X0=Qi=cc=null}function K0(e){var t=lc.current;Me(lc),e._currentValue=t}function Ef(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ao(e,t){cc=e,X0=Qi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ct=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(X0!==e)if(e={context:e,memoizedValue:t,next:null},Qi===null){if(cc===null)throw Error(F(308));Qi=e,cc.dependencies={lanes:0,firstContext:e}}else Qi=Qi.next=e;return t}var Xn=null;function Z0(e){Xn===null?Xn=[e]:Xn.push(e)}function sv(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Z0(t)):(r.next=i.next,i.next=r),t.interleaved=r,Yr(e,n)}function Yr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var fn=!1;function J0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ur(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,xe&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Yr(e,r)}return i=n.interleaved,i===null?(t.next=t,Z0(n)):(t.next=i.next,i.next=t),n.interleaved=t,Yr(e,r)}function $l(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,O0(e,r)}}function wp(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function uc(e,t,r,n){var i=e.updateQueue;fn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?a=u:s.next=u,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(a!==null){var h=i.baseState;s=0,f=u=c=null,l=a;do{var m=l.lane,w=l.eventTime;if((n&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,j=l;switch(m=t,w=r,j.tag){case 1:if(x=j.payload,typeof x=="function"){h=x.call(w,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=j.payload,m=typeof x=="function"?x.call(w,h,m):x,m==null)break e;h=He({},h,m);break e;case 2:fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=w,c=h):f=f.next=w,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);li|=s,e.lanes=s,e.memoizedState=h}}function bp(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(F(191,i));i.call(n)}}}var us={},jr=Mn(us),Ua=Mn(us),Ha=Mn(us);function Qn(e){if(e===us)throw Error(F(174));return e}function e1(e,t){switch(Le(Ha,t),Le(Ua,e),Le(jr,us),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:af(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=af(t,e)}Me(jr),Le(jr,t)}function go(){Me(jr),Me(Ua),Me(Ha)}function cv(e){Qn(Ha.current);var t=Qn(jr.current),r=af(t,e.type);t!==r&&(Le(Ua,e),Le(jr,r))}function t1(e){Ua.current===e&&(Me(jr),Me(Ua))}var Be=Mn(0);function dc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sd=[];function r1(){for(var e=0;e<sd.length;e++)sd[e]._workInProgressVersionPrimary=null;sd.length=0}var Pl=en.ReactCurrentDispatcher,ld=en.ReactCurrentBatchConfig,si=0,Ue=null,tt=null,nt=null,fc=!1,ka=!1,Wa=0,n6=0;function dt(){throw Error(F(321))}function n1(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!hr(e[r],t[r]))return!1;return!0}function i1(e,t,r,n,i,a){if(si=a,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?s6:l6,e=r(n,i),ka){a=0;do{if(ka=!1,Wa=0,25<=a)throw Error(F(301));a+=1,nt=tt=null,t.updateQueue=null,Pl.current=c6,e=r(n,i)}while(ka)}if(Pl.current=hc,t=tt!==null&&tt.next!==null,si=0,nt=tt=Ue=null,fc=!1,t)throw Error(F(300));return e}function o1(){var e=Wa!==0;return Wa=0,e}function xr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ue.memoizedState=nt=e:nt=nt.next=e,nt}function Qt(){if(tt===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=nt===null?Ue.memoizedState:nt.next;if(t!==null)nt=t,tt=e;else{if(e===null)throw Error(F(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},nt===null?Ue.memoizedState=nt=e:nt=nt.next=e}return nt}function Va(e,t){return typeof t=="function"?t(e):t}function cd(e){var t=Qt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=tt,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var l=s=null,c=null,u=a;do{var f=u.lane;if((si&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=n):c=c.next=h,Ue.lanes|=f,li|=f}u=u.next}while(u!==null&&u!==a);c===null?s=n:c.next=l,hr(n,t.memoizedState)||(Ct=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Ue.lanes|=a,li|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ud(e){var t=Qt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);hr(a,t.memoizedState)||(Ct=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function uv(){}function dv(e,t){var r=Ue,n=Qt(),i=t(),a=!hr(n.memoizedState,i);if(a&&(n.memoizedState=i,Ct=!0),n=n.queue,a1(pv.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||nt!==null&&nt.memoizedState.tag&1){if(r.flags|=2048,Ga(9,hv.bind(null,r,n,i,t),void 0,null),ot===null)throw Error(F(349));si&30||fv(r,t,i)}return i}function fv(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function hv(e,t,r,n){t.value=r,t.getSnapshot=n,mv(t)&&gv(e)}function pv(e,t,r){return r(function(){mv(t)&&gv(e)})}function mv(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!hr(e,r)}catch{return!0}}function gv(e){var t=Yr(e,1);t!==null&&ur(t,e,1,-1)}function jp(e){var t=xr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},t.queue=e,e=e.dispatch=a6.bind(null,Ue,e),[t.memoizedState,e]}function Ga(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function vv(){return Qt().memoizedState}function Tl(e,t,r,n){var i=xr();Ue.flags|=e,i.memoizedState=Ga(1|t,r,void 0,n===void 0?null:n)}function Xc(e,t,r,n){var i=Qt();n=n===void 0?null:n;var a=void 0;if(tt!==null){var s=tt.memoizedState;if(a=s.destroy,n!==null&&n1(n,s.deps)){i.memoizedState=Ga(t,r,a,n);return}}Ue.flags|=e,i.memoizedState=Ga(1|t,r,a,n)}function kp(e,t){return Tl(8390656,8,e,t)}function a1(e,t){return Xc(2048,8,e,t)}function xv(e,t){return Xc(4,2,e,t)}function yv(e,t){return Xc(4,4,e,t)}function wv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bv(e,t,r){return r=r!=null?r.concat([e]):null,Xc(4,4,wv.bind(null,t,e),r)}function s1(){}function jv(e,t){var r=Qt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&n1(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function kv(e,t){var r=Qt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&n1(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Sv(e,t,r){return si&21?(hr(r,t)||(r=$2(),Ue.lanes|=r,li|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ct=!0),e.memoizedState=r)}function i6(e,t){var r=Ce;Ce=r!==0&&4>r?r:4,e(!0);var n=ld.transition;ld.transition={};try{e(!1),t()}finally{Ce=r,ld.transition=n}}function Cv(){return Qt().memoizedState}function o6(e,t,r){var n=Cn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ev(e))zv(t,r);else if(r=sv(e,t,r,n),r!==null){var i=yt();ur(r,e,n,i),_v(r,t,n)}}function a6(e,t,r){var n=Cn(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ev(e))zv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,r);if(i.hasEagerState=!0,i.eagerState=l,hr(l,s)){var c=t.interleaved;c===null?(i.next=i,Z0(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=sv(e,t,i,n),r!==null&&(i=yt(),ur(r,e,n,i),_v(r,t,n))}}function Ev(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function zv(e,t){ka=fc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _v(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,O0(e,r)}}var hc={readContext:Xt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},s6={readContext:Xt,useCallback:function(e,t){return xr().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:kp,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Tl(4194308,4,wv.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tl(4,2,e,t)},useMemo:function(e,t){var r=xr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=xr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=o6.bind(null,Ue,e),[n.memoizedState,e]},useRef:function(e){var t=xr();return e={current:e},t.memoizedState=e},useState:jp,useDebugValue:s1,useDeferredValue:function(e){return xr().memoizedState=e},useTransition:function(){var e=jp(!1),t=e[0];return e=i6.bind(null,e[1]),xr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ue,i=xr();if(De){if(r===void 0)throw Error(F(407));r=r()}else{if(r=t(),ot===null)throw Error(F(349));si&30||fv(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,kp(pv.bind(null,n,a,e),[e]),n.flags|=2048,Ga(9,hv.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=xr(),t=ot.identifierPrefix;if(De){var r=Dr,n=Or;r=(n&~(1<<32-cr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Wa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=n6++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l6={readContext:Xt,useCallback:jv,useContext:Xt,useEffect:a1,useImperativeHandle:bv,useInsertionEffect:xv,useLayoutEffect:yv,useMemo:kv,useReducer:cd,useRef:vv,useState:function(){return cd(Va)},useDebugValue:s1,useDeferredValue:function(e){var t=Qt();return Sv(t,tt.memoizedState,e)},useTransition:function(){var e=cd(Va)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:uv,useSyncExternalStore:dv,useId:Cv,unstable_isNewReconciler:!1},c6={readContext:Xt,useCallback:jv,useContext:Xt,useEffect:a1,useImperativeHandle:bv,useInsertionEffect:xv,useLayoutEffect:yv,useMemo:kv,useReducer:ud,useRef:vv,useState:function(){return ud(Va)},useDebugValue:s1,useDeferredValue:function(e){var t=Qt();return tt===null?t.memoizedState=e:Sv(t,tt.memoizedState,e)},useTransition:function(){var e=ud(Va)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:uv,useSyncExternalStore:dv,useId:Cv,unstable_isNewReconciler:!1};function tr(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function zf(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:He({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Qc={isMounted:function(e){return(e=e._reactInternals)?gi(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=yt(),i=Cn(e),a=Ur(n,i);a.payload=t,r!=null&&(a.callback=r),t=kn(e,a,i),t!==null&&(ur(t,e,i,n),$l(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=yt(),i=Cn(e),a=Ur(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=kn(e,a,i),t!==null&&(ur(t,e,i,n),$l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),n=Cn(e),i=Ur(r,n);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,n),t!==null&&(ur(t,e,n,r),$l(t,e,n))}};function Sp(e,t,r,n,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!Oa(r,n)||!Oa(i,a):!0}function $v(e,t,r){var n=!1,i=$n,a=t.contextType;return typeof a=="object"&&a!==null?a=Xt(a):(i=_t(t)?oi:mt.current,n=t.contextTypes,a=(n=n!=null)?ho(e,i):$n),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qc,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Cp(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Qc.enqueueReplaceState(t,t.state,null)}function _f(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},J0(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Xt(a):(a=_t(t)?oi:mt.current,i.context=ho(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(zf(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qc.enqueueReplaceState(i,i.state,null),uc(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vo(e,t){try{var r="",n=t;do r+=Nx(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function dd(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function $f(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var u6=typeof WeakMap=="function"?WeakMap:Map;function Pv(e,t,r){r=Ur(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){mc||(mc=!0,Df=n),$f(e,t)},r}function Tv(e,t,r){r=Ur(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){$f(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){$f(e,t),typeof n!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Ep(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new u6;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=S6.bind(null,e,t,r),t.then(e,e))}function zp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _p(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ur(-1,1),t.tag=2,kn(r,t,1))),r.lanes|=1),e)}var d6=en.ReactCurrentOwner,Ct=!1;function xt(e,t,r,n){t.child=e===null?av(t,null,r,n):mo(t,e.child,r,n)}function $p(e,t,r,n,i){r=r.render;var a=t.ref;return ao(t,i),n=i1(e,t,r,n,a,i),r=o1(),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xr(e,t,i)):(De&&r&&G0(t),t.flags|=1,xt(e,t,n,i),t.child)}function Pp(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!m1(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Lv(e,t,a,n,i)):(e=Rl(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Oa,r(s,n)&&e.ref===t.ref)return Xr(e,t,i)}return t.flags|=1,e=En(a,n),e.ref=t.ref,e.return=t,t.child=e}function Lv(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Oa(a,n)&&e.ref===t.ref)if(Ct=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(Ct=!0);else return t.lanes=e.lanes,Xr(e,t,i)}return Pf(e,t,r,n,i)}function Av(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Zi,At),At|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(Zi,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,Le(Zi,At),At|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,Le(Zi,At),At|=n;return xt(e,t,i,r),t.child}function Iv(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Pf(e,t,r,n,i){var a=_t(r)?oi:mt.current;return a=ho(t,a),ao(t,i),r=i1(e,t,r,n,a,i),n=o1(),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xr(e,t,i)):(De&&n&&G0(t),t.flags|=1,xt(e,t,r,i),t.child)}function Tp(e,t,r,n,i){if(_t(r)){var a=!0;oc(t)}else a=!1;if(ao(t,i),t.stateNode===null)Ll(e,t),$v(t,r,n),_f(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=_t(r)?oi:mt.current,u=ho(t,u));var f=r.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Cp(t,s,n,u),fn=!1;var m=t.memoizedState;s.state=m,uc(t,n,s,i),c=t.memoizedState,l!==n||m!==c||zt.current||fn?(typeof f=="function"&&(zf(t,r,f,n),c=t.memoizedState),(l=fn||Sp(t,r,l,n,m,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,lv(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tr(t.type,l),s.props=u,h=t.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Xt(c):(c=_t(r)?oi:mt.current,c=ho(t,c));var w=r.getDerivedStateFromProps;(f=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||m!==c)&&Cp(t,s,n,c),fn=!1,m=t.memoizedState,s.state=m,uc(t,n,s,i);var x=t.memoizedState;l!==h||m!==x||zt.current||fn?(typeof w=="function"&&(zf(t,r,w,n),x=t.memoizedState),(u=fn||Sp(t,r,u,n,m,x,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),s.props=n,s.state=x,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return Tf(e,t,r,n,a,i)}function Tf(e,t,r,n,i,a){Iv(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&gp(t,r,!1),Xr(e,t,a);n=t.stateNode,d6.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=mo(t,e.child,null,a),t.child=mo(t,null,l,a)):xt(e,t,l,a),t.memoizedState=n.state,i&&gp(t,r,!0),t.child}function Rv(e){var t=e.stateNode;t.pendingContext?mp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mp(e,t.context,!1),e1(e,t.containerInfo)}function Lp(e,t,r,n,i){return po(),Y0(i),t.flags|=256,xt(e,t,r,n),t.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Af(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mv(e,t,r){var n=t.pendingProps,i=Be.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Le(Be,i&1),e===null)return Cf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Jc(s,n,0,null),e=ri(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Af(r),t.memoizedState=Lf,e):l1(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return f6(e,t,s,n,l,i,r);if(a){a=n.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=En(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=En(l,a):(a=ri(a,s,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?Af(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=Lf,n}return a=e.child,e=a.sibling,n=En(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function l1(e,t){return t=Jc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ks(e,t,r,n){return n!==null&&Y0(n),mo(t,e.child,null,r),e=l1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function f6(e,t,r,n,i,a,s){if(r)return t.flags&256?(t.flags&=-257,n=dd(Error(F(422))),Ks(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=Jc({mode:"visible",children:n.children},i,0,null),a=ri(a,i,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&mo(t,e.child,null,s),t.child.memoizedState=Af(s),t.memoizedState=Lf,a);if(!(t.mode&1))return Ks(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(F(419)),n=dd(a,n,void 0),Ks(e,t,s,n)}if(l=(s&e.childLanes)!==0,Ct||l){if(n=ot,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Yr(e,i),ur(n,e,i,-1))}return p1(),n=dd(Error(F(421))),Ks(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C6.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Rt=jn(i.nextSibling),Nt=t,De=!0,ir=null,e!==null&&(Ht[Wt++]=Or,Ht[Wt++]=Dr,Ht[Wt++]=ai,Or=e.id,Dr=e.overflow,ai=t),t=l1(t,n.children),t.flags|=4096,t)}function Ap(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ef(e.return,t,r)}function fd(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Nv(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(xt(e,t,n.children,r),n=Be.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ap(e,r,t);else if(e.tag===19)Ap(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Le(Be,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&dc(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),fd(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&dc(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}fd(t,!0,r,null,a);break;case"together":fd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ll(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),li|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,r=En(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=En(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function h6(e,t,r){switch(t.tag){case 3:Rv(t),po();break;case 5:cv(t);break;case 1:_t(t.type)&&oc(t);break;case 4:e1(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Le(lc,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Le(Be,Be.current&1),t.flags|=128,null):r&t.child.childLanes?Mv(e,t,r):(Le(Be,Be.current&1),e=Xr(e,t,r),e!==null?e.sibling:null);Le(Be,Be.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Nv(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(Be,Be.current),n)break;return null;case 22:case 23:return t.lanes=0,Av(e,t,r)}return Xr(e,t,r)}var Ov,If,Dv,Fv;Ov=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};If=function(){};Dv=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Qn(jr.current);var a=null;switch(r){case"input":i=tf(e,i),n=tf(e,n),a=[];break;case"select":i=He({},i,{value:void 0}),n=He({},n,{value:void 0}),a=[];break;case"textarea":i=of(e,i),n=of(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=nc)}sf(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ta.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ie("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Fv=function(e,t,r,n){r!==n&&(t.flags|=4)};function Qo(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function p6(e,t,r){var n=t.pendingProps;switch(q0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return _t(t.type)&&ic(),ft(t),null;case 3:return n=t.stateNode,go(),Me(zt),Me(mt),r1(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ir!==null&&(Uf(ir),ir=null))),If(e,t),ft(t),null;case 5:t1(t);var i=Qn(Ha.current);if(r=t.type,e!==null&&t.stateNode!=null)Dv(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(F(166));return ft(t),null}if(e=Qn(jr.current),Xs(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[wr]=t,n[Ba]=a,e=(t.mode&1)!==0,r){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(i=0;i<fa.length;i++)Ie(fa[i],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Uh(n,a),Ie("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Ie("invalid",n);break;case"textarea":Wh(n,a),Ie("invalid",n)}sf(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ys(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ys(n.textContent,l,e),i=["children",""+l]):Ta.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ie("scroll",n)}switch(r){case"input":Fs(n),Hh(n,a,!0);break;case"textarea":Fs(n),Vh(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=nc)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=p2(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[wr]=t,e[Ba]=n,Ov(e,t,!1,!1),t.stateNode=e;e:{switch(s=lf(r,n),r){case"dialog":Ie("cancel",e),Ie("close",e),i=n;break;case"iframe":case"object":case"embed":Ie("load",e),i=n;break;case"video":case"audio":for(i=0;i<fa.length;i++)Ie(fa[i],e);i=n;break;case"source":Ie("error",e),i=n;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),i=n;break;case"details":Ie("toggle",e),i=n;break;case"input":Uh(e,n),i=tf(e,n),Ie("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=He({},n,{value:void 0}),Ie("invalid",e);break;case"textarea":Wh(e,n),i=of(e,n),Ie("invalid",e);break;default:i=n}sf(r,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?v2(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&m2(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&La(e,c):typeof c=="number"&&La(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ta.hasOwnProperty(a)?c!=null&&a==="onScroll"&&Ie("scroll",e):c!=null&&L0(e,a,c,s))}switch(r){case"input":Fs(e),Hh(e,n,!1);break;case"textarea":Fs(e),Vh(e);break;case"option":n.value!=null&&e.setAttribute("value",""+_n(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?ro(e,!!n.multiple,a,!1):n.defaultValue!=null&&ro(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=nc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)Fv(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(F(166));if(r=Qn(Ha.current),Qn(jr.current),Xs(t)){if(n=t.stateNode,r=t.memoizedProps,n[wr]=t,(a=n.nodeValue!==r)&&(e=Nt,e!==null))switch(e.tag){case 3:Ys(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[wr]=t,t.stateNode=n}return ft(t),null;case 13:if(Me(Be),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Rt!==null&&t.mode&1&&!(t.flags&128))iv(),po(),t.flags|=98560,a=!1;else if(a=Xs(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[wr]=t}else po(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),a=!1}else ir!==null&&(Uf(ir),ir=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?rt===0&&(rt=3):p1())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return go(),If(e,t),e===null&&Da(t.stateNode.containerInfo),ft(t),null;case 10:return K0(t.type._context),ft(t),null;case 17:return _t(t.type)&&ic(),ft(t),null;case 19:if(Me(Be),a=t.memoizedState,a===null)return ft(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)Qo(a,!1);else{if(rt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=dc(e),s!==null){for(t.flags|=128,Qo(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Le(Be,Be.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ye()>xo&&(t.flags|=128,n=!0,Qo(a,!1),t.lanes=4194304)}else{if(!n)if(e=dc(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Qo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!De)return ft(t),null}else 2*Ye()-a.renderingStartTime>xo&&r!==1073741824&&(t.flags|=128,n=!0,Qo(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ye(),t.sibling=null,r=Be.current,Le(Be,n?r&1|2:r&1),t):(ft(t),null);case 22:case 23:return h1(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?At&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function m6(e,t){switch(q0(t),t.tag){case 1:return _t(t.type)&&ic(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return go(),Me(zt),Me(mt),r1(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return t1(t),null;case 13:if(Me(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));po()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Be),null;case 4:return go(),null;case 10:return K0(t.type._context),null;case 22:case 23:return h1(),null;case 24:return null;default:return null}}var Zs=!1,ht=!1,g6=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Ki(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ge(e,t,n)}else r.current=null}function Rf(e,t,r){try{r()}catch(n){Ge(e,t,n)}}var Ip=!1;function v6(e,t){if(xf=ec,e=V2(),V0(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var w;h!==r||i!==0&&h.nodeType!==3||(l=s+i),h!==a||n!==0&&h.nodeType!==3||(c=s+n),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===r&&++u===i&&(l=s),m===a&&++f===n&&(c=s),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(yf={focusedElem:e,selectionRange:r},ec=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var j=x.memoizedProps,E=x.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:tr(t.type,j),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(k){Ge(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return x=Ip,Ip=!1,x}function Sa(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Rf(t,r,a)}i=i.next}while(i!==n)}}function Kc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Mf(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Bv(e){var t=e.alternate;t!==null&&(e.alternate=null,Bv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wr],delete t[Ba],delete t[jf],delete t[Jy],delete t[e6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uv(e){return e.tag===5||e.tag===3||e.tag===4}function Rp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=nc));else if(n!==4&&(e=e.child,e!==null))for(Nf(e,t,r),e=e.sibling;e!==null;)Nf(e,t,r),e=e.sibling}function Of(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Of(e,t,r),e=e.sibling;e!==null;)Of(e,t,r),e=e.sibling}var lt=null,rr=!1;function sn(e,t,r){for(r=r.child;r!==null;)Hv(e,t,r),r=r.sibling}function Hv(e,t,r){if(br&&typeof br.onCommitFiberUnmount=="function")try{br.onCommitFiberUnmount(Hc,r)}catch{}switch(r.tag){case 5:ht||Ki(r,t);case 6:var n=lt,i=rr;lt=null,sn(e,t,r),lt=n,rr=i,lt!==null&&(rr?(e=lt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):lt.removeChild(r.stateNode));break;case 18:lt!==null&&(rr?(e=lt,r=r.stateNode,e.nodeType===8?od(e.parentNode,r):e.nodeType===1&&od(e,r),Ma(e)):od(lt,r.stateNode));break;case 4:n=lt,i=rr,lt=r.stateNode.containerInfo,rr=!0,sn(e,t,r),lt=n,rr=i;break;case 0:case 11:case 14:case 15:if(!ht&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Rf(r,t,s),i=i.next}while(i!==n)}sn(e,t,r);break;case 1:if(!ht&&(Ki(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Ge(r,t,l)}sn(e,t,r);break;case 21:sn(e,t,r);break;case 22:r.mode&1?(ht=(n=ht)||r.memoizedState!==null,sn(e,t,r),ht=n):sn(e,t,r);break;default:sn(e,t,r)}}function Mp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new g6),t.forEach(function(n){var i=E6.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Jt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:lt=l.stateNode,rr=!1;break e;case 3:lt=l.stateNode.containerInfo,rr=!0;break e;case 4:lt=l.stateNode.containerInfo,rr=!0;break e}l=l.return}if(lt===null)throw Error(F(160));Hv(a,s,i),lt=null,rr=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wv(t,e),t=t.sibling}function Wv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),gr(e),n&4){try{Sa(3,e,e.return),Kc(3,e)}catch(j){Ge(e,e.return,j)}try{Sa(5,e,e.return)}catch(j){Ge(e,e.return,j)}}break;case 1:Jt(t,e),gr(e),n&512&&r!==null&&Ki(r,r.return);break;case 5:if(Jt(t,e),gr(e),n&512&&r!==null&&Ki(r,r.return),e.flags&32){var i=e.stateNode;try{La(i,"")}catch(j){Ge(e,e.return,j)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&f2(i,a),lf(l,s);var u=lf(l,a);for(s=0;s<c.length;s+=2){var f=c[s],h=c[s+1];f==="style"?v2(i,h):f==="dangerouslySetInnerHTML"?m2(i,h):f==="children"?La(i,h):L0(i,f,h,u)}switch(l){case"input":rf(i,a);break;case"textarea":h2(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?ro(i,!!a.multiple,w,!1):m!==!!a.multiple&&(a.defaultValue!=null?ro(i,!!a.multiple,a.defaultValue,!0):ro(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ba]=a}catch(j){Ge(e,e.return,j)}}break;case 6:if(Jt(t,e),gr(e),n&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(j){Ge(e,e.return,j)}}break;case 3:if(Jt(t,e),gr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ma(t.containerInfo)}catch(j){Ge(e,e.return,j)}break;case 4:Jt(t,e),gr(e);break;case 13:Jt(t,e),gr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(d1=Ye())),n&4&&Mp(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(ht=(u=ht)||f,Jt(t,e),ht=u):Jt(t,e),gr(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(Y=e,f=e.child;f!==null;){for(h=Y=f;Y!==null;){switch(m=Y,w=m.child,m.tag){case 0:case 11:case 14:case 15:Sa(4,m,m.return);break;case 1:Ki(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(j){Ge(n,r,j)}}break;case 5:Ki(m,m.return);break;case 22:if(m.memoizedState!==null){Op(h);continue}}w!==null?(w.return=m,Y=w):Op(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=g2("display",s))}catch(j){Ge(e,e.return,j)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(j){Ge(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Jt(t,e),gr(e),n&4&&Mp(e);break;case 21:break;default:Jt(t,e),gr(e)}}function gr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Uv(r)){var n=r;break e}r=r.return}throw Error(F(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(La(i,""),n.flags&=-33);var a=Rp(e);Of(e,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=Rp(e);Nf(e,l,s);break;default:throw Error(F(161))}}catch(c){Ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x6(e,t,r){Y=e,Vv(e)}function Vv(e,t,r){for(var n=(e.mode&1)!==0;Y!==null;){var i=Y,a=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Zs;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ht;l=Zs;var u=ht;if(Zs=s,(ht=c)&&!u)for(Y=i;Y!==null;)s=Y,c=s.child,s.tag===22&&s.memoizedState!==null?Dp(i):c!==null?(c.return=s,Y=c):Dp(i);for(;a!==null;)Y=a,Vv(a),a=a.sibling;Y=i,Zs=l,ht=u}Np(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Y=a):Np(e)}}function Np(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||Kc(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ht)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:tr(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&bp(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}bp(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ht||t.flags&512&&Mf(t)}catch(m){Ge(t,t.return,m)}}if(t===e){Y=null;break}if(r=t.sibling,r!==null){r.return=t.return,Y=r;break}Y=t.return}}function Op(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Y=r;break}Y=t.return}}function Dp(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Kc(4,t)}catch(c){Ge(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){Ge(t,i,c)}}var a=t.return;try{Mf(t)}catch(c){Ge(t,a,c)}break;case 5:var s=t.return;try{Mf(t)}catch(c){Ge(t,s,c)}}}catch(c){Ge(t,t.return,c)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var y6=Math.ceil,pc=en.ReactCurrentDispatcher,c1=en.ReactCurrentOwner,Yt=en.ReactCurrentBatchConfig,xe=0,ot=null,Je=null,ct=0,At=0,Zi=Mn(0),rt=0,qa=null,li=0,Zc=0,u1=0,Ca=null,kt=null,d1=0,xo=1/0,Ar=null,mc=!1,Df=null,Sn=null,Js=!1,gn=null,gc=0,Ea=0,Ff=null,Al=-1,Il=0;function yt(){return xe&6?Ye():Al!==-1?Al:Al=Ye()}function Cn(e){return e.mode&1?xe&2&&ct!==0?ct&-ct:r6.transition!==null?(Il===0&&(Il=$2()),Il):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:M2(e.type)),e):1}function ur(e,t,r,n){if(50<Ea)throw Ea=0,Ff=null,Error(F(185));ss(e,r,n),(!(xe&2)||e!==ot)&&(e===ot&&(!(xe&2)&&(Zc|=r),rt===4&&pn(e,ct)),$t(e,n),r===1&&xe===0&&!(t.mode&1)&&(xo=Ye()+500,Yc&&Nn()))}function $t(e,t){var r=e.callbackNode;ry(e,t);var n=Jl(e,e===ot?ct:0);if(n===0)r!==null&&Yh(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Yh(r),t===1)e.tag===0?t6(Fp.bind(null,e)):tv(Fp.bind(null,e)),Ky(function(){!(xe&6)&&Nn()}),r=null;else{switch(P2(n)){case 1:r=N0;break;case 4:r=z2;break;case 16:r=Zl;break;case 536870912:r=_2;break;default:r=Zl}r=Jv(r,Gv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Gv(e,t){if(Al=-1,Il=0,xe&6)throw Error(F(327));var r=e.callbackNode;if(so()&&e.callbackNode!==r)return null;var n=Jl(e,e===ot?ct:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=vc(e,n);else{t=n;var i=xe;xe|=2;var a=Yv();(ot!==e||ct!==t)&&(Ar=null,xo=Ye()+500,ti(e,t));do try{j6();break}catch(l){qv(e,l)}while(!0);Q0(),pc.current=a,xe=i,Je!==null?t=0:(ot=null,ct=0,t=rt)}if(t!==0){if(t===2&&(i=hf(e),i!==0&&(n=i,t=Bf(e,i))),t===1)throw r=qa,ti(e,0),pn(e,n),$t(e,Ye()),r;if(t===6)pn(e,n);else{if(i=e.current.alternate,!(n&30)&&!w6(i)&&(t=vc(e,n),t===2&&(a=hf(e),a!==0&&(n=a,t=Bf(e,a))),t===1))throw r=qa,ti(e,0),pn(e,n),$t(e,Ye()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(F(345));case 2:Vn(e,kt,Ar);break;case 3:if(pn(e,n),(n&130023424)===n&&(t=d1+500-Ye(),10<t)){if(Jl(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){yt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bf(Vn.bind(null,e,kt,Ar),t);break}Vn(e,kt,Ar);break;case 4:if(pn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-cr(n);a=1<<s,s=t[s],s>i&&(i=s),n&=~a}if(n=i,n=Ye()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*y6(n/1960))-n,10<n){e.timeoutHandle=bf(Vn.bind(null,e,kt,Ar),n);break}Vn(e,kt,Ar);break;case 5:Vn(e,kt,Ar);break;default:throw Error(F(329))}}}return $t(e,Ye()),e.callbackNode===r?Gv.bind(null,e):null}function Bf(e,t){var r=Ca;return e.current.memoizedState.isDehydrated&&(ti(e,t).flags|=256),e=vc(e,t),e!==2&&(t=kt,kt=r,t!==null&&Uf(t)),e}function Uf(e){kt===null?kt=e:kt.push.apply(kt,e)}function w6(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!hr(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~u1,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-cr(t),n=1<<r;e[r]=-1,t&=~n}}function Fp(e){if(xe&6)throw Error(F(327));so();var t=Jl(e,0);if(!(t&1))return $t(e,Ye()),null;var r=vc(e,t);if(e.tag!==0&&r===2){var n=hf(e);n!==0&&(t=n,r=Bf(e,n))}if(r===1)throw r=qa,ti(e,0),pn(e,t),$t(e,Ye()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,kt,Ar),$t(e,Ye()),null}function f1(e,t){var r=xe;xe|=1;try{return e(t)}finally{xe=r,xe===0&&(xo=Ye()+500,Yc&&Nn())}}function ci(e){gn!==null&&gn.tag===0&&!(xe&6)&&so();var t=xe;xe|=1;var r=Yt.transition,n=Ce;try{if(Yt.transition=null,Ce=1,e)return e()}finally{Ce=n,Yt.transition=r,xe=t,!(xe&6)&&Nn()}}function h1(){At=Zi.current,Me(Zi)}function ti(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Qy(r)),Je!==null)for(r=Je.return;r!==null;){var n=r;switch(q0(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ic();break;case 3:go(),Me(zt),Me(mt),r1();break;case 5:t1(n);break;case 4:go();break;case 13:Me(Be);break;case 19:Me(Be);break;case 10:K0(n.type._context);break;case 22:case 23:h1()}r=r.return}if(ot=e,Je=e=En(e.current,null),ct=At=t,rt=0,qa=null,u1=Zc=li=0,kt=Ca=null,Xn!==null){for(t=0;t<Xn.length;t++)if(r=Xn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,n.next=s}r.pending=n}Xn=null}return e}function qv(e,t){do{var r=Je;try{if(Q0(),Pl.current=hc,fc){for(var n=Ue.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}fc=!1}if(si=0,nt=tt=Ue=null,ka=!1,Wa=0,c1.current=null,r===null||r.return===null){rt=1,qa=t,Je=null;break}e:{var a=e,s=r.return,l=r,c=t;if(t=ct,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=zp(s);if(w!==null){w.flags&=-257,_p(w,s,l,a,t),w.mode&1&&Ep(a,u,t),t=w,c=u;var x=t.updateQueue;if(x===null){var j=new Set;j.add(c),t.updateQueue=j}else x.add(c);break e}else{if(!(t&1)){Ep(a,u,t),p1();break e}c=Error(F(426))}}else if(De&&l.mode&1){var E=zp(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),_p(E,s,l,a,t),Y0(vo(c,l));break e}}a=c=vo(c,l),rt!==4&&(rt=2),Ca===null?Ca=[a]:Ca.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Pv(a,c,t);wp(a,g);break e;case 1:l=c;var p=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sn===null||!Sn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Tv(a,l,t);wp(a,k);break e}}a=a.return}while(a!==null)}Qv(r)}catch(z){t=z,Je===r&&r!==null&&(Je=r=r.return);continue}break}while(!0)}function Yv(){var e=pc.current;return pc.current=hc,e===null?hc:e}function p1(){(rt===0||rt===3||rt===2)&&(rt=4),ot===null||!(li&268435455)&&!(Zc&268435455)||pn(ot,ct)}function vc(e,t){var r=xe;xe|=2;var n=Yv();(ot!==e||ct!==t)&&(Ar=null,ti(e,t));do try{b6();break}catch(i){qv(e,i)}while(!0);if(Q0(),xe=r,pc.current=n,Je!==null)throw Error(F(261));return ot=null,ct=0,rt}function b6(){for(;Je!==null;)Xv(Je)}function j6(){for(;Je!==null&&!qx();)Xv(Je)}function Xv(e){var t=Zv(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?Qv(e):Je=t,c1.current=null}function Qv(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=m6(r,t),r!==null){r.flags&=32767,Je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,Je=null;return}}else if(r=p6(r,t,At),r!==null){Je=r;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);rt===0&&(rt=5)}function Vn(e,t,r){var n=Ce,i=Yt.transition;try{Yt.transition=null,Ce=1,k6(e,t,r,n)}finally{Yt.transition=i,Ce=n}return null}function k6(e,t,r,n){do so();while(gn!==null);if(xe&6)throw Error(F(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(ny(e,a),e===ot&&(Je=ot=null,ct=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Js||(Js=!0,Jv(Zl,function(){return so(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Yt.transition,Yt.transition=null;var s=Ce;Ce=1;var l=xe;xe|=4,c1.current=null,v6(e,r),Wv(r,e),Hy(yf),ec=!!xf,yf=xf=null,e.current=r,x6(r),Yx(),xe=l,Ce=s,Yt.transition=a}else e.current=r;if(Js&&(Js=!1,gn=e,gc=i),a=e.pendingLanes,a===0&&(Sn=null),Kx(r.stateNode),$t(e,Ye()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(mc)throw mc=!1,e=Df,Df=null,e;return gc&1&&e.tag!==0&&so(),a=e.pendingLanes,a&1?e===Ff?Ea++:(Ea=0,Ff=e):Ea=0,Nn(),null}function so(){if(gn!==null){var e=P2(gc),t=Yt.transition,r=Ce;try{if(Yt.transition=null,Ce=16>e?16:e,gn===null)var n=!1;else{if(e=gn,gn=null,gc=0,xe&6)throw Error(F(331));var i=xe;for(xe|=4,Y=e.current;Y!==null;){var a=Y,s=a.child;if(Y.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Y=u;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:Sa(8,f,a)}var h=f.child;if(h!==null)h.return=f,Y=h;else for(;Y!==null;){f=Y;var m=f.sibling,w=f.return;if(Bv(f),f===u){Y=null;break}if(m!==null){m.return=w,Y=m;break}Y=w}}}var x=a.alternate;if(x!==null){var j=x.child;if(j!==null){x.child=null;do{var E=j.sibling;j.sibling=null,j=E}while(j!==null)}}Y=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,Y=s;else e:for(;Y!==null;){if(a=Y,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Sa(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,Y=g;break e}Y=a.return}}var p=e.current;for(Y=p;Y!==null;){s=Y;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Y=v;else e:for(s=p;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kc(9,l)}}catch(z){Ge(l,l.return,z)}if(l===s){Y=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,Y=k;break e}Y=l.return}}if(xe=i,Nn(),br&&typeof br.onPostCommitFiberRoot=="function")try{br.onPostCommitFiberRoot(Hc,e)}catch{}n=!0}return n}finally{Ce=r,Yt.transition=t}}return!1}function Bp(e,t,r){t=vo(r,t),t=Pv(e,t,1),e=kn(e,t,1),t=yt(),e!==null&&(ss(e,1,t),$t(e,t))}function Ge(e,t,r){if(e.tag===3)Bp(e,e,r);else for(;t!==null;){if(t.tag===3){Bp(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Sn===null||!Sn.has(n))){e=vo(r,e),e=Tv(t,e,1),t=kn(t,e,1),e=yt(),t!==null&&(ss(t,1,e),$t(t,e));break}}t=t.return}}function S6(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,ot===e&&(ct&r)===r&&(rt===4||rt===3&&(ct&130023424)===ct&&500>Ye()-d1?ti(e,0):u1|=r),$t(e,t)}function Kv(e,t){t===0&&(e.mode&1?(t=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):t=1);var r=yt();e=Yr(e,t),e!==null&&(ss(e,t,r),$t(e,r))}function C6(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Kv(e,r)}function E6(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(F(314))}n!==null&&n.delete(t),Kv(e,r)}var Zv;Zv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||zt.current)Ct=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ct=!1,h6(e,t,r);Ct=!!(e.flags&131072)}else Ct=!1,De&&t.flags&1048576&&rv(t,sc,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ll(e,t),e=t.pendingProps;var i=ho(t,mt.current);ao(t,r),i=i1(null,t,n,e,i,r);var a=o1();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(n)?(a=!0,oc(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,J0(t),i.updater=Qc,t.stateNode=i,i._reactInternals=t,_f(t,n,e,r),t=Tf(null,t,n,!0,a,r)):(t.tag=0,De&&a&&G0(t),xt(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ll(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=_6(n),e=tr(n,e),i){case 0:t=Pf(null,t,n,e,r);break e;case 1:t=Tp(null,t,n,e,r);break e;case 11:t=$p(null,t,n,e,r);break e;case 14:t=Pp(null,t,n,tr(n.type,e),r);break e}throw Error(F(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),Pf(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),Tp(e,t,n,i,r);case 3:e:{if(Rv(t),e===null)throw Error(F(387));n=t.pendingProps,a=t.memoizedState,i=a.element,lv(e,t),uc(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=vo(Error(F(423)),t),t=Lp(e,t,n,r,i);break e}else if(n!==i){i=vo(Error(F(424)),t),t=Lp(e,t,n,r,i);break e}else for(Rt=jn(t.stateNode.containerInfo.firstChild),Nt=t,De=!0,ir=null,r=av(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(po(),n===i){t=Xr(e,t,r);break e}xt(e,t,n,r)}t=t.child}return t;case 5:return cv(t),e===null&&Cf(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,wf(n,i)?s=null:a!==null&&wf(n,a)&&(t.flags|=32),Iv(e,t),xt(e,t,s,r),t.child;case 6:return e===null&&Cf(t),null;case 13:return Mv(e,t,r);case 4:return e1(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=mo(t,null,n,r):xt(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),$p(e,t,n,i,r);case 7:return xt(e,t,t.pendingProps,r),t.child;case 8:return xt(e,t,t.pendingProps.children,r),t.child;case 12:return xt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Le(lc,n._currentValue),n._currentValue=s,a!==null)if(hr(a.value,s)){if(a.children===i.children&&!zt.current){t=Xr(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(a.tag===1){c=Ur(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Ef(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(F(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Ef(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}xt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,ao(t,r),i=Xt(i),n=n(i),t.flags|=1,xt(e,t,n,r),t.child;case 14:return n=t.type,i=tr(n,t.pendingProps),i=tr(n.type,i),Pp(e,t,n,i,r);case 15:return Lv(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:tr(n,i),Ll(e,t),t.tag=1,_t(n)?(e=!0,oc(t)):e=!1,ao(t,r),$v(t,n,i),_f(t,n,i,r),Tf(null,t,n,!0,e,r);case 19:return Nv(e,t,r);case 22:return Av(e,t,r)}throw Error(F(156,t.tag))};function Jv(e,t){return E2(e,t)}function z6(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,r,n){return new z6(e,t,r,n)}function m1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _6(e){if(typeof e=="function")return m1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===I0)return 11;if(e===R0)return 14}return 2}function En(e,t){var r=e.alternate;return r===null?(r=Gt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Rl(e,t,r,n,i,a){var s=2;if(n=e,typeof e=="function")m1(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ui:return ri(r.children,i,a,t);case A0:s=8,i|=8;break;case Kd:return e=Gt(12,r,t,i|2),e.elementType=Kd,e.lanes=a,e;case Zd:return e=Gt(13,r,t,i),e.elementType=Zd,e.lanes=a,e;case Jd:return e=Gt(19,r,t,i),e.elementType=Jd,e.lanes=a,e;case c2:return Jc(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case s2:s=10;break e;case l2:s=9;break e;case I0:s=11;break e;case R0:s=14;break e;case dn:s=16,n=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Gt(s,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function ri(e,t,r,n){return e=Gt(7,e,n,t),e.lanes=r,e}function Jc(e,t,r,n){return e=Gt(22,e,n,t),e.elementType=c2,e.lanes=r,e.stateNode={isHidden:!1},e}function hd(e,t,r){return e=Gt(6,e,null,t),e.lanes=r,e}function pd(e,t,r){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $6(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function g1(e,t,r,n,i,a,s,l,c){return e=new $6(e,t,r,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Gt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},J0(a),e}function P6(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function e4(e){if(!e)return $n;e=e._reactInternals;e:{if(gi(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(_t(r))return ev(e,r,t)}return t}function t4(e,t,r,n,i,a,s,l,c){return e=g1(r,n,!0,e,i,a,s,l,c),e.context=e4(null),r=e.current,n=yt(),i=Cn(r),a=Ur(n,i),a.callback=t??null,kn(r,a,i),e.current.lanes=i,ss(e,i,n),$t(e,n),e}function eu(e,t,r,n){var i=t.current,a=yt(),s=Cn(i);return r=e4(r),t.context===null?t.context=r:t.pendingContext=r,t=Ur(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=kn(i,t,s),e!==null&&(ur(e,i,s,a),$l(e,i,s)),s}function xc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function v1(e,t){Up(e,t),(e=e.alternate)&&Up(e,t)}function T6(){return null}var r4=typeof reportError=="function"?reportError:function(e){console.error(e)};function x1(e){this._internalRoot=e}tu.prototype.render=x1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));eu(e,t,null,null)};tu.prototype.unmount=x1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ci(function(){eu(null,e,null,null)}),t[qr]=null}};function tu(e){this._internalRoot=e}tu.prototype.unstable_scheduleHydration=function(e){if(e){var t=A2();e={blockedOn:null,target:e,priority:t};for(var r=0;r<hn.length&&t!==0&&t<hn[r].priority;r++);hn.splice(r,0,e),r===0&&R2(e)}};function y1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function L6(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=xc(s);a.call(u)}}var s=t4(t,n,e,0,null,!1,!1,"",Hp);return e._reactRootContainer=s,e[qr]=s.current,Da(e.nodeType===8?e.parentNode:e),ci(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=xc(c);l.call(u)}}var c=g1(e,0,!1,null,null,!1,!1,"",Hp);return e._reactRootContainer=c,e[qr]=c.current,Da(e.nodeType===8?e.parentNode:e),ci(function(){eu(t,c,r,n)}),c}function nu(e,t,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var c=xc(s);l.call(c)}}eu(t,s,e,i)}else s=L6(r,t,e,i,n);return xc(s)}T2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=da(t.pendingLanes);r!==0&&(O0(t,r|1),$t(t,Ye()),!(xe&6)&&(xo=Ye()+500,Nn()))}break;case 13:ci(function(){var n=Yr(e,1);if(n!==null){var i=yt();ur(n,e,1,i)}}),v1(e,1)}};D0=function(e){if(e.tag===13){var t=Yr(e,134217728);if(t!==null){var r=yt();ur(t,e,134217728,r)}v1(e,134217728)}};L2=function(e){if(e.tag===13){var t=Cn(e),r=Yr(e,t);if(r!==null){var n=yt();ur(r,e,t,n)}v1(e,t)}};A2=function(){return Ce};I2=function(e,t){var r=Ce;try{return Ce=e,t()}finally{Ce=r}};uf=function(e,t,r){switch(t){case"input":if(rf(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=qc(n);if(!i)throw Error(F(90));d2(n),rf(n,i)}}}break;case"textarea":h2(e,r);break;case"select":t=r.value,t!=null&&ro(e,!!r.multiple,t,!1)}};w2=f1;b2=ci;var A6={usingClientEntryPoint:!1,Events:[cs,Gi,qc,x2,y2,f1]},Ko={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I6={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=S2(e),e===null?null:e.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||T6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Hc=el.inject(I6),br=el}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A6;Bt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y1(t))throw Error(F(200));return P6(e,t,null,r)};Bt.createRoot=function(e,t){if(!y1(e))throw Error(F(299));var r=!1,n="",i=r4;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=g1(e,1,!1,null,null,r,!1,n,i),e[qr]=t.current,Da(e.nodeType===8?e.parentNode:e),new x1(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=S2(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return ci(e)};Bt.hydrate=function(e,t,r){if(!ru(t))throw Error(F(200));return nu(null,e,t,!0,r)};Bt.hydrateRoot=function(e,t,r){if(!y1(e))throw Error(F(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",s=r4;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=t4(t,null,e,1,r??null,i,!1,a,s),e[qr]=t.current,Da(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new tu(t)};Bt.render=function(e,t,r){if(!ru(t))throw Error(F(200));return nu(null,e,t,!1,r)};Bt.unmountComponentAtNode=function(e){if(!ru(e))throw Error(F(40));return e._reactRootContainer?(ci(function(){nu(null,null,e,!1,function(){e._reactRootContainer=null,e[qr]=null})}),!0):!1};Bt.unstable_batchedUpdates=f1;Bt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ru(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return nu(e,t,r,!1,n)};Bt.version="18.3.1-next-f1338f8080-20240426";function n4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n4)}catch(e){console.error(e)}}n4(),n2.exports=Bt;var ds=n2.exports;const R6=C0(ds),M6=Vg({__proto__:null,default:R6},[ds]);var Wp=ds;Xd.createRoot=Wp.createRoot,Xd.hydrateRoot=Wp.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fe.apply(this,arguments)}var Ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ke||(Ke={}));const Vp="popstate";function N6(e){e===void 0&&(e={});function t(n,i){let{pathname:a,search:s,hash:l}=n.location;return Ya("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:ui(i)}return D6(t,r,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function O6(){return Math.random().toString(36).substr(2,8)}function Gp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ya(e,t,r,n){return r===void 0&&(r=null),Fe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?On(t):t,{state:r,key:t&&t.key||n||O6()})}function ui(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function On(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function D6(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:a=!1}=n,s=i.history,l=Ke.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(Fe({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function h(){l=Ke.Pop;let E=f(),g=E==null?null:E-u;u=E,c&&c({action:l,location:j.location,delta:g})}function m(E,g){l=Ke.Push;let p=Ya(j.location,E,g);u=f()+1;let v=Gp(p,u),k=j.createHref(p);try{s.pushState(v,"",k)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(k)}a&&c&&c({action:l,location:j.location,delta:1})}function w(E,g){l=Ke.Replace;let p=Ya(j.location,E,g);u=f();let v=Gp(p,u),k=j.createHref(p);s.replaceState(v,"",k),a&&c&&c({action:l,location:j.location,delta:0})}function x(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:ui(E);return p=p.replace(/ $/,"%20"),he(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let j={get action(){return l},get location(){return e(i,s)},listen(E){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vp,h),c=E,()=>{i.removeEventListener(Vp,h),c=null}},createHref(E){return t(i,E)},createURL:x,encodeLocation(E){let g=x(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:w,go(E){return s.go(E)}};return j}var Te;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Te||(Te={}));const F6=new Set(["lazy","caseSensitive","path","id","index","children"]);function B6(e){return e.index===!0}function Xa(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((i,a)=>{let s=[...r,String(a)],l=typeof i.id=="string"?i.id:s.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!n[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),B6(i)){let c=Fe({},i,t(i),{id:l});return n[l]=c,c}else{let c=Fe({},i,t(i),{id:l,children:void 0});return n[l]=c,i.children&&(c.children=Xa(i.children,t,s,n)),c}})}function qn(e,t,r){return r===void 0&&(r="/"),Ml(e,t,r,!1)}function Ml(e,t,r,n){let i=typeof t=="string"?On(t):t,a=vi(i.pathname||"/",r);if(a==null)return null;let s=o4(e);U6(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=J6(a);l=K6(s[c],u,n)}return l}function i4(e,t){let{route:r,pathname:n,params:i}=e;return{id:r.id,pathname:n,params:i,data:t[r.id],handle:r.handle}}function o4(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(a,s,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Hr([n,c.relativePath]),f=r.concat(c);a.children&&a.children.length>0&&(he(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),o4(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:X6(u,a.index),routesMeta:f})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,s);else for(let c of a4(a.path))i(a,s,c)}),t}function a4(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let s=a4(n.join("/")),l=[];return l.push(...s.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function U6(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Q6(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const H6=/^:[\w-]+$/,W6=3,V6=2,G6=1,q6=10,Y6=-2,qp=e=>e==="*";function X6(e,t){let r=e.split("/"),n=r.length;return r.some(qp)&&(n+=Y6),t&&(n+=V6),r.filter(i=>!qp(i)).reduce((i,a)=>i+(H6.test(a)?W6:a===""?G6:q6),n)}function Q6(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function K6(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,i={},a="/",s=[];for(let l=0;l<n.length;++l){let c=n[l],u=l===n.length-1,f=a==="/"?t:t.slice(a.length)||"/",h=Yp({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!h&&u&&r&&!n[n.length-1].route.index&&(h=Yp({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Hr([a,h.pathname]),pathnameBase:r8(Hr([a,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(a=Hr([a,h.pathnameBase]))}return s}function Yp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Z6(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((u,f,h)=>{let{paramName:m,isOptional:w}=f;if(m==="*"){let j=l[h]||"";s=a.slice(0,a.length-j.length).replace(/(.)\/+$/,"$1")}const x=l[h];return w&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function Z6(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),yo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function J6(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function e8(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?On(e):e;return{pathname:r?r.startsWith("/")?r:t8(r,t):t,search:n8(n),hash:i8(i)}}function t8(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function md(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s4(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function w1(e,t){let r=s4(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function b1(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=On(e):(i=Fe({},e),he(!i.pathname||!i.pathname.includes("?"),md("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),md("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),md("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,l;if(s==null)l=r;else{let h=t.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}l=h>=0?t[h]:"/"}let c=e8(i,l),u=s&&s!=="/"&&s.endsWith("/"),f=(a||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Hr=e=>e.join("/").replace(/\/\/+/g,"/"),r8=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n8=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i8=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class j1{constructor(t,r,n,i){i===void 0&&(i=!1),this.status=t,this.statusText=r||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function iu(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const l4=["post","put","patch","delete"],o8=new Set(l4),a8=["get",...l4],s8=new Set(a8),l8=new Set([301,302,303,307,308]),c8=new Set([307,308]),gd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},u8={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Zo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},k1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d8=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),c4="remix-router-transitions";function f8(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let _=e.detectErrorBoundary;i=$=>({hasErrorBoundary:_($)})}else i=d8;let a={},s=Xa(e.routes,i,void 0,a),l,c=e.basename||"/",u=e.unstable_dataStrategy||v8,f=e.unstable_patchRoutesOnMiss,h=Fe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,w=new Set,x=null,j=null,E=null,g=e.hydrationData!=null,p=qn(s,e.history.location,c),v=null;if(p==null&&!f){let _=vt(404,{pathname:e.history.location.pathname}),{matches:$,route:T}=im(s);p=$,v={[T.id]:_}}p&&f&&!e.hydrationData&&Uu(p,s,e.history.location.pathname).active&&(p=null);let k;if(!p)k=!1,p=[];else if(p.some(_=>_.route.lazy))k=!1;else if(!p.some(_=>_.route.loader))k=!0;else if(h.v7_partialHydration){let _=e.hydrationData?e.hydrationData.loaderData:null,$=e.hydrationData?e.hydrationData.errors:null,T=M=>M.route.loader?typeof M.route.loader=="function"&&M.route.loader.hydrate===!0?!1:_&&_[M.route.id]!==void 0||$&&$[M.route.id]!==void 0:!0;if($){let M=p.findIndex(V=>$[V.route.id]!==void 0);k=p.slice(0,M+1).every(T)}else k=p.every(T)}else k=e.hydrationData!=null;let z,y={historyAction:e.history.action,location:e.history.location,matches:p,initialized:k,navigation:gd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},C=Ke.Pop,S=!1,P,L=!1,I=new Map,O=null,U=!1,W=!1,K=[],ue=[],J=new Map,R=0,N=-1,A=new Map,B=new Set,G=new Map,ye=new Map,ae=new Set,ke=new Map,D=new Map,ie=new Map,Ne=!1;function we(){if(m=e.history.listen(_=>{let{action:$,location:T,delta:M}=_;if(Ne){Ne=!1;return}yo(D.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=Lh({currentLocation:y.location,nextLocation:T,historyAction:$});if(V&&M!=null){Ne=!0,e.history.go(M*-1),Ls(V,{state:"blocked",location:T,proceed(){Ls(V,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),e.history.go(M)},reset(){let Z=new Map(y.blockers);Z.set(V,Zo),ze({blockers:Z})}});return}return Pt($,T)}),r){P8(t,I);let _=()=>T8(t,I);t.addEventListener("pagehide",_),O=()=>t.removeEventListener("pagehide",_)}return y.initialized||Pt(Ke.Pop,y.location,{initialHydration:!0}),z}function qe(){m&&m(),O&&O(),w.clear(),P&&P.abort(),y.fetchers.forEach((_,$)=>Ts($)),y.blockers.forEach((_,$)=>Th($))}function rn(_){return w.add(_),()=>w.delete(_)}function ze(_,$){$===void 0&&($={}),y=Fe({},y,_);let T=[],M=[];h.v7_fetcherPersist&&y.fetchers.forEach((V,Z)=>{V.state==="idle"&&(ae.has(Z)?M.push(Z):T.push(Z))}),[...w].forEach(V=>V(y,{deletedFetchers:M,unstable_viewTransitionOpts:$.viewTransitionOpts,unstable_flushSync:$.flushSync===!0})),h.v7_fetcherPersist&&(T.forEach(V=>y.fetchers.delete(V)),M.forEach(V=>Ts(V)))}function q(_,$,T){var M,V;let{flushSync:Z}=T===void 0?{}:T,ne=y.actionData!=null&&y.navigation.formMethod!=null&&nr(y.navigation.formMethod)&&y.navigation.state==="loading"&&((M=_.state)==null?void 0:M._isRedirect)!==!0,H;$.actionData?Object.keys($.actionData).length>0?H=$.actionData:H=null:ne?H=y.actionData:H=null;let se=$.loaderData?rm(y.loaderData,$.loaderData,$.matches||[],$.errors):y.loaderData,ee=y.blockers;ee.size>0&&(ee=new Map(ee),ee.forEach((Se,$e)=>ee.set($e,Zo)));let te=S===!0||y.navigation.formMethod!=null&&nr(y.navigation.formMethod)&&((V=_.state)==null?void 0:V._isRedirect)!==!0;l&&(s=l,l=void 0),U||C===Ke.Pop||(C===Ke.Push?e.history.push(_,_.state):C===Ke.Replace&&e.history.replace(_,_.state));let Ee;if(C===Ke.Pop){let Se=I.get(y.location.pathname);Se&&Se.has(_.pathname)?Ee={currentLocation:y.location,nextLocation:_}:I.has(_.pathname)&&(Ee={currentLocation:_,nextLocation:y.location})}else if(L){let Se=I.get(y.location.pathname);Se?Se.add(_.pathname):(Se=new Set([_.pathname]),I.set(y.location.pathname,Se)),Ee={currentLocation:y.location,nextLocation:_}}ze(Fe({},$,{actionData:H,loaderData:se,historyAction:C,location:_,initialized:!0,navigation:gd,revalidation:"idle",restoreScrollPosition:Ih(_,$.matches||y.matches),preventScrollReset:te,blockers:ee}),{viewTransitionOpts:Ee,flushSync:Z===!0}),C=Ke.Pop,S=!1,L=!1,U=!1,W=!1,K=[],ue=[]}async function _e(_,$){if(typeof _=="number"){e.history.go(_);return}let T=Hf(y.location,y.matches,c,h.v7_prependBasename,_,h.v7_relativeSplatPath,$==null?void 0:$.fromRouteId,$==null?void 0:$.relative),{path:M,submission:V,error:Z}=Xp(h.v7_normalizeFormMethod,!1,T,$),ne=y.location,H=Ya(y.location,M,$&&$.state);H=Fe({},H,e.history.encodeLocation(H));let se=$&&$.replace!=null?$.replace:void 0,ee=Ke.Push;se===!0?ee=Ke.Replace:se===!1||V!=null&&nr(V.formMethod)&&V.formAction===y.location.pathname+y.location.search&&(ee=Ke.Replace);let te=$&&"preventScrollReset"in $?$.preventScrollReset===!0:void 0,Ee=($&&$.unstable_flushSync)===!0,Se=Lh({currentLocation:ne,nextLocation:H,historyAction:ee});if(Se){Ls(Se,{state:"blocked",location:H,proceed(){Ls(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),_e(_,$)},reset(){let $e=new Map(y.blockers);$e.set(Se,Zo),ze({blockers:$e})}});return}return await Pt(ee,H,{submission:V,pendingError:Z,preventScrollReset:te,replace:$&&$.replace,enableViewTransition:$&&$.unstable_viewTransition,flushSync:Ee})}function $r(){if(Du(),ze({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){Pt(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}Pt(C||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function Pt(_,$,T){P&&P.abort(),P=null,C=_,U=(T&&T.startUninterruptedRevalidation)===!0,ox(y.location,y.matches),S=(T&&T.preventScrollReset)===!0,L=(T&&T.enableViewTransition)===!0;let M=l||s,V=T&&T.overrideNavigation,Z=qn(M,$,c),ne=(T&&T.flushSync)===!0,H=Uu(Z,M,$.pathname);if(H.active&&H.matches&&(Z=H.matches),!Z){let{error:be,notFoundMatches:at,route:Qe}=Fu($.pathname);q($,{matches:at,loaderData:{},errors:{[Qe.id]:be}},{flushSync:ne});return}if(y.initialized&&!W&&k8(y.location,$)&&!(T&&T.submission&&nr(T.submission.formMethod))){q($,{matches:Z},{flushSync:ne});return}P=new AbortController;let se=Ei(e.history,$,P.signal,T&&T.submission),ee;if(T&&T.pendingError)ee=[Ji(Z).route.id,{type:Te.error,error:T.pendingError}];else if(T&&T.submission&&nr(T.submission.formMethod)){let be=await Ou(se,$,T.submission,Z,H.active,{replace:T.replace,flushSync:ne});if(be.shortCircuited)return;if(be.pendingActionResult){let[at,Qe]=be.pendingActionResult;if(It(Qe)&&iu(Qe.error)&&Qe.error.status===404){P=null,q($,{matches:be.matches,loaderData:{},errors:{[at]:Qe.error}});return}}Z=be.matches||Z,ee=be.pendingActionResult,V=vd($,T.submission),ne=!1,H.active=!1,se=Ei(e.history,se.url,se.signal)}let{shortCircuited:te,matches:Ee,loaderData:Se,errors:$e}=await K3(se,$,Z,H.active,V,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,T&&T.initialHydration===!0,ne,ee);te||(P=null,q($,Fe({matches:Ee||Z},nm(ee),{loaderData:Se,errors:$e})))}async function Ou(_,$,T,M,V,Z){Z===void 0&&(Z={}),Du();let ne=_8($,T);if(ze({navigation:ne},{flushSync:Z.flushSync===!0}),V){let ee=await Is(M,$.pathname,_.signal);if(ee.type==="aborted")return{shortCircuited:!0};if(ee.type==="error"){let{boundaryId:te,error:Ee}=As($.pathname,ee);return{matches:ee.partialMatches,pendingActionResult:[te,{type:Te.error,error:Ee}]}}else if(ee.matches)M=ee.matches;else{let{notFoundMatches:te,error:Ee,route:Se}=Fu($.pathname);return{matches:te,pendingActionResult:[Se.id,{type:Te.error,error:Ee}]}}}let H,se=ha(M,$);if(!se.route.action&&!se.route.lazy)H={type:Te.error,error:vt(405,{method:_.method,pathname:$.pathname,routeId:se.route.id})};else if(H=(await Uo("action",_,[se],M))[0],_.signal.aborted)return{shortCircuited:!0};if(Zn(H)){let ee;return Z&&Z.replace!=null?ee=Z.replace:ee=Jp(H.response.headers.get("Location"),new URL(_.url),c)===y.location.pathname+y.location.search,await Bo(_,H,{submission:T,replace:ee}),{shortCircuited:!0}}if(Kn(H))throw vt(400,{type:"defer-action"});if(It(H)){let ee=Ji(M,se.route.id);return(Z&&Z.replace)!==!0&&(C=Ke.Push),{matches:M,pendingActionResult:[ee.route.id,H]}}return{matches:M,pendingActionResult:[se.route.id,H]}}async function K3(_,$,T,M,V,Z,ne,H,se,ee,te){let Ee=V||vd($,Z),Se=Z||ne||sm(Ee),$e=!U&&(!h.v7_partialHydration||!se);if(M){if($e){let Ve=Ch(te);ze(Fe({navigation:Ee},Ve!==void 0?{actionData:Ve}:{}),{flushSync:ee})}let de=await Is(T,$.pathname,_.signal);if(de.type==="aborted")return{shortCircuited:!0};if(de.type==="error"){let{boundaryId:Ve,error:Tt}=As($.pathname,de);return{matches:de.partialMatches,loaderData:{},errors:{[Ve]:Tt}}}else if(de.matches)T=de.matches;else{let{error:Ve,notFoundMatches:Tt,route:Oe}=Fu($.pathname);return{matches:Tt,loaderData:{},errors:{[Oe.id]:Ve}}}}let be=l||s,[at,Qe]=Qp(e.history,y,T,Se,$,h.v7_partialHydration&&se===!0,h.v7_skipActionErrorRevalidation,W,K,ue,ae,G,B,be,c,te);if(Bu(de=>!(T&&T.some(Ve=>Ve.route.id===de))||at&&at.some(Ve=>Ve.route.id===de)),N=++R,at.length===0&&Qe.length===0){let de=$h();return q($,Fe({matches:T,loaderData:{},errors:te&&It(te[1])?{[te[0]]:te[1].error}:null},nm(te),de?{fetchers:new Map(y.fetchers)}:{}),{flushSync:ee}),{shortCircuited:!0}}if($e){let de={};if(!M){de.navigation=Ee;let Ve=Ch(te);Ve!==void 0&&(de.actionData=Ve)}Qe.length>0&&(de.fetchers=Z3(Qe)),ze(de,{flushSync:ee})}Qe.forEach(de=>{J.has(de.key)&&on(de.key),de.controller&&J.set(de.key,de.controller)});let Ho=()=>Qe.forEach(de=>on(de.key));P&&P.signal.addEventListener("abort",Ho);let{loaderResults:an,fetcherResults:ji}=await Eh(y.matches,T,at,Qe,_);if(_.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",Ho),Qe.forEach(de=>J.delete(de.key));let ki=om([...an,...ji]);if(ki){if(ki.idx>=at.length){let de=Qe[ki.idx-at.length].key;B.add(de)}return await Bo(_,ki.result,{replace:H}),{shortCircuited:!0}}let{loaderData:Si,errors:mr}=tm(y,T,at,an,te,Qe,ji,ke);ke.forEach((de,Ve)=>{de.subscribe(Tt=>{(Tt||de.done)&&ke.delete(Ve)})}),h.v7_partialHydration&&se&&y.errors&&Object.entries(y.errors).filter(de=>{let[Ve]=de;return!at.some(Tt=>Tt.route.id===Ve)}).forEach(de=>{let[Ve,Tt]=de;mr=Object.assign(mr||{},{[Ve]:Tt})});let Rs=$h(),Ms=Ph(N),Ns=Rs||Ms||Qe.length>0;return Fe({matches:T,loaderData:Si,errors:mr},Ns?{fetchers:new Map(y.fetchers)}:{})}function Ch(_){if(_&&!It(_[1]))return{[_[0]]:_[1].data};if(y.actionData)return Object.keys(y.actionData).length===0?null:y.actionData}function Z3(_){return _.forEach($=>{let T=y.fetchers.get($.key),M=Jo(void 0,T?T.data:void 0);y.fetchers.set($.key,M)}),new Map(y.fetchers)}function J3(_,$,T,M){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");J.has(_)&&on(_);let V=(M&&M.unstable_flushSync)===!0,Z=l||s,ne=Hf(y.location,y.matches,c,h.v7_prependBasename,T,h.v7_relativeSplatPath,$,M==null?void 0:M.relative),H=qn(Z,ne,c),se=Uu(H,Z,ne);if(se.active&&se.matches&&(H=se.matches),!H){Pr(_,$,vt(404,{pathname:ne}),{flushSync:V});return}let{path:ee,submission:te,error:Ee}=Xp(h.v7_normalizeFormMethod,!0,ne,M);if(Ee){Pr(_,$,Ee,{flushSync:V});return}let Se=ha(H,ee);if(S=(M&&M.preventScrollReset)===!0,te&&nr(te.formMethod)){ex(_,$,ee,Se,H,se.active,V,te);return}G.set(_,{routeId:$,path:ee}),tx(_,$,ee,Se,H,se.active,V,te)}async function ex(_,$,T,M,V,Z,ne,H){Du(),G.delete(_);function se(Oe){if(!Oe.route.action&&!Oe.route.lazy){let Tr=vt(405,{method:H.formMethod,pathname:T,routeId:$});return Pr(_,$,Tr,{flushSync:ne}),!0}return!1}if(!Z&&se(M))return;let ee=y.fetchers.get(_);nn(_,$8(H,ee),{flushSync:ne});let te=new AbortController,Ee=Ei(e.history,T,te.signal,H);if(Z){let Oe=await Is(V,T,Ee.signal);if(Oe.type==="aborted")return;if(Oe.type==="error"){let{error:Tr}=As(T,Oe);Pr(_,$,Tr,{flushSync:ne});return}else if(Oe.matches){if(V=Oe.matches,M=ha(V,T),se(M))return}else{Pr(_,$,vt(404,{pathname:T}),{flushSync:ne});return}}J.set(_,te);let Se=R,be=(await Uo("action",Ee,[M],V))[0];if(Ee.signal.aborted){J.get(_)===te&&J.delete(_);return}if(h.v7_fetcherPersist&&ae.has(_)){if(Zn(be)||It(be)){nn(_,cn(void 0));return}}else{if(Zn(be))if(J.delete(_),N>Se){nn(_,cn(void 0));return}else return B.add(_),nn(_,Jo(H)),Bo(Ee,be,{fetcherSubmission:H});if(It(be)){Pr(_,$,be.error);return}}if(Kn(be))throw vt(400,{type:"defer-action"});let at=y.navigation.location||y.location,Qe=Ei(e.history,at,te.signal),Ho=l||s,an=y.navigation.state!=="idle"?qn(Ho,y.navigation.location,c):y.matches;he(an,"Didn't find any matches after fetcher action");let ji=++R;A.set(_,ji);let ki=Jo(H,be.data);y.fetchers.set(_,ki);let[Si,mr]=Qp(e.history,y,an,H,at,!1,h.v7_skipActionErrorRevalidation,W,K,ue,ae,G,B,Ho,c,[M.route.id,be]);mr.filter(Oe=>Oe.key!==_).forEach(Oe=>{let Tr=Oe.key,Rh=y.fetchers.get(Tr),lx=Jo(void 0,Rh?Rh.data:void 0);y.fetchers.set(Tr,lx),J.has(Tr)&&on(Tr),Oe.controller&&J.set(Tr,Oe.controller)}),ze({fetchers:new Map(y.fetchers)});let Rs=()=>mr.forEach(Oe=>on(Oe.key));te.signal.addEventListener("abort",Rs);let{loaderResults:Ms,fetcherResults:Ns}=await Eh(y.matches,an,Si,mr,Qe);if(te.signal.aborted)return;te.signal.removeEventListener("abort",Rs),A.delete(_),J.delete(_),mr.forEach(Oe=>J.delete(Oe.key));let de=om([...Ms,...Ns]);if(de){if(de.idx>=Si.length){let Oe=mr[de.idx-Si.length].key;B.add(Oe)}return Bo(Qe,de.result)}let{loaderData:Ve,errors:Tt}=tm(y,y.matches,Si,Ms,void 0,mr,Ns,ke);if(y.fetchers.has(_)){let Oe=cn(be.data);y.fetchers.set(_,Oe)}Ph(ji),y.navigation.state==="loading"&&ji>N?(he(C,"Expected pending action"),P&&P.abort(),q(y.navigation.location,{matches:an,loaderData:Ve,errors:Tt,fetchers:new Map(y.fetchers)})):(ze({errors:Tt,loaderData:rm(y.loaderData,Ve,an,Tt),fetchers:new Map(y.fetchers)}),W=!1)}async function tx(_,$,T,M,V,Z,ne,H){let se=y.fetchers.get(_);nn(_,Jo(H,se?se.data:void 0),{flushSync:ne});let ee=new AbortController,te=Ei(e.history,T,ee.signal);if(Z){let be=await Is(V,T,te.signal);if(be.type==="aborted")return;if(be.type==="error"){let{error:at}=As(T,be);Pr(_,$,at,{flushSync:ne});return}else if(be.matches)V=be.matches,M=ha(V,T);else{Pr(_,$,vt(404,{pathname:T}),{flushSync:ne});return}}J.set(_,ee);let Ee=R,$e=(await Uo("loader",te,[M],V))[0];if(Kn($e)&&($e=await p4($e,te.signal,!0)||$e),J.get(_)===ee&&J.delete(_),!te.signal.aborted){if(ae.has(_)){nn(_,cn(void 0));return}if(Zn($e))if(N>Ee){nn(_,cn(void 0));return}else{B.add(_),await Bo(te,$e);return}if(It($e)){Pr(_,$,$e.error);return}he(!Kn($e),"Unhandled fetcher deferred data"),nn(_,cn($e.data))}}async function Bo(_,$,T){let{submission:M,fetcherSubmission:V,replace:Z}=T===void 0?{}:T;$.response.headers.has("X-Remix-Revalidate")&&(W=!0);let ne=$.response.headers.get("Location");he(ne,"Expected a Location header on the redirect Response"),ne=Jp(ne,new URL(_.url),c);let H=Ya(y.location,ne,{_isRedirect:!0});if(r){let $e=!1;if($.response.headers.has("X-Remix-Reload-Document"))$e=!0;else if(k1.test(ne)){const be=e.history.createURL(ne);$e=be.origin!==t.location.origin||vi(be.pathname,c)==null}if($e){Z?t.location.replace(ne):t.location.assign(ne);return}}P=null;let se=Z===!0?Ke.Replace:Ke.Push,{formMethod:ee,formAction:te,formEncType:Ee}=y.navigation;!M&&!V&&ee&&te&&Ee&&(M=sm(y.navigation));let Se=M||V;if(c8.has($.response.status)&&Se&&nr(Se.formMethod))await Pt(se,H,{submission:Fe({},Se,{formAction:ne}),preventScrollReset:S});else{let $e=vd(H,M);await Pt(se,H,{overrideNavigation:$e,fetcherSubmission:V,preventScrollReset:S})}}async function Uo(_,$,T,M){try{let V=await x8(u,_,$,T,M,a,i);return await Promise.all(V.map((Z,ne)=>{if(C8(Z)){let H=Z.result;return{type:Te.redirect,response:b8(H,$,T[ne].route.id,M,c,h.v7_relativeSplatPath)}}return w8(Z)}))}catch(V){return T.map(()=>({type:Te.error,error:V}))}}async function Eh(_,$,T,M,V){let[Z,...ne]=await Promise.all([T.length?Uo("loader",V,T,$):[],...M.map(H=>{if(H.matches&&H.match&&H.controller){let se=Ei(e.history,H.path,H.controller.signal);return Uo("loader",se,[H.match],H.matches).then(ee=>ee[0])}else return Promise.resolve({type:Te.error,error:vt(404,{pathname:H.path})})})]);return await Promise.all([am(_,T,Z,Z.map(()=>V.signal),!1,y.loaderData),am(_,M.map(H=>H.match),ne,M.map(H=>H.controller?H.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:ne}}function Du(){W=!0,K.push(...Bu()),G.forEach((_,$)=>{J.has($)&&(ue.push($),on($))})}function nn(_,$,T){T===void 0&&(T={}),y.fetchers.set(_,$),ze({fetchers:new Map(y.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Pr(_,$,T,M){M===void 0&&(M={});let V=Ji(y.matches,$);Ts(_),ze({errors:{[V.route.id]:T},fetchers:new Map(y.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function zh(_){return h.v7_fetcherPersist&&(ye.set(_,(ye.get(_)||0)+1),ae.has(_)&&ae.delete(_)),y.fetchers.get(_)||u8}function Ts(_){let $=y.fetchers.get(_);J.has(_)&&!($&&$.state==="loading"&&A.has(_))&&on(_),G.delete(_),A.delete(_),B.delete(_),ae.delete(_),y.fetchers.delete(_)}function rx(_){if(h.v7_fetcherPersist){let $=(ye.get(_)||0)-1;$<=0?(ye.delete(_),ae.add(_)):ye.set(_,$)}else Ts(_);ze({fetchers:new Map(y.fetchers)})}function on(_){let $=J.get(_);he($,"Expected fetch controller: "+_),$.abort(),J.delete(_)}function _h(_){for(let $ of _){let T=zh($),M=cn(T.data);y.fetchers.set($,M)}}function $h(){let _=[],$=!1;for(let T of B){let M=y.fetchers.get(T);he(M,"Expected fetcher: "+T),M.state==="loading"&&(B.delete(T),_.push(T),$=!0)}return _h(_),$}function Ph(_){let $=[];for(let[T,M]of A)if(M<_){let V=y.fetchers.get(T);he(V,"Expected fetcher: "+T),V.state==="loading"&&(on(T),A.delete(T),$.push(T))}return _h($),$.length>0}function nx(_,$){let T=y.blockers.get(_)||Zo;return D.get(_)!==$&&D.set(_,$),T}function Th(_){y.blockers.delete(_),D.delete(_)}function Ls(_,$){let T=y.blockers.get(_)||Zo;he(T.state==="unblocked"&&$.state==="blocked"||T.state==="blocked"&&$.state==="blocked"||T.state==="blocked"&&$.state==="proceeding"||T.state==="blocked"&&$.state==="unblocked"||T.state==="proceeding"&&$.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+$.state);let M=new Map(y.blockers);M.set(_,$),ze({blockers:M})}function Lh(_){let{currentLocation:$,nextLocation:T,historyAction:M}=_;if(D.size===0)return;D.size>1&&yo(!1,"A router only supports one blocker at a time");let V=Array.from(D.entries()),[Z,ne]=V[V.length-1],H=y.blockers.get(Z);if(!(H&&H.state==="proceeding")&&ne({currentLocation:$,nextLocation:T,historyAction:M}))return Z}function Fu(_){let $=vt(404,{pathname:_}),T=l||s,{matches:M,route:V}=im(T);return Bu(),{notFoundMatches:M,route:V,error:$}}function As(_,$){return{boundaryId:Ji($.partialMatches).route.id,error:vt(400,{type:"route-discovery",pathname:_,message:$.error!=null&&"message"in $.error?$.error:String($.error)})}}function Bu(_){let $=[];return ke.forEach((T,M)=>{(!_||_(M))&&(T.cancel(),$.push(M),ke.delete(M))}),$}function ix(_,$,T){if(x=_,E=$,j=T||null,!g&&y.navigation===gd){g=!0;let M=Ih(y.location,y.matches);M!=null&&ze({restoreScrollPosition:M})}return()=>{x=null,E=null,j=null}}function Ah(_,$){return j&&j(_,$.map(M=>i4(M,y.loaderData)))||_.key}function ox(_,$){if(x&&E){let T=Ah(_,$);x[T]=E()}}function Ih(_,$){if(x){let T=Ah(_,$),M=x[T];if(typeof M=="number")return M}return null}function Uu(_,$,T){if(f)if(_){let M=_[_.length-1].route;if(M.path&&(M.path==="*"||M.path.endsWith("/*")))return{active:!0,matches:Ml($,T,c,!0)}}else return{active:!0,matches:Ml($,T,c,!0)||[]};return{active:!1,matches:null}}async function Is(_,$,T){let M=_,V=M.length>0?M[M.length-1].route:null;for(;;){let Z=l==null,ne=l||s;try{await g8(f,$,M,ne,a,i,ie,T)}catch(te){return{type:"error",error:te,partialMatches:M}}finally{Z&&(s=[...s])}if(T.aborted)return{type:"aborted"};let H=qn(ne,$,c),se=!1;if(H){let te=H[H.length-1].route;if(te.index)return{type:"success",matches:H};if(te.path&&te.path.length>0)if(te.path==="*")se=!0;else return{type:"success",matches:H}}let ee=Ml(ne,$,c,!0);if(!ee||M.map(te=>te.route.id).join("-")===ee.map(te=>te.route.id).join("-"))return{type:"success",matches:se?H:null};if(M=ee,V=M[M.length-1].route,V.path==="*")return{type:"success",matches:M}}}function ax(_){a={},l=Xa(_,i,void 0,a)}function sx(_,$){let T=l==null;d4(_,$,l||s,a,i),T&&(s=[...s],ze({}))}return z={get basename(){return c},get future(){return h},get state(){return y},get routes(){return s},get window(){return t},initialize:we,subscribe:rn,enableScrollRestoration:ix,navigate:_e,fetch:J3,revalidate:$r,createHref:_=>e.history.createHref(_),encodeLocation:_=>e.history.encodeLocation(_),getFetcher:zh,deleteFetcher:rx,dispose:qe,getBlocker:nx,deleteBlocker:Th,patchRoutes:sx,_internalFetchControllers:J,_internalActiveDeferreds:ke,_internalSetRoutes:ax},z}function h8(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Hf(e,t,r,n,i,a,s,l){let c,u;if(s){c=[];for(let h of t)if(c.push(h),h.route.id===s){u=h;break}}else c=t,u=t[t.length-1];let f=b1(i||".",w1(c,a),vi(e.pathname,r)||e.pathname,l==="path");return i==null&&(f.search=e.search,f.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!S1(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),n&&r!=="/"&&(f.pathname=f.pathname==="/"?r:Hr([r,f.pathname])),ui(f)}function Xp(e,t,r,n){if(!n||!h8(n))return{path:r};if(n.formMethod&&!z8(n.formMethod))return{path:r,error:vt(405,{method:n.formMethod})};let i=()=>({path:r,error:vt(400,{type:"invalid-body"})}),a=n.formMethod||"get",s=e?a.toUpperCase():a.toLowerCase(),l=f4(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!nr(s))return i();let m=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((w,x)=>{let[j,E]=x;return""+w+j+"="+E+`
`},""):String(n.body);return{path:r,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:void 0,text:m}}}else if(n.formEncType==="application/json"){if(!nr(s))return i();try{let m=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let c,u;if(n.formData)c=Wf(n.formData),u=n.formData;else if(n.body instanceof FormData)c=Wf(n.body),u=n.body;else if(n.body instanceof URLSearchParams)c=n.body,u=em(c);else if(n.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(n.body),u=em(c)}catch{return i()}let f={formMethod:s,formAction:l,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(nr(f.formMethod))return{path:r,submission:f};let h=On(r);return t&&h.search&&S1(h.search)&&c.append("index",""),h.search="?"+c,{path:ui(h),submission:f}}function p8(e,t){let r=e;if(t){let n=e.findIndex(i=>i.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function Qp(e,t,r,n,i,a,s,l,c,u,f,h,m,w,x,j){let E=j?It(j[1])?j[1].error:j[1].data:void 0,g=e.createURL(t.location),p=e.createURL(i),v=j&&It(j[1])?j[0]:void 0,k=v?p8(r,v):r,z=j?j[1].statusCode:void 0,y=s&&z&&z>=400,C=k.filter((P,L)=>{let{route:I}=P;if(I.lazy)return!0;if(I.loader==null)return!1;if(a)return typeof I.loader!="function"||I.loader.hydrate?!0:t.loaderData[I.id]===void 0&&(!t.errors||t.errors[I.id]===void 0);if(m8(t.loaderData,t.matches[L],P)||c.some(W=>W===P.route.id))return!0;let O=t.matches[L],U=P;return Kp(P,Fe({currentUrl:g,currentParams:O.params,nextUrl:p,nextParams:U.params},n,{actionResult:E,actionStatus:z,defaultShouldRevalidate:y?!1:l||g.pathname+g.search===p.pathname+p.search||g.search!==p.search||u4(O,U)}))}),S=[];return h.forEach((P,L)=>{if(a||!r.some(K=>K.route.id===P.routeId)||f.has(L))return;let I=qn(w,P.path,x);if(!I){S.push({key:L,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(L),U=ha(I,P.path),W=!1;m.has(L)?W=!1:u.includes(L)?W=!0:O&&O.state!=="idle"&&O.data===void 0?W=l:W=Kp(U,Fe({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:r[r.length-1].params},n,{actionResult:E,actionStatus:z,defaultShouldRevalidate:y?!1:l})),W&&S.push({key:L,routeId:P.routeId,path:P.path,matches:I,match:U,controller:new AbortController})}),[C,S]}function m8(e,t,r){let n=!t||r.route.id!==t.route.id,i=e[r.route.id]===void 0;return n||i}function u4(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Kp(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function g8(e,t,r,n,i,a,s,l){let c=[t,...r.map(u=>u.route.id)].join("-");try{let u=s.get(c);u||(u=e({path:t,matches:r,patch:(f,h)=>{l.aborted||d4(f,h,n,i,a)}}),s.set(c,u)),u&&S8(u)&&await u}finally{s.delete(c)}}function d4(e,t,r,n,i){if(e){var a;let s=n[e];he(s,"No route found to patch children into: routeId = "+e);let l=Xa(t,i,[e,"patch",String(((a=s.children)==null?void 0:a.length)||"0")],n);s.children?s.children.push(...l):s.children=l}else{let s=Xa(t,i,["patch",String(r.length||"0")],n);r.push(...s)}}async function Zp(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let i=r[e.id];he(i,"No route found in manifest");let a={};for(let s in n){let c=i[s]!==void 0&&s!=="hasErrorBoundary";yo(!c,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!F6.has(s)&&(a[s]=n[s])}Object.assign(i,a),Object.assign(i,Fe({},t(i),{lazy:void 0}))}function v8(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function x8(e,t,r,n,i,a,s,l){let c=n.reduce((h,m)=>h.add(m.route.id),new Set),u=new Set,f=await e({matches:i.map(h=>{let m=c.has(h.route.id);return Fe({},h,{shouldLoad:m,resolve:x=>(u.add(h.route.id),m?y8(t,r,h,a,s,x,l):Promise.resolve({type:Te.data,result:void 0}))})}),request:r,params:i[0].params,context:l});return i.forEach(h=>he(u.has(h.route.id),'`match.resolve()` was not called for route id "'+h.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),f.filter((h,m)=>c.has(i[m].route.id))}async function y8(e,t,r,n,i,a,s){let l,c,u=f=>{let h,m=new Promise((j,E)=>h=E);c=()=>h(),t.signal.addEventListener("abort",c);let w=j=>typeof f!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+r.route.id+"]"))):f({request:t,params:r.params,context:s},...j!==void 0?[j]:[]),x;return a?x=a(j=>w(j)):x=(async()=>{try{return{type:"data",result:await w()}}catch(j){return{type:"error",result:j}}})(),Promise.race([x,m])};try{let f=r.route[e];if(r.route.lazy)if(f){let h,[m]=await Promise.all([u(f).catch(w=>{h=w}),Zp(r.route,i,n)]);if(h!==void 0)throw h;l=m}else if(await Zp(r.route,i,n),f=r.route[e],f)l=await u(f);else if(e==="action"){let h=new URL(t.url),m=h.pathname+h.search;throw vt(405,{method:t.method,pathname:m,routeId:r.route.id})}else return{type:Te.data,result:void 0};else if(f)l=await u(f);else{let h=new URL(t.url),m=h.pathname+h.search;throw vt(404,{pathname:m})}he(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(f){return{type:Te.error,result:f}}finally{c&&t.signal.removeEventListener("abort",c)}return l}async function w8(e){let{result:t,type:r,status:n}=e;if(h4(t)){let s;try{let l=t.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?t.body==null?s=null:s=await t.json():s=await t.text()}catch(l){return{type:Te.error,error:l}}return r===Te.error?{type:Te.error,error:new j1(t.status,t.statusText,s),statusCode:t.status,headers:t.headers}:{type:Te.data,data:s,statusCode:t.status,headers:t.headers}}if(r===Te.error)return{type:Te.error,error:t,statusCode:iu(t)?t.status:n};if(E8(t)){var i,a;return{type:Te.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}return{type:Te.data,data:t,statusCode:n}}function b8(e,t,r,n,i,a){let s=e.headers.get("Location");if(he(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!k1.test(s)){let l=n.slice(0,n.findIndex(c=>c.route.id===r)+1);s=Hf(new URL(t.url),l,i,!0,s,a),e.headers.set("Location",s)}return e}function Jp(e,t,r){if(k1.test(e)){let n=e,i=n.startsWith("//")?new URL(t.protocol+n):new URL(n),a=vi(i.pathname,r)!=null;if(i.origin===t.origin&&a)return i.pathname+i.search+i.hash}return e}function Ei(e,t,r,n){let i=e.createURL(f4(t)).toString(),a={signal:r};if(n&&nr(n.formMethod)){let{formMethod:s,formEncType:l}=n;a.method=s.toUpperCase(),l==="application/json"?(a.headers=new Headers({"Content-Type":l}),a.body=JSON.stringify(n.json)):l==="text/plain"?a.body=n.text:l==="application/x-www-form-urlencoded"&&n.formData?a.body=Wf(n.formData):a.body=n.formData}return new Request(i,a)}function Wf(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function em(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function j8(e,t,r,n,i,a){let s={},l=null,c,u=!1,f={},h=n&&It(n[1])?n[1].error:void 0;return r.forEach((m,w)=>{let x=t[w].route.id;if(he(!Zn(m),"Cannot handle redirect results in processLoaderData"),It(m)){let j=m.error;h!==void 0&&(j=h,h=void 0),l=l||{};{let E=Ji(e,x);l[E.route.id]==null&&(l[E.route.id]=j)}s[x]=void 0,u||(u=!0,c=iu(m.error)?m.error.status:500),m.headers&&(f[x]=m.headers)}else Kn(m)?(i.set(x,m.deferredData),s[x]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!u&&(c=m.statusCode),m.headers&&(f[x]=m.headers)):(s[x]=m.data,m.statusCode&&m.statusCode!==200&&!u&&(c=m.statusCode),m.headers&&(f[x]=m.headers))}),h!==void 0&&n&&(l={[n[0]]:h},s[n[0]]=void 0),{loaderData:s,errors:l,statusCode:c||200,loaderHeaders:f}}function tm(e,t,r,n,i,a,s,l){let{loaderData:c,errors:u}=j8(t,r,n,i,l);for(let f=0;f<a.length;f++){let{key:h,match:m,controller:w}=a[f];he(s!==void 0&&s[f]!==void 0,"Did not find corresponding fetcher result");let x=s[f];if(!(w&&w.signal.aborted))if(It(x)){let j=Ji(e.matches,m==null?void 0:m.route.id);u&&u[j.route.id]||(u=Fe({},u,{[j.route.id]:x.error})),e.fetchers.delete(h)}else if(Zn(x))he(!1,"Unhandled fetcher revalidation redirect");else if(Kn(x))he(!1,"Unhandled fetcher deferred data");else{let j=cn(x.data);e.fetchers.set(h,j)}}return{loaderData:c,errors:u}}function rm(e,t,r,n){let i=Fe({},t);for(let a of r){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&a.route.loader&&(i[s]=e[s]),n&&n.hasOwnProperty(s))break}return i}function nm(e){return e?It(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ji(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function im(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function vt(e,t){let{pathname:r,routeId:n,method:i,type:a,message:s}=t===void 0?{}:t,l="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(l="Bad Request",a==="route-discovery"?c='Unable to match URL "'+r+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+s):i&&r&&n?c="You made a "+i+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":a==="defer-action"?c="defer() is not supported in actions":a==="invalid-body"&&(c="Unable to encode submission body")):e===403?(l="Forbidden",c='Route "'+n+'" does not match URL "'+r+'"'):e===404?(l="Not Found",c='No route matches URL "'+r+'"'):e===405&&(l="Method Not Allowed",i&&r&&n?c="You made a "+i.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":i&&(c='Invalid request method "'+i.toUpperCase()+'"')),new j1(e||500,l,new Error(c),!0)}function om(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(Zn(r))return{result:r,idx:t}}}function f4(e){let t=typeof e=="string"?On(e):e;return ui(Fe({},t,{hash:""}))}function k8(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function S8(e){return typeof e=="object"&&e!=null&&"then"in e}function C8(e){return h4(e.result)&&l8.has(e.result.status)}function Kn(e){return e.type===Te.deferred}function It(e){return e.type===Te.error}function Zn(e){return(e&&e.type)===Te.redirect}function E8(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function h4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function z8(e){return s8.has(e.toLowerCase())}function nr(e){return o8.has(e.toLowerCase())}async function am(e,t,r,n,i,a){for(let s=0;s<r.length;s++){let l=r[s],c=t[s];if(!c)continue;let u=e.find(h=>h.route.id===c.route.id),f=u!=null&&!u4(u,c)&&(a&&a[c.route.id])!==void 0;if(Kn(l)&&(i||f)){let h=n[s];he(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await p4(l,h,i).then(m=>{m&&(r[s]=m||r[s])})}}}async function p4(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:Te.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Te.error,error:i}}return{type:Te.data,data:e.deferredData.data}}}function S1(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ha(e,t){let r=typeof t=="string"?On(t).search:t.search;if(e[e.length-1].route.index&&S1(r||""))return e[e.length-1];let n=s4(e);return n[n.length-1]}function sm(e){let{formMethod:t,formAction:r,formEncType:n,text:i,formData:a,json:s}=e;if(!(!t||!r||!n)){if(i!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:r,formEncType:n,formData:a,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:s,text:void 0}}}function vd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function _8(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Jo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function $8(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function cn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function P8(e,t){try{let r=e.sessionStorage.getItem(c4);if(r){let n=JSON.parse(r);for(let[i,a]of Object.entries(n||{}))a&&Array.isArray(a)&&t.set(i,new Set(a||[]))}}catch{}}function T8(e,t){if(t.size>0){let r={};for(let[n,i]of t)r[n]=[...i];try{e.sessionStorage.setItem(c4,JSON.stringify(r))}catch(n){yo(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yc(){return yc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},yc.apply(this,arguments)}const fs=b.createContext(null),C1=b.createContext(null),Dn=b.createContext(null),E1=b.createContext(null),tn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),m4=b.createContext(null);function L8(e,t){let{relative:r}=t===void 0?{}:t;hs()||he(!1);let{basename:n,navigator:i}=b.useContext(Dn),{hash:a,pathname:s,search:l}=v4(e,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:Hr([n,s])),i.createHref({pathname:c,search:l,hash:a})}function hs(){return b.useContext(E1)!=null}function Ro(){return hs()||he(!1),b.useContext(E1).location}function g4(e){b.useContext(Dn).static||b.useLayoutEffect(e)}function Cr(){let{isDataRoute:e}=b.useContext(tn);return e?G8():A8()}function A8(){hs()||he(!1);let e=b.useContext(fs),{basename:t,future:r,navigator:n}=b.useContext(Dn),{matches:i}=b.useContext(tn),{pathname:a}=Ro(),s=JSON.stringify(w1(i,r.v7_relativeSplatPath)),l=b.useRef(!1);return g4(()=>{l.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let h=b1(u,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Hr([t,h.pathname])),(f.replace?n.replace:n.push)(h,f.state,f)},[t,n,s,a,e])}const I8=b.createContext(null);function R8(e){let t=b.useContext(tn).outlet;return t&&b.createElement(I8.Provider,{value:e},t)}function ps(){let{matches:e}=b.useContext(tn),t=e[e.length-1];return t?t.params:{}}function v4(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=b.useContext(Dn),{matches:i}=b.useContext(tn),{pathname:a}=Ro(),s=JSON.stringify(w1(i,n.v7_relativeSplatPath));return b.useMemo(()=>b1(e,JSON.parse(s),a,r==="path"),[e,s,a,r])}function M8(e,t,r,n){hs()||he(!1);let{navigator:i}=b.useContext(Dn),{matches:a}=b.useContext(tn),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Ro(),f;f=u;let h=f.pathname||"/",m=h;if(c!=="/"){let j=c.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=qn(e,{pathname:m});return B8(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Hr([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Hr([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,r,n)}function N8(){let e=b4(),t=iu(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:i},r):null,null)}const O8=b.createElement(N8,null);class D8 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(tn.Provider,{value:this.props.routeContext},b.createElement(m4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F8(e){let{routeContext:t,match:r,children:n}=e,i=b.useContext(fs);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(tn.Provider,{value:t},n)}function B8(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if((a=r)!=null&&a.errors)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);f>=0||he(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=f),h.route.id){let{loaderData:m,errors:w}=r,x=h.route.loader&&m[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||x){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,h,m)=>{let w,x=!1,j=null,E=null;r&&(w=l&&h.route.id?l[h.route.id]:void 0,j=h.route.errorElement||O8,c&&(u<0&&m===0?(q8("route-fallback"),x=!0,E=null):u===m&&(x=!0,E=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,m+1)),p=()=>{let v;return w?v=j:x?v=E:h.route.Component?v=b.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=f,b.createElement(F8,{match:h,routeContext:{outlet:f,matches:g,isDataRoute:r!=null},children:v})};return r&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?b.createElement(D8,{location:r.location,revalidation:r.revalidation,component:j,error:w,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var x4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(x4||{}),y4=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(y4||{});function U8(e){let t=b.useContext(fs);return t||he(!1),t}function ou(e){let t=b.useContext(C1);return t||he(!1),t}function H8(e){let t=b.useContext(tn);return t||he(!1),t}function z1(e){let t=H8(),r=t.matches[t.matches.length-1];return r.route.id||he(!1),r.route.id}function W8(){return ou().navigation}function V8(){let{matches:e,loaderData:t}=ou();return b.useMemo(()=>e.map(r=>i4(r,t)),[e,t])}function w4(){let e=ou(),t=z1();if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function b4(){var e;let t=b.useContext(m4),r=ou(y4.UseRouteError),n=z1();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function G8(){let{router:e}=U8(x4.UseNavigateStable),t=z1(),r=b.useRef(!1);return g4(()=>{r.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,yc({fromRouteId:t},a)))},[e,t])}const lm={};function q8(e,t,r){lm[e]||(lm[e]=!0)}function Y8(e){return R8(e.context)}function X8(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Ke.Pop,navigator:a,static:s=!1,future:l}=e;hs()&&he(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:a,static:s,future:yc({v7_relativeSplatPath:!1},l)}),[c,l,a,s]);typeof n=="string"&&(n=On(n));let{pathname:f="/",search:h="",hash:m="",state:w=null,key:x="default"}=n,j=b.useMemo(()=>{let E=vi(f,c);return E==null?null:{location:{pathname:E,search:h,hash:m,state:w,key:x},navigationType:i}},[c,f,h,m,w,x,i]);return j==null?null:b.createElement(Dn.Provider,{value:u},b.createElement(E1.Provider,{children:r,value:j}))}new Promise(()=>{});function Q8(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:b.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wo.apply(this,arguments)}function K8(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Z8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J8(e,t){return e.button===0&&(!t||t==="_self")&&!Z8(e)}function Vf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function e7(e,t){let r=Vf(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(a=>{r.append(i,a)})}),r}const t7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],r7="6";try{window.__reactRouterVersion=r7}catch{}function n7(e,t){return f8({basename:void 0,future:wo({},void 0,{v7_prependBasename:!0}),history:N6({window:void 0}),hydrationData:i7(),routes:e,mapRouteProperties:Q8,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function i7(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=wo({},t,{errors:o7(t.errors)})),t}function o7(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,i]of t)if(i&&i.__type==="RouteErrorResponse")r[n]=new j1(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let s=new a(i.message);s.stack="",r[n]=s}catch{}}if(r[n]==null){let a=new Error(i.message);a.stack="",r[n]=a}}else r[n]=i;return r}const a7=b.createContext({isTransitioning:!1}),s7=b.createContext(new Map),l7="startTransition",cm=Yd[l7],c7="flushSync",um=M6[c7];function u7(e){cm?cm(e):e()}function ea(e){um?um(e):e()}class d7{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",t(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",r(n))}})}}function f7(e){let{fallbackElement:t,router:r,future:n}=e,[i,a]=b.useState(r.state),[s,l]=b.useState(),[c,u]=b.useState({isTransitioning:!1}),[f,h]=b.useState(),[m,w]=b.useState(),[x,j]=b.useState(),E=b.useRef(new Map),{v7_startTransition:g}=n||{},p=b.useCallback(S=>{g?u7(S):S()},[g]),v=b.useCallback((S,P)=>{let{deletedFetchers:L,unstable_flushSync:I,unstable_viewTransitionOpts:O}=P;L.forEach(W=>E.current.delete(W)),S.fetchers.forEach((W,K)=>{W.data!==void 0&&E.current.set(K,W.data)});let U=r.window==null||r.window.document==null||typeof r.window.document.startViewTransition!="function";if(!O||U){I?ea(()=>a(S)):p(()=>a(S));return}if(I){ea(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:O.currentLocation,nextLocation:O.nextLocation})});let W=r.window.document.startViewTransition(()=>{ea(()=>a(S))});W.finished.finally(()=>{ea(()=>{h(void 0),w(void 0),l(void 0),u({isTransitioning:!1})})}),ea(()=>w(W));return}m?(f&&f.resolve(),m.skipTransition(),j({state:S,currentLocation:O.currentLocation,nextLocation:O.nextLocation})):(l(S),u({isTransitioning:!0,flushSync:!1,currentLocation:O.currentLocation,nextLocation:O.nextLocation}))},[r.window,m,f,E,p]);b.useLayoutEffect(()=>r.subscribe(v),[r,v]),b.useEffect(()=>{c.isTransitioning&&!c.flushSync&&h(new d7)},[c]),b.useEffect(()=>{if(f&&s&&r.window){let S=s,P=f.promise,L=r.window.document.startViewTransition(async()=>{p(()=>a(S)),await P});L.finished.finally(()=>{h(void 0),w(void 0),l(void 0),u({isTransitioning:!1})}),w(L)}},[p,s,f,r.window]),b.useEffect(()=>{f&&s&&i.location.key===s.location.key&&f.resolve()},[f,m,i.location,s]),b.useEffect(()=>{!c.isTransitioning&&x&&(l(x.state),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),j(void 0))},[c.isTransitioning,x]),b.useEffect(()=>{},[]);let k=b.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:S=>r.navigate(S),push:(S,P,L)=>r.navigate(S,{state:P,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(S,P,L)=>r.navigate(S,{replace:!0,state:P,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[r]),z=r.basename||"/",y=b.useMemo(()=>({router:r,navigator:k,static:!1,basename:z}),[r,k,z]),C=b.useMemo(()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath}),[r.future.v7_relativeSplatPath]);return b.createElement(b.Fragment,null,b.createElement(fs.Provider,{value:y},b.createElement(C1.Provider,{value:i},b.createElement(s7.Provider,{value:E.current},b.createElement(a7.Provider,{value:c},b.createElement(X8,{basename:z,location:i.location,navigationType:i.historyAction,navigator:k,future:C},i.initialized||r.future.v7_partialHydration?b.createElement(h7,{routes:r.routes,future:r.future,state:i}):t))))),null)}const h7=b.memo(p7);function p7(e){let{routes:t,future:r,state:n}=e;return M8(t,void 0,n,r)}const m7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=b.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:a,replace:s,state:l,target:c,to:u,preventScrollReset:f,unstable_viewTransition:h}=t,m=K8(t,t7),{basename:w}=b.useContext(Dn),x,j=!1;if(typeof u=="string"&&g7.test(u)&&(x=u,m7))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),z=vi(k.pathname,w);k.origin===v.origin&&z!=null?u=z+k.search+k.hash:j=!0}catch{}let E=L8(u,{relative:i}),g=w7(u,{replace:s,state:l,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:h});function p(v){n&&n(v),v.defaultPrevented||g(v)}return b.createElement("a",wo({},m,{href:x||E,onClick:j||a?n:p,ref:r,target:c}))});function v7(e){let{getKey:t,storageKey:r}=e;return j7({getKey:t,storageKey:r}),null}var Gf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gf||(Gf={}));var qf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qf||(qf={}));function x7(e){let t=b.useContext(fs);return t||he(!1),t}function y7(e){let t=b.useContext(C1);return t||he(!1),t}function w7(e,t){let{target:r,replace:n,state:i,preventScrollReset:a,relative:s,unstable_viewTransition:l}=t===void 0?{}:t,c=Cr(),u=Ro(),f=v4(e,{relative:s});return b.useCallback(h=>{if(J8(h,r)){h.preventDefault();let m=n!==void 0?n:ui(u)===ui(f);c(e,{replace:m,state:i,preventScrollReset:a,relative:s,unstable_viewTransition:l})}},[u,c,f,n,i,r,e,a,s,l])}function b7(e){let t=b.useRef(Vf(e)),r=b.useRef(!1),n=Ro(),i=b.useMemo(()=>e7(n.search,r.current?null:t.current),[n.search]),a=Cr(),s=b.useCallback((l,c)=>{const u=Vf(typeof l=="function"?l(i):l);r.current=!0,a("?"+u,c)},[a,i]);return[i,s]}const dm="react-router-scroll-positions";let tl={};function j7(e){let{getKey:t,storageKey:r}=e===void 0?{}:e,{router:n}=x7(Gf.UseScrollRestoration),{restoreScrollPosition:i,preventScrollReset:a}=y7(qf.UseScrollRestoration),{basename:s}=b.useContext(Dn),l=Ro(),c=V8(),u=W8();b.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),k7(b.useCallback(()=>{if(u.state==="idle"){let f=(t?t(l,c):null)||l.key;tl[f]=window.scrollY}try{sessionStorage.setItem(r||dm,JSON.stringify(tl))}catch{}window.history.scrollRestoration="auto"},[r,t,u.state,l,c])),typeof document<"u"&&(b.useLayoutEffect(()=>{try{let f=sessionStorage.getItem(r||dm);f&&(tl=JSON.parse(f))}catch{}},[r]),b.useLayoutEffect(()=>{let f=t&&s!=="/"?(m,w)=>t(wo({},m,{pathname:vi(m.pathname,s)||m.pathname}),w):t,h=n==null?void 0:n.enableScrollRestoration(tl,()=>window.scrollY,f);return()=>h&&h()},[n,s,t]),b.useLayoutEffect(()=>{if(i!==!1){if(typeof i=="number"){window.scrollTo(0,i);return}if(l.hash){let f=document.getElementById(decodeURIComponent(l.hash.slice(1)));if(f){f.scrollIntoView();return}}a!==!0&&window.scrollTo(0,0)}},[l,i,a]))}function k7(e,t){let{capture:r}={};b.useEffect(()=>{let n=r!=null?{capture:r}:void 0;return window.addEventListener("pagehide",e,n),()=>{window.removeEventListener("pagehide",e,n)}},[e,r])}var pt=function(){return pt=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},pt.apply(this,arguments)};function bo(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var Re="-ms-",za="-moz-",je="-webkit-",j4="comm",au="rule",_1="decl",S7="@import",k4="@keyframes",C7="@layer",S4=Math.abs,$1=String.fromCharCode,Yf=Object.assign;function E7(e,t){return it(e,0)^45?(((t<<2^it(e,0))<<2^it(e,1))<<2^it(e,2))<<2^it(e,3):0}function C4(e){return e.trim()}function Ir(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,r){return e.replace(t,r)}function Nl(e,t,r){return e.indexOf(t,r)}function it(e,t){return e.charCodeAt(t)|0}function jo(e,t,r){return e.slice(t,r)}function yr(e){return e.length}function E4(e){return e.length}function pa(e,t){return t.push(e),e}function z7(e,t){return e.map(t).join("")}function fm(e,t){return e.filter(function(r){return!Ir(r,t)})}var su=1,ko=1,z4=0,Kt=0,Ze=0,Mo="";function lu(e,t,r,n,i,a,s,l){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:su,column:ko,length:s,return:"",siblings:l}}function un(e,t){return Yf(lu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zi(e){for(;e.root;)e=un(e.root,{children:[e]});pa(e,e.siblings)}function _7(){return Ze}function $7(){return Ze=Kt>0?it(Mo,--Kt):0,ko--,Ze===10&&(ko=1,su--),Ze}function dr(){return Ze=Kt<z4?it(Mo,Kt++):0,ko++,Ze===10&&(ko=1,su++),Ze}function ni(){return it(Mo,Kt)}function Ol(){return Kt}function cu(e,t){return jo(Mo,e,t)}function Xf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P7(e){return su=ko=1,z4=yr(Mo=e),Kt=0,[]}function T7(e){return Mo="",e}function xd(e){return C4(cu(Kt-1,Qf(e===91?e+2:e===40?e+1:e)))}function L7(e){for(;(Ze=ni())&&Ze<33;)dr();return Xf(e)>2||Xf(Ze)>3?"":" "}function A7(e,t){for(;--t&&dr()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return cu(e,Ol()+(t<6&&ni()==32&&dr()==32))}function Qf(e){for(;dr();)switch(Ze){case e:return Kt;case 34:case 39:e!==34&&e!==39&&Qf(Ze);break;case 40:e===41&&Qf(e);break;case 92:dr();break}return Kt}function I7(e,t){for(;dr()&&e+Ze!==57;)if(e+Ze===84&&ni()===47)break;return"/*"+cu(t,Kt-1)+"*"+$1(e===47?e:dr())}function R7(e){for(;!Xf(ni());)dr();return cu(e,Kt)}function M7(e){return T7(Dl("",null,null,null,[""],e=P7(e),0,[0],e))}function Dl(e,t,r,n,i,a,s,l,c){for(var u=0,f=0,h=s,m=0,w=0,x=0,j=1,E=1,g=1,p=0,v="",k=i,z=a,y=n,C=v;E;)switch(x=p,p=dr()){case 40:if(x!=108&&it(C,h-1)==58){Nl(C+=fe(xd(p),"&","&\f"),"&\f",S4(u?l[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=xd(p);break;case 9:case 10:case 13:case 32:C+=L7(x);break;case 92:C+=A7(Ol()-1,7);continue;case 47:switch(ni()){case 42:case 47:pa(N7(I7(dr(),Ol()),t,r,c),c);break;default:C+="/"}break;case 123*j:l[u++]=yr(C)*g;case 125*j:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+f:g==-1&&(C=fe(C,/\f/g,"")),w>0&&yr(C)-h&&pa(w>32?pm(C+";",n,r,h-1,c):pm(fe(C," ","")+";",n,r,h-2,c),c);break;case 59:C+=";";default:if(pa(y=hm(C,t,r,u,f,i,l,v,k=[],z=[],h,a),a),p===123)if(f===0)Dl(C,t,y,y,k,a,h,l,z);else switch(m===99&&it(C,3)===110?100:m){case 100:case 108:case 109:case 115:Dl(e,y,y,n&&pa(hm(e,y,y,0,0,i,l,v,i,k=[],h,z),z),i,z,h,l,n?k:z);break;default:Dl(C,y,y,y,[""],z,0,l,z)}}u=f=w=0,j=g=1,v=C="",h=s;break;case 58:h=1+yr(C),w=x;default:if(j<1){if(p==123)--j;else if(p==125&&j++==0&&$7()==125)continue}switch(C+=$1(p),p*j){case 38:g=f>0?1:(C+="\f",-1);break;case 44:l[u++]=(yr(C)-1)*g,g=1;break;case 64:ni()===45&&(C+=xd(dr())),m=ni(),f=h=yr(v=C+=R7(Ol())),p++;break;case 45:x===45&&yr(C)==2&&(j=0)}}return a}function hm(e,t,r,n,i,a,s,l,c,u,f,h){for(var m=i-1,w=i===0?a:[""],x=E4(w),j=0,E=0,g=0;j<n;++j)for(var p=0,v=jo(e,m+1,m=S4(E=s[j])),k=e;p<x;++p)(k=C4(E>0?w[p]+" "+v:fe(v,/&\f/g,w[p])))&&(c[g++]=k);return lu(e,t,r,i===0?au:l,c,u,f,h)}function N7(e,t,r,n){return lu(e,t,r,j4,$1(_7()),jo(e,2,-2),0,n)}function pm(e,t,r,n,i){return lu(e,t,r,_1,jo(e,0,n),jo(e,n+1,-1),n,i)}function _4(e,t,r){switch(E7(e,t)){case 5103:return je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+e+e;case 4789:return za+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return je+e+za+e+Re+e+e;case 5936:switch(it(e,t+11)){case 114:return je+e+Re+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return je+e+Re+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return je+e+Re+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return je+e+Re+e+e;case 6165:return je+e+Re+"flex-"+e+e;case 5187:return je+e+fe(e,/(\w+).+(:[^]+)/,je+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return je+e+Re+"flex-item-"+fe(e,/flex-|-self/g,"")+(Ir(e,/flex-|baseline/)?"":Re+"grid-row-"+fe(e,/flex-|-self/g,""))+e;case 4675:return je+e+Re+"flex-line-pack"+fe(e,/align-content|flex-|-self/g,"")+e;case 5548:return je+e+Re+fe(e,"shrink","negative")+e;case 5292:return je+e+Re+fe(e,"basis","preferred-size")+e;case 6060:return je+"box-"+fe(e,"-grow","")+je+e+Re+fe(e,"grow","positive")+e;case 4554:return je+fe(e,/([^-])(transform)/g,"$1"+je+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+e+e;case 4200:if(!Ir(e,/flex-|baseline/))return Re+"grid-column-align"+jo(e,t)+e;break;case 2592:case 3360:return Re+fe(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,Ir(n.props,/grid-\w+-end/)})?~Nl(e+(r=r[t].value),"span",0)?e:Re+fe(e,"-start","")+e+Re+"grid-row-span:"+(~Nl(r,"span",0)?Ir(r,/\d+/):+Ir(r,/\d+/)-+Ir(e,/\d+/))+";":Re+fe(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Ir(n.props,/grid-\w+-start/)})?e:Re+fe(fe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yr(e)-1-t>6)switch(it(e,t+1)){case 109:if(it(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+za+(it(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Nl(e,"stretch",0)?_4(fe(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return fe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,a,s,l,c,u){return Re+i+":"+a+u+(s?Re+i+"-span:"+(l?c:+c-+a)+u:"")+e});case 4949:if(it(e,t+6)===121)return fe(e,":",":"+je)+e;break;case 6444:switch(it(e,it(e,14)===45?18:11)){case 120:return fe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(it(e,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Re+"$2box$3")+e;case 100:return fe(e,":",":"+Re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(e,"scroll-","scroll-snap-")+e}return e}function wc(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function O7(e,t,r,n){switch(e.type){case C7:if(e.children.length)break;case S7:case _1:return e.return=e.return||e.value;case j4:return"";case k4:return e.return=e.value+"{"+wc(e.children,n)+"}";case au:if(!yr(e.value=e.props.join(",")))return""}return yr(r=wc(e.children,n))?e.return=e.value+"{"+r+"}":""}function D7(e){var t=E4(e);return function(r,n,i,a){for(var s="",l=0;l<t;l++)s+=e[l](r,n,i,a)||"";return s}}function F7(e){return function(t){t.root||(t=t.return)&&e(t)}}function B7(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case _1:e.return=_4(e.value,e.length,r);return;case k4:return wc([un(e,{value:fe(e.value,"@","@"+je)})],n);case au:if(e.length)return z7(r=e.props,function(i){switch(Ir(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zi(un(e,{props:[fe(i,/:(read-\w+)/,":"+za+"$1")]})),zi(un(e,{props:[i]})),Yf(e,{props:fm(r,n)});break;case"::placeholder":zi(un(e,{props:[fe(i,/:(plac\w+)/,":"+je+"input-$1")]})),zi(un(e,{props:[fe(i,/:(plac\w+)/,":"+za+"$1")]})),zi(un(e,{props:[fe(i,/:(plac\w+)/,Re+"input-$1")]})),zi(un(e,{props:[i]})),Yf(e,{props:fm(r,n)});break}return""})}}var U7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},So=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",$4="active",P4="data-styled-version",uu="6.1.11",P1=`/*!sc*/
`,T1=typeof window<"u"&&"HTMLElement"in window,H7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),W7={},du=Object.freeze([]),Co=Object.freeze({});function T4(e,t,r){return r===void 0&&(r=Co),e.theme!==r.theme&&e.theme||t||r.theme}var L4=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),V7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,G7=/(^-|-$)/g;function mm(e){return e.replace(V7,"-").replace(G7,"")}var q7=/(a)(d)/gi,rl=52,gm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kf(e){var t,r="";for(t=Math.abs(e);t>rl;t=t/rl|0)r=gm(t%rl)+r;return(gm(t%rl)+r).replace(q7,"$1-$2")}var yd,A4=5381,eo=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},I4=function(e){return eo(A4,e)};function L1(e){return Kf(I4(e)>>>0)}function Y7(e){return e.displayName||e.name||"Component"}function wd(e){return typeof e=="string"&&!0}var R4=typeof Symbol=="function"&&Symbol.for,M4=R4?Symbol.for("react.memo"):60115,X7=R4?Symbol.for("react.forward_ref"):60112,Q7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},K7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},N4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z7=((yd={})[X7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yd[M4]=N4,yd);function vm(e){return("type"in(t=e)&&t.type.$$typeof)===M4?N4:"$$typeof"in e?Z7[e.$$typeof]:Q7;var t}var J7=Object.defineProperty,e9=Object.getOwnPropertyNames,xm=Object.getOwnPropertySymbols,t9=Object.getOwnPropertyDescriptor,r9=Object.getPrototypeOf,ym=Object.prototype;function O4(e,t,r){if(typeof t!="string"){if(ym){var n=r9(t);n&&n!==ym&&O4(e,n,r)}var i=e9(t);xm&&(i=i.concat(xm(t)));for(var a=vm(e),s=vm(t),l=0;l<i.length;++l){var c=i[l];if(!(c in K7||r&&r[c]||s&&c in s||a&&c in a)){var u=t9(t,c);try{J7(e,c,u)}catch{}}}}return e}function Eo(e){return typeof e=="function"}function A1(e){return typeof e=="object"&&"styledComponentId"in e}function Jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bc(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Qa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zf(e,t,r){if(r===void 0&&(r=!1),!r&&!Qa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Zf(e[n],t[n]);else if(Qa(t))for(var n in t)e[n]=Zf(e[n],t[n]);return e}function I1(e,t){Object.defineProperty(e,"toString",{value:t})}function ms(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var n9=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,a=i;t>=a;)if((a<<=1)<0)throw ms(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,r.length);s<c;s++)this.tag.insertRule(l,r[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var a=n;a<i;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n,s=i;s<a;s++)r+="".concat(this.tag.getRule(s)).concat(P1);return r},e}(),Fl=new Map,jc=new Map,Bl=1,nl=function(e){if(Fl.has(e))return Fl.get(e);for(;jc.has(Bl);)Bl++;var t=Bl++;return Fl.set(e,t),jc.set(t,e),t},i9=function(e,t){Bl=t+1,Fl.set(e,t),jc.set(t,e)},o9="style[".concat(So,"][").concat(P4,'="').concat(uu,'"]'),a9=new RegExp("^".concat(So,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),s9=function(e,t,r){for(var n,i=r.split(","),a=0,s=i.length;a<s;a++)(n=i[a])&&e.registerName(t,n)},l9=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(P1),i=[],a=0,s=n.length;a<s;a++){var l=n[a].trim();if(l){var c=l.match(a9);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(i9(f,u),s9(e,f,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function c9(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var D4=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(So,"]")));return c[c.length-1]}(r),a=i!==void 0?i.nextSibling:null;n.setAttribute(So,$4),n.setAttribute(P4,uu);var s=c9();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},u9=function(){function e(t){this.element=D4(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,a=n.length;i<a;i++){var s=n[i];if(s.ownerNode===r)return s}throw ms(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),d9=function(){function e(t){this.element=D4(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),f9=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wm=T1,h9={isServer:!T1,useCSSOMInjection:!H7},kc=function(){function e(t,r,n){t===void 0&&(t=Co),r===void 0&&(r={});var i=this;this.options=pt(pt({},h9),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&T1&&wm&&(wm=!1,function(a){for(var s=document.querySelectorAll(o9),l=0,c=s.length;l<c;l++){var u=s[l];u&&u.getAttribute(So)!==$4&&(l9(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),I1(this,function(){return function(a){for(var s=a.getTag(),l=s.length,c="",u=function(h){var m=function(g){return jc.get(g)}(h);if(m===void 0)return"continue";var w=a.names.get(m),x=s.getGroup(h);if(w===void 0||x.length===0)return"continue";var j="".concat(So,".g").concat(h,'[id="').concat(m,'"]'),E="";w!==void 0&&w.forEach(function(g){g.length>0&&(E+="".concat(g,","))}),c+="".concat(x).concat(j,'{content:"').concat(E,'"}').concat(P1)},f=0;f<l;f++)u(f);return c}(i)})}return e.registerId=function(t){return nl(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(pt(pt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new f9(i):n?new u9(i):new d9(i)}(this.options),new n9(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(nl(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(nl(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(nl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),p9=/&/g,m9=/^\s*\/\/.*$/gm;function F4(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=F4(r.children,t)),r})}function g9(e){var t,r,n,i=Co,a=i.options,s=a===void 0?Co:a,l=i.plugins,c=l===void 0?du:l,u=function(m,w,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):m},f=c.slice();f.push(function(m){m.type===au&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(p9,r).replace(n,u))}),s.prefix&&f.push(B7),f.push(O7);var h=function(m,w,x,j){w===void 0&&(w=""),x===void 0&&(x=""),j===void 0&&(j="&"),t=j,r=w,n=new RegExp("\\".concat(r,"\\b"),"g");var E=m.replace(m9,""),g=M7(x||w?"".concat(x," ").concat(w," { ").concat(E," }"):E);s.namespace&&(g=F4(g,s.namespace));var p=[];return wc(g,D7(f.concat(F7(function(v){return p.push(v)})))),p};return h.hash=c.length?c.reduce(function(m,w){return w.name||ms(15),eo(m,w.name)},A4).toString():"",h}var v9=new kc,Jf=g9(),B4=ce.createContext({shouldForwardProp:void 0,styleSheet:v9,stylis:Jf});B4.Consumer;ce.createContext(void 0);function e0(){return b.useContext(B4)}var U4=function(){function e(t,r){var n=this;this.inject=function(i,a){a===void 0&&(a=Jf);var s=n.name+a.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,I1(this,function(){throw ms(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Jf),this.name+t.hash},e}(),x9=function(e){return e>="A"&&e<="Z"};function bm(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;x9(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var H4=function(e){return e==null||e===!1||e===""},W4=function(e){var t,r,n=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!H4(a)&&(Array.isArray(a)&&a.isCss||Eo(a)?n.push("".concat(bm(i),":"),a,";"):Qa(a)?n.push.apply(n,bo(bo(["".concat(i," {")],W4(a),!1),["}"],!1)):n.push("".concat(bm(i),": ").concat((t=i,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in U7||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function zn(e,t,r,n){if(H4(e))return[];if(A1(e))return[".".concat(e.styledComponentId)];if(Eo(e)){if(!Eo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return zn(i,t,r,n)}var a;return e instanceof U4?r?(e.inject(r,n),[e.getName(n)]):[e]:Qa(e)?W4(e):Array.isArray(e)?Array.prototype.concat.apply(du,e.map(function(s){return zn(s,t,r,n)})):[e.toString()]}function V4(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Eo(r)&&!A1(r))return!1}return!0}var y9=I4(uu),w9=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&V4(t),this.componentId=r,this.baseHash=eo(y9,r),this.baseStyle=n,kc.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Jn(i,this.staticRulesId);else{var a=bc(zn(this.rules,t,r,n)),s=Kf(eo(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,s)){var l=n(a,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,l)}i=Jn(i,s),this.staticRulesId=s}else{for(var c=eo(this.baseHash,n.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var m=bc(zn(h,t,r,n));c=eo(c,m+f),u+=m}}if(u){var w=Kf(c>>>0);r.hasNameForId(this.componentId,w)||r.insertRules(this.componentId,w,n(u,".".concat(w),void 0,this.componentId)),i=Jn(i,w)}}return i},e}(),R1=ce.createContext(void 0);R1.Consumer;var bd={};function b9(e,t,r){var n=A1(e),i=e,a=!wd(e),s=t.attrs,l=s===void 0?du:s,c=t.componentId,u=c===void 0?function(k,z){var y=typeof k!="string"?"sc":mm(k);bd[y]=(bd[y]||0)+1;var C="".concat(y,"-").concat(L1(uu+y+bd[y]));return z?"".concat(z,"-").concat(C):C}(t.displayName,t.parentComponentId):c,f=t.displayName,h=f===void 0?function(k){return wd(k)?"styled.".concat(k):"Styled(".concat(Y7(k),")")}(e):f,m=t.displayName&&t.componentId?"".concat(mm(t.displayName),"-").concat(t.componentId):t.componentId||u,w=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(n&&i.shouldForwardProp){var j=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;x=function(k,z){return j(k,z)&&E(k,z)}}else x=j}var g=new w9(r,m,n?i.componentStyle:void 0);function p(k,z){return function(y,C,S){var P=y.attrs,L=y.componentStyle,I=y.defaultProps,O=y.foldedComponentIds,U=y.styledComponentId,W=y.target,K=ce.useContext(R1),ue=e0(),J=y.shouldForwardProp||ue.shouldForwardProp,R=T4(C,K,I)||Co,N=function(ke,D,ie){for(var Ne,we=pt(pt({},D),{className:void 0,theme:ie}),qe=0;qe<ke.length;qe+=1){var rn=Eo(Ne=ke[qe])?Ne(we):Ne;for(var ze in rn)we[ze]=ze==="className"?Jn(we[ze],rn[ze]):ze==="style"?pt(pt({},we[ze]),rn[ze]):rn[ze]}return D.className&&(we.className=Jn(we.className,D.className)),we}(P,C,R),A=N.as||W,B={};for(var G in N)N[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&N.theme===R||(G==="forwardedAs"?B.as=N.forwardedAs:J&&!J(G,A)||(B[G]=N[G]));var ye=function(ke,D){var ie=e0(),Ne=ke.generateAndInjectStyles(D,ie.styleSheet,ie.stylis);return Ne}(L,N),ae=Jn(O,U);return ye&&(ae+=" "+ye),N.className&&(ae+=" "+N.className),B[wd(A)&&!L4.has(A)?"class":"className"]=ae,B.ref=S,b.createElement(A,B)}(v,k,z)}p.displayName=h;var v=ce.forwardRef(p);return v.attrs=w,v.componentStyle=g,v.displayName=h,v.shouldForwardProp=x,v.foldedComponentIds=n?Jn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=m,v.target=n?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(z){for(var y=[],C=1;C<arguments.length;C++)y[C-1]=arguments[C];for(var S=0,P=y;S<P.length;S++)Zf(z,P[S],!0);return z}({},i.defaultProps,k):k}}),I1(v,function(){return".".concat(v.styledComponentId)}),a&&O4(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function jm(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var km=function(e){return Object.assign(e,{isCss:!0})};function ve(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Eo(e)||Qa(e))return km(zn(jm(du,bo([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?zn(n):km(zn(jm(n,t)))}function t0(e,t,r){if(r===void 0&&(r=Co),!t)throw ms(1,t);var n=function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,r,ve.apply(void 0,bo([i],a,!1)))};return n.attrs=function(i){return t0(e,t,pt(pt({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return t0(e,t,pt(pt({},r),i))},n}var G4=function(e){return t0(b9,e)},d=G4;L4.forEach(function(e){d[e]=G4(e)});var j9=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=V4(t),kc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,i){var a=i(bc(zn(this.rules,r,n,i)),""),s=this.componentId+t;n.insertRules(s,s,a)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,i){t>2&&kc.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,i)},e}();function k9(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=ve.apply(void 0,bo([e],t,!1)),i="sc-global-".concat(L1(JSON.stringify(n))),a=new j9(n,i),s=function(c){var u=e0(),f=ce.useContext(R1),h=ce.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(h,c,u.styleSheet,f,u.stylis),ce.useLayoutEffect(function(){if(!u.styleSheet.server)return l(h,c,u.styleSheet,f,u.stylis),function(){return a.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,f,u.stylis]),null};function l(c,u,f,h,m){if(a.isStatic)a.renderStyles(c,W7,f,m);else{var w=pt(pt({},u),{theme:T4(u,h,s.defaultProps)});a.renderStyles(c,w,f,m)}}return ce.memo(s)}function Q(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=bc(ve.apply(void 0,bo([e],t,!1))),i=L1(n);return new U4(i,n)}const S9=ve`
  @keyframes activeEffect {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: activeEffect 0.2s ease-out forwards;
`,No=d.button`
  font-family: var(--font-secondary);
  font-weight: 700;
  color: ${e=>e.$invert?e.color||"var(--primary-color-dark-3)":"#fff"};
  background: ${e=>e.$invert?"transparent":`${e.color||"black"}`};

  padding: 0;
  font-weight: 500;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    border 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: none;
  z-index: 1;

  &:before,
  &:after {
    position: absolute;
    content: "";
    background: ${e=>e.color||"var(--primary-color-dark-3)"};
    transition: all 0.3s ease;
  }

  &:before {
    height: ${e=>e.$invert?"100%":"0%"};
    width: 2px;
    right: 0;
    top: 0;
  }

  &:after {
    width: ${e=>e.$invert?"100%":"0%"};
    height: 2px;
    right: 0;
    top: 0;
  }

  &:hover {
    background: ${e=>e.$invert?e.color||"black":"transparent"};

    &:before {
      height: ${e=>e.$invert?"0%":"100%"};
    }

    &:after {
      width: ${e=>e.$invert?"0%":"100%"};
    }

    span {
      color: ${e=>e.$invert?"#fff":e.color||"var(--primary-color-dark-3)"};

      &:before {
        height: ${e=>e.$invert?"0%":"100%"};
      }

      &:after {
        width: ${e=>e.$invert?"0%":"100%"};
      }
      svg {
        color: inherit;
        &:before {
          height: inherit;
        }
        &:after {
          width: inherit;
        }
      }
    }
  }

  // Prevent color change on focus
  &:focus {
    /* outline: none; */
    background: ${e=>e.$invert?"transparent":`${e.color||"black"}`};

    // Add focus animation
    transform: scale(1.01);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    outline: none;
    border: none;
    span {
      font-weight: 700;
      color: ${e=>e.$invert?e.color||"var(--primary-color-dark-3)":"#fff"};
    }
  }

  // Active state animation
  &:active {
    ${S9}
  }

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.1rem;
    font-size: var(--font-size-h5);
    transition: color 0.3s ease;
    color: ${e=>e.$textcolor||"inherit"};
    &:before,
    &:after {
      position: absolute;
      content: "";
      background: ${e=>e.color||"var(--primary-color-dark-3)"};
      transition: all 0.3s ease;
    }

    &:before {
      width: 2px;
      height: ${e=>e.$invert?"100%":"0%"};
      left: 0;
      bottom: 0;
    }

    &:after {
      width: ${e=>e.$invert?"100%":"0%"};
      height: 2px;
      left: 0;
      bottom: 0;
    }
  }

  // Responsive adjustments for small screens
  @media (max-width: 600px) {
    font-size: var(--font-size-body);
    span {
      padding: 0.4rem 0.8rem;
      font-size: var(--font-size-body);
    }

    &:hover {
      transform: scale(1.01);
    }
  }
`,C9=d(No)`
  span {
    padding: 1rem 2rem;
    font-size: var(--font-size-h4);
  }
`,E9=d(No)`
  span {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-h5);
  }
`,z9=d(No)`
  span {
    padding: 0.6rem 0.9rem;
    font-size: var(--font-size-h6);
  }
`,_9=d(No)`
  span {
    padding: 0.4rem 0.8rem;
    font-size: var(--font-size-h6);
  }
`,$9=d(No)`
  span {
    padding: 0.3rem 0.6rem;
    font-size: var(--font-size-body);
  }
`,Xe=({size:e,color:t,children:r,onClick:n,$invert:i,textcolor:a})=>{let s=No;switch(e){case"big":s=C9;break;case"medium":s=E9;break;case"small":s=z9;break;case"extra-small":s=_9;break;case"mini":s=$9;break}return o.jsx(s,{color:t,onClick:n,$invert:i,$textcolor:a,children:o.jsx("span",{children:r})})},P9="/assets/background-home1-BBGGLuDD.jpeg",T9="/assets/background-home1-mobile-DxYh-8KP.jpeg",q4=Q`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,L9=Q`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,M1=Q`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,N1=Q`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;Q`
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(.9, .9, .9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(.97, .97, .97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;Q`
  20% {
    transform: scale3d(.9, .9, .9);
  }
  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  100% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
`;Q`
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  100% {
    transform: none;
  }
`;Q`
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    transform: none;
  }
`;Q`
  0% {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  100% {
    transform: none;
  }
`;Q`
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  100% {
    transform: none;
  }
`;Q`
  0% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;Q`
  0% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
  100% {

    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Q`
  0% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;Q`
  0% {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  100% {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`;const A9=Q`
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
`,Y4=Q`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`,O1=Q`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Q`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Q`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Q`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Q`
  0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) rotateY(-180deg);
    animation-timing-function: ease-out;
  }
  60% {
    transform: perspective(400px) rotateY(-180deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateY(-360deg);
    animation-timing-function: ease-in;
  }
`;Q`
  0% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-10deg);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  70% {
    transform: perspective(400px) rotateX(10deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateX(0);
    animation-timing-function: ease-in;
  }
`;Q`
  0% {
    transform: perspective(400px) rotateY(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateY(-10deg);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  70% {
    transform: perspective(400px) rotateY(10deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-in;
  }
`;Q`
  0% {
    transform: perspective(400px) rotateX(0);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  30% {
    transform: perspective(400px) rotateX(-20deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
`;Q`
  0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  30% {
    transform: perspective(400px) rotateY(-20deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateY(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
`;const I9=Q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;Q`
  0% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  100% {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`;Q`
  0% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 0deg);
    opacity: 1;
  }
  100% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;Q`
  0% {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;Q`
  0% {
    opacity: 1;
  }
  100% {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`;Q`
  0% {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(-20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(5deg);
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;Q`
  0% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
`;Q`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;Q`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Q`
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;Q`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;const X4=Q`
0% {
  box-shadow: 0 0 10px rgba(255, 183, 195, 0.4);
}
50% {
  box-shadow: 0 0 20px rgba(255, 183, 195, 0.7);
}
100% {
  box-shadow: 0 0 10px rgba(255, 183, 195, 0.4);
}
`,Q4=Q`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
`,K4=Q`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`,fu=Q`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,Z4=Q`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,J4=Q`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`,R9=ve`
  position: relative;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      var(--primary-color-dark-5),
      transparent
    );
    transition:
      transform 0.8s ease-out,
      opacity 0.8s ease-out;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: 0;
    border-radius: 50%;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: color 0.8s ease-out;
  }

  &:hover svg {
    color: white;
  }
`,M9=Q`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,D1=Q`
  0% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`,e5=Q`
  0% {
    transform: rotateY(0);
    opacity: 1;
  }
  100% {
    transform: rotateY(90deg);
    opacity: 0;
  }
`,N9=Q`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,O9=Q`
  from {
    height: 60px;
  }
  to {
    height: 50px;
  }
`,D9=Q`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,F9=Q`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
`;Q` 
  from {
    filter: contrast(190%) brightness(500%);
  }

  to {
    filter: contrast(190%) brightness(130%);
  }
`;const oe=d.div`
  ${e=>e.as==="h1"&&ve`
      font-family: var(--font-primary);
      font-size: var(--font-size-h1);
      color: black;
      margin-bottom: ${e.$marginBottom||"var(--spacing-sm)"};
      position: relative;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      display: inline-block;
      &::before {
        content: "";
        display: block;
        width: 100px;
        height: 4px;
        background: var(--primary-color);
        margin: 1rem auto;
      }
    `}
  ${e=>e.as==="h2"&&ve`
      font-size: var(--font-size-h2);
      font-weight: 600;
      color: var(--text-color);
      background: linear-gradient(
        135deg,
        ${e.$customBackground?"#fff":"#000"},
        var(--primary-color)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${e.$marginBottom||"var(--spacing-sm)"};
    `}
  ${e=>e.as==="h3"&&ve`
      font-size: var(--font-size-h3);
      font-weight: 500;
      color: var(--text-color);
      background: linear-gradient(
        135deg,
        ${e.$customBackground?"#fff":"#000"},
        var(--primary-color)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${e.$marginBottom||"var(--spacing-sm)"};
    `}
  ${e=>e.as==="h4"&&ve`
      font-size: var(--font-size-h4);
      font-weight: 700;
      color: ${e.$colorText||"var(--primary-color-dark-2)"};
      margin-bottom: ${e.$marginBottom||"var(--spacing-sm)"};
    `}
  ${e=>e.as==="h5"&&ve`
      font-size: var(--font-size-h5);
      font-weight: 700;
      color: ${e.$colorText||"var(--primary-color-dark-2)"};
      margin-bottom: ${e.$marginBottom||"var(--spacing-sm)"};
    `}
    ${e=>e.as==="h6"&&ve`
      font-size: var(--font-size-h6);
      font-weight: 300;
      color: ${e.$colorText||"var(--primary-color-dark-2)"};
      margin-bottom: ${e.$marginBottom||"var(--spacing-sm)"};
    `}

  line-height: 1.4;
`;oe.defaultProps={$customBackground:!1};const B9=d.section`
  display: flex;
  height: 100vh;
  background: url(${P9}) no-repeat center center / cover;
  position: relative;
  overflow: hidden;
  align-items: center;
  animation: backgroundMove 30s infinite linear;
  background-attachment: fixed; // Parallax effect

  @keyframes backgroundMove {
    0% {
      background-position: center center;
    }
    50% {
      background-position: center top;
    }
    100% {
      background-position: center center;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    background-image: url(${T9});
    background-size: cover;
    background-position: center top;
    height: 60vh;
    background-attachment: scroll; // Disable parallax on mobile
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.2)
    );
    z-index: 0;
  }
`,U9=d.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  animation: ${O1} 1.5s var(--transition-quick);
  z-index: 1;
`,H9=d(oe).attrs({as:"h1"})`
  color: white;
  margin-bottom: var(--spacing-lg);
  animation: ${O1} 2s var(--transition-normal);
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  font-family: "Playfair Display", serif; // Elegant font style
  font-size: 3.5rem; // Larger font size for impact

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,W9=d(oe).attrs({as:"h3"})`
  animation: ${O1} 2.5s var(--transition-normal);
  z-index: 1;
  margin-bottom: var(--spacing-lg);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  font-family: "Playfair Display", serif;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,V9=()=>o.jsx(B9,{children:o.jsxs(U9,{children:[o.jsx(H9,{children:"Welcome to Arome Jardin"}),o.jsx(W9,{$customBackground:!0,children:"Discover the Essence of Beauty"}),o.jsx(re,{to:"/all-products",children:o.jsx(Xe,{color:"black",children:"Explore Now"})})]})}),G9="/assets/moisturizer-B1lksZ-z.jpeg",q9=e=>b.createElement("svg",{fill:"#000000",height:"800px",width:"800px",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512.027 512.027",xmlSpace:"preserve",...e},b.createElement("g",{transform:"translate(-1 -1)"},b.createElement("g",null,b.createElement("path",{d:"M464.947,175.382C435.004-5.628,258.382,1.019,257.446,1.037C255.671,1.002,79.023-5.584,49.079,175.382 c-5.65,34.18-4.59,70.497,3.151,107.935l42.69,206.31c1.342,6.541,5.932,11.723,12.244,13.868 c6.347,2.136,13.135,0.821,18.185-3.566l43.629-37.816v42.087c0,4.873,3.946,8.828,8.828,8.828s8.828-3.955,8.828-8.828v-44.581 c0.86,0.576,1.719,1.15,2.576,1.723l8.466,5.685c3.346,2.26,6.603,4.679,9.852,7.08c14.142,10.452,28.76,21.266,49.32,21.266 s35.178-10.805,49.311-21.257c3.257-2.41,6.524-4.829,9.869-7.089l7.724-5.208c1.37-0.919,2.747-1.844,4.124-2.77v45.152 c0,4.873,3.946,8.828,8.828,8.828c4.882,0,8.828-3.955,8.828-8.828V462.53l43.147,37.398c3.469,3.001,7.751,4.573,12.138,4.573 c2.013,0,4.052-0.335,6.047-1.006c6.312-2.145,10.902-7.327,12.244-13.859l42.69-206.318 C469.537,245.879,470.597,209.562,464.947,175.382z M313.926,447.155l-7.812,5.252c-3.54,2.401-7,4.961-10.452,7.512 c-12.385,9.145-24.073,17.796-38.815,17.796s-26.439-8.651-38.815-17.805c-3.452-2.551-6.903-5.102-10.443-7.503l-8.563-5.747 c-5.044-3.373-10.151-6.79-15.187-10.321c-0.584-0.548-1.24-1.018-1.957-1.392c-8.049-5.717-15.874-11.746-22.898-18.407 c-40.024-38.003-43.379-97.192-43.379-149.689c0-37.058,7.556-66.639,12.615-82.291c13.444,11.423,39.495,28.328,75.847,28.328 c3.761,0,7.097-2.383,8.333-5.923c1.236-3.549,0.088-7.495-2.86-9.825c-13.692-10.849-33.474-31.691-32.45-41.966 c0.071-0.706,0.221-2.172,2.516-3.849C196.536,153.267,295.423,169.166,394.16,282c2.684,3.063,4.14,7.018,4.096,11.123 c-0.247,25.07-4.97,87.269-43.502,123.374C342.474,428.017,327.961,437.745,313.926,447.155z M444.502,279.742l-42.69,206.327 c-0.035,0.159-0.106,0.53-0.627,0.706c-0.521,0.185-0.821-0.079-0.936-0.185l-49.998-43.335 c5.709-4.342,11.283-8.919,16.569-13.879c43.511-40.766,48.825-108.738,49.09-136.077c0.079-8.448-2.922-16.587-8.457-22.916 v-0.009C294.699,141.526,182.801,133.723,178.078,133.449c-1.554-0.079-3.107,0.247-4.493,0.953 c-10.602,5.385-13.497,13.321-14.062,19.032c-1.271,12.721,8.227,26.898,18.308,38.118c-29.29-8.386-46.212-28.195-46.415-28.434 c-1.933-2.348-4.979-3.513-7.989-3.116c-3.028,0.415-5.623,2.357-6.868,5.146c-0.759,1.695-18.609,42.284-18.609,101.703 c0,60.292,5.923,121.715,48.878,162.489c5.326,5.052,10.96,9.697,16.738,14.085l-49.79,43.164 c-0.115,0.106-0.415,0.371-0.936,0.185c-0.521-0.177-0.591-0.547-0.627-0.715l-42.69-206.318 c-7.3-35.301-8.324-69.447-3.028-101.482C93.853,12.946,250.022,18.348,257.446,18.675c6.656-0.327,162.684-6.047,190.084,159.585 C452.827,210.295,451.803,244.44,444.502,279.742z"})))),Y9=e=>b.createElement("svg",{fill:"#000000",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"800px",height:"800px",viewBox:"0 0 155.888 155.889",xmlSpace:"preserve",...e},b.createElement("g",null,b.createElement("path",{d:"M122.011,33.371h-14.687V22.03c0-2.217-1.796-4.01-4.019-4.01H81.958V4.009C81.958,1.796,80.155,0,77.945,0 c-2.214,0-4.01,1.79-4.01,4.009v14.011H52.568c-2.213,0-4.01,1.793-4.01,4.01v11.341H33.88c-2.213,0-4.01,1.796-4.01,4.01v98.127 c0,2.217,1.796,4.013,4.01,4.013h23.592c2.134,9.353,10.482,16.368,20.472,16.368c9.992,0,18.322-7.016,20.472-16.368H122 c2.217,0,4.019-1.79,4.019-4.013V37.381C126.018,35.161,124.228,33.371,122.011,33.371z M77.951,147.869 c-7.182,0-13.019-5.846-13.019-13.02c0-5.114,6.969-22.188,13.019-35.561c6.053,13.385,13.019,30.446,13.019,35.561 C90.969,142.023,85.124,147.869,77.951,147.869z M118.005,131.501H98.581c-1.242-6.491-5.285-16.928-9.164-26.024h9.566 c2.204,0,4.006-1.791,4.006-4.008c0-2.222-1.79-4.012-4.006-4.012h-13.08c-2.131-4.738-3.817-8.33-4.335-9.414 c-1.328-2.789-5.9-2.789-7.228,0c-0.518,1.084-2.213,4.676-4.338,9.414H56.925c-2.213,0-4.004,1.79-4.004,4.012 c0,2.217,1.791,4.008,4.004,4.008h9.566c-3.885,9.097-7.925,19.546-9.155,26.024H37.902V41.369H52.58c2.213,0,4.003-1.787,4.003-4 V26.024h42.74v11.345c0,2.213,1.79,4,4.007,4h14.687v90.132H118.005z M102.989,57.414c0,2.214-1.79,4.01-4.006,4.01H56.918 c-2.213,0-4.003-1.796-4.003-4.01c0-2.213,1.79-4.01,4.003-4.01h42.064C101.199,53.398,102.989,55.201,102.989,57.414z  M102.989,79.445c0,2.21-1.79,4-4.006,4H56.918c-2.213,0-4.003-1.777-4.003-4c0-2.216,1.79-4.003,4.003-4.003h42.064 C101.199,75.441,102.989,77.223,102.989,79.445z"}))),X9=e=>b.createElement("svg",{fill:"#000000",height:"800px",width:"800px",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 182.004 182.004",xmlSpace:"preserve",...e},b.createElement("g",null,b.createElement("path",{d:"M181.008,77.886c-0.669-4.385-3.278-8.154-7.158-10.342c-3.919-2.209-8.55-2.489-12.704-0.77l-22.922,9.494 c-0.896-2.866-2.055-5.615-3.433-8.231l22.942-9.503c4.154-1.721,7.229-5.193,8.438-9.528c1.197-4.291,0.376-8.801-2.251-12.375 c0,0,0,0,0,0c-5.215-7.092-11.456-13.333-18.548-18.549c-3.574-2.627-8.084-3.449-12.375-2.251 c-4.334,1.209-7.807,4.285-9.528,8.438l-9.503,22.942c-2.617-1.378-5.366-2.537-8.231-3.433l9.494-22.922 c1.721-4.153,1.44-8.784-0.769-12.703c-2.188-3.881-5.957-6.49-10.342-7.159c0,0,0,0,0,0c-8.703-1.327-17.529-1.327-26.233,0 c-4.385,0.669-8.154,3.278-10.342,7.159c-2.209,3.919-2.49,8.55-0.77,12.703l9.494,22.923c-2.866,0.896-5.615,2.055-8.231,3.433 l-9.503-22.942c-1.721-4.154-5.193-7.229-9.528-8.438c-4.29-1.197-8.8-0.376-12.375,2.251C29.54,23.299,23.299,29.54,18.083,36.632 c-2.627,3.573-3.448,8.083-2.251,12.375c1.209,4.334,4.285,7.807,8.438,9.528l22.942,9.503c-1.378,2.617-2.537,5.366-3.433,8.231 l-22.922-9.494c-4.151-1.719-8.782-1.44-12.704,0.77c-3.88,2.188-6.489,5.957-7.158,10.342c-1.328,8.703-1.328,17.529,0,26.232 c0.669,4.385,3.278,8.154,7.158,10.342c2.222,1.252,4.671,1.885,7.133,1.885c1.882,0,3.771-0.37,5.571-1.115l22.922-9.494 c0.896,2.866,2.055,5.615,3.433,8.231l-22.942,9.503c-4.154,1.721-7.229,5.193-8.438,9.528c-1.197,4.291-0.376,8.801,2.251,12.375 c0,0,0,0,0,0c5.215,7.092,11.456,13.333,18.548,18.549c2.497,1.835,5.45,2.789,8.467,2.789c1.301,0,2.615-0.177,3.908-0.538 c4.334-1.209,7.807-4.285,9.528-8.438l9.503-22.942c2.617,1.378,5.366,2.537,8.231,3.433l-9.494,22.922 c-1.721,4.153-1.44,8.784,0.769,12.703c2.188,3.881,5.957,6.49,10.342,7.159c0,0,0,0,0,0c4.352,0.664,8.734,0.996,13.116,0.996 s8.765-0.332,13.117-0.996c4.385-0.669,8.154-3.278,10.342-7.159c2.209-3.919,2.49-8.55,0.77-12.703l-9.494-22.923 c2.866-0.896,5.615-2.055,8.231-3.433l9.503,22.942c1.721,4.154,5.193,7.229,9.528,8.438c1.293,0.361,2.606,0.538,3.908,0.538 c3.017,0,5.97-0.954,8.467-2.79c7.092-5.215,13.333-11.456,18.549-18.548c2.627-3.573,3.448-8.083,2.251-12.375 c-1.209-4.334-4.285-7.807-8.438-9.528l-22.942-9.503c1.378-2.617,2.537-5.366,3.433-8.231l22.922,9.494 c1.799,0.745,3.688,1.115,5.571,1.115c2.461,0,4.911-0.633,7.133-1.885c3.88-2.188,6.489-5.957,7.158-10.342 C182.336,95.415,182.336,86.589,181.008,77.886z M167.169,102.007c-0.009,0.061-0.025,0.163-0.194,0.258 c-0.154,0.086-0.313,0.097-0.471,0.031l-26.051-10.79c0.002-0.168,0.013-0.334,0.013-0.503s-0.011-0.335-0.013-0.503l26.051-10.79 c0.159-0.066,0.317-0.056,0.471,0.031c0.169,0.095,0.185,0.197,0.194,0.258C168.282,87.299,168.282,94.705,167.169,102.007z  M152.687,136.759c0.052,0.188-0.008,0.27-0.045,0.319c-4.376,5.951-9.612,11.188-15.563,15.563 c-0.049,0.037-0.131,0.097-0.319,0.045c-0.169-0.047-0.289-0.152-0.354-0.311l-10.8-26.073c0.235-0.23,0.468-0.463,0.698-0.698 l26.073,10.8C152.535,136.47,152.639,136.589,152.687,136.759z M102.265,166.975c-0.095,0.169-0.197,0.185-0.257,0.194 c-7.304,1.113-14.708,1.113-22.012,0h0c-0.061-0.009-0.162-0.025-0.257-0.194c-0.086-0.153-0.097-0.311-0.031-0.47l10.79-26.051 c0.168,0.002,0.334,0.013,0.503,0.013s0.335-0.011,0.503-0.013l10.791,26.052C102.361,166.664,102.351,166.821,102.265,166.975z  M45.245,152.687c-0.188,0.052-0.27-0.009-0.319-0.045c-5.951-4.376-11.188-9.612-15.563-15.563 c-0.037-0.049-0.097-0.132-0.045-0.319c0.047-0.169,0.152-0.289,0.311-0.354l26.073-10.8c0.23,0.235,0.463,0.468,0.698,0.698 l-10.8,26.073C45.534,152.535,45.415,152.639,45.245,152.687z M29.318,45.245c-0.052-0.188,0.008-0.27,0.045-0.319 c4.376-5.951,9.612-11.188,15.563-15.563c0.036-0.026,0.088-0.065,0.186-0.065c0.038,0,0.082,0.006,0.134,0.021 c0.169,0.047,0.289,0.152,0.354,0.311l10.8,26.073c-0.235,0.23-0.468,0.463-0.698,0.698L29.628,45.6 C29.469,45.534,29.365,45.415,29.318,45.245z M79.739,15.029c0.095-0.169,0.197-0.185,0.257-0.194 C83.648,14.279,87.325,14,91.002,14s7.354,0.279,11.005,0.835c0.061,0.009,0.162,0.025,0.257,0.194 c0.086,0.153,0.097,0.311,0.031,0.47l-10.79,26.051c-0.168-0.002-0.334-0.013-0.503-0.013s-0.335,0.011-0.503,0.013L79.708,15.499 C79.643,15.34,79.653,15.183,79.739,15.029z M136.759,29.317c0.052-0.015,0.096-0.021,0.134-0.021c0.097,0,0.15,0.039,0.186,0.065 c5.951,4.376,11.188,9.612,15.563,15.563c0.037,0.049,0.097,0.132,0.045,0.319c-0.047,0.169-0.152,0.289-0.311,0.354l-26.073,10.8 c-0.23-0.235-0.463-0.468-0.698-0.698l10.8-26.073C136.47,29.469,136.589,29.365,136.759,29.317z M91.002,126.466 c-19.555,0-35.464-15.909-35.464-35.464s15.909-35.464,35.464-35.464s35.464,15.909,35.464,35.464S110.557,126.466,91.002,126.466z  M41.551,91.505L15.5,102.295c-0.159,0.066-0.317,0.055-0.471-0.031c-0.169-0.095-0.185-0.197-0.194-0.258 c-1.114-7.302-1.114-14.708,0-22.01c0.009-0.061,0.025-0.163,0.194-0.258c0.087-0.049,0.176-0.074,0.265-0.074 c0.068,0,0.137,0.014,0.206,0.043l26.051,10.79c-0.002,0.168-0.013,0.334-0.013,0.503S41.549,91.337,41.551,91.505z"}))),Q9=e=>b.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 512 512",id:"Sustainable_growth",xmlns:"http://www.w3.org/2000/svg",...e},b.createElement("path",{d:"M266.81,249.16H405v-18H266.84V198.54c32.71-.65,58.12-10.1,75.56-28.18,24.37-25.28,26.5-60.76,25.6-79.67a24.14,24.14,0,0,0-23.07-23.06c-18.9-.9-54.39,1.23-79.66,25.6a78.91,78.91,0,0,0-7.45,8.27,80.14,80.14,0,0,0-7.46-8.27c-25.28-24.37-60.77-26.5-79.66-25.6a24.13,24.13,0,0,0-23.07,23.06c-.9,18.91,1.23,54.39,25.6,79.67,17.45,18.09,42.87,27.54,75.61,28.18v32.62H112.32v18H248.81v37l-87.24,29.46H112.32v18h41.73v33L117.8,394.41l11,14.29,34.29-26.29L193.81,406v40.11h18v-49l-39.76-30.48V331.11l85.76-29,85.77,29v35.52l-39.77,30.48v49h18V406l30.77-23.59,34.29,26.29,10.95-14.29-36.24-27.78v-33H405v-18H354.06l-87.25-29.46ZM165.61,91.55a6.23,6.23,0,0,1,5.94-6c16-.75,45.91.91,66.32,20.59,14.18,13.67,21.76,34.17,22.63,61-13.91-29-41.94-38.25-43.37-38.71L212,144.65c.29.09,26,8.61,35.62,35.87-27-.81-47.66-8.4-61.41-22.66C166.51,137.45,164.85,107.55,165.61,91.55Z"})),K9=e=>b.createElement("svg",{fill:"#000000",height:"800px",width:"800px",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 405.357 405.357",xmlSpace:"preserve",...e},b.createElement("path",{d:"M394.357,204.417c-1.216-0.238-23.027-4.458-52.295-6.616c0.142-2.689,0.217-5.396,0.217-8.121 c0-84.192-68.496-152.688-152.688-152.688c-84.193,0-152.69,68.496-152.69,152.688c0,17.751,3.056,34.798,8.649,50.659 c-19.522,1.643-33.711,4.388-34.55,4.553l-11,2.157l4.791,10.134c1.477,3.125,36.686,76.783,80.787,99.065 c15.915,8.04,30.8,12.117,44.243,12.119c0.003,0,0.004,0,0.006,0c20.021,0,36.416-9.044,46.732-25.609 c13.534,16.171,32.582,24.884,55.124,24.884c17.957,0,37.921-5.485,59.336-16.304c59.619-30.122,107.536-130.375,109.547-134.629 l4.791-10.134L394.357,204.417z M315.388,140.031c-5.755-4.712-12.383-9.122-19.845-13.163c-9.235-5.002-19.452-9.262-30.387-12.751 c-3.489-10.937-7.749-21.154-12.753-30.391c-4.041-7.461-8.45-14.089-13.163-19.844C273.94,77.627,301.645,105.332,315.388,140.031z  M323.705,180.955h-47.559c-0.501-16.042-2.389-31.621-5.546-46.289C298.94,145.74,318.893,162.32,323.705,180.955z M198.316,55.565 c18.636,4.813,35.216,24.767,46.291,53.107c-14.669-3.157-30.247-5.044-46.291-5.546V55.565z M198.316,120.582 c18.761,0.646,36.62,3.355,52.694,7.679c4.324,16.075,7.033,33.933,7.68,52.693h-60.374V120.582z M198.316,198.405h60.374 c-0.027,0.771-0.056,1.542-0.089,2.31c-14.552,2.7-27.128,6.702-37.613,11.999c-8.372,4.229-15.931,8.743-22.672,13.527V198.405z  M180.865,55.565v47.561c-16.043,0.502-31.622,2.389-46.291,5.546C145.649,80.332,162.23,60.378,180.865,55.565z M180.865,120.582 v60.373h-60.374c0.646-18.76,3.355-36.619,7.68-52.694C144.245,123.937,162.105,121.229,180.865,120.582z M139.94,63.884 c-4.713,5.755-9.122,12.383-13.163,19.844c-5.003,9.236-9.263,19.454-12.752,30.39c-10.937,3.49-21.153,7.749-30.39,12.752 c-7.461,4.041-14.089,8.45-19.844,13.162C77.536,105.331,105.24,77.627,139.94,63.884z M108.581,134.665 c-3.157,14.669-5.045,30.247-5.546,46.29H55.475C60.287,162.32,80.241,145.74,108.581,134.665z M103.035,198.405 c0.468,14.964,2.138,29.525,4.922,43.321c-2.989-0.499-6.083-0.929-9.283-1.284c-23.04-10.862-38.97-25.656-43.199-42.037H103.035z  M157.417,339.265c-5.787,6.386-14.519,11.65-27.59,11.65h-0.004c-10.685-0.001-22.924-3.447-36.376-10.243 c-29.693-15.003-56.48-60.004-67.527-80.536c11.003-1.574,28.615-3.564,47.309-3.564c24.886,0,44.258,3.412,57.579,10.142 c12.003,6.063,21.188,12.85,27.489,20.163c-1.253,12.721,1.173,25.744,7.249,38.511l-88.215-41.304L157.417,339.265z  M145.958,255.082c-2.332-1.349-4.753-2.666-7.282-3.944c-3.584-1.811-7.507-3.408-11.727-4.812 c-3.612-14.809-5.874-30.997-6.458-47.922h60.374v42.683c-5.185,5.374-9.511,11.015-12.972,16.91 C160.374,257.346,153.042,256.365,145.958,255.082z M283.15,335.761c-18.952,9.575-36.269,14.429-51.467,14.429 c-20.277,0-33.407-8.66-41.821-18.749l121.154-77.605l-128.918,65.723c-0.026-0.052-0.055-0.105-0.081-0.157 c-17.251-34.151-0.178-67.36,46.84-91.112c18.769-9.482,45.89-14.29,80.61-14.29c28.598,0,55.445,3.379,70.071,5.613 C365.815,245.721,326.911,313.652,283.15,335.761z"})),Z9=e=>b.createElement("svg",{fill:"#000000",width:"800px",height:"800px",viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},b.createElement("g",{id:"Approved"}),b.createElement("g",{id:"Approved_1_"}),b.createElement("g",{id:"File_Approve"}),b.createElement("g",{id:"Folder_Approved"}),b.createElement("g",{id:"Security_Approved"}),b.createElement("g",{id:"Certificate_Approved"},b.createElement("g",null,b.createElement("path",{d:"M30.538,25.184l-6.115-6.115C26.089,17.094,27,14.621,27,12c0-0.286-0.011-0.584-0.033-0.859    c-0.044-0.551-0.541-0.975-1.076-0.917c-0.551,0.044-0.961,0.526-0.917,1.076C24.991,11.524,25,11.767,25,12    c0,2.421-0.946,4.69-2.662,6.388c-1.309,1.29-2.947,2.144-4.748,2.47c-0.954,0.185-2.122,0.197-3.241-0.012    c-1.783-0.325-3.413-1.184-4.712-2.483C7.937,16.662,7,14.402,7,12c0-4.962,4.038-9,9-9c2.421,0,4.694,0.949,6.399,2.673    c0.388,0.392,1.022,0.396,1.414,0.008c0.393-0.388,0.396-1.021,0.008-1.414C21.737,2.16,18.959,1,16,1C9.935,1,5,5.935,5,12    c0,2.601,0.901,5.063,2.55,7.036l-6.257,6.257c-0.286,0.286-0.372,0.716-0.217,1.09C1.231,26.756,1.596,27,2,27h3v3    c0,0.404,0.244,0.769,0.617,0.924C5.741,30.975,5.871,31,6,31c0.26,0,0.516-0.102,0.707-0.293l7.819-7.819    C15.017,22.955,15.509,23,16,23c0.499,0,0.971-0.042,1.424-0.102l7.809,7.809C25.424,30.898,25.68,31,25.94,31    c0.129,0,0.259-0.025,0.383-0.076c0.374-0.155,0.617-0.52,0.617-0.924v-3h3c0.003,0,0.007,0,0.01,0c0.595-0.028,1.01-0.444,1.01-1    C30.96,25.663,30.793,25.365,30.538,25.184z M7,27.586V26c0-0.552-0.448-1-1-1H4.414l4.547-4.547    c0.062,0.051,0.128,0.096,0.19,0.146c0.154,0.124,0.31,0.245,0.47,0.359c0.092,0.066,0.186,0.128,0.28,0.191    c0.157,0.105,0.315,0.207,0.477,0.303c0.098,0.059,0.197,0.116,0.297,0.171c0.166,0.092,0.334,0.179,0.504,0.262    c0.099,0.048,0.197,0.097,0.297,0.142c0.186,0.084,0.375,0.16,0.565,0.233c0.068,0.026,0.133,0.058,0.202,0.083L7,27.586z     M25.94,25c-0.552,0-1,0.448-1,1v1.586l-5.23-5.231c0.076-0.027,0.149-0.063,0.225-0.092c0.179-0.069,0.357-0.139,0.533-0.217    c0.109-0.049,0.216-0.102,0.324-0.153c0.162-0.079,0.322-0.16,0.479-0.247c0.107-0.059,0.213-0.119,0.318-0.181    c0.156-0.092,0.308-0.188,0.459-0.288c0.1-0.066,0.199-0.131,0.296-0.2c0.158-0.112,0.312-0.23,0.464-0.351    c0.064-0.051,0.132-0.096,0.195-0.148L27.526,25H25.94z"}),b.createElement("path",{d:"M11.376,10.299c-0.402-0.377-1.036-0.356-1.413,0.047c-0.377,0.403-0.356,1.036,0.047,1.413l5.313,4.971    C15.514,16.91,15.76,17,16.005,17s0.491-0.09,0.683-0.27l10.688-10c0.403-0.377,0.424-1.01,0.047-1.413    c-0.378-0.404-1.011-0.424-1.413-0.047l-10.004,9.36L11.376,10.299z"}))),b.createElement("g",{id:"User_Approved"}),b.createElement("g",{id:"ID_Card_Approved"}),b.createElement("g",{id:"Android_Approved"}),b.createElement("g",{id:"Privacy_Approved"}),b.createElement("g",{id:"Approved_2_"}),b.createElement("g",{id:"Message_Approved"}),b.createElement("g",{id:"Upload_Approved"}),b.createElement("g",{id:"Download_Approved"}),b.createElement("g",{id:"Email_Approved"}),b.createElement("g",{id:"Data_Approved"})),J9=d.svg`
  animation: ${I9} 45s linear infinite;
`,ew=d.section`
  padding: 60px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 0 30px 30px;
  }
  @media (max-width: 1260px) {
    padding-top: 0;
  }
`,tw=d.div`
  max-width: 1480px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: 1260px) {
    flex-direction: row;
  }
`,rw=d.div`
  flex: 1;
  color: var(--text-color);
  @media (max-width: 1060px) {
    flex: 1.5;
    width: 85%;
    margin: auto;
  }

  animation: ${M1} 1s ease forwards;
`,nw=d.p`
  margin-bottom: var(--spacing-xxl);
  color: var(--primary-color-dark-4);
  line-height: 1.6;
  font-size: var(--font-size-body);

  @media (max-width: 769px) {
    margin-bottom: var(--spacing-xxl);
  }
`,iw=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`,_i=d.div`
  flex: 1 1 45%;
  border-radius: 15px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  animation: ${X4} 5s infinite;
  padding: 1rem;
  @media (max-width: 769px) {
    margin-bottom: var(--spacing-sm);
  }
  svg {
    flex: 0.2;
    width: 5rem;
    height: auto;
    margin-right: 15px;
    fill: var(--primary-color-light-1);
  }

  div {
    flex: 0.7;
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.5;
  }

  div p {
    color: var(--primary-color-dark-5);
    font-size: var(--font-size-body);
  }

  opacity: 0;
  transform: translateY(20px);
`,ow=d.div`
  display: flex;
  justify-content: flex-start;
  padding-top: var(--spacing-sm);
  @media (max-width: 770px) {
    margin-top: var(--spacing-md);
  }
`,aw=d(oe).attrs({as:"h2"})`
  color: var(--primary-color);
  margin-bottom: 1.4rem;
  text-align: left;
  font-weight: bold;
`,sw=d.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  /* margin-bottom: var(--spacing-lg); */
  @media (max-width: 1060px) {
    flex: 0.5;
  }
  @media (min-width: 769px) {
    margin-bottom: 0;
  }

  animation: ${N1} 1s ease forwards;
`,lw=d.div`
  position: relative;
  width: 100%;
  min-height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    width: 80%;
    min-height: auto;
  }
`,cw=d.div`
  position: relative;
  width: 540px; /* Outer circle width */
  height: 540px; /* Outer circle height */
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    min-width: 100% !important;
    height: 22rem;
    margin-bottom: 1.5rem;
  }
`,uw=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* Prevent SVG from blocking mouse events */
  @media (max-width: 510px) {
    display: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  text {
    font-size: 1.1rem;
    fill: var(--primary-color);
    font-family: var(--font-primary);
    font-weight: 700;
  }
`,dw=d.div`
  position: absolute;
  width: 400px; /* Inner circle width */
  height: 400px; /* Inner circle height */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--background-color);
  @media (max-width: 510px) {
    width: 70%;
    height: auto;
  }
`,fw=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.5s ease;
    object-fit: cover;
    cursor: pointer;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`,hw=()=>{const e=b.useRef(null);return b.useEffect(()=>{const t=new IntersectionObserver((n,i)=>{n.forEach(a=>{a.isIntersecting&&(a.target.querySelectorAll(".feature").forEach((s,l)=>{setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},l*300)}),i.unobserve(a.target))})},{threshold:.5}),r=e.current;return r&&t.observe(r),()=>{r&&t.unobserve(r)}},[]),o.jsx(ew,{children:o.jsxs(tw,{ref:e,children:[o.jsx(sw,{children:o.jsx(lw,{children:o.jsxs(cw,{children:[o.jsx(uw,{children:o.jsxs(J9,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600",children:[o.jsx("defs",{children:o.jsx("path",{d:"M50,300c0-137,113-250,250-250s250,113,250,250s-113,250-250,250S50,437,50,300",id:"textcircle"})}),o.jsx("text",{dy:"0",textLength:"640",children:o.jsx("textPath",{xlinkHref:"#textcircle",children:"Experience True Nature"})})]})}),o.jsx(dw,{children:o.jsx(fw,{children:o.jsx("img",{src:G9,alt:"Natural Beauty Product"})})})]})})}),o.jsxs(rw,{children:[o.jsx(aw,{as:"h2",$marginBottom:"1.4rem",children:"Experience True Nature"}),o.jsx(oe,{as:"h4",$marginBottom:"1.4rem",$colorText:"var(--primary-color-dark-4)",children:"Top-Quality Natural Care"}),o.jsx(nw,{children:"Dive into our exquisite range of natural skincare products, designed to enhance your natural beauty. Enjoy the blend of purity and luxury with every use."}),o.jsxs(iw,{children:[o.jsxs(_i,{className:"feature",children:[o.jsx(Y9,{}),o.jsxs("div",{children:[o.jsx(oe,{as:"h6",$colorText:"var(--primary-color-dark-4)",children:"Instant Nourishment"}),o.jsx("p",{children:"Feel the immediate hydration and softness."})]})]}),o.jsxs(_i,{className:"feature",children:[o.jsx(X9,{}),o.jsxs("div",{children:[o.jsx(oe,{as:"h6",$colorText:"var(--primary-color-dark-4)",children:"Natural Extracts"}),o.jsx("p",{children:"Harness the power of natural extracts for glowing skin."})]})]}),o.jsxs(_i,{className:"feature",children:[o.jsx(K9,{}),o.jsxs("div",{children:[o.jsx(oe,{as:"h6",$colorText:"var(--primary-color-dark-4)",children:"Eco-Friendly"}),o.jsx("p",{children:"Our products are kind to both your skin and the planet."})]})]}),o.jsxs(_i,{className:"feature",children:[o.jsx(Q9,{}),o.jsxs("div",{children:[o.jsx(oe,{as:"h6",$colorText:"var(--primary-color-dark-4)",children:"Chemical-Free"}),o.jsx("p",{children:"Free from harmful chemicals, safe for daily use."})]})]}),o.jsxs(_i,{className:"feature",children:[o.jsx(Z9,{}),o.jsxs("div",{children:[o.jsx(oe,{as:"h6",$colorText:"var(--primary-color-dark-4)",children:"Dermatologist Approved"}),o.jsx("p",{children:"Tested and approved by leading dermatologists."})]})]}),o.jsxs(_i,{className:"feature",children:[o.jsx(q9,{}),o.jsxs("div",{children:[o.jsx(oe,{as:"h6",$colorText:"var(--primary-color-dark-4)",children:"Gentle Formulas"}),o.jsx("p",{children:"Perfect for all skin types, including sensitive skin."})]})]})]}),o.jsx(ow,{children:o.jsx(Xe,{size:"small",children:"Get in Touch"})})]})]})})},pw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEXvrrjurbjysLvxr7rvrrnwrrnwr7rzsbzpqLPuq7btrLfwr7n0sr3xsLvxsLrzsr3nprHrqbT0sbz2tL/sqrXvrbj0s77zsLvqqLPtq7bysbv1tL/op7Lpp7L2tcDqqbT4tsHurLf5tsHoprHrq7bxsbzxrrr1sr3sq7bzsrztrbfzs73srLfmpa/yr7rysbz0sb33tcDyr7vrqrXtrbj4tcDrqrTurrjzsLz7ucT1s77mpbDtqrXurrnqqbPrq7X0s733tL/pqLLtrLbvr7n///9eS5NaAAAAAWJLR0RFjrOoVwAAAx5JREFUOMsdVIuW2lQUvXefFya5QJIJYRymTNoqU6xWrNWRan3+/ze5L7CArJCcs59JKUPUXMREVIFYfeXiaEQEaqhnUyvoimRPkUV9vdmG9cim8CzijpwtZeG9A2/Loa7j3YQdeikirXLGzAWS3IuEa4R06Lr9/dchD81BshgKtGhOSCoEocMgkG58tJIl8is5SkkAnIg4R4ZYo4GvW3vaLlGU8/B6uStpGFD3JUs2uJOQwLs3U0jmArW333zbq1YsTXZPuTQ5CEm7/i2XZpXJHDLaXVbuKdppOqXEQ6BbPUM9usSJJGXvph7cIHNocqNiGZvDPdpwXuCtDhJnfGf7isEMKeT9ucjm+x+CipIcx2dXzxlPFFN18srQCj70Ji0gLnOZeJ1LS5XH56PnM3fBuhj394ochCxczc316MeMV9PKpTknork8TrAQr/qFBzFUtGkIPPzUk0/ysrtrIkcGGcODVpqW2z6+xo8ry+nnd/09Zwdz4bzEbr8cjq7ag0/Pv6QUjwu4xJUJYj6wpnK3KT7PcwzdQ57SIf/qSGRc48RByCfFC4RiUVMpdvktLX0xtdboP9/rUhe0JoREYzgM10jdsi9uUNi5MFlCs9b8YmrEqo8fPi/Jx2VvrjpHoFlLeg/TYMSZslYG7H6fI7lsmtUfjHNhVmemtzVuacmB3HD5sgzMBnD9cxs1QQ2ZoRLk/22wAd14YJiMjPKwISaSCtLScvJMOi18wrVfQKvTzG7ZaKtSWCYKKE1bBa6JGXsd6ExOLOBgemkOqB2p2eDaoLXXvx4XpS30gpkDW/b3x+2V0AQzKwUU+ritcWKtPLE564aTL89b0Wh5FdNREOOXCTVrWpx4bmctfWqOrFhTd2XE5nHqKiw2nP0SzzSAolzvt0MxY48N3T+5ppYfBjL5TB95MrxclkMQi1t5OjLT0nnQ6W5ml2dWfha8qIz/7imS4GG7MBx8REiDIm2qdJt8khd6hu54EPx36emxU5Iz7aVrKdfWF3ZFnPKPywq7z9PteQKcC/WV6sUQLBqfUlFTtVumyciLkK2U8BMB/g+iFi2ViEvuuQAAAABJRU5ErkJggg==",mw=d.section`
  display: flex;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9),
      rgba(240, 240, 240, 0.9)
    ),
    url(${pw}) no-repeat center/cover;
  padding: var(--spacing-md);
  position: relative;
  overflow: hidden;

  & > div:first-child {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: 960px) {
      flex-direction: column;
      height: auto;
      width: 95%;
      row-gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }

  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(20px);
  }
  &.faq-section-visible {
    animation: ${q4} 0.8s ease-in-out forwards;
  }
`,gw=d.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 45%;
  margin-top: 10rem;

  @media (max-width: 960px) {
    margin-top: 1rem;
    width: 90%;
  }
`,vw=d(oe).attrs({as:"h2"})`
  position: relative;
  color: var(--primary-color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    display: block;
    width: 9.375rem;
    height: 4px;
    background-color: var(--primary-color);
    margin: 0.1rem auto;
  }
`,xw=d.div`
  width: 50%;
  padding: var(--spacing-md);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &.animating {
    opacity: 0;
    transform: translateY(15px);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`,yw=d.div`
  border-radius: var(--border-radius-medium);
  overflow: hidden;
`,ww=d.div`
  font-family: var(--font-secondary);
  background: ${e=>e.$isExpanded?"linear-gradient(135deg, var(--primary-color-dark-4) 0%, var(--primary-color-dark-4) 100%)":"var(--background-color)"};

  color: ${e=>e.$isExpanded?"#fff":"var(--dark-grey-color)"};
  padding: var(--spacing-md);
  font-size: var(--font-size-body);
  border: 1px solid var(--light-grey-color);
  border-radius: var(--border-radius-medium);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color var(--transition-quick);
  box-shadow: ${e=>e.$isExpanded?"0 2px 5px rgba(0, 0, 0, 0.1)":"none"};

  &:hover {
    background-color: var(--primary-color-dark-4);
    color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`,bw=d.div`
  padding: ${e=>e.$isExpanded?"var(--spacing-md)":"0 var(--spacing-md)"};
  max-height: ${e=>e.$isExpanded?"2000px":"0"};
  overflow: hidden;
  transition:
    max-height var(--transition-quick),
    padding var(--transition-quick);
  border-top: none;

  // Apply the animation only when the panel is expanded
  animation: ${e=>e.$isExpanded?L9:"none"} 0.5s
    ease-in-out;
  opacity: ${e=>e.$isExpanded?"1":"0"};
`,Sm=d.div`
  width: 20px;
  height: 20px;
  background-color: ${e=>e.$isExpanded?"var(--secondary-color)":"var(--light-grey-color)"};
  border-radius: 50%;
  margin-right: var(--spacing-sm);
  transition: background-color var(--transition-quick);
  flex-shrink: 0;

  @media (max-width: 960px) {
    width: 15px;
    height: 15px;
  }
`,jw=d.div`
  height: 1px;
  background-color: var(--light-grey-color);
  margin: var(--spacing-sm) 0;
`,kw=d.div`
  width: 17rem;
  height: 17rem;
  background-color: color-mix(
    in srgb,
    var(--primary-color-light-3) 30%,
    transparent
  );

  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 20px;
  animation: ${Q4} 5s infinite alternate;
  margin: 15rem;
`,Sw=d.div`
  width: 5rem;
  height: 5rem;
  background-color: color-mix(
    in srgb,
    var(--primary-color-light-3) 30%,
    transparent
  );
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 35%;
  animation: ${Q4} 5s infinite alternate;
  margin: 5rem;
`,Cw=d.p`
  font-size: var(--font-size-h6);
  font-family: var(--font-primary);
  font-weight: 400;
`,Ew=d.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  & > * {
    flex: 1;
  }
`,zw=d.li`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>e.$isSelected?"var(--primary-color-dark-4)":"var(--background-color)"};
  color: ${e=>e.$isSelected?"#fff":"var(--dark-grey-color)"};
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  transition:
    background-color var(--transition-quick),
    color var(--transition-quick);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  text-align: left;
  &:hover {
    background-color: var(--primary-color-dark-3);
    color: #fff;
  }

  @media (max-width: 960px) {
    font-size: var(--font-size-small);
    padding: var(--spacing-xs) var(--spacing-sm);
  }
`,ge=d.div`
  display: flex;
  ${e=>e.type==="horizontal"&&ve`
      justify-content: ${e.$justifyContent||"space-between"};
      align-items: ${e.$alignItems||"center"};
      gap: ${e.$flexGap||"1rem"};
    `}

  ${e=>e.type==="vertical"&&ve`
      flex-direction: column;
      justify-content: ${e.$justifyContent||"flex-start"};
      align-items: ${e.$alignItems||"stretch"};
      gap: ${e.$flexGap||"1.6rem"};
    `}
  
  ${e=>e.$flexWrap&&ve`
      flex-wrap: wrap;
    `}
  
  ${e=>e.$flexBasis&&ve`
      flex-basis: ${e.basis};
    `}

  ${e=>e.$flexGrow&&ve`
      flex-grow: ${e.grow};
    `}

  ${e=>e.$flexShrink&&ve`
      flex-shrink: ${e.shrink};
    `}
`;ge.defaultProps={type:"vertical",$justifyContent:"flex-start",$alignItems:"stretch",$flexGap:"1.6rem",$flexWrap:!0,$flexBasis:"auto",$flexGrow:0,$flexShrink:1};const F1=()=>{const[e,t]=b.useState(null),[r,n]=b.useState(0),[i,a]=b.useState(!1),s=b.useRef(null),l=u=>{t(u===e?null:u)},c=u=>{a(!0),t(null),setTimeout(()=>{n(u),a(!1)},300)};return b.useEffect(()=>{const u=new IntersectionObserver((h,m)=>{h.forEach(w=>{w.isIntersecting?(w.target.classList.add("faq-section-visible"),w.target.classList.remove("faq-section-hidden"),m.unobserve(w.target)):(w.target.classList.add("faq-section-hidden"),w.target.classList.remove("faq-section-visible"))})},{threshold:.1}),f=s.current;return f&&u.observe(f),()=>{f&&u.unobserve(f)}},[]),o.jsxs(mw,{ref:s,children:[o.jsxs("div",{children:[o.jsxs(gw,{children:[o.jsx(vw,{as:"h2",children:"Got Questions?"}),o.jsx(oe,{as:"h5",$colorText:"var(--primary-color-dark-6)",children:"We've got answers for you."}),o.jsx(Ew,{children:_w.map((u,f)=>o.jsx(zw,{onClick:()=>c(f),$isSelected:r===f,children:o.jsxs(ge,{type:"vertical",$justifyContent:"flex-start",$alignItems:"flex-start",$flexGap:".5rem",children:[o.jsx(Sm,{$isExpanded:r===f}),o.jsx("p",{children:u})]})},f))})]}),o.jsx(xw,{className:i?"animating":"",children:Cm[r].map((u,f)=>o.jsxs("div",{children:[o.jsxs(yw,{children:[o.jsxs(ww,{onClick:()=>l(f),$isExpanded:e===f,children:[o.jsx(Sm,{$isExpanded:e===f}),o.jsx(Cw,{children:u.question})]}),o.jsx(bw,{$isExpanded:e===f,children:o.jsx("p",{children:u.answer})})]}),f<Cm[r].length-1&&o.jsx(jw,{})]},f))})]}),o.jsx(kw,{}),o.jsx(Sw,{})]})},_w=["General Benefits","Sensitive Skin","Product Ingredients","Effectiveness"],Cm=[[{question:"What are the benefits of using natural beauty products?",answer:"Natural beauty products are free from harmful chemicals and are better for your skin and the environment."},{question:"Are natural beauty products more expensive?",answer:"They can be, but many people find the investment worth it due to the quality and safety of the ingredients."},{question:"Do natural beauty products work as well as synthetic ones?",answer:"Yes, many natural products are highly effective and provide lasting results without harmful side effects."},{question:"Are natural beauty products cruelty-free?",answer:"Many natural beauty products are cruelty-free, as they often avoid animal testing and use ethical sourcing."},{question:"Do natural beauty products have a fragrance?",answer:"Natural products often contain essential oils for fragrance, which can also have therapeutic benefits."},{question:"Can natural beauty products help with anti-aging?",answer:"Yes, many natural products contain antioxidants and other ingredients that can help reduce signs of aging."},{question:"Are natural beauty products eco-friendly?",answer:"Yes, they often use sustainable ingredients and environmentally friendly packaging."},{question:"How do natural beauty products benefit overall health?",answer:"Using natural products reduces your exposure to harmful chemicals, benefiting your overall health in the long term."}],[{question:"Are natural beauty products suitable for sensitive skin?",answer:"Yes, natural beauty products are generally gentler and more suitable for sensitive skin."},{question:"Can natural products cause allergies?",answer:"Although rare, some natural ingredients can cause allergies. Always check the ingredient list."},{question:"Which natural ingredients are best for sensitive skin?",answer:"Ingredients like aloe vera, chamomile, and oatmeal are gentle and beneficial for sensitive skin."},{question:"How do I test if a natural product is safe for my skin?",answer:"Perform a patch test on a small area of your skin to ensure no adverse reactions occur."},{question:"Are there any natural ingredients to avoid for sensitive skin?",answer:"Avoid strong essential oils or ingredients like citrus, which may irritate sensitive skin."},{question:"Can natural products soothe irritated skin?",answer:"Yes, ingredients like calendula and honey can help calm and soothe irritated skin."},{question:"Do natural products help with conditions like eczema?",answer:"Many natural products can help manage eczema, but it's important to choose those specifically formulated for sensitive skin."},{question:"How often should I use natural products on sensitive skin?",answer:"Use them as directed, and listen to your skin's needs; overuse, even of natural products, can lead to irritation."}],[{question:"How can I know if a product is truly natural?",answer:"Look for certifications and check the ingredient list for natural and organic components."},{question:"What certifications should I look for?",answer:"Look for USDA Organic, Ecocert, or similar certifications to ensure the product's authenticity."},{question:"Are all organic products natural?",answer:"Not necessarily. Organic refers to how ingredients are grown, while natural means minimal processing."},{question:"How can I read and understand product labels?",answer:"Familiarize yourself with common natural ingredients and avoid products with synthetic additives or fillers."},{question:"What does '100% natural' mean on a label?",answer:"'100% natural' indicates that all ingredients in the product are derived from natural sources."},{question:"Can I trust 'natural' claims without certification?",answer:"It's best to look for certification; 'natural' can be misleading without regulatory oversight."},{question:"How do I identify harmful ingredients in a product?",answer:"Research common harmful chemicals and always check the ingredient list before purchasing."},{question:"What should I do if a product's claims seem unclear?",answer:"If in doubt, contact the manufacturer for more information or opt for a product with clear labeling and certifications."}],[{question:"Can natural products be as effective as synthetic ones?",answer:"Absolutely! Many natural products are just as effective and can provide excellent results without the side effects of synthetic ingredients."},{question:"How long does it take to see results?",answer:"Results can vary, but many users report improvements within a few weeks of consistent use."},{question:"What natural ingredients are most effective?",answer:"Ingredients like hyaluronic acid, vitamin C, and tea tree oil are known for their effectiveness in skincare."},{question:"Do natural products work for all skin types?",answer:"Natural products can be tailored to different skin types; it's important to choose the right product for your skin."},{question:"Can I mix natural and synthetic products in my routine?",answer:"Yes, but ensure that the ingredients in both products complement each other to avoid reactions."},{question:"How do natural products compare in terms of long-term results?",answer:"Natural products often focus on overall skin health, leading to sustainable long-term results."},{question:"Are there any downsides to using natural products?",answer:"Some natural products may take longer to show results compared to synthetic ones, but they are generally safer for long-term use."},{question:"Can natural products address specific skin concerns?",answer:"Yes, many natural products are formulated to target specific issues like acne, dryness, or aging."}]];function $w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Pw(e,t,r){return t&&$w(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var Em="(prefers-reduced-motion: reduce)",to=1,Tw=2,zo=3,Oo=4,gs=5,Ul=6,Sc=7,Lw={CREATED:to,MOUNTED:Tw,IDLE:zo,MOVING:Oo,SCROLLING:gs,DRAGGING:Ul,DESTROYED:Sc};function Qr(e){e.length=0}function Fn(e,t,r){return Array.prototype.slice.call(e,t,r)}function Ae(e){return e.bind.apply(e,[null].concat(Fn(arguments,1)))}var t5=setTimeout,r0=function(){};function zm(e){return requestAnimationFrame(e)}function hu(e,t){return typeof t===e}function Ka(e){return!U1(e)&&hu("object",e)}var B1=Array.isArray,r5=Ae(hu,"function"),Pn=Ae(hu,"string"),vs=Ae(hu,"undefined");function U1(e){return e===null}function n5(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function xs(e){return B1(e)?e:[e]}function Zt(e,t){xs(e).forEach(t)}function H1(e,t){return e.indexOf(t)>-1}function Hl(e,t){return e.push.apply(e,xs(t)),e}function Fr(e,t,r){e&&Zt(t,function(n){n&&e.classList[r?"add":"remove"](n)})}function kr(e,t){Fr(e,Pn(t)?t.split(" "):t,!0)}function ys(e,t){Zt(t,e.appendChild.bind(e))}function W1(e,t){Zt(e,function(r){var n=(t||r).parentNode;n&&n.insertBefore(r,t)})}function Za(e,t){return n5(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function i5(e,t){var r=e?Fn(e.children):[];return t?r.filter(function(n){return Za(n,t)}):r}function ws(e,t){return t?i5(e,t)[0]:e.firstElementChild}var Ja=Object.keys;function ii(e,t,r){return e&&(r?Ja(e).reverse():Ja(e)).forEach(function(n){n!=="__proto__"&&t(e[n],n)}),e}function es(e){return Fn(arguments,1).forEach(function(t){ii(t,function(r,n){e[n]=t[n]})}),e}function vn(e){return Fn(arguments,1).forEach(function(t){ii(t,function(r,n){B1(r)?e[n]=r.slice():Ka(r)?e[n]=vn({},Ka(e[n])?e[n]:{},r):e[n]=r})}),e}function _m(e,t){Zt(t||Ja(e),function(r){delete e[r]})}function Sr(e,t){Zt(e,function(r){Zt(t,function(n){r&&r.removeAttribute(n)})})}function le(e,t,r){Ka(t)?ii(t,function(n,i){le(e,i,n)}):Zt(e,function(n){U1(r)||r===""?Sr(n,t):n.setAttribute(t,String(r))})}function lo(e,t,r){var n=document.createElement(e);return t&&(Pn(t)?kr(n,t):le(n,t)),r&&ys(r,n),n}function or(e,t,r){if(vs(r))return getComputedStyle(e)[t];U1(r)||(e.style[t]=""+r)}function ts(e,t){or(e,"display",t)}function o5(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function lr(e,t){return e.getAttribute(t)}function $m(e,t){return e&&e.classList.contains(t)}function Vt(e){return e.getBoundingClientRect()}function di(e){Zt(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function a5(e){return ws(new DOMParser().parseFromString(e,"text/html").body)}function Mr(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function s5(e,t){return e&&e.querySelector(t)}function V1(e,t){return t?Fn(e.querySelectorAll(t)):[]}function Br(e,t){Fr(e,t,!1)}function n0(e){return e.timeStamp}function Hn(e){return Pn(e)?e:e?e+"px":""}var bs="splide",G1="data-"+bs;function _a(e,t){if(!e)throw new Error("["+bs+"] "+(t||""))}var Tn=Math.min,Cc=Math.max,Ec=Math.floor,rs=Math.ceil,Et=Math.abs;function l5(e,t,r){return Et(e-t)<r}function Wl(e,t,r,n){var i=Tn(t,r),a=Cc(t,r);return n?i<e&&e<a:i<=e&&e<=a}function Ni(e,t,r){var n=Tn(t,r),i=Cc(t,r);return Tn(Cc(n,e),i)}function i0(e){return+(e>0)-+(e<0)}function o0(e,t){return Zt(t,function(r){e=e.replace("%s",""+r)}),e}function q1(e){return e<10?"0"+e:""+e}var Pm={};function Aw(e){return""+e+q1(Pm[e]=(Pm[e]||0)+1)}function c5(){var e=[];function t(s,l,c,u){i(s,l,function(f,h,m){var w="addEventListener"in f,x=w?f.removeEventListener.bind(f,h,c,u):f.removeListener.bind(f,c);w?f.addEventListener(h,c,u):f.addListener(c),e.push([f,h,m,c,x])})}function r(s,l,c){i(s,l,function(u,f,h){e=e.filter(function(m){return m[0]===u&&m[1]===f&&m[2]===h&&(!c||m[3]===c)?(m[4](),!1):!0})})}function n(s,l,c){var u,f=!0;return typeof CustomEvent=="function"?u=new CustomEvent(l,{bubbles:f,detail:c}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(l,f,!1,c)),s.dispatchEvent(u),u}function i(s,l,c){Zt(s,function(u){u&&Zt(l,function(f){f.split(" ").forEach(function(h){var m=h.split(".");c(u,m[0],m[1])})})})}function a(){e.forEach(function(s){s[4]()}),Qr(e)}return{bind:t,unbind:r,dispatch:n,destroy:a}}var Bn="mounted",a0="ready",Kr="move",Do="moved",Y1="click",u5="active",d5="inactive",f5="visible",h5="hidden",et="refresh",wt="updated",_o="resize",pu="resized",p5="drag",m5="dragging",g5="dragged",mu="scroll",xi="scrolled",Iw="overflow",X1="destroy",v5="arrows:mounted",x5="arrows:updated",y5="pagination:mounted",w5="pagination:updated",Q1="navigation:mounted",K1="autoplay:play",b5="autoplay:playing",Z1="autoplay:pause",J1="lazyload:loaded",j5="sk",k5="sh",zc="ei";function We(e){var t=e?e.event.bus:document.createDocumentFragment(),r=c5();function n(a,s){r.bind(t,xs(a).join(" "),function(l){s.apply(s,B1(l.detail)?l.detail:[])})}function i(a){r.dispatch(t,a,Fn(arguments,1))}return e&&e.event.on(X1,r.destroy),es(r,{bus:t,on:n,off:Ae(r.unbind,t),emit:i})}function gu(e,t,r,n){var i=Date.now,a,s=0,l,c=!0,u=0;function f(){if(!c){if(s=e?Tn((i()-a)/e,1):1,r&&r(s),s>=1&&(t(),a=i(),n&&++u>=n))return m();l=zm(f)}}function h(g){g||x(),a=i()-(g?s*e:0),c=!1,l=zm(f)}function m(){c=!0}function w(){a=i(),s=0,r&&r(s)}function x(){l&&cancelAnimationFrame(l),s=0,l=0,c=!0}function j(g){e=g}function E(){return c}return{start:h,rewind:w,pause:m,cancel:x,set:j,isPaused:E}}function Rw(e){var t=e;function r(i){t=i}function n(i){return H1(xs(i),t)}return{set:r,is:n}}function Mw(e,t){var r=gu(0,e,null,1);return function(){r.isPaused()&&r.start()}}function Nw(e,t,r){var n=e.state,i=r.breakpoints||{},a=r.reducedMotion||{},s=c5(),l=[];function c(){var x=r.mediaQuery==="min";Ja(i).sort(function(j,E){return x?+j-+E:+E-+j}).forEach(function(j){f(i[j],"("+(x?"min":"max")+"-width:"+j+"px)")}),f(a,Em),h()}function u(x){x&&s.destroy()}function f(x,j){var E=matchMedia(j);s.bind(E,"change",h),l.push([x,E])}function h(){var x=n.is(Sc),j=r.direction,E=l.reduce(function(g,p){return vn(g,p[1].matches?p[0]:{})},{});_m(r),w(E),r.destroy?e.destroy(r.destroy==="completely"):x?(u(!0),e.mount()):j!==r.direction&&e.refresh()}function m(x){matchMedia(Em).matches&&(x?vn(r,a):_m(r,Ja(a)))}function w(x,j,E){vn(r,x),j&&vn(Object.getPrototypeOf(r),x),(E||!n.is(to))&&e.emit(wt,r)}return{setup:c,destroy:u,reduce:m,set:w}}var vu="Arrow",xu=vu+"Left",yu=vu+"Right",S5=vu+"Up",C5=vu+"Down",Tm="rtl",wu="ttb",jd={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[S5,yu],ArrowRight:[C5,xu]};function Ow(e,t,r){function n(a,s,l){l=l||r.direction;var c=l===Tm&&!s?1:l===wu?0:-1;return jd[a]&&jd[a][c]||a.replace(/width|left|right/i,function(u,f){var h=jd[u.toLowerCase()][c]||u;return f>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function i(a){return a*(r.direction===Tm?1:-1)}return{resolve:n,orient:i}}var Wr="role",co="tabindex",Dw="disabled",pr="aria-",js=pr+"controls",E5=pr+"current",Lm=pr+"selected",qt=pr+"label",eh=pr+"labelledby",z5=pr+"hidden",th=pr+"orientation",ns=pr+"roledescription",Am=pr+"live",Im=pr+"busy",Rm=pr+"atomic",rh=[Wr,co,Dw,js,E5,qt,eh,z5,th,ns],Er=bs+"__",Un="is-",kd=bs,Mm=Er+"track",Fw=Er+"list",bu=Er+"slide",_5=bu+"--clone",Bw=bu+"__container",nh=Er+"arrows",ju=Er+"arrow",$5=ju+"--prev",P5=ju+"--next",ku=Er+"pagination",T5=ku+"__page",Uw=Er+"progress",Hw=Uw+"__bar",Ww=Er+"toggle",Vw=Er+"spinner",Gw=Er+"sr",qw=Un+"initialized",fi=Un+"active",L5=Un+"prev",A5=Un+"next",s0=Un+"visible",l0=Un+"loading",I5=Un+"focus-in",R5=Un+"overflow",Yw=[fi,s0,L5,A5,l0,I5,R5],Xw={slide:bu,clone:_5,arrows:nh,arrow:ju,prev:$5,next:P5,pagination:ku,page:T5,spinner:Vw};function Qw(e,t){if(r5(e.closest))return e.closest(t);for(var r=e;r&&r.nodeType===1&&!Za(r,t);)r=r.parentElement;return r}var Kw=5,Nm=200,M5="touchstart mousedown",Sd="touchmove mousemove",Cd="touchend touchcancel mouseup click";function Zw(e,t,r){var n=We(e),i=n.on,a=n.bind,s=e.root,l=r.i18n,c={},u=[],f=[],h=[],m,w,x;function j(){v(),k(),p()}function E(){i(et,g),i(et,j),i(wt,p),a(document,M5+" keydown",function(C){x=C.type==="keydown"},{capture:!0}),a(s,"focusin",function(){Fr(s,I5,!!x)})}function g(C){var S=rh.concat("style");Qr(u),Br(s,f),Br(m,h),Sr([m,w],S),Sr(s,C?S:["style",ns])}function p(){Br(s,f),Br(m,h),f=y(kd),h=y(Mm),kr(s,f),kr(m,h),le(s,qt,r.label),le(s,eh,r.labelledby)}function v(){m=z("."+Mm),w=ws(m,"."+Fw),_a(m&&w,"A track/list element is missing."),Hl(u,i5(w,"."+bu+":not(."+_5+")")),ii({arrows:nh,pagination:ku,prev:$5,next:P5,bar:Hw,toggle:Ww},function(C,S){c[S]=z("."+C)}),es(c,{root:s,track:m,list:w,slides:u})}function k(){var C=s.id||Aw(bs),S=r.role;s.id=C,m.id=m.id||C+"-track",w.id=w.id||C+"-list",!lr(s,Wr)&&s.tagName!=="SECTION"&&S&&le(s,Wr,S),le(s,ns,l.carousel),le(w,Wr,"presentation")}function z(C){var S=s5(s,C);return S&&Qw(S,"."+kd)===s?S:void 0}function y(C){return[C+"--"+r.type,C+"--"+r.direction,r.drag&&C+"--draggable",r.isNavigation&&C+"--nav",C===kd&&fi]}return es(c,{setup:j,mount:E,destroy:g})}var $o="slide",Fo="loop",ks="fade";function Jw(e,t,r,n){var i=We(e),a=i.on,s=i.emit,l=i.bind,c=e.Components,u=e.root,f=e.options,h=f.isNavigation,m=f.updateOnMove,w=f.i18n,x=f.pagination,j=f.slideFocus,E=c.Direction.resolve,g=lr(n,"style"),p=lr(n,qt),v=r>-1,k=ws(n,"."+Bw),z;function y(){v||(n.id=u.id+"-slide"+q1(t+1),le(n,Wr,x?"tabpanel":"group"),le(n,ns,w.slide),le(n,qt,p||o0(w.slideLabel,[t+1,e.length]))),C()}function C(){l(n,"click",Ae(s,Y1,R)),l(n,"keydown",Ae(s,j5,R)),a([Do,k5,xi],I),a(Q1,P),m&&a(Kr,L)}function S(){z=!0,i.destroy(),Br(n,Yw),Sr(n,rh),le(n,"style",g),le(n,qt,p||"")}function P(){var N=e.splides.map(function(A){var B=A.splide.Components.Slides.getAt(t);return B?B.slide.id:""}).join(" ");le(n,qt,o0(w.slideX,(v?r:t)+1)),le(n,js,N),le(n,Wr,j?"button":""),j&&Sr(n,ns)}function L(){z||I()}function I(){if(!z){var N=e.index;O(),U(),Fr(n,L5,t===N-1),Fr(n,A5,t===N+1)}}function O(){var N=K();N!==$m(n,fi)&&(Fr(n,fi,N),le(n,E5,h&&N||""),s(N?u5:d5,R))}function U(){var N=ue(),A=!N&&(!K()||v);if(e.state.is([Oo,gs])||le(n,z5,A||""),le(V1(n,f.focusableNodes||""),co,A?-1:""),j&&le(n,co,A?-1:0),N!==$m(n,s0)&&(Fr(n,s0,N),s(N?f5:h5,R)),!N&&document.activeElement===n){var B=c.Slides.getAt(e.index);B&&o5(B.slide)}}function W(N,A,B){or(B&&k||n,N,A)}function K(){var N=e.index;return N===t||f.cloneStatus&&N===r}function ue(){if(e.is(ks))return K();var N=Vt(c.Elements.track),A=Vt(n),B=E("left",!0),G=E("right",!0);return Ec(N[B])<=rs(A[B])&&Ec(A[G])<=rs(N[G])}function J(N,A){var B=Et(N-t);return!v&&(f.rewind||e.is(Fo))&&(B=Tn(B,e.length-B)),B<=A}var R={index:t,slideIndex:r,slide:n,container:k,isClone:v,mount:y,destroy:S,update:I,style:W,isWithin:J};return R}function eb(e,t,r){var n=We(e),i=n.on,a=n.emit,s=n.bind,l=t.Elements,c=l.slides,u=l.list,f=[];function h(){m(),i(et,w),i(et,m)}function m(){c.forEach(function(I,O){j(I,O,-1)})}function w(){z(function(I){I.destroy()}),Qr(f)}function x(){z(function(I){I.update()})}function j(I,O,U){var W=Jw(e,O,U,I);W.mount(),f.push(W),f.sort(function(K,ue){return K.index-ue.index})}function E(I){return I?y(function(O){return!O.isClone}):f}function g(I){var O=t.Controller,U=O.toIndex(I),W=O.hasFocus()?1:r.perPage;return y(function(K){return Wl(K.index,U,U+W-1)})}function p(I){return y(I)[0]}function v(I,O){Zt(I,function(U){if(Pn(U)&&(U=a5(U)),n5(U)){var W=c[O];W?W1(U,W):ys(u,U),kr(U,r.classes.slide),S(U,Ae(a,_o))}}),a(et)}function k(I){di(y(I).map(function(O){return O.slide})),a(et)}function z(I,O){E(O).forEach(I)}function y(I){return f.filter(r5(I)?I:function(O){return Pn(I)?Za(O.slide,I):H1(xs(I),O.index)})}function C(I,O,U){z(function(W){W.style(I,O,U)})}function S(I,O){var U=V1(I,"img"),W=U.length;W?U.forEach(function(K){s(K,"load error",function(){--W||O()})}):O()}function P(I){return I?c.length:f.length}function L(){return f.length>r.perPage}return{mount:h,destroy:w,update:x,register:j,get:E,getIn:g,getAt:p,add:v,remove:k,forEach:z,filter:y,style:C,getLength:P,isEnough:L}}function tb(e,t,r){var n=We(e),i=n.on,a=n.bind,s=n.emit,l=t.Slides,c=t.Direction.resolve,u=t.Elements,f=u.root,h=u.track,m=u.list,w=l.getAt,x=l.style,j,E,g;function p(){v(),a(window,"resize load",Mw(Ae(s,_o))),i([wt,et],v),i(_o,k)}function v(){j=r.direction===wu,or(f,"maxWidth",Hn(r.width)),or(h,c("paddingLeft"),z(!1)),or(h,c("paddingRight"),z(!0)),k(!0)}function k(R){var N=Vt(f);(R||E.width!==N.width||E.height!==N.height)&&(or(h,"height",y()),x(c("marginRight"),Hn(r.gap)),x("width",S()),x("height",P(),!0),E=N,s(pu),g!==(g=J())&&(Fr(f,R5,g),s(Iw,g)))}function z(R){var N=r.padding,A=c(R?"right":"left");return N&&Hn(N[A]||(Ka(N)?0:N))||"0px"}function y(){var R="";return j&&(R=C(),_a(R,"height or heightRatio is missing."),R="calc("+R+" - "+z(!1)+" - "+z(!0)+")"),R}function C(){return Hn(r.height||Vt(m).width*r.heightRatio)}function S(){return r.autoWidth?null:Hn(r.fixedWidth)||(j?"":L())}function P(){return Hn(r.fixedHeight)||(j?r.autoHeight?null:L():C())}function L(){var R=Hn(r.gap);return"calc((100%"+(R&&" + "+R)+")/"+(r.perPage||1)+(R&&" - "+R)+")"}function I(){return Vt(m)[c("width")]}function O(R,N){var A=w(R||0);return A?Vt(A.slide)[c("width")]+(N?0:K()):0}function U(R,N){var A=w(R);if(A){var B=Vt(A.slide)[c("right")],G=Vt(m)[c("left")];return Et(B-G)+(N?0:K())}return 0}function W(R){return U(e.length-1)-U(0)+O(0,R)}function K(){var R=w(0);return R&&parseFloat(or(R.slide,c("marginRight")))||0}function ue(R){return parseFloat(or(h,c("padding"+(R?"Right":"Left"))))||0}function J(){return e.is(ks)||W(!0)>I()}return{mount:p,resize:k,listSize:I,slideSize:O,sliderSize:W,totalSize:U,getPadding:ue,isOverflow:J}}var rb=2;function nb(e,t,r){var n=We(e),i=n.on,a=t.Elements,s=t.Slides,l=t.Direction.resolve,c=[],u;function f(){i(et,h),i([wt,_o],w),(u=E())&&(x(u),t.Layout.resize(!0))}function h(){m(),f()}function m(){di(c),Qr(c),n.destroy()}function w(){var g=E();u!==g&&(u<g||!g)&&n.emit(et)}function x(g){var p=s.get().slice(),v=p.length;if(v){for(;p.length<g;)Hl(p,p);Hl(p.slice(-g),p.slice(0,g)).forEach(function(k,z){var y=z<g,C=j(k.slide,z);y?W1(C,p[0].slide):ys(a.list,C),Hl(c,C),s.register(C,z-g+(y?0:v),k.index)})}}function j(g,p){var v=g.cloneNode(!0);return kr(v,r.classes.clone),v.id=e.root.id+"-clone"+q1(p+1),v}function E(){var g=r.clones;if(!e.is(Fo))g=0;else if(vs(g)){var p=r[l("fixedWidth")]&&t.Layout.slideSize(0),v=p&&rs(Vt(a.track)[l("width")]/p);g=v||r[l("autoWidth")]&&e.length||r.perPage*rb}return g}return{mount:f,destroy:m}}function ib(e,t,r){var n=We(e),i=n.on,a=n.emit,s=e.state.set,l=t.Layout,c=l.slideSize,u=l.getPadding,f=l.totalSize,h=l.listSize,m=l.sliderSize,w=t.Direction,x=w.resolve,j=w.orient,E=t.Elements,g=E.list,p=E.track,v;function k(){v=t.Transition,i([Bn,pu,wt,et],z)}function z(){t.Controller.isBusy()||(t.Scroll.cancel(),C(e.index),t.Slides.update())}function y(A,B,G,ye){A!==B&&R(A>G)&&(I(),S(L(W(),A>G),!0)),s(Oo),a(Kr,B,G,A),v.start(B,function(){s(zo),a(Do,B,G,A),ye&&ye()})}function C(A){S(U(A,!0))}function S(A,B){if(!e.is(ks)){var G=B?A:P(A);or(g,"transform","translate"+x("X")+"("+G+"px)"),A!==G&&a(k5)}}function P(A){if(e.is(Fo)){var B=O(A),G=B>t.Controller.getEnd(),ye=B<0;(ye||G)&&(A=L(A,G))}return A}function L(A,B){var G=A-J(B),ye=m();return A-=j(ye*(rs(Et(G)/ye)||1))*(B?1:-1),A}function I(){S(W(),!0),v.cancel()}function O(A){for(var B=t.Slides.get(),G=0,ye=1/0,ae=0;ae<B.length;ae++){var ke=B[ae].index,D=Et(U(ke,!0)-A);if(D<=ye)ye=D,G=ke;else break}return G}function U(A,B){var G=j(f(A-1)-ue(A));return B?K(G):G}function W(){var A=x("left");return Vt(g)[A]-Vt(p)[A]+j(u(!1))}function K(A){return r.trimSpace&&e.is($o)&&(A=Ni(A,0,j(m(!0)-h()))),A}function ue(A){var B=r.focus;return B==="center"?(h()-c(A,!0))/2:+B*c(A)||0}function J(A){return U(A?t.Controller.getEnd():0,!!r.trimSpace)}function R(A){var B=j(L(W(),A));return A?B>=0:B<=g[x("scrollWidth")]-Vt(p)[x("width")]}function N(A,B){B=vs(B)?W():B;var G=A!==!0&&j(B)<j(J(!1)),ye=A!==!1&&j(B)>j(J(!0));return G||ye}return{mount:k,move:y,jump:C,translate:S,shift:L,cancel:I,toIndex:O,toPosition:U,getPosition:W,getLimit:J,exceededLimit:N,reposition:z}}function ob(e,t,r){var n=We(e),i=n.on,a=n.emit,s=t.Move,l=s.getPosition,c=s.getLimit,u=s.toPosition,f=t.Slides,h=f.isEnough,m=f.getLength,w=r.omitEnd,x=e.is(Fo),j=e.is($o),E=Ae(W,!1),g=Ae(W,!0),p=r.start||0,v,k=p,z,y,C;function S(){P(),i([wt,et,zc],P),i(pu,L)}function P(){z=m(!0),y=r.perMove,C=r.perPage,v=R();var D=Ni(p,0,w?v:z-1);D!==p&&(p=D,s.reposition())}function L(){v!==R()&&a(zc)}function I(D,ie,Ne){if(!ke()){var we=U(D),qe=J(we);qe>-1&&(ie||qe!==p)&&(G(qe),s.move(we,qe,k,Ne))}}function O(D,ie,Ne,we){t.Scroll.scroll(D,ie,Ne,function(){var qe=J(s.toIndex(l()));G(w?Tn(qe,v):qe),we&&we()})}function U(D){var ie=p;if(Pn(D)){var Ne=D.match(/([+\-<>])(\d+)?/)||[],we=Ne[1],qe=Ne[2];we==="+"||we==="-"?ie=K(p+ +(""+we+(+qe||1)),p):we===">"?ie=qe?N(+qe):E(!0):we==="<"&&(ie=g(!0))}else ie=x?D:Ni(D,0,v);return ie}function W(D,ie){var Ne=y||(ae()?1:C),we=K(p+Ne*(D?-1:1),p,!(y||ae()));return we===-1&&j&&!l5(l(),c(!D),1)?D?0:v:ie?we:J(we)}function K(D,ie,Ne){if(h()||ae()){var we=ue(D);we!==D&&(ie=D,D=we,Ne=!1),D<0||D>v?!y&&(Wl(0,D,ie,!0)||Wl(v,ie,D,!0))?D=N(A(D)):x?D=Ne?D<0?-(z%C||C):z:D:r.rewind?D=D<0?v:0:D=-1:Ne&&D!==ie&&(D=N(A(ie)+(D<ie?-1:1)))}else D=-1;return D}function ue(D){if(j&&r.trimSpace==="move"&&D!==p)for(var ie=l();ie===u(D,!0)&&Wl(D,0,e.length-1,!r.rewind);)D<p?--D:++D;return D}function J(D){return x?(D+z)%z||0:D}function R(){for(var D=z-(ae()||x&&y?1:C);w&&D-- >0;)if(u(z-1,!0)!==u(D,!0)){D++;break}return Ni(D,0,z-1)}function N(D){return Ni(ae()?D:C*D,0,v)}function A(D){return ae()?Tn(D,v):Ec((D>=v?z-1:D)/C)}function B(D){var ie=s.toIndex(D);return j?Ni(ie,0,v):ie}function G(D){D!==p&&(k=p,p=D)}function ye(D){return D?k:p}function ae(){return!vs(r.focus)||r.isNavigation}function ke(){return e.state.is([Oo,gs])&&!!r.waitForTransition}return{mount:S,go:I,scroll:O,getNext:E,getPrev:g,getAdjacent:W,getEnd:R,setIndex:G,getIndex:ye,toIndex:N,toPage:A,toDest:B,hasFocus:ae,isBusy:ke}}var ab="http://www.w3.org/2000/svg",sb="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",il=40;function lb(e,t,r){var n=We(e),i=n.on,a=n.bind,s=n.emit,l=r.classes,c=r.i18n,u=t.Elements,f=t.Controller,h=u.arrows,m=u.track,w=h,x=u.prev,j=u.next,E,g,p={};function v(){z(),i(wt,k)}function k(){y(),v()}function z(){var O=r.arrows;O&&!(x&&j)&&P(),x&&j&&(es(p,{prev:x,next:j}),ts(w,O?"":"none"),kr(w,g=nh+"--"+r.direction),O&&(C(),I(),le([x,j],js,m.id),s(v5,x,j)))}function y(){n.destroy(),Br(w,g),E?(di(h?[x,j]:w),x=j=null):Sr([x,j],rh)}function C(){i([Bn,Do,et,xi,zc],I),a(j,"click",Ae(S,">")),a(x,"click",Ae(S,"<"))}function S(O){f.go(O,!0)}function P(){w=h||lo("div",l.arrows),x=L(!0),j=L(!1),E=!0,ys(w,[x,j]),!h&&W1(w,m)}function L(O){var U='<button class="'+l.arrow+" "+(O?l.prev:l.next)+'" type="button"><svg xmlns="'+ab+'" viewBox="0 0 '+il+" "+il+'" width="'+il+'" height="'+il+'" focusable="false"><path d="'+(r.arrowPath||sb)+'" />';return a5(U)}function I(){if(x&&j){var O=e.index,U=f.getPrev(),W=f.getNext(),K=U>-1&&O<U?c.last:c.prev,ue=W>-1&&O>W?c.first:c.next;x.disabled=U<0,j.disabled=W<0,le(x,qt,K),le(j,qt,ue),s(x5,x,j,U,W)}}return{arrows:p,mount:v,destroy:y,update:I}}var cb=G1+"-interval";function ub(e,t,r){var n=We(e),i=n.on,a=n.bind,s=n.emit,l=gu(r.interval,e.go.bind(e,">"),C),c=l.isPaused,u=t.Elements,f=t.Elements,h=f.root,m=f.toggle,w=r.autoplay,x,j,E=w==="pause";function g(){w&&(p(),m&&le(m,js,u.track.id),E||v(),y())}function p(){r.pauseOnHover&&a(h,"mouseenter mouseleave",function(P){x=P.type==="mouseenter",z()}),r.pauseOnFocus&&a(h,"focusin focusout",function(P){j=P.type==="focusin",z()}),m&&a(m,"click",function(){E?v():k(!0)}),i([Kr,mu,et],l.rewind),i(Kr,S)}function v(){c()&&t.Slides.isEnough()&&(l.start(!r.resetProgress),j=x=E=!1,y(),s(K1))}function k(P){P===void 0&&(P=!0),E=!!P,y(),c()||(l.pause(),s(Z1))}function z(){E||(x||j?k(!1):v())}function y(){m&&(Fr(m,fi,!E),le(m,qt,r.i18n[E?"play":"pause"]))}function C(P){var L=u.bar;L&&or(L,"width",P*100+"%"),s(b5,P)}function S(P){var L=t.Slides.getAt(P);l.set(L&&+lr(L.slide,cb)||r.interval)}return{mount:g,destroy:l.cancel,play:v,pause:k,isPaused:c}}function db(e,t,r){var n=We(e),i=n.on;function a(){r.cover&&(i(J1,Ae(l,!0)),i([Bn,wt,et],Ae(s,!0)))}function s(c){t.Slides.forEach(function(u){var f=ws(u.container||u.slide,"img");f&&f.src&&l(c,f,u)})}function l(c,u,f){f.style("background",c?'center/cover no-repeat url("'+u.src+'")':"",!0),ts(u,c?"none":"")}return{mount:a,destroy:Ae(s,!1)}}var fb=10,hb=600,pb=.6,mb=1.5,gb=800;function vb(e,t,r){var n=We(e),i=n.on,a=n.emit,s=e.state.set,l=t.Move,c=l.getPosition,u=l.getLimit,f=l.exceededLimit,h=l.translate,m=e.is($o),w,x,j=1;function E(){i(Kr,k),i([wt,et],z)}function g(C,S,P,L,I){var O=c();if(k(),P&&(!m||!f())){var U=t.Layout.sliderSize(),W=i0(C)*U*Ec(Et(C)/U)||0;C=l.toPosition(t.Controller.toDest(C%U))+W}var K=l5(O,C,1);j=1,S=K?0:S||Cc(Et(C-O)/mb,gb),x=L,w=gu(S,p,Ae(v,O,C,I),1),s(gs),a(mu),w.start()}function p(){s(zo),x&&x(),a(xi)}function v(C,S,P,L){var I=c(),O=C+(S-C)*y(L),U=(O-I)*j;h(I+U),m&&!P&&f()&&(j*=pb,Et(U)<fb&&g(u(f(!0)),hb,!1,x,!0))}function k(){w&&w.cancel()}function z(){w&&!w.isPaused()&&(k(),p())}function y(C){var S=r.easingFunc;return S?S(C):1-Math.pow(1-C,4)}return{mount:E,destroy:k,scroll:g,cancel:z}}var Oi={passive:!1,capture:!0};function xb(e,t,r){var n=We(e),i=n.on,a=n.emit,s=n.bind,l=n.unbind,c=e.state,u=t.Move,f=t.Scroll,h=t.Controller,m=t.Elements.track,w=t.Media.reduce,x=t.Direction,j=x.resolve,E=x.orient,g=u.getPosition,p=u.exceededLimit,v,k,z,y,C,S=!1,P,L,I;function O(){s(m,Sd,r0,Oi),s(m,Cd,r0,Oi),s(m,M5,W,Oi),s(m,"click",J,{capture:!0}),s(m,"dragstart",Mr),i([Bn,wt],U)}function U(){var q=r.drag;ze(!q),y=q==="free"}function W(q){if(P=!1,!L){var _e=qe(q);we(q.target)&&(_e||!q.button)&&(h.isBusy()?Mr(q,!0):(I=_e?m:window,C=c.is([Oo,gs]),z=null,s(I,Sd,K,Oi),s(I,Cd,ue,Oi),u.cancel(),f.cancel(),R(q)))}}function K(q){if(c.is(Ul)||(c.set(Ul),a(p5)),q.cancelable)if(C){u.translate(v+Ne(ae(q)));var _e=ke(q)>Nm,$r=S!==(S=p());(_e||$r)&&R(q),P=!0,a(m5),Mr(q)}else B(q)&&(C=A(q),Mr(q))}function ue(q){c.is(Ul)&&(c.set(zo),a(g5)),C&&(N(q),Mr(q)),l(I,Sd,K),l(I,Cd,ue),C=!1}function J(q){!L&&P&&Mr(q,!0)}function R(q){z=k,k=q,v=g()}function N(q){var _e=G(q),$r=ye(_e),Pt=r.rewind&&r.rewindByDrag;w(!1),y?h.scroll($r,0,r.snap):e.is(ks)?h.go(E(i0(_e))<0?Pt?"<":"-":Pt?">":"+"):e.is($o)&&S&&Pt?h.go(p(!0)?">":"<"):h.go(h.toDest($r),!0),w(!0)}function A(q){var _e=r.dragMinThreshold,$r=Ka(_e),Pt=$r&&_e.mouse||0,Ou=($r?_e.touch:+_e)||10;return Et(ae(q))>(qe(q)?Ou:Pt)}function B(q){return Et(ae(q))>Et(ae(q,!0))}function G(q){if(e.is(Fo)||!S){var _e=ke(q);if(_e&&_e<Nm)return ae(q)/_e}return 0}function ye(q){return g()+i0(q)*Tn(Et(q)*(r.flickPower||600),y?1/0:t.Layout.listSize()*(r.flickMaxPages||1))}function ae(q,_e){return ie(q,_e)-ie(D(q),_e)}function ke(q){return n0(q)-n0(D(q))}function D(q){return k===q&&z||k}function ie(q,_e){return(qe(q)?q.changedTouches[0]:q)["page"+j(_e?"Y":"X")]}function Ne(q){return q/(S&&e.is($o)?Kw:1)}function we(q){var _e=r.noDrag;return!Za(q,"."+T5+", ."+ju)&&(!_e||!Za(q,_e))}function qe(q){return typeof TouchEvent<"u"&&q instanceof TouchEvent}function rn(){return C}function ze(q){L=q}return{mount:O,disable:ze,isDragging:rn}}var yb={Spacebar:" ",Right:yu,Left:xu,Up:S5,Down:C5};function ih(e){return e=Pn(e)?e:e.key,yb[e]||e}var Om="keydown";function wb(e,t,r){var n=We(e),i=n.on,a=n.bind,s=n.unbind,l=e.root,c=t.Direction.resolve,u,f;function h(){m(),i(wt,w),i(wt,m),i(Kr,j)}function m(){var g=r.keyboard;g&&(u=g==="global"?window:l,a(u,Om,E))}function w(){s(u,Om)}function x(g){f=g}function j(){var g=f;f=!0,t5(function(){f=g})}function E(g){if(!f){var p=ih(g);p===c(xu)?e.go("<"):p===c(yu)&&e.go(">")}}return{mount:h,destroy:w,disable:x}}var $a=G1+"-lazy",Vl=$a+"-srcset",bb="["+$a+"], ["+Vl+"]";function jb(e,t,r){var n=We(e),i=n.on,a=n.off,s=n.bind,l=n.emit,c=r.lazyLoad==="sequential",u=[Do,xi],f=[];function h(){r.lazyLoad&&(m(),i(et,m))}function m(){Qr(f),w(),c?g():(a(u),i(u,x),x())}function w(){t.Slides.forEach(function(p){V1(p.slide,bb).forEach(function(v){var k=lr(v,$a),z=lr(v,Vl);if(k!==v.src||z!==v.srcset){var y=r.classes.spinner,C=v.parentElement,S=ws(C,"."+y)||lo("span",y,C);f.push([v,p,S]),v.src||ts(v,"none")}})})}function x(){f=f.filter(function(p){var v=r.perPage*((r.preloadPages||1)+1)-1;return p[1].isWithin(e.index,v)?j(p):!0}),f.length||a(u)}function j(p){var v=p[0];kr(p[1].slide,l0),s(v,"load error",Ae(E,p)),le(v,"src",lr(v,$a)),le(v,"srcset",lr(v,Vl)),Sr(v,$a),Sr(v,Vl)}function E(p,v){var k=p[0],z=p[1];Br(z.slide,l0),v.type!=="error"&&(di(p[2]),ts(k,""),l(J1,k,z),l(_o)),c&&g()}function g(){f.length&&j(f.shift())}return{mount:h,destroy:Ae(Qr,f),check:x}}function kb(e,t,r){var n=We(e),i=n.on,a=n.emit,s=n.bind,l=t.Slides,c=t.Elements,u=t.Controller,f=u.hasFocus,h=u.getIndex,m=u.go,w=t.Direction.resolve,x=c.pagination,j=[],E,g;function p(){v(),i([wt,et,zc],p);var L=r.pagination;x&&ts(x,L?"":"none"),L&&(i([Kr,mu,xi],P),k(),P(),a(y5,{list:E,items:j},S(e.index)))}function v(){E&&(di(x?Fn(E.children):E),Br(E,g),Qr(j),E=null),n.destroy()}function k(){var L=e.length,I=r.classes,O=r.i18n,U=r.perPage,W=f()?u.getEnd()+1:rs(L/U);E=x||lo("ul",I.pagination,c.track.parentElement),kr(E,g=ku+"--"+C()),le(E,Wr,"tablist"),le(E,qt,O.select),le(E,th,C()===wu?"vertical":"");for(var K=0;K<W;K++){var ue=lo("li",null,E),J=lo("button",{class:I.page,type:"button"},ue),R=l.getIn(K).map(function(A){return A.slide.id}),N=!f()&&U>1?O.pageX:O.slideX;s(J,"click",Ae(z,K)),r.paginationKeyboard&&s(J,"keydown",Ae(y,K)),le(ue,Wr,"presentation"),le(J,Wr,"tab"),le(J,js,R.join(" ")),le(J,qt,o0(N,K+1)),le(J,co,-1),j.push({li:ue,button:J,page:K})}}function z(L){m(">"+L,!0)}function y(L,I){var O=j.length,U=ih(I),W=C(),K=-1;U===w(yu,!1,W)?K=++L%O:U===w(xu,!1,W)?K=(--L+O)%O:U==="Home"?K=0:U==="End"&&(K=O-1);var ue=j[K];ue&&(o5(ue.button),m(">"+K),Mr(I,!0))}function C(){return r.paginationDirection||r.direction}function S(L){return j[u.toPage(L)]}function P(){var L=S(h(!0)),I=S(h());if(L){var O=L.button;Br(O,fi),Sr(O,Lm),le(O,co,-1)}if(I){var U=I.button;kr(U,fi),le(U,Lm,!0),le(U,co,"")}a(w5,{list:E,items:j},L,I)}return{items:j,mount:p,destroy:v,getAt:S,update:P}}var Sb=[" ","Enter"];function Cb(e,t,r){var n=r.isNavigation,i=r.slideFocus,a=[];function s(){e.splides.forEach(function(x){x.isParent||(u(e,x.splide),u(x.splide,e))}),n&&f()}function l(){a.forEach(function(x){x.destroy()}),Qr(a)}function c(){l(),s()}function u(x,j){var E=We(x);E.on(Kr,function(g,p,v){j.go(j.is(Fo)?v:g)}),a.push(E)}function f(){var x=We(e),j=x.on;j(Y1,m),j(j5,w),j([Bn,wt],h),a.push(x),x.emit(Q1,e.splides)}function h(){le(t.Elements.list,th,r.direction===wu?"vertical":"")}function m(x){e.go(x.index)}function w(x,j){H1(Sb,ih(j))&&(m(x),Mr(j))}return{setup:Ae(t.Media.set,{slideFocus:vs(i)?n:i},!0),mount:s,destroy:l,remount:c}}function Eb(e,t,r){var n=We(e),i=n.bind,a=0;function s(){r.wheel&&i(t.Elements.track,"wheel",l,Oi)}function l(u){if(u.cancelable){var f=u.deltaY,h=f<0,m=n0(u),w=r.wheelMinThreshold||0,x=r.wheelSleep||0;Et(f)>w&&m-a>x&&(e.go(h?"<":">"),a=m),c(h)&&Mr(u)}}function c(u){return!r.releaseWheel||e.state.is(Oo)||t.Controller.getAdjacent(u)!==-1}return{mount:s}}var zb=90;function _b(e,t,r){var n=We(e),i=n.on,a=t.Elements.track,s=r.live&&!r.isNavigation,l=lo("span",Gw),c=gu(zb,Ae(f,!1));function u(){s&&(m(!t.Autoplay.isPaused()),le(a,Rm,!0),l.textContent="…",i(K1,Ae(m,!0)),i(Z1,Ae(m,!1)),i([Do,xi],Ae(f,!0)))}function f(w){le(a,Im,w),w?(ys(a,l),c.start()):(di(l),c.cancel())}function h(){Sr(a,[Am,Rm,Im]),di(l)}function m(w){s&&le(a,Am,w?"off":"polite")}return{mount:u,disable:m,destroy:h}}var $b=Object.freeze({__proto__:null,Media:Nw,Direction:Ow,Elements:Zw,Slides:eb,Layout:tb,Clones:nb,Move:ib,Controller:ob,Arrows:lb,Autoplay:ub,Cover:db,Scroll:vb,Drag:xb,Keyboard:wb,LazyLoad:jb,Pagination:kb,Sync:Cb,Wheel:Eb,Live:_b}),Pb={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Tb={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Xw,i18n:Pb,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Lb(e,t,r){var n=t.Slides;function i(){We(e).on([Bn,et],a)}function a(){n.forEach(function(l){l.style("transform","translateX(-"+100*l.index+"%)")})}function s(l,c){n.style("transition","opacity "+r.speed+"ms "+r.easing),t5(c)}return{mount:i,start:s,cancel:r0}}function Ab(e,t,r){var n=t.Move,i=t.Controller,a=t.Scroll,s=t.Elements.list,l=Ae(or,s,"transition"),c;function u(){We(e).bind(s,"transitionend",function(w){w.target===s&&c&&(h(),c())})}function f(w,x){var j=n.toPosition(w,!0),E=n.getPosition(),g=m(w);Et(j-E)>=1&&g>=1?r.useScroll?a.scroll(j,g,!1,x):(l("transform "+g+"ms "+r.easing),n.translate(j,!0),c=x):(n.jump(w),x())}function h(){l(""),a.cancel()}function m(w){var x=r.rewindSpeed;if(e.is($o)&&x){var j=i.getIndex(!0),E=i.getEnd();if(j===0&&w>=E||j>=E&&w===0)return x}return r.speed}return{mount:u,start:f,cancel:h}}var Ib=function(){function e(r,n){this.event=We(),this.Components={},this.state=Rw(to),this.splides=[],this._o={},this._E={};var i=Pn(r)?s5(document,r):r;_a(i,i+" is invalid."),this.root=i,n=vn({label:lr(i,qt)||"",labelledby:lr(i,eh)||""},Tb,e.defaults,n||{});try{vn(n,JSON.parse(lr(i,G1)))}catch{_a(!1,"Invalid JSON")}this._o=Object.create(vn({},n))}var t=e.prototype;return t.mount=function(n,i){var a=this,s=this.state,l=this.Components;_a(s.is([to,Sc]),"Already mounted!"),s.set(to),this._C=l,this._T=i||this._T||(this.is(ks)?Lb:Ab),this._E=n||this._E;var c=es({},$b,this._E,{Transition:this._T});return ii(c,function(u,f){var h=u(a,l,a._o);l[f]=h,h.setup&&h.setup()}),ii(l,function(u){u.mount&&u.mount()}),this.emit(Bn),kr(this.root,qw),s.set(zo),this.emit(a0),this},t.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(zo)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},t.go=function(n){return this._C.Controller.go(n),this},t.on=function(n,i){return this.event.on(n,i),this},t.off=function(n){return this.event.off(n),this},t.emit=function(n){var i;return(i=this.event).emit.apply(i,[n].concat(Fn(arguments,1))),this},t.add=function(n,i){return this._C.Slides.add(n,i),this},t.remove=function(n){return this._C.Slides.remove(n),this},t.is=function(n){return this._o.type===n},t.refresh=function(){return this.emit(et),this},t.destroy=function(n){n===void 0&&(n=!0);var i=this.event,a=this.state;return a.is(to)?We(this).on(a0,this.destroy.bind(this,n)):(ii(this._C,function(s){s.destroy&&s.destroy(n)},!0),i.emit(X1),i.destroy(),n&&Qr(this.splides),a.set(Sc)),this},Pw(e,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),oh=Ib;oh.defaults={};oh.STATES=Lw;var Dm=[[Bn,"onMounted"],[a0,"onReady"],[Kr,"onMove"],[Do,"onMoved"],[Y1,"onClick"],[u5,"onActive"],[d5,"onInactive"],[f5,"onVisible"],[h5,"onHidden"],[et,"onRefresh"],[wt,"onUpdated"],[_o,"onResize"],[pu,"onResized"],[p5,"onDrag"],[m5,"onDragging"],[g5,"onDragged"],[mu,"onScroll"],[xi,"onScrolled"],[X1,"onDestroy"],[v5,"onArrowsMounted"],[x5,"onArrowsUpdated"],[y5,"onPaginationMounted"],[w5,"onPaginationUpdated"],[Q1,"onNavigationMounted"],[K1,"onAutoplayPlay"],[b5,"onAutoplayPlaying"],[Z1,"onAutoplayPause"],[J1,"onLazyLoadLoaded"]];function ah(...e){return e.filter(Boolean).join(" ")}function _c(e){return e!==null&&typeof e=="object"}function c0(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((r,n)=>!c0(r,t[n]));if(_c(e)&&_c(t)){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&!r.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!c0(e[i],t[i]))}return e===t}function Rb(e,t){return e.length===t.length&&!e.some((r,n)=>r!==t[n])}function Mb(e,t){if(e){const r=Object.keys(e);for(let n=0;n<r.length;n++){const i=r[n];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function u0(e,t){const r=e;return Mb(t,(n,i)=>{Array.isArray(n)?r[i]=n.slice():_c(n)?r[i]=u0(_c(r[i])?r[i]:{},n):r[i]=n}),r}var Su=({children:e,className:t,...r})=>ce.createElement("div",{className:ah("splide__track",t),...r},ce.createElement("ul",{className:"splide__list"},e)),Cu=class extends ce.Component{constructor(){super(...arguments),this.splideRef=ce.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:r}=this.props,{current:n}=this.splideRef;n&&(this.splide=new oh(n,e),this.bind(this.splide),this.splide.mount(t,r),this.options=u0({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!c0(this.options,e)&&(this.splide.options=e,this.options=u0({},e));const t=this.getSlides();Rb(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){Dm.forEach(([t,r])=>{const n=this.props[r];typeof n=="function"&&e.on(t,(...i)=>{n(e,...i)})})}omit(e,t){return t.forEach(r=>{Object.prototype.hasOwnProperty.call(e,r)&&delete e[r]}),e}render(){const{className:e,tag:t="div",hasTrack:r=!0,children:n,...i}=this.props;return ce.createElement(t,{className:ah("splide",e),ref:this.splideRef,...this.omit(i,["options",...Dm.map(a=>a[1])])},r?ce.createElement(Su,null,n):n)}},ei=({children:e,className:t,...r})=>ce.createElement("li",{className:ah("splide__slide",t),...r},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var N5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fm=ce.createContext&&ce.createContext(N5),Nb=["attr","size","title"];function Ob(e,t){if(e==null)return{};var r=Db(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Db(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function $c(){return $c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$c.apply(this,arguments)}function Bm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Pc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Bm(Object(r),!0).forEach(function(n){Fb(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Bm(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Fb(e,t,r){return t=Bb(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Bb(e){var t=Ub(e,"string");return typeof t=="symbol"?t:t+""}function Ub(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O5(e){return e&&e.map((t,r)=>ce.createElement(t.tag,Pc({key:r},t.attr),O5(t.child)))}function X(e){return t=>ce.createElement(Hb,$c({attr:Pc({},e.attr)},t),O5(e.child))}function Hb(e){var t=r=>{var{attr:n,size:i,title:a}=e,s=Ob(e,Nb),l=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),ce.createElement("svg",$c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:c,style:Pc(Pc({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&ce.createElement("title",null,a),e.children)};return Fm!==void 0?ce.createElement(Fm.Consumer,null,r=>t(r)):t(N5)}function D5(e){return X({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function F5(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function Wb(e){return X({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function Nr(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function $i(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function B5(e){return X({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"},child:[]}]})(e)}function U5(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function H5(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function Zr(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Vb(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function ol(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"},child:[]}]})(e)}function Gl(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function Gb(e){return X({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function qb(e){return X({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function sh(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Yb(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function d0(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Xb(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function W5(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Ed(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function Qb(e){return X({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function V5(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Kb(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"},child:[]}]})(e)}function Di(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function Zb(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Jb(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"},child:[]}]})(e)}function ej(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(e)}function tj(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"},child:[]}]})(e)}function rj(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"},child:[]}]})(e)}function Um(e){return X({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}function f0(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function nj(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"},child:[]}]})(e)}function ij(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"},child:[]}]})(e)}function oj(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(e)}function aj(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"},child:[]}]})(e)}const sj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEXs7O3t7u/w8fLh4uPk5eXs7e7v8PHg4eLu7/Dq6uvj5OTx8vPo6Ony8/Tp6erf4OHn5+jr6+zm5+fz9PX19vf4+fri4+P///8dID/WAAAAAWJLR0QXC9aYjwAAAPBJREFUOMt9k0sSgyAQBd9AUAiIYhLuf9RA/EQQZjZSVFc3sxAoh4R8gB81jNo8ecRKpybPQSTmhRA4KIU8pS8D/UK/UxfaQuCgI7RPC/qHuiYS40rFTXhVkBKzp1pdQil0R8qcsuOi0Ji/KS3tCM05THmjDnLkEtIOXUz90G4yHrPhEMC8P1ifLBPIDrBLZKCg7eiRIcVYpMkH63qmQK/otmMXGqYc2qFFqpZlDx3Q/U2BpuivF8lU5fJGrryqTSH9sKZWl9AtdEJnLoWkA1rQuV0KeaANbaZO6AoFPUUHMJCC7oZOSIvIIgla10cd+gK3yAuahOS58wAAAABJRU5ErkJggg==",lj=d.section`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  position: relative;
  background: url(${sj});
  overflow: hidden;
  min-height: 100vh;
  @media (max-width: 1080px) {
    flex-direction: column;
    height: auto;
  }
`,cj=d.div`
  margin-top: 2rem;
  .splide__list {
    margin-bottom: 1.4rem !important;
  }
  .splide__pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    bottom: -2rem;
  }

  .splide__pagination__page {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    transition:
      background 0.3s,
      transform 0.3s;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--accent-color);
      opacity: 0;
      transform: scale(0.5);
      transition:
        opacity 0.3s,
        transform 0.3s;
    }
    &:focus {
      outline: none;
    }
    &.is-active {
      background: white;
      &:before {
        opacity: 0.3;
        transform: scale(1);
      }
    }
  }

  .splide__arrow {
    display: none;
  }

  .splide__slide {
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s;
    &.is-active {
      opacity: 1;
    }
  }
`,uj=d.div`
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  margin: auto;
  padding: 30px 40px;
  border: 1px solid var(--primary-color);
`,dj=d.p`
  position: relative;
  font-style: italic;
  color: var(--dark-grey-color);
  max-width: 600px;
  margin: var(--spacing-lg) auto;
  font-size: var(--font-size-h4);
  line-height: 1.8;
  text-align: justify;
  font-family: var(--font-tertiary);

  &:before {
    content: "“";
    font-size: 7rem;
    color: var(--primary-color);
    position: absolute;
    top: 5%;
    left: -6%;
    line-height: 0;
  }
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: var(--primary-color);
    margin: 20px auto var(--spacing-lg);
  }

  @media (max-width: 1080px) {
    max-width: auto;
    width: 100%;

    &:before {
      font-size: 3rem;
    }
  }
`,fj=d.p`
  font-weight: bold;
  margin-top: 0;
  font-size: var(--font-size-h3);
  color: var(--text-color);
  font-family: var(--font-tertiary);
`,hj=d.div`
  width: 50%;
  text-align: center;
  z-index: 1;
  @media (max-width: 1080px) {
    width: 90%;
  }
`,pj=d.div`
  margin: 20px 0;
  color: var(--primary-color-dark-5);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  svg:hover {
    color: var(--primary-color-dark-3);
    transform: scale(1.2);
    transition:
      transform 0.3s,
      color 0.3s;
  }
`,mj=Q`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`,gj=Q`
  0%, 100% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.1) rotate(10deg);
  }
`,vj=d.div`
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`,xj=d.img`
  border-radius: 50%;
  border: 3px solid var(--accent-color);
  object-fit: cover;
  position: absolute;
  cursor: pointer;
  ${({size:e})=>e&&`width: ${e}; height: ${e};`}
  ${({$top:e})=>e&&`top: ${e};`}
  ${({$left:e})=>e&&`left: ${e};`}
  ${({bottom:e})=>e&&`bottom: ${e};`}
  ${({right:e})=>e&&`right: ${e};`}
  animation: ${gj} 5s ease-in-out infinite, ${mj} 5s ease-in-out infinite;
  transform: ${({$active:e})=>e==="true"?"scale(1.2)":"scale(1)"};
  filter: ${({$active:e})=>e==="true"?"brightness(1.1)":"grayscale(100%)"};
`,yj=Q`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
`,wj=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  div {
    position: absolute;
    background: color-mix(in srgb, var(--primary-color) 30%, transparent);
    background: var(--background-primary-transparent);

    border-radius: 50%;
    animation: ${yj} 7s linear infinite;
  }

  div:nth-child(1) {
    width: 50px;
    height: 50px;
    top: 10%;
    left: 20%;
  }

  div:nth-child(2) {
    width: 30px;
    height: 30px;
    top: 30%;
    left: 40%;
  }

  div:nth-child(3) {
    width: 40px;
    height: 40px;
    top: 70%;
    left: 60%;
  }

  div:nth-child(4) {
    width: 20px;
    height: 20px;
    top: 50%;
    left: 80%;
  }

  div:nth-child(5) {
    width: 60px;
    height: 60px;
    top: 80%;
    left: 30%;
  }
`,Hm=[{text:"Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",author:"Alice Johnson",img:"/people/1.jpg"},{text:"Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",author:"Sara Doe",img:"/people/2.jpg"},{text:"Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",author:"Emma Smith",img:"/people/3.jpg"},{text:"Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",author:"Mary Johnson",img:"/people/4.jpg"},{text:"Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",author:"Emily Davis",img:"/people/5.jpg"},{text:"Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus.",author:"Sophia Brown",img:"/people/6.jpg"}],Wm=[{size:"100px",$top:"10%",$left:"10%"},{size:"150px",$top:"30%",$left:"50%"},{size:"80px",$top:"70%",$left:"20%"},{size:"120px",$top:"50%",$left:"70%"},{size:"100px",$top:"20%",$left:"80%"},{size:"140px",$top:"75%",$left:"60%"}],G5=()=>{const[e,t]=b.useState(0),r=b.useRef(null),n=a=>{t(a)},i=a=>{r.current&&r.current.go(a)};return o.jsxs(lj,{children:[o.jsxs(wj,{children:[o.jsx("div",{}),o.jsx("div",{}),o.jsx("div",{}),o.jsx("div",{})]}),o.jsxs(hj,{children:[o.jsx(oe,{as:"h4",$colorText:"black",children:"Testimonials"}),o.jsx(oe,{as:"h2",$marginBottom:"1.4rem",children:"Our Happy Customers"}),o.jsxs(pj,{children:[o.jsx(Di,{}),o.jsx(Di,{}),o.jsx(Di,{}),o.jsx(Di,{}),o.jsx(Di,{})]}),o.jsx(cj,{children:o.jsx(Cu,{ref:r,onMoved:a=>n(a.index),options:{type:"loop",perPage:1,autoplay:!0,interval:3e3},children:Hm.map((a,s)=>o.jsx(ei,{children:o.jsxs(uj,{children:[o.jsx(dj,{children:a.text}),o.jsx(fj,{children:a.author})]})},s))})})]}),o.jsx(vj,{children:Hm.map((a,s)=>o.jsx(xj,{src:a.img,...Wm[s%Wm.length],$active:s===e?"true":"false",onClick:()=>i(s)},s))})]})},bj="/assets/hydrating-face-cream-1-B6bQaz8Y.png",jj="/assets/moisturizing-conditioner-1-DDsX_rMl.png",kj="/assets/hydrating-concealer-CA5QZmYx.png",Sj="/assets/wellness-CDO3DxTY.png",Cj=d.section`
  position: relative;
  padding: 2rem 0;
  margin: 4rem auto 1rem;
  text-align: center;
  background-color: var(--background-color);

  @media (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`,Ej=d.div`
  position: relative;
  max-width: 90%;

  margin: auto;
  h4 {
    margin-bottom: var(--spacing-xxxl);
    @media (max-width: 768px) {
      margin-bottom: var(--spacing-xxl);
    }
    @media (max-width: 768px) {
      margin-bottom: var(--spacing-xl);
    }
  }
`;d.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
`;const al=d.div`
  position: relative;
  width: 21rem;
  height: 21rem;

  padding: 1rem;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-5px);
  border: 5px solid rgba(255, 255, 255, 0.4);
  margin: 0.5rem auto; /* Center the card horizontally */
  &.skincare {
    background: linear-gradient(135deg, #ffb7c3, #ffc5cf);
  }

  &.haircare {
    background: linear-gradient(135deg, #76f4e7, #ccf5f2);
  }

  &.makeup {
    background: linear-gradient(135deg, #f96167, #fa8185);
  }

  &.wellness {
    background: linear-gradient(135deg, #5c4146, #7a575e);
  }

  &:hover {
    transform: scale(1.05);

    img {
      transform: scale(1.1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
    transition: opacity 0.4s ease;
    opacity: 1;
    z-index: 2;
  }
  @media (max-width: 768px) {
    width: 18rem;
    height: 18rem;
  }
  @media (max-width: 480px) {
    width: 15rem;
    height: 15rem;
  }
`,sl=d(re)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 2;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
`,ll=d.img`
  width: 80%;
  transform: scale(1.1);
  z-index: 2;
  filter: drop-shadow(18.5938px 2px 4.8px rgba(0, 0, 0, 0.4))
    drop-shadow(19.9219px 4.1778px 155px rgba(0, 0, 0, 0.1));
`,cl=d(oe).attrs({as:"h4"})`
  transform: rotate(5deg);
  letter-spacing: 1.1px;
  text-shadow:
    rgb(0, 0, 0) 18.5938px 13.2326px 2.8px,
    rgba(0, 0, 0, 0.901961) 19.9219px 14.1778px 35px;
`,zj=d(Cu)`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .splide__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,ul=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,lh="1620px",q5="768px",Tc="480px",_j="radial-gradient(circle at 50% -30%, var(--primary-color), var(--primary-color), transparent 75%)",$j="radial-gradient(circle at 70% 150%,  	#76f4e7,  	#76f4e7, transparent 75%)",Pj="white",Tj=d.section`
  position: relative;
  width: 100%;
  padding: 3rem 0 6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${Pj};
  background-image: ${_j}, ${$j};
  @media (max-width: ${q5}) {
    height: auto;
    padding: 2rem 0 5rem;
  }
`,Lj=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  max-width: 1550px;
  @media (max-width: ${lh}) {
    flex-direction: column;
    justify-content: center;
  }
`,Aj=d.div`
  text-align: center;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(-20px);
  }
  &.faq-section-visible {
    animation: ${N1} 1s ease-in-out forwards;
  }
  h2 {
    @media (max-width: 580px) {
      margin-bottom: var(--spacing-xl);
    }
  }
`,Ij=d.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px;
  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(-20px);
  }
  &.faq-section-visible {
    animation: ${M1} 1s ease-in-out forwards;
  }
  @media (max-width: ${lh}) {
    height: 500px;
  }

  @media (max-width: ${Tc}) {
    height: 400px;
  }
`,Rj=d.div`
  position: relative;
  width: 300px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Mj=d.div`
  cursor: pointer;
  width: 18.75rem;
  height: 25rem;
  background-size: cover;
  background-position: center;
  border-radius: 0.625rem;
  position: absolute;
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  opacity: ${e=>e.$position==="center"?1:.6};
  overflow: hidden;
  ${e=>e.$position==="center"&&`
    transform: translateX(0) scale(1.2);
    z-index: 1;

  `}
  ${e=>e.$position==="left"&&`
    transform: perspective(1000px) translateX(-300px) rotateY(30deg) scale(0.8);
    z-index: 0;
  `}
  ${e=>e.$position==="right"&&`
    transform: perspective(1000px) translateX(300px) rotateY(-30deg) scale(0.8);
    z-index: 0;
  `}

  @media (max-width: ${q5}) {
    width: 250px;
    height: 350px;

    ${e=>e.$position==="left"&&`
      transform: translateX(-250px) rotateY(30deg) scale(0.8);
    `}
    ${e=>e.$position==="right"&&`
      transform: translateX(250px) rotateY(-30deg) scale(0.8);
    `}
  }

  @media (max-width: ${lh}) {
    width: 250px;
    height: 370px;
  }

  @media (max-width: ${Tc}) {
    width: 200px;
    height: 300px;

    ${e=>e.$position==="left"&&`
      transform: translateX(-200px) rotateY(30deg) scale(0.8);
    `}
    ${e=>e.$position==="right"&&`
      transform: translateX(200px) rotateY(-30deg) scale(0.8);
    `}
  }
`,Nj=d.div`
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  padding: 0.6rem 0;
  color: #fff;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(245, 245, 245, 0.95)
  );
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  width: 90%;
  max-width: 400px;
  user-select: none;
  border: 1px solid var(--primary-color);
  p,
  span {
    margin: 0;
    padding: 0;
  }
`,Oj=d.div`
  text-align: center;
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
`,Dj=d.p`
  color: var(--primary-color-dark-3);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: var(--font-size-body);
  font-weight: 800;
  font-family: var(--font-tertiary);
`,Fj=d.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Bj=d(oe).attrs({as:"h4"})`
  margin-bottom: 0rem;
  font-size: var(--font-size-small);
  margin-top: 0;
  color: black;
  font-weight: 800;
`,Uj=d.span`
  display: block;
  font-weight: 800;
  color: black;
  font-weight: 700;
  font-size: var(--font-size-small);
  letter-spacing: 0.5px;
`,Hj=d.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`,Ln=d.button`
  background: var(--primary-color);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    color: white;
    font-size: 1.5rem;
    @media (max-width: ${Tc}) {
      font-size: 1rem;
    }
  }

  &:hover {
    background: var(--primary-color-dark-2);
  }
  @media (max-width: ${Tc}) {
    width: 35px;
    height: 35px;
  }
`,Wj=d.section`
  text-align: center;
  padding: ${({$paddingY:e})=>e} 0.5rem;
  background-color: white;
`;d.p`
  font-size: var(--font-size-h5);
  font-weight: bold;
  color: var(--primary-color-dark-5);
  font-family: var(--font-primary);
  margin-bottom: 1rem;
`;const Po=d.div`
  svg {
    display: flex;
    fill: white;
  }
`,Ss=({title:e=!0})=>o.jsx(Cj,{children:o.jsxs(Ej,{children:[e&&o.jsxs(o.Fragment,{children:[o.jsx(oe,{as:"h2",$marginBottom:"1.4rem",children:"Explore Our Natural Beauty Products"}),o.jsx(oe,{as:"h4",children:"Discover a variety of our products"})]}),o.jsxs(zj,{hasTrack:!1,options:{perPage:4,breakpoints:{1500:{perPage:3,arrows:!0},1180:{perPage:2,arrows:!0},680:{perPage:1,arrows:!0}},gap:"1rem",arrows:!1,pagination:!1,drag:"free",snap:!0},children:[o.jsxs(Su,{children:[o.jsx(ei,{children:o.jsx(ul,{children:o.jsx(al,{className:"skincare",children:o.jsxs(sl,{to:"/product-category/skincare",children:[o.jsx(ll,{src:bj,alt:"Skincare"}),o.jsx(cl,{$colorText:"white",children:"Skincare"})]})})})}),o.jsx(ei,{children:o.jsx(ul,{children:o.jsx(al,{className:"haircare",children:o.jsxs(sl,{to:"/product-category/haircare",children:[o.jsx(ll,{src:jj,alt:"Haircare"}),o.jsx(cl,{$colorText:"white",children:"Haircare"})]})})})}),o.jsx(ei,{children:o.jsx(ul,{children:o.jsx(al,{className:"makeup",children:o.jsxs(sl,{to:"/product-category/makeup",children:[o.jsx(ll,{src:kj,alt:"Makeup"}),o.jsx(cl,{$colorText:"white",children:"Makeup"})]})})})}),o.jsx(ei,{children:o.jsx(ul,{children:o.jsx(al,{className:"wellness",children:o.jsxs(sl,{to:"/product-category/wellness",children:[o.jsx(ll,{src:Sj,alt:"Wellness"}),o.jsx(cl,{$colorText:"white",children:"Wellness"})]})})})})]}),o.jsx("div",{className:"splide__arrows",children:o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:"1rem",children:[o.jsx(Ln,{className:"splide__arrow splide__arrow--prev",children:o.jsx(Po,{className:"-left-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow rotate-180",children:o.jsx(Zr,{})})}),o.jsx(Ln,{className:"splide__arrow splide__arrow--next",children:o.jsx(Po,{className:"-right-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow",children:o.jsx(Zr,{})})})]})})]})]})}),Vj=Q`
  0% { top: 0; right: 0; }
  50% { top: 100%; right: 75%; }
  75% { top: 100%; right: 25%; }
  100% { top: 0; right: 0; }
`,Gj=Q`
  0% { top: -50%; left: 0%; }
  60% { top: 100%; left: 75%; }
  85% { top: 100%; left: 25%; }
  100% { top: -50%; left: 0%; }
`,qj=Q`
  0% { bottom: 0; left: 0; }
  40% { bottom: 100%; left: 75%; }
  65% { bottom: 40%; left: 50%; }
  100% { bottom: 0; left: 0; }
`,Yj=Q`
  0% { bottom: -50%; right: 0; }
  50% { bottom: 0%; right: 40%; }
  90% { bottom: 50%; right: 25%; }
  100% { bottom: -50%; right: 0; }
`,ta=Q`
  0% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }
  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }
  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }
  100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
`,Xj=d.div`
  display: grid;
  place-items: center;
  background-color: black;
  color: transparent;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 3rem;
`,Qj=d.h1`
  font-size: calc(var(--font-size-h1) + 150%);
  font-weight: 800;
  letter-spacing: clamp(-1.75px, -0.25vw, -3.5px);
  position: relative;
  margin: 0;
  z-index: 1;
  /* Aurora effect mask */
  &::after {
    content: "The Best Natural Beauty Products Here";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-color: white; /* Background color to mask aurora outside text */
    z-index: 2;
    mix-blend-mode: difference; /* Ensures the effect shows only within text */
  }
`,Kj=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,dl=d.div`
  position: absolute;
  width: 60vw;
  height: 60vw;
  border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
  filter: blur(1rem);
  mix-blend-mode: overlay;
  animation: ${ta} 6s ease-in-out infinite;

  &:nth-child(1) {
    background-color: var(--primary-color);
    top: -50%;
    animation:
      ${Vj} 12s ease-in-out infinite alternate,
      ${ta} 6s ease-in-out infinite;
  }

  &:nth-child(2) {
    background-color: var(--accent-color);
    right: 0;
    top: 0;
    animation:
      ${Gj} 12s ease-in-out infinite alternate,
      ${ta} 6s ease-in-out infinite;
  }

  &:nth-child(3) {
    background-color: var(--secondary-color);
    left: 0;
    bottom: 0;
    animation:
      ${qj} 8s ease-in-out infinite alternate,
      ${ta} 6s ease-in-out infinite;
  }

  &:nth-child(4) {
    background-color: var(--primary-color-dark-6);
    right: 0;
    bottom: -50%;
    animation:
      ${Yj} 24s ease-in-out infinite alternate,
      ${ta} 6s ease-in-out infinite;
  }
`,Zj=()=>o.jsxs(Xj,{children:[o.jsx(Qj,{children:"The Best Natural Beauty Products Here"}),o.jsxs(Kj,{children:[o.jsx(dl,{}),o.jsx(dl,{}),o.jsx(dl,{}),o.jsx(dl,{})]})]});var Y5={exports:{}},X5={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=b;function Jj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ek=typeof Object.is=="function"?Object.is:Jj,tk=Cs.useSyncExternalStore,rk=Cs.useRef,nk=Cs.useEffect,ik=Cs.useMemo,ok=Cs.useDebugValue;X5.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var a=rk(null);if(a.current===null){var s={hasValue:!1,value:null};a.current=s}else s=a.current;a=ik(function(){function c(w){if(!u){if(u=!0,f=w,w=n(w),i!==void 0&&s.hasValue){var x=s.value;if(i(x,w))return h=x}return h=w}if(x=h,ek(f,w))return x;var j=n(w);return i!==void 0&&i(x,j)?x:(f=w,h=j)}var u=!1,f,h,m=r===void 0?null:r;return[function(){return c(t())},m===null?void 0:function(){return c(m())}]},[t,r,n,i]);var l=tk(e,a[0],a[1]);return nk(function(){s.hasValue=!0,s.value=l},[l]),ok(l),l};Y5.exports=X5;var ak=Y5.exports,Mt="default"in Yd?ce:Yd,Vm=Symbol.for("react-redux-context"),Gm=typeof globalThis<"u"?globalThis:{};function sk(){if(!Mt.createContext)return{};const e=Gm[Vm]??(Gm[Vm]=new Map);let t=e.get(Mt.createContext);return t||(t=Mt.createContext(null),e.set(Mt.createContext,t)),t}var An=sk(),lk=()=>{throw new Error("uSES not initialized!")};function ch(e=An){return function(){return Mt.useContext(e)}}var Q5=ch(),K5=lk,ck=e=>{K5=e},uk=(e,t)=>e===t;function dk(e=An){const t=e===An?Q5:ch(e),r=(n,i={})=>{const{equalityFn:a=uk,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:c,getServerState:u,stabilityCheck:f,identityFunctionCheck:h}=t();Mt.useRef(!0);const m=Mt.useCallback({[n.name](x){return n(x)}}[n.name],[n,f,s.stabilityCheck]),w=K5(c.addNestedSub,l.getState,u||l.getState,m,a);return Mt.useDebugValue(w),w};return Object.assign(r,{withTypes:()=>r}),r}var Pe=dk();function fk(e){e()}function hk(){let e=null,t=null;return{clear(){e=null,t=null},notify(){fk(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const i=t={callback:r,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!n||e===null||(n=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var qm={notify(){},get:()=>[]};function pk(e,t){let r,n=qm,i=0,a=!1;function s(j){f();const E=n.subscribe(j);let g=!1;return()=>{g||(g=!0,E(),h())}}function l(){n.notify()}function c(){x.onStateChange&&x.onStateChange()}function u(){return a}function f(){i++,r||(r=e.subscribe(c),n=hk())}function h(){i--,r&&i===0&&(r(),r=void 0,n.clear(),n=qm)}function m(){a||(a=!0,f())}function w(){a&&(a=!1,h())}const x={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:c,isSubscribed:u,trySubscribe:m,tryUnsubscribe:w,getListeners:()=>n};return x}var mk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gk=typeof navigator<"u"&&navigator.product==="ReactNative",vk=mk||gk?Mt.useLayoutEffect:Mt.useEffect;function xk({store:e,context:t,children:r,serverState:n,stabilityCheck:i="once",identityFunctionCheck:a="once"}){const s=Mt.useMemo(()=>{const u=pk(e);return{store:e,subscription:u,getServerState:n?()=>n:void 0,stabilityCheck:i,identityFunctionCheck:a}},[e,n,i,a]),l=Mt.useMemo(()=>e.getState(),[e]);vk(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,l]);const c=t||An;return Mt.createElement(c.Provider,{value:s},r)}var yk=xk;function Z5(e=An){const t=e===An?Q5:ch(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var wk=Z5();function bk(e=An){const t=e===An?wk:Z5(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var zr=bk();ck(ak.useSyncExternalStoreWithSelector);const jk=e=>b.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},b.createElement("path",{d:"M14 15.6569V10M14 10H8.34315M14 10L5.63604 18.364M10.2432 20.8278C13.0904 21.3917 16.1575 20.5704 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C3.42957 7.84251 2.60828 10.9096 3.17216 13.7568",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),kk=Q`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,Sk=d.div`
  position: relative;
  width: 9rem;
  height: 9rem;
  margin: 0;
  margin: 1.5rem auto;
  @media (max-width: 580px) {
    display: none;
  }
`,Ck=d.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: ${kk} 15s linear infinite;
  }

  text {
    font-family: var(--font-primary);
    ${({$textSize:e})=>e&&`font-size: ${e};`}
  }
`,Ek=d.div`
  svg {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: transform 0.5s;

    path {
      stroke: #996d75;
      transition: stroke 0.5s;
    }
  }

  :hover {
    svg {
      transform: translate(-50%, -50%) rotate(30deg);
    }

    path {
      stroke: black;
    }
  }
`,uh=({textInput:e,textSize:t,linkTo:r})=>{const n=e;return o.jsx(re,{to:r,children:o.jsxs(Sk,{children:[o.jsx(Ck,{$textSize:t,children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",children:[o.jsx("defs",{children:o.jsx("path",{id:"circlePath",d:"M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),o.jsxs("g",{children:[o.jsx("use",{xlinkHref:"#circlePath",fill:"none"}),o.jsx("text",{fill:"#000",children:o.jsx("textPath",{xlinkHref:"#circlePath",children:n})})]})]})}),o.jsx(Ek,{children:o.jsx(jk,{})})]})})},zk=()=>{const t=Pe(g=>g.products.products).slice(0,3),[r,n]=b.useState(0),[i,a]=b.useState(!1),s=b.useRef(0),l=b.useRef(0),c=b.useRef(null),u=b.useRef(null),f=Cr(),h=(g,p)=>{a(!0),s.current=x(g),l.current=p},m=g=>{if(i){const v=x(g)-s.current;v>100?(E(),a(!1)):v<-100&&(j(),a(!1))}},w=()=>{a(!1)},x=g=>g.type.includes("mouse")?g.clientX:g.touches[0].clientX,j=()=>{n((r+1)%t.length)},E=()=>{n((r-1+t.length)%t.length)};return b.useEffect(()=>{const g=new IntersectionObserver((k,z)=>{k.forEach(y=>{y.isIntersecting?(y.target.classList.add("faq-section-visible"),y.target.classList.remove("faq-section-hidden"),z.unobserve(y.target)):(y.target.classList.add("faq-section-hidden"),y.target.classList.remove("faq-section-visible"))})},{threshold:.1}),p=c.current,v=u.current;return p&&g.observe(p),v&&g.observe(v),()=>{p&&g.unobserve(p),v&&g.unobserve(v)}},[]),o.jsx(Tj,{children:o.jsxs(Lj,{children:[o.jsxs(Aj,{ref:c,children:[o.jsx(oe,{as:"h4",$marginBottom:"0px",$colorText:"black",children:"Discover Our Best-Sellers"}),o.jsx(oe,{as:"h2",$customBackground:!1,$marginBottom:"0px",children:"Top Selling Products"}),o.jsx(uh,{textInput:" ALL PRODUCTS - ALL PRODUCTS",textSize:"1.45rem",linkTo:"/all-products"})]}),o.jsxs(Ij,{ref:u,onMouseMove:m,onMouseUp:w,onMouseLeave:w,onTouchMove:m,onTouchEnd:w,children:[o.jsx(Rj,{children:t.map((g,p)=>{let v="";return p===r?v="center":p===(r-1+t.length)%t.length?v="left":p===(r+1)%t.length&&(v="right"),o.jsx(Mj,{$position:v,onMouseDown:k=>h(k,p),onTouchStart:k=>h(k,p),onClick:()=>f(`/shop/${g.slug}`),style:{backgroundImage:`url(${`/shop/${g.category}/${g.image}`})`},children:o.jsx(Nj,{children:o.jsxs(Oj,{children:[o.jsx(Dj,{children:g.category}),o.jsxs(Fj,{children:[o.jsx(Bj,{children:g.title}),o.jsxs(Uj,{children:["$",g.price]})]})]})})},p)})}),o.jsx(Hj,{children:o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:"1rem",children:[o.jsx(Ln,{onClick:E,children:o.jsx(H5,{})}),o.jsx(Ln,{onClick:j,children:o.jsx(Zr,{})})]})})]})]})})},_k="/assets/ingredients-C2L2WbGE.jpg",$k=d.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 3rem auto;
  background-color: white;
  color: black;
  position: relative;
  overflow: hidden;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`,Pk=d.div`
  flex: 1.5;
  padding: var(--spacing-xl);
  z-index: 1;
  max-width: 950px;
  margin-right: auto;
  /* background-color: var(--primary-color-dark-5); */
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`,Tk=d.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  color: var(--text-color-secondary);
`,Lk=d.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin: var(--spacing-lg);
`,Ak=d.img`
  width: 100%;
  /* max-width: 400px; */
  border-radius: var(--border-radius-large);
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
`,Ik=d.div`
  position: absolute;
  top: 15%;
  left: -10%;
  width: 250px;
  height: 250px;
  background: var(--secondary-color);
  opacity: 0.1;
  border-radius: 50%;
  z-index: 0;
  animation:
    pulse 6s infinite,
    float 3s ease-in-out infinite;
  filter: blur(60px);
  transform: scale(1.2);

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1.4);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`,Rk=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--primary-color-light-5) 0%,
    var(--background-color) 100%
  );
  opacity: 0.25;
  z-index: 0;
`,Mk=d.div`
  padding: var(--spacing-md);
  background-color: var(--background-secondary);
  border-radius: var(--border-radius-medium);
`,Nk=d.ul`
  list-style: none;
  padding: 0;
`,Ok=d.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);

  .icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-right: var(--spacing-sm);
  }

  .details {
    max-width: 500px;

    .name {
      font-size: var(--font-size-h5);
      font-weight: bold;
      color: var(--primary-color-dark-3);
      margin-bottom: var(--spacing-xs);
    }

    .description {
      font-family: var(--font-secondary);
      font-size: var(--font-size-small);
      color: var(--text-color-secondary);
    }
  }
`,Dk=[{icon:o.jsx(ol,{}),name:"Aloe Vera",description:"Hydrates and soothes the skin, providing a cooling sensation."},{icon:o.jsx(ol,{}),name:"Coconut Oil",description:"Moisturizes deeply, leaving the skin soft and supple."},{icon:o.jsx(ol,{}),name:"Shea Butter",description:"Rich in vitamins A and E, it nourishes and protects the skin."},{icon:o.jsx(ol,{}),name:"Green Tea Extract",description:"Packed with antioxidants, it helps fight free radicals."}],Fk=()=>o.jsxs(Mk,{children:[o.jsx(oe,{as:"h4",$marginBottom:"2rem",children:"Highlight Key Ingredients"}),o.jsx(Nk,{children:Dk.map((e,t)=>o.jsxs(Ok,{children:[o.jsx("div",{className:"icon",children:e.icon}),o.jsxs("div",{className:"details",children:[o.jsx("div",{className:"name",children:e.name}),o.jsx("div",{className:"description",children:e.description})]})]},t))})]}),Bk=()=>o.jsxs($k,{children:[o.jsx(Rk,{}),o.jsx(Ik,{}),o.jsxs(Pk,{children:[o.jsx(oe,{as:"h2",$marginBottom:"1.4rem",$colorText:"var(--primary-color-dark-4)",children:"The Luxury of Organic Skincare"}),o.jsx(Tk,{children:"Discover the purest organic ingredients carefully crafted into luxurious skincare products. Our formulations are designed to rejuvenate and enhance your natural beauty, giving your skin the care it truly deserves."}),o.jsx(Fk,{}),o.jsx(Xe,{size:"small",children:"Explore Our Range"})]}),o.jsx(Lk,{children:o.jsx(Ak,{src:_k,alt:"Organic skincare product"})})]}),Eu="1620px",J5="768px",Lc="480px",Uk="radial-gradient(circle at 50% -30%, var(--primary-color), var(--primary-color), transparent 75%)",Hk="radial-gradient(circle at 70% 150%,  	#76f4e7,  	#76f4e7, transparent 75%)",Wk="white",Vk=d.section`
  position: relative;
  width: 100%;
  padding: 3rem 0 6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${Wk};
  background-image: ${Uk}, ${Hk};
  @media (max-width: ${J5}) {
    height: auto;
    padding: 2rem 0 5rem;
  }
`,Gk=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  max-width: 1550px;
  @media (max-width: ${Eu}) {
    flex-direction: column;
    justify-content: center;
  }
`,qk=d.div`
  text-align: center;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(-20px);
  }
  &.faq-section-visible {
    animation: ${N1} 1s ease-in-out forwards;
  }
  h2 {
    @media (max-width: 580px) {
      margin-bottom: var(--spacing-xl);
    }
  }
  @media (max-width: ${Eu}) {
    order: -1;
  }
`,Yk=d.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px;
  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(-20px);
  }
  &.faq-section-visible {
    animation: ${M1} 1s ease-in-out forwards;
  }
  @media (max-width: ${Eu}) {
    height: 500px;
  }

  @media (max-width: ${Lc}) {
    height: 400px;
  }
`,Xk=d.div`
  position: relative;
  width: 300px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Qk=d.div`
  cursor: pointer;
  width: 18.75rem;
  height: 25rem;
  background-size: cover;
  background-position: center;
  border-radius: 0.625rem;
  position: absolute;
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  opacity: ${e=>e.$position==="center"?1:.6};
  overflow: hidden;
  ${e=>e.$position==="center"&&`
    transform: translateX(0) scale(1.2);
    z-index: 1;

  `}
  ${e=>e.$position==="left"&&`
    transform: perspective(1000px) translateX(-300px) rotateY(30deg) scale(0.8);
    z-index: 0;
  `}
  ${e=>e.$position==="right"&&`
    transform: perspective(1000px) translateX(300px) rotateY(-30deg) scale(0.8);
    z-index: 0;
  `}

  @media (max-width: ${J5}) {
    width: 250px;
    height: 350px;

    ${e=>e.$position==="left"&&`
      transform: translateX(-250px) rotateY(30deg) scale(0.8);
    `}
    ${e=>e.$position==="right"&&`
      transform: translateX(250px) rotateY(-30deg) scale(0.8);
    `}
  }

  @media (max-width: ${Eu}) {
    width: 250px;
    height: 370px;
  }

  @media (max-width: ${Lc}) {
    width: 200px;
    height: 300px;

    ${e=>e.$position==="left"&&`
      transform: translateX(-200px) rotateY(30deg) scale(0.8);
    `}
    ${e=>e.$position==="right"&&`
      transform: translateX(200px) rotateY(-30deg) scale(0.8);
    `}
  }
`,Kk=d.div`
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  padding: 0.6rem 0;
  color: #fff;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(245, 245, 245, 0.95)
  );
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  width: 90%;
  max-width: 400px;
  user-select: none;
  border: 1px solid var(--primary-color);
  p,
  span {
    margin: 0;
    padding: 0;
  }
`,Zk=d.div`
  text-align: center;
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
`,Jk=d.p`
  color: var(--primary-color-dark-3);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: var(--font-size-body);
  font-weight: 800;
  font-family: var(--font-tertiary);
`,eS=d.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`,tS=d(oe).attrs({as:"h4"})`
  margin-bottom: 0rem;
  font-size: var(--font-size-small);
  margin-top: 0;
  color: black;
  font-weight: 800;
`,rS=d.span`
  display: block;
  font-weight: 800;
  color: black;
  font-weight: 700;
  font-size: var(--font-size-small);
  letter-spacing: 0.5px;
`,nS=d.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`,Ym=d.button`
  background: var(--primary-color);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    color: white;
    font-size: 1.5rem;
    @media (max-width: ${Lc}) {
      font-size: 1rem;
    }
  }

  &:hover {
    background: var(--primary-color-dark-2);
  }
  @media (max-width: ${Lc}) {
    width: 35px;
    height: 35px;
  }
`,iS=()=>{const{haircare:e}=Pe(g=>g.products.productsByCate),t=e.slice(0,3),[r,n]=b.useState(0),[i,a]=b.useState(!1),s=b.useRef(0),l=b.useRef(0),c=b.useRef(null),u=b.useRef(null),f=Cr(),h=(g,p)=>{a(!0),s.current=x(g),l.current=p},m=g=>{if(i){const v=x(g)-s.current;v>100?(E(),a(!1)):v<-100&&(j(),a(!1))}},w=()=>{a(!1)},x=g=>g.type.includes("mouse")?g.clientX:g.touches[0].clientX,j=()=>{n((r+1)%t.length)},E=()=>{n((r-1+t.length)%t.length)};return b.useEffect(()=>{const g=new IntersectionObserver((k,z)=>{k.forEach(y=>{y.isIntersecting?(y.target.classList.add("faq-section-visible"),y.target.classList.remove("faq-section-hidden"),z.unobserve(y.target)):(y.target.classList.add("faq-section-hidden"),y.target.classList.remove("faq-section-visible"))})},{threshold:.1}),p=c.current,v=u.current;return p&&g.observe(p),v&&g.observe(v),()=>{p&&g.unobserve(p),v&&g.unobserve(v)}},[]),o.jsx(Vk,{children:o.jsxs(Gk,{children:[o.jsxs(Yk,{ref:u,onMouseMove:m,onMouseUp:w,onMouseLeave:w,onTouchMove:m,onTouchEnd:w,children:[o.jsx(Xk,{children:t.map((g,p)=>{let v="";return p===r?v="center":p===(r-1+t.length)%t.length?v="left":p===(r+1)%t.length&&(v="right"),o.jsx(Qk,{$position:v,onMouseDown:k=>h(k,p),onTouchStart:k=>h(k,p),onClick:()=>f(`/shop/${g.slug}`),style:{backgroundImage:`url(${`/shop/${g.category}/${g.image}`})`},children:o.jsx(Kk,{children:o.jsxs(Zk,{children:[o.jsx(Jk,{children:g.category}),o.jsxs(eS,{children:[o.jsx(tS,{children:g.title}),o.jsxs(rS,{children:["$",g.price]})]})]})})},p)})}),o.jsx(nS,{children:o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:"1rem",children:[o.jsx(Ym,{onClick:E,children:o.jsx(H5,{})}),o.jsx(Ym,{onClick:j,children:o.jsx(Zr,{})})]})})]}),o.jsxs(qk,{ref:c,children:[o.jsx(oe,{as:"h4",$marginBottom:"0px",$colorText:"black",children:"Discover Our Hair Care Products"}),o.jsx(oe,{as:"h2",$customBackground:!1,$marginBottom:"0px",children:"Most Relevant Products"}),o.jsx(uh,{textInput:" ALL PRODUCTS - ALL PRODUCTS",textSize:"1.45rem",linkTo:"/product-category/haircare"})]})]})})},oS=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @media (max-width: 680px) {
    overflow-y: auto;
  }
`,aS=d.div`
  background: white;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  animation: ${({$isClosing:e})=>e?ve`
          ${Y4} 0.5s ease-in-out
        `:ve`
          ${A9} 0.5s ease-in-out
        `};
  @media (max-width: 680px) {
    max-height: 95%;
    max-width: 95%;
  }
`,sS=d.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: none;
  border: none;
  cursor: pointer;
  background-color: black;
  padding: 0;
  color: white;
  transition: transform 0.5s ease;
  z-index: 1;
  .inner {
    display: block;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      width: 25px;
      background-color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      transition: ease-out 0.2s all;
    }
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 25px;
      background-color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      transition: ease-out 0.2s all;
    }
  }
  .label {
    color: #fff;
    opacity: 0;
    transition: all 0.2s ease-out;
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
  }
  &:hover,
  &:focus {
    .inner {
      &:before {
        transform: translate(-50%, 0%) rotate(0);
        top: 25%;
      }
      &:after {
        transform: translate(-50%, 0%) rotate(0);
        top: 72%;
      }
    }
    .label {
      opacity: 1;
    }
  }
`,e3=d.button`
  position: absolute;
  top: -15px;
  left: -15px;
  z-index: 2;
  width: 30px;
  height: 30px;
  background: none;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-out;
  background-color: white;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: var(--text-color);
    left: 50%;
    top: 50%;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover,
  &:focus {
    transform: rotate(180deg);
    &:before,
    &:after {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`,zu=b.createContext(),ar=({children:e})=>{const[t,r]=b.useState(""),[n,i]=b.useState(!1),a=()=>{i(!0),setTimeout(()=>{r(""),i(!1)},500)},s=l=>{r(l),i(!1)};return o.jsx(zu.Provider,{value:{isOpen:t,openModal:s,closeModal:a,$isClosing:n},children:e})},lS=({children:e,opens:t})=>{const{openModal:r}=b.useContext(zu);return b.cloneElement(e,{onClick:()=>r(t)})},cS=({children:e,name:t})=>{const{isOpen:r,closeModal:n,$isClosing:i}=b.useContext(zu),a=s=>{s.target===s.currentTarget&&n()};return t!==r&&!i?null:ds.createPortal(o.jsx(oS,{onClick:a,children:o.jsxs(aS,{$isClosing:i,children:[o.jsx(sS,{onClick:n,children:o.jsx("span",{className:"inner",children:o.jsx("span",{className:"label",children:"Close"})})}),o.jsx("div",{children:e})]})}),document.body)};ar.Trigger=lS;ar.Content=cS;const uS=d.span`
  text-decoration: line-through;
  color: var(--dark-grey-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
`,dS=d.span`
  color: black;
  font-family: var(--font-primary);
  font-size: ${({$fontSize:e})=>e||"var(--font-size-h6)"};
  margin-left: 0.5rem;
`,fS=d.span`
  color: black;
  font-family: var(--font-primary);
  font-size: ${({$fontSize:e})=>e||"var(--font-size-h6)"};
`,Es=({product:e,$fontSize:t})=>{const r=e.discount!==void 0&&e.discount>0,n=r?e.price*(1-e.discount/100):null;return o.jsx(o.Fragment,{children:r?o.jsxs(ge,{type:"horizontal",$alignItems:"center",$justifyContent:"flex-start",$flexGap:"0.4rem",children:[o.jsxs(dS,{$fontSize:t,children:["$",n.toFixed(2)]}),o.jsxs(uS,{$fontSize:t,children:["$",e.price]})]}):o.jsxs(fS,{$fontSize:t,children:["$",e.price]})})};function ma(e){return X({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"},child:[]}]})(e)}function hS(e){return X({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6zm8.9 5v-10.5l1.7 3.8c.1.3.5.5.8.6l4.2.5-3.1 2.8c-.3.2-.4.6-.3 1 0 .2.5 2.2.8 4.1l-3.6-2.1c-.2-.2-.3-.2-.5-.2z"},child:[]}]})(e)}function pS(e){return X({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.855 20.966c-.224 0-.443-.05-.646-.146l-.104-.051-4.107-2.343-4.107 2.344-.106.053c-.488.228-1.085.174-1.521-.143-.469-.34-.701-.933-.586-1.509l.957-4.642-1.602-1.457-1.895-1.725-.078-.082c-.375-.396-.509-.97-.34-1.492.173-.524.62-.912 1.16-1.009l.102-.018 4.701-.521 1.946-4.31.06-.11c.262-.473.764-.771 1.309-.771.543 0 1.044.298 1.309.77l.06.112 1.948 4.312 4.701.521.104.017c.539.1.986.486 1.158 1.012.17.521.035 1.098-.34 1.494l-.078.078-3.498 3.184.957 4.632c.113.587-.118 1.178-.59 1.519-.252.182-.556.281-.874.281zm-8.149-6.564c-.039.182-.466 2.246-.845 4.082l3.643-2.077c.307-.175.684-.175.99 0l3.643 2.075-.849-4.104c-.071-.346.045-.705.308-.942l3.1-2.822-4.168-.461c-.351-.039-.654-.26-.801-.584l-1.728-3.821-1.726 3.821c-.146.322-.45.543-.801.584l-4.168.461 3.1 2.822c.272.246.384.617.302.966z"},child:[]}]})(e)}function _u(e){const t=Math.floor(e),r=e-t>=.5?1:0,n=5-t-r,i=[];for(let a=0;a<t;a++)i.push(o.jsx(ma,{},`full_${a}`));r===1&&i.push(o.jsx(hS,{},"half"));for(let a=0;a<n;a++)i.push(o.jsx(pS,{},`empty_${a}`));return i}function st(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var mS=typeof Symbol=="function"&&Symbol.observable||"@@observable",Xm=mS,zd=()=>Math.random().toString(36).substring(7).split("").join("."),gS={INIT:`@@redux/INIT${zd()}`,REPLACE:`@@redux/REPLACE${zd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${zd()}`},Ac=gS;function dh(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function t3(e,t,r){if(typeof e!="function")throw new Error(st(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(st(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(st(1));return r(t3)(e,t)}let n=e,i=t,a=new Map,s=a,l=0,c=!1;function u(){s===a&&(s=new Map,a.forEach((E,g)=>{s.set(g,E)}))}function f(){if(c)throw new Error(st(3));return i}function h(E){if(typeof E!="function")throw new Error(st(4));if(c)throw new Error(st(5));let g=!0;u();const p=l++;return s.set(p,E),function(){if(g){if(c)throw new Error(st(6));g=!1,u(),s.delete(p),a=null}}}function m(E){if(!dh(E))throw new Error(st(7));if(typeof E.type>"u")throw new Error(st(8));if(typeof E.type!="string")throw new Error(st(17));if(c)throw new Error(st(9));try{c=!0,i=n(i,E)}finally{c=!1}return(a=s).forEach(p=>{p()}),E}function w(E){if(typeof E!="function")throw new Error(st(10));n=E,m({type:Ac.REPLACE})}function x(){const E=h;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(st(11));function p(){const k=g;k.next&&k.next(f())}return p(),{unsubscribe:E(p)}},[Xm](){return this}}}return m({type:Ac.INIT}),{dispatch:m,subscribe:h,getState:f,replaceReducer:w,[Xm]:x}}function vS(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Ac.INIT})>"u")throw new Error(st(12));if(typeof r(void 0,{type:Ac.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(st(13))})}function xS(e){const t=Object.keys(e),r={};for(let a=0;a<t.length;a++){const s=t[a];typeof e[s]=="function"&&(r[s]=e[s])}const n=Object.keys(r);let i;try{vS(r)}catch(a){i=a}return function(s={},l){if(i)throw i;let c=!1;const u={};for(let f=0;f<n.length;f++){const h=n[f],m=r[h],w=s[h],x=m(w,l);if(typeof x>"u")throw l&&l.type,new Error(st(14));u[h]=x,c=c||x!==w}return c=c||n.length!==Object.keys(s).length,c?u:s}}function Ic(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function yS(...e){return t=>(r,n)=>{const i=t(r,n);let a=()=>{throw new Error(st(15))};const s={getState:i.getState,dispatch:(c,...u)=>a(c,...u)},l=e.map(c=>c(s));return a=Ic(...l)(i.dispatch),{...i,dispatch:a}}}function wS(e){return dh(e)&&"type"in e&&typeof e.type=="string"}var r3=Symbol.for("immer-nothing"),Qm=Symbol.for("immer-draftable"),Dt=Symbol.for("immer-state");function sr(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var To=Object.getPrototypeOf;function hi(e){return!!e&&!!e[Dt]}function Jr(e){var t;return e?n3(e)||Array.isArray(e)||!!e[Qm]||!!((t=e.constructor)!=null&&t[Qm])||Pu(e)||Tu(e):!1}var bS=Object.prototype.constructor.toString();function n3(e){if(!e||typeof e!="object")return!1;const t=To(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===bS}function Rc(e,t){$u(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function $u(e){const t=e[Dt];return t?t.type_:Array.isArray(e)?1:Pu(e)?2:Tu(e)?3:0}function h0(e,t){return $u(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function i3(e,t,r){const n=$u(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function jS(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Pu(e){return e instanceof Map}function Tu(e){return e instanceof Set}function Gn(e){return e.copy_||e.base_}function p0(e,t){if(Pu(e))return new Map(e);if(Tu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=n3(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[Dt];let i=Reflect.ownKeys(n);for(let a=0;a<i.length;a++){const s=i[a],l=n[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(n[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(To(e),n)}else{const n=To(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function fh(e,t=!1){return Lu(e)||hi(e)||!Jr(e)||($u(e)>1&&(e.set=e.add=e.clear=e.delete=kS),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>fh(n,!0))),e}function kS(){sr(2)}function Lu(e){return Object.isFrozen(e)}var SS={};function pi(e){const t=SS[e];return t||sr(0,e),t}var is;function o3(){return is}function CS(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Km(e,t){t&&(pi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function m0(e){g0(e),e.drafts_.forEach(ES),e.drafts_=null}function g0(e){e===is&&(is=e.parent_)}function Zm(e){return is=CS(is,e)}function ES(e){const t=e[Dt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Jm(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[Dt].modified_&&(m0(t),sr(4)),Jr(e)&&(e=Mc(t,e),t.parent_||Nc(t,e)),t.patches_&&pi("Patches").generateReplacementPatches_(r[Dt].base_,e,t.patches_,t.inversePatches_)):e=Mc(t,r,[]),m0(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==r3?e:void 0}function Mc(e,t,r){if(Lu(t))return t;const n=t[Dt];if(!n)return Rc(t,(i,a)=>eg(e,n,t,i,a,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return Nc(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let a=i,s=!1;n.type_===3&&(a=new Set(i),i.clear(),s=!0),Rc(a,(l,c)=>eg(e,n,i,l,c,r,s)),Nc(e,i,!1),r&&e.patches_&&pi("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function eg(e,t,r,n,i,a,s){if(hi(i)){const l=a&&t&&t.type_!==3&&!h0(t.assigned_,n)?a.concat(n):void 0,c=Mc(e,i,l);if(i3(r,n,c),hi(c))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(Jr(i)&&!Lu(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Mc(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&Nc(e,i)}}function Nc(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&fh(t,r)}function zS(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:o3(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,a=hh;r&&(i=[n],a=os);const{revoke:s,proxy:l}=Proxy.revocable(i,a);return n.draft_=l,n.revoke_=s,l}var hh={get(e,t){if(t===Dt)return e;const r=Gn(e);if(!h0(r,t))return _S(e,r,t);const n=r[t];return e.finalized_||!Jr(n)?n:n===_d(e.base_,t)?($d(e),e.copy_[t]=x0(n,e)):n},has(e,t){return t in Gn(e)},ownKeys(e){return Reflect.ownKeys(Gn(e))},set(e,t,r){const n=a3(Gn(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=_d(Gn(e),t),a=i==null?void 0:i[Dt];if(a&&a.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(jS(r,i)&&(r!==void 0||h0(e.base_,t)))return!0;$d(e),v0(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return _d(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,$d(e),v0(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=Gn(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){sr(11)},getPrototypeOf(e){return To(e.base_)},setPrototypeOf(){sr(12)}},os={};Rc(hh,(e,t)=>{os[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});os.deleteProperty=function(e,t){return os.set.call(this,e,t,void 0)};os.set=function(e,t,r){return hh.set.call(this,e[0],t,r,e[0])};function _d(e,t){const r=e[Dt];return(r?Gn(r):e)[t]}function _S(e,t,r){var i;const n=a3(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function a3(e,t){if(!(t in e))return;let r=To(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=To(r)}}function v0(e){e.modified_||(e.modified_=!0,e.parent_&&v0(e.parent_))}function $d(e){e.copy_||(e.copy_=p0(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var $S=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const a=r;r=t;const s=this;return function(c=a,...u){return s.produce(c,f=>r.call(this,f,...u))}}typeof r!="function"&&sr(6),n!==void 0&&typeof n!="function"&&sr(7);let i;if(Jr(t)){const a=Zm(this),s=x0(t,void 0);let l=!0;try{i=r(s),l=!1}finally{l?m0(a):g0(a)}return Km(a,n),Jm(i,a)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===r3&&(i=void 0),this.autoFreeze_&&fh(i,!0),n){const a=[],s=[];pi("Patches").generateReplacementPatches_(t,i,a,s),n(a,s)}return i}else sr(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...l)=>this.produceWithPatches(s,c=>t(c,...l));let n,i;return[this.produce(t,r,(s,l)=>{n=s,i=l}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Jr(e)||sr(8),hi(e)&&(e=PS(e));const t=Zm(this),r=x0(e,void 0);return r[Dt].isManual_=!0,g0(t),r}finishDraft(e,t){const r=e&&e[Dt];(!r||!r.isManual_)&&sr(9);const{scope_:n}=r;return Km(n,t),Jm(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=pi("Patches").applyPatches_;return hi(e)?n(e,t):this.produce(e,i=>n(i,t))}};function x0(e,t){const r=Pu(e)?pi("MapSet").proxyMap_(e,t):Tu(e)?pi("MapSet").proxySet_(e,t):zS(e,t);return(t?t.scope_:o3()).drafts_.push(r),r}function PS(e){return hi(e)||sr(10,e),s3(e)}function s3(e){if(!Jr(e)||Lu(e))return e;const t=e[Dt];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=p0(e,t.scope_.immer_.useStrictShallowCopy_)}else r=p0(e,!0);return Rc(r,(n,i)=>{i3(r,n,s3(i))}),t&&(t.finalized_=!1),r}var Ft=new $S,l3=Ft.produce;Ft.produceWithPatches.bind(Ft);Ft.setAutoFreeze.bind(Ft);Ft.setUseStrictShallowCopy.bind(Ft);Ft.applyPatches.bind(Ft);Ft.createDraft.bind(Ft);Ft.finishDraft.bind(Ft);function c3(e){return({dispatch:r,getState:n})=>i=>a=>typeof a=="function"?a(r,n,e):i(a)}var TS=c3(),LS=c3,AS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ic:Ic.apply(null,arguments)};function tg(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(fr(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>wS(n)&&n.type===e,r}var u3=class ga extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,ga.prototype)}static get[Symbol.species](){return ga}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new ga(...t[0].concat(this)):new ga(...t.concat(this))}};function rg(e){return Jr(e)?l3(e,()=>{}):e}function ng(e,t,r){if(e.has(t)){let i=e.get(t);return r.update&&(i=r.update(i,t,e),e.set(t,i)),i}if(!r.insert)throw new Error(fr(10));const n=r.insert(t,e);return e.set(t,n),n}function IS(e){return typeof e=="boolean"}var RS=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=t??{};let s=new u3;return r&&(IS(r)?s.push(TS):s.push(LS(r.extraArgument))),s},MS="RTK_autoBatch",d3=e=>t=>{setTimeout(t,e)},NS=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:d3(10),OS=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let i=!0,a=!1,s=!1;const l=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?NS:e.type==="callback"?e.queueNotification:d3(e.timeout),u=()=>{s=!1,a&&(a=!1,l.forEach(f=>f()))};return Object.assign({},n,{subscribe(f){const h=()=>i&&f(),m=n.subscribe(h);return l.add(f),()=>{m(),l.delete(f)}},dispatch(f){var h;try{return i=!((h=f==null?void 0:f.meta)!=null&&h[MS]),a=!i,a&&(s||(s=!0,c(u))),n.dispatch(f)}finally{i=!0}}})},DS=e=>function(r){const{autoBatch:n=!0}=r??{};let i=new u3(e);return n&&i.push(OS(typeof n=="object"?n:void 0)),i};function FS(e){const t=RS(),{reducer:r=void 0,middleware:n,devTools:i=!0,preloadedState:a=void 0,enhancers:s=void 0}=e||{};let l;if(typeof r=="function")l=r;else if(dh(r))l=xS(r);else throw new Error(fr(1));let c;typeof n=="function"?c=n(t):c=t();let u=Ic;i&&(u=AS({trace:!1,...typeof i=="object"&&i}));const f=yS(...c),h=DS(f);let m=typeof s=="function"?s(h):h();const w=u(...m);return t3(l,a,w)}function f3(e){const t={},r=[];let n;const i={addCase(a,s){const l=typeof a=="string"?a:a.type;if(!l)throw new Error(fr(28));if(l in t)throw new Error(fr(29));return t[l]=s,i},addMatcher(a,s){return r.push({matcher:a,reducer:s}),i},addDefaultCase(a){return n=a,i}};return e(i),[t,r,n]}function BS(e){return typeof e=="function"}function US(e,t){let[r,n,i]=f3(t),a;if(BS(e))a=()=>rg(e());else{const l=rg(e);a=()=>l}function s(l=a(),c){let u=[r[c.type],...n.filter(({matcher:f})=>f(c)).map(({reducer:f})=>f)];return u.filter(f=>!!f).length===0&&(u=[i]),u.reduce((f,h)=>{if(h)if(hi(f)){const w=h(f,c);return w===void 0?f:w}else{if(Jr(f))return l3(f,m=>h(m,c));{const m=h(f,c);if(m===void 0){if(f===null)return f;throw new Error(fr(9))}return m}}return f},l)}return s.getInitialState=a,s}var HS=Symbol.for("rtk-slice-createasyncthunk");function WS(e,t){return`${e}/${t}`}function VS({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[HS];return function(i){const{name:a,reducerPath:s=a}=i;if(!a)throw new Error(fr(11));const l=(typeof i.reducers=="function"?i.reducers(qS()):i.reducers)||{},c=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(v,k){const z=typeof v=="string"?v:v.type;if(!z)throw new Error(fr(12));if(z in u.sliceCaseReducersByType)throw new Error(fr(13));return u.sliceCaseReducersByType[z]=k,f},addMatcher(v,k){return u.sliceMatchers.push({matcher:v,reducer:k}),f},exposeAction(v,k){return u.actionCreators[v]=k,f},exposeCaseReducer(v,k){return u.sliceCaseReducersByName[v]=k,f}};c.forEach(v=>{const k=l[v],z={reducerName:v,type:WS(a,v),createNotation:typeof i.reducers=="function"};XS(k)?KS(z,k,f,t):YS(z,k,f)});function h(){const[v={},k=[],z=void 0]=typeof i.extraReducers=="function"?f3(i.extraReducers):[i.extraReducers],y={...v,...u.sliceCaseReducersByType};return US(i.initialState,C=>{for(let S in y)C.addCase(S,y[S]);for(let S of u.sliceMatchers)C.addMatcher(S.matcher,S.reducer);for(let S of k)C.addMatcher(S.matcher,S.reducer);z&&C.addDefaultCase(z)})}const m=v=>v,w=new Map;let x;function j(v,k){return x||(x=h()),x(v,k)}function E(){return x||(x=h()),x.getInitialState()}function g(v,k=!1){function z(C){let S=C[v];return typeof S>"u"&&k&&(S=E()),S}function y(C=m){const S=ng(w,k,{insert:()=>new WeakMap});return ng(S,C,{insert:()=>{const P={};for(const[L,I]of Object.entries(i.selectors??{}))P[L]=GS(I,C,E,k);return P}})}return{reducerPath:v,getSelectors:y,get selectors(){return y(z)},selectSlice:z}}const p={name:a,reducer:j,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:E,...g(s),injectInto(v,{reducerPath:k,...z}={}){const y=k??s;return v.inject({reducerPath:y,reducer:j},z),{...p,...g(y,!0)}}};return p}}function GS(e,t,r,n){function i(a,...s){let l=t(a);return typeof l>"u"&&n&&(l=r()),e(l,...s)}return i.unwrapped=e,i}var ph=VS();function qS(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function YS({type:e,reducerName:t,createNotation:r},n,i){let a,s;if("reducer"in n){if(r&&!QS(n))throw new Error(fr(17));a=n.reducer,s=n.prepare}else a=n;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,s?tg(e,s):tg(e))}function XS(e){return e._reducerDefinitionType==="asyncThunk"}function QS(e){return e._reducerDefinitionType==="reducerWithPrepare"}function KS({type:e,reducerName:t},r,n,i){if(!i)throw new Error(fr(18));const{payloadCreator:a,fulfilled:s,pending:l,rejected:c,settled:u,options:f}=r,h=i(e,a,f);n.exposeAction(t,h),s&&n.addCase(h.fulfilled,s),l&&n.addCase(h.pending,l),c&&n.addCase(h.rejected,c),u&&n.addMatcher(h.settled,u),n.exposeCaseReducer(t,{fulfilled:s||fl,pending:l||fl,rejected:c||fl,settled:u||fl})}function fl(){}function fr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ZS=()=>{const e=localStorage.getItem("cart");return e?JSON.parse(e):[]},JS={cart:ZS(),notificationVisible:!1,productAdded:null},mh=ph({name:"shoppingCart",initialState:JS,reducers:{addProduct(e,t){const r=e.cart.findIndex(n=>n.id===t.payload.id);if(r!==-1)return e.cart[r].quantity+=t.payload.quantity,e;e.cart.push(t.payload),localStorage.setItem("cart",JSON.stringify(e.cart))},showNotification(e,t){e.notificationVisible=!0,e.productAdded=t.payload},removeNotification(e){e.notificationVisible=!1},deleteProduct(e,t){e.cart=e.cart.filter(r=>r.id!==t.payload),localStorage.setItem("cart",JSON.stringify(e.cart))},increaseProductQtity(e,t){const r=e.cart.find(n=>n.id===t.payload);r.quantity++,r.totalPrice=r.quantity*r.unitPrice,localStorage.setItem("cart",JSON.stringify(e.cart))},decreaseProductQtity(e,t){const r=e.cart.find(n=>n.id===t.payload);r.quantity--,r.totalPrice=r.quantity*r.unitPrice,r.quantity===0&&mh.caseReducers.deleteProduct(e,t),localStorage.setItem("cart",JSON.stringify(e.cart))},resetShoppingCart(e){e.cart=[],localStorage.setItem("cart",JSON.stringify(e.cart))}}}),{addProduct:eC,showNotification:rI,removeNotification:nI,deleteProduct:h3,increaseProductQtity:tC,decreaseProductQtity:rC,resetShoppingCart:iI}=mh.actions,nC=mh.reducer,p3=e=>e.shoppingCart.cart.reduce((t,r)=>r.quantity+t,0),m3=e=>e.shoppingCart.cart.reduce((t,r)=>r.totalPrice+t,0),iC=e=>t=>{var r;return((r=t.shoppingCart.cart.find(n=>n.id===e))==null?void 0:r.quantity)??1},uo={small:{button:"var(--font-size-h5)",fontSize:"var(--font-size-body)",iconSize:"var(--font-size-body)"},normal:{button:"var(--font-size-h4)",fontSize:"var(--font-size-h6)",iconSize:"var(--font-size-h6)"}},ig=d.button`
  ${({size:e,$color:t})=>ve`
    width: ${uo[e].button};
    height: ${uo[e].button};
    border: none;
    background-color: ${t||"var(--primary-color-dark-1)"};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    padding: 1.1rem;
    &:hover {
      background-color: ${t||"var(--primary-color-dark-2)"};
    }
    svg {
      display: flex;
    }
  `}
`,oC=d.div`
  ${({size:e,$color:t})=>ve`
    width: calc(${uo[e].button});
    height: ${uo[e].button};
    border: 1px solid ${t||"var(--primary-color-dark-2)"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${uo[e].fontSize};
    border-radius: 15rem;
    margin: 0 10px;
    padding: 1.1rem;
  `}
`,aC=d.div`
  display: flex;
  align-items: center;
`,og=d.div`
  ${({size:e})=>ve`
    font-size: ${uo[e].iconSize};
  `}
`,Au=({size:e="normal",color:t,productId:r,quantity:n,onQuantityChange:i})=>{const a=zr(),s=Pe(iC(r))||1,[l,c]=b.useState(n||1);b.useEffect(()=>{n!==void 0&&c(n)},[n]);const u=h=>{i?i(h):h>s?a(tC(r)):a(rC(r))},f=n!==void 0?l:s;return o.jsxs(aC,{children:[o.jsx(ig,{size:e,$color:t,onClick:()=>u(f-1),children:o.jsx(og,{size:e,children:o.jsx(Gb,{})})}),o.jsx(oC,{size:e,$color:t,children:f}),o.jsx(ig,{size:e,$color:t,onClick:()=>u(f+1),children:o.jsx(og,{size:e,children:o.jsx(qb,{})})})]})},sC=d.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
  border-radius: 1rem;
  margin-bottom: 1rem;
  border: 0.5px solid rgba(255, 183, 195, 0.3);
  box-shadow: 0 0 20px rgba(255, 183, 195, 0.7);
  position: relative;
  button {
    margin: 0.4rem auto 1.2rem;
  }
`,ra="var(--font-size-h3)",lC=d.div`
  background: transparent;
  width: ${ra};
  height: ${ra};
  position: absolute;
  text-align: center;
  color: white;
  z-index: 5;
  margin: 0 auto;
  top: 0.85rem;
  left: 0.85rem;

  span {
    position: relative;
    z-index: 10;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: var(--font-size-h5);
    height: ${ra};
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-tertiary);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: ${ra};
    width: ${ra};
    background: var(--primary-color-dark-1);
    z-index: 2;
  }

  &:before {
    transform: rotate(30deg);
  }

  &:after {
    transform: rotate(60deg);
  }
`,cC=d.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`,uC=d.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`,dC=d.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: none; /* Disable transition to avoid conflicts with animation */
  opacity: ${({$isHovered:e})=>e?0:1};
  transform: ${({$isHovered:e})=>e?"translateX(-100%)":"translateX(0)"};
  ${({$isHovered:e})=>e&&ve`
      animation: ${K4} 0.6s forwards;
    `}
  ${({$isExiting:e})=>e&&ve`
      animation: ${Z4} 0.6s forwards;
    `}
`,fC=d.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: none; /* Disable transition to avoid conflicts with animation */
  opacity: ${({$isHovered:e})=>e?1:0};
  transform: ${({$isHovered:e})=>e?"translateX(0)":"translateX(100%)"};
  ${({$isHovered:e})=>e&&ve`
      animation: ${fu} 0.6s forwards;
    `}
  ${({$isExiting:e})=>e&&ve`
      animation: ${J4} 0.6s forwards;
    `}
`,y0=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  padding: 8px;
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  ${R9};

  svg {
    color: var(--primary-color-dark-2);
    font-size: var(--font-size-h5);
  }
`,hC=d.div`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: box-shadow 0.3s ease-in-out;
`,pC=d.div`
  background-color: var(--primary-color-dark-1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  /* height: 3.2rem; */
  margin-bottom: 0.75rem;
`,g3=d.div`
  margin-bottom: 0.25rem;
  svg {
    color: var(--primary-color-dark-1);
    font-size: var(--font-size-h6);
  }
`,mC=d(oe).attrs({as:"h6"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 100;
  color: black;
  width: 80%;
  margin: auto;
  margin-bottom: 0.25rem;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: var(--primary-color-dark-4);
  }
`,gC=d.div`
  margin-bottom: 0.5rem;
`,vC=d.p`
  font-size: var(--font-size-h4);
  font-family: var(--font-tertiary);
  font-weight: bold;
  letter-spacing: 1.1px;
  color: white;
  /* margin: 0.5rem 0; */
  /* padding: 0.25rem 0; */
  text-transform: capitalize;
  border-bottom: 1px solid var(--primary-color);
  background-color: var(--primary-color-dark-1);
  display: flex;
  justify-content: center;
  align-items: center;
`,xC=d.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: auto;
  border-radius: 10px;
  gap: 1rem;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    max-width: 400px;
  }
`,yC=d.div`
  flex: 1.25;
  position: relative;
  @media (max-width: 1026px) {
    width: 100%;
  }
`,wC=d.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,bC=d.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 2px solid ${e=>e.$active?"#000":"#ccc"};
  cursor: pointer;
  transition: border 0.3s ease;
  &:hover {
    border: 2px solid #000;
  }
`,jC=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,kC=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
  background: #fff;
  box-sizing: border-box;
  position: relative;
`,SC=d.div`
  background: #ff0000;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 10px;
`,v3=d.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`,x3=d(g3)`
  display: flex;
  font-size: 0.8rem;
  margin-right: 10px;
`,y3=d.div`
  font-size: var(--font-size-small);
  color: #888;
`,CC=d.p`
  font-size: var(--font-size-body);
  color: var(--grey-color);
  margin-top: 10px;
  font-family: var(--font-secondary);
`,EC=d.div`
  margin: 20px 0;
`,ag=d.div`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin: 5px 0;
`,Pd=d.span`
  font-size: var(--font-size-h6);
  font-weight: 700;
`,zC=d.div`
  margin: 20px 0;
`,_C=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`,$C=d.label`
  font-size: var(--font-size-h6);
  font-weight: bold;
  color: #333;
`,PC=d.div`
  display: flex;
  gap: 10px;
`,TC=d.button`
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 2px solid #ddd;
  background-color: #f9f9f9;
  color: var(--grey-color);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: #ddd;
    border-color: #aaa;
    color: #333;
  }

  ${({$isSelected:e})=>e&&`
    background-color: #333;
    color: white;
    border-color: #333;
  `}

  &:focus {
    outline: none;
  }
`,LC=d.div`
  margin-bottom: 20px;
`,zs=(e,t)=>e.length>t?e.slice(0,t)+"...":e,w3=(e,t)=>{const r=Object.entries(e).filter(([i,a])=>a===!0).map(([i,a])=>parseInt(i)),n=t.filter(i=>r.includes(i.id));return{filteredIds:r,wishList:n}},AC=e=>e.discount!==void 0&&e.discount>0?e.price*(1-e.discount/100):e.price,w0=(e,t,r)=>{const n=AC(e),i={id:e.id,category:e.category,image:e.image,title:e.title,slug:e.slug,quantity:r,unitPrice:n,totalPrice:n*r};t(eC(i))},ql=e=>typeof e!="number"?"Invalid Price":`$${e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}`,IC=e=>{if(e.image&&e.thumbnails&&e.thumbnails.length>0)return[{id:1,image:`${e.image}`},{id:2,image:`${e.thumbnails[0]}`},{id:3,image:`${e.thumbnails[1]}`},{id:4,image:`${e.thumbnails[2]}`}]},RC=e=>{const t={day:"2-digit",month:"long",year:"numeric"};return new Date(e).toLocaleDateString("en-US",t)},MC=JSON.parse(localStorage.getItem("likes"))||{},NC={likes:MC},b3=ph({name:"likes",initialState:NC,reducers:{toggleLike(e,t){const r=t.payload,n={...e.likes};return n[r]=!e.likes[r],localStorage.setItem("likes",JSON.stringify(n)),{...e,likes:n}},addLike(e,t){const r=t.payload,n={...e.likes,[r]:!0};return localStorage.setItem("likes",JSON.stringify(n)),{...e,likes:n}},removeLike(e,t){const r=t.payload,n={...e.likes};return delete n[r],localStorage.setItem("likes",JSON.stringify(n)),{...e,likes:n}}}}),OC=b3.reducer,{toggleLike:DC,addLike:FC,removeLike:BC}=b3.actions,yi=d.div`
  color: ${({$color:e})=>e||"white"};
  font-size: ${({$size:e})=>e||"var(--font-size-body)"};
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-bottom: 5px;
  font-weight: 700;
  font-family: var(--font-secondary);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 40%;
    background-color: ${({$underlineColor:e})=>e||"white"};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`,b0=()=>o.jsxs(UC,{children:[o.jsx(hl,{href:"#",children:o.jsx(F5,{})}),o.jsx(hl,{href:"#",children:o.jsx(U5,{})}),o.jsx(hl,{href:"#",children:o.jsx(Nr,{})}),o.jsx(hl,{href:"#",children:o.jsx(B5,{})})]}),UC=d.div`
  display: flex;
  margin-bottom: 10px;
`,hl=d.a`
  color: #000;
  font-size: var(--font-size-h6);
  margin-right: 10px;
  transition: color 0.3s ease;
  &:hover {
    color: var(--primary-color);
  }
`,j0=({product:e})=>{const t=zr(),{closeModal:r}=b.useContext(zu),[n,i]=b.useState(e.image),[a,s]=b.useState(e.image),[l,c]=b.useState(1),[u,f]=b.useState(1),h=Cr(),m=x=>{i(x),s(x)},w=x=>{c(x)};return b.useEffect(()=>{e.sizes&&e.sizes.length>0&&c(e.sizes[0])},[e.sizes]),o.jsxs(xC,{children:[o.jsxs(yC,{children:[o.jsx(wC,{children:[e.image,...e.thumbnails.slice(0,3)].map((x,j)=>o.jsx(bC,{src:`/shop/${e.category}/${x}`,alt:`thumbnail ${j+1}`,$active:x===a,onClick:()=>m(x)},j))}),o.jsx(jC,{src:`/shop/${e.category}/${n}`,alt:"product img"})]}),o.jsxs(kC,{children:[e.sale&&o.jsxs(SC,{children:["SALE ",e.sale,"% OFF"]}),o.jsx(oe,{as:"h3",children:e.title}),o.jsxs(v3,{children:[o.jsx(x3,{children:_u(e.rating.rate)}),o.jsxs(y3,{children:["(",e.rating.count," customer reviews)"]})]}),o.jsx(CC,{children:zs(e.description,160)}),o.jsxs(_C,{children:[o.jsx(LC,{children:o.jsx(yi,{$color:"var(--grey-color)",$underlineColor:"var(--grey-color)",$size:".75rem",onClick:()=>{h(`/shop/${e.slug}`),r()},children:"View More Details"})}),o.jsx(Pd,{children:"Sizes:"}),o.jsx(PC,{children:e.sizes.map(x=>o.jsx(TC,{$isSelected:l===x,onClick:()=>w(x),children:x},x))})]}),o.jsx(zC,{children:o.jsxs(ge,{type:"horizontal",$justifyContent:"space-around",$alignItems:"flex-start",$flexGap:"1rem",children:[o.jsxs(ge,{type:"vertical",$justifyContent:"center",$alignItems:"center",$flexGap:".5rem",children:[o.jsx(Pd,{children:"Price"}),o.jsx(Es,{product:e,$fontSize:"var(--font-size-h4)"})]}),o.jsxs(ge,{type:"vertical",$justifyContent:"center",$alignItems:"center",$flexGap:".5rem",children:[o.jsx(Pd,{children:"Quantity"}),o.jsx(Au,{size:"normal",productId:e.id,quantity:u,onQuantityChange:f})]})]})}),o.jsx("div",{children:o.jsxs(ge,{type:"horizontal",$justifyContent:"space-around",$alignItems:"center",$flexGap:"0.5rem",children:[o.jsx(Xe,{size:"extra-small",onClick:()=>{w0(e,t,u),r()},children:"Add To Cart"}),o.jsx(Xe,{size:"extra-small",$invert:!0,color:"var(--primary-color-dark-2)",onClick:()=>{r(),t(FC(e.id))},children:"Add To Wishlist"})]})}),o.jsxs(EC,{children:[o.jsxs(ag,{children:["Category: ",e.category]}),o.jsxs(ag,{children:["Material: ",e.materials.join(", ")]})]}),o.jsx(b0,{})]})]})};function HC(e){return X({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Location_Arrow_1"},child:[{tag:"path",attr:{d:"M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z"},child:[]}]}]})(e)}function WC(e){return X({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Shopping_Basket"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.44,7.937H17.3l-1.21-4.51a.508.508,0,0,0-.61-.35.489.489,0,0,0-.35.61l1.14,4.25H7.74l1.14-4.25a.5.5,0,0,0-.36-.61.513.513,0,0,0-.61.35l-1.2,4.51H4.56a1.5,1.5,0,0,0-.32,2.96l.74,7.77a2.492,2.492,0,0,0,2.49,2.27h9.06a2.492,2.492,0,0,0,2.49-2.27l.74-7.77a1.5,1.5,0,0,0-.32-2.96Zm-1.41,10.64a1.5,1.5,0,0,1-1.5,1.36H7.47a1.5,1.5,0,0,1-1.5-1.36l-.72-7.64h13.5Zm1.41-8.64H4.56a.508.508,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.44a.5.5,0,0,1,.5.5A.508.508,0,0,1,19.44,9.937Z"},child:[]},{tag:"path",attr:{d:"M9.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,9.5,17.432Z"},child:[]},{tag:"path",attr:{d:"M14.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,14.5,17.432Z"},child:[]}]}]}]})(e)}const j3=(e=null)=>{const[t,r]=b.useState(e),[n,i]=b.useState(null);return{hovered:t,exiting:n,handleMouseEnter:l=>{r(l),i(null)},handleMouseLeave:l=>{r(null),i(l)}}},VC=d(Yb)`
  color: var(--primary-color-dark-1);
  z-index: 2;
`,GC=d(oj)`
  color: var(--primary-color-dark-1);
  z-index: 2;
`,gh=({product:e,WrapperComponent:t="div",...r})=>{const n=zr(),a=Pe(h=>h.wishList.likes)[e.id]||!1,[s,l]=b.useState(a),c=h=>{h.stopPropagation(),h.preventDefault(),n(DC(e.id))};b.useEffect(()=>{l(a)},[a]);const u={onClick:c,...r,children:s?o.jsx(VC,{}):o.jsx(GC,{})};return ce.isValidElement(t)?ce.cloneElement(t,u):ce.createElement(t,u)},k3=({product:e})=>{const{hovered:t,exiting:r,handleMouseEnter:n,handleMouseLeave:i}=j3();return o.jsxs(sC,{onMouseEnter:()=>n(e.id),onMouseLeave:()=>i(e.id),children:[e.discount&&o.jsx(lC,{children:o.jsxs("span",{children:[e.discount,"%"]})}),o.jsx(re,{to:"/shop/"+e.slug,children:o.jsx(cC,{children:o.jsxs(uC,{children:[o.jsx(dC,{src:`/shop/${e.category}/${e.image}`,alt:e.title,$isHovered:t===e.id,$isExiting:r===e.id}),o.jsx(fC,{src:`/shop/${e.category}/${e.thumbnails[0]}`,alt:`${e.title} thumbnail`,$isHovered:t===e.id,$isExiting:r===e.id})]})})}),o.jsxs(hC,{children:[o.jsx(gh,{product:e,WrapperComponent:y0}),o.jsx(y0,{children:o.jsxs(ar,{children:[o.jsx(ar.Trigger,{opens:"product-preview",children:o.jsx(WC,{})}),o.jsx(ar.Content,{name:"product-preview",children:o.jsx(j0,{product:e})})]})})]}),o.jsx(pC,{children:o.jsxs(ar,{children:[o.jsx(ar.Trigger,{opens:"product-preview",children:o.jsx(yi,{children:" + QUICK SHOP"})}),o.jsx(ar.Content,{name:"product-preview",children:o.jsx(j0,{product:e})})]})}),o.jsx(g3,{children:_u(e.rating.rate)}),o.jsx(re,{to:"/shop/"+e.slug,children:o.jsx(mC,{children:e.title})}),o.jsx(gC,{children:o.jsx(ge,{$justifyContent:"center",$alignItems:"center",children:o.jsx(Es,{product:e})})}),o.jsx(vC,{children:e.category})]})},vh=({title:e="Selection of Featured Products",initialNum:t=5,paddingY:r="3rem"})=>{const n=Pe(i=>i.products.products);return o.jsxs(Wj,{$paddingY:r,children:[e&&o.jsx(oe,{as:"h2",$marginBottom:"4.5rem",children:e}),o.jsxs(Cu,{hasTrack:!1,options:{type:"slide",perPage:t,perMove:1,gap:"2rem",autoplay:!0,interval:3e3,pauseOnHover:!0,pagination:!1,arrows:2,lazyLoad:!0,breakpoints:{1200:{perPage:t===1?t:4},768:{perPage:t===1?t:3},576:{perPage:t===1?t:2}}},children:[o.jsx(Su,{children:n.map(i=>o.jsx(ei,{children:o.jsx(k3,{product:i})},i.id))}),o.jsx("div",{className:"splide__arrows",children:o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:"1rem",children:[o.jsx(Ln,{className:"splide__arrow splide__arrow--prev",children:o.jsx(Po,{className:"-left-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow rotate-180",children:o.jsx(Zr,{})})}),o.jsx(Ln,{className:"splide__arrow splide__arrow--next",children:o.jsx(Po,{className:"-right-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow",children:o.jsx(Zr,{})})})]})})]})]})};function qC(e){return X({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(e)}function na(e){return X({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},child:[]},{tag:"path",attr:{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},child:[]}]})(e)}function YC(e){return X({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45a4.994 4.994 0 0 0-.64-6.29 5.003 5.003 0 0 0-7.07 0 5.003 5.003 0 0 0 0 7.07 5.006 5.006 0 0 0 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11 7 3.11V11zm-7 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"},child:[]}]})(e)}function XC(e){return X({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},child:[]},{tag:"path",attr:{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},child:[]}]})(e)}const QC=d.div`
  position: fixed;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 50px;
  height: 50px;
  background-color: var(--background-primary-transparent);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  z-index: 5;
  transition: background-color var(--transition-quick);
  border: 4px solid var(--primary-color-dark-3);

  &:hover {
    background-color: var(--primary-color-dark-2);
  }
  @media (max-width: 610px) {
    display: none;
  }
`,KC=d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color-dark-2);
  transition: height var(--transition-quick);
`,ZC=d(XC)`
  color: var(--background-color);
  font-size: 35px;
  position: relative;
  z-index: 5;
`,JC=()=>{const[e,t]=b.useState(0),r=()=>{const i=window.pageYOffset,a=document.documentElement.scrollHeight-window.innerHeight,s=i/a*100;t(s)};b.useEffect(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs(QC,{onClick:n,children:[o.jsx(KC,{style:{height:`${e}%`}}),o.jsx(ZC,{})]})},eE=Q`
  0% {
    left: -50%;
  }
  100% {
    left: 150%;
  }
`,wi=d.div`
  position: relative;
  overflow: hidden;

  &::before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    display: block;
    height: 100%;
    left: -50%;
    position: absolute;
    top: 0;
    transform: skewX(-25deg);
    width: 50%;
    z-index: 2;
  }

  &:hover::before,
  &:focus::before {
    animation: ${eE} 1.2s ease-out forwards; /* Slower animation for subtlety */
  }
`,tE=d.div`
  margin: 3rem auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`,rE=d.div`
  display: block;
`,nE=d.div`
  margin: 2rem auto;
  max-width: 1440px;
  width: 95%;
`,iE=d.div`
  position: relative;
  padding: 1rem;
  background: var(--background-primary-transparent);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-large);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`,oE=d(wi)`
  display: block;
`,aE=d.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-medium);
  object-fit: cover;
  margin-bottom: 1rem;
  overflow: hidden;
`,sE=d.h3`
  font-size: var(--font-size-h4);
  margin-bottom: 0.5rem;
  color: var(--text-color);
`,lE=d.p`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin-bottom: 1rem;
`,sg=d.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-small);
  font-size: var(--font-size-small);
  color: var(--background-color);
  font-weight: bold;
`,cE=d(re)`
  margin-top: auto;
  align-self: flex-end;
  background: var(--primary-color);
  color: var(--background-color);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  transition: var(--transition-quick);

  &:hover {
    background: var(--accent-color);
  }

  svg {
    font-size: 1.5rem;
  }
`,uE=d.div`
  position: absolute;
  z-index: 1;
  top: 1.5rem; /* Adjust this value based on your layout */
  right: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: #0c0c0c;

  span {
    font-size: 0.75rem;
    color: #757575; /* Grey for month text */
  }

  .day {
    font-size: 1.5rem;
    color: #0c0c0c; /* Dark color for day number */
    margin-bottom: -4px; /* Slight adjustment to align the date */
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 4px;
    background-color: #e91e63; /* Red top bar */
    border-radius: 2px;
  }
`,dE=()=>{const e=Pe(t=>t.blog.articles);return o.jsxs(o.Fragment,{children:[o.jsxs(tE,{children:[o.jsx(oe,{as:"h2",children:"News & Blog Updates"}),o.jsx(rE,{children:o.jsx(uh,{textInput:"LATEST NEWS - LATEST NEWS",textSize:"1.6rem",linkTo:"/blog-grid-layout"})})]}),o.jsx(nE,{children:o.jsxs(Cu,{hasTrack:!1,options:{type:"loop",perPage:3,gap:"2rem",autoplay:!0,interval:3e3,pauseOnHover:!0,pagination:!1,arrows:!0,breakpoints:{1200:{perPage:2},768:{perPage:1}}},children:[o.jsx(Su,{children:e.map(t=>o.jsx(ei,{children:o.jsxs(iE,{children:[o.jsx(sg,{children:t.category}),o.jsxs(uE,{children:[o.jsx("div",{className:"day",children:new Date(t.created_at).getDate()}),o.jsx("span",{children:new Date(t.created_at).toLocaleString("default",{month:"short"})})]}),o.jsx(re,{to:`/blog/${t.slug}`,children:o.jsx(oE,{children:o.jsx(aE,{src:t.image,alt:t.title})})}),o.jsx(re,{to:`/blog/${t.slug}`,children:o.jsx(sE,{children:t.title})}),o.jsxs(lE,{children:["By ",t.author]}),o.jsxs(sg,{children:["By ",t.author]}),o.jsx(cE,{to:`/blog/${t.slug}`,children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2L22 12H13V22H11V12H2L12 2Z"})})})]})},t.id))}),o.jsx("div",{className:"splide__arrows",children:o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:"1rem",children:[o.jsx(Ln,{className:"splide__arrow splide__arrow--prev",children:o.jsx(Po,{className:"-left-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow rotate-180",children:o.jsx(Zr,{})})}),o.jsx(Ln,{className:"splide__arrow splide__arrow--next",children:o.jsx(Po,{className:"-right-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow",children:o.jsx(Zr,{})})})]})})]})})]})},fE=()=>o.jsxs(o.Fragment,{children:[o.jsx(V9,{}),o.jsx(Ss,{}),o.jsx(Zj,{}),o.jsx(vh,{}),o.jsx(hw,{}),o.jsx(zk,{}),o.jsx(Bk,{}),o.jsx(iS,{}),o.jsx(F1,{}),o.jsx(G5,{}),o.jsx(dE,{}),o.jsx(JC,{})]}),hE=k9`

/* Global Variables */
:root {
  /* Colors */
  --primary-color: #FFB7C3; /* Soft Red for accents */
  --primary-color-light-1: #ffbec9; 
  --primary-color-light-2: #ffc5cf; 
  --primary-color-light-3: #ffccd5; 
  --primary-color-light-4: #ffd3db; 
  --primary-color-light-5: #ffe0e6;
  --primary-color-light-6: #FFE6EB;
  --primary-color-light-7: #FFECF0;
  --primary-color-light-8: #FFF3F5;
  --primary-color-light-9: #FFF9FA;
  --primary-color-dark-1: #e5a4af; 
  --primary-color-dark-2: #cc929c; 
  --primary-color-dark-3: #b28088; 
  --primary-color-dark-4: #996d75;
  --primary-color-dark-5: #7a575e;
  --primary-color-dark-5: #5c4146;

  
  --background-primary-transparent:color-mix(in srgb, var(--primary-color) 30%, transparent);
  --background-primary-transparent-2:color-mix(in srgb, var(--primary-color) 15%, transparent);

  --secondary-color: #76f4e7; 
  --accent-color: #F96167;
  --accent-color-light-1:#fa8185;
  --background-color: #FFF;
  --text-color: #333333; 
  --light-grey-color: #EDEDED; 
  --grey-color:#555;
  --dark-grey-color: #4A4A4A; 
  --success-color: #28a745; 
  --warning-color: #ffc107; /* Yellow for warning messages */
  --danger-color: #dc3545; /* Red for error messages */
  --info-color: #17a2b8; /* Blue for informational messages */
  --disabled-color: #6c757d; /* Grey for disabled elements */

  /* Font Family */
  --font-primary: "Gabarito", sans-serif; /* Primary font (imported from Google Fonts) */
   /* Primary font (imported from Google Fonts) */
  --font-secondary: 'Poppins', sans-serif; /* Secondary font (imported from Google Fonts) */


  --font-tertiary: "Cookie", cursive;
  /* Font Size */
  --font-size-h1: 3.5rem;
  --font-size-h2: 2.75rem;
  --font-size-h3: 2.25rem;
  --font-size-h4: 1.75rem;
  --font-size-h5: 1.5rem;
  --font-size-h6: 1.25rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-button: 0.875rem;


  /* Spacing */
  --spacing-xs: 0.3125rem;
  --spacing-sm:0.625rem;
  --spacing-md: 1.25rem;
  --spacing-lg: 1.875rem;
  --spacing-xl: 2.5rem;
  --spacing-xxl: 3.75rem;
  --spacing-xxxl: 5rem;


    /* Border */
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 16px;

    /* shadow */
  --shadow-small: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-large: 0 4px 8px rgba(0, 0, 0, 0.1);

    /* transition */
  --transition-quick: 0.3s ease-in-out;
  --transition-normal: 0.5s ease-in-out;
  --transition-slow: 0.7s ease-in-out;

  --zindex-dropdown: 1000;
  --zindex-modal: 1050;
  --zindex-tooltip: 1100;

  --max-width-screen:  1740px;
}

/* Responsive Font Sizes */
@media (max-width: 1200px) {
  :root {
    /* Font */
    --font-size-h1: 3rem;
    --font-size-h2: 2.5rem;
    --font-size-h3: 2rem;
    --font-size-h4: 1.75rem;
    --font-size-h5: 1.25rem;
    --font-size-h6: 1rem;
    --font-size-body: 0.875rem;
    --font-size-small: 0.75rem;
    --font-size-button: 0.875rem;

  }
}

@media (max-width: 768px) {
  :root {
    --font-size-h1: 2.5rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.75rem;
    --font-size-h4: 1.5rem;
    --font-size-h5: 1.15rem;
    --font-size-h6: 1rem;
    --font-size-body: 0.875rem;
    --font-size-small: 0.75rem;
    --font-size-button: 0.75rem;

  }
}

@media (max-width: 480px) {
  :root {
    --font-size-h1: 2rem;
    --font-size-h2: 1.75rem;
    --font-size-h3: 1.5rem;
    --font-size-h4: 1.25rem;
    --font-size-h5: 1rem;
    --font-size-h6: 0.875rem;
    --font-size-body: 0.75rem;
    --font-size-small: 0.625rem;
    --font-size-button: 0.75rem;
  }
}




  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: var(--font-secondary);
    background-color: #fff;
    color: var(--text-color);
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: var(--font-size-body);
    letter-spacing: 0.02em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
    font-family: var(--font-secondary);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`,pE=[{id:1,title:"Hydrating Face Cream",price:29.99,category:"skincare",subcategory:"Moisturizers",image:"1/hydrating-face-cream.jpeg",thumbnails:["1/hydrating-face-cream-1.jpeg","1/hydrating-face-cream-2.jpeg","1/hydrating-face-cream-3.jpeg"],rating:{rate:3.7,count:200},description:"A deeply hydrating face cream that nourishes your skin, delivering intense moisture and essential nutrients. Infused with natural botanicals and antioxidants, this luxurious formula rejuvenates and revitalizes, leaving your complexion smooth, radiant, and visibly healthier. Perfect for daily use, it helps to strengthen the skin's barrier and restore its natural glow while combating dryness and signs of fatigue.",brand:"Glow Beauty",stock:50,orders:180,createdAt:"2024-01-01T10:00:00Z",slug:"hydrating-face-cream",likes:45,sizes:[15,60],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:5},{id:2,title:"Brightening Serum",price:39.99,category:"skincare",subcategory:"Serums",image:"2/brightening-serum.jpeg",thumbnails:["2/brightening-serum-1.jpeg","2/brightening-serum-2.jpeg","2/brightening-serum-3.jpeg"],rating:{rate:4.6,count:150},description:"A serum that brightens your skin for a radiant glow, formulated with a potent blend of vitamins and natural extracts. This lightweight elixir targets dullness and uneven skin tone, enhancing luminosity and promoting a youthful, vibrant complexion. Enriched with antioxidants and hydrating ingredients, it helps to rejuvenate and refresh, leaving your skin visibly smoother and more radiant with each use. Ideal for daily application, it seamlessly integrates into your skincare routine for a brighter, more luminous glow.",brand:"Glow Beauty",stock:75,orders:200,createdAt:"2024-01-10T12:00:00Z",slug:"brightening-serum",likes:52,sizes:[30,45,60],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:3,title:"Anti-Aging Eye Cream",price:24.99,category:"skincare",subcategory:"Eye Care",image:"3/anti-aging-eye-cream.jpeg",thumbnails:["3/anti-aging-eye-cream-1.jpeg","3/anti-aging-eye-cream-2.jpeg","3/anti-aging-eye-cream-3.jpeg"],rating:{rate:4.8,count:175},description:"A luxurious eye cream that reduces the appearance of wrinkles, designed to deliver advanced anti-aging benefits to the delicate eye area. Infused with a blend of peptides, hyaluronic acid, and potent botanical extracts, this rich formula helps to smooth fine lines and crow's feet while providing deep hydration. Its lightweight texture absorbs quickly, leaving the skin around your eyes feeling firm and rejuvenated. Ideal for daily use, it also helps to diminish dark circles and puffiness, revealing a more youthful and refreshed look.",brand:"Glow Beauty",stock:40,orders:125,createdAt:"2024-01-05T14:00:00Z",slug:"anti-aging-eye-cream",likes:35,sizes:[15,30,60],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:10},{id:4,title:"Nourishing Face Mask",price:15.99,category:"skincare",subcategory:"Masks",image:"4/nourishing-face-mask.jpeg",thumbnails:["4/nourishing-face-mask-1.jpeg","4/nourishing-face-mask-2.jpeg","4/nourishing-face-mask-3.jpeg"],rating:{rate:4,count:90},description:"A nourishing face mask that revitalizes your skin, delivering a surge of essential nutrients and hydration. Formulated with a blend of natural extracts, vitamins, and antioxidants, this mask deeply penetrates to replenish and rejuvenate tired, stressed skin. Its rich, creamy texture envelops your face, soothing and calming while promoting a healthy, radiant complexion. Perfect for a weekly pampering session, it helps to restore your skin's natural vitality, leaving it soft, refreshed, and glowing.",brand:"Glow Beauty",stock:60,orders:95,createdAt:"2024-01-08T16:00:00Z",slug:"nourishing-face-mask",likes:28,sizes:[45],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:5,title:"Exfoliating Scrub",price:12.99,category:"skincare",subcategory:"Exfoliators",image:"5/exfoliating-scrub.jpeg",thumbnails:["5/exfoliating-scrub-1.jpeg","5/exfoliating-scrub-2.jpeg","5/exfoliating-scrub-3.jpeg"],rating:{rate:5,count:130},description:"An exfoliating scrub that removes dead skin cells, revealing a smoother, more radiant complexion. Formulated with gentle yet effective natural exfoliants, this scrub effectively buffs away dull, uneven skin while promoting cell renewal. Enriched with nourishing ingredients and hydrating agents, it helps to enhance skin texture and clarity without causing irritation. Ideal for regular use, it leaves your skin feeling refreshed, rejuvenated, and perfectly prepped for further skincare treatments.",brand:"Glow Beauty",stock:30,orders:85,createdAt:"2024-01-12T18:00:00Z",slug:"exfoliating-scrub",likes:21,sizes:[30],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:10},{id:6,title:"Clarifying Cleanser",price:19.99,category:"skincare",subcategory:"Cleansers",image:"6/clarifying-cleanser.jpeg",thumbnails:["6/clarifying-cleanser-1.jpeg","6/clarifying-cleanser-2.jpeg","6/clarifying-cleanser-3.jpeg"],rating:{rate:3.5,count:110},description:"A gentle cleanser that clarifies and refreshes your skin, formulated to effectively remove impurities and excess oil without stripping away essential moisture. Enriched with soothing botanical extracts and hydrating agents, this cleanser purifies your complexion while maintaining its natural balance. Its mild, foaming formula gently lifts away dirt and makeup, leaving your skin feeling clean, refreshed, and revitalized. Perfect for daily use, it prepares your skin for the next steps in your skincare routine, promoting a clear and healthy-looking glow.",brand:"Pure & Clear",stock:100,orders:140,createdAt:"2024-01-02T08:00:00Z",slug:"clarifying-cleanser",likes:33,sizes:[45,60],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:25},{id:7,title:"SPF 50 Sunscreen",price:22.99,category:"skincare",subcategory:"Sunscreen",image:"7/spf-50-sunscreen.jpeg",thumbnails:["7/spf-50-sunscreen-1.jpeg","7/spf-50-sunscreen-2.jpeg","7/spf-50-sunscreen-3.jpeg"],rating:{rate:4.9,count:250},description:"A high-protection sunscreen with SPF 50 for everyday use, designed to shield your skin from harmful UVA and UVB rays. This broad-spectrum formula provides robust defense against sun damage while maintaining a lightweight, non-greasy texture. Infused with skin-nourishing ingredients and antioxidants, it helps to protect and hydrate your skin, preventing premature aging and maintaining a healthy, radiant complexion. Ideal for daily application, it seamlessly integrates into your skincare routine, offering reliable protection in any environment.",brand:"Glow Beauty",stock:150,orders:210,createdAt:"2024-01-18T11:00:00Z",slug:"spf-50-sunscreen",likes:67,sizes:[15,45],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:8,title:"Night Repair Cream",price:49.99,category:"skincare",subcategory:"Night Creams",image:"8/night-repair-cream.jpeg",thumbnails:["8/night-repair-cream-1.jpeg","8/night-repair-cream-2.jpeg","8/night-repair-cream-3.jpeg"],rating:{rate:4.6,count:160},description:"A powerful night cream that repairs and renews skin overnight, harnessing the restorative power of an advanced blend of active ingredients. Enriched with peptides, retinol, and nourishing botanicals, this rich, luxurious cream works while you sleep to boost cell regeneration, diminish the appearance of fine lines, and restore skin's elasticity. Its deeply moisturizing formula helps to replenish and revitalize, leaving your complexion looking refreshed, smoother, and more youthful by morning. Ideal for all skin types, it ensures you wake up with a glowing and revitalized appearance.",brand:"Pure & Clear",stock:45,orders:130,createdAt:"2024-01-06T15:00:00Z",slug:"night-repair-cream",likes:39,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:9,title:"Vitamin C Serum",price:35.99,category:"skincare",subcategory:"Serums",image:"9/vitamin-c-serum.jpeg",thumbnails:["9/vitamin-c-serum-1.jpeg","9/vitamin-c-serum-2.jpeg","9/vitamin-c-serum-3.jpeg"],rating:{rate:4.8,count:190},description:"A potent Vitamin C serum that brightens and evens skin tone, featuring a high concentration of stabilized Vitamin C and complementary antioxidants. This powerful formula targets dark spots, hyperpigmentation, and uneven skin tone, promoting a more luminous and radiant complexion. With its lightweight, fast-absorbing texture, it helps to boost collagen production and protect against environmental damage, leaving your skin visibly brighter, smoother, and more youthful. Ideal for daily use, it seamlessly integrates into your skincare routine, enhancing your overall glow and clarity.",brand:"Glow Beauty",stock:60,orders:170,createdAt:"2024-01-09T13:00:00Z",slug:"vitamin-c-serum",likes:50,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:15},{id:10,title:"Soothing Toner",price:18.99,category:"skincare",subcategory:"Toners",image:"10/soothing-toner.jpeg",thumbnails:["10/soothing-toner-1.jpeg","10/soothing-toner-2.jpeg","10/soothing-toner-3.jpeg"],rating:{rate:3,count:140},description:"A soothing toner that calms and balances skin, formulated to refresh and revitalize your complexion. Infused with calming botanical extracts and hydrating ingredients, this toner helps to soothe irritation, reduce redness, and restore your skin's natural pH balance. Its gentle, alcohol-free formula effectively removes any lingering impurities and prepares your skin for optimal absorption of subsequent skincare products. Perfect for daily use, it leaves your skin feeling balanced, comfortable, and ready for the next steps in your skincare routine.",brand:"Pure & Clear",stock:55,orders:100,createdAt:"2024-01-11T17:00:00Z",slug:"soothing-toner",likes:25,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:35}],mE=[{id:11,title:"Revitalizing Shampoo",price:19.99,category:"haircare",subcategory:"Shampoos",image:"11/revitalizing-shampoo.jpeg",thumbnails:["11/revitalizing-shampoo-1.jpeg","11/revitalizing-shampoo-2.jpeg","11/revitalizing-shampoo-3.jpeg"],rating:{rate:4,count:140},description:"A shampoo that revitalizes and strengthens your hair, formulated with a blend of nourishing ingredients and restorative botanicals. This revitalizing formula gently cleanses while providing essential nutrients to fortify and protect your hair from damage. Enriched with vitamins, proteins, and natural extracts, it helps to enhance hair resilience, reduce breakage, and promote a healthy shine. Suitable for all hair types, it leaves your hair feeling refreshed, revitalized, and noticeably stronger with each use.",brand:"Hair Glow",stock:60,orders:130,createdAt:"2024-02-01T09:00:00Z",slug:"revitalizing-shampoo",likes:42,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:12,title:"Moisturizing Conditioner",price:22.99,category:"haircare",subcategory:"Conditioners",image:"12/moisturizing-conditioner.jpeg",thumbnails:["12/moisturizing-conditioner-1.jpeg","12/moisturizing-conditioner-2.jpeg","12/moisturizing-conditioner-3.jpeg"],rating:{rate:4.8,count:120},description:"A conditioner that deeply moisturizes and detangles hair, crafted to provide intense hydration and smoothness. Enriched with nourishing oils, vitamins, and botanical extracts, this conditioner penetrates the hair shaft to restore moisture, reduce frizz, and enhance manageability. Its creamy, luxurious formula helps to untangle knots effortlessly, leaving your hair soft, silky, and easier to style. Ideal for daily use, it maintains optimal hydration and promotes overall hair health, ensuring your locks are smooth, shiny, and beautifully manageable.",brand:"Hair Glow",stock:50,orders:115,createdAt:"2024-02-02T10:00:00Z",slug:"moisturizing-conditioner",likes:37,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:13,title:"Argan Oil Treatment",price:29.99,category:"haircare",subcategory:"Hair Oils",image:"13/argan-oil-treatment.jpeg",thumbnails:["13/argan-oil-treatment-1.jpeg","13/argan-oil-treatment-2.jpeg","13/argan-oil-treatment-3.jpeg"],rating:{rate:4.9,count:180},description:"A nourishing hair oil treatment with argan oil, designed to deliver deep hydration and enhance your hair's natural shine. Rich in essential fatty acids, vitamins, and antioxidants, this luxurious treatment helps to repair and protect your hair from damage, while smoothing frizz and split ends. The lightweight, non-greasy formula absorbs quickly, leaving your hair soft, shiny, and beautifully nourished without weighing it down. Ideal for all hair types, it can be used as a leave-in treatment or a finishing touch for a healthy, radiant look.",brand:"Hair Glow",stock:75,orders:15,createdAt:"2024-02-03T11:00:00Z",slug:"argan-oil-treatment",likes:50,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:20},{id:14,title:"Curl Defining Cream",price:17.99,category:"haircare",subcategory:"Styling Products",image:"14/curl-defining-cream.jpeg",thumbnails:["14/curl-defining-cream-1.jpeg","14/curl-defining-cream-2.jpeg","14/curl-defining-cream-3.jpeg"],rating:{rate:4.5,count:100},description:"A cream that defines and enhances natural curls, specially formulated to provide structure and shape while minimizing frizz. Enriched with moisturizing agents and curl-enhancing botanicals, this cream helps to boost your curls' bounce and elasticity, giving them a well-defined, vibrant look. Its lightweight, non-crunchy formula offers flexible hold without residue, allowing your curls to move naturally while maintaining their shape. Ideal for all curl types, it leaves your hair looking polished, nourished, and beautifully defined.",brand:"Hair Glow",stock:65,orders:90,createdAt:"2024-02-04T12:00:00Z",slug:"curl-defining-cream",likes:32,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:15,title:"Volumizing Mousse",price:14.99,category:"haircare",subcategory:"Styling Products",image:"15/volumizing-mousse.jpeg",thumbnails:["15/volumizing-mousse-1.jpeg","15/volumizing-mousse-2.jpeg","15/volumizing-mousse-3.jpeg"],rating:{rate:4,count:85},description:"A mousse that adds volume and bounce to hair, designed to give your locks a fuller, more dynamic look. This lightweight, airy formula enhances body and lift without weighing hair down or leaving a sticky residue. Infused with volumizing agents and nourishing ingredients, it helps to create long-lasting volume while maintaining a natural, soft finish. Perfect for all hair types, it provides effortless styling and a boost of bounce, ensuring your hair looks vibrant and full of life.",brand:"Hair Glow",stock:40,orders:70,createdAt:"2024-02-05T13:00:00Z",slug:"volumizing-mousse",likes:24,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:16,title:"Anti-Frizz Serum",price:17.99,category:"haircare",subcategory:"Serums",image:"16/anti-frizz-serum.jpeg",thumbnails:["16/anti-frizz-serum-1.jpeg","16/anti-frizz-serum-2.jpeg","16/anti-frizz-serum-3.jpeg"],rating:{rate:4.6,count:110},description:"A serum that tames frizz and smooths hair, expertly crafted to control flyaways and enhance shine. Formulated with a blend of nourishing oils and silicones, this lightweight serum deeply conditions while creating a sleek, polished finish. It effectively reduces frizz and adds a touch of softness, leaving your hair looking smooth, manageable, and beautifully lustrous. Ideal for all hair types, it provides long-lasting frizz control and a radiant, polished appearance with every use.",brand:"Smooth & Sleek",stock:55,orders:95,createdAt:"2024-02-06T14:00:00Z",slug:"anti-frizz-serum",likes:29,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:15},{id:17,title:"Dry Shampoo",price:12.99,category:"haircare",subcategory:"Shampoos",image:"17/dry-shampoo.jpeg",thumbnails:["17/dry-shampoo-1.jpeg","17/dry-shampoo-2.jpeg","17/dry-shampoo-3.jpeg"],rating:{rate:4.3,count:95},description:"A dry shampoo that refreshes and cleans hair without water, designed to quickly revive your hairstyle and absorb excess oil. This convenient formula delivers a burst of freshness, leaving your hair looking clean and volumized without the need for washing. Infused with absorbing powders and refreshing botanical extracts, it helps to eliminate odors and restore a natural, full-bodied appearance. Ideal for busy days or in-between washes, it provides a quick and easy way to keep your hair looking and feeling revitalized.",brand:"Hair Glow",stock:30,orders:60,createdAt:"2024-02-07T15:00:00Z",slug:"dry-shampoo",likes:20,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:18,title:"Deep Conditioning Mask",price:24.99,category:"haircare",subcategory:"Hair Masks",image:"18/deep-conditioning-mask.jpeg",thumbnails:["18/deep-conditioning-mask-1.jpeg","18/deep-conditioning-mask-2.jpeg","18/deep-conditioning-mask-3.jpeg"],rating:{rate:4,count:130},description:"A deep conditioning mask that repairs and hydrates hair, formulated to provide intensive nourishment and rejuvenation. Enriched with a blend of restorative ingredients, including proteins, vitamins, and natural oils, this mask penetrates deeply to repair damage, strengthen strands, and restore essential moisture. Its rich, creamy texture helps to detangle and smooth hair, leaving it soft, silky, and more manageable. Ideal for weekly use, it transforms dry, stressed hair into a healthier, more vibrant condition.",brand:"Smooth & Sleek",stock:70,orders:120,createdAt:"2024-02-08T16:00:00Z",slug:"deep-conditioning-mask",likes:34,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]}],gE=[{id:19,title:"Matte Foundation",price:29.99,category:"makeup",subcategory:"Foundations",image:"19/matte-foundation.jpeg",thumbnails:["19/matte-foundation-1.jpeg","19/matte-foundation-2.jpeg","19/matte-foundation-3.jpeg"],rating:{rate:3.6,count:150},description:"A long-lasting matte foundation that provides full coverage, designed to deliver a flawless, airbrushed finish that stays put throughout the day. Formulated with high-performance pigments and oil-absorbing agents, this foundation effectively conceals imperfections, evens out skin tone, and controls shine, giving you a smooth, matte look. Its lightweight, breathable texture ensures comfort while maintaining a natural appearance. Ideal for all skin types, it offers buildable coverage and exceptional staying power, making it perfect for long days and special occasions.",brand:"Smooth & Sleek",stock:40,orders:120,createdAt:"2024-03-01T08:00:00Z",slug:"matte-foundation",likes:35,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:20,title:"Bold Lipstick",price:14.99,category:"makeup",subcategory:"Lipsticks",image:"20/bold-lipstick.jpeg",thumbnails:["20/bold-lipstick-1.jpeg","20/bold-lipstick-2.jpeg","20/bold-lipstick-3.jpeg"],rating:{rate:4.7,count:170},description:"A highly pigmented lipstick with a bold, vibrant color, crafted to deliver rich, intense hues in a single swipe. Formulated with a blend of moisturizing ingredients and long-wearing pigments, this lipstick glides on smoothly, providing full coverage and a luxurious matte or satin finish. Its creamy texture ensures comfort and hydration, while the striking color makes a statement and enhances any look. Ideal for all-day wear, it promises to keep your lips looking fabulous and vividly colored with just one application.",brand:"Smooth & Sleek",stock:75,orders:150,createdAt:"2024-03-03T10:00:00Z",slug:"bold-lipstick",likes:45,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:35},{id:21,title:"Hydrating Concealer",price:19.99,category:"makeup",subcategory:"Concealers",image:"21/hydrating-concealer.jpeg",thumbnails:["21/hydrating-concealer-1.jpeg","21/hydrating-concealer-2.jpeg","21/hydrating-concealer-3.jpeg"],rating:{rate:4.5,count:130},description:"A creamy concealer that hydrates and conceals blemishes, designed to provide seamless coverage while nurturing your skin. Infused with moisturizing agents and skin-loving ingredients, this concealer effectively hides imperfections and dark circles without settling into fine lines. Its smooth, blendable texture ensures a natural, radiant finish that enhances your complexion. Ideal for daily use, it offers buildable coverage and hydration, leaving your skin looking flawless and refreshed throughout the day.",brand:"Beauty Blend",stock:55,orders:95,createdAt:"2024-03-02T09:00:00Z",slug:"hydrating-concealer",likes:28,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:22,title:"Lengthening Mascara",price:17.99,category:"makeup",subcategory:"Mascaras",image:"22/lengthening-mascara.jpeg",thumbnails:["22/lengthening-mascara-1.jpeg","22/lengthening-mascara-2.jpeg","22/lengthening-mascara-3.jpeg"],rating:{rate:4.8,count:140},description:"A mascara that lengthens and defines lashes for a dramatic look, featuring a unique brush design and a high-performance formula. This mascara coats each lash with precision, enhancing length and separation while adding volume for a full, fluttery effect. Enriched with conditioning ingredients, it helps to strengthen and protect lashes, ensuring they stay healthy and resilient. Ideal for creating a bold, captivating gaze, it delivers long-lasting, clump-free results that make your eyes stand out with stunning intensity.",brand:"Smooth & Sleek",stock:60,orders:135,createdAt:"2024-03-04T11:00:00Z",slug:"lengthening-mascara",likes:38,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:23,title:"Radiant Highlighter",price:23.99,category:"makeup",subcategory:"Highlighters",image:"23/radiant-highlighter.jpeg",thumbnails:["23/radiant-highlighter-1.jpeg","23/radiant-highlighter-2.jpeg","23/radiant-highlighter-3.jpeg"],rating:{rate:5,count:160},description:"A highlighter that adds a radiant glow to your skin, crafted to enhance your natural luminosity with a stunning, light-reflecting finish. Formulated with finely milled pearls and light-diffusing pigments, this highlighter effortlessly illuminates your cheekbones, brow bones, and other high points of your face, creating a luminous and dewy effect. Its buildable formula allows for a subtle glow or a more intense shine, making it perfect for both everyday wear and special occasions. Ideal for achieving a radiant, youthful complexion, it blends seamlessly and provides a beautiful, flattering glow.",brand:"Lash Luxe",stock:45,orders:125,createdAt:"2024-03-05T12:00:00Z",slug:"radiant-highlighter",likes:50,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:25},{id:24,title:"Blush Palette",price:24.99,category:"makeup",subcategory:"Blushes",image:"24/blush-palette.jpeg",thumbnails:["24/blush-palette-1.jpeg","24/blush-palette-2.jpeg","24/blush-palette-3.jpeg"],rating:{rate:4.4,count:110},description:"A versatile blush palette with shades for every skin tone, designed to enhance your natural complexion with a range of beautiful, blendable colors. Featuring a selection of hues from soft pinks and warm corals to rich berry tones, this palette allows you to customize your blush look to suit any occasion or mood. Formulated with smooth, buildable pigments, each shade delivers a natural, radiant flush that complements your skin tone. Ideal for achieving a range of looks from a subtle glow to a bold pop of color, this palette ensures a flawless, personalized finish.",brand:"Pretty Blush",stock:50,orders:90,createdAt:"2024-03-06T13:00:00Z",slug:"blush-palette",likes:30,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]}],vE=[{id:25,title:"Aromatherapy Essential Oils Set",price:34.99,category:"wellness",subcategory:"Essential Oils",image:"25/aromatherapy-oils.jpeg",thumbnails:["25/aromatherapy-oils-1.jpeg","25/aromatherapy-oils-2.jpeg","25/aromatherapy-oils-3.jpeg"],rating:{rate:3.8,count:115},description:"A set of essential oils for relaxation and wellness, including lavender, eucalyptus, and peppermint. Lavender oil is known for its relaxing properties, helping to reduce stress and improve sleep quality. Eucalyptus oil has a refreshing scent that supports respiratory health and clears congestion. Peppermint oil provides a burst of energy and helps alleviate headaches. Ideal for use in diffusers, during massages, or in your self-care routine, this set offers a natural way to promote relaxation and create a serene environment.",brand:"Zen Scents",stock:45,orders:85,createdAt:"2024-04-01T09:00:00Z",slug:"aromatherapy-essential-oils",likes:40,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:26,title:"Herbal Tea Collection",price:19.99,category:"wellness",subcategory:"Herbal Teas",image:"26/herbal-tea-collection.jpeg",thumbnails:["26/herbal-tea-collection-1.jpeg","26/herbal-tea-collection-2.jpeg","26/herbal-tea-collection-3.jpeg"],rating:{rate:4.6,count:140},description:"A collection of herbal teas designed to support relaxation and digestion. This selection includes blends crafted to calm the mind and soothe the stomach, featuring ingredients known for their calming and digestive benefits. Enjoy a cup of these thoughtfully chosen herbal teas to help unwind after a long day or aid in digestion with a comforting, soothing brew.",brand:"Zen Scents",stock:60,orders:100,createdAt:"2024-04-02T10:00:00Z",slug:"herbal-tea-collection",likes:35,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:27,title:"Organic Supplements Pack",price:36.99,category:"wellness",subcategory:"Supplements",image:"27/organic-supplements-pack.jpeg",thumbnails:["27/organic-supplements-pack-1.jpeg","27/organic-supplements-pack-2.jpeg","27/organic-supplements-pack-3.jpeg"],rating:{rate:4.5,count:105},description:"A pack of organic supplements designed to support overall health and wellness. This collection features carefully selected ingredients known for their health benefits, including vitamins, minerals, and natural extracts. Each supplement is formulated to help boost energy, enhance immunity, and promote balanced well-being, providing a convenient way to maintain a healthy lifestyle with organic, high-quality components.",brand:"Zen Scents",stock:40,orders:75,createdAt:"2024-04-04T12:00:00Z",slug:"organic-supplements-pack",likes:32,sizes:[15,45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"],discount:10},{id:28,title:"Relaxation Massage Oil",price:22.99,category:"wellness",subcategory:"Massage Oils",image:"28/relaxation-massage-oil.jpeg",thumbnails:["28/relaxation-massage-oil-1.jpeg","28/relaxation-massage-oil-2.jpeg","28/relaxation-massage-oil-3.jpeg"],rating:{rate:4.9,count:125},description:"A soothing massage oil that helps to relax muscles and promote well-being. Formulated with a blend of calming essential oils and nourishing botanicals, this massage oil eases tension and provides a calming effect on the body and mind. Its rich, silky texture glides smoothly over the skin, enhancing the massage experience while deeply hydrating and soothing sore muscles. Ideal for use after a long day or as part of your self-care routine, it helps to foster relaxation and overall wellness.",brand:"Lash Luxe",stock:55,orders:110,createdAt:"2024-04-05T13:00:00Z",slug:"relaxation-massage-oil",likes:45,sizes:[45,90],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:29,title:"Detox Bath Salts",price:25.99,category:"wellness",subcategory:"Bath Products",image:"29/detox-bath-salts.jpeg",thumbnails:["29/detox-bath-salts-1.jpeg","29/detox-bath-salts-2.jpeg","29/detox-bath-salts-3.jpeg"],rating:{rate:4.7,count:110},description:"Bath salts with detoxifying ingredients to relax and cleanse the body. Infused with natural minerals and cleansing agents, these bath salts help to soothe tired muscles, relieve stress, and promote a sense of relaxation. The detoxifying properties work to draw out impurities and leave your skin feeling refreshed and rejuvenated. Ideal for a calming soak after a long day, these bath salts provide a luxurious, spa-like experience at home.",brand:"Lash Luxe",stock:50,orders:80,createdAt:"2024-04-07T15:00:00Z",slug:"detox-bath-salts",likes:33,sizes:[45,60],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]},{id:30,title:"Wellness Journal",price:15.99,category:"wellness",subcategory:"Journals",image:"30/wellness-journal.jpeg",thumbnails:["30/wellness-journal-1.jpeg","30/wellness-journal-2.jpeg","30/wellness-journal-3.jpeg"],rating:{rate:4,count:90},description:"A journal designed to track wellness goals, habits, and reflections. This thoughtfully crafted journal provides a structured yet flexible way to monitor your progress, set personal objectives, and reflect on your journey towards better health. With sections dedicated to goal setting, habit tracking, and daily reflections, it helps you stay motivated and organized. Ideal for anyone looking to improve their well-being, this journal supports your efforts to achieve a balanced and mindful lifestyle.",brand:"Smooth & Sleek",stock:80,orders:70,createdAt:"2024-04-09T17:00:00Z",slug:"wellness-journal",likes:25,sizes:[30,60],materials:["Aloe Vera Gel","Shea Butter","Coconut Oil","Green Tea Extract","Rose Water"]}],xE={skincare:pE,haircare:mE,makeup:gE,wellness:vE},yE={articles:[]},S3=ph({name:"articles",initialState:yE,reducers:{setBlog(e,t){e.articles=t.payload}}}),{setBlog:wE}=S3.actions,bE=S3.reducer,Fi=[{id:1,category:"Natural Skincare",created_at:"2024-05-01",slug:"organic-skincare-routines",title:"Organic Skincare Routines for Glowing Skin",image:"blog/organic-skincare1.jpeg",author:"Emily Smith",body:"Embrace natural beauty with organic skincare routines that nourish your skin from the inside out. Discover the best practices for maintaining a radiant complexion using only natural and eco-friendly products. From cleansing routines with plant-based cleansers to using serums packed with natural antioxidants, this guide covers everything you need for healthy, glowing skin. Learn about key ingredients like aloe vera, green tea, and jojoba oil that can transform your skincare regimen.",keywords:["natural skincare","organic products","skincare regimen"]},{id:2,category:"Natural Makeup",created_at:"2024-05-02",slug:"natural-makeup-tips",title:"Natural Makeup Tips for a Flawless Look",image:"blog/natural-makeup1.jpeg",author:"Sarah Johnson",body:"Achieving a flawless look doesn't mean you have to compromise on using natural products. This article explores top tips for using makeup that's not only effective but also gentle on your skin. From foundations with mineral ingredients to lipsticks made from natural pigments, we cover how to build a beauty routine that enhances your features without harsh chemicals. Learn the benefits of using natural makeup, including reduced irritation, better hydration, and a more natural finish.",keywords:["natural makeup","beauty tips","organic products"]},{id:3,category:"Holistic Wellness",created_at:"2024-05-03",slug:"holistic-beauty-routine",title:"Creating a Holistic Beauty Routine",image:"blog/holistic-beauty1.jpeg",author:"Jessica Adams",body:"Beauty is more than skin deep—it's about nurturing your whole self. In this article, we dive into creating a holistic beauty routine that encompasses skincare, nutrition, and mindfulness. Discover how integrating practices like yoga, meditation, and clean eating can enhance your overall appearance and well-being. We also explore how natural supplements and essential oils can support your skin health from within, providing a comprehensive approach to beauty.",keywords:["holistic beauty","natural skincare","wellness"]},{id:4,category:"Natural Skincare",created_at:"2024-05-04",slug:"diy-skincare-remedies",title:"DIY Skincare Remedies from Your Kitchen",image:"blog/diy-skincare1.jpeg",author:"Emily Smith",body:"Why spend a fortune on skincare when you can create effective treatments at home? This guide takes you through easy DIY skincare remedies using ingredients you already have in your kitchen. From honey masks that soothe and moisturize to oatmeal scrubs that exfoliate gently, discover how natural remedies can be both simple and effective. Each recipe is designed to address common skin concerns like acne, dryness, and dullness with natural, easy-to-find ingredients.",keywords:["DIY skincare","natural remedies","organic products"]},{id:5,category:"Natural Makeup",created_at:"2024-05-05",slug:"best-natural-mascara",title:"Best Natural Mascaras for Sensitive Eyes",image:"blog/natural-mascara1.jpeg",author:"Sarah Johnson",body:"Finding the right mascara can be a challenge, especially for those with sensitive eyes. This article highlights the best natural mascaras that offer volume, length, and definition without the irritation. Featuring brands that prioritize natural ingredients, these mascaras are free from parabens, synthetic dyes, and fragrances. Discover which formulations work best for your lashes, and learn how to apply them for maximum impact without the risk of redness or watery eyes.",keywords:["natural makeup","organic products","beauty tips"]},{id:6,category:"Holistic Wellness",created_at:"2024-05-06",slug:"herbal-teas-for-skin-health",title:"Herbal Teas That Boost Skin Health",image:"blog/herbal-teas1.jpeg",author:"Jessica Adams",body:"Herbal teas are not just for relaxation—they can also be a powerful ally in your beauty routine. In this article, explore how teas like chamomile, green tea, and rooibos can improve your skin from the inside out. We delve into the specific skin benefits of each tea, including anti-inflammatory properties, antioxidants, and hydration support. Learn how to incorporate these teas into your daily routine for a natural glow that starts from within.",keywords:["holistic beauty","natural skincare","wellness"]},{id:7,category:"Natural Skincare",created_at:"2024-05-07",slug:"essential-oils-for-skincare",title:"Top Essential Oils for Natural Skincare",image:"blog/essential-oils1.jpeg",author:"Emily Smith",body:"Essential oils have been used for centuries in beauty routines, and for good reason. This article explores the top essential oils for skincare, such as lavender for soothing, tea tree for acne, and rosehip for anti-aging. Discover how to safely incorporate these oils into your skincare routine, whether through DIY blends or ready-made products. Each oil has unique properties that can target specific skin concerns, offering a natural alternative to conventional skincare solutions.",keywords:["natural skincare","essential oils","organic products"]},{id:8,category:"Holistic Wellness",created_at:"2024-05-08",slug:"detoxify-your-body-and-skin",title:"Detoxify Your Body and Skin Naturally",image:"blog/detox1.jpeg",author:"Sarah Johnson",body:"Detoxification isn't just a trend—it's a vital process for maintaining healthy skin and overall wellness. In this article, we explore natural ways to detoxify your body and skin, including dietary changes, herbal supplements, and skincare practices. Learn about the benefits of ingredients like charcoal, green tea, and lemon for cleansing and rejuvenating your body. This comprehensive guide offers practical tips for reducing toxins and achieving a healthier, more radiant complexion.",keywords:["holistic beauty","natural remedies","wellness"]}];function xn(){return xE}const C3=()=>[...xn().skincare,...xn().haircare,...xn().makeup,...xn().wellness],jE=()=>async e=>{try{const t=C3(),r={skincare:xn().skincare,haircare:xn().haircare,makeup:xn().makeup,wellness:xn().wellness};e({type:"products/set",payload:{allProductsData:t,cateProductsData:r}})}catch(t){throw console.error("Error fetching products:",t),t}};function kE(e){const r=C3().find(n=>n.slug===e);if(!r)throw Error("Error: Unable to locate product");return r}const SE=()=>async e=>{try{e(wE(Fi))}catch(t){throw console.error("Error fetching data:",t),t}};function CE(e){const t=Fi.find(a=>a.slug===e),r=Fi.findIndex(a=>a.slug===e),n=r>0?Fi[r-1]:null,i=r<Fi.length-1?Fi[r+1]:null;if(!t)throw Error("Error: Unable to get the article");return{selectedArticle:t,previousArticle:n,nextArticle:i}}function er(e){return X({attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.5 16c-0.036 0-0.072-0.004-0.108-0.012-0.229-0.051-0.392-0.254-0.392-0.488v-7.5h-7.5c-0.234 0-0.437-0.163-0.488-0.392s0.064-0.462 0.277-0.561l15-7c0.191-0.089 0.416-0.049 0.565 0.1s0.188 0.374 0.1 0.565l-7 15c-0.083 0.179-0.262 0.289-0.453 0.289zM2.754 7h5.746c0.276 0 0.5 0.224 0.5 0.5v5.746l5.465-11.712-11.712 5.465z"},child:[]}]})(e)}const EE=d.div`
  max-width: 18rem;
  & ul {
    margin: 0.1rem;
    display: flex;
    margin: auto;
    justify-content: center;
    gap: 1rem;
  }
  & ul li {
    width: 3rem;
    background-color: transparent;
  }
  & ul li svg {
    width: 100%;
    height: 100%;
  }

  & ul li.info {
    display: inline-block;
    margin-right: 20px;
    font-family: Arial;
    margin-top: -18px;
    position: relative;
    vertical-align: middle;
  }
`,E3=()=>o.jsx(EE,{children:o.jsxs("ul",{children:[o.jsx("li",{className:"card visa",children:o.jsxs("svg",{height:"125",viewBox:"0 0 780 500",width:"195",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"m53.487 14h673.524c21.257 0 38.488 16.816 38.488 37.559v394.38c0 20.744-17.231 37.561-38.488 37.561h-673.524c-21.256 0-38.487-16.816-38.487-37.561v-394.38c0-20.743 17.231-37.559 38.487-37.559z",fill:"none",stroke:"#393939",strokeWidth:"30"}),o.jsxs("g",{fill:"#393939",children:[o.jsx("path",{d:"m296.86 342.7 32.099-183.82h51.344l-32.123 183.82zm236.8-179.86c-10.172-3.724-26.108-7.721-46.014-7.721-50.731 0-86.466 24.931-86.77 60.662-.287 26.414 25.511 41.149 44.984 49.941 19.985 9.01 26.703 14.755 26.608 22.801-.127 12.322-15.96 17.952-30.715 17.952-20.549 0-31.467-2.786-48.327-9.65l-6.616-2.921-7.207 41.149c11.993 5.132 34.168 9.578 57.191 9.808 53.967 0 89.002-24.646 89.401-62.801.193-20.912-13.484-36.826-43.105-49.945-17.945-8.502-28.936-14.178-28.818-22.788 0-7.64 9.301-15.812 29.399-15.812 16.791-.254 28.951 3.319 38.427 7.043l4.601 2.122 6.96-39.843m132.12-3.963h-39.671c-12.29 0-21.487 3.274-26.886 15.245l-76.245 168.46h53.91s8.815-22.653 10.81-27.625c5.892 0 58.264.079 65.752.079 1.535 6.436 6.245 27.546 6.245 27.546h47.641l-41.556-183.71zm-62.943 118.7c4.246-10.591 20.455-51.385 20.455-51.385-.303.491 4.215-10.643 6.81-17.543l3.468 15.849s9.831 43.878 11.886 53.079zm-349.55-118.7-50.264 125.35-5.356-25.476c-9.357-29.366-38.511-61.182-71.103-77.11l45.959 160.76 54.32-.061 80.827-183.47h-54.383"}),o.jsx("path",{d:"m156.11 158.88h-82.787l-.655 3.825c64.406 15.216 107.02 51.984 124.72 96.166l-18.002-84.473c-3.108-11.638-12.121-15.111-23.272-15.518"})]})]})}),o.jsx("li",{className:"card amex",children:o.jsxs("svg",{enableBackground:"new 0 0 780 500",height:"125",viewBox:"0 0 780 500",width:"195",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"m53.539 15h674.423c21.285 0 38.538 16.923 38.538 37.8v396.9c0 20.875-17.253 37.8-38.538 37.8h-674.423c-21.285 0-38.539-16.925-38.539-37.8v-396.9c0-20.877 17.254-37.8 38.539-37.8z",fill:"none",stroke:"#393939",strokeWidth:"30"}),o.jsxs("g",{fill:"#393939",children:[o.jsx("path",{d:"m91.35 174.04-13.384-31.85-13.308 31.85z"}),o.jsx("path",{d:"m386.52 161.93c-2.688 1.593-5.865 1.645-9.674 1.645h-23.756v-17.749h24.08c3.408 0 6.963.15 9.274 1.441 2.536 1.165 4.104 3.643 4.104 7.064 0 3.493-1.491 6.304-4.028 7.599z"}),o.jsx("path",{d:"m637.52 113.08v13.162l-7.607-13.162h-55.746v13.162l-6.986-13.162h-75.303c-12.604 0-23.684 1.72-32.632 6.507v-6.507h-51.966v6.507c-5.695-4.935-13.456-6.507-22.085-6.507h-189.85l-12.737 28.786-13.081-28.786h-59.796v13.162l-6.569-13.162h-50.996l-23.682 52.988v42.384l35.019-79.908h29.054l33.259 75.657v-75.657h31.917l25.593 54.208 23.507-54.208h32.56v79.908h-20.046l-.076-62.583-28.354 62.583h-17.171l-28.43-62.638v62.638h-39.774l-7.513-17.822h-40.716l-7.591 17.822h-21.238v16.075h.001v.002h33.413l7.535-17.75h16.865l7.514 17.748h65.741v-13.569l5.868 13.626h34.13l5.867-13.83v13.772h163.38l-.078-29.133h3.162c2.214.075 2.86.274 2.86 3.842v25.291h84.501v-6.782c6.813 3.567 17.415 6.782 31.365 6.782h35.549l7.606-17.748h16.867l7.44 17.748h68.506v-16.859l10.371 16.859h54.899v-111.45h-54.331zm-318.34 32.105h-45.77v14.404h44.673v16.38h-44.673v15.958h45.77v16.525h-65.326v-79.908h65.326zm87.956 32.908c2.76 3.974 3.237 7.525 3.237 14.662v15.697h-19.727l-.074-10.077c0-4.808.471-11.724-3.087-15.569-2.856-2.81-7.211-3.419-14.252-3.419h-20.992v29.064h-19.554v-79.908h44.978c9.993 0 17.354.259 23.679 3.829 6.188 3.569 9.896 8.781 9.896 17.692 0 12.743-8.705 19.324-13.779 21.3 4.279 1.592 7.933 4.401 9.675 6.729zm15.512 30.359v-79.908h19.95v79.908zm251.59-.001-27.713.001-37.069-59.977v59.975h-39.826l-7.609-17.822h-40.623l-7.381 17.822h-22.883c-9.509 0-21.542-2.053-28.356-8.837-6.873-6.785-10.447-15.975-10.447-30.506 0-11.85 2.137-22.685 10.542-31.246 6.322-6.376 16.224-9.319 29.698-9.319h18.93v17.124h-18.535c-7.138 0-11.167 1.036-15.048 4.734-3.331 3.363-5.622 9.724-5.622 18.1 0 8.562 1.743 14.732 5.378 18.767 3.011 3.161 8.479 4.121 13.63 4.121h8.782l27.56-62.842h29.304l33.106 75.581v-75.581h29.776l34.374 55.651v-55.651h20.032z"}),o.jsx("path",{d:"m555.37 174.04-13.53-31.85-13.46 31.85z"}),o.jsx("path",{d:"m280.85 329.93h-48.08v-15.91h42.93v-16.3h-42.93v-14.53h49.03l21.39 23.29z"}),o.jsx("path",{d:"m358.32 339.08-30.02-32.56 30.02-31.52z"}),o.jsx("path",{d:"m402.73 303.54h-25.271v-20.354h25.499c7.059 0 11.96 2.811 11.96 9.801-.001 6.911-4.676 10.554-12.188 10.553z"}),o.jsx("path",{d:"m498.97 299.49c-2.613 1.516-5.85 1.645-9.655 1.645h-23.754v-17.949h24.08c3.479 0 6.965.071 9.331 1.442 2.534 1.293 4.051 3.771 4.051 7.19 0 3.418-1.517 6.174-4.051 7.672z"}),o.jsx("path",{d:"m753.07 336.04v-.002c-4.748 6.783-14.009 10.225-26.538 10.225h-37.765v-17.14h37.61c3.732 0 6.345-.479 7.915-1.979 1.485-1.338 2.323-3.233 2.312-5.213 0-2.328-.949-4.179-2.391-5.285-1.418-1.221-3.481-1.771-6.891-1.771-18.36-.609-41.268.553-41.268-24.741 0-11.595 7.534-23.794 28.058-23.794h38.953v-15.904h-36.191c-10.922 0-18.854 2.555-24.477 6.526v-6.526h-53.529c-8.56 0-18.608 2.074-23.361 6.526v-6.526h-95.592v6.526c-7.606-5.358-20.445-6.526-26.37-6.526h-63.053v6.526c-6.018-5.69-19.404-6.526-27.562-6.526h-70.568l-16.148 17.069-15.125-17.069h-105.41v111.53h103.43l16.639-17.34 15.676 17.34 63.755.053v-26.233h6.269c8.459.127 18.436-.202 27.237-3.921v30.098h52.583v-29.066h2.54c3.234 0 3.556.131 3.556 3.291v25.772h159.75c10.143 0 20.741-2.536 26.612-7.136v7.136h50.672c10.545 0 20.844-1.442 28.68-5.138v-20.777h-.004zm-350.8-16.111h-24.4v26.809h-38.009l-24.08-26.459-25.023 26.459h-77.461v-79.93h78.652l24.061 26.203 24.873-26.203h62.488c15.516 0 32.952 4.197 32.952 26.332 0 22.205-16.96 26.789-34.053 26.789zm117.34-3.625c2.759 3.898 3.16 7.541 3.239 14.59v15.844h-19.634v-10.002c0-4.805.478-11.928-3.16-15.646-2.857-2.862-7.212-3.546-14.347-3.546h-20.899v29.191h-19.648v-79.928h45.147c9.9 0 17.11.429 23.531 3.772 6.17 3.64 10.051 8.632 10.051 17.747-.001 12.759-8.712 19.268-13.858 21.266 4.353 1.57 7.909 4.382 9.578 6.712zm80.781-32.967h-45.794v14.531h44.676v16.307h-44.676v15.906l45.794.068v16.587h-65.268v-79.929h65.268zm50.249 63.396h-38.086v-17.141h37.936c3.708 0 6.341-.477 7.987-1.979 1.343-1.233 2.311-3.029 2.311-5.21 0-2.33-1.046-4.181-2.388-5.286-1.496-1.221-3.557-1.771-6.965-1.771-18.287-.609-41.188.551-41.188-24.742 0-11.592 7.457-23.795 27.958-23.795h39.204v17.013h-35.869c-3.559 0-5.871.131-7.837 1.442-2.144 1.295-2.938 3.217-2.938 5.752 0 3.014 1.818 5.063 4.277 5.953 2.063.702 4.281.904 7.611.904l10.526.277c10.615.253 17.904 2.047 22.335 6.429h-.001c3.805 3.848 5.848 8.706 5.848 16.935 0 17.192-10.999 25.219-30.721 25.219z"}),o.jsx("path",{d:"m753.11 283.19h-35.645c-3.557 0-5.923.129-7.911 1.442-2.064 1.293-2.856 3.218-2.856 5.752 0 3.015 1.739 5.068 4.272 5.953 2.063.702 4.279.908 7.535.908l10.603.274c10.693.26 17.831 2.053 22.185 6.435.794.61 1.271 1.292 1.817 1.979z"})]})]})}),o.jsx("li",{className:"card elo",children:o.jsxs("svg",{height:"125",viewBox:"0 0 780 500",width:"195",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"m55 14h670c22.1 0 40 17.9 40 40v391c0 22.1-17.9 40-40 40h-670c-22.1 0-40-17.9-40-40v-391c0-22.1 17.9-40 40-40z",fill:"none",stroke:"#393939",strokeWidth:"30"}),o.jsx("path",{d:"m167.5 186.6c6.7-2.2 13.9-3.5 21.4-3.5 32.6 0 59.8 23.2 66 53.9l46.2-9.4c-10.6-52.3-56.8-91.6-112.2-91.6-12.7 0-24.9 2.1-36.3 5.9zm-54.5 149.7 31.2-35.3a67.32 67.32 0 0 1 -22.7-50.5c0-20.1 8.8-38.1 22.7-50.4l-31.2-35.3c-23.7 21-38.6 51.6-38.6 85.7s14.9 64.8 38.6 85.8zm141.8-72.3c-6.3 30.7-33.4 53.8-66 53.8-7.5 0-14.7-1.2-21.4-3.5l-15 44.7c11.4 3.8 23.6 5.9 36.3 5.9 55.4 0 101.5-39.3 112.2-91.5zm200 31.6c-7.6 7.4-18 11.9-29.4 11.8-7.8-.1-15.1-2.5-21.2-6.4l-15.3 24.4c10.5 6.6 22.8 10.5 36.1 10.7 19.4.3 37-7.3 49.9-19.9zm-27.7-99.2c-38.5-.6-70.3 30.2-70.9 68.8-.2 14.5 4 28 11.3 39.2l126.5-54.1c-7.1-30.5-34.2-53.4-66.9-53.9m-41.9 74.2c-.2-1.6-.3-3.3-.2-5 .4-22.7 19.1-40.9 41.8-40.5 12.4.2 23.3 5.8 30.8 14.6zm148.5-105.7v134.9l23.4 9.7-11.1 26.6-23.1-9.6c-5.2-2.3-8.7-5.7-11.4-9.6-2.6-4-4.5-9.4-4.5-16.7v-135.3zm84.4 62.3c4.1-1.4 8.5-2.1 13-2.1 19.9 0 36.5 14.1 40.3 32.9l28.2-5.7c-6.5-31.9-34.7-55.9-68.5-55.9-7.7 0-15.2 1.3-22.1 3.6zm-33.2 91.4 19.1-21.5c-8.5-7.5-13.9-18.5-13.9-30.8s5.4-23.2 13.9-30.8l-19.1-21.5c-14.5 12.8-23.6 31.5-23.6 52.3s9.1 39.5 23.6 52.3zm86.5-44.1c-3.8 18.7-20.4 32.9-40.3 32.9-4.6 0-8.9-.7-13-2.1l-9.1 27.3c7 2.3 14.4 3.6 22.2 3.6 33.8 0 62-24 68.5-55.9z",fill:"#393939"})]})}),o.jsx("li",{className:"card discover",children:o.jsx("svg",{width:"195",height:"125",viewBox:"0 0 780 500",xmlns:"http://www.w3.org/2000/svg",children:o.jsxs("g",{fill:"#393939",fillRule:"evenodd",children:[o.jsx("path",{d:"M54.992 30h670.016C738.811 30 750 41.191 750 55.005v219.919s-75.602 51.078-163.193 86.377C447.689 425.61 246.167 471 232.37 471H54.991C41.19 471 30 459.809 30 445.995V55.005C30 41.198 41.196 30 54.992 30zM0 55.005v390.99C0 476.375 24.618 501 54.992 501h670.016C755.374 501 780 476.37 780 445.995V55.005C780 24.625 755.382 0 725.008 0H54.992C24.626 0 0 24.63 0 55.005z"}),o.jsx("path",{d:"m67.415 164.4v99.142h29.992c15.947 0 27.465-3.543 37.573-11.445 12.014-9.36 19.117-23.467 19.117-38.057 0-29.26-23.22-49.64-56.532-49.64h-30.15zm54.146 74.48c-6.454 5.484-14.837 7.878-28.11 7.878h-5.511v-65.558h5.511c13.273 0 21.326 2.236 28.11 8.016 7.104 5.956 11.377 15.183 11.377 24.682 0 9.515-4.273 19.025-11.377 24.981zm41.987 24.662h20.54v-99.142h-20.54v99.142zm70.766-61.337c-12.325-4.293-15.946-7.128-15.946-12.482 0-6.244 6.45-10.99 15.303-10.99 6.153 0 11.212 2.383 16.563 8.029l10.748-13.249c-8.833-7.274-19.398-10.993-30.944-10.993-18.632 0-32.844 12.184-32.844 28.41 0 13.658 6.617 20.648 25.909 27.186 8.04 2.67 12.133 4.45 14.2 5.646 4.103 2.524 6.158 6.094 6.158 10.257 0 8.032-6.785 13.985-15.948 13.985-9.798 0-17.688-4.612-22.42-13.222l-13.268 12.03c9.464 13.077 20.828 18.872 36.458 18.872 21.345 0 36.32-13.36 36.32-32.553 0-15.75-6.924-22.882-30.289-30.926m36.769 11.567c0 29.14 24.303 51.736 55.58 51.736 8.846 0 16.417-1.636 25.758-5.776v-22.764c-8.214 7.737-15.489 10.86-24.801 10.86-20.688 0-35.37-14.123-35.37-34.197 0-19.037 15.15-34.051 34.414-34.051 9.8 0 17.213 3.29 25.757 11.154v-22.752c-9.02-4.305-16.432-6.09-25.269-6.09-31.12 0-56.07 23.054-56.07 51.88m244.2 17.068l-28.084-66.592h-22.437l44.687 101.68h11.054l45.492-101.68h-22.265l-28.446 66.593m60 32.701h58.251v-16.784h-37.726v-26.762h36.335v-16.792h-36.335v-22.004h37.726v-16.8h-58.251v99.142m139.58-69.872c0-18.56-13.576-29.27-37.266-29.27h-30.456v99.142h20.517v-39.827h2.677l28.43 39.827h25.26l-33.149-41.765c15.472-2.964 23.987-12.927 23.987-28.106zm-41.204 16.371h-6.001v-30.025h6.326c12.791 0 19.744 5.048 19.744 14.697 0 9.966-6.953 15.328-20.07 15.328zm-314.55 3.914v-0.034c0-29.129 25.081-52.708 56.021-52.708s56.022 23.579 56.022 52.708v0.034c0 29.13-25.082 52.743-56.022 52.743s-56.022-23.614-56.022-52.743"})]})})}),o.jsx("li",{className:"card mastercard",children:o.jsxs("svg",{height:"125",viewBox:"0 0 780 500",width:"195",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"m53.385 15h671.729c21.201 0 38.386 16.853 38.386 37.64v395.22c0 20.788-17.185 37.64-38.386 37.64h-671.729c-21.199 0-38.385-16.852-38.385-37.64v-395.22c0-20.787 17.186-37.64 38.385-37.64z",fill:"none",stroke:"#393939",strokeWidth:"30"}),o.jsxs("g",{fill:"#393939",children:[o.jsx("path",{d:"m704.94 250.23c0 105.73-87.905 191.78-195.95 191.78-45.065 0-86.609-15.002-119.75-40.09-33.123 25.088-74.667 40.09-119.73 40.09-108.04 0-195.94-86.049-195.94-191.78 0-105.74 87.902-191.74 195.94-191.74 45.065 0 86.61 14.945 119.73 40.069 33.143-25.124 74.687-40.069 119.75-40.069 108.04 0 195.95 86.008 195.95 191.74zm-196.23-174.81c-39.747 0-76.441 12.744-106.09 34.25 26.886 24.488 46.771 56.288 56.271 92.126h-18.16c-9.304-31.684-27.491-59.657-51.777-81.184-24.26 21.527-42.46 49.5-51.729 81.184h-18.188c9.523-35.838 29.407-67.638 56.294-92.126-29.662-21.506-66.342-34.25-106.11-34.25-98.521 0-178.39 78.16-178.39 174.6 0 96.413 79.869 174.6 178.39 174.6 39.767 0 76.447-12.744 106.11-34.248-25.299-23.059-44.385-52.603-54.475-85.856h18.364c9.755 29.118 27.074 54.819 49.734 74.91 22.685-20.091 40.026-45.792 49.782-74.91h18.358c-10.107 33.255-29.188 62.798-54.475 85.856 29.645 21.504 66.339 34.248 106.09 34.248 98.521 0 178.39-78.185 178.39-174.6.001-96.438-79.868-174.6-178.39-174.6z",stroke:"#979797"}),o.jsx("path",{d:"m197.07 208.11h-28.565l-17.852 52.083-.743-52.083h-26.472l-14.371 84.15h17.227l11.064-64.29 1.545 64.29h12.551l23.521-64.674-10.539 64.674h18.398zm47.412 84.071h-15.25l.355-7.101c-4.655 5.606-10.854 8.289-19.277 8.289-9.991 0-16.795-7.635-16.795-18.677 0-16.687 11.866-26.386 32.279-26.386 2.092 0 4.769.19 7.506.534.569-2.277.707-3.233.707-4.458 0-4.515-3.19-6.218-11.793-6.218-8.992-.115-16.421 2.087-19.47 3.082.195-1.148 2.562-15.385 2.562-15.385 9.151-2.64 15.208-3.635 22.014-3.635 15.797 0 24.167 6.926 24.147 20.053.02 3.521-.568 7.863-1.488 13.588-1.602 9.889-5.024 31.128-5.495 36.312v.002zm-12.926-30.165c-1.935-.193-2.778-.269-4.107-.269-10.441 0-15.702 3.498-15.702 10.389 0 4.271 2.582 6.984 6.57 6.984 7.51 0 12.903-6.984 13.239-17.104zm253.85-55.787c-24.383 0-41.435 21.008-41.435 51.09 0 22.347 12.342 36.316 32.147 36.316 5.082 0 9.48-.651 16.246-2.487l3.226-19.155c-6.081 2.93-11.084 4.325-15.625 4.325-10.694 0-17.149-7.732-17.149-20.496 0-18.54 9.605-31.532 23.348-31.532 5.104 0 9.875 1.302 16.443 4.556l3.011-18.253c-2.695-1.035-12.18-4.364-20.212-4.364zm66.176 85.952h-15.229l.352-7.101c-4.674 5.606-10.892 8.289-19.301 8.289-9.97 0-16.814-7.635-16.814-18.677 0-16.687 11.908-26.386 32.3-26.386 2.093 0 4.772.19 7.513.534.562-2.277.701-3.233.701-4.458 0-4.515-3.187-6.218-11.773-6.218-9.011-.115-16.42 2.087-19.473 3.082.177-1.148 2.544-15.385 2.544-15.385 9.168-2.64 15.228-3.635 21.993-3.635 15.82 0 24.19 6.926 24.169 20.053.038 3.521-.566 7.863-1.486 13.588-1.583 9.889-5.021 31.128-5.494 36.312v.002zm-12.933-30.165c-1.916-.193-2.776-.269-4.126-.269-10.422 0-15.702 3.498-15.702 10.389 0 4.271 2.583 6.984 6.612 6.984 7.49 0 12.904-6.984 13.216-17.104zm-203.63 14.306c-1.232.423-2.854.649-4.946.649-4.379 0-6.314-1.527-6.314-5.07.04-2.179 3.07-18.367 5.183-31.361h9.439l2.505-16.456h-9.406l2.131-10.328h-18.282s-6.919 40.277-7.955 46.647c-1.174 7.291-2.658 15.232-2.544 18.254 0 9.741 5.124 15.042 14.526 15.042 4.267 0 8.19-.691 13.241-2.22zm56.206 14.29c-6.295 1.877-12.36 2.757-18.77 2.757-20.494-.043-31.166-10.505-31.166-30.539 0-23.384 13.587-40.605 32.025-40.605 15.074 0 24.716 9.625 24.716 24.778 0 5.013-.685 9.893-2.271 16.84h-36.406c-1.231 9.891 5.263 14.024 15.899 14.024 6.546 0 12.434-1.302 19.003-4.285zm-9.587-40.141c.118-1.416 1.933-12.249-8.507-12.249-5.828 0-10.01 4.384-11.689 12.249zm-122.59-5.093c0 8.669 4.26 14.62 13.998 19.117 7.45 3.443 8.603 4.438 8.603 7.56 0 4.243-3.285 6.159-10.578 6.159-5.474 0-10.597-.806-16.484-2.678 0 0-2.421 15.077-2.54 15.806 4.205.882 7.918 1.718 19.161 2.028 19.413 0 28.371-7.254 28.371-22.867 0-9.432-3.736-14.905-12.967-19.061-7.7-3.482-8.6-4.246-8.6-7.441 0-3.713 3.069-5.588 9.032-5.588 3.596 0 8.543.384 13.197 1.035l2.622-15.883c-4.772-.727-11.985-1.339-16.19-1.339-20.588-.001-27.704 10.504-27.625 23.152zm396.1 46.883h-17.418l.879-6.369c-5.065 5.264-10.243 7.559-16.97 7.559-13.376 0-22.212-11.271-22.212-28.377 0-22.792 13.703-41.963 29.93-41.963 7.121 0 12.553 2.832 17.582 9.32l4.065-24.319h18.147zm-27.1-15.683c8.562 0 14.604-9.514 14.604-23.061 0-8.706-3.42-13.414-9.76-13.414-8.348 0-14.272 9.511-14.272 22.963 0 8.975 3.171 13.512 9.428 13.512zm-56.582-52.672c-2.306 21.164-6.394 42.613-9.58 63.815l-.842 4.61h18.38c6.589-41.845 8.19-50.016 18.495-48.984 1.64-8.591 4.69-16.07 6.997-19.858-7.717-1.573-12.023 2.715-17.631 10.81.447-3.522 1.25-6.909 1.075-10.393zm-161.19 0c-2.312 21.164-6.416 42.613-9.603 63.815l-.843 4.61h18.398c6.59-41.845 8.173-50.016 18.476-48.984 1.662-8.591 4.731-16.07 7.002-19.858-7.686-1.573-12.021 2.715-17.638 10.81.45-3.522 1.249-6.909 1.095-10.393z"})]})]})}),o.jsx("li",{className:"card paypal",children:o.jsxs("svg",{height:"125",viewBox:"0 0 780 500",width:"195",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"m55 15h670c22.091 0 40 17.909 40 40v391c0 22.092-17.909 40-40 40h-670c-22.092 0-40-17.908-40-40v-391c0-22.091 17.908-40 40-40z",fill:"none",stroke:"#393939",strokeWidth:"30"}),o.jsx("path",{d:"m168.379 169.853c-8.399-5.774-19.359-8.668-32.88-8.668h-52.346c-4.145 0-6.435 2.073-6.87 6.215l-21.265 133.483c-.221 1.311.107 2.51.981 3.6.869 1.092 1.962 1.635 3.271 1.635h24.864c4.361 0 6.758-2.068 7.198-6.215l5.888-35.986c.215-1.744.982-3.162 2.291-4.254 1.308-1.09 2.944-1.803 4.907-2.13 1.963-.324 3.814-.487 5.562-.487 1.743 0 3.814.11 6.217.327 2.397.218 3.925.324 4.58.324 18.756 0 33.478-5.285 44.167-15.866 10.684-10.577 16.032-25.243 16.032-44.004 0-12.867-4.202-22.191-12.597-27.974zm-26.99 40.08c-1.094 7.635-3.926 12.649-8.506 15.049-4.581 2.403-11.124 3.598-19.629 3.598l-10.797.327 5.563-35.007c.434-2.397 1.851-3.597 4.252-3.597h6.218c8.72 0 15.049 1.257 18.975 3.761 3.924 2.51 5.233 7.801 3.924 15.869zm579.404-48.748h-24.207c-2.406 0-3.822 1.2-4.254 3.6l-21.266 136.099-.328.654c0 1.096.436 2.127 1.311 3.109.867.98 1.963 1.471 3.27 1.471h21.594c4.139 0 6.43-2.068 6.871-6.215l21.266-133.813v-.325c-.001-3.053-1.423-4.58-4.257-4.58zm-292.483 52.671c0-1.088-.439-2.126-1.305-3.106-.875-.981-1.859-1.474-2.945-1.474h-25.193c-2.404 0-4.366 1.096-5.889 3.271l-34.679 51.04-14.395-49.075c-1.095-3.487-3.492-5.236-7.197-5.236h-24.541c-1.093 0-2.074.492-2.941 1.474-.875.98-1.309 2.019-1.309 3.106 0 .44 2.127 6.871 6.379 19.303 4.252 12.435 8.832 25.849 13.74 40.245 4.908 14.393 7.469 22.031 7.688 22.898-17.886 24.43-26.826 37.517-26.826 39.259 0 2.838 1.416 4.254 4.253 4.254h25.192c2.398 0 4.36-1.088 5.889-3.27l83.427-120.399c.435-.433.652-1.193.652-2.29zm234.577-4.58h-24.867c-3.055 0-4.904 3.6-5.557 10.798-5.678-8.721-16.031-13.088-31.084-13.088-15.703 0-29.066 5.89-40.076 17.668-11.016 11.778-16.521 25.631-16.521 41.551 0 12.871 3.761 23.121 11.284 30.752 7.525 7.639 17.613 11.451 30.266 11.451 6.324 0 12.758-1.311 19.301-3.926 6.543-2.617 11.664-6.105 15.379-10.469 0 .219-.223 1.199-.656 2.943-.439 1.748-.654 3.059-.654 3.926 0 3.494 1.414 5.234 4.254 5.234h22.576c4.137 0 6.541-2.068 7.193-6.215l13.416-85.39c.215-1.309-.113-2.507-.982-3.599-.876-1.089-1.963-1.636-3.272-1.636zm-42.695 64.453c-5.561 5.453-12.268 8.178-20.119 8.178-6.328 0-11.449-1.742-15.377-5.234-3.928-3.484-5.891-8.283-5.891-14.395 0-8.065 2.727-14.886 8.18-20.447 5.447-5.562 12.215-8.343 20.285-8.343 6.102 0 11.174 1.8 15.213 5.397 4.031 3.6 6.053 8.563 6.053 14.889-.001 7.851-2.782 14.505-8.344 19.955zm-328.961-64.453h-24.865c-3.058 0-4.908 3.6-5.563 10.798-5.889-8.721-16.25-13.088-31.081-13.088-15.704 0-29.065 5.89-40.078 17.668-11.016 11.778-16.521 25.631-16.521 41.551 0 12.871 3.763 23.121 11.288 30.752 7.525 7.639 17.61 11.451 30.262 11.451 6.104 0 12.433-1.311 18.975-3.926 6.543-2.617 11.778-6.105 15.704-10.469-.875 2.617-1.309 4.908-1.309 6.869 0 3.494 1.417 5.234 4.253 5.234h22.574c4.141 0 6.543-2.068 7.198-6.215l13.413-85.39c.215-1.309-.111-2.507-.981-3.599-.873-1.089-1.963-1.636-3.269-1.636zm-42.696 64.615c-5.563 5.35-12.382 8.016-20.447 8.016-6.329 0-11.4-1.742-15.214-5.234-3.819-3.484-5.726-8.283-5.726-14.395 0-8.065 2.725-14.886 8.18-20.447 5.449-5.562 12.211-8.343 20.284-8.343 6.104 0 11.175 1.8 15.214 5.397 4.032 3.6 6.052 8.563 6.052 14.889 0 8.07-2.781 14.779-8.343 20.117zm291.501-104.038c-8.398-5.774-19.355-8.668-32.879-8.668h-52.017c-4.365 0-6.766 2.073-7.199 6.215l-21.264 133.483c-.221 1.311.105 2.51.98 3.6.867 1.092 1.963 1.635 3.271 1.635h26.826c2.617 0 4.361-1.416 5.234-4.252l5.891-37.949c.215-1.744.98-3.162 2.289-4.254 1.309-1.09 2.943-1.803 4.908-2.13 1.963-.324 3.813-.487 5.563-.487 1.742 0 3.814.11 6.213.327 2.4.218 3.93.324 4.58.324 18.76 0 33.48-5.285 44.168-15.866 10.687-10.577 16.03-25.243 16.03-44.004.001-12.867-4.2-22.191-12.594-27.974zm-33.533 53.82c-4.799 3.271-11.998 4.906-21.592 4.906l-10.471.327 5.564-35.007c.432-2.397 1.848-3.597 4.252-3.597h5.887c4.797 0 8.613.218 11.453.653 2.832.439 5.561 1.799 8.178 4.089 2.619 2.29 3.926 5.618 3.926 9.979 0 9.162-2.402 15.376-7.197 18.65z",fill:"#393939"})]})})]})});function zE(e){return X({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"},child:[]}]})(e)}function _E(e){return X({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"},child:[]}]})(e)}function z3(e){return X({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"},child:[]}]})(e)}function Iu(e){return X({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H13V3ZM15 21V3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15ZM11 8.5V15.5L7 12L11 8.5Z"},child:[]}]})(e)}const $E=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`,Vr=d.div`
  height: 3rem;
  width: 3rem;
  margin: 0 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &:hover {
    width: 10.5rem;
  }
  &:hover span {
    display: block;
  }
  &:hover svg {
    color: #fff;
  }
`,Td=d.div`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50px;
  transition:
    background 0.3s ease-out,
    color 0.3s ease-out;

  ${Vr}:nth-child(1):hover & {
    background: #4267b2;
  }

  ${Vr}:nth-child(2):hover & {
    background: black;
    color: black;
  }

  ${Vr}:nth-child(3):hover & {
    background: #e1306c;
  }

  svg {
    font-size: 25px;
    color: var(--accent-color);
    transition: color 0.3s ease-out;
  }
`,Ld=d.span`
  font-size: var(--font-size-body);
  font-weight: 500;
  line-height: 60px;
  margin-right: 1.1rem;
  transition: color 0.3s ease-out;
  display: none;
  ${Vr}:nth-child(1) & {
    color: #4267b2;
  }

  ${Vr}:nth-child(2) & {
    color: black;
  }

  ${Vr}:nth-child(3) & {
    color: #e1306c;
  }
`,PE=()=>o.jsxs($E,{children:[o.jsxs(Vr,{children:[o.jsx(Td,{children:o.jsx(D5,{size:"1.3rem"})}),o.jsx(Ld,{children:"Facebook"})]}),o.jsxs(Vr,{children:[o.jsx(Td,{children:o.jsx(z3,{size:"1.3rem"})}),o.jsx(Ld,{children:"Twitter"})]}),o.jsxs(Vr,{children:[o.jsx(Td,{children:o.jsx(Nr,{size:"1.3rem"})}),o.jsx(Ld,{children:"Instagram"})]})]}),TE=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  padding: 2.5rem 1rem;
  margin-bottom: 5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
  border: 5px solid rgba(255, 255, 255, 0.4);
  h5 {
    font-size: 1.5rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    color: var(--text-color-dark);
    margin-bottom: 1rem;
  }
`,LE=d.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 2rem;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
  @media (max-width: 580px) {
    background-color: transparent;
    flex-direction: column;
    gap: 1rem;
  }
`,AE=d.input`
  border: none;
  background: transparent;
  padding: 0.5rem;
  outline: none;
  flex: 1 1 80%; /* flex-grow: 1, flex-shrink: 1, flex-basis: 80% */
  padding: 0 1rem;
  @media (max-width: 580px) {
    background-color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
  }
`,IE=d.button`
  background: var(--accent-color);
  border: none;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: background var(--transition-quick);
  flex: 0 1 auto; /* flex-grow: 0, flex-shrink: 1, flex-basis: auto */
  &:hover {
    background: var(--accent-color-light-1);
  }
`,RE=()=>o.jsxs(TE,{children:[o.jsx(oe,{as:"h3",$marginBottom:"1rem",children:"Subscribe Now!"}),o.jsx(oe,{as:"h5",children:"You will receive 15% off on your first order!"}),o.jsxs(LE,{children:[o.jsx(AE,{type:"email",placeholder:"Your email"}),o.jsxs(IE,{children:[o.jsx("span",{children:"SUBSCRIBE"}),o.jsx(Zr,{})]})]})]}),_3="/assets/pureEssence-logo1-CJ9YUJ-t.png",ME=d.footer`
  background-color: transparent;
  color: var(--text-color);
  padding: 3rem 0;
  text-align: center;
  @media (max-width: 610px) {
    margin-bottom: 1rem;
  }
`,NE=d.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 1rem;
`,OE=d.div`
  img {
    width: 12rem;
    height: auto;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
    transition:
      transform var(--transition-slow),
      filter var(--transition-slow);

    &:hover {
      transform: translateY(-5px);
      filter: drop-shadow(2px 8px 12px rgba(0, 0, 0, 0.3));
    }
  }
`,pl=d.div`
  flex: 1;
  min-width: 200px;
  text-align: left;

  h3 {
    color: var(--accent-color);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      svg {
        color: var(--accent-color) !important;
      }
      a {
        color: var(--text-color);
        text-decoration: none;
        transition: color 0.3s;
        display: flex;
        gap: 0.7rem;
        align-items: center;
        transition: color var(--transition-quick);
        &:hover {
          color: var(--accent-color);
        }
      }
    }

    .contact-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`,DE=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  color: var(--dark-grey-color);
  padding: 1rem 0;
  border-top: 1px solid var(--light-grey-color);

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    p {
      text-align: center;
    }
  }
`,FE=d(ge)`
  margin-top: var(--spacing-lg);

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--accent-color);
    transition:
      transform 0.4s ease,
      color 0.4s ease,
      filter 0.4s ease;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));

    &:hover {
      transform: rotate(360deg) scale(1.2);
      filter: drop-shadow(0 0 10px var(--accent-color));
    }
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`,BE=d.span`
  color: var(--primary-color-dark-1);
`,UE=()=>{const t=new Date().getFullYear();return o.jsx(ME,{children:o.jsxs(NE,{children:[o.jsx(RE,{}),o.jsxs(ge,{type:"horizontal",$justifyContent:"space-around",$flexWrap:!0,children:[o.jsxs(pl,{children:[o.jsx("h3",{children:"RESOURCES"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsxs(re,{to:"/account",children:[o.jsx(er,{})," My account"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/wishlist",children:[o.jsx(er,{})," Wishlist"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/cart",children:[o.jsx(er,{})," Cart"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/",children:[o.jsx(er,{})," Support"]})})]})]}),o.jsxs(pl,{children:[o.jsx("h3",{children:"QUICK LINKS"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsxs(re,{to:"/",children:[o.jsx(er,{})," Our Story"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/",children:[o.jsx(er,{})," Features"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/",children:[o.jsx(er,{})," Project Detail"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/",children:[o.jsx(er,{})," Points of Sale"]})})]})]}),o.jsxs(pl,{children:[o.jsx("h3",{children:"ABOUT US"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsxs(re,{to:"/about-us",children:[o.jsx(er,{})," Company Info"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/",children:[o.jsx(er,{})," Terms of Service"]})}),o.jsx("li",{children:o.jsxs(re,{to:"/",children:[o.jsx(er,{})," Privacy Policy"]})})]})]}),o.jsxs(pl,{children:[o.jsx("h3",{children:"CONTACT INFORMATION"}),o.jsxs("ul",{children:[o.jsxs("li",{className:"contact-info",children:[o.jsx(V5,{color:"black"})," +1 (347) 927-396"]}),o.jsxs("li",{className:"contact-info",children:[o.jsx(sh,{color:"black"})," support@example.com"]})]}),o.jsxs("p",{children:["123 Main Street, Anytown, USA",o.jsx("br",{}),"Zip: 12345"]})]})]}),o.jsxs(FE,{type:"horizontal",$justifyContent:"space-between",$alignItems:"center",$flexWrap:!0,$flexGap:"1rem",style:{marginTop:"2rem"},children:[o.jsx(OE,{children:o.jsx(re,{to:"/",children:o.jsx("img",{src:_3,alt:"logo"})})}),o.jsx("div",{children:o.jsx(PE,{iconColor:"red"})})]}),o.jsxs(DE,{children:[o.jsxs("p",{children:["© ",t," ",o.jsx(BE,{children:"Koshegio-Themes"}),". All Rights Reserved."]}),o.jsx(E3,{})]})]})})},$3=e=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",...e},b.createElement("g",{id:"search"},b.createElement("path",{d:"M28.34,24.12l-6.5-6.85A10.49,10.49,0,1,0,12.5,23h.55a1,1,0,1,0-.1-2,8.5,8.5,0,1,1,5.4-2.32A8.72,8.72,0,0,1,16.53,20a1,1,0,0,0-.41,1.35.89.89,0,0,0,.36.36s0,.06,0,.08l6.77,7.13A3.48,3.48,0,0,0,25.73,30h.09a3.43,3.43,0,0,0,2.39-1A3.47,3.47,0,0,0,28.34,24.12Zm-1.5,3.47a1.45,1.45,0,0,1-1.06.41,1.51,1.51,0,0,1-1-.46l-6.15-6.49a10.07,10.07,0,0,0,1.14-.93,10.54,10.54,0,0,0,1-1.12l6.16,6.5A1.47,1.47,0,0,1,26.84,27.59Z"}),b.createElement("path",{d:"M8.55,8.16a1,1,0,0,0-1.39.29,7.19,7.19,0,0,0,1.17,9.29A1,1,0,0,0,9,18a1,1,0,0,0,.67-1.74A5.32,5.32,0,0,1,8,12.91a5.24,5.24,0,0,1,.84-3.36A1,1,0,0,0,8.55,8.16Z"}))),P3=e=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},b.createElement("path",{d:"M22.813,7.338a6.736,6.736,0,0,0-3.8-4.49c-3.206-1.471-6,.878-7.016,1.9-1.013-1.025-3.813-3.374-7.016-1.9a6.736,6.736,0,0,0-3.8,4.49,5.818,5.818,0,0,0,1,4.98c1.708,2.215,9.156,8.891,9.472,9.174a.514.514,0,0,0,.688,0c.316-.283,7.764-6.959,9.472-9.174A5.815,5.815,0,0,0,22.813,7.338ZM21,11.689c-1.448,1.878-7.488,7.362-9,8.726-1.512-1.364-7.552-6.848-9-8.726a4.8,4.8,0,0,1-.812-4.1,5.711,5.711,0,0,1,3.226-3.8C7.643,2.762,10.145,4.1,11.6,5.839a.516.516,0,0,0,.4.188h0a.516.516,0,0,0,.4-.188c.029-.035,2.958-3.536,6.188-2.055a5.714,5.714,0,0,1,3.226,3.8A4.8,4.8,0,0,1,21,11.689Z"}),b.createElement("path",{d:"M6.346,5A4.39,4.39,0,0,0,3.873,7.928,3.818,3.818,0,0,0,4.529,11.2a.515.515,0,0,0,.816-.629,2.8,2.8,0,0,1-.472-2.392,3.366,3.366,0,0,1,1.9-2.237A.515.515,0,0,0,6.346,5Z"})),T3=e=>b.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 32 32",style:{enableBackground:"new 0 0 32 32"},xmlSpace:"preserve",...e},b.createElement("g",null,b.createElement("g",null,b.createElement("path",{d:"M19.9423828,32H4.0576172C1.8203125,32,0,30.1796875,0,27.9423828c0-6.6171875,5.3828125-12,12-12s12,5.3828125,12,12 C24,30.1796875,22.1796875,32,19.9423828,32z M12,17.9423828c-5.5136719,0-10,4.4863281-10,10 C2,29.0771484,2.9228516,30,4.0576172,30h15.8847656C21.0771484,30,22,29.0771484,22,27.9423828 C22,22.4287109,17.5136719,17.9423828,12,17.9423828z"})),b.createElement("g",null,b.createElement("path",{d:"M18,14H6c-0.5527344,0-1-0.4477539-1-1V7c0-3.8598633,3.140625-7,7-7s7,3.1401367,7,7v6 C19,13.5522461,18.5527344,14,18,14z M7,12h10V7c0-2.7568359-2.2431641-5-5-5S7,4.2431641,7,7V12z"})),b.createElement("g",null,b.createElement("path",{d:"M20,1c-1.5388794,0-2.9379272,0.5843506-4,1.5368042C17.2248535,3.6353149,18,5.2251587,18,7v6h8V7 C26,3.6862793,23.3137207,1,20,1z"})),b.createElement("g",null,b.createElement("path",{d:"M20,16.9423218c-1.4129639,0-2.7589722,0.276062-4,0.7613525c4.0949097,1.6013794,7,5.5764771,7,10.2386475 C23,29.6310425,21.6310425,31,19.9423828,31h8C29.6310425,31,31,29.6310425,31,27.9423218 C31,21.8671875,26.0751343,16.9423218,20,16.9423218z"})),b.createElement("g",null,b.createElement("path",{d:"M26,14h-8c-0.5527344,0-1-0.4477539-1-1V7c0-1.4125977-0.6074219-2.7680664-1.6679688-3.7192383 C15.1210938,3.0913086,15,2.8203125,15,2.5361328c0-0.2836914,0.1210938-0.5546875,0.3330078-0.7441406 C16.6220703,0.6362305,18.2792969,0,20,0c3.859375,0,7,3.1401367,7,7v6C27,13.5522461,26.5527344,14,26,14z M19,12h6V7 c0-2.7568359-2.2431641-5-5-5c-0.8837891,0-1.7451172,0.2363281-2.5029297,0.6772461C18.4628906,3.9033203,19,5.4257813,19,7V12z"})),b.createElement("g",null,b.createElement("path",{d:"M27.9423828,32h-8c-0.5527344,0-1-0.4472656-1-1s0.4472656-1,1-1C21.0771484,30,22,29.0771484,22,27.9423828 c0-4.1425781-2.4980469-7.7958984-6.3642578-9.3066406C15.2519531,18.4853516,15,18.1162109,15,17.7041016 s0.2519531-0.78125,0.6357422-0.9311523C17.0449219,16.2216797,18.5136719,15.9423828,20,15.9423828 c6.6171875,0,12,5.3828125,12,12C32,30.1796875,30.1796875,32,27.9423828,32z M23.4384766,30h4.5039063 C29.0771484,30,30,29.0771484,30,27.9423828c0-5.5136719-4.4863281-10-10-10 c-0.4189453,0-0.8359375,0.0263672-1.2509766,0.0800781C22.0039063,20.2197266,24,23.8857422,24,27.9423828 C24,28.6923828,23.7949219,29.3964844,23.4384766,30z"})))),xh=e=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",...e},b.createElement("g",{id:"shopping_bag","data-name":"shopping bag"},b.createElement("path",{d:"M25.18,10.73a3,3,0,0,0-3-2.73H22A6,6,0,0,0,10,8H9.84a3,3,0,0,0-3,2.73L5.23,26.67a3,3,0,0,0,3,3.33H23.76a3,3,0,0,0,3-3.33Zm-.66,16.93a1,1,0,0,1-.76.34H8.24a1,1,0,0,1-.76-.34,1,1,0,0,1-.26-.79L8.81,10.93a1,1,0,0,1,1-.93H10v2a1,1,0,0,0,2,0V10h5a1,1,0,0,0,0-2H12a4,4,0,0,1,8,0v4a1,1,0,0,0,2,0V10h.16a1,1,0,0,1,1,.93l1.59,15.94A1,1,0,0,1,24.52,27.66Z"}))),HE=d.div`
  max-width: var(--max-width-screen);
  margin: 0 auto;
  padding: var(--spacing-md) var(--spacing-lg);
  font-family: var(--font-primary);
  background-color: var(--background-color);
  border-radius: var(--border-radius-large);
`,L3=d.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--light-grey-color);
  gap: var(--spacing-lg);
  position: relative;
`,WE=d.div`
  position: relative;
`,lg=d.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`,cg=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Oc=d.button`
  background: none;
  border: none;
  font-family: var(--font-secondary);
  font-size: var(--font-size-body-sm);
  ${e=>e.$active?"color: var(--primary-color-dark-5); font-weight:700; background-color:var(--background-primary-transparent-2); border-radius:25px 25px 0 0":"color: var(--disabled-color)"};
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  border-bottom: ${e=>e.$active?"2px solid var(--primary-color)":"none"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:focus {
    outline: none;
  }
`,ug=d.div`
  display: ${e=>e.$active?"block":"none"};
  padding: ${e=>e.$active?"var(--spacing-md) 0":"0"};
`,VE=d.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: solid 1px var(--light-grey-color);
`,GE=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-secondary);
  font-size: var(--font-size-h5);

  span:first-child {
    font-weight: bold;
  }

  span:last-child {
    font-weight: bold;
    color: var(--text-color);
  }
`,qE=d.div`
  font-size: var(--font-size-small);
  font-family: var(--font-secondary);
  color: var(--dark-grey-color);
  line-height: 1.6;
  margin-top: 2rem;
  .support-item {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-xs);
    gap: 0.4rem;
    color: var(--dark-grey-color);

    svg {
      margin-right: var(--spacing-xs);
      color: var(--primary-color-dark-1);
    }
  }
`,YE=d.div`
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--light-grey-color);

  &:last-child {
    border-bottom: none;
  }
`,XE=d.article`
  display: flex;
  position: relative;
  align-items: center;
  column-gap: 1.1rem;
  animation: ${fu} var(--transition-quick);
  ${e=>e.$cardShop?"":"padding-top: .5rem"}
`,QE=d.div`
  position: absolute;
  top: 0.5rem;
  left: 0rem;
`,KE=d.div`
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`,ZE=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-quick);

  &:hover {
    transform: scale(1.08);
  }
`,JE=d.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  min-width: 0;
`,ez=d.div`
  margin-bottom: var(--spacing-md);
`,tz=d.h3`
  font-family: var(--font-primary);
  font-size: var(--font-size-body);
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: var(--primary-color-dark-4);
  }
`,rz=d.div`
  display: flex;
  align-items: center;
  flex: 1;
`,dg=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999; // Set your desired color
  font-size: 18px; // Adjust font size
  padding: 20px; // Add padding if needed
  svg {
    width: 10rem;
    fill: #999;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
  }
`,nz=d.span`
  font-size: var(--font-size-h6);
`,iz=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-primary);
  padding: var(--spacing-md);
  background-color: var(--primary-color-light-9);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-medium);
`,oz=d.h2`
  margin-bottom: var(--spacing-md);
  color: var(--primary-color-dark-4);
  font-size: var(--font-size-h4);
  text-align: center;
`,az=d.div`
  width: 100%;
  max-width: 400px;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  position: relative;
`,fg=d.div`
  padding: var(--spacing-lg);
  animation: ${fu} var(--transition-quick);
`,Pi=d.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  border: 2px solid var(--primary-color-dark-2);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-xs);
  background-color: var(--primary-color-light-8);
`,Ti=d.div`
  margin: 0 var(--spacing-xs);
  color: var(--primary-color-dark-3);
`,Li=d.input`
  width: 100%;
  padding: var(--spacing-sm);
  border: none;
  background: transparent;
  font-size: var(--font-size-body);
  color: var(--text-color);

  &:focus {
    outline: none;
  }
`,sz=d.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`,lz=d.input`
  margin-right: var(--spacing-xs);
  accent-color: var(--primary-color-dark-2);
`,cz=d.a`
  display: block;
  text-align: center;
  margin-top: var(--spacing-md);
  color: var(--primary-color-dark-5);
  cursor: pointer;
  font-size: var(--font-size-small);
  text-decoration: underline;
  transition: color var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }
`,uz=d(ge)`
  margin-top: 2rem;
`,hg=d(Xe)`
  min-width: 15rem;
`,A3=()=>{const[e,t]=b.useState("login");return o.jsxs(iz,{children:[o.jsx(oz,{children:e==="login"?"Login":"Register"}),o.jsxs(az,{children:[o.jsxs(L3,{children:[o.jsx(Oc,{$active:e==="login",onClick:()=>t("login"),children:"Login"}),o.jsx(Oc,{$active:e==="register",onClick:()=>t("register"),children:"Register"})]}),e==="login"&&o.jsxs(fg,{children:[o.jsxs(Pi,{children:[o.jsx(Ti,{children:o.jsx(f0,{})}),o.jsx(Li,{type:"text",placeholder:"Username or Email"})]}),o.jsxs(Pi,{children:[o.jsx(Ti,{children:o.jsx(Ed,{})}),o.jsx(Li,{type:"password",placeholder:"Password"})]}),o.jsxs(sz,{children:[o.jsx(lz,{type:"checkbox",id:"rememberMe"}),o.jsx("label",{htmlFor:"rememberMe",children:"Remember me"})]}),o.jsx(Xe,{size:"small",color:"var(--primary-color-dark-2)",$invert:!0,children:"Login"}),o.jsx(cz,{children:"Forgot your password?"}),o.jsx(pg,{})]},"login"),e==="register"&&o.jsxs(fg,{children:[o.jsxs(Pi,{children:[o.jsx(Ti,{children:o.jsx(f0,{})}),o.jsx(Li,{type:"text",placeholder:"Username"})]}),o.jsxs(Pi,{children:[o.jsx(Ti,{children:o.jsx(sh,{})}),o.jsx(Li,{type:"email",placeholder:"Email"})]}),o.jsxs(Pi,{children:[o.jsx(Ti,{children:o.jsx(Ed,{})}),o.jsx(Li,{type:"password",placeholder:"Password"})]}),o.jsxs(Pi,{children:[o.jsx(Ti,{children:o.jsx(Ed,{})}),o.jsx(Li,{type:"password",placeholder:"Confirm Password"})]}),o.jsx(Xe,{size:"small",color:"var(--primary-color-dark-2)",$invert:!0,children:"Register"}),o.jsx(pg,{})]},"register")]})]})},pg=()=>o.jsxs(uz,{type:"vertical",$justifyContent:"center",$flexGap:".8rem",children:[o.jsx(hg,{size:"mini",color:"var(--primary-color-dark-2)",$invert:!0,children:o.jsxs(ge,{type:"horizontal",$justifyContent:"space-between",$alignItems:"center",$flexGap:".5rem",children:[o.jsx(Wb,{}),"Login with Google"]})}),o.jsx(hg,{size:"mini",color:"var(--primary-color-dark-2)",$invert:!0,children:o.jsxs(ge,{type:"horizontal",$justifyContent:"space-between",$alignItems:"center",$flexGap:".5rem",children:[o.jsx(F5,{}),"Login with Facebook"]})})]}),I3="890px",R3="610px",yh=ve`
  transition: all 0.3s ease-in-out;
`,dz=d.nav`
  position: ${({$isSticky:e})=>e?"fixed":"relative"};
  background-color: var(--primary-color-light-9);
  color: var(--background-color);
  font-family: var(--font-primary);
  box-shadow: var(--shadow-large);
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: ${({isSticky:e})=>e?"0 2px 5px rgba(0, 0, 0, 0.1)":"none"};
  ${yh};
  animation: ${({isSticky:e})=>e?N9:""} 0.3s ease-in-out;
`,fz=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  max-width: var(--max-width-screen);
  margin: auto;
  padding: ${({isSticky:e})=>e?"0.5rem 2rem":"1rem 2rem"};
  ${yh};
`,Ad=d.div`
  display: flex;
  align-items: center;

  &.icon-wrapper {
    @media (max-width: ${R3}) {
      display: none;
    }
  }
`,hz=d.div`
  display: none;
  @media (max-width: ${R3}) {
    display: block;
  }
`,pz=d.div`
  display: flex;
  gap: 0.5rem;
`,mz=d.div`
  display: flex;
  align-items: center;

  img {
    height: 2.5rem;
    animation: ${({$isSticky:e})=>e?O9:""} 0.3s ease-in-out;
    ${yh};
    @media (max-width: 600px) {
      height: 2rem;
    }
  }
  a {
    display: flex;
  }
`,ml=d.button`
  position: relative;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem; /* Slightly smaller font size */

  &:active {
    transform: scale(0.9); /* Smaller scale on active */
  }
  svg {
    width: 1.8rem;
    transition: all var(--transition-quick);

    &:hover {
      fill: var(--primary-color-dark-1);
    }
  }
`,Dc=d.span`
  position: absolute;
  top: -0.2rem;
  right: -0.3rem;
  background-color: var(--accent-color);
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  font-size: 0.7rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,gz=d.div`
  display: block;
  @media (max-width: ${I3}) {
    display: none;
  }
`,vz=d.div`
  display: none;

  @media (max-width: ${I3}) {
    display: block;
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: var(--accent-color);
  }
`;function xz(e){return X({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(e)}function yz(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(e)}function wz(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"},child:[]}]})(e)}const bz=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${e=>e.$customStyles.backgroundColor||"var(--primary-color-dark-3)"};
  color: ${e=>e.$customStyles.color||"#fff"};
  border: ${e=>e.$customStyles.border||"none"};
  border-radius: ${e=>e.$customStyles.borderRadius||"var(--border-radius-medium)"};
  cursor: pointer;
  font-size: ${e=>e.size||"var(--font-size-button)"};
  transition: all var(--transition-quick);
  width: 100%;

  svg {
    transition: transform var(--transition-quick);
    ${e=>e.$isactive&&`
      transform: rotate(-180deg);
    `}
  }
`,jz=d.ul`
  position: absolute;
  top: 100%;
  ${e=>e.$position==="right"?"right: 0;":"left: 0;"}
  background: white;
  border: 1px solid var(--primary-color-dark-4);
  box-shadow: var(--shadow-medium);
  z-index: 1000;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: auto;
  max-width: 100vw;
  margin-top: 0.2rem;
`,kz=d.li`
  padding: 0 var(--spacing-md);
  height: 55px;
  cursor: pointer;
  border-radius: var(--border-radius-small);
  display: flex;
  align-items: center;
  background: #fff;
  transition: background var(--transition-quick);
  white-space: nowrap;

  &:hover {
    background: var(--light-grey-color);
  }
`,Sz=d.div`
  position: relative;
  width: 100%;
  max-width: ${e=>e.width||"100%"};
`,M3=(e,t,r)=>{b.useEffect(()=>{const n=i=>{e.current&&!e.current.contains(i.target)&&t(i)};return r?document.addEventListener("mousedown",n):document.removeEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[r,t,e])},_s=b.createContext(),St=({children:e,width:t,size:r,customStyles:n={},onOptionSelect:i,position:a="left"})=>{const[s,l]=b.useState(!1),[c,u]=b.useState(null),f=()=>l(!s),h=b.useRef(null);M3(h,f,s);const m=Pe(w=>w.products.activeFilters);return b.useEffect(()=>{u(null)},[m]),o.jsx(_s.Provider,{value:{isActive:s,selectedOption:c,setSelectedOption:u,toggleMenu:f,size:r,customStyles:n,onOptionSelect:i,position:a},children:o.jsx(Sz,{width:t,ref:h,children:e})})},Cz=({children:e})=>{const{toggleMenu:t,isActive:r,size:n,customStyles:i}=b.useContext(_s);return o.jsxs(bz,{onClick:t,$isactive:r,size:n,$customStyles:i,children:[e,o.jsx(yz,{})]})},Ez=({data:e,render:t})=>{const{isActive:r,position:n}=b.useContext(_s);return r?o.jsx(jz,{$position:n,children:e.map(t)}):null},zz=({children:e,value:t})=>{const{setSelectedOption:r,toggleMenu:n,onOptionSelect:i}=b.useContext(_s),a=()=>{r(t),n(),i&&i(t)};return o.jsx(kz,{onClick:a,children:e})},_z=()=>{const{selectedOption:e}=b.useContext(_s);return o.jsx("span",{children:e||"Select an option"})};St.Button=Cz;St.List=Ez;St.Item=zz;St.SelectedOption=_z;const mg=["All categories","Skincare","Haircare","Makeup","Wellness"],$z=({isOpen:e=!0,onClose:t})=>{const[r,n]=b.useState(""),[i,a]=b.useState(mg[0]),s=b.useRef(null),l=Cr(),c=f=>{n(f.target.value)},u=f=>{f.preventDefault();const h=`/search/${encodeURIComponent(i.toLowerCase())}/${encodeURIComponent(r.toLowerCase())}`;r&&(l(h),t(f),n(""))};return o.jsxs(o.Fragment,{children:[o.jsxs(Pz,{className:e?"open":"",ref:s,children:[o.jsx(Tz,{onClick:t,children:o.jsx(e3,{"aria-label":"Remove item"})}),o.jsx(Lz,{onSubmit:u,children:o.jsxs(Az,{children:[o.jsxs(St,{size:"var(--font-size-h5)",customStyles:{backgroundColor:"var(--background-color)",color:"var(--text-color)",borderRadius:"var(--border-radius-medium)"},onOptionSelect:a,position:"left",children:[o.jsx(St.Button,{children:o.jsx(St.SelectedOption,{})}),o.jsx(St.List,{data:mg,render:(f,h)=>o.jsx(St.Item,{value:f,children:f},h)})]}),o.jsx(Iz,{children:"|"}),o.jsxs(Rz,{children:[o.jsx(Mz,{type:"text",value:r,onChange:c,placeholder:"Search Products...",required:!0}),o.jsx(Nz,{type:"submit",children:o.jsx(xz,{color:"var(--text-color)",size:"1.6rem",style:{marginRight:".625rem"}})})]})]})})]}),e&&o.jsx(Oz,{onClick:t})]})},Pz=d.div`
  position: fixed;
  top: -20rem;
  left: 0;
  width: 100%;
  height: 20rem;
  background: #fff;
  color: var(--text-color);
  z-index: var(--zindex-modal);
  transition: top var(--transition-quick);

  &.open {
    top: 0;
  }
`,Tz=d.div`
  position: absolute;
  right: 30px;
  top: 30px;
  background: none;
  border: none;
  cursor: pointer;
`,Lz=d.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`,Az=d.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--border-radius-large);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 550px) {
    flex-direction: column;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--border-radius-medium);
  }
`,Iz=d.span`
  color: var(--text-color);

  @media (max-width: 550px) {
    display: none;
  }
`,Rz=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-large);

  @media (max-width: 550px) {
    border-radius: var(--border-radius-medium);
    margin-top: var(--spacing-sm);
    padding: var(--spacing-xs) var(--spacing-sm);
  }
`,Mz=d.input`
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-h6);
  max-width: 200px;
  background-color: transparent;
  color: var(--text-color);
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 550px) {
    max-width: 100%;
    font-size: var(--font-size-small);
  }
`,Nz=d.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: transform 0.4s ease; // Add this line to control the transition effect

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`,Oz=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--zindex-dropdown);
`,gg=({cardShop:e=!0,product:t,closeSidebar:r})=>{const n=zr();if(!t)return;function i(a){n(e?h3(t.id):BC(a))}return o.jsx(YE,{children:o.jsxs(XE,{$cardShop:e,children:[o.jsx(QE,{children:o.jsx(e3,{"aria-label":"Remove item",onClick:()=>i(t.id)})}),o.jsx(KE,{children:o.jsx(ZE,{src:`/shop/${t.category}/${t.image}`,alt:t.title})}),o.jsxs(JE,{children:[o.jsxs(ez,{children:[o.jsx(re,{to:"/shop/"+t.slug,children:o.jsx(tz,{onClick:()=>r(),children:t.title})}),e?o.jsxs(nz,{children:["$",parseFloat(t.unitPrice).toFixed(2)]}):o.jsx(Es,{product:t})]}),e&&o.jsx(rz,{children:o.jsx(Au,{color:"var(--primary-color-dark-3)",size:"small",productId:t.id})})]})]})})},Dz=e=>b.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120 120",...e},b.createElement("title",null,"_"),b.createElement("g",null,b.createElement("rect",{x:90.32,y:14.84,width:3.87,height:90.32}),b.createElement("path",{d:"M16.77,105.16H12.9V14.84A14.86,14.86,0,0,1,27.74,0h77.42V3.87H27.74a11,11,0,0,0-11,11Z"}),b.createElement("path",{d:"M79.36,120H14.84A14.86,14.86,0,0,1,0,105.16v-1.93H68.39v1.93a11,11,0,1,0,21.93,0h3.87A14.85,14.85,0,0,1,79.36,120ZM4,107.1a11,11,0,0,0,10.8,9H69.37a14.83,14.83,0,0,1-4.73-9Z"}),b.createElement("path",{d:"M120,68.39H92.26V64.52h23.87V14.84a11,11,0,0,0-21.94,0H90.32a14.84,14.84,0,0,1,29.68,0Z"}),b.createElement("rect",{x:40.64,y:19.36,width:38.71,height:3.87}),b.createElement("rect",{x:40.64,y:38.71,width:38.71,height:3.87}),b.createElement("rect",{x:40.64,y:58.07,width:38.71,height:3.87}),b.createElement("rect",{x:40.64,y:77.42,width:38.71,height:3.87}),b.createElement("rect",{x:27.74,y:19.36,width:6.45,height:3.87}),b.createElement("rect",{x:27.74,y:38.71,width:6.45,height:3.87}),b.createElement("rect",{x:27.74,y:58.07,width:6.45,height:3.87}),b.createElement("rect",{x:27.74,y:77.42,width:6.45,height:3.87}))),Fz=e=>{const[t,r]=b.useState(e);return{activeTab:t,switchTab:i=>r(i)}},Bz="350px",Uz=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  perspective: 1000px;
`,Hz=d.div`
  overflow-y: auto;
  position: fixed;
  width: ${Bz};
  top: 0;
  ${e=>e.$position==="left"?"left: 0;":"right: 0;"}
  height: 100%;
  background-color: white;
  box-shadow: ${e=>e.$position==="left"?"2px 0 5px rgba(0, 0, 0, 0.3)":"-2px 0 5px rgba(0, 0, 0, 0.3)"};
  transform: ${e=>e.$isClosing?e.$position==="left"?"translateX(-100%)":"translateX(100%)":"translateX(0)"};
  animation: ${e=>e.$isClosing?e5:D1} 0.5s
    forwards;
  transform-origin: ${e=>e.$position==="left"?"left center":"right center"};
  z-index: 1000;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  @media (max-width: 420px) {
    width: calc(100% - 52px);
  }
`,Wz=d.button`
  position: absolute;
  top: -0px;
  ${e=>e.$position==="left"?"left: 350px;":"right: 350px;"}
  background: none;
  border: none;
  cursor: pointer;
  background-color: black;
  padding: 0;
  color: white;
  transition: transform 0.5s ease;
  z-index: 1;
  animation: ${e=>e.$isClosing?Y4:D1} 0.5s forwards;
  @media (max-width: 420px) {
    ${e=>e.$position==="left"?"left: calc(100% - 52px);":"right: calc(100% - 52px);"}
  }
  .inner {
    display: block;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      width: 25px;
      background-color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      transition: ease-out 0.2s all;
    }
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 25px;
      background-color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      transition: ease-out 0.2s all;
    }
  }
  .label {
    color: #fff;
    opacity: 0;
    transition: all 0.2s ease-out;
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
  }
  &:hover,
  &:focus {
    .inner {
      &:before {
        transform: translate(-50%, 0%) rotate(0);
        top: 25%;
      }
      &:after {
        transform: translate(-50%, 0%) rotate(0);
        top: 72%;
      }
    }
    .label {
      opacity: 1;
    }
  }
`,$s=b.createContext(),Vz=({children:e})=>{const[t,r]=b.useState(""),[n,i]=b.useState(!1),[a,s]=b.useState("left"),l=()=>{i(!0),setTimeout(()=>{r(""),i(!1)},500)},c=(u,f="left")=>{s(f),r(u),i(!1)};return o.jsx($s.Provider,{value:{isOpen:t,openSidebar:c,closeSidebar:l,isClosing:n,position:a},children:e})},Gz=({children:e,opens:t,position:r})=>{const{openSidebar:n}=b.useContext($s);return b.cloneElement(e,{onClick:()=>n(t,r)})},qz=({children:e,name:t})=>{const{isOpen:r,closeSidebar:n,isClosing:i,position:a}=b.useContext($s),s=c=>{c.target===c.currentTarget&&n()};return t===r||i?ds.createPortal(o.jsxs(Uz,{onClick:s,children:[o.jsx(Wz,{onClick:n,$position:a,$isClosing:i,children:o.jsx("span",{className:"inner",children:o.jsx("span",{className:"label",children:"Close"})})}),o.jsx(Hz,{$isClosing:i,$position:a,children:o.jsx("div",{children:e})})]}),document.body):null},me={Provider:Vz,Trigger:Gz,Content:qz},Fc=({choice:e})=>{const t=Pe(f=>f.shoppingCart.cart),r=Pe(m3),n=Pe(p3),i=Pe(f=>f.wishList.likes),a=Pe(f=>f.products.products),{wishList:s}=w3(i,a),{activeTab:l,switchTab:c}=Fz(e),{closeSidebar:u}=b.useContext($s);return o.jsxs(HE,{children:[o.jsxs(L3,{children:[o.jsxs(cg,{children:[o.jsx(lg,{children:o.jsx(Dc,{children:n})}),o.jsx(Oc,{$active:l==="cart",onClick:()=>c("cart"),children:"Cart"})]}),o.jsxs(cg,{children:[o.jsx(lg,{children:o.jsx(Dc,{children:s.length})}),o.jsx(Oc,{$active:l==="wishlist",onClick:()=>c("wishlist"),children:"Wishlist"})]})]}),o.jsx(ug,{$active:l==="cart",children:t.length>0?o.jsxs(o.Fragment,{children:[o.jsx(WE,{children:t.map(f=>o.jsx(gg,{product:f,closeSidebar:u},`${f.id}`))}),o.jsxs(VE,{children:[o.jsxs(GE,{children:[o.jsx("span",{children:"Subtotal:"}),o.jsx("span",{children:ql(r)})]}),o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"flex-start",$flexGap:"1.5rem",children:[o.jsx(re,{to:"/cart-summary",children:o.jsx(Xe,{size:"mini",$invert:!0,color:"var(--primary-color-dark-3)",onClick:()=>u(),children:"View Cart"})}),o.jsx(re,{to:"/cart-summary",children:o.jsx(Xe,{size:"mini",color:"var(--primary-color-dark-3)",onClick:()=>u(),children:"Check Out"})})]}),o.jsxs(qE,{children:[o.jsxs("div",{className:"support-item",children:[o.jsx(V5,{}),o.jsx("span",{children:"Phone: +00 654 321 9874"})]}),o.jsxs("div",{className:"support-item",children:[o.jsx(Qb,{}),o.jsx("span",{children:"123 Main Street, Anytown, USA. Zip: 12345"})]})]})]})]}):o.jsxs(dg,{children:[o.jsx(xh,{}),o.jsx("p",{children:"No items in your Shopping Cart"})]})}),o.jsx(ug,{$active:l==="wishlist",children:s.length>0?s.map(f=>o.jsx(gg,{cardShop:!1,product:f,closeSidebar:u},`${f.id}`)):o.jsxs(dg,{children:[o.jsx(Dz,{}),o.jsx("p",{children:"No items in your wishlist"})]})})]})},Yz=d.div`
  position: relative;
  cursor: pointer;
  perspective: 1000px;
`,Xz=d.li`
  position: relative;
`,Qz=d.div`
  z-index: 50;
  position: absolute;
  top: 100%;
  left: 0;
  width: 200%;
  height: 220px;
`,Kz=d.div`
  z-index: 150;
  transform-style: preserve-3d;
  position: absolute;
  top: 220%;
  left: 0;
  display: flex;
  background: #fff;
  border-top: 4px solid var(--primary-color);
  padding: 2rem 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: ${({$minWidth:e})=>e||"200px"};
  width: 100%;
  justify-content: space-around;
  border-radius: 0 0 15px 15px;
  animation: ${D1} 0.3s ease-in-out;

  &.exit {
    animation: ${e5} 0.3s ease-in-out;
  }
`,N3=b.createContext(),Id=({children:e,label:t})=>{const[r,n]=b.useState(!1);return o.jsxs(Yz,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[o.jsx(Xz,{children:t}),o.jsxs(N3.Provider,{value:{open:r,setOpen:n},children:[r&&o.jsx(Qz,{}),e]})]})},Rd=({children:e,minWidth:t})=>{const{open:r,setOpen:n}=b.useContext(N3),[i,a]=b.useState(r),[s,l]=b.useState(!1);if(b.useEffect(()=>{if(r)a(!0),l(!1);else if(!r&&i){l(!0);const f=setTimeout(()=>{a(!1),l(!1)},300);return()=>clearTimeout(f)}},[r,i]),!i&&!s)return null;const c=()=>{n(!1)},u=ce.Children.map(e,f=>ce.cloneElement(f,{onClick:c}));return o.jsx(Kz,{$minWidth:t,className:s?"exit":"enter",children:u})},Zz=Q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`,Jz=d.nav`
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,e_=d.ul`
  list-style: none;
  display: flex;
  gap: var(--spacing-lg);
`,t_=d.li`
  position: relative;
`,ia=d(re)`
  color: var(--text-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  display: flex;
  align-items: center;
  text-decoration: none;
  transition:
    color var(--transition-quick),
    transform var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }
`,Md=d.div`
  margin-left: var(--spacing-xs);
  display: flex;
  align-items: center;
  transition: transform var(--transition-quick);
  will-change: transform;

  ${t_}:hover & {
    animation: ${Zz} var(--transition-quick) ease-in-out;
  }
`,oa=d.div`
  margin-right: var(--spacing-lg);
  display: flex;
  flex-direction: column; /* Ensures items stack vertically */
  width: 100%; /* Ensures the container takes full width */
  &:last-child {
    margin-right: 0;
  }
`,gt=d(re)`
  display: inline-block;
  padding: 0.2rem;
  margin: var(--spacing-sm) 0;
  color: var(--text-color); /* Default text color */
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  text-decoration: none;
  position: relative;
  background: linear-gradient(
    to left,
    var(--text-color) 50%,
    var(--primary-color) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  background-clip: text; /* Clip the background to the text */
  -webkit-background-clip: text; /* For WebKit browsers */
  transition:
    background-position 0.8s ease-in-out,
    color 0.8s ease-in-out;

  &:hover {
    background-position: 0%;
    color: var(--primary-color-dark-1); /* Change text color on hover */
    text-shadow: 0 1px 2px var(--shadow-color);
  }
`,r_=()=>o.jsx(Jz,{"aria-label":"Main navigation",children:o.jsxs(e_,{children:[o.jsx(ia,{to:"/",children:"Home"}),o.jsx(Id,{label:o.jsxs(ia,{to:"#",children:["Shop",o.jsx(Md,{children:o.jsx(Gl,{})})]}),children:o.jsxs(Rd,{minWidth:"30rem",children:[o.jsxs(oa,{children:[o.jsx(gt,{to:"/all-products",children:"Shop Standard"}),o.jsx(gt,{to:"/list-shop",children:"Shop List"}),o.jsx(gt,{to:"/cart-summary",children:"Shopping cart"})]}),o.jsxs(oa,{children:[o.jsx(gt,{to:"/shop-left-sidebar",children:"Left Sidebar"}),o.jsx(gt,{to:"/shop-right-sidebar",children:"Right Sidebar"}),o.jsx(gt,{to:"/full-width",children:"Full Width"})]}),o.jsxs(oa,{children:[o.jsx(gt,{to:"/breadcrumb-1",children:"Breadcrumb 1"}),o.jsx(gt,{to:"/breadcrumb-2",children:"Breadcrumb 2"})]})]})}),o.jsx(Id,{minWidth:"45rem",label:o.jsxs(ia,{to:"#",children:["Page",o.jsx(Md,{children:o.jsx(Gl,{})})]}),children:o.jsx(Rd,{minWidth:"8rem",children:o.jsxs(oa,{children:[o.jsx(gt,{to:"about-us",children:"About Us"}),o.jsx(gt,{to:"faq",children:"FAQ"}),o.jsx(gt,{to:"/not-found/404",children:"Error 404"})]})})}),o.jsx(Id,{minWidth:"45rem",label:o.jsxs(ia,{to:"#",children:["Blog",o.jsx(Md,{children:o.jsx(Gl,{})})]}),children:o.jsx(Rd,{minWidth:"12rem",children:o.jsxs(oa,{children:[o.jsx(gt,{to:"/blog-grid-layout",children:"Grid Layout"}),o.jsx(gt,{to:"/blog-masonry",children:"Masonry Layout"}),o.jsx(gt,{to:"/blog-list",children:"Blog List"}),o.jsx(gt,{to:"/blog-simple",children:"Blog Simple"})]})})}),o.jsx(ia,{to:"/contact",children:"Contact"})]})});function n_(e){return X({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(e)}const i_=d.div`
  border: 1px solid var(--primary-color);
  overflow: hidden;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 8px;
  transition: border-color 0.3s ease-in-out;
`,o_=d.div`
  cursor: pointer;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  color: #333333;
  font-weight: bold;
  font-size: var(--font-size-h5);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:focus-visible {
    outline: 2px solid #000000;
  }
`,a_=d.div`
  max-height: ${({$isOpen:e})=>e?"800px":"0"};
  padding: ${({$isOpen:e})=>e?"16px 24px":"0 24px"};
  transition:
    max-height 0.4s ease-in-out,
    padding 0.4s ease-in-out;
  border-top: ${({$isOpen:e})=>e?"1px solid #dddddd":"0"};
  background-color: transparent;
  font-size: var(--font-size-small);
  line-height: 1.6;
`,s_=d(Gl)`
  transition: transform 0.3s ease-in-out;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  color: #666666;
`,O3=({children:e,allowMultipleExpanded:t=!1,listToExpand:r=["0","1","2","3"]})=>{const[n,i]=b.useState(r),a=s=>{i(t?l=>l.includes(s)?l.filter(c=>c!==s):[...l,s]:l=>l.includes(s)?[]:[s])};return o.jsx("div",{children:ce.Children.map(e,s=>ce.cloneElement(s,{isOpen:n.includes(s.props.uuid),onToggle:()=>a(s.props.uuid)}))})},va=({isOpen:e,onToggle:t,heading:r,children:n})=>o.jsxs(i_,{children:[o.jsxs(o_,{onClick:t,tabIndex:"0",children:[r,o.jsx(s_,{$isOpen:e})]}),o.jsx(a_,{$isOpen:e,children:n})]}),l_=d.div`
  padding: var(--spacing-lg);
  background-color: var(--background-color);
`,c_=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--primary-color);
  cursor: pointer;
`,vg=d(re)`
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--font-secondary);
  font-size: var(--font-size-h5);
  display: flex;
  align-items: center;
  gap: 0.8rem; /* Proper spacing between icon and text */
  margin-bottom: 0.5rem;
`,u_=[{title:"HOME",link:"/",icon:o.jsx(na,{})},{title:"SHOP",link:"#",icon:o.jsx(na,{}),items:[{label:"Shop Standard",link:"/all-products"},{label:"Shop List",link:"/list-shop"},{label:"Shopping Cart",link:"/cart-summary"},{label:"Left Sidebar",link:"/shop-left-sidebar"},{label:"Right Sidebar",link:"/shop-right-sidebar"},{label:"Full Width",link:"/full-width"}]},{title:"PAGES",link:"#",icon:o.jsx(na,{}),items:[{label:"About Us",link:"/about-us"},{label:"FAQ",link:"/faq"},{label:"Error 404",link:"/not-found/404"}]},{title:"BLOG",link:"#",icon:o.jsx(na,{}),items:[{label:"Grid Layout",link:"/blog-grid-layout"},{label:"Masonry Layout",link:"/blog-masonry"},{label:"Blog List",link:"/blog-list"},{label:"Blog Simple",link:"/blog-simple"}]},{title:"CONTACT",link:"/contact",icon:o.jsx(na,{})}],d_=()=>o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"mySidebarMenu",position:"right",children:o.jsx(c_,{children:o.jsx(n_,{})})}),o.jsx(me.Content,{name:"mySidebarMenu",children:o.jsx(f_,{})})]}),f_=()=>{const{closeSidebar:e}=b.useContext($s);return o.jsx(l_,{children:o.jsx(O3,{allowMultipleExpanded:!1,listToExpand:["0"],children:u_.map((t,r)=>o.jsx(va,{uuid:String(r),heading:t.title,children:t.items?t.items.map((n,i)=>o.jsx("div",{children:o.jsxs(vg,{to:n.link,onClick:()=>e(),children:[t.icon&&t.icon,n.label]})},i)):o.jsx("div",{children:o.jsxs(vg,{to:t.link,onClick:n=>{e(),n.stopPropagation()},children:[t.icon&&t.icon,t.title]})})},r))})})},h_=d.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.7)
  );
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  padding: var(--spacing-sm) 0;
  box-shadow: var(--shadow-large);
  z-index: var(--zindex-dropdown);
`,gl=d.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition:
    transform var(--transition-quick),
    color var(--transition-quick),
    box-shadow var(--transition-quick);

  svg {
    width: 32px;
    height: 32px;
    margin-bottom: var(--spacing-xs);
  }

  & > span {
    font-family: var(--font-secondary);
    font-size: var(--font-size-body);
    color: black;
    font-weight: 600;
  }
`,xg=d.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--accent-color);
  color: white !important;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1;
  min-width: 20px;
  text-align: center;
  box-sizing: border-box;
`,p_=({wishList:e,totalQty:t,handleSearchToggle:r})=>o.jsxs(h_,{children:[o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"mySidebar",position:"right",children:o.jsxs(gl,{"aria-label":"User profile",children:[o.jsx(T3,{}),o.jsx("span",{children:"Profile"})]})}),o.jsx(me.Content,{name:"mySidebar",children:o.jsx(A3,{})})]}),o.jsxs(gl,{"aria-label":"Search",onClick:r,children:[o.jsx($3,{}),o.jsx("span",{children:"Search"})]}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"myWishlistSidebar",position:"right",children:o.jsxs(gl,{"aria-label":"Wishlist",children:[o.jsx(P3,{}),e.length>0&&o.jsx(xg,{children:e.length}),o.jsx("span",{children:"Wishlist"})]})}),o.jsx(me.Content,{name:"myWishlistSidebar",children:o.jsx(Fc,{choice:"wishlist"})})]}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"myCartShopSidebar",position:"right",children:o.jsxs(gl,{"aria-label":"Cart",children:[o.jsx(xh,{}),t>0&&o.jsx(xg,{children:t}),o.jsx("span",{children:"Cart"})]})}),o.jsx(me.Content,{name:"myCartShopSidebar",children:o.jsx(Fc,{choice:"cart"})})]})]}),m_=()=>{const e=Pe(p3),t=Pe(u=>u.wishList.likes),r=Pe(u=>u.products.products),{wishList:n}=w3(t,r),[i,a]=b.useState(!1),[s,l]=b.useState(!1);b.useEffect(()=>{const u=()=>{a(window.scrollY>0)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[]);const c=u=>{u.preventDefault(),l(!s)};return o.jsxs(dz,{$isSticky:i,"aria-label":"Main navigation",children:[o.jsxs(fz,{children:[o.jsx(Ad,{children:o.jsx(mz,{$isSticky:i,children:o.jsx(re,{to:"/",children:o.jsx("img",{src:_3,alt:"Pure Essence Logo"})})})}),o.jsxs(Ad,{children:[o.jsx(gz,{children:o.jsx(r_,{})}),o.jsx(vz,{children:o.jsx(d_,{})})]}),o.jsx(Ad,{className:"icon-wrapper",children:o.jsxs(pz,{children:[o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"mySidebar",position:"right",children:o.jsx(ml,{"aria-label":"User profile",children:o.jsx(T3,{})})}),o.jsx(me.Content,{name:"mySidebar",children:o.jsx(A3,{})})]}),o.jsx(ml,{"aria-label":"Search",onClick:c,children:o.jsx($3,{})}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"mySidebar",position:"right",children:o.jsxs(ml,{"aria-label":"Wishlist",children:[o.jsx(P3,{}),o.jsx(Dc,{children:n.length})]})}),o.jsx(me.Content,{name:"mySidebar",children:o.jsx(Fc,{choice:"wishlist"})})]}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"myCartShopSidebar",position:"right",children:o.jsxs(ml,{"aria-label":"Cart",children:[o.jsx(xh,{}),o.jsx(Dc,{children:e})]})}),o.jsx(me.Content,{name:"myCartShopSidebar",children:o.jsx(Fc,{choice:"cart"})})]})]})})]}),o.jsx($z,{isOpen:s,onClose:c}),o.jsx(hz,{children:o.jsx(p_,{wishList:n,totalQty:e,handleSearchToggle:c})})]})},g_=Q`
  0%, 80% {
    transform: rotateY(360deg);
  }
`,v_=Q`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,x_=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    45deg,
    var(--primary-color-light-5),
    var(--secondary-color),
    var(--primary-color-dark-1)
  );
  background-size: 400% 400%;
  animation: ${v_} 15s ease infinite;
`,y_=d.div`
  display: flex;
  position: relative;

  span {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    font-family: var(--font-primary);
    color: var(--background-color);
    text-transform: uppercase;
    animation: ${g_} 2s infinite;
    animation-delay: calc(0.2s * var(--i));
  }
`,w_=()=>o.jsx(x_,{children:o.jsxs(y_,{className:"waviy",children:[o.jsx("span",{style:{"--i":1},children:"L"}),o.jsx("span",{style:{"--i":2},children:"o"}),o.jsx("span",{style:{"--i":3},children:"a"}),o.jsx("span",{style:{"--i":4},children:"d"}),o.jsx("span",{style:{"--i":5},children:"i"}),o.jsx("span",{style:{"--i":6},children:"n"}),o.jsx("span",{style:{"--i":7},children:"g"}),o.jsx("span",{style:{"--i":8},children:"."})]})}),b_=()=>{const e=Pe(i=>i.products.loading),[t,r]=b.useState(!0),n=zr();return b.useEffect(()=>{n(jE()),n(SE()),(()=>{const a=document.querySelectorAll("img");let s=0;a.forEach(l=>{l.complete?s+=1:l.addEventListener("load",()=>{s+=1,s===a.length&&r(!1)})}),s===a.length&&r(!1)})()},[n]),o.jsx(o.Fragment,{children:e||t?o.jsx(w_,{}):o.jsxs(o.Fragment,{children:[o.jsx(m_,{}),o.jsx(Y8,{}),o.jsx(UE,{}),o.jsx(v7,{})]})})};function Ai(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(e)}function j_(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"},child:[]}]})(e)}function k_(e){return X({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"},child:[]}]})(e)}function S_(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM384 160c0 35.3-28.7 64-64 64c-15.4 0-29.5-5.4-40.6-14.5L194.1 256l85.3 46.5c11-9.1 25.2-14.5 40.6-14.5c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-2.5 .1-4.9 .4-7.3L174.5 300c-11.7 12.3-28.2 20-46.5 20c-35.3 0-64-28.7-64-64s28.7-64 64-64c18.3 0 34.8 7.7 46.5 20l81.9-44.7c-.3-2.4-.4-4.9-.4-7.3c0-35.3 28.7-64 64-64s64 28.7 64 64z"},child:[]}]})(e)}const wh="610px",C_=d.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  /* max-height: 15rem; */
  overflow: hidden;
  @media (max-width: ${wh}) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 30rem;
    margin: auto;
  }
`,E_=d.div`
  position: relative;
  flex: 0.4;
  height: auto;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  margin-right: var(--spacing-lg);
  max-width: 18.75rem;
  max-height: 18.75rem;
  @media (max-width: ${wh}) {
    flex: 1;
    width: 100%; /* Ensure wrapper takes up full width */
    max-width: 100%; /* Remove any max-width constraints */
    margin-right: 0; /* Reset margins */
    margin: 0 auto 1rem auto; /* Center the wrapper and add bottom margin */
    position: relative; /* Ensure the position doesn't conflict with inner content */
  }
`,z_=d.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: ${wh}) {
    width: 100%;
    align-items: flex-start;
  }
`,__=d.img`
  position: absolute;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: none;
  opacity: ${({$isHovered:e})=>e?0:1};
  transform: ${({$isHovered:e})=>e?"translateX(-100%)":"translateX(0)"};
  ${({$isHovered:e})=>e&&ve`
      animation: ${K4} 0.6s forwards;
    `}
  ${({$isExiting:e})=>e&&ve`
      animation: ${Z4} 0.6s forwards;
    `}
`,$_=d.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: none;
  opacity: ${({$isHovered:e})=>e?1:0};
  transform: ${({$isHovered:e})=>e?"translateX(0)":"translateX(100%)"};
  ${({$isHovered:e})=>e&&ve`
      animation: ${fu} 0.6s forwards;
    `}
  ${({$isExiting:e})=>e&&ve`
      animation: ${J4} 0.6s forwards;
    `}
`,P_=d.p`
  font-size: var(--font-size-small);
  color: var(--dark-grey-color);
  margin: 0 0 var(--spacing-md) 0;
`,T_=d.p`
  font-size: var(--font-size-small);
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
`,L_=d.div`
  display: flex;
  align-items: baseline;
  margin-bottom: var(--spacing-md);
`,yg=d.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`,A_=d.div`
  display: flex;
  align-items: center;
`,I_=d(ge)`
  width: 100%;
`,R_=({product:e})=>{const{hovered:t,exiting:r,handleMouseEnter:n,handleMouseLeave:i}=j3();return o.jsxs(C_,{onMouseEnter:()=>n(e.id),onMouseLeave:()=>i(e.id),children:[o.jsx(E_,{children:o.jsxs(re,{to:"/shop/"+e.slug,children:[o.jsx(__,{src:`/shop/${e.category}/${e.image}`,alt:e.title,$isHovered:t===e.id,$isExiting:r===e.id}),o.jsx($_,{src:`/shop/${e.category}/${e.thumbnails[0]}`,alt:`${e.title} thumbnail`,$isHovered:t===e.id,$isExiting:r===e.id})]})}),o.jsxs(z_,{children:[o.jsx(A_,{children:o.jsxs(v3,{children:[o.jsx(x3,{children:_u(e.rating.rate)}),o.jsxs(y3,{children:["(",e.rating.count," customer reviews)"]})]})}),o.jsx(re,{to:"/shop/"+e.slug,children:o.jsx(oe,{as:"h5",children:e.title})}),o.jsxs(P_,{children:[e.category,", ",e.subcategory]}),o.jsx(T_,{children:zs(e.description,120)}),o.jsxs(I_,{type:"horizontal",$justifyContent:"space-between",$alignItems:"center",$flexGap:".5rem",children:[o.jsx(L_,{children:o.jsx(Es,{product:e,$fontSize:"var(--font-size-h6)"})}),o.jsxs(ge,{type:"horizontal",$justifyContent:"flex-start",$alignItems:"center",$flexGap:".5rem",children:[o.jsx(yg,{children:o.jsxs(ar,{children:[o.jsx(ar.Trigger,{opens:"product-preview",children:o.jsx(Xe,{size:"extra-small",$invert:!0,color:"var(--primary-color-dark-1)",children:o.jsx(j_,{})})}),o.jsx(ar.Content,{name:"product-preview",children:o.jsx(j0,{product:e})})]})}),o.jsx(yg,{children:o.jsx(gh,{product:e,WrapperComponent:o.jsx(Xe,{size:"extra-small",$invert:!0,color:"var(--primary-color-dark-1)"})})})]})]})]})]})},D3=e=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",strokeWidth:3,stroke:"currentColor",fill:"none",...e},b.createElement("line",{x1:50.69,y1:32,x2:56.32,y2:32}),b.createElement("line",{x1:7.68,y1:32,x2:38.69,y2:32}),b.createElement("line",{x1:26.54,y1:15.97,x2:56.32,y2:15.97}),b.createElement("line",{x1:7.68,y1:15.97,x2:14.56,y2:15.97}),b.createElement("line",{x1:35,y1:48.03,x2:56.32,y2:48.03}),b.createElement("line",{x1:7.68,y1:48.03,x2:23,y2:48.03}),b.createElement("circle",{cx:20.55,cy:15.66,r:6}),b.createElement("circle",{cx:44.69,cy:32,r:6}),b.createElement("circle",{cx:29,cy:48.03,r:6})),M_=d.main`
  width: 100%;
  padding: 20px;
`,N_=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--background-primary-transparent);
  border-bottom: 2px solid var(--primary-color-dark-4);
  margin-bottom: var(--spacing-md);
  box-shadow: var(--shadow-medium);
  border-radius: 15px;
  svg {
    width: var(--font-size-h4); /* Increased icon size */
    height: var(--font-size-h4); /* Increased icon size */
  }
  .icon {
    margin: 0 var(--spacing-sm);
    cursor: pointer;
    color: var(--primary-color-dark-4);
    transition:
      color var(--transition-normal),
      background-color var(--transition-normal),
      transform var(--transition-normal),
      box-shadow var(--transition-normal);

    padding: var(--spacing-xs);
    border-radius: var(--border-radius-medium);
    background-color: var(--background-color);

    &:hover {
      color: var(--background-color);
      color: var(--primary-color-dark-4);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      transform: scale(1.1);
    }

    &.active {
      color: var(--background-color);
      background-color: var(--primary-color-dark-2);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      transform: scale(1.2);
    }
  }
  @media (max-width: 1080px) {
    border-radius: 0px;
  }
  @media (max-width: 720px) {
    .fa-th {
      display: none;
    }
  }
`,O_=d.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.$columns}, 1fr);
  gap: 20px;
  transition: all 0.5s ease;
  /* For ProductCardList change two columns to one column for smaller than 1540px */
  @media (max-width: 1540px) {
    grid-template-columns: ${e=>e.$isListView&&e.$columns===2?"1fr":`repeat(${e.$columns}, 1fr)`};
  }
  & > * {
    animation: ${M9} 0.5s ease;
  }
`,D_=d.div`
  display: none;
  padding: var(--spacing-sm) var(--spacing-md);

  @media (max-width: 720px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm);
    margin: auto;
    gap: 0.5rem;
  }
`,F_=d.div`
  display: block;
`,B_=d.div`
  font-size: var(--font-size-body);
  color: var(--text-color);
  font-weight: 500;
  display: flex;
`,wg=d.div`
  display: block;
  @media (max-width: 720px) {
    display: none !important;
  }
`,U_=d.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
  }
`;d.button`
  margin: 2rem auto;
  padding: 0.8rem 2rem;
  background-color: var(--primary-color);
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  text-align: center;

  &:hover {
    background-color: red;
    transform: translateY(-3px);
  }

  &:active {
    background-color: white;
    transform: translateY(1px);
  }
`;const H_=d.div`
  background-color: var(--primary-color-light-5);
  border-radius: var(--border-radius-large);
  overflow: hidden;
  height: 1.25rem;
  width: 50%;
  margin: 0 auto;
  position: relative;
`,W_=d.div`
  background: linear-gradient(
    90deg,
    var(--primary-color-dark-1) 0%,
    var(--primary-color-dark-3) 100%
  );
  height: 100%;
  width: ${e=>e.$width}%;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: inherit;
  position: relative;
`,F3=d(yi)`
  margin-top: var(--spacing-sm);
`,V_=d.div`
  margin-bottom: var(--spacing-xs);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--primary-color-dark-3);
`,G_=d.div`
  width: 100%;
  padding: var(--spacing-sm);
  text-align: center;
`,q_=d(ge)`
  max-width: 35rem;
  margin: 1rem auto;
`,Y_=(e,t)=>e.price-t.price,X_=(e,t)=>t.price-e.price,Q_=(e,t)=>new Date(e.createdAt)-new Date(t.createdAt),K_=(e,t)=>new Date(t.createdAt)-new Date(e.createdAt),Z_=(e,t)=>e.orders-t.orders,J_=(e,t)=>t.orders-e.orders,bg=(e,t)=>t.rating.rate-e.rating.rate,e$=(e,t)=>{switch(e){case"Price: Low to High":return t.slice().sort(Y_);case"Price: High to Low":return t.slice().sort(X_);case"Date: Old to New":return t.slice().sort(Q_);case"Date: New to Old":return t.slice().sort(K_);case"Orders: Fewest to Most":return t.slice().sort(Z_);case"Orders: Most to Fewest":return t.slice().sort(J_);case"Avg. Customer Review":return t.slice().sort(bg);case"Featured":return t.slice().sort(bg);default:return t}};function t$(e){const t={},r=new Set;return e.forEach(n=>{const i=n.brand;t[i]?t[i]+=1:t[i]=1,n.sizes&&n.sizes.forEach(a=>r.add(a))}),{brands:t,sizes:Array.from(r).sort((n,i)=>n-i)}}const r$=d.div`
  padding: var(--spacing-sm);
`,n$=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`,i$=d.h3`
  font-family: var(--font-primary);
  font-size: var(--font-size-h4);
  color: var(--text-color);
`,o$=d.div`
  display: flex;
  flex-direction: column;
`,a$=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;

  .price-input-container {
    display: flex;
    align-items: center;
    background-color: var(--background-color-light);
    border: 1px solid var(--light-grey-color);
    border-radius: var(--border-radius-medium);
    padding: var(--spacing-xs);
    transition: var(--transition-quick);

    &:focus-within {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px var(--primary-color-light-1);
    }

    .price-symbol {
      margin-right: var(--spacing-xs);
      color: var(--text-color);
      font-size: var(--font-size-body);
    }

    .price-input {
      width: 2rem;
      padding: 0;
      border: none;
      border-radius: 0;
      text-align: center;
      background: transparent;
      outline: none;
      color: var(--text-color-dark);
    }
  }

  .price-separator {
    margin: 0;
    color: var(--text-color);
    font-size: 1.2rem;
  }
`,s$=d.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--background-color-light);
  transition: var(--transition-quick);

  input[type="checkbox"] {
    accent-color: var(--primary-color);
    width: 1.2rem;
    height: 1.2rem;
    margin-right: var(--spacing-xs);
    cursor: pointer;
    transition: var(--transition-quick);

    &:checked {
      transform: scale(1.1);
    }
  }

  .dress-card-grid__stars {
    display: flex;
    align-items: center;

    svg {
      color: var(--primary-color-dark-2);
      margin-right: var(--spacing-xxs);
      font-size: 1.4rem;
    }
  }

  label {
    font-family: var(--font-secondary);
    color: var(--text-color-dark);
    font-size: 1rem;
    cursor: pointer;
  }

  .reviews-label {
    font-family: var(--font-primary);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    margin-right: var(--spacing-sm);
  }
`,l$=d.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  li {
    margin-bottom: var(--spacing-sm);
  }
`,c$=d.button`
  background-color: var(--primary-color-light-5);
  border: 1px solid var(--primary-color-light-4);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  font-size: var(--font-size-body);
  font-weight: 500;
  color: var(--text-color);
  transition: all var(--transition-quick);
  box-shadow: var(--box-shadow-sm);
  text-align: center;

  &:hover {
    background-color: var(--primary-color-light-1);
    border-color: var(--primary-color-light-1);
    transform: translateY(-0.8px);
    box-shadow: var(--box-shadow-lg);
  }

  &.selected {
    background-color: var(--primary-color-dark-2);
    color: var(--background-color);
    border-color: var(--primary-color);
    box-shadow: var(--box-shadow-sm);
    transform: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--primary-color-light-2);
  }
  .selected {
    background-color: var(--primary-color);
    color: white;
  }

  .inactive {
    opacity: 0.5;
    pointer-events: none;
  }
`,u$=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,d$=d.label`
  display: flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: all var(--transition-quick);
  width: 100%;
  font-size: var(--font-size-body);
  &:hover {
    background-color: var(--primary-color-light-7);
    border-color: var(--primary-color-light-1);
  }
`,f$=d.input`
  margin-right: var(--spacing-sm);
  cursor: pointer;
  accent-color: var(--primary-color);
`,h$=d.span`
  font-family: var(--font-secondary);
  font-weight: 500;
  color: var(--text-color);
  margin-right: var(--spacing-sm);
`,p$=d.span`
  font-family: var(--font-secondary);
  font-weight: 400;
  color: var(--dark-grey-color);
  margin-left: auto;
`;d.div`
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%)
    rotate(${e=>e.isExpanded?"180deg":"0deg"});
  transition: transform 0.2s ease-in-out;
`;const m$=d.div`
  width: var(--font-size-h2);
  display: flex;
  justify-content: center;
  align-items: center;
`,Ru=({dispatchAction:e})=>{const t=Pe(y=>y.products.filteredProducts),[r,n]=b.useState([]),[i,a]=b.useState([]),[s,l]=b.useState({min:0,max:100}),[c,u]=b.useState(null),[f,h]=b.useState(null),[m,w]=b.useState(!1),x=zr(),j=y=>{const{name:C,value:S}=y.target;l(P=>({...P,[C]:S}))},E=()=>{x({type:"products/filter_by_price",payload:s}),z()},g=y=>{c===y?(u(!1),x({type:"products/r_filter_by_sizes"})):(u(y),x({type:"products/filter_by_sizes",payload:y}))},p=y=>{f===y?(h(null),x({type:"products/r_filter_by_brand"})):(h(y),x({type:"products/filter_by_brand",payload:y}))},v=y=>{const C=y.target.checked;C?(x({type:"products/filter_by_stars"}),w(C)):(x({type:"products/r_filter_by_stars"}),w(!1))},k=()=>{z(),x(e?{type:"products/reset_filter"}:{type:"products/reset_category_filter"})},z=()=>{u(null),h(null),w(!1)};return b.useEffect(()=>{if(t){const{brands:y,sizes:C}=t$(t);n(y),a(C)}},[t]),o.jsxs(r$,{children:[o.jsxs(n$,{children:[o.jsx(i$,{children:"Filter"}),o.jsx(m$,{children:o.jsx(D3,{})})]}),o.jsxs(o$,{children:[o.jsxs(O3,{allowMultipleExpanded:!0,children:[o.jsx(va,{uuid:"0",heading:"Price",children:o.jsx(a$,{children:o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:"1rem",children:[o.jsxs("div",{className:"price-input-container",children:[o.jsx("span",{className:"price-symbol",children:"$"}),o.jsx("input",{type:"text",name:"min",value:s.min,onChange:j,className:"price-input",placeholder:"Min"})]}),o.jsx("span",{className:"price-separator",children:" - "}),o.jsxs("div",{className:"price-input-container",children:[o.jsx("span",{className:"price-symbol",children:"$"}),o.jsx("input",{type:"text",name:"max",value:s.max,onChange:j,className:"price-input",placeholder:"Max"})]}),o.jsx(Xe,{color:"var(--primary-color)",size:"mini",$invert:!0,onClick:E,textcolor:"var(--text-color)",children:"Apply"})]})})}),o.jsx(va,{uuid:"1",heading:"Reviews",children:o.jsxs(s$,{children:[o.jsx("input",{type:"checkbox",onChange:v,checked:m}),o.jsxs("div",{className:"dress-card-grid__stars",children:[o.jsx(ma,{}),o.jsx(ma,{}),o.jsx(ma,{}),o.jsx(ma,{})]}),o.jsx("label",{children:" & up"})]})}),o.jsx(va,{uuid:"2",heading:"Size",children:o.jsx(l$,{children:o.jsx(ge,{type:"horizontal",$justifyContent:"flex-start",$alignItems:"flex-start",$flexGap:".8rem",children:i&&i.map(y=>o.jsx("li",{children:o.jsx(c$,{className:`${c===y?"selected":"inactive"}`,onClick:()=>g(y),children:y})},y))})})}),o.jsx(va,{uuid:"3",heading:"Brand",children:o.jsx(u$,{children:Object.entries(r).map(([y,C])=>o.jsx("li",{className:"brand-item",children:o.jsxs(d$,{children:[o.jsx(f$,{type:"checkbox",value:y,checked:f===y,onChange:S=>p(S.target.value,S.target.checked)}),o.jsxs(h$,{children:[y,":"]}),o.jsx(p$,{children:C})]})},y))})})]}),o.jsx(Xe,{color:"var(--primary-color)",textcolor:"var(--text-color)",size:"mini",$invert:!0,onClick:k,children:"Reset Filter"})]})]})},g$=["Featured","Price: Low to High","Price: High to Low","Date: Old to New","Date: New to Old","Orders: Fewest to Most","Orders: Most to Fewest","Avg. Customer Review"];function Mu({dispatchAction:e,defaultColumns:t}){const{category:r,query:n}=ps(),i=zr(),[a,s]=b.useState(t||3),[l,c]=b.useState(3),[u,f]=b.useState(12),h=Pe(p=>p.products.filteredProducts),m=h.length,w=l*5,x=Math.floor(u/m*100),j=p=>{s(p),E(p)},E=p=>{const v=window.innerWidth;v<720?c(2):v<1200?c(p===4?3:p===3?2:p):c(p)};b.useEffect(()=>{const p=()=>{E(a)};return window.addEventListener("resize",p),p(),()=>window.removeEventListener("resize",p)},[a]);const g=()=>{f(p=>Math.min(p+w,m))};return b.useEffect(()=>{i(e?r==="all categories"?{type:"products/reset_category_filter"}:{type:"products/category_filter",payload:r}:{type:"products/reset_category_filter"}),n&&i({type:"products/filter_by_keywords",payload:n.toLowerCase().split(" ")})},[r,i,n,e]),b.useEffect(()=>{s(t||3)},[t]),o.jsxs(o.Fragment,{children:[o.jsxs(D_,{children:[o.jsxs(B_,{children:["Showing 1 - ",Math.min(u,m)," of ",m," ","results"]}),o.jsx(F_,{children:o.jsx(jg,{filteredProducts:h,position:"right"})})]}),o.jsxs(N_,{children:[o.jsx(U_,{children:o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"mySidebar",position:"left",children:o.jsxs(ge,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:".6rem",children:[o.jsx(D3,{})," ",o.jsx($C,{children:"Filter"})]})}),o.jsx(me.Content,{name:"mySidebar",children:o.jsx(Ru,{dispatchAction:e})})]})}),o.jsx(wg,{children:o.jsx(jg,{filteredProducts:h,position:"left"})}),o.jsxs(wg,{children:["Showing 1 - ",Math.min(u,m)," of ",m," ","results"]}),o.jsxs("div",{children:[o.jsx(tj,{className:`icon ${a===2?"active":""}`,size:24,onClick:()=>j(2),title:"List View (2 Columns)"}),o.jsx(ej,{className:`icon ${a===3?"active":""}`,size:24,onClick:()=>j(3),title:"3 Columns"}),o.jsx(rj,{className:`icon fa-th ${a===4?"active":""}`,size:24,onClick:()=>j(4),title:"4 Columns"})]})]}),o.jsxs(M_,{children:[o.jsx(O_,{$columns:l,$isListView:a===2,children:h.slice(0,u).map(p=>a===2?o.jsx(R_,{product:p},`${p.id}-${a}`):o.jsx(k3,{product:p},`${p.id}-${a}`))}),u<m&&o.jsx(q_,{type:"horizontal",$justifyContent:"space-between",$alignItems:"center",$flexGap:"2rem",children:o.jsxs(G_,{children:[o.jsxs(V_,{children:["Showing ",u," of ",m," items"]}),o.jsx(H_,{children:o.jsx(W_,{$width:x})}),o.jsx(F3,{$color:"var(--primary-color-dark-2)",$underlineColor:"var(--primary-color-dark-2)",onClick:g,children:"Show More"})]})})]})]})}const jg=({filteredProducts:e,position:t})=>{const r=zr(),n=async i=>{const a=e$(i,e);r({type:"products/sort",payload:a})};return o.jsxs(St,{size:"var(--font-size-small)",outline:!0,onOptionSelect:n,position:t,children:[o.jsx(St.Button,{children:o.jsx(St.SelectedOption,{})}),o.jsx(St.List,{data:g$,render:(i,a)=>o.jsx(St.Item,{value:i,children:i},a)})]})};var B3={exports:{}},v$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x$=v$,y$=x$;function U3(){}function H3(){}H3.resetWarningCache=U3;var w$=function(){function e(n,i,a,s,l,c){if(c!==y$){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:H3,resetWarningCache:U3};return r.PropTypes=r,r};B3.exports=w$();var b$=B3.exports;const aa=C0(b$);var W3={exports:{}};(function(e,t){(function(n,i){e.exports=i(b)})(typeof self<"u"?self:cx,function(r){return function(n){var i={};function a(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return n[s].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=n,a.c=i,a.d=function(s,l,c){a.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:c})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,l){if(1&l&&(s=a(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var u in s)a.d(c,u,(function(f){return s[f]}).bind(null,u));return c},a.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(l,"a",l),l},a.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},a.p="",a(a.s=3)}([function(n,i){n.exports=r},function(n,i,a){function s(g){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v})(g)}function l(g,p){if(!(g instanceof p))throw new TypeError("Cannot call a class as a function")}function c(g,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(p&&p.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),p&&u(g,p)}function u(g,p){return(u=Object.setPrototypeOf||function(k,z){return k.__proto__=z,k})(g,p)}function f(g){var p=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var k,z=m(g);if(p){var y=m(this).constructor;k=Reflect.construct(z,arguments,y)}else k=z.apply(this,arguments);return h(this,k)}}function h(g,p){return!p||s(p)!=="object"&&typeof p!="function"?function(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}(g):p}function m(g){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(v){return v.__proto__||Object.getPrototypeOf(v)})(g)}var w=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var x=w(a(0)),j=function(g){c(v,g);var p=f(v);function v(){return l(this,v),p.apply(this,arguments)}return v}(x.default.Component);i.Parallax=j;var E=function(g){c(v,g);var p=f(v);function v(){return l(this,v),p.apply(this,arguments)}return v}(x.default.Component);i.Background=E},function(n,i,a){Object.defineProperty(i,"__esModule",{value:!0}),i.canUseDOM=i.getNodeHeight=i.isScrolledIntoView=i.getWindowHeight=void 0,i.getWindowHeight=function(s){if(!s)return 0;var l=window,c=document,u=c.documentElement,f=c.getElementsByTagName("body")[0];return l.innerHeight||u.clientHeight||f.clientHeight},i.isScrolledIntoView=function(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,c=arguments.length>2?arguments[2]:void 0;if(!c)return!1;var u=s.getBoundingClientRect().top-l,f=s.getBoundingClientRect().bottom+l;return u<=i.getWindowHeight(c)&&f>=0},i.getNodeHeight=function(s,l){return s?l&&"clientHeight"in l?l.clientHeight:i.getWindowHeight(s):0},i.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(n,i,a){var s=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var l=s(a(4));i.Parallax=l.default;var c=s(a(7));i.Background=c.default},function(n,i,a){function s(k){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(k)}function l(k,z){for(var y=0;y<z.length;y++){var C=z[y];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(k,C.key,C)}}function c(k,z){return(c=Object.setPrototypeOf||function(C,S){return C.__proto__=S,C})(k,z)}function u(k){var z=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var C,S=h(k);if(z){var P=h(this).constructor;C=Reflect.construct(S,arguments,P)}else C=S.apply(this,arguments);return f(this,C)}}function f(k,z){return!z||s(z)!=="object"&&typeof z!="function"?function(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}(k):z}function h(k){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(k)}var m=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(i,"__esModule",{value:!0});var w=m(a(0)),x=a(1),j=a(5),E=a(2),g=m(a(6)),p={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},v=function(k){(function(S,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(P&&P.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),P&&c(S,P)})(y,k);var z=u(y);function y(C){var S;return function(L,I){if(!(L instanceof I))throw new TypeError("Cannot call a class as a function")}(this,y),(S=z.call(this,C)).onWindowResize=function(){S.parentHeight=E.getNodeHeight(S.canUseDOM,S.parent),S.updatePosition()},S.onWindowLoad=function(){S.updatePosition()},S.onScroll=function(){if(S.canUseDOM){var P=Date.now();P-S.timestamp>=10&&E.isScrolledIntoView(S.node,100,S.canUseDOM)&&(window.requestAnimationFrame(S.updatePosition),S.timestamp=P)}},S.onContentMount=function(P){S.content=P},S.updatePosition=function(){if(S.content){var P=!1;S.contentHeight=S.content.getBoundingClientRect().height,S.contentWidth=S.node.getBoundingClientRect().width,S.img&&S.img.naturalWidth/S.img.naturalHeight<S.contentWidth/S.getImageHeight()&&(P=!0);var L=j.getRelativePosition(S.node,S.canUseDOM),I=!!S.img,O=S.bg&&S.state.splitChildren.bgChildren.length>0;I&&S.setImagePosition(L,P),O&&S.setBackgroundPosition(L),I||O||S.setState({percentage:L})}},S.state={bgImage:C.bgImage,bgImageSrcSet:C.bgImageSrcSet,bgImageSizes:C.bgImageSizes,imgStyle:p,bgStyle:Object.assign(Object.assign({},p),C.bgStyle),percentage:0,splitChildren:j.getSplitChildren(C)},S.canUseDOM=E.canUseDOM(),S.node=null,S.content=null,S.bgImageLoaded=!1,S.bgImageRef=void 0,S.parent=C.parent,S.parentHeight=E.getNodeHeight(S.canUseDOM,S.parent),S.timestamp=Date.now(),S.isDynamicBlur=j.getHasDynamicBlur(C.blur),S}return function(S,P,L){return P&&l(S.prototype,P),L&&l(S,L),S}(y,[{key:"componentDidMount",value:function(){var S=this.props.parent,P=this.state,L=P.bgImage,I=P.bgImageSrcSet,O=P.bgImageSizes;this.parent=S||document,this.addListeners(),L?this.loadImage(L,I,O):this.updatePosition()}},{key:"componentDidUpdate",value:function(S){var P=this.props,L=P.parent,I=P.bgImage,O=P.bgImageSrcSet,U=P.bgImageSizes,W=this.state.bgImage;S.parent!==L&&(this.removeListeners(this.parent),this.parent=L,L&&this.addListeners()),this.parentHeight=E.getNodeHeight(this.canUseDOM,this.parent),W!==I&&this.loadImage(I,O,U)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(S){var P=this.props,L=P.disabled,I=P.strength,O=Object.assign({},this.state.bgStyle);if(!L){var U="translate3d(-50%, ".concat((I<0?I:0)-I*S,"px, 0)");O.WebkitTransform=U,O.transform=U}this.setState({bgStyle:O,percentage:S})}},{key:"setImagePosition",value:function(S){var P=arguments.length>1&&arguments[1]!==void 0&&arguments[1],L=this.props,I=L.disabled,O=L.strength,U=L.blur,W=P?"auto":"".concat(this.getImageHeight(),"px"),K=P?"".concat(this.contentWidth,"px"):"auto",ue=Object.assign(Object.assign({},this.state.imgStyle),{height:W,width:K});if(!I){var J=O<0,R=(J?O:0)-O*S,N="translate3d(-50%, ".concat(R,"px, 0)"),A="none";U&&(A="blur(".concat(j.getBlurValue(this.isDynamicBlur,U,S),"px)")),ue.WebkitTransform=N,ue.transform=N,ue.WebkitFilter=A,ue.filter=A}this.setState({imgStyle:ue,percentage:S})}},{key:"getImageHeight",value:function(){var S=this.props.strength,P=(S<0?2.5:1)*Math.abs(S);return Math.floor(this.contentHeight+P)}},{key:"loadImage",value:function(S,P,L){var I=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(O){I.setState({bgImage:S,bgImageSrcSet:P,bgImageSizes:L},function(){return I.updatePosition()}),I.props.onLoad&&I.props.onLoad(O)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=S,this.bgImageRef.srcset=P||"",this.bgImageRef.sizes=L||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(S){this.canUseDOM&&(S&&S.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var S=this,P=this.props,L=P.className,I=P.style,O=P.bgClassName,U=P.contentClassName,W=P.bgImageAlt,K=P.renderLayer,ue=P.bgImageStyle,J=P.lazy,R=this.state,N=R.bgImage,A=R.bgImageSrcSet,B=R.bgImageSizes,G=R.percentage,ye=R.imgStyle,ae=R.bgStyle,ke=R.splitChildren;return w.default.createElement("div",{className:"react-parallax ".concat(L),style:Object.assign({position:"relative",overflow:"hidden"},I),ref:function(ie){S.node=ie}},N?w.default.createElement("img",{className:O,src:N,srcSet:A,sizes:B,ref:function(ie){S.img=ie},alt:W,style:Object.assign(Object.assign({},ye),ue),loading:J?"lazy":"eager"}):null,K?K(-(G-1)):null,ke.bgChildren.length>0?w.default.createElement("div",{className:"react-parallax-background-children",ref:function(ie){S.bg=ie},style:ae},ke.bgChildren):null,w.default.createElement(g.default,{onMount:this.onContentMount,className:U},ke.children))}}],[{key:"getDerivedStateFromProps",value:function(S){return{splitChildren:j.getSplitChildren(S)}}}]),y}(x.Parallax);v.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},i.default=v},function(n,i,a){function s(u){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h})(u)}Object.defineProperty(i,"__esModule",{value:!0}),i.setBlur=i.getBlurValue=i.getHasDynamicBlur=i.getSplitChildren=i.getRelativePosition=i.getPercentage=void 0;var l=a(0),c=a(2);i.getPercentage=function(u,f,h){return(h-u)/(f-u)||0},i.getRelativePosition=function(u,f){if(!f)return 0;var h=u.getBoundingClientRect(),m=h.top,w=h.height,x=c.getNodeHeight(f),j=w>x?w:x,E=Math.round(m>j?j:m);return i.getPercentage(0,j,E)},i.getSplitChildren=function(u){var f=[],h=l.Children.toArray(u.children);return h.forEach(function(m,w){var x=m;x.type&&x.type.isParallaxBackground&&(f=f.concat(h.splice(w,1)))}),{bgChildren:f,children:h}},i.getHasDynamicBlur=function(u){return s(u)==="object"&&u.min!==void 0&&u.max!==void 0},i.getBlurValue=function(u,f,h){return u?f.min+(1-h)*f.max:f},i.setBlur=function(u,f){u.style.webkitFilter="blur(".concat(f,"px)"),u.style.filter="blur(".concat(f,"px)")}},function(n,i,a){var s=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(i,"__esModule",{value:!0});var l=s(a(0));i.default=function(u){var f=u.children,h=u.onMount,m=u.className;return l.default.createElement("div",{ref:function(x){return h(x)},className:m||"react-parallax-content",style:{position:"relative"}},f)}},function(n,i,a){function s(E){return(s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p})(E)}function l(E,g){if(!(E instanceof g))throw new TypeError("Cannot call a class as a function")}function c(E,g){for(var p=0;p<g.length;p++){var v=g[p];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(E,v.key,v)}}function u(E,g){return(u=Object.setPrototypeOf||function(v,k){return v.__proto__=k,v})(E,g)}function f(E){var g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var v,k=m(E);if(g){var z=m(this).constructor;v=Reflect.construct(k,arguments,z)}else v=k.apply(this,arguments);return h(this,v)}}function h(E,g){return!g||s(g)!=="object"&&typeof g!="function"?function(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}(E):g}function m(E){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(p){return p.__proto__||Object.getPrototypeOf(p)})(E)}var w=this&&this.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(i,"__esModule",{value:!0});var x=w(a(0)),j=function(E){(function(k,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");k.prototype=Object.create(z&&z.prototype,{constructor:{value:k,writable:!0,configurable:!0}}),z&&u(k,z)})(p,E);var g=f(p);function p(){return l(this,p),g.apply(this,arguments)}return function(k,z,y){return z&&c(k.prototype,z),k}(p,[{key:"render",value:function(){var k=this.props,z=k.className,y=k.children;return x.default.createElement("div",{className:"react-parallax-background ".concat(z)},y)}}]),p}(a(1).Background);j.defaultProps={className:""},j.isParallaxBackground=!0,i.default=j}])})})(W3);var V3=W3.exports;const j$=d.div`
  .breadcrumb-parallax {
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden; /* Ensure no overflow issues */

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4); /* Darker overlay */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__content {
      text-align: center;
      color: var(--background-color);
      z-index: 1; /* Ensure text is above the overlay */
    }

    &__title {
      font-size: var(--font-size-h1);
      text-transform: capitalize;
      font-family: var(--font-primary);
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-small);
      max-width: 95%;
      margin: auto;
      padding: var(--spacing-sm);
      border-radius: var(--border-radius-medium);
      color: var(--background-color);
    }

    &__icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-xs);
      color: var(--primary-color-dark-1);
    }

    &__separator {
      margin: 0 var(--spacing-xs);
    }

    &__next {
      font-weight: bold;
      font-family: var(--font-secondary);
    }
  }

  .breadcrumb-simple {
    margin: var(--spacing-xxl) 0 var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--text-color);
    width: 90%;
    font-family: var(--font-secondary);

    &__icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-xs);
      color: var(--primary-color-dark-1);
    }

    &__separator {
      margin: 0 var(--spacing-xs);
    }

    &__next {
      font-weight: bold;
    }
  }
`,Ps=({next:e,next2:t,title:r,imageUrl:n})=>o.jsx(j$,{children:n?o.jsx(V3.Parallax,{bgImage:n,bgImageStyle:{objectFit:"cover",objectPosition:"top"},children:o.jsx("div",{className:"breadcrumb-parallax",children:o.jsx("div",{className:"breadcrumb-parallax__overlay",children:o.jsxs("div",{className:"breadcrumb-parallax__content",children:[o.jsx("h1",{className:"breadcrumb-parallax__title",children:r}),o.jsxs("div",{className:"breadcrumb-parallax__links",children:[o.jsx(re,{to:"/",children:o.jsx(d0,{className:"breadcrumb-parallax__icon"})}),o.jsx("span",{className:"breadcrumb-parallax__separator",children:" > "}),t?o.jsx(re,{to:t[1],children:o.jsx("span",{className:"breadcrumb-parallax__next",children:e})}):o.jsx("span",{className:"breadcrumb-parallax__next",children:e}),t&&o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"breadcrumb-parallax__separator",children:[" ",">"," "]}),o.jsx("span",{className:"breadcrumb-parallax__next",children:t[0]})]})]})]})})})}):o.jsxs("div",{className:"breadcrumb-simple",children:[o.jsx(re,{to:"/",children:o.jsx(d0,{className:"breadcrumb-simple__icon"})}),o.jsx("span",{className:"breadcrumb-simple__separator",children:" > "}),t?o.jsx(re,{to:t[1],children:o.jsx("span",{className:"breadcrumb-simple__next",children:e})}):o.jsx("span",{className:"breadcrumb-simple__next",children:e}),t&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"breadcrumb-simple__separator",children:" > "}),o.jsx("span",{className:"breadcrumb-simple__next",children:t[0]})]})]})});Ps.propTypes={next:aa.string.isRequired,next2:aa.arrayOf(aa.string),title:aa.string,imageUrl:aa.string};const k$=d.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width-screen);
  margin: auto;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media (max-width: 1080px) {
    width: 100%;
  }
`,S$=d.div`
  flex: 0.3;
  max-width: 23.5rem;
  position: sticky;
  top: 1rem; // Adjust this value based on your layout needs
  align-self: flex-start;
  @media (max-width: 1080px) {
    display: none;
  }
  /* Add any additional styles you want for the left column */
`,C$=d.div`
  flex: 0.8;
  @media (max-width: 1080px) {
    flex: 1;
  }
  /* You can also use flex-grow: 1; to allow it to flexibly take up remaining space */
`,Ii=({dispatchAction:e,defaultColumns:t})=>{const[r,n]=b.useState("/breadcrumb/fashion.jpeg"),{category:i}=ps();return b.useEffect(()=>{const s={haircare:"/breadcrumb/haircare.jpeg",makeup:"/breadcrumb/makeup.jpeg",skincare:"/breadcrumb/skincare.jpeg",wellness:"/breadcrumb/wellness.jpeg",natural:"/breadcrumb/natural.jpeg"}[i]||"/breadcrumb/natural.jpeg";n(s)},[i]),o.jsxs(o.Fragment,{children:[o.jsx(Ps,{next:"Shop",imageUrl:r,title:i||"Shop"}),o.jsxs(k$,{children:[o.jsx(S$,{children:o.jsx(Ru,{dispatchAction:e})}),o.jsx(C$,{children:o.jsx(Mu,{dispatchAction:e,defaultColumns:t})})]}),o.jsx(Ss,{title:!1})]})},E$=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--border-radius-medium);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  width: 100%;
  background-color: white;
  box-shadow: var(--shadow-medium);
`,Nd=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: var(--spacing-sm);
  padding: var(--spacing-xs) 0;
  border-bottom: 1px dashed var(--light-grey-color);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  span {
    font-size: var(--font-size-body);
  }

  .total {
    color: var(--primary-color-dark-4);
    font-weight: bold;
    font-size: var(--font-size-h4);
  }

  .shipping {
    font-size: var(--font-size-small);
    color: var(--dark-grey-color);

    span {
      color: var(--text-color);
      font-weight: bold;
    }
  }
`,z$=d.h2`
  font-size: var(--font-size-h4);
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
  padding-bottom: var(--spacing-xs);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--accent-color);
    border-radius: 1px;
  }
`,_$=()=>{const e=Pe(m3),t=7;return o.jsxs(E$,{children:[o.jsx(z$,{children:"Summary"}),o.jsxs(Nd,{children:[o.jsx("span",{children:"Subtotal"}),o.jsx("span",{children:ql(e)})]}),o.jsxs(Nd,{className:"shipping",children:[o.jsx("span",{children:"Shipping"}),o.jsx("span",{children:ql(t)})]}),o.jsxs(Nd,{children:[o.jsx("span",{children:o.jsx("strong",{children:"Total"})}),o.jsx("span",{className:"total",children:ql(e+t)})]})]})},$$=d.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grey-color);
`,P$=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,T$=d(zE)`
  font-size: 7.7rem;
  color: var(--dark-grey-color);
  margin-bottom: var(--spacing-lg);
`,L$=d.p`
  font-size: 1.7rem;
  margin-bottom: var(--spacing-lg);
  color: var(--dark-grey-color);
`,A$=d(re)`
  color: #666;
  font-size: 1.1rem;
  text-decoration: underline;
  transition: color var(--transition-slow);

  &:hover {
    color: black;
    text-decoration: underline;
  }
`,I$=()=>o.jsx($$,{children:o.jsxs(P$,{children:[o.jsx(T$,{}),o.jsx(L$,{children:"Your shopping cart is empty"}),o.jsx(A$,{to:"/all-products",children:"Start adding items now!"})]})}),R$=d.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  background-color: var(--primary-color-light-8);
  @media (max-width: 768px) {
    padding: var(--spacing-sm) var(--spacing-md);
  }
`,M$=d.div`
  max-width: ${({$maxWidth:e})=>e||"1400px"};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${({$maxWidth:e})=>e||"1440px"}) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-sm) var(--spacing-md);
  }
`,N$=d.div`
  display: flex;
  align-items: center;
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  color: var(--grey-color);

  a {
    color: var(--grey-color);
    text-decoration: none;
    transition: color var(--transition-quick);

    &:hover {
      color: var(--accent-color);
    }
  }

  .separator {
    margin: 0 var(--spacing-xs);
    color: var(--text-color);
  }

  .current-page {
    color: var(--accent-color);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body);
  }
`,_r=({title:e,next:t,next2:r,maxWidth:n})=>o.jsx(R$,{$maxWidth:n,children:o.jsxs(M$,{children:[o.jsx(oe,{as:"h1",children:e}),o.jsxs(N$,{children:[o.jsx(re,{to:"/",children:o.jsx(d0,{})}),o.jsx("span",{className:"separator",children:" > "}),r?o.jsxs(o.Fragment,{children:[o.jsx(re,{to:r[1],children:o.jsx("span",{children:t})}),o.jsx("span",{className:"separator",children:" > "}),o.jsx("span",{className:"current-page",children:r[0]})]}):o.jsx("span",{className:"current-page",children:t})]})]})}),O$=d.section`
  padding: var(--spacing-xxxl) 1rem;
`,D$=d.div`
  max-width: 80rem;
  margin: auto;

  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`,G3=d.div`
  border-bottom: 1px solid black;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: 25% repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  row-gap: 1rem;
  column-gap: 1.4rem;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`,F$=d(G3)`
  grid-template-rows: auto;
  margin: 0 auto;
  color: var(--primary-color-dark-2);
  font-weight: 700;
  @media (max-width: 1024px) {
    display: none;
  }
`,vr=d.div`
  font-size: var(--font-size-h5);
  &.item-1 {
    /* padding: 20px; */
    text-align: center;
  }

  &.item-2 {
    grid-column: span 2;
  }

  &.item-5 {
    position: relative;
  }

  @media (max-width: 1024px) {
    &.item-1 {
      grid-row: 1/2;
      grid-column: 1/3;
    }

    &.item-2 {
      grid-row: 1/2;
      grid-column: 3/-1;
    }

    &.item-3 {
      grid-column: span 2;
    }

    &.item-4 {
      grid-column: span 2;
    }

    &.item-5 {
      grid-column: span 2;
    }
  }

  @media (max-width: 800px) {
    &.item-1 {
      grid-row: 1/-1;
      grid-column: 1/3;
    }

    &.item-2 {
      grid-row: 1/2;
      grid-column: 3/-1;
    }

    &.item-3 {
      grid-row: 2/3;
      grid-column: 3/-1;
    }

    &.item-4 {
      grid-row: 3/4;
      grid-column: 3/-1;
    }

    &.item-5 {
      grid-row: 4/5;
      grid-column: 3/-1;
    }
  }
`,B$=d.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  color: var(--danger-color);
  &:hover {
    color: var(--danger-color-dark-1);
  }
`,U$=d.input`
  padding: 0.5rem 1rem;
  border: 2px solid var(--primary-color-dark-2);
  transition: all 0.5s ease-in-out;
  width: 11rem;
  background-color: white;
  margin-right: 1rem;
  color: black;

  color: var(--text-color);
  background-color: var(--background-primary-transparent-2);
  transition: var(--transition-quick);
  &:focus {
    background-color: var(--background-primary-transparent);
    border-color: var(--primary-color-dark-4);
  }
`,H$=d(ge)`
  margin-bottom: 2rem;
  margin-top: 3rem;
`,W$=d.div`
  border-radius: var(--border-radius-small);
  overflow: hidden;
  box-shadow: var(--shadow-small);
  display: block;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition:
      transform var(--transition-quick),
      filter var(--transition-quick);
  }

  &:hover img {
    transform: scale(1.1); /* Zoom effect */
    filter: brightness(0.9); /* Slightly darkens the image */
  }
`,V$=()=>{const e=Pe(r=>r.shoppingCart.cart),t=zr();return e.length===0?o.jsx(I$,{}):o.jsxs(o.Fragment,{children:[" ",o.jsx(_r,{next:"Shop",next2:["Product Detail","/all-products"],title:"Cart Summary",maxWidth:"1600px"}),o.jsx(O$,{children:o.jsxs(D$,{children:[o.jsxs(F$,{children:[o.jsx(vr,{className:"item-1",children:"PRODUCT"}),o.jsx(vr,{className:"item-2"}),o.jsx(vr,{className:"item-3",children:"PRICE"}),o.jsx(vr,{className:"item-4",children:"QUANTITY"}),o.jsx(vr,{className:"item-5",children:"TOTAL"})]}),e.map(r=>o.jsxs(G3,{className:"grid-container",children:[o.jsx(vr,{className:"item-1",children:o.jsx(W$,{children:o.jsx("img",{src:`/shop/${r.category}/${r.image}`,alt:r.title})})}),o.jsx(vr,{className:"item-2",children:o.jsx(oe,{as:"h4",children:o.jsx(re,{to:`/shop/${r.slug}`,children:r.title})})}),o.jsx(vr,{className:"item-3",children:o.jsx("div",{className:"shopping-item__price",children:o.jsxs("span",{className:"shopping-item__price-value",children:["$",parseFloat(r.unitPrice).toFixed(2)]})})}),o.jsx(vr,{className:"item-4",children:o.jsx(Au,{size:"normal",productId:r.id})}),o.jsxs(vr,{className:"item-5",children:[o.jsxs("div",{className:"total-price-unit",children:["$",parseFloat(r.unitPrice*r.quantity).toFixed(2)]}),o.jsx(B$,{onClick:()=>t(h3(r.id)),children:o.jsx(aj,{size:"1.2rem"})})]})]},r.id)),o.jsxs(H$,{type:"horizontal",$justifyContent:"flex-start",$alignItems:"flex-start",$flexGap:"2rem",children:[o.jsx(U$,{type:"text",placeholder:"Coupon Code"}),o.jsx(Xe,{color:"var(--primary-color-dark-2)",size:"extra-small",children:"SUBMIT"})]}),o.jsx(_$,{}),o.jsx(Xe,{color:"var(--primary-color-dark-2)",size:"extra-small",children:"CHECKOUT"})]})})]})};function G$(e){return X({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"},child:[]}]})(e)}function q$(e){return X({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]},{tag:"path",attr:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"},child:[]}]})(e)}function Y$(e){return X({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"},child:[]}]})(e)}function X$(e){return X({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"},child:[]}]})(e)}function Q$(e){return X({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"},child:[]},{tag:"path",attr:{d:"M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z"},child:[]}]})(e)}const K$=d.section`
  background: linear-gradient(135deg, var(--light-grey-color), #fff);
  position: relative;
  margin-bottom: var(
    --spacing-xxxl
  ); // Adding extra bottom padding for a more balanced layout
`,Z$=d.div`
  max-width: var(--max-width-screen);
  margin: 5rem auto;
  padding: 0 var(--spacing-md);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }
`,J$=d.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
  }
`,eP=d.div`
  flex: 1;
  background: white;
  border-radius: var(--border-radius-medium);
  z-index: 2;
  max-width: 35rem;
  margin-bottom: 3.5rem;
`,tP=d.form`
  margin: 0 auto;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-medium);
  font-family: var(--font-primary);

  p {
    font-size: var(--font-size-body);
    color: var(--dark-grey-color);
    margin-bottom: var(--spacing-lg);
  }
`,rP=d.div`
  flex: 1;
  background: white;
  border-radius: var(--border-radius-medium);
  color: var(--dark-grey-color);
  max-width: 35rem;
  padding: var(--spacing-lg);
  @media (max-width: 1200px) {
    width: 100%;
  }
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-body);
    font-family: var(--font-secondary);

    svg {
      margin-right: var(--spacing-md);
      color: var(--primary-color-dark-3);
      font-size: var(--font-size-h5);
    }

    span {
      color: var(--text-color);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
`,nP=d.div`
  width: 100%;
  height: 300px;
  margin: var(--spacing-xl) 0;
  border-radius: var(--border-radius-medium);
  overflow: hidden;
  box-shadow: var(--shadow-large);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`,kg=d.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border: none;
  border-bottom: 2px solid var(--light-grey-color);
  font-size: var(--font-size-body);
  color: var(--text-color);
  background: none;
  transition: border-color var(--transition-quick);

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--primary-color);
  }
`,iP=d.textarea`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border: none;
  border-bottom: 2px solid var(--light-grey-color);
  font-size: var(--font-size-body);
  color: var(--text-color);
  background: none;
  height: 150px;
  resize: none;
  transition: border-color var(--transition-quick);

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--primary-color);
  }
`,oP=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-large);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  position: relative;

  .info-block {
    width: 100%; /* Ensure it takes the full width of the grid cell */
    max-width: 100%; /* Prevent it from exceeding the grid cell's width */
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-small);
    display: flex;
    align-items: center;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    position: relative;
    margin: 0 auto;

    @media (max-width: 780px) {
      width: 100%;
      max-width: 22rem;
      display: block;
    }

    .icon-circle {
      top: -10px;
      left: -30px;
      z-index: -1;
      position: absolute;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: var(--primary-color-dark-3);
      box-shadow: 0 0 0 0 var(--primary-color);
      transition: box-shadow 0.5s ease;

      svg {
        color: white;
        font-size: 1.5rem;
      }
    }

    &:hover .icon-circle {
      box-shadow: 0 0 20px 5px var(--primary-color);
    }

    span {
      margin-left: var(--spacing-lg);
      color: var(--text-color);
      font-size: var(--font-size-body);
      line-height: 1.8;
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);

    .info-block {
      padding: var(--spacing-md);
      text-align: center;
      flex-direction: column;

      .icon-circle {
        margin-bottom: var(--spacing-md);
      }

      span {
        margin-left: 0;
        font-size: var(--font-size-body-sm);
      }
    }
  }
`,aP=()=>{const r=`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1242362191035!2d${-122.4194}!3d${37.7749}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1619430307215!5m2!1sen!2sin`;return o.jsxs(K$,{children:[o.jsx(Ps,{next:"Shop",imageUrl:"/breadcrumb/natural.jpeg",title:"Contact"}),o.jsxs(Z$,{children:[o.jsxs(J$,{children:[o.jsx(eP,{children:o.jsxs(tP,{children:[o.jsx(oe,{as:"h2",children:"Contact Form"}),o.jsx("p",{children:"Feel free to contact us anytime. We will get back to you as soon as we can!"}),o.jsx(kg,{type:"text",placeholder:"Name"}),o.jsx(kg,{type:"email",placeholder:"Email"}),o.jsx(iP,{placeholder:"Message"}),o.jsx(Xe,{size:"extra-small",children:"Send Message"})]})}),o.jsxs(rP,{children:[o.jsx(oe,{as:"h2",children:"Contact Information"}),o.jsxs("div",{className:"info-item",children:[o.jsx(wz,{}),o.jsx("span",{children:"+33 123 456 789"})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(qC,{}),o.jsx("span",{children:"info@contactme.me"})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(k_,{}),o.jsx("span",{children:"123 Main Street, Anytown, USA Zip: 12345"})]})]})]}),o.jsx(nP,{children:o.jsx("iframe",{title:"Map",src:r,loading:"lazy"})}),o.jsxs(oP,{children:[o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"icon-circle",children:o.jsx(q$,{})}),o.jsxs("div",{children:[o.jsx(oe,{as:"h3",children:"Opening Hours"}),o.jsx("p",{children:"Monday - Friday: 9:00 AM - 5:00 PM"}),o.jsx("p",{children:"Saturday: 10:00 AM - 2:00 PM"}),o.jsx("p",{children:"Sunday: Closed"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"icon-circle",children:o.jsx(Y$,{})}),o.jsxs("div",{children:[o.jsx(oe,{as:"h3",children:"Multiple Locations"}),o.jsx("p",{children:"Main Office: 123 Main Street, Anytown, USA"}),o.jsx("p",{children:"Branch Office: 456 Another St, Sometown, USA"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"icon-circle",children:o.jsx(X$,{})}),o.jsxs("div",{children:[o.jsx(oe,{as:"h3",children:"Quick Contact"}),o.jsx("p",{children:"Email: support@contactme.me"}),o.jsx("p",{children:"Phone: +33 123 456 789"})]})]})]})]})]})};function sP(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M19.828 18.256l-.002.015c249.642 36.995 371.904 169.983 397.32 278.01-2.094 5.977-4.496 11.044-7.068 14.968-17.29 26.383-62.522 40.075-101.654 28.596 5.984-19.75 10.132-39.834 12.07-59.12-95.46 8.177-212.544 8.42-301.207-22.642 41.727 95.317 99.325 164.465 164.983 230.08 18.296-2.164 35.807-11.35 51.837-25.37 85.218 34.667 188.066-2.555 226.748-60.68 46.922-70.5 74.07-317.52-167.462-383.856H232.81c160.326 54.874 195.73 167.74 191.573 239.03-37.15-93.627-137.68-191.855-312.38-239.03H19.83z"},child:[]}]})(e)}const lP=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`,cP=d.div`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
  animation: ${q4} 0.5s ease-in-out;
`,uP=d.img`
  width: 100%;
  height: auto;
  display: block;
`,dP=d.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,fP=d.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  box-shadow: ${({$isActive:e})=>e?"0 0 8px rgba(233, 30, 99, 0.5)":"0 2px 8px rgba(0, 0, 0, 0.1)"};
  opacity: ${({$isActive:e})=>e?1:.5};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`,hP=({images:e,product:t})=>{const[r,n]=b.useState(e[0].image),[i,a]=b.useState(e[0].id),s=l=>{const c=e.find(u=>u.id===l);c&&(n(c.image),a(l))};return b.useEffect(()=>{e.find(l=>l.image===r)||(n(e[0].image),a(e[0].id))},[e,r]),o.jsxs(lP,{children:[o.jsx(cP,{children:o.jsx(uP,{src:`/shop/${t.category}/${r}`,alt:"Main product"})},r),o.jsx(dP,{children:e.map(l=>o.jsx(fP,{$isActive:i===l.id,onMouseEnter:()=>s(l.id),onClick:()=>s(l.id),children:o.jsx("img",{src:`/shop/${t.category}/${l.image}`,alt:`Thumbnail ${l.id}`})},l.id))})]})},pP=d.main`
  height: auto;
  background-color: white;
`,mP=d.section`
  background-color: white;
  padding: 20px;
  @media (max-width: 900px) {
    padding: 0;
  }
  .content {
    padding: 5rem;
    display: grid;
    grid-template-columns: 30% 40% 25%;
    justify-content: space-around;
    margin: auto;
    align-items: center;
    max-width: 1600px;
    /* For screens smaller than 1200px */
    /* For screens smaller than 1400px */
    @media (max-width: 1400px) {
      grid-template-columns: 50% 50%;
      grid-template-rows: auto auto;
      grid-template-areas: "col1 col2";
      gap: 2rem;
      padding: 0;
    }

    /* For screens smaller than 900px */
    @media (max-width: 900px) {
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      grid-template-areas:
        "col1"
        "col2";
      padding: 3rem;
    }

    /* For screens smaller than 600px */
    @media (max-width: 600px) {
      padding: 2rem;
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      gap: 1rem;
    }
  }

  .image-show-case {
    max-width: 45rem;
  }
  .column1 {
    width: 100%;
  }

  .column2 {
    width: 100%;
  }
  .column3 {
    width: 100%;
  }
`,Sg=d.div`
  height: 1px;
  background-color: var(--primary-color-light-5);
  margin: 10px 0;
  width: 80%;
`,gP=d.div`
  background-color: var(--background-color);
  border-radius: var(--border-radius-large);
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: var(--spacing-sm); /* Moderate spacing between sections */
  @media (max-width: 1400px) {
    gap: 0;
  }
  @media (max-width: 900px) {
    margin-top: 0.8rem;
  }
`,vP=d.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-h6);
  color: var(--primary-color-dark-4);
  margin-bottom: var(--spacing-sm);
`,xP=d(oe)`
  margin: 0;
`,yP=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
`,wP=d(ge)``,bP=d.div`
  color: #ffcd00;
`,jP=d.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  color: var(--grey-color);
`,kP=d.div`
  /* margin-bottom: var(--spacing-sm); */
`,SP=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm); /* Moderate spacing between meta sections */
`,CP=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,EP=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--dark-grey-color);
`,Cg=d.li`
  margin-bottom: var(--spacing-xs);
`,zP=d.div`
  margin: var(--spacing-sm) 0;
`,_P=d(ge)`
  color: var(--accent-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: color var(--transition-quick);

  &:hover {
    color: var(--accent-color-light-1);
  }

  svg {
    margin-right: var(--spacing-xs);
    font-size: 1.2rem;
  }
`,Eg=d.div`
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--dark-grey-color);
`,$P=d.p`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin: var(--spacing-sm) auto;
`,PP=d.div`
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  color: var(--accent-color);
  margin-left: var(--spacing-sm);
  cursor: pointer;
  transition: color var(--transition-quick);

  &:hover {
    color: var(--accent-color-light-1);
  }
`;d.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);

  img {
    width: 50px;
    height: auto;
    transition: transform var(--transition-quick);

    &:hover {
      transform: scale(1.1);
    }
  }
`;const TP=d.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid var(--primary-color-dark-1);
  background-color: var(--primary-color-light-9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  @media (max-width: 1400px) {
    display: none;
  }
`,zg=d.span`
  font-size: var(--font-size-body);
  color: var(--accent-color);
  font-weight: 700;
`;d.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: var(--spacing-xs);
  }

  &:hover {
    color: var(--primary-color-dark-3);

    svg {
      color: var(--primary-color-dark-3);
    }
  }
`;d.p`
  color: var(--primary-color-dark-2);
  font-size: var(--font-size-body);
`;const LP=d.div`
  margin-bottom: var(--spacing-lg);
`,vl=d.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  transition: color 0.3s ease-in-out;

  .icon {
    margin-right: var(--spacing-md);
    font-size: var(--font-size-h4);
    color: var(--accent-color);
    flex: 0.14;
  }

  &:hover .icon {
    color: var(--primary-color);
  }
`,Od=d.p`
  font-size: var(--font-size-small);
  color: var(--text-color-dark);
  margin: 0;
  flex: 1;
  font-family: var(--font-secondary);
  strong {
    color: var(--accent-color);
    font-weight: 700;
  }
`,AP=d.div`
  display: flex;
  gap: var(--spacing-sm);
`,IP=d.div`
  width: var(--font-size-h6);
  height: var(--font-size-h6);
  border: none;
  background-color: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 1.1rem;
  &.selected-size {
    background-color: black;
    color: #fff;
  }

  &:hover {
    color: #fff;
    background-color: grey;
  }
`,RP=d.span`
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
`,q3=d(ge)`
  margin-bottom: 0.6rem;
  svg {
    color: var(--accent-color);
  }
`,MP=d(q3)`
  margin-top: 0.5rem;
  margin-bottom: 0;
  @media (min-width: 1400px) {
    display: none;
  }
`,_g=d.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  @media (max-width: 1400px) {
    margin-bottom: 0;
  }
`,$g=d.p`
  margin-right: var(--spacing-md);
  font-weight: 700;
  font-size: var(--font-size-h6);
  color: var(--text-color-dark);
  font-family: var(--font-primary);
`,NP=d(ge)`
  margin-bottom: var(--spacing-md);
  @media (max-width: 1400px) {
    margin-bottom: 0px;
  }
`,OP=d(ge)`
  @media (max-width: 1400px) {
    margin-bottom: var(--spacing-md);
  }
`,DP=d.div`
  display: block;
  @media (min-width: 1400px) {
    display: none;
  }
`,Pg=({product:e,onSelectedSize:t,selectedSize:r,quantity:n,onSelectQuantity:i,dispatch:a})=>{const s=Cr();return o.jsxs(o.Fragment,{children:[o.jsxs(OP,{type:"horizontal",$justifyContent:"center",$alignItems:"center",$flexGap:"1.2rem",children:[e.sizes&&o.jsxs(_g,{type:"vertical",$justifyContent:"center",$alignItems:"center",$flexGap:".2rem",children:[o.jsx($g,{children:"Sizes:"}),o.jsx(AP,{children:e.sizes.map((l,c)=>o.jsx(IP,{className:r===l?"selected-size":"",onClick:()=>t(l),children:o.jsx(RP,{children:l})},c))})]}),o.jsxs(_g,{children:[o.jsx($g,{children:"Quantity:"}),o.jsx(Au,{size:"normal",productId:e.id,quantity:n,onQuantityChange:i,color:"var(--accent-color)"})]})]}),o.jsxs(NP,{$flexGap:".8rem",children:[o.jsx(Xe,{size:"extra-small",color:"var(--accent-color)",$invert:!0,onClick:()=>{w0(e,a,n),s("/cart-summary")},children:"Add to Cart"}),o.jsx(Xe,{size:"extra-small",color:"var(--accent-color)",onClick:()=>{w0(e,a,n),s("/cart-summary")},className:"btn-color-inv",children:"Buy Now"})]})]})},FP=d.div`
  max-width: 800px;
  border-radius: var(--border-radius-medium);
`,BP=d.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-h5);
  color: var(--text-color);
  margin: var(--spacing-sm) 0;
`,UP=d.p`
  font-family: var(--font-secondary);
  color: var(--grey-color);
  font-size: var(--font-size-body);
`,HP=d.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,WP=d.textarea`
  grid-column: 1 / 3;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-medium);
  border: 1px solid var(--light-grey-color);
  resize: none;
  height: 150px;
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--text-color);
  box-shadow: var(--shadow-small);
  transition: border-color var(--transition-quick);

  &:focus {
    border-color: var(--primary-color);
  }

  @media (max-width: 720px) {
    grid-column: 1;
  }
`,Tg=d.div`
  position: relative;
`,Lg=d.input`
  width: 100%;
  padding: var(--spacing-sm);
  padding-left: 2.5rem;
  border-radius: var(--border-radius-medium);
  border: 1px solid var(--light-grey-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--text-color);
  box-shadow: var(--shadow-small);
  transition: border-color var(--transition-quick);

  &:focus {
    border-color: var(--primary-color);
  }
`,Ag=d.div`
  position: absolute;
  top: 50%;
  left: var(--spacing-sm);
  transform: translateY(-50%);
  color: var(--accent-color);
`,VP=d.div`
  grid-column: 1 / 3;
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    grid-column: 1;
  }
`,GP=d.label`
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--text-color);
  margin-right: var(--spacing-sm);
`,qP=d.div`
  display: flex;
`,sa=d.span`
  font-size: 1.5rem;
  color: var(--primary-color-dark-4);
  cursor: pointer;
  transition: color var(--transition-quick);

  &:hover,
  &:focus {
    color: var(--accent-color-light-1);
  }
`,YP=d.button`
  grid-column: 1 / 3;
  padding: var(--spacing-sm);
  background-color: var(--accent-color);
  color: var(--background-color);
  border: none;
  border-radius: var(--border-radius-large);
  font-family: var(--font-secondary);
  font-size: var(--font-size-button);
  cursor: pointer;
  transition: background-color var(--transition-quick);
  box-shadow: var(--shadow-medium);

  &:hover {
    background-color: var(--accent-color-light-1);
  }

  @media (max-width: 720px) {
    grid-column: 1;
  }
`,XP=({product:e})=>o.jsxs(FP,{children:[o.jsxs(BP,{children:["Be the first to review ",e.title]}),o.jsx(UP,{children:"Your email address remains confidential. Required fields are noted with *"}),o.jsxs(HP,{children:[o.jsx(WP,{placeholder:"Your Review*"}),o.jsxs(Tg,{children:[o.jsx(Lg,{placeholder:"Name*"}),o.jsx(Ag,{children:o.jsx(f0,{})})]}),o.jsxs(Tg,{children:[o.jsx(Lg,{placeholder:"E-mail*"}),o.jsx(Ag,{children:o.jsx(sh,{})})]}),o.jsxs(VP,{children:[o.jsx(GP,{children:"Your Rating :"}),o.jsxs(qP,{children:[o.jsx(sa,{children:"☆"}),o.jsx(sa,{children:"☆"}),o.jsx(sa,{children:"☆"}),o.jsx(sa,{children:"☆"}),o.jsx(sa,{children:"☆"})]})]}),o.jsx(YP,{children:"Submit ➔"})]})]}),QP=d.div`
  max-width: var(--max-width-screen);
  margin: 0 auto;
  padding: var(--spacing-lg);
  background-color: var(--background-color);
  border-radius: var(--border-radius-large);
  @media (max-width: 560px) {
    padding: 0;
  }
  @media (max-width: 900px) {
    padding-top: 0;
  }
`,KP=d.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--light-grey-color);
  margin-bottom: var(--spacing-md);
`,Dd=d.button`
  flex: 1;
  text-align: center;
  padding: var(--spacing-sm) 0;
  cursor: pointer;
  background-color: ${({$active:e})=>e?"var(--background-primary-transparent)":"transparent"};
  border: none;
  border-bottom: ${({$active:e})=>e?"3px solid var(--accent-color)":"none"};
  color: ${({$active:e})=>e?"var(--accent-color)":"var(--dark-grey-color)"};
  font-weight: ${({$active:e})=>e?"bold":"normal"};
  font-size: var(--font-size-h5);
  transition:
    color var(--transition-quick),
    border-color var(--transition-quick),
    transform var(--transition-quick);

  &:hover {
    color: var(--accent-color);
  }

  svg {
    margin-right: var(--spacing-xs);
  }
`,Fd=d.div`
  font-size: var(--font-size-h6);
  @media (max-width: 700px) {
    svg {
      display: none;
    }
  }
`,Bd=d.div`
  padding: var(--spacing-xl);
  background-color: var(--background-primary-transparent-2);
  border-radius: var(--border-radius-medium);
  line-height: 1.8;
  ${({$isExiting:e})=>e?ve`
          animation: ${F9} 0.5s ease-in-out forwards;
        `:ve`
          animation: ${D9} 0.5s ease-in-out forwards;
        `}
`,ln=d.p`
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-body);
  line-height: 1.7;
  color: var(--text-color-dark);
`,Ud=d.h3`
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-h4);
  font-weight: bold;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-left: 4px solid var(--accent-color);
  padding-left: var(--spacing-sm);
`,ZP=d.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  list-style: none;
  margin-bottom: var(--spacing-sm);
  gap: 0.6rem;
`,JP=d.li`
  display: flex;
  align-items: center;
  background-color: var(--background-light);
  border-radius: var(--border-radius-small);
  font-size: var(--font-size-body);
  color: var(--text-color-dark);
  max-width: 12rem;
  padding: var(--spacing-xs) var(--spacing-sm); /* Add padding for better spacing */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow for elevation */
  @media (max-width: 768px) {
    max-width: 100%; /* Full width on smaller screens */
    margin-bottom: var(--spacing-xs); /* Space between items */
  }

  svg {
    flex: 0 0 auto; /* Prevent svg from shrinking */
    color: var(--accent-color);
    margin-right: var(--spacing-xs);
  }
`,eT=d.span`
  display: block;
`,tT=({product:e})=>{const[t,r]=b.useState("description"),[n,i]=b.useState(!1),a=l=>{l!==t&&(i(!0),setTimeout(()=>{r(l),i(!1)},500))},s=()=>{switch(t){case"description":return o.jsxs(Bd,{$isExiting:n,children:[o.jsx(Ud,{children:"Description"}),o.jsx(ln,{children:e.description}),o.jsxs(ln,{children:["This product is part of our ",e.category," collection, under the ",e.subcategory," subcategory, and is crafted with high-quality ingredients."]}),o.jsx(ln,{children:"Use this daily for best results. Perfect for all skin types, it absorbs quickly without leaving a greasy residue."})]});case"additional":return o.jsxs(Bd,{$isExiting:n,children:[o.jsx(Ud,{children:"Additional Information"}),o.jsx(ln,{children:"This product includes the following high-quality materials:"}),o.jsx(ZP,{children:e.materials.map((l,c)=>o.jsxs(JP,{children:[o.jsx(Vb,{})," ",o.jsx(eT,{children:l})]},c))}),o.jsx(ln,{children:"Sustainably sourced and environmentally friendly, this product supports your beauty while respecting nature."}),o.jsx(ln,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis sequi expedita vel voluptas minima, laborum, harum impedit et recusandae labore! Quibusdam laboriosam laudantium accusamus obcaecati ducimus voluptas minus ipsum. Quis mollitia, aut autem nemo dolor, quisquam in eos odit veritatis exercitationem ea? Dolor omnis sed at nisi molestiae voluptatem. Eius ut consequatur ad itaque. Velit asperiores voluptatum aperiam dolorum!"}),o.jsx(ln,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis sequi expedita vel voluptas minima, laborum, harum impedit et recusandae labore! Quibusdam laboriosam laudantium accusamus obcaecati ducimus voluptas minus ipsum. Quis mollitia, aut autem nemo dolor, quisquam in eos odit veritatis exercitationem ea? Dolor omnis sed at nisi molestiae voluptatem. Eius ut consequatur ad itaque. Velit asperiores voluptatum aperiam dolorum!"})]});case"reviews":return o.jsxs(Bd,{$isExiting:n,children:[o.jsx(Ud,{children:"Reviews"}),o.jsx(ln,{children:"No reviews yet. Be the first to review this product!"}),o.jsx(XP,{product:e})]});default:return null}};return o.jsxs(QP,{children:[o.jsxs(KP,{children:[o.jsx(Dd,{$active:t==="description",onClick:()=>a("description"),children:o.jsxs(Fd,{children:[o.jsx(W5,{})," ",o.jsx("span",{children:"Description"})]})}),o.jsx(Dd,{$active:t==="additional",onClick:()=>a("additional"),children:o.jsxs(Fd,{children:[o.jsx(Xb,{})," ",o.jsx("span",{children:"More Information"})]})}),o.jsx(Dd,{$active:t==="reviews",onClick:()=>a("reviews"),children:o.jsxs(Fd,{children:[o.jsx(Di,{}),o.jsx("span",{children:" Reviews (0)"})]})})]}),s()]})},rT=()=>{const e=zr(),t=w4(),[r,n]=b.useState(""),[i,a]=b.useState(1);return b.useEffect(()=>{n(t.sizes[0]),a(1)},[t.slug,t.sizes]),o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"Shop",next2:["Product Detail","/all-products"],title:"Product",maxWidth:"1600px"}),o.jsx(pP,{children:o.jsx(mP,{className:"container",children:o.jsxs("div",{className:"content",children:[o.jsx("div",{className:"column1",children:o.jsx("div",{className:"image-show-case",children:o.jsx(hP,{images:IC(t),product:t})})}),o.jsx("div",{className:"column2",children:o.jsxs(gP,{children:[o.jsxs(ge,{type:"horizontal",$justifyContent:"space-between",$alignItems:"center",children:[o.jsxs(vP,{children:[t.category.charAt(0).toUpperCase()+t.category.slice(1)," ","/ ",t.subcategory]}),o.jsx(gh,{product:t,WrapperComponent:y0})]}),o.jsx(yP,{children:o.jsxs(wP,{$justifyContent:"space-around",$alignItems:"center",$flexGap:".5rem",type:"horizontal",children:[o.jsx(bP,{children:_u(t.rating.rate)}),o.jsxs(jP,{children:[t.orders," Sold"]})]})}),o.jsx(xP,{as:"h2",children:t.title}),o.jsx(kP,{children:o.jsx(Es,{product:t,$fontSize:"var(--font-size-h4)",$color:"red"})}),o.jsxs(SP,{children:[o.jsxs(CP,{children:[o.jsxs(EP,{children:[o.jsxs(Cg,{children:[o.jsx("strong",{children:"Material"}),":"," ",t.materials.join(", "),"."]}),o.jsxs(Cg,{children:[o.jsx("strong",{children:"Brand"}),": ",t.brand]})]}),o.jsx(DP,{children:o.jsx(Pg,{product:t,onSelectedSize:n,selectedSize:r,quantity:i,onSelectQuantity:a,dispatch:e})}),o.jsx(zP,{children:o.jsxs(_P,{type:"horizontal",$justifyContent:"flex-start",$alignItems:"center",$flexGap:".4rem",children:[o.jsx(YC,{}),o.jsx("span",{children:"Return and Refund Policy"})]})}),o.jsxs(Eg,{children:[o.jsx("strong",{children:"Shipping options"}),o.jsx(Sg,{}),o.jsx($P,{children:"Find out delivery times and shipping methods:"}),o.jsxs(vl,{children:[o.jsx(G$,{size:"1.2rem"}),o.jsx(PP,{children:o.jsx("strong",{children:"Calculate price and delivery time"})})]})]})]}),o.jsxs(Eg,{children:[o.jsx("strong",{children:"Payment options"}),o.jsx(Sg,{}),o.jsx(E3,{})]}),o.jsxs(MP,{type:"horizontal",$justifyContent:"flex-start",$alignItems:"flex-start",$flexGap:".8rem",children:[o.jsx(zg,{children:"Share: "}),o.jsx(b0,{})]})]})]})}),o.jsx("div",{className:"column3",children:o.jsxs(TP,{children:[" ",o.jsxs("div",{children:[o.jsxs(q3,{type:"horizontal",$justifyContent:"center",$alignItems:"flex-start",$flexGap:".8rem",children:[o.jsx(zg,{children:"Share: "}),o.jsx(b0,{})]}),o.jsxs(LP,{children:[o.jsxs(vl,{children:[o.jsx(sP,{className:"icon"}),o.jsxs(Od,{children:[o.jsx("strong",{children:"Free Returns"}),". You have 30 days from the date of receipt."]})]}),o.jsxs(vl,{children:[o.jsx(Q$,{className:"icon"}),o.jsxs(Od,{children:[o.jsx("strong",{children:"Purchase Guarantee"}),". Receive the product you are expecting or get your money back."]})]}),o.jsxs(vl,{children:[o.jsx(ij,{className:"icon"}),o.jsx(Od,{children:"12-month Factory Warranty."})]})]}),o.jsx(Pg,{product:t,onSelectedSize:n,selectedSize:r,quantity:i,onSelectQuantity:a,dispatch:e})]})]})})]})})}),o.jsx(tT,{product:t}),o.jsx(vh,{title:"RELATED PRODUCT"}),o.jsx(F1,{})]})},nT=d.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width-screen);
  margin: auto;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media (max-width: 1080px) {
    width: 100%;
  }
`,iT=d.div`
  flex: 0.3;
  max-width: 23.5rem;
  position: sticky;
  top: 1rem; // Adjust this value based on your layout needs
  align-self: flex-start;
  @media (max-width: 1080px) {
    display: none;
  }
  /* Add any additional styles you want for the left column */
`,oT=d.div`
  flex: 0.8;
  @media (max-width: 1080px) {
    flex: 1;
  }
  /* You can also use flex-grow: 1; to allow it to flexibly take up remaining space */
`,aT=({dispatchAction:e})=>{const[t,r]=b.useState("/breadcrumb/fashion.jpeg"),{category:n}=ps();return b.useEffect(()=>{const a={haircare:"/breadcrumb/haircare.jpeg",makeup:"/breadcrumb/makeup.jpeg",skincare:"/breadcrumb/skincare.jpeg",wellness:"/breadcrumb/wellness.jpeg",natural:"/breadcrumb/natural.jpeg"}[n]||"/breadcrumb/natural.jpeg";r(a)},[n]),o.jsxs(o.Fragment,{children:[o.jsx(Ps,{next:"Shop",imageUrl:t,title:n||"Shop"}),o.jsxs(nT,{children:[o.jsx(oT,{children:o.jsx(Mu,{dispatchAction:e})}),o.jsx(iT,{children:o.jsx(Ru,{dispatchAction:e})})]}),o.jsx(Ss,{title:!1})]})},sT=d.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width-screen);
  margin: auto;
  margin-top: 1.5rem;
`,lT=d.div`
  flex: 1;
  width: 100%;
`,cT=({dispatchAction:e})=>{const[t,r]=b.useState("/breadcrumb/fashion.jpeg"),{category:n}=ps();return b.useEffect(()=>{const a={haircare:"/breadcrumb/haircare.jpeg",makeup:"/breadcrumb/makeup.jpeg",skincare:"/breadcrumb/skincare.jpeg",wellness:"/breadcrumb/wellness.jpeg",natural:"/breadcrumb/natural.jpeg"}[n]||"/breadcrumb/natural.jpeg";r(a)},[n]),o.jsxs(o.Fragment,{children:[o.jsx(Ps,{next:"Shop",imageUrl:t,title:n||"Shop"}),o.jsx(sT,{children:o.jsx(lT,{children:o.jsx(Mu,{dispatchAction:e})})}),o.jsx(Ss,{title:!1})]})},uT=d.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width-screen);
  margin: auto;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: 5.5rem;

  @media (max-width: 1080px) {
    width: 100%;
  }
`,dT=d.div`
  flex: 0.3;
  max-width: 23.5rem;
  position: sticky;
  top: 1rem;
  align-self: flex-start;
  @media (max-width: 1080px) {
    display: none;
  }
`,fT=d.div`
  flex: 0.8;
  @media (max-width: 1080px) {
    flex: 1;
  }
`,hT=({dispatchAction:e,defaultColumns:t})=>{const{category:r}=ps();return o.jsxs(o.Fragment,{children:[o.jsx(_r,{title:r||"Shop",next:"Shop",maxWidth:"1400px"}),o.jsxs(uT,{children:[o.jsx(dT,{children:o.jsx(Ru,{dispatchAction:e})}),o.jsx(fT,{children:o.jsx(Mu,{dispatchAction:e,defaultColumns:t})})]}),o.jsx(Ss,{title:!1})]})},pT="/aboutUs/seo.png",mT="/aboutUs/iOSDeveloper.png",gT="/aboutUs/leadDesigner.png",vT="/aboutUs/marketingDirector.png",xT="/aboutUs/projectManager.png",yT="/aboutUs/softwareEngineer.png",wT="/aboutUs/parallax-image.jpeg",Hd=d.section`
  max-width: var(--max-width-screen);
  margin: 0 auto 4rem;
  padding: var(--spacing-xxl) var(--spacing-xl);
  background-color: ${({bgColor:e})=>e||"var(--background-color)"};
  @media (max-width: 780px) {
    margin-bottom: 0px;
    padding-bottom: var(--spacing-md);
  }
`,Ig=d.div`
  display: flex;
  flex-direction: ${({direction:e})=>e||"row"};
  align-items: center;
  justify-content: space-around;
  gap: var(--spacing-xxl);
  flex-wrap: wrap;
  max-width: 1370px;
  margin: auto;
  @media (max-width: 640px) {
    gap: var(--spacing-md);
  }
`,bT=d.div`
  flex: 2;
  max-width: 600px;
  @media (max-width: 640px) {
    margin-bottom: var(--spacing-xl);
  }
  h1,
  h2 {
    font-family: var(--font-secondary);
    font-size: ${({size:e})=>e||"var(--font-size-h1)"};
    color: var(--text-color);
    margin-bottom: var(--spacing-lg);
  }

  p {
    font-family: var(--font-primary);
    font-size: var(--font-size-body);
    line-height: 1.6;
    color: var(--grey-color);
    margin-bottom: var(--spacing-lg);
  }
`,jT=d.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
`,Ri=d.div`
  position: relative;
  width: 250px;
  text-align: center;
  background-color: var(--primary-color-light-8);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-medium);
  transition: var(--transition-normal);
  overflow: hidden;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: var(--border-radius-large);
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-family: var(--font-secondary);
    font-size: var(--font-size-h5);
    color: var(--text-color);
    margin-bottom: var(--spacing-xs);
  }

  p {
    font-family: var(--font-primary);
    font-size: var(--font-size-small);
    color: var(--dark-grey-color);
    margin-bottom: var(--spacing-sm);
  }

  &:hover .social-icons {
    transform: translateY(0);
    opacity: 1;
  }
`,Mi=d.div`
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Set a fixed width */
    height: 40px; /* Set a fixed height */
    background-color: white;
    border-radius: 50%; /* Make it a perfect circle */
    transition: all 0.3s ease-in-out;
  }

  svg {
    font-size: var(--font-size-h5);
    color: var(--primary-color-dark-5);
  }
`,kT=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  text-align: center;

  @media (max-width: 1024px) {
    gap: var(--spacing-md);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
`,xl=d.div`
  padding: clamp(1rem, 2vw, var(--spacing-md));
  border-radius: var(--border-radius-large);
  background-color: var(--primary-color-light-9);
  box-shadow: var(--shadow-medium);
  transition: transform var(--transition-quick);

  &:hover {
    box-shadow: var(--shadow-large);
  }

  @media (max-width: 480px) {
    padding: var(--spacing-sm);
  }
`,yl=d.div`
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color-dark-3);
`,wl=d.p`
  font-size: var(--font-size-body);
  color: var(--text-color);
`,ST=d.section`
  background-color: var(--light-grey-color);
  padding: var(--spacing-xxl) 0;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`,Wd=d.div`
  position: relative;
  max-width: var(--max-width-screen);
  width: 100%;
  padding: 0 var(--spacing-lg);
  z-index: 2;
  margin: auto;
`,bl=d.h2`
  font-size: var(--font-size-h2);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  color: ${({$color:e})=>e||"var(--primary-color-dark-3)"};
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -var(--spacing-sm);
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
  }
`,Vd=d.p`
  font-size: var(--font-size-body);
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${({$color:e})=>e||"var(--text-color)"};
  margin-bottom: ${({$marginBottom:e})=>e||"2rem"};
  max-width: 800px;
  line-height: 1.8;
  margin-left: auto;
  margin-right: auto;
`,CT=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 900px;
  margin: auto;
`,ET=d.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background-color: var(--primary-color-light-3);
`,la=d.div`
  position: relative;
  background-color: var(--background-color);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);
  max-width: 600px;
  width: calc(50% - var(--spacing-lg)); /* Ensures even spacing */
  text-align: center;

  &:nth-child(odd) {
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-self: flex-end;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    width: 1.75rem;
    height: 1.75rem;
    background-color: var(--primary-color);
    border-radius: 50%;
    animation: ${X4} 2s infinite;
  }
`,zT=d(V3.Parallax)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1; /* Layer behind the text */
    pointer-events: none; /* Prevent interference with clicks */
  }
  div {
    padding: 0.8rem;
  }
`,_T=()=>o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"About Us",title:"About Us",maxWidth:"1600px"}),o.jsx(Hd,{children:o.jsxs(Ig,{children:[o.jsxs(bT,{children:[o.jsx(oe,{as:"h1",children:"Meet Our Team of Innovators"}),o.jsx("p",{children:"We are a dynamic group of professionals passionate about delivering excellence. Our team comprises experts from various fields, all working together to create solutions that make a difference."}),o.jsx(Xe,{size:"small",children:"Join Our Team"})]}),o.jsxs(jT,{children:[o.jsxs(Ri,{children:[o.jsx("img",{src:pT,alt:"John Doe"}),o.jsx("h3",{children:"John Doe"}),o.jsx("p",{children:"CEO & Founder"}),o.jsxs(Mi,{className:"social-icons",children:[o.jsx("a",{href:"#","aria-label":"Twitter",children:o.jsx(Ai,{})}),o.jsx("a",{href:"#","aria-label":"LinkedIn",children:o.jsx($i,{})}),o.jsx("a",{href:"#","aria-label":"Instagram",children:o.jsx(Nr,{})})]})]}),o.jsxs(Ri,{children:[o.jsx("img",{src:mT,alt:"Ivan Mathews"}),o.jsx("h3",{children:"Ivan Mathews"}),o.jsx("p",{children:"iOS Developer"}),o.jsxs(Mi,{className:"social-icons",children:[o.jsx("a",{href:"#","aria-label":"Twitter",children:o.jsx(Ai,{})}),o.jsx("a",{href:"#","aria-label":"LinkedIn",children:o.jsx($i,{})}),o.jsx("a",{href:"#","aria-label":"Instagram",children:o.jsx(Nr,{})})]})]})]})]})}),o.jsx(Hd,{children:o.jsxs(Wd,{children:[o.jsx(bl,{children:"Our Core Values"}),o.jsx(Vd,{children:"At the heart of our company lies a commitment to integrity, innovation, and collaboration. These values are essential to delivering the best natural beauty products and services to our clients."}),o.jsxs(kT,{children:[o.jsxs(xl,{children:[o.jsx(yl,{children:o.jsx(W5,{size:50})}),o.jsx(wl,{children:"Integrity in everything we do"})]}),o.jsxs(xl,{children:[o.jsx(yl,{children:o.jsx(Kb,{size:50})}),o.jsx(wl,{children:"Innovation driving our solutions"})]}),o.jsxs(xl,{children:[o.jsx(yl,{children:o.jsx(nj,{size:50})}),o.jsx(wl,{children:"Collaboration across all teams"})]}),o.jsxs(xl,{children:[o.jsx(yl,{children:o.jsx(Zb,{size:50})}),o.jsx(wl,{children:"Customer satisfaction as our top priority"})]})]})]})}),o.jsx(ST,{children:o.jsxs(Wd,{children:[o.jsx(bl,{children:"Our History"}),o.jsx(Vd,{children:"Since our inception, we have pushed the boundaries of what's possible. From a small startup to a global leader, our journey has been marked by unwavering dedication to quality, innovation, and customer satisfaction."}),o.jsxs(CT,{children:[o.jsx(ET,{}),o.jsx(la,{children:"2005: Company founded in a small garage"}),o.jsx(la,{children:"2010: Launched our first innovative product"}),o.jsx(la,{children:"2015: Expanded to international markets"}),o.jsx(la,{children:"2020: Achieved global leader status"}),o.jsx(la,{children:"2023: Celebrated 18 years of excellence"})]})]})}),o.jsxs(Hd,{children:[o.jsx(bl,{children:"Meet More of Our Team"}),o.jsxs(Ig,{direction:"row",children:[o.jsxs(Ri,{children:[o.jsx("img",{src:vT,alt:"Sarah Taylor"}),o.jsx("h3",{children:"Sarah Taylor"}),o.jsx("p",{children:"Marketing Director"}),o.jsxs(Mi,{className:"social-icons",children:[o.jsx("a",{href:"#","aria-label":"Twitter",children:o.jsx(Ai,{})}),o.jsx("a",{href:"#","aria-label":"LinkedIn",children:o.jsx($i,{})}),o.jsx("a",{href:"#","aria-label":"Instagram",children:o.jsx(Nr,{})})]})]}),o.jsxs(Ri,{children:[o.jsx("img",{src:gT,alt:"Lulu Lee"}),o.jsx("h3",{children:"Lulu Lee"}),o.jsx("p",{children:"Lead Designer"}),o.jsxs(Mi,{className:"social-icons",children:[o.jsx("a",{href:"#","aria-label":"Twitter",children:o.jsx(Ai,{})}),o.jsx("a",{href:"#","aria-label":"LinkedIn",children:o.jsx($i,{})}),o.jsx("a",{href:"#","aria-label":"Instagram",children:o.jsx(Nr,{})})]})]}),o.jsxs(Ri,{children:[o.jsx("img",{src:xT,alt:"Emily Davis"}),o.jsx("h3",{children:"Emily Davis"}),o.jsx("p",{children:"Project Manager"}),o.jsxs(Mi,{className:"social-icons",children:[o.jsx("a",{href:"#","aria-label":"Twitter",children:o.jsx(Ai,{})}),o.jsx("a",{href:"#","aria-label":"LinkedIn",children:o.jsx($i,{})}),o.jsx("a",{href:"#","aria-label":"Instagram",children:o.jsx(Nr,{})})]})]}),o.jsxs(Ri,{children:[o.jsx("img",{src:yT,alt:"Gertrude Brown"}),o.jsx("h3",{children:"Gertrude Brown"}),o.jsx("p",{children:"Software Engineer"}),o.jsxs(Mi,{className:"social-icons",children:[o.jsx("a",{href:"#","aria-label":"Twitter",children:o.jsx(Ai,{})}),o.jsx("a",{href:"#","aria-label":"LinkedIn",children:o.jsx($i,{})}),o.jsx("a",{href:"#","aria-label":"Instagram",children:o.jsx(Nr,{})})]})]})]})]}),o.jsx(zT,{bgImage:wT,bgImageStyle:{objectFit:"cover",objectPosition:"top"},children:o.jsx("div",{children:o.jsxs(Wd,{children:[o.jsx(bl,{$color:"var(--primary-color-light-2)",children:"Our Vision"}),o.jsx(Vd,{$color:"var(--primary-color-light-7)",$marginBottom:"0",children:"We aim to create innovative solutions that enhance lives and build a sustainable future. Our team is dedicated to pushing the boundaries of technology, design, and customer service to make a positive impact on the world."})]})})}),o.jsx(G5,{})]}),$T=()=>o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"About Us",title:"About Us",maxWidth:"1600px"}),o.jsx(F1,{})]}),PT=d.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xxl);
  padding-top: 20vh;
  font-family: var(--font-primary);
  color: var(--text-color);
  background-color: var(--primary-color);
`,TT=d.h1`
  font-family: var(--font-primary);
  font-size: 15em;
  font-weight: 100;
  text-shadow:
    1px 1px var(--primary-color-dark-1),
    2px 2px var(--primary-color-dark-1),
    3px 3px var(--primary-color-dark-1),
    /* Continue the shadow pattern as needed */ 26px 26px
      var(--primary-color-dark-5);
`,Rg=d.p`
  font-size: 2em;
  font-weight: 100;
  text-align: center;
`,LT=d.div`
  margin-bottom: 15rem; /* Move margin here for better practice */
`,AT=()=>{const e=b4(),t=Cr();return o.jsxs(PT,{children:[o.jsx(TT,{children:"404"}),o.jsx(Rg,{children:"Oops! Something is wrong."}),o.jsx(Rg,{children:(e==null?void 0:e.data)||(e==null?void 0:e.message)||"Unknown error occurred."}),o.jsx(LT,{children:o.jsxs(Xe,{color:"var(--text-color)",onClick:()=>t(-1),children:[o.jsx("i",{className:"icon-home"})," Go back"]})})]})};function IT(e){return X({attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 3 6 L 3 26 L 12.585938 26 L 16 29.414063 L 19.414063 26 L 29 26 L 29 6 Z M 5 8 L 27 8 L 27 24 L 18.585938 24 L 16 26.585938 L 13.414063 24 L 5 24 Z M 9 11 L 9 13 L 23 13 L 23 11 Z M 9 15 L 9 17 L 23 17 L 23 15 Z M 9 19 L 9 21 L 19 21 L 19 19 Z"},child:[]}]})(e)}function RT(e){return X({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228,112c0,23.6-8.29,45.23-23.35,60.88C190.52,187.57,171.33,196,152,196c-15.45,0-26.78-4.18-34.89-9.31l-9.43,40.06a12,12,0,1,1-23.36-5.5l32-136a12,12,0,1,1,23.36,5.5l-16.45,69.93C126.72,164.86,135.16,172,152,172c25.56,0,52-22.45,52-60A68,68,0,1,0,77.09,146a12,12,0,0,1-20.77,12A92,92,0,1,1,228,112Z"},child:[]}]})(e)}function MT(e){return X({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(e)}const NT=d.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-sm);
  z-index: 2;
`,OT=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: var(--font-size-h3);
    color: var(--primary-color-dark-2);
  }
`,DT=d.div`
  z-index: var(--zindex-tooltip);
  gap: var(--spacing-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: var(--spacing-sm);
  background-color: var(--background-primary-transparent);
  border-radius: var(--border-radius-large);
  opacity: 0;
  transform: perspective(600px) rotateX(-10deg) scale(0.8) translateY(-10px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;

  ${({$visible:e})=>e&&ve`
      opacity: 1;
      transform: perspective(600px) rotateX(0) scale(1) translateY(0);
    `}
`,jl=d.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem; /* Adjust size for a perfect circle */
  height: 2.5rem; /* Adjust size for a perfect circle */
  border-radius: 50%; /* Ensures the circle shape */
  background-color: var(--primary-color); /* Use your primary color */
  color: var(--background-color); /* Use the background color for the icon */
  transition: all var(--transition-normal);

  &:hover {
    background-color: var(--primary-color-dark-3); /* Darker shade on hover */
    transform: scale(1.1) rotate(5deg); /* Slightly increase size and rotate on hover */
  }
`,bh=({id:e})=>{const[t,r]=b.useState({}),n=b.useRef(null),i=l=>{r(c=>({...c,[l]:!c[l]}))},a=()=>{r(l=>({...l,[e]:!1}))},s=l=>t[l]||!1;return M3(n,a,s(e)),o.jsxs(NT,{ref:n,children:[o.jsx(OT,{onClick:()=>i(e),children:o.jsx(S_,{})}),o.jsxs(DT,{$visible:s(e),children:[o.jsx(jl,{children:o.jsx(RT,{size:"1.3rem"})}),o.jsx(jl,{children:o.jsx(z3,{size:"1.3rem"})}),o.jsx(jl,{children:o.jsx(MT,{size:"1.3rem"})}),o.jsx(jl,{children:o.jsx(_E,{size:"1.3rem"})})]})]})},FT=d.section`
  max-width: var(--max-width-screen);
  margin: 0 auto;
  padding: var(--spacing-lg);
  background-color: var(--background-color-light);
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow-lg);
`,jh=d.h2`
  font-size: var(--font-size-h5);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color-dark-2);
  text-align: center;
  border-bottom: 1px solid var(--primary-color-dark-2);
`,BT=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`,UT=d.li`
  display: flex;
  align-items: flex-start;
  border-radius: var(--border-radius-medium);
  background-color: var(--background-color-white);
  box-shadow: var(--box-shadow-sm);
  transition: box-shadow var(--transition-quick);

  &:hover {
    box-shadow: var(--box-shadow-lg);
  }
`,HT=d.img`
  width: 90px;
  height: 90px;
  border-radius: var(--border-radius-small);
  margin-right: var(--spacing-md);
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid var(--primary-color-light);
`,WT=d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,VT=d.span`
  display: inline-block;
  background-color: var(--secondary-color-light);
  color: var(--secondary-color-dark);
  font-weight: 500;
  font-size: var(--font-size-small);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  max-width: fit-content;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,GT=d.h3`
  font-size: var(--font-size-body);
  font-weight: 600;
  color: var(--primary-color-dark-3);
  margin: 0 0 var(--spacing-xs);

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-quick);

    &:hover {
      color: var(--primary-color-dark-1);
      text-decoration: underline;
    }
  }
`,qT=d.time`
  font-size: var(--font-size-small);
  color: var(--gray-color-dark);
`,YT=()=>{const r=Pe(n=>n.blog.articles).slice().sort((n,i)=>new Date(i.created_at)-new Date(n.created_at)).slice(0,3);return o.jsxs(FT,{children:[o.jsx(jh,{children:"Recent Articles"}),o.jsx(BT,{children:r.map(n=>o.jsxs(UT,{children:[o.jsx(HT,{src:`/${n.image}`,alt:n.title}),o.jsxs(WT,{children:[o.jsx(VT,{children:n.category}),o.jsx(GT,{children:o.jsx(re,{to:`/blog/${n.slug}`,children:n.title})}),o.jsx(qT,{children:RC(n.created_at)})]})]},n.id))})]})},XT=d.div`
  padding: var(--spacing-md);
  background-color: var(--background-color);
  border-radius: var(--border-radius-medium);
  margin: 0 auto; /* Center horizontally */
  text-align: left;
`,QT=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,k0=d.li`
  cursor: pointer;
  padding: var(--spacing-xs) 0;
  display: inline-block; /* Ensures underline is only as wide as the content */
  font-family: var(--font-secondary);
  font-weight: ${e=>e.$bold?"bold":"normal"};
  color: var(--grey-color);
  transition:
    color var(--transition-quick),
    transform var(--transition-quick);
  position: relative;

  &:hover {
    color: var(--accent-color);
    transform: translateX(5px); /* Subtle slide effect */
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: width var(--transition-quick);
  }

  &:hover:before {
    width: 100%;
  }
`,Mg=d(HC)`
  margin-right: var(--spacing-xs);
  color: var(--primary-color);
  transition: transform var(--transition-quick);

  ${k0}:hover & {
    transform: rotate(15deg);
  }
`,KT=({selectedCategory:e,handleClick:t})=>{const r=Pe(i=>i.blog.articles),n=r.reduce((i,a)=>(i[a.category]=(i[a.category]||0)+1,i),{});return o.jsxs(XT,{children:[o.jsx(jh,{children:"CATEGORIES"}),o.jsxs(QT,{children:[o.jsxs(k0,{$bold:!e,onClick:()=>t(null),children:[o.jsx(Mg,{}),"All Categories (",r.length,")"]}),Object.keys(n).map(i=>o.jsxs(k0,{$bold:e===i,onClick:()=>t(i),children:[o.jsx(Mg,{}),i," (",n[i],")"]},i))]})]})},ZT=d.div`
  margin-top: 1.5rem;
`,JT=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  justify-content: center;
  /* max-width: 260px; */
  margin: auto;
`,eL=d.span`
  background-color: var(--primary-color-light-7);
  color: var(--text-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition:
    color var(--transition-quick),
    background-color var(--transition-quick);
  border: 1px solid var(--primary-color);

  &:hover {
    background-color: var(--primary-color-dark-1);
    color: var(--background-color);
  }
`,tL=()=>{const e=Pe(r=>r.blog.articles),t=Array.from(new Set(e.flatMap(r=>r.keywords))).slice(0,8);return o.jsx(o.Fragment,{children:o.jsxs(ZT,{children:[o.jsx(jh,{children:"KEYWORDS"}),o.jsx(JT,{children:t.map((r,n)=>o.jsx(eL,{children:r},n))})]})})},rL=d.div``,nL=d.div`
  max-width: 18rem;
  margin: auto;
  width: 100%;
`,In=()=>o.jsx(o.Fragment,{children:o.jsxs(rL,{children:[o.jsx(nL,{children:o.jsx(vh,{initialNum:1,title:null,paddingY:"0"})}),o.jsx(YT,{}),o.jsx(KT,{}),o.jsx(tL,{})]})}),Nu="1400px",iL=d.main`
  background-color: var(--background-color);
  color: var(--text-color);
  padding: var(--spacing-lg) 0;
  max-width: 1600px;
  margin: auto;
`,oL=d.div`
  max-width: 95%;
  margin: auto;
`,aL=d.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: var(--spacing-xl);
  justify-content: space-between;
  margin: 3rem auto;

  @media (max-width: ${Nu}) {
    justify-content: center; /* Center content when Col2 disappears */
  }
`,sL=d.div`
  flex: 0 0 75%;

  @media (max-width: ${Nu}) {
    flex: 0 0 100%; /* Take full width when Col2 disappears */
  }
`,lL=d.div`
  flex: 0 1 22%;

  @media (max-width: ${Nu}) {
    display: none; /* Control when Col2 disappears */
  }
`,cL=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`,uL=d.article`
  background: var(--primary-color-light-8);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-medium);
  overflow: hidden;
  max-width: 100%;
  min-width: 20rem;
`,dL=d(wi)`
  position: relative;
`,fL=d.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-small);
  border-radius: var(--border-radius-small);
  background-color: color-mix(
    in srgb,
    var(--primary-color-dark-1) 75%,
    transparent
  );
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-weight: ${({$isBold:e})=>e?"bold":"normal"};
`,hL=d.div`
  padding: var(--spacing-md);
`,pL=d.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin-bottom: var(--spacing-sm);
  justify-content: space-between;
`,mL=d.span`
  cursor: pointer;
  font-weight: ${({$isBold:e})=>e?"bold":"normal"};
`,gL=d.span`
  cursor: pointer;
`,vL=d(re)`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`,xL=d.div`
  position: relative;
`,yL=d(IT)`
  margin-right: var(--spacing-xs);
  font-size: var(--font-size-h3);
`,wL=d.span`
  position: absolute;
  top: -5px;
  right: 0;
  background-color: var(--primary-color);
  color: var(--primary-color-dark-5);
  border-radius: 50%;
  padding: 0.6rem;
  width: var(--font-size-body);
  height: var(--font-size-body);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-small);
`,bL=d.span`
  margin: 0 var(--spacing-xs);
`,jL=d.h2`
  font-size: var(--font-size-h6);
  margin: var(--spacing-sm) 0;
  color: var(--text-color);
`,kL=d.div`
  position: fixed;
  top: 50%;
  right: 0;
  display: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  svg {
    color: var(--primary-color);
    font-size: var(--font-size-h1);
  }
  @media (max-width: ${Nu}) {
    display: block;
  }
`,SL=d.div`
  margin: 3rem auto;
`,CL=()=>{const e=Pe(l=>l.blog.articles),[t]=b7(),r=t.get("author"),n=t.get("category"),i=Cr(),a=l=>{l!==null&&i(`/blog-grid-layout?category=${encodeURIComponent(l)}`),n===l&&i("/blog-grid-layout")},s=l=>{i(`/blog-grid-layout?author=${encodeURIComponent(l)}`),r===l&&i("/blog-grid-layout")};return e?o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"Blog Grid",title:"Blog Grid",maxWidth:"1600px"}),o.jsxs(iL,{children:[o.jsx(oL,{children:o.jsxs(aL,{children:[o.jsx(sL,{children:o.jsx(cL,{className:"blog-grid__items",children:e.map(l=>o.jsxs(uL,{className:"blog-grid__item",children:[o.jsxs(dL,{children:[o.jsx(re,{to:`/blog/${l.slug}`,children:o.jsx("img",{src:`/${l.image}`,alt:"Blog"})}),o.jsx(bh,{id:l.id}),o.jsx(fL,{$isBold:n===l.category,onClick:()=>a(l.category),children:l.category})]}),o.jsxs(hL,{className:"blog-grid__content",children:[o.jsxs(pL,{className:"blog-grid__meta",children:[o.jsxs(mL,{$isBold:r,onClick:()=>s(l.author),children:["by"," ",o.jsx("span",{className:"blog-grid__author-text",children:l.author})]}),o.jsx(bL,{className:"blog-grid__separator",children:"on"}),o.jsx(gL,{className:"blog-grid__date",children:new Date(l.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),o.jsx(vL,{to:`/blog/${l.slug}#comments-section`,className:"blog-grid__comments",children:o.jsxs(xL,{children:[o.jsx(yL,{}),o.jsx(wL,{className:"blog-grid__comments-count",children:"4"})]})})]}),o.jsx(re,{to:`/blog/${l.slug}`,children:o.jsx(jL,{className:"blog-grid__item-title",children:l.title})}),o.jsx(yi,{$color:"var(--accent-color)",$underlineColor:"var(--accent-color)",children:o.jsx(re,{to:`/blog/${l.slug}`,children:"READ MORE"})})]})]},l.id))})}),o.jsx(lL,{className:"blog-list__col2 multi-carousel",children:o.jsx(In,{})})]})}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"blogSidebar",position:"right",children:o.jsx(kL,{children:o.jsx(Iu,{})})}),o.jsx(me.Content,{name:"blogSidebar",children:o.jsx(SL,{children:o.jsx(In,{})})})]})]})]}):o.jsx("div",{children:"Loading"})};function Bc(){return Bc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Bc.apply(this,arguments)}function EL(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,S0(e,t)}function S0(e,t){return S0=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},S0(e,t)}var kh=function(e){EL(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.getColumns=function(){var i=this.props,a=i.children,s=i.columnsCount,l=Array.from({length:s},function(){return[]}),c=0;return ce.Children.forEach(a,function(u){u&&ce.isValidElement(u)&&(l[c%s].push(u),c++)}),l},r.renderColumns=function(){var i=this.props,a=i.gutter,s=i.itemTag,l=i.itemStyle;return this.getColumns().map(function(c,u){return ce.createElement(s,{key:u,style:Bc({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:a},l)},c.map(function(f){return f}))})},r.render=function(){var i=this.props,a=i.gutter,s=i.className,l=i.style,c=i.containerTag;return ce.createElement(c,{style:Bc({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:a},l),className:s},this.renderColumns())},t}(ce.Component);kh.propTypes={};kh.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};var zL=1,Y3=typeof window<"u"?b.useLayoutEffect:b.useEffect,_L=function(){var t=b.useState(!1),r=t[0],n=t[1];return Y3(function(){n(!0)},[]),r},$L=function(){var t=_L(),r=b.useState(typeof window<"u"?window.innerWidth:0),n=r[0],i=r[1],a=b.useCallback(function(){t&&i(window.innerWidth)},[t]);return Y3(function(){if(t)return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[t,a]),n},X3=function(t){var r=t.columnsCountBreakPoints,n=r===void 0?{350:1,750:2,900:3}:r,i=t.children,a=t.className,s=a===void 0?null:a,l=t.style,c=l===void 0?null:l,u=$L(),f=b.useMemo(function(){var h=Object.keys(n).sort(function(w,x){return w-x}),m=h.length>0?n[h[0]]:zL;return h.forEach(function(w){w<u&&(m=n[w])}),m},[u,n]);return ce.createElement("div",{className:s,style:c},ce.Children.map(i,function(h,m){return ce.cloneElement(h,{key:m,columnsCount:f})}))};X3.propTypes={};const PL=d.div`
  padding: 1rem;
  background-color: #fff;
  color: black;
`,TL=d.div`
  max-width: 70rem;
  margin: 5rem auto;
`,LL=d.div`
  width: 17rem;
  position: relative;
  margin: 0 auto;
`,AL=d.div`
  overflow: hidden;
  width: 15rem;
`,IL=d.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.75rem;
  padding-right: 0.5rem;
  z-index: 1;

  &::before {
    content: "";
    right: 25px;
    top: 0;
    display: block;
    width: 1.5px;
    height: 3rem;
    background-color: rgb(197, 197, 197);
    position: absolute;
  }
`,RL=d(wi)`
  position: relative;
  z-index: 1;
  width: 15rem;
  height: 15rem;
`,ML=d.img`
  width: 100%;
  height: auto;
  display: block;
`,NL=d.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`,OL=d.p`
  font-size: 1rem;
  color: #555;
`,DL=d(ge)`
  margin: 2rem auto;
`,FL=d.div`
  margin-top: 1rem;
`,BL=()=>{const e=Pe(i=>i.blog.articles),[t,r]=b.useState(6),n=()=>{r(i=>i+2)};return o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"Blog Masonry",title:"Blog Masonry",maxWidth:"1600px"}),o.jsx(PL,{children:o.jsxs(TL,{children:[o.jsx(X3,{columnsCountBreakPoints:{350:1,580:2,900:3},children:o.jsx(kh,{gutter:"2.8rem",children:e.slice(0,t).map(i=>o.jsx(LL,{children:o.jsxs(AL,{children:[o.jsx(IL,{children:new Date(i.created_at).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}),o.jsx(RL,{children:o.jsx(re,{to:`/blog/${i.slug}`,children:o.jsx("div",{className:"shine",children:o.jsx(ML,{src:`/${i.image}`,alt:i.title})})})}),o.jsx(bh,{id:i.id}),o.jsxs(re,{to:`/blog/${i.slug}`,children:[" ",o.jsx(NL,{children:i.title})]}),o.jsx(OL,{children:zs(i.body,90)}),o.jsx(FL,{children:o.jsx(yi,{$color:"black",$underlineColor:"black",$size:"var(--font-size-small)",children:o.jsx(re,{to:`/blog/${i.slug}`,children:"READ MORE"})})})]})},i.id))})}),t<e.length&&o.jsx(DL,{$justifyContent:"center",$alignItems:"center",children:o.jsx(F3,{$color:"var(--text-color)",$underlineColor:"var(--text-color)",onClick:n,children:"Show More"})})]})})]})},bi="1120px",UL=d.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: var(--spacing-lg);
  max-width: var(--max-width-screen);
  margin: auto;
  padding-top: var(--spacing-xl);
  width: 95%;
  @media (max-width: 1360px) {
    column-gap: var(--spacing-md);
    justify-content: center;
  }

  @media (max-width: ${bi}) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 90%;
  }
`,HL=d.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-md);
  column-gap: 2.5rem;
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--light-grey-color);
  @media (max-width: ${bi}) {
    grid-template-columns: 1fr;
  }
`,WL=d(wi)`
  position: relative;
  width: 100%;
  padding-top: 75%;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);

  @media (max-width: ${bi}) {
    padding-top: 56.25%;
  }
`,VL=d.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-quick);
`,GL=d.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 740px) {
    gap: 0.8rem;
  }
`,qL=d.h2`
  font-size: var(--font-size-h4);
  color: var(--primary-color-dark-2);
  transition: color var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: ${bi}) {
    font-size: var(--font-size-h4);
  }
`,YL=d.div`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`,XL=d.time``,QL=d.span`
  cursor: pointer;
  margin-left: var(--spacing-sm);
  &:hover {
    color: var(--primary-color);
  }
`,KL=d.span`
  cursor: pointer;
  margin-left: var(--spacing-sm);
  &:hover {
    color: var(--primary-color);
  }
`,ZL=d.p`
  font-size: var(--font-size-body);
  line-height: 1.6;
  color: var(--text-color-dark);

  @media (max-width: ${bi}) {
    font-size: var(--font-size-small);
  }
`,JL=d.section`
  grid-column: 1 / 2;
`,eA=d.aside`
  grid-column: 2 / 3;
  position: sticky;
  top: var(--spacing-xxl);

  @media (max-width: ${bi}) {
    display: none;
  }
`,tA=d.div`
  position: fixed;
  top: 50%;
  right: 0;
  display: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  svg {
    color: var(--primary-color);
    font-size: var(--font-size-h1);
  }
  @media (max-width: ${bi}) {
    display: block;
  }
`,rA=d.div`
  margin: 3rem auto;
`,nA=()=>{const e=Pe(t=>t.blog.articles);return o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"Blog List",title:"Blog List",maxWidth:"1600px"}),o.jsxs(UL,{children:[o.jsx(JL,{as:"section",children:e.map(t=>o.jsxs(HL,{as:"article",children:[o.jsxs(WL,{children:[o.jsx(re,{to:`/blog/${t.slug}`,children:o.jsx(VL,{src:`/${t.image}`,alt:`${t.title} image`})}),o.jsx(bh,{id:t.id})]}),o.jsxs(GL,{children:[o.jsx(re,{to:`/blog/${t.slug}`,children:o.jsx(qL,{as:"h2",children:t.title})}),o.jsxs(YL,{children:[o.jsx(XL,{children:new Date(t.created_at).toDateString()}),o.jsx(QL,{children:t.author}),o.jsx(KL,{children:t.category})]}),o.jsx(ZL,{children:zs(t.body,350)}),o.jsx(ge,{type:"horizontal",$justifyContent:"flex-start",$alignItems:"flex-start",children:o.jsx(yi,{$color:"var(--primary-color-dark-2)",$underlineColor:"var(--primary-color-dark-2)",children:o.jsx(re,{to:`/blog/${t.slug}`,children:"READ MORE"})})})]})]},t.id))}),o.jsx(eA,{as:"aside",children:o.jsx(In,{})})]}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"blogSidebar",position:"right",children:o.jsx(tA,{children:o.jsx(Iu,{})})}),o.jsx(me.Content,{name:"blogSidebar",children:o.jsx(rA,{children:o.jsx(In,{})})})]})]})},Sh="780px",iA=d.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: var(--spacing-xl);
  max-width: 1200px;
  margin: auto;
  padding: var(--spacing-xl) var(--spacing-md);

  @media (max-width: ${Sh}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`,oA=d.div`
  grid-column: 1 / 2;
`,aA=d.aside`
  grid-column: 2 / 3;
  position: sticky;
  top: var(--spacing-xxl);

  @media (max-width: ${Sh}) {
    display: none;
  }
`,sA=d.article`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--light-grey-color);
  padding-bottom: var(--spacing-lg);
  gap: var(--spacing-md);
  margin-bottom: 1.5rem;
`,lA=d(wi)`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);
`,cA=d.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-quick);
`,uA=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,dA=d.h2`
  font-size: var(--font-size-h4);
  color: var(--primary-color-dark-2);
  transition: color var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }
`,fA=d.div`
  font-size: var(--font-size-small);
  color: var(--grey-color);
`,hA=d.p`
  font-size: var(--font-size-body);
  color: var(--text-color-dark);
  line-height: 1.6;
`,pA=d.div`
  position: fixed;
  top: 50%;
  right: 0;
  display: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  svg {
    color: var(--primary-color);
    font-size: var(--font-size-h1);
  }
  @media (max-width: ${Sh}) {
    display: block;
  }
`,mA=d.div`
  margin: 3rem auto;
`,gA=()=>{const e=Pe(t=>t.blog.articles);return o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"Blog List",title:"Blog List",maxWidth:"1600px"}),o.jsxs(iA,{children:[o.jsx(oA,{children:e.map(t=>o.jsxs(sA,{children:[o.jsx(lA,{children:o.jsx(re,{to:`/blog/${t.slug}`,children:o.jsx(cA,{src:`/${t.image}`,alt:`${t.title} image`})})}),o.jsxs(uA,{children:[o.jsx(re,{to:`/blog/${t.slug}`,children:o.jsx(dA,{children:t.title})}),o.jsxs(fA,{children:[o.jsx("span",{children:new Date(t.created_at).toDateString()})," |"," ",o.jsx("span",{children:t.author})]}),o.jsx(hA,{children:zs(t.body,150)}),o.jsx(ge,{type:"horizontal",$justifyContent:"flex-start",$alignItems:"flex-start",children:o.jsx(yi,{$color:"var(--primary-color-dark-2)",$underlineColor:"var(--primary-color-dark-2)",children:o.jsx(re,{to:`/blog/${t.slug}`,children:"READ MORE"})})})]})]},t.id))}),o.jsx(aA,{children:o.jsx(In,{})})]}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"blogSidebar",position:"right",children:o.jsx(pA,{children:o.jsx(Iu,{})})}),o.jsx(me.Content,{name:"blogSidebar",children:o.jsx(mA,{children:o.jsx(In,{})})})]})]})},vA=d.section`
  position: relative;
  width: 100%;
  background: var(--background-color);
  padding: var(--spacing-xxl);
  @media (max-width: 580px) {
    padding: var(--spacing-lg);
  }
  @media only screen and (min-width: 1024px) {
    margin: 0 auto var(--spacing-xxxl);
  }
`,Ng=d.div`
  margin-bottom: 5rem;
`,Og=d.h2`
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--font-secondary);
  position: relative;
  font-size: var(--font-size-h4);

  &::after {
    content: "";
    display: block;
    width: 4em;
    height: 0.25em;
    background: var(--secondary-color);
    margin-top: var(--spacing-sm);
  }
`,xA=d.div`
  margin-top: var(--spacing-xl);
`,Dg=d.div`
  display: flex;
  margin-bottom: var(--spacing-xl);
`,Fg=d.div`
  flex: 0 0 3rem;
  height: 3rem;
  color: var(--light-grey-color);
  margin-right: var(--spacing-md);

  svg {
    width: 100%;
    height: 100%;
  }
`,Bg=d.div`
  flex: 1;
  color: var(--text-color);
`,Ug=d.div`
  font-weight: bold;
  margin-bottom: var(--spacing-xs);
`,Hg=d.p`
  font-size: var(--font-size-body);
  line-height: 1.5;
  margin: 0;
`,yA=d.form`
  display: flex;
  flex-direction: column;
`,wA=d.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--spacing-xxl);
  width: 100%;
  justify-content: center;

  .col-1 {
    flex: 0.5;
  }
  .col-2 {
    flex: 1.5;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`,Gd=d.div`
  position: relative;
  width: 100%;
  margin: var(--spacing-md) 0;
`,Pa=d.label`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font: 700 var(--font-size-h6) var(--font-secondary);
  cursor: text;
  pointer-events: none;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.1875rem;
    background: var(--secondary-color);
    bottom: 1em;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-normal);
  }
`,Yl=d.span`
  display: block;
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform var(--transition-normal),
    opacity var(--transition-normal);
  will-change: transform, opacity;
`,Wg=d.input`
  position: relative;
  width: 100%;
  padding: 1.2em 0;
  border: 0;
  outline: 0;
  margin: 1.2em 0;
  border-bottom: 0.1875rem solid var(--light-grey-color);
  background: transparent;
  vertical-align: bottom;
  font: 400 var(--font-size-body) var(--font-secondary);

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
  }

  &:focus + ${Pa} ${Yl} {
    transform: translateY(0);
    opacity: 1;
  }

  &:focus + ${Pa}::after {
    transform: scaleX(1);
  }
`,bA=d.textarea`
  position: relative;
  width: 100%;
  border: 0;
  outline: 0;
  margin: 3.45em 0;
  border-bottom: 0.1875rem solid var(--light-grey-color);
  background: transparent;
  vertical-align: bottom;
  min-height: 9.69rem;
`,jA=d.input`
  align-self: flex-start;
  background-color: var(--secondary-color);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--font-size-button);
  color: var(--text-color);
  border-radius: var(--border-radius-medium);
  transition: background-color var(--transition-quick);

  &:hover {
    background-color: var(--primary-color);
  }
`,kA=()=>o.jsxs(vA,{children:[o.jsxs(Ng,{children:[o.jsx(Og,{children:"2 Comments"}),o.jsxs(xA,{children:[o.jsxs(Dg,{children:[o.jsx(Fg,{children:o.jsx(Um,{})}),o.jsxs(Bg,{children:[o.jsx(Ug,{children:"2024-05-02 Emily Clark"}),o.jsx(Hg,{children:"These beauty tips are really helpful. My skin feels amazing!"})]})]}),o.jsxs(Dg,{children:[o.jsx(Fg,{children:o.jsx(Um,{})}),o.jsxs(Bg,{children:[o.jsx(Ug,{children:"2024-05-02 Michael Smith"}),o.jsx(Hg,{children:"I appreciate the makeup hacks. Saving so much time in the morning now!"})]})]})]})]}),o.jsxs(Ng,{children:[o.jsx(Og,{children:"Leave a Comment"}),o.jsxs(yA,{children:[o.jsxs(wA,{children:[o.jsxs("div",{className:"col-1",children:[o.jsxs(Gd,{children:[o.jsx(Wg,{id:"comments__form-input-name",name:"author",placeholder:"Name",type:"text"}),o.jsx(Pa,{htmlFor:"comments__form-input-name",children:o.jsx(Yl,{children:"Name"})})]}),o.jsxs(Gd,{children:[o.jsx(Wg,{id:"comments__form-input-email",name:"author",placeholder:"E-mail",type:"text"}),o.jsx(Pa,{htmlFor:"comments__form-input-email",children:o.jsx(Yl,{children:"E-mail"})})]})]}),o.jsx("div",{className:"col-2",children:o.jsxs(Gd,{children:[o.jsx(bA,{id:"comments__form-textarea",name:"author",placeholder:"Express your thoughts"}),o.jsx(Pa,{htmlFor:"comments__form-textarea",children:o.jsx(Yl,{children:"Express your thoughts"})})]})})]}),o.jsx(jA,{name:"submit",type:"submit",id:"submit",value:"Post Comment"})]})]})]}),Q3="1100px",SA=d.div`
  display: flex;
  margin: var(--spacing-lg) auto;
  max-width: var(--max-width-screen);
`,CA=d.div`
  flex: 1;
`,EA=d.div`
  flex: 0.25;
  padding-left: var(--spacing-lg);
  @media (max-width: ${Q3}) {
    display: none;
  }
`,zA=d.div`
  width: 100%;
  padding: 0 var(--spacing-xl);
  margin: auto;
  @media (max-width: 1020px) {
    width: 90%;
    padding: 0;
  }
`,_A=d.header`
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--light-grey-color);
  padding-bottom: var(--spacing-md);
`,$A=d.h1`
  font-size: var(--font-size-h2);
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
`,PA=d.div`
  display: flex;
  gap: var(--spacing-sm);
  color: var(--grey-color);
`,kl=d(re)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,TA=d.span`
  color: var(--grey-color);
`,LA=d.div`
  margin-top: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  .social-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
    transition: color var(--transition-quick);
    &:hover {
      color: var(--primary-color-dark-1);
    }
  }
`,AA=d(wi)`
  max-width: 600px;
  max-height: 400px;
  margin: var(--spacing-xxl) auto;
  overflow: hidden;
  border-radius: var(--border-radius-medium);

  img {
    width: 100%;
    height: 100%;
    margin-bottom: var(--spacing-lg);
    transition: transform var(--transition-quick);
  }
  @media (max-width: 740px) {
    margin: var(--spacing-md) auto;
  }
  @media (max-width: 430px) {
    margin: 0;
  }
`,IA=d.section`
  font-size: var(--font-size-body);
  line-height: 1.8;

  p {
    margin-bottom: var(--spacing-md);
  }
`,RA=d.blockquote`
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary-color-light-7);
  border-left: 4px solid var(--accent-color);
  font-style: italic;
`,MA=d.h2`
  font-size: var(--font-size-h3);
  margin-top: var(--spacing-lg);
  color: var(--text-color);
`,NA=d(wi)`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: space-between;
  margin: var(--spacing-lg) 0;

  img {
    width: calc(100% / 3);
    height: auto;
    object-fit: cover;
    border-radius: var(--border-radius-medium);
    transition: transform var(--transition-quick);
  }
`,qd=d.h3`
  font-size: var(--font-size-h4);
  margin-top: var(--spacing-md);
  color: var(--text-color);
`,OA=d.div`
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--light-grey-color);

  span {
    font-size: var(--font-size-body);
    font-weight: 600;
  }
`,DA=d.ul`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`,FA=d.li`
  cursor: pointer;
  background-color: var(--light-grey-color);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-small);
  font-size: var(--font-size-body);
  color: var(--text-color);
  transition: background-color var(--transition-quick);

  &:hover {
    background-color: var(--primary-color-light-1);
  }
`,BA=d.footer`
  margin-top: var(--spacing-xl);
  border-top: 1px solid var(--light-grey-color);
  padding-top: var(--spacing-lg);
`,UA=d.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`,HA=d.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  h3 {
    font-size: var(--font-size-h4);
    margin-bottom: var(--spacing-xs);
    color: var(--text-color);
  }

  p {
    color: var(--grey-color-dark-2);
    font-size: var(--font-size-body);
    line-height: 1.5;
  }
`,WA=d.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-lg);
`,VA=d.div`
  button {
    background: none;
    border: none;
    color: var(--text-color-light);
    font-size: var(--font-size-body);
    cursor: not-allowed;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`,GA=d.div`
  button {
    background: none;
    border: none;
    color: var(--text-color-light);
    font-size: var(--font-size-body);
    cursor: not-allowed;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`,qA=d.div`
  position: fixed;
  top: 50%;
  right: 0;
  display: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  svg {
    color: var(--primary-color);
    font-size: var(--font-size-h1);
  }
  @media (max-width: ${Q3}) {
    display: block;
  }
`,YA=d.div`
  margin: 3rem auto;
`,XA=()=>{const{selectedArticle:e,previousArticle:t,nextArticle:r}=w4(),n=Cr(),i=a=>{n(`/blog-grid-layout?tag=${encodeURIComponent(a)}`)};return o.jsxs(o.Fragment,{children:[o.jsx(_r,{next:"Blog Page",title:"Blog Page",maxWidth:"1600px"}),o.jsxs(SA,{children:[o.jsxs(CA,{children:[o.jsxs(zA,{children:[o.jsxs("article",{children:[o.jsxs(_A,{children:[o.jsx($A,{children:e.title}),o.jsxs(PA,{children:[o.jsx(kl,{to:`/blog-grid-layout?author=${encodeURIComponent(e.author)}`,children:e.author}),o.jsx(TA,{children:e.created_at})]}),o.jsxs(LA,{children:[o.jsx("span",{children:"Share:"}),o.jsx(D5,{className:"social-icon"}),o.jsx(U5,{className:"social-icon"}),o.jsx(Nr,{className:"social-icon"}),o.jsx(B5,{className:"social-icon"})]})]}),o.jsx(AA,{children:o.jsx("img",{width:"600",height:"600",src:`/${e.image}`,alt:"Natural beauty product"})}),o.jsxs(IA,{children:[o.jsx("p",{children:e.body}),o.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula lacus at felis ultricies, non lacinia elit auctor. Nulla facilisi. Phasellus non dolor at mauris tempor aliquam."}),o.jsx(RA,{children:'"Natural beauty is about enhancing what you have. Let yourself shine through!" - Anonymous'}),o.jsx(MA,{children:"Top Natural Beauty Trends"}),o.jsx("p",{children:"This season, several trends have stood out:"}),o.jsxs(NA,{children:[o.jsx("img",{src:`/${e.image}`,alt:"Trend 1"}),o.jsx("img",{src:`/${e.image}`,alt:"Trend 2"}),o.jsx("img",{src:`/${e.image}`,alt:"Trend 3"})]}),o.jsx("p",{children:"Each of these trends emphasizes the importance of natural ingredients and sustainable practices."}),o.jsx(qd,{children:"Herbal Skincare"}),o.jsx("p",{children:"Herbal skincare products are gaining popularity for their gentle yet effective properties, providing a natural glow."}),o.jsx(qd,{children:"Eco-Friendly Packaging"}),o.jsx("p",{children:"Sustainable packaging is not just a trend but a necessary shift towards reducing waste and preserving our planet."}),o.jsx(qd,{children:"Organic Makeup"}),o.jsx("p",{children:"Organic makeup products are free from harmful chemicals, ensuring a natural look without compromising your health."})]}),o.jsxs(OA,{children:[o.jsx(Jb,{className:"tags__icon"}),o.jsx("span",{children:"Tags:"}),o.jsx(DA,{children:e.keywords.map((a,s)=>o.jsx(FA,{onClick:()=>i(a),children:a},s))})]}),o.jsx(BA,{children:o.jsx(UA,{children:o.jsxs(HA,{children:[o.jsx("img",{src:"/people/7.jpg",alt:"Author"}),o.jsx(kl,{to:`/blog-grid-layout?author=${encodeURIComponent(e.author)}`,children:o.jsx("h3",{children:e.author})}),o.jsx("p",{children:"I am a natural beauty enthusiast and blogger with over 10 years of experience in the industry. I love to write about the latest trends and share tips on how to enhance your natural beauty. My mission is to inspire others to embrace their true selves."})]})})})]}),o.jsxs(WA,{children:[o.jsx(VA,{className:t?"":"disabled",children:t?o.jsx(kl,{to:`/blog/${t.slug}`,title:t.title,children:"« Previous"}):o.jsx("button",{disabled:!0,children:"« Previous"})}),o.jsx(GA,{className:r?"":"disabled",children:r?o.jsx(kl,{to:`/blog/${r.slug}`,title:r.title,children:"Next »"}):o.jsx("button",{disabled:!0,children:"Next »"})})]})]}),o.jsx(kA,{})]}),o.jsx(EA,{children:o.jsx(In,{})})]}),o.jsxs(me.Provider,{children:[o.jsx(me.Trigger,{opens:"blogSidebar",position:"right",children:o.jsx(qA,{children:o.jsx(Iu,{})})}),o.jsx(me.Content,{name:"blogSidebar",children:o.jsx(YA,{children:o.jsx(In,{})})})]})]})},QA=n7([{element:o.jsx(b_,{}),errorElement:o.jsx(AT,{}),children:[{path:"/",element:o.jsx(fE,{})},{path:"/all-products",element:o.jsx(Ii,{})},{path:"/list-shop",element:o.jsx(Ii,{defaultColumns:2})},{path:"/shop-left-sidebar",element:o.jsx(Ii,{})},{path:"/shop-right-sidebar",element:o.jsx(aT,{})},{path:"/full-width",element:o.jsx(cT,{})},{path:"/breadcrumb-1",element:o.jsx(Ii,{})},{path:"/breadcrumb-2",element:o.jsx(hT,{})},{path:"/shop/:slug",element:o.jsx(rT,{}),loader:({params:e})=>kE(e.slug)},{path:"/product-category/:category",element:o.jsx(Ii,{dispatchAction:!0})},{path:"/cart-summary",element:o.jsx(V$,{})},{path:"/search/:category/:query",element:o.jsx(Ii,{dispatchAction:!0})},{path:"/contact",element:o.jsx(aP,{})},{path:"/about-us",element:o.jsx(_T,{})},{path:"/faq",element:o.jsx($T,{})},{path:"/blog-grid-layout",element:o.jsx(CL,{})},{path:"/blog-masonry",element:o.jsx(BL,{})},{path:"/blog-list",element:o.jsx(nA,{})},{path:"/blog-simple",element:o.jsx(gA,{})},{path:"/blog/:slug",element:o.jsx(XA,{dispatchAction:!0}),loader:({params:e})=>CE(e.slug)}]}]),KA=()=>o.jsxs(o.Fragment,{children:[o.jsx(hE,{}),o.jsx(f7,{router:QA})]}),ZA={products:[],loading:!0,productsByCate:[],filteredProducts:[],activeFilters:{price:{min:0,max:1/0},stars:!1,colors:[],brand:"",sizes:[]},restartFilter:[]},JA=(e,t)=>t.rating.rate-e.rating.rate,Lr=(e,t)=>e.filter(r=>r.price>=t.price.min&&r.price<=t.price.max).filter(r=>t.stars?r.rating.rate>=4:!0).filter(r=>t.colors.length>0?t.colors.some(n=>r.colors.includes(n)):!0).filter(r=>t.brand?r.brand===t.brand:!0).filter(r=>t.sizes.length>0?t.sizes.some(n=>r.sizes.includes(n)):!0),eI=(e=ZA,t)=>{switch(t.type){case"products/set":{const r=t.payload.allProductsData.slice().sort(JA);return{...e,products:r,filteredProducts:r,productsByCate:t.payload.cateProductsData,loading:!1,restartFilter:r}}case"products/category_filter":{const r=e.products.filter(n=>n.category===t.payload);return{...e,restartFilter:r,filteredProducts:r,activeFilters:{price:{min:0,max:1/0},stars:!1,colors:[],brand:"",sizes:[]}}}case"products/reset_category_filter":return{...e,filteredProducts:e.products,restartFilter:e.products,activeFilters:{price:{min:0,max:1/0},stars:!1,colors:[],brand:"",sizes:[]}};case"products/filter_by_price":{const{min:r,max:n}=t.payload,i={...e.activeFilters,price:{min:r,max:n}};return{...e,activeFilters:i,filteredProducts:Lr(e.restartFilter,i)}}case"products/filter_by_stars":{const r={...e.activeFilters,stars:!0};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/r_filter_by_stars":{const r={...e.activeFilters,stars:!1};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/filter_by_colors":{const r={...e.activeFilters,colors:e.activeFilters.colors.includes(t.payload)?e.activeFilters.colors:[...e.activeFilters.colors,t.payload]};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/r_filter_by_colors":{const r={...e.activeFilters,colors:e.activeFilters.colors.filter(n=>n!==t.payload)};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/filter_by_brand":{const r={...e.activeFilters,brand:t.payload};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/r_filter_by_brand":{const r={...e.activeFilters,brand:""};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/filter_by_sizes":{const r={...e.activeFilters,sizes:[t.payload]};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/r_filter_by_sizes":{const r={...e.activeFilters,sizes:[]};return{...e,activeFilters:r,filteredProducts:Lr(e.restartFilter,r)}}case"products/reset_filter":return{...e,filteredProducts:e.restartFilter,activeFilters:{price:{min:0,max:1/0},stars:!1,colors:[],brand:"",sizes:[]}};case"products/sort":return{...e,filteredProducts:t.payload};case"products/filter_by_keywords":{const r=t.payload,n=e.filteredProducts.filter(i=>r.some(a=>{const s=a.toLowerCase();return i.title.toLowerCase().includes(s)||i.description.toLowerCase().includes(s)||s==="discount"&&Object.prototype.hasOwnProperty.call(i,"discount")}));return{...e,filteredProducts:n}}default:return e}},tI=FS({reducer:{products:eI,wishList:OC,shoppingCart:nC,blog:bE}});Xd.createRoot(document.getElementById("root")).render(o.jsx(ce.StrictMode,{children:o.jsx(yk,{store:tI,children:o.jsx(KA,{})})}));
