var IE=Object.defineProperty;var SE=(r,e,n)=>e in r?IE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var Hh=(r,e,n)=>SE(r,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function TE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $h={exports:{}},gl={},Wh={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function CE(){if(Zg)return _e;Zg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,Q={};function H(x,z,ie){this.props=x,this.context=z,this.refs=Q,this.updater=ie||V}H.prototype.isReactComponent={},H.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},H.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ce(){}ce.prototype=H.prototype;function pe(x,z,ie){this.props=x,this.context=z,this.refs=Q,this.updater=ie||V}var he=pe.prototype=new ce;he.constructor=pe,B(he,H.prototype),he.isPureReactComponent=!0;var fe=Array.isArray,Fe=Object.prototype.hasOwnProperty,Ie={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function I(x,z,ie){var ge,me={},Se=null,Ae=null;if(z!=null)for(ge in z.ref!==void 0&&(Ae=z.ref),z.key!==void 0&&(Se=""+z.key),z)Fe.call(z,ge)&&!O.hasOwnProperty(ge)&&(me[ge]=z[ge]);var Pe=arguments.length-2;if(Pe===1)me.children=ie;else if(1<Pe){for(var Ue=Array(Pe),lt=0;lt<Pe;lt++)Ue[lt]=arguments[lt+2];me.children=Ue}if(x&&x.defaultProps)for(ge in Pe=x.defaultProps,Pe)me[ge]===void 0&&(me[ge]=Pe[ge]);return{$$typeof:r,type:x,key:Se,ref:Ae,props:me,_owner:Ie.current}}function T(x,z){return{$$typeof:r,type:x.type,key:z,ref:x.ref,props:x.props,_owner:x._owner}}function P(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function D(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ie){return z[ie]})}var L=/\/+/g;function S(x,z){return typeof x=="object"&&x!==null&&x.key!=null?D(""+x.key):z.toString(36)}function Je(x,z,ie,ge,me){var Se=typeof x;(Se==="undefined"||Se==="boolean")&&(x=null);var Ae=!1;if(x===null)Ae=!0;else switch(Se){case"string":case"number":Ae=!0;break;case"object":switch(x.$$typeof){case r:case e:Ae=!0}}if(Ae)return Ae=x,me=me(Ae),x=ge===""?"."+S(Ae,0):ge,fe(me)?(ie="",x!=null&&(ie=x.replace(L,"$&/")+"/"),Je(me,z,ie,"",function(lt){return lt})):me!=null&&(P(me)&&(me=T(me,ie+(!me.key||Ae&&Ae.key===me.key?"":(""+me.key).replace(L,"$&/")+"/")+x)),z.push(me)),1;if(Ae=0,ge=ge===""?".":ge+":",fe(x))for(var Pe=0;Pe<x.length;Pe++){Se=x[Pe];var Ue=ge+S(Se,Pe);Ae+=Je(Se,z,ie,Ue,me)}else if(Ue=N(x),typeof Ue=="function")for(x=Ue.call(x),Pe=0;!(Se=x.next()).done;)Se=Se.value,Ue=ge+S(Se,Pe++),Ae+=Je(Se,z,ie,Ue,me);else if(Se==="object")throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Ae}function Tt(x,z,ie){if(x==null)return x;var ge=[],me=0;return Je(x,ge,"","",function(Se){return z.call(ie,Se,me++)}),ge}function Ct(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(ie){(x._status===0||x._status===-1)&&(x._status=1,x._result=ie)},function(ie){(x._status===0||x._status===-1)&&(x._status=2,x._result=ie)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var Le={current:null},X={transition:null},se={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:X,ReactCurrentOwner:Ie};function Z(){throw Error("act(...) is not supported in production builds of React.")}return _e.Children={map:Tt,forEach:function(x,z,ie){Tt(x,function(){z.apply(this,arguments)},ie)},count:function(x){var z=0;return Tt(x,function(){z++}),z},toArray:function(x){return Tt(x,function(z){return z})||[]},only:function(x){if(!P(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},_e.Component=H,_e.Fragment=n,_e.Profiler=l,_e.PureComponent=pe,_e.StrictMode=s,_e.Suspense=_,_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,_e.act=Z,_e.cloneElement=function(x,z,ie){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ge=B({},x.props),me=x.key,Se=x.ref,Ae=x._owner;if(z!=null){if(z.ref!==void 0&&(Se=z.ref,Ae=Ie.current),z.key!==void 0&&(me=""+z.key),x.type&&x.type.defaultProps)var Pe=x.type.defaultProps;for(Ue in z)Fe.call(z,Ue)&&!O.hasOwnProperty(Ue)&&(ge[Ue]=z[Ue]===void 0&&Pe!==void 0?Pe[Ue]:z[Ue])}var Ue=arguments.length-2;if(Ue===1)ge.children=ie;else if(1<Ue){Pe=Array(Ue);for(var lt=0;lt<Ue;lt++)Pe[lt]=arguments[lt+2];ge.children=Pe}return{$$typeof:r,type:x.type,key:me,ref:Se,props:ge,_owner:Ae}},_e.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:c,_context:x},x.Consumer=x},_e.createElement=I,_e.createFactory=function(x){var z=I.bind(null,x);return z.type=x,z},_e.createRef=function(){return{current:null}},_e.forwardRef=function(x){return{$$typeof:g,render:x}},_e.isValidElement=P,_e.lazy=function(x){return{$$typeof:R,_payload:{_status:-1,_result:x},_init:Ct}},_e.memo=function(x,z){return{$$typeof:v,type:x,compare:z===void 0?null:z}},_e.startTransition=function(x){var z=X.transition;X.transition={};try{x()}finally{X.transition=z}},_e.unstable_act=Z,_e.useCallback=function(x,z){return Le.current.useCallback(x,z)},_e.useContext=function(x){return Le.current.useContext(x)},_e.useDebugValue=function(){},_e.useDeferredValue=function(x){return Le.current.useDeferredValue(x)},_e.useEffect=function(x,z){return Le.current.useEffect(x,z)},_e.useId=function(){return Le.current.useId()},_e.useImperativeHandle=function(x,z,ie){return Le.current.useImperativeHandle(x,z,ie)},_e.useInsertionEffect=function(x,z){return Le.current.useInsertionEffect(x,z)},_e.useLayoutEffect=function(x,z){return Le.current.useLayoutEffect(x,z)},_e.useMemo=function(x,z){return Le.current.useMemo(x,z)},_e.useReducer=function(x,z,ie){return Le.current.useReducer(x,z,ie)},_e.useRef=function(x){return Le.current.useRef(x)},_e.useState=function(x){return Le.current.useState(x)},_e.useSyncExternalStore=function(x,z,ie){return Le.current.useSyncExternalStore(x,z,ie)},_e.useTransition=function(){return Le.current.useTransition()},_e.version="18.3.1",_e}var em;function Ud(){return em||(em=1,Wh.exports=CE()),Wh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function kE(){if(tm)return gl;tm=1;var r=Ud(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(g,_,v){var R,C={},N=null,V=null;v!==void 0&&(N=""+v),_.key!==void 0&&(N=""+_.key),_.ref!==void 0&&(V=_.ref);for(R in _)s.call(_,R)&&!c.hasOwnProperty(R)&&(C[R]=_[R]);if(g&&g.defaultProps)for(R in _=g.defaultProps,_)C[R]===void 0&&(C[R]=_[R]);return{$$typeof:e,type:g,key:N,ref:V,props:C,_owner:l.current}}return gl.Fragment=n,gl.jsx=h,gl.jsxs=h,gl}var nm;function RE(){return nm||(nm=1,$h.exports=kE()),$h.exports}var Re=RE(),Mn=Ud();const NE=TE(Mn);var fu={},Gh={exports:{}},Gt={},qh={exports:{}},Kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function AE(){return rm||(rm=1,function(r){function e(X,se){var Z=X.length;X.push(se);e:for(;0<Z;){var x=Z-1>>>1,z=X[x];if(0<l(z,se))X[x]=se,X[Z]=z,Z=x;else break e}}function n(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var se=X[0],Z=X.pop();if(Z!==se){X[0]=Z;e:for(var x=0,z=X.length,ie=z>>>1;x<ie;){var ge=2*(x+1)-1,me=X[ge],Se=ge+1,Ae=X[Se];if(0>l(me,Z))Se<z&&0>l(Ae,me)?(X[x]=Ae,X[Se]=Z,x=Se):(X[x]=me,X[ge]=Z,x=ge);else if(Se<z&&0>l(Ae,Z))X[x]=Ae,X[Se]=Z,x=Se;else break e}}return se}function l(X,se){var Z=X.sortIndex-se.sortIndex;return Z!==0?Z:X.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,g=h.now();r.unstable_now=function(){return h.now()-g}}var _=[],v=[],R=1,C=null,N=3,V=!1,B=!1,Q=!1,H=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(X){for(var se=n(v);se!==null;){if(se.callback===null)s(v);else if(se.startTime<=X)s(v),se.sortIndex=se.expirationTime,e(_,se);else break;se=n(v)}}function fe(X){if(Q=!1,he(X),!B)if(n(_)!==null)B=!0,Ct(Fe);else{var se=n(v);se!==null&&Le(fe,se.startTime-X)}}function Fe(X,se){B=!1,Q&&(Q=!1,ce(I),I=-1),V=!0;var Z=N;try{for(he(se),C=n(_);C!==null&&(!(C.expirationTime>se)||X&&!D());){var x=C.callback;if(typeof x=="function"){C.callback=null,N=C.priorityLevel;var z=x(C.expirationTime<=se);se=r.unstable_now(),typeof z=="function"?C.callback=z:C===n(_)&&s(_),he(se)}else s(_);C=n(_)}if(C!==null)var ie=!0;else{var ge=n(v);ge!==null&&Le(fe,ge.startTime-se),ie=!1}return ie}finally{C=null,N=Z,V=!1}}var Ie=!1,O=null,I=-1,T=5,P=-1;function D(){return!(r.unstable_now()-P<T)}function L(){if(O!==null){var X=r.unstable_now();P=X;var se=!0;try{se=O(!0,X)}finally{se?S():(Ie=!1,O=null)}}else Ie=!1}var S;if(typeof pe=="function")S=function(){pe(L)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Tt=Je.port2;Je.port1.onmessage=L,S=function(){Tt.postMessage(null)}}else S=function(){H(L,0)};function Ct(X){O=X,Ie||(Ie=!0,S())}function Le(X,se){I=H(function(){X(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){B||V||(B=!0,Ct(Fe))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return n(_)},r.unstable_next=function(X){switch(N){case 1:case 2:case 3:var se=3;break;default:se=N}var Z=N;N=se;try{return X()}finally{N=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,se){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Z=N;N=X;try{return se()}finally{N=Z}},r.unstable_scheduleCallback=function(X,se,Z){var x=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?x+Z:x):Z=x,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Z+z,X={id:R++,callback:se,priorityLevel:X,startTime:Z,expirationTime:z,sortIndex:-1},Z>x?(X.sortIndex=Z,e(v,X),n(_)===null&&X===n(v)&&(Q?(ce(I),I=-1):Q=!0,Le(fe,Z-x))):(X.sortIndex=z,e(_,X),B||V||(B=!0,Ct(Fe))),X},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(X){var se=N;return function(){var Z=N;N=se;try{return X.apply(this,arguments)}finally{N=Z}}}}(Kh)),Kh}var im;function PE(){return im||(im=1,qh.exports=AE()),qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function OE(){if(sm)return Gt;sm=1;var r=Ud(),e=PE();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(t,i){h(t,i),h(t+"Capture",i)}function h(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},C={};function N(t){return _.call(C,t)?!0:_.call(R,t)?!1:v.test(t)?C[t]=!0:(R[t]=!0,!1)}function V(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B(t,i,o,u){if(i===null||typeof i>"u"||V(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Q(t,i,o,u,d,p,y){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=y}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){H[t]=new Q(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];H[i]=new Q(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){H[t]=new Q(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){H[t]=new Q(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){H[t]=new Q(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){H[t]=new Q(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){H[t]=new Q(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){H[t]=new Q(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){H[t]=new Q(t,5,!1,t.toLowerCase(),null,!1,!1)});var ce=/[\-:]([a-z])/g;function pe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(ce,pe);H[i]=new Q(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(ce,pe);H[i]=new Q(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(ce,pe);H[i]=new Q(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){H[t]=new Q(t,1,!1,t.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){H[t]=new Q(t,1,!1,t.toLowerCase(),null,!0,!0)});function he(t,i,o,u){var d=H.hasOwnProperty(i)?H[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(B(i,o,d,u)&&(o=null),u||d===null?N(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var fe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fe=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),X=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,x;function z(t){if(x===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);x=i&&i[1]||""}return`
`+x+t}var ie=!1;function ge(t,i){if(!t||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var u=U}Reflect.construct(t,[],i)}else{try{i.call()}catch(U){u=U}t.call(i.prototype)}else{try{throw Error()}catch(U){u=U}t()}}catch(U){if(U&&u&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=u.stack.split(`
`),y=d.length-1,E=p.length-1;1<=y&&0<=E&&d[y]!==p[E];)E--;for(;1<=y&&0<=E;y--,E--)if(d[y]!==p[E]){if(y!==1||E!==1)do if(y--,E--,0>E||d[y]!==p[E]){var k=`
`+d[y].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=y&&0<=E);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?z(t):""}function me(t){switch(t.tag){case 5:return z(t.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return t=ge(t.type,!1),t;case 11:return t=ge(t.type.render,!1),t;case 1:return t=ge(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case Ie:return"Portal";case T:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Je:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D:return(t.displayName||"Context")+".Consumer";case P:return(t._context.displayName||"Context")+".Provider";case L:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tt:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case Ct:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function Ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function lt(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(y){u=""+y,p.call(this,y)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(y){u=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function rr(t){t._valueTracker||(t._valueTracker=lt(t))}function ss(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ue(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Dr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yi(t,i){var o=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function os(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vo(t,i){i=i.checked,i!=null&&he(t,"checked",i,!1)}function wo(t,i){vo(t,i);var o=Pe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ls(t,i.type,o):i.hasOwnProperty("defaultValue")&&ls(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Zl(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ls(t,i,o){(i!=="number"||Dr(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ir=Array.isArray;function sr(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Pe(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Eo(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function as(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ir(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Pe(o)}}function us(t,i){var o=Pe(i.value),u=Pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Io(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function nt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rt(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?nt(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var or,So=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=or.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function xr(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wi=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(t){wi.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),vi[i]=vi[t]})});function To(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||vi.hasOwnProperty(t)&&vi[t]?(""+i).trim():i+"px"}function Co(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=To(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var ko=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ro(t,i){if(i){if(ko[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function No(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function cs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ao=null,an=null,Vn=null;function hs(t){if(t=el(t)){if(typeof Ao!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Na(i),Ao(t.stateNode,t.type,i))}}function lr(t){an?Vn?Vn.push(t):Vn=[t]:an=t}function Po(){if(an){var t=an,i=Vn;if(Vn=an=null,hs(t),i)for(t=0;t<i.length;t++)hs(i[t])}}function ds(t,i){return t(i)}function Oo(){}var ar=!1;function Do(t,i,o){if(ar)return t(i,o);ar=!0;try{return ds(t,i,o)}finally{ar=!1,(an!==null||Vn!==null)&&(Oo(),Po())}}function Ze(t,i){var o=t.stateNode;if(o===null)return null;var u=Na(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var fs=!1;if(g)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){fs=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{fs=!1}function Ii(t,i,o,u,d,p,y,E,k){var U=Array.prototype.slice.call(arguments,3);try{i.apply(o,U)}catch(W){this.onError(W)}}var Si=!1,ps=null,En=!1,xo=null,mc={onError:function(t){Si=!0,ps=t}};function Lo(t,i,o,u,d,p,y,E,k){Si=!1,ps=null,Ii.apply(mc,arguments)}function _c(t,i,o,u,d,p,y,E,k){if(Lo.apply(this,arguments),Si){if(Si){var U=ps;Si=!1,ps=null}else throw Error(n(198));En||(En=!0,xo=U)}}function In(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ti(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Sn(t){if(In(t)!==t)throw Error(n(188))}function ea(t){var i=t.alternate;if(!i){if(i=In(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Sn(d),t;if(p===u)return Sn(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=p;else{for(var y=!1,E=d.child;E;){if(E===o){y=!0,o=d,u=p;break}if(E===u){y=!0,u=d,o=p;break}E=E.sibling}if(!y){for(E=p.child;E;){if(E===o){y=!0,o=p,u=d;break}if(E===u){y=!0,u=p,o=d;break}E=E.sibling}if(!y)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Mo(t){return t=ea(t),t!==null?gs(t):null}function gs(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=gs(t);if(i!==null)return i;t=t.sibling}return null}var ms=e.unstable_scheduleCallback,bo=e.unstable_cancelCallback,ta=e.unstable_shouldYield,yc=e.unstable_requestPaint,je=e.unstable_now,na=e.unstable_getCurrentPriorityLevel,Ci=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,ra=e.unstable_IdlePriority,ki=null,Zt=null;function ia(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ki,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:oa,Uo=Math.log,sa=Math.LN2;function oa(t){return t>>>=0,t===0?32:31-(Uo(t)/sa|0)|0}var _s=64,ys=4194304;function Mr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ri(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes,y=o&268435455;if(y!==0){var E=y&~d;E!==0?u=Mr(E):(p&=y,p!==0&&(u=Mr(p)))}else y=o&~d,y!==0?u=Mr(y):p!==0&&(u=Mr(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Ot(i),d=1<<o,u|=t[o],i&=~d;return u}function vc(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var y=31-Ot(p),E=1<<y,k=d[y];k===-1?(!(E&o)||E&u)&&(d[y]=vc(E,i)):k<=i&&(t.expiredLanes|=E),p&=~E}}function en(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ni(){var t=_s;return _s<<=1,!(_s&4194240)&&(_s=64),t}function br(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Fr(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ot(i),t[i]=o}function be(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Ot(o),p=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~p}}function Ur(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Ot(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var Ee=0;function jr(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var la,vs,aa,ua,ca,jo=!1,Bn=[],_t=null,Tn=null,Cn=null,zr=new Map,cn=new Map,Hn=[],wc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(t,i){switch(t){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":zr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(i.pointerId)}}function Ut(t,i,o,u,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=el(i),i!==null&&vs(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Ec(t,i,o,u,d){switch(i){case"focusin":return _t=Ut(_t,t,i,o,u,d),!0;case"dragenter":return Tn=Ut(Tn,t,i,o,u,d),!0;case"mouseover":return Cn=Ut(Cn,t,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return zr.set(p,Ut(zr.get(p)||null,t,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,Ut(cn.get(p)||null,t,i,o,u,d)),!0}return!1}function da(t){var i=Di(t.target);if(i!==null){var o=In(i);if(o!==null){if(i=o.tag,i===13){if(i=Ti(o),i!==null){t.blockedOn=i,ca(t.priority,function(){aa(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cr(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ws(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Ei=u,o.target.dispatchEvent(u),Ei=null}else return i=el(o),i!==null&&vs(i),t.blockedOn=o,!1;i.shift()}return!0}function Ai(t,i,o){cr(t)&&o.delete(i)}function fa(){jo=!1,_t!==null&&cr(_t)&&(_t=null),Tn!==null&&cr(Tn)&&(Tn=null),Cn!==null&&cr(Cn)&&(Cn=null),zr.forEach(Ai),cn.forEach(Ai)}function kn(t,i){t.blockedOn===i&&(t.blockedOn=null,jo||(jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fa)))}function Rn(t){function i(d){return kn(d,t)}if(0<Bn.length){kn(Bn[0],t);for(var o=1;o<Bn.length;o++){var u=Bn[o];u.blockedOn===t&&(u.blockedOn=null)}}for(_t!==null&&kn(_t,t),Tn!==null&&kn(Tn,t),Cn!==null&&kn(Cn,t),zr.forEach(i),cn.forEach(i),o=0;o<Hn.length;o++)u=Hn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Hn.length&&(o=Hn[0],o.blockedOn===null);)da(o),o.blockedOn===null&&Hn.shift()}var hr=fe.ReactCurrentBatchConfig,Vr=!0;function Ge(t,i,o,u){var d=Ee,p=hr.transition;hr.transition=null;try{Ee=1,zo(t,i,o,u)}finally{Ee=d,hr.transition=p}}function Ic(t,i,o,u){var d=Ee,p=hr.transition;hr.transition=null;try{Ee=4,zo(t,i,o,u)}finally{Ee=d,hr.transition=p}}function zo(t,i,o,u){if(Vr){var d=ws(t,i,o,u);if(d===null)xc(t,i,u,Pi,o),ha(t,u);else if(Ec(d,t,i,o,u))u.stopPropagation();else if(ha(t,u),i&4&&-1<wc.indexOf(t)){for(;d!==null;){var p=el(d);if(p!==null&&la(p),p=ws(t,i,o,u),p===null&&xc(t,i,u,Pi,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else xc(t,i,u,null,o)}}var Pi=null;function ws(t,i,o,u){if(Pi=null,t=cs(u),t=Di(t),t!==null)if(i=In(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ti(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Pi=t,null}function Vo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(na()){case Ci:return 1;case Lr:return 4;case un:case Fo:return 16;case ra:return 536870912;default:return 16}default:return 16}}var tn=null,Es=null,jt=null;function Bo(){if(jt)return jt;var t,i=Es,o=i.length,u,d="value"in tn?tn.value:tn.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var y=o-t;for(u=1;u<=y&&i[o-u]===d[p-u];u++);return jt=d.slice(t,1<u?1-u:void 0)}function Is(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function $n(){return!0}function Ho(){return!1}function yt(t){function i(o,u,d,p,y){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(o=t[E],this[E]=o?o(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?$n:Ho,this.isPropagationStopped=Ho,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),i}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=yt(Nn),Wn=Z({},Nn,{view:0,detail:0}),Sc=yt(Wn),Ts,dr,Br,Oi=Z({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Br&&(Br&&t.type==="mousemove"?(Ts=t.screenX-Br.screenX,dr=t.screenY-Br.screenY):dr=Ts=0,Br=t),Ts)},movementY:function(t){return"movementY"in t?t.movementY:dr}}),Cs=yt(Oi),$o=Z({},Oi,{dataTransfer:0}),pa=yt($o),ks=Z({},Wn,{relatedTarget:0}),Rs=yt(ks),ga=Z({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),fr=yt(ga),ma=Z({},Nn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_a=yt(ma),ya=Z({},Nn,{data:0}),Wo=yt(ya),zt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},va={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hr(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=wa[t])?!!i[t]:!1}function a(){return Hr}var f=Z({},Wn,{key:function(t){if(t.key){var i=zt[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Is(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?va[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a,charCode:function(t){return t.type==="keypress"?Is(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Is(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m=yt(f),w=Z({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M=yt(w),j=Z({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a}),Y=yt(j),xe=Z({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),it=yt(xe),Te=Z({},Oi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),at=yt(Te),ut=[9,13,27,32],Gn=g&&"CompositionEvent"in window,vt=null;g&&"documentMode"in document&&(vt=document.documentMode);var Ns=g&&"TextEvent"in window&&!vt,As=g&&(!Gn||vt&&8<vt&&11>=vt),Gf=" ",qf=!1;function Kf(t,i){switch(t){case"keyup":return ut.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function ww(t,i){switch(t){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(qf=!0,Gf);case"textInput":return t=i.data,t===Gf&&qf?null:t;default:return null}}function Ew(t,i){if(Ps)return t==="compositionend"||!Gn&&Kf(t,i)?(t=Bo(),jt=Es=tn=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return As&&i.locale!=="ko"?null:i.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Iw[t.type]:i==="textarea"}function Xf(t,i,o,u){lr(u),i=Ca(i,"onChange"),0<i.length&&(o=new Ss("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Go=null,qo=null;function Sw(t){gp(t,0)}function Ea(t){var i=Ms(t);if(ss(i))return t}function Tw(t,i){if(t==="change")return i}var Jf=!1;if(g){var Tc;if(g){var Cc="oninput"in document;if(!Cc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),Cc=typeof Zf.oninput=="function"}Tc=Cc}else Tc=!1;Jf=Tc&&(!document.documentMode||9<document.documentMode)}function ep(){Go&&(Go.detachEvent("onpropertychange",tp),qo=Go=null)}function tp(t){if(t.propertyName==="value"&&Ea(qo)){var i=[];Xf(i,qo,t,cs(t)),Do(Sw,i)}}function Cw(t,i,o){t==="focusin"?(ep(),Go=i,qo=o,Go.attachEvent("onpropertychange",tp)):t==="focusout"&&ep()}function kw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ea(qo)}function Rw(t,i){if(t==="click")return Ea(i)}function Nw(t,i){if(t==="input"||t==="change")return Ea(i)}function Aw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var An=typeof Object.is=="function"?Object.is:Aw;function Ko(t,i){if(An(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!_.call(i,d)||!An(t[d],i[d]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,i){var o=np(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=np(o)}}function ip(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ip(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sp(){for(var t=window,i=Dr();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Dr(t.document)}return i}function kc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Pw(t){var i=sp(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&ip(o.ownerDocument.documentElement,o)){if(u!==null&&kc(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!t.extend&&p>u&&(d=u,u=p,p=d),d=rp(o,p);var y=rp(o,u);d&&y&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==y.node||t.focusOffset!==y.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(y.node,y.offset)):(i.setEnd(y.node,y.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ow=g&&"documentMode"in document&&11>=document.documentMode,Os=null,Rc=null,Yo=null,Nc=!1;function op(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Nc||Os==null||Os!==Dr(u)||(u=Os,"selectionStart"in u&&kc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Yo&&Ko(Yo,u)||(Yo=u,u=Ca(Rc,"onSelect"),0<u.length&&(i=new Ss("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=Os)))}function Ia(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ds={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},Ac={},lp={};g&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Sa(t){if(Ac[t])return Ac[t];if(!Ds[t])return t;var i=Ds[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in lp)return Ac[t]=i[o];return t}var ap=Sa("animationend"),up=Sa("animationiteration"),cp=Sa("animationstart"),hp=Sa("transitionend"),dp=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,i){dp.set(t,i),c(i,[t])}for(var Pc=0;Pc<fp.length;Pc++){var Oc=fp[Pc],Dw=Oc.toLowerCase(),xw=Oc[0].toUpperCase()+Oc.slice(1);$r(Dw,"on"+xw)}$r(ap,"onAnimationEnd"),$r(up,"onAnimationIteration"),$r(cp,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(hp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function pp(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,_c(u,i,void 0,t),t.currentTarget=null}function gp(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var y=u.length-1;0<=y;y--){var E=u[y],k=E.instance,U=E.currentTarget;if(E=E.listener,k!==p&&d.isPropagationStopped())break e;pp(d,E,U),p=k}else for(y=0;y<u.length;y++){if(E=u[y],k=E.instance,U=E.currentTarget,E=E.listener,k!==p&&d.isPropagationStopped())break e;pp(d,E,U),p=k}}}if(En)throw t=xo,En=!1,xo=null,t}function He(t,i){var o=i[jc];o===void 0&&(o=i[jc]=new Set);var u=t+"__bubble";o.has(u)||(mp(i,t,2,!1),o.add(u))}function Dc(t,i,o){var u=0;i&&(u|=4),mp(o,t,u,i)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[Ta]){t[Ta]=!0,s.forEach(function(o){o!=="selectionchange"&&(Lw.has(o)||Dc(o,!1,t),Dc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ta]||(i[Ta]=!0,Dc("selectionchange",!1,i))}}function mp(t,i,o,u){switch(Vo(i)){case 1:var d=Ge;break;case 4:d=Ic;break;default:d=zo}o=d.bind(null,i,o,t),d=void 0,!fs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function xc(t,i,o,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var E=u.stateNode.containerInfo;if(E===d||E.nodeType===8&&E.parentNode===d)break;if(y===4)for(y=u.return;y!==null;){var k=y.tag;if((k===3||k===4)&&(k=y.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;y=y.return}for(;E!==null;){if(y=Di(E),y===null)return;if(k=y.tag,k===5||k===6){u=p=y;continue e}E=E.parentNode}}u=u.return}Do(function(){var U=p,W=cs(o),G=[];e:{var $=dp.get(t);if($!==void 0){var J=Ss,te=t;switch(t){case"keypress":if(Is(o)===0)break e;case"keydown":case"keyup":J=m;break;case"focusin":te="focus",J=Rs;break;case"focusout":te="blur",J=Rs;break;case"beforeblur":case"afterblur":J=Rs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=pa;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Y;break;case ap:case up:case cp:J=fr;break;case hp:J=it;break;case"scroll":J=Sc;break;case"wheel":J=at;break;case"copy":case"cut":case"paste":J=_a;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=M}var ne=(i&4)!==0,et=!ne&&t==="scroll",b=ne?$!==null?$+"Capture":null:$;ne=[];for(var A=U,F;A!==null;){F=A;var q=F.stateNode;if(F.tag===5&&q!==null&&(F=q,b!==null&&(q=Ze(A,b),q!=null&&ne.push(Jo(A,q,F)))),et)break;A=A.return}0<ne.length&&($=new J($,te,null,o,W),G.push({event:$,listeners:ne}))}}if(!(i&7)){e:{if($=t==="mouseover"||t==="pointerover",J=t==="mouseout"||t==="pointerout",$&&o!==Ei&&(te=o.relatedTarget||o.fromElement)&&(Di(te)||te[pr]))break e;if((J||$)&&($=W.window===W?W:($=W.ownerDocument)?$.defaultView||$.parentWindow:window,J?(te=o.relatedTarget||o.toElement,J=U,te=te?Di(te):null,te!==null&&(et=In(te),te!==et||te.tag!==5&&te.tag!==6)&&(te=null)):(J=null,te=U),J!==te)){if(ne=Cs,q="onMouseLeave",b="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(ne=M,q="onPointerLeave",b="onPointerEnter",A="pointer"),et=J==null?$:Ms(J),F=te==null?$:Ms(te),$=new ne(q,A+"leave",J,o,W),$.target=et,$.relatedTarget=F,q=null,Di(W)===U&&(ne=new ne(b,A+"enter",te,o,W),ne.target=F,ne.relatedTarget=et,q=ne),et=q,J&&te)t:{for(ne=J,b=te,A=0,F=ne;F;F=xs(F))A++;for(F=0,q=b;q;q=xs(q))F++;for(;0<A-F;)ne=xs(ne),A--;for(;0<F-A;)b=xs(b),F--;for(;A--;){if(ne===b||b!==null&&ne===b.alternate)break t;ne=xs(ne),b=xs(b)}ne=null}else ne=null;J!==null&&_p(G,$,J,ne,!1),te!==null&&et!==null&&_p(G,et,te,ne,!0)}}e:{if($=U?Ms(U):window,J=$.nodeName&&$.nodeName.toLowerCase(),J==="select"||J==="input"&&$.type==="file")var re=Tw;else if(Qf($))if(Jf)re=Nw;else{re=kw;var oe=Cw}else(J=$.nodeName)&&J.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(re=Rw);if(re&&(re=re(t,U))){Xf(G,re,o,W);break e}oe&&oe(t,$,U),t==="focusout"&&(oe=$._wrapperState)&&oe.controlled&&$.type==="number"&&ls($,"number",$.value)}switch(oe=U?Ms(U):window,t){case"focusin":(Qf(oe)||oe.contentEditable==="true")&&(Os=oe,Rc=U,Yo=null);break;case"focusout":Yo=Rc=Os=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,op(G,o,W);break;case"selectionchange":if(Ow)break;case"keydown":case"keyup":op(G,o,W)}var le;if(Gn)e:{switch(t){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Ps?Kf(t,o)&&(ue="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ue="onCompositionStart");ue&&(As&&o.locale!=="ko"&&(Ps||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Ps&&(le=Bo()):(tn=W,Es="value"in tn?tn.value:tn.textContent,Ps=!0)),oe=Ca(U,ue),0<oe.length&&(ue=new Wo(ue,t,null,o,W),G.push({event:ue,listeners:oe}),le?ue.data=le:(le=Yf(o),le!==null&&(ue.data=le)))),(le=Ns?ww(t,o):Ew(t,o))&&(U=Ca(U,"onBeforeInput"),0<U.length&&(W=new Wo("onBeforeInput","beforeinput",null,o,W),G.push({event:W,listeners:U}),W.data=le))}gp(G,i)})}function Jo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ca(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Ze(t,o),p!=null&&u.unshift(Jo(t,p,d)),p=Ze(t,i),p!=null&&u.push(Jo(t,p,d))),t=t.return}return u}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,i,o,u,d){for(var p=i._reactName,y=[];o!==null&&o!==u;){var E=o,k=E.alternate,U=E.stateNode;if(k!==null&&k===u)break;E.tag===5&&U!==null&&(E=U,d?(k=Ze(o,p),k!=null&&y.unshift(Jo(o,k,E))):d||(k=Ze(o,p),k!=null&&y.push(Jo(o,k,E)))),o=o.return}y.length!==0&&t.push({event:i,listeners:y})}var Mw=/\r\n?/g,bw=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(Mw,`
`).replace(bw,"")}function ka(t,i,o){if(i=yp(i),yp(t)!==i&&o)throw Error(n(425))}function Ra(){}var Lc=null,Mc=null;function bc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,Fw=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,Uw=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(t){return vp.resolve(null).then(t).catch(jw)}:Fc;function jw(t){setTimeout(function(){throw t})}function Uc(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),Rn(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Rn(i)}function Wr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function wp(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ls,Zo="__reactProps$"+Ls,pr="__reactContainer$"+Ls,jc="__reactEvents$"+Ls,zw="__reactListeners$"+Ls,Vw="__reactHandles$"+Ls;function Di(t){var i=t[qn];if(i)return i;for(var o=t.parentNode;o;){if(i=o[pr]||o[qn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=wp(t);t!==null;){if(o=t[qn])return o;t=wp(t)}return i}t=o,o=t.parentNode}return null}function el(t){return t=t[qn]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Na(t){return t[Zo]||null}var zc=[],bs=-1;function Gr(t){return{current:t}}function $e(t){0>bs||(t.current=zc[bs],zc[bs]=null,bs--)}function ze(t,i){bs++,zc[bs]=t.current,t.current=i}var qr={},kt=Gr(qr),Vt=Gr(!1),xi=qr;function Fs(t,i){var o=t.type.contextTypes;if(!o)return qr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Bt(t){return t=t.childContextTypes,t!=null}function Aa(){$e(Vt),$e(kt)}function Ep(t,i,o){if(kt.current!==qr)throw Error(n(168));ze(kt,i),ze(Vt,o)}function Ip(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,Ae(t)||"Unknown",d));return Z({},o,u)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,xi=kt.current,ze(kt,t),ze(Vt,Vt.current),!0}function Sp(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=Ip(t,i,xi),u.__reactInternalMemoizedMergedChildContext=t,$e(Vt),$e(kt),ze(kt,t)):$e(Vt),ze(Vt,o)}var gr=null,Oa=!1,Vc=!1;function Tp(t){gr===null?gr=[t]:gr.push(t)}function Bw(t){Oa=!0,Tp(t)}function Kr(){if(!Vc&&gr!==null){Vc=!0;var t=0,i=Ee;try{var o=gr;for(Ee=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}gr=null,Oa=!1}catch(d){throw gr!==null&&(gr=gr.slice(t+1)),ms(Ci,Kr),d}finally{Ee=i,Vc=!1}}return null}var Us=[],js=0,Da=null,xa=0,hn=[],dn=0,Li=null,mr=1,_r="";function Mi(t,i){Us[js++]=xa,Us[js++]=Da,Da=t,xa=i}function Cp(t,i,o){hn[dn++]=mr,hn[dn++]=_r,hn[dn++]=Li,Li=t;var u=mr;t=_r;var d=32-Ot(u)-1;u&=~(1<<d),o+=1;var p=32-Ot(i)+d;if(30<p){var y=d-d%5;p=(u&(1<<y)-1).toString(32),u>>=y,d-=y,mr=1<<32-Ot(i)+d|o<<d|u,_r=p+t}else mr=1<<p|o<<d|u,_r=t}function Bc(t){t.return!==null&&(Mi(t,1),Cp(t,1,0))}function Hc(t){for(;t===Da;)Da=Us[--js],Us[js]=null,xa=Us[--js],Us[js]=null;for(;t===Li;)Li=hn[--dn],hn[dn]=null,_r=hn[--dn],hn[dn]=null,mr=hn[--dn],hn[dn]=null}var nn=null,rn=null,We=!1,Pn=null;function kp(t,i){var o=mn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Rp(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,nn=t,rn=Wr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,nn=t,rn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Li!==null?{id:mr,overflow:_r}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=mn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,nn=t,rn=null,!0):!1;default:return!1}}function $c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(We){var i=rn;if(i){var o=i;if(!Rp(t,i)){if($c(t))throw Error(n(418));i=Wr(o.nextSibling);var u=nn;i&&Rp(t,i)?kp(u,o):(t.flags=t.flags&-4097|2,We=!1,nn=t)}}else{if($c(t))throw Error(n(418));t.flags=t.flags&-4097|2,We=!1,nn=t}}}function Np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function La(t){if(t!==nn)return!1;if(!We)return Np(t),We=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!bc(t.type,t.memoizedProps)),i&&(i=rn)){if($c(t))throw Ap(),Error(n(418));for(;i;)kp(t,i),i=Wr(i.nextSibling)}if(Np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){rn=Wr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}rn=null}}else rn=nn?Wr(t.stateNode.nextSibling):null;return!0}function Ap(){for(var t=rn;t;)t=Wr(t.nextSibling)}function zs(){rn=nn=null,We=!1}function Gc(t){Pn===null?Pn=[t]:Pn.push(t)}var Hw=fe.ReactCurrentBatchConfig;function tl(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(y){var E=d.refs;y===null?delete E[p]:E[p]=y},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Pp(t){var i=t._init;return i(t._payload)}function Op(t){function i(b,A){if(t){var F=b.deletions;F===null?(b.deletions=[A],b.flags|=16):F.push(A)}}function o(b,A){if(!t)return null;for(;A!==null;)i(b,A),A=A.sibling;return null}function u(b,A){for(b=new Map;A!==null;)A.key!==null?b.set(A.key,A):b.set(A.index,A),A=A.sibling;return b}function d(b,A){return b=ni(b,A),b.index=0,b.sibling=null,b}function p(b,A,F){return b.index=F,t?(F=b.alternate,F!==null?(F=F.index,F<A?(b.flags|=2,A):F):(b.flags|=2,A)):(b.flags|=1048576,A)}function y(b){return t&&b.alternate===null&&(b.flags|=2),b}function E(b,A,F,q){return A===null||A.tag!==6?(A=Fh(F,b.mode,q),A.return=b,A):(A=d(A,F),A.return=b,A)}function k(b,A,F,q){var re=F.type;return re===O?W(b,A,F.props.children,q,F.key):A!==null&&(A.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Ct&&Pp(re)===A.type)?(q=d(A,F.props),q.ref=tl(b,A,F),q.return=b,q):(q=su(F.type,F.key,F.props,null,b.mode,q),q.ref=tl(b,A,F),q.return=b,q)}function U(b,A,F,q){return A===null||A.tag!==4||A.stateNode.containerInfo!==F.containerInfo||A.stateNode.implementation!==F.implementation?(A=Uh(F,b.mode,q),A.return=b,A):(A=d(A,F.children||[]),A.return=b,A)}function W(b,A,F,q,re){return A===null||A.tag!==7?(A=Hi(F,b.mode,q,re),A.return=b,A):(A=d(A,F),A.return=b,A)}function G(b,A,F){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Fh(""+A,b.mode,F),A.return=b,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Fe:return F=su(A.type,A.key,A.props,null,b.mode,F),F.ref=tl(b,null,A),F.return=b,F;case Ie:return A=Uh(A,b.mode,F),A.return=b,A;case Ct:var q=A._init;return G(b,q(A._payload),F)}if(ir(A)||se(A))return A=Hi(A,b.mode,F,null),A.return=b,A;Ma(b,A)}return null}function $(b,A,F,q){var re=A!==null?A.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return re!==null?null:E(b,A,""+F,q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Fe:return F.key===re?k(b,A,F,q):null;case Ie:return F.key===re?U(b,A,F,q):null;case Ct:return re=F._init,$(b,A,re(F._payload),q)}if(ir(F)||se(F))return re!==null?null:W(b,A,F,q,null);Ma(b,F)}return null}function J(b,A,F,q,re){if(typeof q=="string"&&q!==""||typeof q=="number")return b=b.get(F)||null,E(A,b,""+q,re);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Fe:return b=b.get(q.key===null?F:q.key)||null,k(A,b,q,re);case Ie:return b=b.get(q.key===null?F:q.key)||null,U(A,b,q,re);case Ct:var oe=q._init;return J(b,A,F,oe(q._payload),re)}if(ir(q)||se(q))return b=b.get(F)||null,W(A,b,q,re,null);Ma(A,q)}return null}function te(b,A,F,q){for(var re=null,oe=null,le=A,ue=A=0,dt=null;le!==null&&ue<F.length;ue++){le.index>ue?(dt=le,le=null):dt=le.sibling;var Ne=$(b,le,F[ue],q);if(Ne===null){le===null&&(le=dt);break}t&&le&&Ne.alternate===null&&i(b,le),A=p(Ne,A,ue),oe===null?re=Ne:oe.sibling=Ne,oe=Ne,le=dt}if(ue===F.length)return o(b,le),We&&Mi(b,ue),re;if(le===null){for(;ue<F.length;ue++)le=G(b,F[ue],q),le!==null&&(A=p(le,A,ue),oe===null?re=le:oe.sibling=le,oe=le);return We&&Mi(b,ue),re}for(le=u(b,le);ue<F.length;ue++)dt=J(le,b,ue,F[ue],q),dt!==null&&(t&&dt.alternate!==null&&le.delete(dt.key===null?ue:dt.key),A=p(dt,A,ue),oe===null?re=dt:oe.sibling=dt,oe=dt);return t&&le.forEach(function(ri){return i(b,ri)}),We&&Mi(b,ue),re}function ne(b,A,F,q){var re=se(F);if(typeof re!="function")throw Error(n(150));if(F=re.call(F),F==null)throw Error(n(151));for(var oe=re=null,le=A,ue=A=0,dt=null,Ne=F.next();le!==null&&!Ne.done;ue++,Ne=F.next()){le.index>ue?(dt=le,le=null):dt=le.sibling;var ri=$(b,le,Ne.value,q);if(ri===null){le===null&&(le=dt);break}t&&le&&ri.alternate===null&&i(b,le),A=p(ri,A,ue),oe===null?re=ri:oe.sibling=ri,oe=ri,le=dt}if(Ne.done)return o(b,le),We&&Mi(b,ue),re;if(le===null){for(;!Ne.done;ue++,Ne=F.next())Ne=G(b,Ne.value,q),Ne!==null&&(A=p(Ne,A,ue),oe===null?re=Ne:oe.sibling=Ne,oe=Ne);return We&&Mi(b,ue),re}for(le=u(b,le);!Ne.done;ue++,Ne=F.next())Ne=J(le,b,ue,Ne.value,q),Ne!==null&&(t&&Ne.alternate!==null&&le.delete(Ne.key===null?ue:Ne.key),A=p(Ne,A,ue),oe===null?re=Ne:oe.sibling=Ne,oe=Ne);return t&&le.forEach(function(EE){return i(b,EE)}),We&&Mi(b,ue),re}function et(b,A,F,q){if(typeof F=="object"&&F!==null&&F.type===O&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Fe:e:{for(var re=F.key,oe=A;oe!==null;){if(oe.key===re){if(re=F.type,re===O){if(oe.tag===7){o(b,oe.sibling),A=d(oe,F.props.children),A.return=b,b=A;break e}}else if(oe.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Ct&&Pp(re)===oe.type){o(b,oe.sibling),A=d(oe,F.props),A.ref=tl(b,oe,F),A.return=b,b=A;break e}o(b,oe);break}else i(b,oe);oe=oe.sibling}F.type===O?(A=Hi(F.props.children,b.mode,q,F.key),A.return=b,b=A):(q=su(F.type,F.key,F.props,null,b.mode,q),q.ref=tl(b,A,F),q.return=b,b=q)}return y(b);case Ie:e:{for(oe=F.key;A!==null;){if(A.key===oe)if(A.tag===4&&A.stateNode.containerInfo===F.containerInfo&&A.stateNode.implementation===F.implementation){o(b,A.sibling),A=d(A,F.children||[]),A.return=b,b=A;break e}else{o(b,A);break}else i(b,A);A=A.sibling}A=Uh(F,b.mode,q),A.return=b,b=A}return y(b);case Ct:return oe=F._init,et(b,A,oe(F._payload),q)}if(ir(F))return te(b,A,F,q);if(se(F))return ne(b,A,F,q);Ma(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,A!==null&&A.tag===6?(o(b,A.sibling),A=d(A,F),A.return=b,b=A):(o(b,A),A=Fh(F,b.mode,q),A.return=b,b=A),y(b)):o(b,A)}return et}var Vs=Op(!0),Dp=Op(!1),ba=Gr(null),Fa=null,Bs=null,qc=null;function Kc(){qc=Bs=Fa=null}function Yc(t){var i=ba.current;$e(ba),t._currentValue=i}function Qc(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Hs(t,i){Fa=t,qc=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Ht=!0),t.firstContext=null)}function fn(t){var i=t._currentValue;if(qc!==t)if(t={context:t,memoizedValue:i,next:null},Bs===null){if(Fa===null)throw Error(n(308));Bs=t,Fa.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return i}var bi=null;function Xc(t){bi===null?bi=[t]:bi.push(t)}function xp(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Xc(i)):(o.next=d.next,d.next=o),i.interleaved=o,yr(t,u)}function yr(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Yr=!1;function Jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Qr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,ke&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,yr(t,o)}return d=u.interleaved,d===null?(i.next=i,Xc(u)):(i.next=d.next,d.next=i),u.interleaved=i,yr(t,o)}function Ua(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ur(t,o)}}function Mp(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=y:p=p.next=y,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ja(t,i,o,u){var d=t.updateQueue;Yr=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var k=E,U=k.next;k.next=null,y===null?p=U:y.next=U,y=k;var W=t.alternate;W!==null&&(W=W.updateQueue,E=W.lastBaseUpdate,E!==y&&(E===null?W.firstBaseUpdate=U:E.next=U,W.lastBaseUpdate=k))}if(p!==null){var G=d.baseState;y=0,W=U=k=null,E=p;do{var $=E.lane,J=E.eventTime;if((u&$)===$){W!==null&&(W=W.next={eventTime:J,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var te=t,ne=E;switch($=i,J=o,ne.tag){case 1:if(te=ne.payload,typeof te=="function"){G=te.call(J,G,$);break e}G=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ne.payload,$=typeof te=="function"?te.call(J,G,$):te,$==null)break e;G=Z({},G,$);break e;case 2:Yr=!0}}E.callback!==null&&E.lane!==0&&(t.flags|=64,$=d.effects,$===null?d.effects=[E]:$.push(E))}else J={eventTime:J,lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},W===null?(U=W=J,k=G):W=W.next=J,y|=$;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;$=E,E=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);if(W===null&&(k=G),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=W,i=d.shared.interleaved,i!==null){d=i;do y|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);ji|=y,t.lanes=y,t.memoizedState=G}}function bp(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var nl={},Kn=Gr(nl),rl=Gr(nl),il=Gr(nl);function Fi(t){if(t===nl)throw Error(n(174));return t}function Zc(t,i){switch(ze(il,i),ze(rl,t),ze(Kn,nl),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:rt(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=rt(i,t)}$e(Kn),ze(Kn,i)}function $s(){$e(Kn),$e(rl),$e(il)}function Fp(t){Fi(il.current);var i=Fi(Kn.current),o=rt(i,t.type);i!==o&&(ze(rl,t),ze(Kn,o))}function eh(t){rl.current===t&&($e(Kn),$e(rl))}var qe=Gr(0);function za(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var th=[];function nh(){for(var t=0;t<th.length;t++)th[t]._workInProgressVersionPrimary=null;th.length=0}var Va=fe.ReactCurrentDispatcher,rh=fe.ReactCurrentBatchConfig,Ui=0,Ke=null,st=null,ct=null,Ba=!1,sl=!1,ol=0,$w=0;function Rt(){throw Error(n(321))}function ih(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!An(t[o],i[o]))return!1;return!0}function sh(t,i,o,u,d,p){if(Ui=p,Ke=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Va.current=t===null||t.memoizedState===null?Kw:Yw,t=o(u,d),sl){p=0;do{if(sl=!1,ol=0,25<=p)throw Error(n(301));p+=1,ct=st=null,i.updateQueue=null,Va.current=Qw,t=o(u,d)}while(sl)}if(Va.current=Wa,i=st!==null&&st.next!==null,Ui=0,ct=st=Ke=null,Ba=!1,i)throw Error(n(300));return t}function oh(){var t=ol!==0;return ol=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ke.memoizedState=ct=t:ct=ct.next=t,ct}function pn(){if(st===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var i=ct===null?Ke.memoizedState:ct.next;if(i!==null)ct=i,st=t;else{if(t===null)throw Error(n(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ct===null?Ke.memoizedState=ct=t:ct=ct.next=t}return ct}function ll(t,i){return typeof i=="function"?i(t):i}function lh(t){var i=pn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=st,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var E=y=null,k=null,U=p;do{var W=U.lane;if((Ui&W)===W)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),u=U.hasEagerState?U.eagerState:t(u,U.action);else{var G={lane:W,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(E=k=G,y=u):k=k.next=G,Ke.lanes|=W,ji|=W}U=U.next}while(U!==null&&U!==p);k===null?y=u:k.next=E,An(u,i.memoizedState)||(Ht=!0),i.memoizedState=u,i.baseState=y,i.baseQueue=k,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Ke.lanes|=p,ji|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ah(t){var i=pn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do p=t(p,y.action),y=y.next;while(y!==d);An(p,i.memoizedState)||(Ht=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Up(){}function jp(t,i){var o=Ke,u=pn(),d=i(),p=!An(u.memoizedState,d);if(p&&(u.memoizedState=d,Ht=!0),u=u.queue,uh(Bp.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||ct!==null&&ct.memoizedState.tag&1){if(o.flags|=2048,al(9,Vp.bind(null,o,u,d,i),void 0,null),ht===null)throw Error(n(349));Ui&30||zp(o,i,d)}return d}function zp(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ke.updateQueue,i===null?(i={lastEffect:null,stores:null},Ke.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Vp(t,i,o,u){i.value=o,i.getSnapshot=u,Hp(i)&&$p(t)}function Bp(t,i,o){return o(function(){Hp(i)&&$p(t)})}function Hp(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!An(t,o)}catch{return!0}}function $p(t){var i=yr(t,1);i!==null&&Ln(i,t,1,-1)}function Wp(t){var i=Yn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:t},i.queue=t,t=t.dispatch=qw.bind(null,Ke,t),[i.memoizedState,t]}function al(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Ke.updateQueue,i===null?(i={lastEffect:null,stores:null},Ke.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Gp(){return pn().memoizedState}function Ha(t,i,o,u){var d=Yn();Ke.flags|=t,d.memoizedState=al(1|i,o,void 0,u===void 0?null:u)}function $a(t,i,o,u){var d=pn();u=u===void 0?null:u;var p=void 0;if(st!==null){var y=st.memoizedState;if(p=y.destroy,u!==null&&ih(u,y.deps)){d.memoizedState=al(i,o,p,u);return}}Ke.flags|=t,d.memoizedState=al(1|i,o,p,u)}function qp(t,i){return Ha(8390656,8,t,i)}function uh(t,i){return $a(2048,8,t,i)}function Kp(t,i){return $a(4,2,t,i)}function Yp(t,i){return $a(4,4,t,i)}function Qp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xp(t,i,o){return o=o!=null?o.concat([t]):null,$a(4,4,Qp.bind(null,i,t),o)}function ch(){}function Jp(t,i){var o=pn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ih(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Zp(t,i){var o=pn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ih(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function eg(t,i,o){return Ui&21?(An(o,i)||(o=Ni(),Ke.lanes|=o,ji|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=o)}function Ww(t,i){var o=Ee;Ee=o!==0&&4>o?o:4,t(!0);var u=rh.transition;rh.transition={};try{t(!1),i()}finally{Ee=o,rh.transition=u}}function tg(){return pn().memoizedState}function Gw(t,i,o){var u=ei(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},ng(t))rg(i,o);else if(o=xp(t,i,o,u),o!==null){var d=xt();Ln(o,t,u,d),ig(o,i,u)}}function qw(t,i,o){var u=ei(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(ng(t))rg(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var y=i.lastRenderedState,E=p(y,o);if(d.hasEagerState=!0,d.eagerState=E,An(E,y)){var k=i.interleaved;k===null?(d.next=d,Xc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=xp(t,i,d,u),o!==null&&(d=xt(),Ln(o,t,u,d),ig(o,i,u))}}function ng(t){var i=t.alternate;return t===Ke||i!==null&&i===Ke}function rg(t,i){sl=Ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ig(t,i,o){if(o&4194240){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ur(t,o)}}var Wa={readContext:fn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},Kw={readContext:fn,useCallback:function(t,i){return Yn().memoizedState=[t,i===void 0?null:i],t},useContext:fn,useEffect:qp,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ha(4194308,4,Qp.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ha(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ha(4,2,t,i)},useMemo:function(t,i){var o=Yn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Yn();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Gw.bind(null,Ke,t),[u.memoizedState,t]},useRef:function(t){var i=Yn();return t={current:t},i.memoizedState=t},useState:Wp,useDebugValue:ch,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Wp(!1),i=t[0];return t=Ww.bind(null,t[1]),Yn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Ke,d=Yn();if(We){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),ht===null)throw Error(n(349));Ui&30||zp(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,qp(Bp.bind(null,u,p,t),[t]),u.flags|=2048,al(9,Vp.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=Yn(),i=ht.identifierPrefix;if(We){var o=_r,u=mr;o=(u&~(1<<32-Ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=ol++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=$w++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Yw={readContext:fn,useCallback:Jp,useContext:fn,useEffect:uh,useImperativeHandle:Xp,useInsertionEffect:Kp,useLayoutEffect:Yp,useMemo:Zp,useReducer:lh,useRef:Gp,useState:function(){return lh(ll)},useDebugValue:ch,useDeferredValue:function(t){var i=pn();return eg(i,st.memoizedState,t)},useTransition:function(){var t=lh(ll)[0],i=pn().memoizedState;return[t,i]},useMutableSource:Up,useSyncExternalStore:jp,useId:tg,unstable_isNewReconciler:!1},Qw={readContext:fn,useCallback:Jp,useContext:fn,useEffect:uh,useImperativeHandle:Xp,useInsertionEffect:Kp,useLayoutEffect:Yp,useMemo:Zp,useReducer:ah,useRef:Gp,useState:function(){return ah(ll)},useDebugValue:ch,useDeferredValue:function(t){var i=pn();return st===null?i.memoizedState=t:eg(i,st.memoizedState,t)},useTransition:function(){var t=ah(ll)[0],i=pn().memoizedState;return[t,i]},useMutableSource:Up,useSyncExternalStore:jp,useId:tg,unstable_isNewReconciler:!1};function On(t,i){if(t&&t.defaultProps){i=Z({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function hh(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:Z({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ga={isMounted:function(t){return(t=t._reactInternals)?In(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=xt(),d=ei(t),p=vr(u,d);p.payload=i,o!=null&&(p.callback=o),i=Qr(t,p,d),i!==null&&(Ln(i,t,d,u),Ua(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=xt(),d=ei(t),p=vr(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Qr(t,p,d),i!==null&&(Ln(i,t,d,u),Ua(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=xt(),u=ei(t),d=vr(o,u);d.tag=2,i!=null&&(d.callback=i),i=Qr(t,d,u),i!==null&&(Ln(i,t,u,o),Ua(i,t,u))}};function sg(t,i,o,u,d,p,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,y):i.prototype&&i.prototype.isPureReactComponent?!Ko(o,u)||!Ko(d,p):!0}function og(t,i,o){var u=!1,d=qr,p=i.contextType;return typeof p=="object"&&p!==null?p=fn(p):(d=Bt(i)?xi:kt.current,u=i.contextTypes,p=(u=u!=null)?Fs(t,d):qr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function lg(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ga.enqueueReplaceState(i,i.state,null)}function dh(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Jc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=fn(p):(p=Bt(i)?xi:kt.current,d.context=Fs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(hh(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ga.enqueueReplaceState(d,d.state,null),ja(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,i){try{var o="",u=i;do o+=me(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function fh(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ph(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Xw=typeof WeakMap=="function"?WeakMap:Map;function ag(t,i,o){o=vr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Za||(Za=!0,Ah=u),ph(t,i)},o}function ug(t,i,o){o=vr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ph(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ph(t,i),typeof u!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})}),o}function cg(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Xw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=hE.bind(null,t,i,o),i.then(t,t))}function hg(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function dg(t,i,o,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=vr(-1,1),i.tag=2,Qr(o,i,1))),o.lanes|=1),t)}var Jw=fe.ReactCurrentOwner,Ht=!1;function Dt(t,i,o,u){i.child=t===null?Dp(i,null,o,u):Vs(i,t.child,o,u)}function fg(t,i,o,u,d){o=o.render;var p=i.ref;return Hs(i,d),u=sh(t,i,o,u,p,d),o=oh(),t!==null&&!Ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,wr(t,i,d)):(We&&o&&Bc(i),i.flags|=1,Dt(t,i,u,d),i.child)}function pg(t,i,o,u,d){if(t===null){var p=o.type;return typeof p=="function"&&!bh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,gg(t,i,p,u,d)):(t=su(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!(t.lanes&d)){var y=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ko,o(y,u)&&t.ref===i.ref)return wr(t,i,d)}return i.flags|=1,t=ni(p,u),t.ref=i.ref,t.return=i,i.child=t}function gg(t,i,o,u,d){if(t!==null){var p=t.memoizedProps;if(Ko(p,u)&&t.ref===i.ref)if(Ht=!1,i.pendingProps=u=p,(t.lanes&d)!==0)t.flags&131072&&(Ht=!0);else return i.lanes=t.lanes,wr(t,i,d)}return gh(t,i,o,u,d)}function mg(t,i,o){var u=i.pendingProps,d=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(qs,sn),sn|=o;else{if(!(o&1073741824))return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ze(qs,sn),sn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,ze(qs,sn),sn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,ze(qs,sn),sn|=u;return Dt(t,i,d,o),i.child}function _g(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function gh(t,i,o,u,d){var p=Bt(o)?xi:kt.current;return p=Fs(i,p),Hs(i,d),o=sh(t,i,o,u,p,d),u=oh(),t!==null&&!Ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,wr(t,i,d)):(We&&u&&Bc(i),i.flags|=1,Dt(t,i,o,d),i.child)}function yg(t,i,o,u,d){if(Bt(o)){var p=!0;Pa(i)}else p=!1;if(Hs(i,d),i.stateNode===null)Ka(t,i),og(i,o,u),dh(i,o,u,d),u=!0;else if(t===null){var y=i.stateNode,E=i.memoizedProps;y.props=E;var k=y.context,U=o.contextType;typeof U=="object"&&U!==null?U=fn(U):(U=Bt(o)?xi:kt.current,U=Fs(i,U));var W=o.getDerivedStateFromProps,G=typeof W=="function"||typeof y.getSnapshotBeforeUpdate=="function";G||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==u||k!==U)&&lg(i,y,u,U),Yr=!1;var $=i.memoizedState;y.state=$,ja(i,u,y,d),k=i.memoizedState,E!==u||$!==k||Vt.current||Yr?(typeof W=="function"&&(hh(i,o,W,u),k=i.memoizedState),(E=Yr||sg(i,o,E,u,$,k,U))?(G||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(i.flags|=4194308)):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),y.props=u,y.state=k,y.context=U,u=E):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{y=i.stateNode,Lp(t,i),E=i.memoizedProps,U=i.type===i.elementType?E:On(i.type,E),y.props=U,G=i.pendingProps,$=y.context,k=o.contextType,typeof k=="object"&&k!==null?k=fn(k):(k=Bt(o)?xi:kt.current,k=Fs(i,k));var J=o.getDerivedStateFromProps;(W=typeof J=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==G||$!==k)&&lg(i,y,u,k),Yr=!1,$=i.memoizedState,y.state=$,ja(i,u,y,d);var te=i.memoizedState;E!==G||$!==te||Vt.current||Yr?(typeof J=="function"&&(hh(i,o,J,u),te=i.memoizedState),(U=Yr||sg(i,o,U,u,$,te,k)||!1)?(W||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(u,te,k),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(u,te,k)),typeof y.componentDidUpdate=="function"&&(i.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof y.componentDidUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=te),y.props=u,y.state=te,y.context=k,u=U):(typeof y.componentDidUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(i.flags|=1024),u=!1)}return mh(t,i,o,u,p,d)}function mh(t,i,o,u,d,p){_g(t,i);var y=(i.flags&128)!==0;if(!u&&!y)return d&&Sp(i,o,!1),wr(t,i,p);u=i.stateNode,Jw.current=i;var E=y&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&y?(i.child=Vs(i,t.child,null,p),i.child=Vs(i,null,E,p)):Dt(t,i,E,p),i.memoizedState=u.state,d&&Sp(i,o,!0),i.child}function vg(t){var i=t.stateNode;i.pendingContext?Ep(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ep(t,i.context,!1),Zc(t,i.containerInfo)}function wg(t,i,o,u,d){return zs(),Gc(d),i.flags|=256,Dt(t,i,o,u),i.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eg(t,i,o){var u=i.pendingProps,d=qe.current,p=!1,y=(i.flags&128)!==0,E;if((E=y)||(E=t!==null&&t.memoizedState===null?!1:(d&2)!==0),E?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),ze(qe,d&1),t===null)return Wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(y=u.children,t=u.fallback,p?(u=i.mode,p=i.child,y={mode:"hidden",children:y},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=y):p=ou(y,u,0,null),t=Hi(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=yh(o),i.memoizedState=_h,t):vh(i,y));if(d=t.memoizedState,d!==null&&(E=d.dehydrated,E!==null))return Zw(t,i,y,u,E,d,o);if(p){p=u.fallback,y=i.mode,d=t.child,E=d.sibling;var k={mode:"hidden",children:u.children};return!(y&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=ni(d,k),u.subtreeFlags=d.subtreeFlags&14680064),E!==null?p=ni(E,p):(p=Hi(p,y,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,y=t.child.memoizedState,y=y===null?yh(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},p.memoizedState=y,p.childLanes=t.childLanes&~o,i.memoizedState=_h,u}return p=t.child,t=p.sibling,u=ni(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function vh(t,i){return i=ou({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function qa(t,i,o,u){return u!==null&&Gc(u),Vs(i,t.child,null,o),t=vh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Zw(t,i,o,u,d,p,y){if(o)return i.flags&256?(i.flags&=-257,u=fh(Error(n(422))),qa(t,i,y,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=ou({mode:"visible",children:u.children},d,0,null),p=Hi(p,d,y,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&Vs(i,t.child,null,y),i.child.memoizedState=yh(y),i.memoizedState=_h,p);if(!(i.mode&1))return qa(t,i,y,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var E=u.dgst;return u=E,p=Error(n(419)),u=fh(p,u,void 0),qa(t,i,y,u)}if(E=(y&t.childLanes)!==0,Ht||E){if(u=ht,u!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|y)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,yr(t,d),Ln(u,t,d,-1))}return Mh(),u=fh(Error(n(421))),qa(t,i,y,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=dE.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,rn=Wr(d.nextSibling),nn=i,We=!0,Pn=null,t!==null&&(hn[dn++]=mr,hn[dn++]=_r,hn[dn++]=Li,mr=t.id,_r=t.overflow,Li=i),i=vh(i,u.children),i.flags|=4096,i)}function Ig(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Qc(t.return,i,o)}function wh(t,i,o,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function Sg(t,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Dt(t,i,u.children,o),u=qe.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ig(t,o,i);else if(t.tag===19)Ig(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(ze(qe,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&za(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),wh(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&za(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}wh(i,!0,o,null,p);break;case"together":wh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ka(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function wr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),ji|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ni(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ni(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function eE(t,i,o){switch(i.tag){case 3:vg(i),zs();break;case 5:Fp(i);break;case 1:Bt(i.type)&&Pa(i);break;case 4:Zc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;ze(ba,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(ze(qe,qe.current&1),i.flags|=128,null):o&i.child.childLanes?Eg(t,i,o):(ze(qe,qe.current&1),t=wr(t,i,o),t!==null?t.sibling:null);ze(qe,qe.current&1);break;case 19:if(u=(o&i.childLanes)!==0,t.flags&128){if(u)return Sg(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ze(qe,qe.current),u)break;return null;case 22:case 23:return i.lanes=0,mg(t,i,o)}return wr(t,i,o)}var Tg,Eh,Cg,kg;Tg=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Eh=function(){},Cg=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Fi(Kn.current);var p=null;switch(o){case"input":d=yi(t,d),u=yi(t,u),p=[];break;case"select":d=Z({},d,{value:void 0}),u=Z({},u,{value:void 0}),p=[];break;case"textarea":d=Eo(t,d),u=Eo(t,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ra)}Ro(o,u);var y;o=null;for(U in d)if(!u.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var E=d[U];for(y in E)E.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(l.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in u){var k=u[U];if(E=d!=null?d[U]:void 0,u.hasOwnProperty(U)&&k!==E&&(k!=null||E!=null))if(U==="style")if(E){for(y in E)!E.hasOwnProperty(y)||k&&k.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in k)k.hasOwnProperty(y)&&E[y]!==k[y]&&(o||(o={}),o[y]=k[y])}else o||(p||(p=[]),p.push(U,o)),o=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,E=E?E.__html:void 0,k!=null&&E!==k&&(p=p||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(l.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&He("scroll",t),p||E===k||(p=[])):(p=p||[]).push(U,k))}o&&(p=p||[]).push("style",o);var U=p;(i.updateQueue=U)&&(i.flags|=4)}},kg=function(t,i,o,u){o!==u&&(i.flags|=4)};function ul(t,i){if(!We)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function tE(t,i,o){var u=i.pendingProps;switch(Hc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(i),null;case 1:return Bt(i.type)&&Aa(),Nt(i),null;case 3:return u=i.stateNode,$s(),$e(Vt),$e(kt),nh(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(La(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Pn!==null&&(Dh(Pn),Pn=null))),Eh(t,i),Nt(i),null;case 5:eh(i);var d=Fi(il.current);if(o=i.type,t!==null&&i.stateNode!=null)Cg(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Nt(i),null}if(t=Fi(Kn.current),La(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[qn]=i,u[Zo]=p,t=(i.mode&1)!==0,o){case"dialog":He("cancel",u),He("close",u);break;case"iframe":case"object":case"embed":He("load",u);break;case"video":case"audio":for(d=0;d<Qo.length;d++)He(Qo[d],u);break;case"source":He("error",u);break;case"img":case"image":case"link":He("error",u),He("load",u);break;case"details":He("toggle",u);break;case"input":os(u,p),He("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},He("invalid",u);break;case"textarea":as(u,p),He("invalid",u)}Ro(o,p),d=null;for(var y in p)if(p.hasOwnProperty(y)){var E=p[y];y==="children"?typeof E=="string"?u.textContent!==E&&(p.suppressHydrationWarning!==!0&&ka(u.textContent,E,t),d=["children",E]):typeof E=="number"&&u.textContent!==""+E&&(p.suppressHydrationWarning!==!0&&ka(u.textContent,E,t),d=["children",""+E]):l.hasOwnProperty(y)&&E!=null&&y==="onScroll"&&He("scroll",u)}switch(o){case"input":rr(u),Zl(u,p,!0);break;case"textarea":rr(u),Io(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ra)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=y.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=y.createElement(o,{is:u.is}):(t=y.createElement(o),o==="select"&&(y=t,u.multiple?y.multiple=!0:u.size&&(y.size=u.size))):t=y.createElementNS(t,o),t[qn]=i,t[Zo]=u,Tg(t,i,!1,!1),i.stateNode=t;e:{switch(y=No(o,u),o){case"dialog":He("cancel",t),He("close",t),d=u;break;case"iframe":case"object":case"embed":He("load",t),d=u;break;case"video":case"audio":for(d=0;d<Qo.length;d++)He(Qo[d],t);d=u;break;case"source":He("error",t),d=u;break;case"img":case"image":case"link":He("error",t),He("load",t),d=u;break;case"details":He("toggle",t),d=u;break;case"input":os(t,u),d=yi(t,u),He("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=Z({},u,{value:void 0}),He("invalid",t);break;case"textarea":as(t,u),d=Eo(t,u),He("invalid",t);break;default:d=u}Ro(o,d),E=d;for(p in E)if(E.hasOwnProperty(p)){var k=E[p];p==="style"?Co(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&So(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&xr(t,k):typeof k=="number"&&xr(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?k!=null&&p==="onScroll"&&He("scroll",t):k!=null&&he(t,p,k,y))}switch(o){case"input":rr(t),Zl(t,u,!1);break;case"textarea":rr(t),Io(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Pe(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?sr(t,!!u.multiple,p,!1):u.defaultValue!=null&&sr(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ra)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nt(i),null;case 6:if(t&&i.stateNode!=null)kg(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Fi(il.current),Fi(Kn.current),La(i)){if(u=i.stateNode,o=i.memoizedProps,u[qn]=i,(p=u.nodeValue!==o)&&(t=nn,t!==null))switch(t.tag){case 3:ka(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[qn]=i,i.stateNode=u}return Nt(i),null;case 13:if($e(qe),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&rn!==null&&i.mode&1&&!(i.flags&128))Ap(),zs(),i.flags|=98560,p=!1;else if(p=La(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[qn]=i}else zs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Nt(i),p=!1}else Pn!==null&&(Dh(Pn),Pn=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||qe.current&1?ot===0&&(ot=3):Mh())),i.updateQueue!==null&&(i.flags|=4),Nt(i),null);case 4:return $s(),Eh(t,i),t===null&&Xo(i.stateNode.containerInfo),Nt(i),null;case 10:return Yc(i.type._context),Nt(i),null;case 17:return Bt(i.type)&&Aa(),Nt(i),null;case 19:if($e(qe),p=i.memoizedState,p===null)return Nt(i),null;if(u=(i.flags&128)!==0,y=p.rendering,y===null)if(u)ul(p,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(y=za(t),y!==null){for(i.flags|=128,ul(p,!1),u=y.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,y=p.alternate,y===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=y.childLanes,p.lanes=y.lanes,p.child=y.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=y.memoizedProps,p.memoizedState=y.memoizedState,p.updateQueue=y.updateQueue,p.type=y.type,t=y.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ze(qe,qe.current&1|2),i.child}t=t.sibling}p.tail!==null&&je()>Ks&&(i.flags|=128,u=!0,ul(p,!1),i.lanes=4194304)}else{if(!u)if(t=za(y),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ul(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!We)return Nt(i),null}else 2*je()-p.renderingStartTime>Ks&&o!==1073741824&&(i.flags|=128,u=!0,ul(p,!1),i.lanes=4194304);p.isBackwards?(y.sibling=i.child,i.child=y):(o=p.last,o!==null?o.sibling=y:i.child=y,p.last=y)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=je(),i.sibling=null,o=qe.current,ze(qe,u?o&1|2:o&1),i):(Nt(i),null);case 22:case 23:return Lh(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?sn&1073741824&&(Nt(i),i.subtreeFlags&6&&(i.flags|=8192)):Nt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function nE(t,i){switch(Hc(i),i.tag){case 1:return Bt(i.type)&&Aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return $s(),$e(Vt),$e(kt),nh(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return eh(i),null;case 13:if($e(qe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));zs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $e(qe),null;case 4:return $s(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var Ya=!1,At=!1,rE=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Ye(t,i,u)}else o.current=null}function Ih(t,i,o){try{o()}catch(u){Ye(t,i,u)}}var Rg=!1;function iE(t,i){if(Lc=Vr,t=sp(),kc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var y=0,E=-1,k=-1,U=0,W=0,G=t,$=null;t:for(;;){for(var J;G!==o||d!==0&&G.nodeType!==3||(E=y+d),G!==p||u!==0&&G.nodeType!==3||(k=y+u),G.nodeType===3&&(y+=G.nodeValue.length),(J=G.firstChild)!==null;)$=G,G=J;for(;;){if(G===t)break t;if($===o&&++U===d&&(E=y),$===p&&++W===u&&(k=y),(J=G.nextSibling)!==null)break;G=$,$=G.parentNode}G=J}o=E===-1||k===-1?null:{start:E,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Mc={focusedElem:t,selectionRange:o},Vr=!1,ee=i;ee!==null;)if(i=ee,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ee=t;else for(;ee!==null;){i=ee;try{var te=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var ne=te.memoizedProps,et=te.memoizedState,b=i.stateNode,A=b.getSnapshotBeforeUpdate(i.elementType===i.type?ne:On(i.type,ne),et);b.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(q){Ye(i,i.return,q)}if(t=i.sibling,t!==null){t.return=i.return,ee=t;break}ee=i.return}return te=Rg,Rg=!1,te}function cl(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ih(i,o,p)}d=d.next}while(d!==u)}}function Qa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Sh(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ng(t){var i=t.alternate;i!==null&&(t.alternate=null,Ng(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[qn],delete i[Zo],delete i[jc],delete i[zw],delete i[Vw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ag(t){return t.tag===5||t.tag===3||t.tag===4}function Pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ra));else if(u!==4&&(t=t.child,t!==null))for(Th(t,i,o),t=t.sibling;t!==null;)Th(t,i,o),t=t.sibling}function Ch(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Ch(t,i,o),t=t.sibling;t!==null;)Ch(t,i,o),t=t.sibling}var wt=null,Dn=!1;function Xr(t,i,o){for(o=o.child;o!==null;)Og(t,i,o),o=o.sibling}function Og(t,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ki,o)}catch{}switch(o.tag){case 5:At||Gs(o,i);case 6:var u=wt,d=Dn;wt=null,Xr(t,i,o),wt=u,Dn=d,wt!==null&&(Dn?(t=wt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):wt.removeChild(o.stateNode));break;case 18:wt!==null&&(Dn?(t=wt,o=o.stateNode,t.nodeType===8?Uc(t.parentNode,o):t.nodeType===1&&Uc(t,o),Rn(t)):Uc(wt,o.stateNode));break;case 4:u=wt,d=Dn,wt=o.stateNode.containerInfo,Dn=!0,Xr(t,i,o),wt=u,Dn=d;break;case 0:case 11:case 14:case 15:if(!At&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,y=p.destroy;p=p.tag,y!==void 0&&(p&2||p&4)&&Ih(o,i,y),d=d.next}while(d!==u)}Xr(t,i,o);break;case 1:if(!At&&(Gs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(E){Ye(o,i,E)}Xr(t,i,o);break;case 21:Xr(t,i,o);break;case 22:o.mode&1?(At=(u=At)||o.memoizedState!==null,Xr(t,i,o),At=u):Xr(t,i,o);break;default:Xr(t,i,o)}}function Dg(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new rE),i.forEach(function(u){var d=fE.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function xn(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=t,y=i,E=y;e:for(;E!==null;){switch(E.tag){case 5:wt=E.stateNode,Dn=!1;break e;case 3:wt=E.stateNode.containerInfo,Dn=!0;break e;case 4:wt=E.stateNode.containerInfo,Dn=!0;break e}E=E.return}if(wt===null)throw Error(n(160));Og(p,y,d),wt=null,Dn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){Ye(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xg(i,t),i=i.sibling}function xg(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(i,t),Qn(t),u&4){try{cl(3,t,t.return),Qa(3,t)}catch(ne){Ye(t,t.return,ne)}try{cl(5,t,t.return)}catch(ne){Ye(t,t.return,ne)}}break;case 1:xn(i,t),Qn(t),u&512&&o!==null&&Gs(o,o.return);break;case 5:if(xn(i,t),Qn(t),u&512&&o!==null&&Gs(o,o.return),t.flags&32){var d=t.stateNode;try{xr(d,"")}catch(ne){Ye(t,t.return,ne)}}if(u&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,y=o!==null?o.memoizedProps:p,E=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{E==="input"&&p.type==="radio"&&p.name!=null&&vo(d,p),No(E,y);var U=No(E,p);for(y=0;y<k.length;y+=2){var W=k[y],G=k[y+1];W==="style"?Co(d,G):W==="dangerouslySetInnerHTML"?So(d,G):W==="children"?xr(d,G):he(d,W,G,U)}switch(E){case"input":wo(d,p);break;case"textarea":us(d,p);break;case"select":var $=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var J=p.value;J!=null?sr(d,!!p.multiple,J,!1):$!==!!p.multiple&&(p.defaultValue!=null?sr(d,!!p.multiple,p.defaultValue,!0):sr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Zo]=p}catch(ne){Ye(t,t.return,ne)}}break;case 6:if(xn(i,t),Qn(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(ne){Ye(t,t.return,ne)}}break;case 3:if(xn(i,t),Qn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Rn(i.containerInfo)}catch(ne){Ye(t,t.return,ne)}break;case 4:xn(i,t),Qn(t);break;case 13:xn(i,t),Qn(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Nh=je())),u&4&&Dg(t);break;case 22:if(W=o!==null&&o.memoizedState!==null,t.mode&1?(At=(U=At)||W,xn(i,t),At=U):xn(i,t),Qn(t),u&8192){if(U=t.memoizedState!==null,(t.stateNode.isHidden=U)&&!W&&t.mode&1)for(ee=t,W=t.child;W!==null;){for(G=ee=W;ee!==null;){switch($=ee,J=$.child,$.tag){case 0:case 11:case 14:case 15:cl(4,$,$.return);break;case 1:Gs($,$.return);var te=$.stateNode;if(typeof te.componentWillUnmount=="function"){u=$,o=$.return;try{i=u,te.props=i.memoizedProps,te.state=i.memoizedState,te.componentWillUnmount()}catch(ne){Ye(u,o,ne)}}break;case 5:Gs($,$.return);break;case 22:if($.memoizedState!==null){bg(G);continue}}J!==null?(J.return=$,ee=J):bg(G)}W=W.sibling}e:for(W=null,G=t;;){if(G.tag===5){if(W===null){W=G;try{d=G.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(E=G.stateNode,k=G.memoizedProps.style,y=k!=null&&k.hasOwnProperty("display")?k.display:null,E.style.display=To("display",y))}catch(ne){Ye(t,t.return,ne)}}}else if(G.tag===6){if(W===null)try{G.stateNode.nodeValue=U?"":G.memoizedProps}catch(ne){Ye(t,t.return,ne)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===t)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===t)break e;for(;G.sibling===null;){if(G.return===null||G.return===t)break e;W===G&&(W=null),G=G.return}W===G&&(W=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:xn(i,t),Qn(t),u&4&&Dg(t);break;case 21:break;default:xn(i,t),Qn(t)}}function Qn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Ag(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(xr(d,""),u.flags&=-33);var p=Pg(t);Ch(t,p,d);break;case 3:case 4:var y=u.stateNode.containerInfo,E=Pg(t);Th(t,E,y);break;default:throw Error(n(161))}}catch(k){Ye(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function sE(t,i,o){ee=t,Lg(t)}function Lg(t,i,o){for(var u=(t.mode&1)!==0;ee!==null;){var d=ee,p=d.child;if(d.tag===22&&u){var y=d.memoizedState!==null||Ya;if(!y){var E=d.alternate,k=E!==null&&E.memoizedState!==null||At;E=Ya;var U=At;if(Ya=y,(At=k)&&!U)for(ee=d;ee!==null;)y=ee,k=y.child,y.tag===22&&y.memoizedState!==null?Fg(d):k!==null?(k.return=y,ee=k):Fg(d);for(;p!==null;)ee=p,Lg(p),p=p.sibling;ee=d,Ya=E,At=U}Mg(t)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ee=p):Mg(t)}}function Mg(t){for(;ee!==null;){var i=ee;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:At||Qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!At)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:On(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&bp(i,p,u);break;case 3:var y=i.updateQueue;if(y!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}bp(i,y,o)}break;case 5:var E=i.stateNode;if(o===null&&i.flags&4){o=E;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var W=U.memoizedState;if(W!==null){var G=W.dehydrated;G!==null&&Rn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}At||i.flags&512&&Sh(i)}catch($){Ye(i,i.return,$)}}if(i===t){ee=null;break}if(o=i.sibling,o!==null){o.return=i.return,ee=o;break}ee=i.return}}function bg(t){for(;ee!==null;){var i=ee;if(i===t){ee=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ee=o;break}ee=i.return}}function Fg(t){for(;ee!==null;){var i=ee;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Qa(4,i)}catch(k){Ye(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Ye(i,d,k)}}var p=i.return;try{Sh(i)}catch(k){Ye(i,p,k)}break;case 5:var y=i.return;try{Sh(i)}catch(k){Ye(i,y,k)}}}catch(k){Ye(i,i.return,k)}if(i===t){ee=null;break}var E=i.sibling;if(E!==null){E.return=i.return,ee=E;break}ee=i.return}}var oE=Math.ceil,Xa=fe.ReactCurrentDispatcher,kh=fe.ReactCurrentOwner,gn=fe.ReactCurrentBatchConfig,ke=0,ht=null,tt=null,Et=0,sn=0,qs=Gr(0),ot=0,hl=null,ji=0,Ja=0,Rh=0,dl=null,$t=null,Nh=0,Ks=1/0,Er=null,Za=!1,Ah=null,Jr=null,eu=!1,Zr=null,tu=0,fl=0,Ph=null,nu=-1,ru=0;function xt(){return ke&6?je():nu!==-1?nu:nu=je()}function ei(t){return t.mode&1?ke&2&&Et!==0?Et&-Et:Hw.transition!==null?(ru===0&&(ru=Ni()),ru):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:Vo(t.type)),t):1}function Ln(t,i,o,u){if(50<fl)throw fl=0,Ph=null,Error(n(185));Fr(t,o,u),(!(ke&2)||t!==ht)&&(t===ht&&(!(ke&2)&&(Ja|=o),ot===4&&ti(t,Et)),Wt(t,u),o===1&&ke===0&&!(i.mode&1)&&(Ks=je()+500,Oa&&Kr()))}function Wt(t,i){var o=t.callbackNode;ur(t,i);var u=Ri(t,t===ht?Et:0);if(u===0)o!==null&&bo(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&bo(o),i===1)t.tag===0?Bw(jg.bind(null,t)):Tp(jg.bind(null,t)),Uw(function(){!(ke&6)&&Kr()}),o=null;else{switch(jr(u)){case 1:o=Ci;break;case 4:o=Lr;break;case 16:o=un;break;case 536870912:o=ra;break;default:o=un}o=qg(o,Ug.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Ug(t,i){if(nu=-1,ru=0,ke&6)throw Error(n(327));var o=t.callbackNode;if(Ys()&&t.callbackNode!==o)return null;var u=Ri(t,t===ht?Et:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=iu(t,u);else{i=u;var d=ke;ke|=2;var p=Vg();(ht!==t||Et!==i)&&(Er=null,Ks=je()+500,Vi(t,i));do try{uE();break}catch(E){zg(t,E)}while(!0);Kc(),Xa.current=p,ke=d,tt!==null?i=0:(ht=null,Et=0,i=ot)}if(i!==0){if(i===2&&(d=en(t),d!==0&&(u=d,i=Oh(t,d))),i===1)throw o=hl,Vi(t,0),ti(t,u),Wt(t,je()),o;if(i===6)ti(t,u);else{if(d=t.current.alternate,!(u&30)&&!lE(d)&&(i=iu(t,u),i===2&&(p=en(t),p!==0&&(u=p,i=Oh(t,p))),i===1))throw o=hl,Vi(t,0),ti(t,u),Wt(t,je()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Bi(t,$t,Er);break;case 3:if(ti(t,u),(u&130023424)===u&&(i=Nh+500-je(),10<i)){if(Ri(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){xt(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Fc(Bi.bind(null,t,$t,Er),i);break}Bi(t,$t,Er);break;case 4:if(ti(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var y=31-Ot(u);p=1<<y,y=i[y],y>d&&(d=y),u&=~p}if(u=d,u=je()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*oE(u/1960))-u,10<u){t.timeoutHandle=Fc(Bi.bind(null,t,$t,Er),u);break}Bi(t,$t,Er);break;case 5:Bi(t,$t,Er);break;default:throw Error(n(329))}}}return Wt(t,je()),t.callbackNode===o?Ug.bind(null,t):null}function Oh(t,i){var o=dl;return t.current.memoizedState.isDehydrated&&(Vi(t,i).flags|=256),t=iu(t,i),t!==2&&(i=$t,$t=o,i!==null&&Dh(i)),t}function Dh(t){$t===null?$t=t:$t.push.apply($t,t)}function lE(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!An(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ti(t,i){for(i&=~Rh,i&=~Ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ot(i),u=1<<o;t[o]=-1,i&=~u}}function jg(t){if(ke&6)throw Error(n(327));Ys();var i=Ri(t,0);if(!(i&1))return Wt(t,je()),null;var o=iu(t,i);if(t.tag!==0&&o===2){var u=en(t);u!==0&&(i=u,o=Oh(t,u))}if(o===1)throw o=hl,Vi(t,0),ti(t,i),Wt(t,je()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Bi(t,$t,Er),Wt(t,je()),null}function xh(t,i){var o=ke;ke|=1;try{return t(i)}finally{ke=o,ke===0&&(Ks=je()+500,Oa&&Kr())}}function zi(t){Zr!==null&&Zr.tag===0&&!(ke&6)&&Ys();var i=ke;ke|=1;var o=gn.transition,u=Ee;try{if(gn.transition=null,Ee=1,t)return t()}finally{Ee=u,gn.transition=o,ke=i,!(ke&6)&&Kr()}}function Lh(){sn=qs.current,$e(qs)}function Vi(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Fw(o)),tt!==null)for(o=tt.return;o!==null;){var u=o;switch(Hc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:$s(),$e(Vt),$e(kt),nh();break;case 5:eh(u);break;case 4:$s();break;case 13:$e(qe);break;case 19:$e(qe);break;case 10:Yc(u.type._context);break;case 22:case 23:Lh()}o=o.return}if(ht=t,tt=t=ni(t.current,null),Et=sn=i,ot=0,hl=null,Rh=Ja=ji=0,$t=dl=null,bi!==null){for(i=0;i<bi.length;i++)if(o=bi[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var y=p.next;p.next=d,u.next=y}o.pending=u}bi=null}return t}function zg(t,i){do{var o=tt;try{if(Kc(),Va.current=Wa,Ba){for(var u=Ke.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ba=!1}if(Ui=0,ct=st=Ke=null,sl=!1,ol=0,kh.current=null,o===null||o.return===null){ot=1,hl=i,tt=null;break}e:{var p=t,y=o.return,E=o,k=i;if(i=Et,E.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,W=E,G=W.tag;if(!(W.mode&1)&&(G===0||G===11||G===15)){var $=W.alternate;$?(W.updateQueue=$.updateQueue,W.memoizedState=$.memoizedState,W.lanes=$.lanes):(W.updateQueue=null,W.memoizedState=null)}var J=hg(y);if(J!==null){J.flags&=-257,dg(J,y,E,p,i),J.mode&1&&cg(p,U,i),i=J,k=U;var te=i.updateQueue;if(te===null){var ne=new Set;ne.add(k),i.updateQueue=ne}else te.add(k);break e}else{if(!(i&1)){cg(p,U,i),Mh();break e}k=Error(n(426))}}else if(We&&E.mode&1){var et=hg(y);if(et!==null){!(et.flags&65536)&&(et.flags|=256),dg(et,y,E,p,i),Gc(Ws(k,E));break e}}p=k=Ws(k,E),ot!==4&&(ot=2),dl===null?dl=[p]:dl.push(p),p=y;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var b=ag(p,k,i);Mp(p,b);break e;case 1:E=k;var A=p.type,F=p.stateNode;if(!(p.flags&128)&&(typeof A.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Jr===null||!Jr.has(F)))){p.flags|=65536,i&=-i,p.lanes|=i;var q=ug(p,E,i);Mp(p,q);break e}}p=p.return}while(p!==null)}Hg(o)}catch(re){i=re,tt===o&&o!==null&&(tt=o=o.return);continue}break}while(!0)}function Vg(){var t=Xa.current;return Xa.current=Wa,t===null?Wa:t}function Mh(){(ot===0||ot===3||ot===2)&&(ot=4),ht===null||!(ji&268435455)&&!(Ja&268435455)||ti(ht,Et)}function iu(t,i){var o=ke;ke|=2;var u=Vg();(ht!==t||Et!==i)&&(Er=null,Vi(t,i));do try{aE();break}catch(d){zg(t,d)}while(!0);if(Kc(),ke=o,Xa.current=u,tt!==null)throw Error(n(261));return ht=null,Et=0,ot}function aE(){for(;tt!==null;)Bg(tt)}function uE(){for(;tt!==null&&!ta();)Bg(tt)}function Bg(t){var i=Gg(t.alternate,t,sn);t.memoizedProps=t.pendingProps,i===null?Hg(t):tt=i,kh.current=null}function Hg(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=nE(o,i),o!==null){o.flags&=32767,tt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,tt=null;return}}else if(o=tE(o,i,sn),o!==null){tt=o;return}if(i=i.sibling,i!==null){tt=i;return}tt=i=t}while(i!==null);ot===0&&(ot=5)}function Bi(t,i,o){var u=Ee,d=gn.transition;try{gn.transition=null,Ee=1,cE(t,i,o,u)}finally{gn.transition=d,Ee=u}return null}function cE(t,i,o,u){do Ys();while(Zr!==null);if(ke&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(be(t,p),t===ht&&(tt=ht=null,Et=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||eu||(eu=!0,qg(un,function(){return Ys(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=gn.transition,gn.transition=null;var y=Ee;Ee=1;var E=ke;ke|=4,kh.current=null,iE(t,o),xg(o,t),Pw(Mc),Vr=!!Lc,Mc=Lc=null,t.current=o,sE(o),yc(),ke=E,Ee=y,gn.transition=p}else t.current=o;if(eu&&(eu=!1,Zr=t,tu=d),p=t.pendingLanes,p===0&&(Jr=null),ia(o.stateNode),Wt(t,je()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Za)throw Za=!1,t=Ah,Ah=null,t;return tu&1&&t.tag!==0&&Ys(),p=t.pendingLanes,p&1?t===Ph?fl++:(fl=0,Ph=t):fl=0,Kr(),null}function Ys(){if(Zr!==null){var t=jr(tu),i=gn.transition,o=Ee;try{if(gn.transition=null,Ee=16>t?16:t,Zr===null)var u=!1;else{if(t=Zr,Zr=null,tu=0,ke&6)throw Error(n(331));var d=ke;for(ke|=4,ee=t.current;ee!==null;){var p=ee,y=p.child;if(ee.flags&16){var E=p.deletions;if(E!==null){for(var k=0;k<E.length;k++){var U=E[k];for(ee=U;ee!==null;){var W=ee;switch(W.tag){case 0:case 11:case 15:cl(8,W,p)}var G=W.child;if(G!==null)G.return=W,ee=G;else for(;ee!==null;){W=ee;var $=W.sibling,J=W.return;if(Ng(W),W===U){ee=null;break}if($!==null){$.return=J,ee=$;break}ee=J}}}var te=p.alternate;if(te!==null){var ne=te.child;if(ne!==null){te.child=null;do{var et=ne.sibling;ne.sibling=null,ne=et}while(ne!==null)}}ee=p}}if(p.subtreeFlags&2064&&y!==null)y.return=p,ee=y;else e:for(;ee!==null;){if(p=ee,p.flags&2048)switch(p.tag){case 0:case 11:case 15:cl(9,p,p.return)}var b=p.sibling;if(b!==null){b.return=p.return,ee=b;break e}ee=p.return}}var A=t.current;for(ee=A;ee!==null;){y=ee;var F=y.child;if(y.subtreeFlags&2064&&F!==null)F.return=y,ee=F;else e:for(y=A;ee!==null;){if(E=ee,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:Qa(9,E)}}catch(re){Ye(E,E.return,re)}if(E===y){ee=null;break e}var q=E.sibling;if(q!==null){q.return=E.return,ee=q;break e}ee=E.return}}if(ke=d,Kr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ki,t)}catch{}u=!0}return u}finally{Ee=o,gn.transition=i}}return!1}function $g(t,i,o){i=Ws(o,i),i=ag(t,i,1),t=Qr(t,i,1),i=xt(),t!==null&&(Fr(t,1,i),Wt(t,i))}function Ye(t,i,o){if(t.tag===3)$g(t,t,o);else for(;i!==null;){if(i.tag===3){$g(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Jr===null||!Jr.has(u))){t=Ws(o,t),t=ug(i,t,1),i=Qr(i,t,1),t=xt(),i!==null&&(Fr(i,1,t),Wt(i,t));break}}i=i.return}}function hE(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=xt(),t.pingedLanes|=t.suspendedLanes&o,ht===t&&(Et&o)===o&&(ot===4||ot===3&&(Et&130023424)===Et&&500>je()-Nh?Vi(t,0):Rh|=o),Wt(t,i)}function Wg(t,i){i===0&&(t.mode&1?(i=ys,ys<<=1,!(ys&130023424)&&(ys=4194304)):i=1);var o=xt();t=yr(t,i),t!==null&&(Fr(t,i,o),Wt(t,o))}function dE(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Wg(t,o)}function fE(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Wg(t,o)}var Gg;Gg=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Vt.current)Ht=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return Ht=!1,eE(t,i,o);Ht=!!(t.flags&131072)}else Ht=!1,We&&i.flags&1048576&&Cp(i,xa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ka(t,i),t=i.pendingProps;var d=Fs(i,kt.current);Hs(i,o),d=sh(null,i,u,t,d,o);var p=oh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Bt(u)?(p=!0,Pa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Jc(i),d.updater=Ga,i.stateNode=d,d._reactInternals=i,dh(i,u,t,o),i=mh(null,i,u,!0,p,o)):(i.tag=0,We&&p&&Bc(i),Dt(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ka(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=gE(u),t=On(u,t),d){case 0:i=gh(null,i,u,t,o);break e;case 1:i=yg(null,i,u,t,o);break e;case 11:i=fg(null,i,u,t,o);break e;case 14:i=pg(null,i,u,On(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:On(u,d),gh(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:On(u,d),yg(t,i,u,d,o);case 3:e:{if(vg(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,d=p.element,Lp(t,i),ja(i,u,null,o);var y=i.memoizedState;if(u=y.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ws(Error(n(423)),i),i=wg(t,i,u,o,d);break e}else if(u!==d){d=Ws(Error(n(424)),i),i=wg(t,i,u,o,d);break e}else for(rn=Wr(i.stateNode.containerInfo.firstChild),nn=i,We=!0,Pn=null,o=Dp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(zs(),u===d){i=wr(t,i,o);break e}Dt(t,i,u,o)}i=i.child}return i;case 5:return Fp(i),t===null&&Wc(i),u=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,y=d.children,bc(u,d)?y=null:p!==null&&bc(u,p)&&(i.flags|=32),_g(t,i),Dt(t,i,y,o),i.child;case 6:return t===null&&Wc(i),null;case 13:return Eg(t,i,o);case 4:return Zc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Vs(i,null,u,o):Dt(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:On(u,d),fg(t,i,u,d,o);case 7:return Dt(t,i,i.pendingProps,o),i.child;case 8:return Dt(t,i,i.pendingProps.children,o),i.child;case 12:return Dt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,y=d.value,ze(ba,u._currentValue),u._currentValue=y,p!==null)if(An(p.value,y)){if(p.children===d.children&&!Vt.current){i=wr(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var E=p.dependencies;if(E!==null){y=p.child;for(var k=E.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=vr(-1,o&-o),k.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var W=U.pending;W===null?k.next=k:(k.next=W.next,W.next=k),U.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Qc(p.return,o,i),E.lanes|=o;break}k=k.next}}else if(p.tag===10)y=p.type===i.type?null:p.child;else if(p.tag===18){if(y=p.return,y===null)throw Error(n(341));y.lanes|=o,E=y.alternate,E!==null&&(E.lanes|=o),Qc(y,o,i),y=p.sibling}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===i){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}Dt(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Hs(i,o),d=fn(d),u=u(d),i.flags|=1,Dt(t,i,u,o),i.child;case 14:return u=i.type,d=On(u,i.pendingProps),d=On(u.type,d),pg(t,i,u,d,o);case 15:return gg(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:On(u,d),Ka(t,i),i.tag=1,Bt(u)?(t=!0,Pa(i)):t=!1,Hs(i,o),og(i,u,d),dh(i,u,d,o),mh(null,i,u,!0,t,o);case 19:return Sg(t,i,o);case 22:return mg(t,i,o)}throw Error(n(156,i.tag))};function qg(t,i){return ms(t,i)}function pE(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,i,o,u){return new pE(t,i,o,u)}function bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gE(t){if(typeof t=="function")return bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===L)return 11;if(t===Tt)return 14}return 2}function ni(t,i){var o=t.alternate;return o===null?(o=mn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function su(t,i,o,u,d,p){var y=2;if(u=t,typeof t=="function")bh(t)&&(y=1);else if(typeof t=="string")y=5;else e:switch(t){case O:return Hi(o.children,d,p,i);case I:y=8,d|=8;break;case T:return t=mn(12,o,i,d|2),t.elementType=T,t.lanes=p,t;case S:return t=mn(13,o,i,d),t.elementType=S,t.lanes=p,t;case Je:return t=mn(19,o,i,d),t.elementType=Je,t.lanes=p,t;case Le:return ou(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:y=10;break e;case D:y=9;break e;case L:y=11;break e;case Tt:y=14;break e;case Ct:y=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=mn(y,o,i,d),i.elementType=t,i.type=u,i.lanes=p,i}function Hi(t,i,o,u){return t=mn(7,t,u,i),t.lanes=o,t}function ou(t,i,o,u){return t=mn(22,t,u,i),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function Fh(t,i,o){return t=mn(6,t,null,i),t.lanes=o,t}function Uh(t,i,o){return i=mn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function mE(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=br(0),this.expirationTimes=br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function jh(t,i,o,u,d,p,y,E,k){return t=new mE(t,i,o,E,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=mn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(p),t}function _E(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Kg(t){if(!t)return qr;t=t._reactInternals;e:{if(In(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Bt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Bt(o))return Ip(t,o,i)}return i}function Yg(t,i,o,u,d,p,y,E,k){return t=jh(o,u,!0,t,d,p,y,E,k),t.context=Kg(null),o=t.current,u=xt(),d=ei(o),p=vr(u,d),p.callback=i??null,Qr(o,p,d),t.current.lanes=d,Fr(t,d,u),Wt(t,u),t}function lu(t,i,o,u){var d=i.current,p=xt(),y=ei(d);return o=Kg(o),i.context===null?i.context=o:i.pendingContext=o,i=vr(p,y),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Qr(d,i,y),t!==null&&(Ln(t,d,y,p),Ua(t,d,y)),y}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qg(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function zh(t,i){Qg(t,i),(t=t.alternate)&&Qg(t,i)}var Xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vh(t){this._internalRoot=t}uu.prototype.render=Vh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));lu(t,i,null,null)},uu.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zi(function(){lu(null,t,null,null)}),i[pr]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var i=ua();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Hn.length&&i!==0&&i<Hn[o].priority;o++);Hn.splice(o,0,t),o===0&&da(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function yE(t,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var U=au(y);p.call(U)}}var y=Yg(i,u,t,0,null,!1,!1,"",Jg);return t._reactRootContainer=y,t[pr]=y.current,Xo(t.nodeType===8?t.parentNode:t),zi(),y}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var E=u;u=function(){var U=au(k);E.call(U)}}var k=jh(t,0,!1,null,null,!1,!1,"",Jg);return t._reactRootContainer=k,t[pr]=k.current,Xo(t.nodeType===8?t.parentNode:t),zi(function(){lu(i,k,o,u)}),k}function hu(t,i,o,u,d){var p=o._reactRootContainer;if(p){var y=p;if(typeof d=="function"){var E=d;d=function(){var k=au(y);E.call(k)}}lu(i,y,t,d)}else y=yE(o,i,t,d,u);return au(y)}la=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mr(i.pendingLanes);o!==0&&(Ur(i,o|1),Wt(i,je()),!(ke&6)&&(Ks=je()+500,Kr()))}break;case 13:zi(function(){var u=yr(t,1);if(u!==null){var d=xt();Ln(u,t,1,d)}}),zh(t,1)}},vs=function(t){if(t.tag===13){var i=yr(t,134217728);if(i!==null){var o=xt();Ln(i,t,134217728,o)}zh(t,134217728)}},aa=function(t){if(t.tag===13){var i=ei(t),o=yr(t,i);if(o!==null){var u=xt();Ln(o,t,i,u)}zh(t,i)}},ua=function(){return Ee},ca=function(t,i){var o=Ee;try{return Ee=t,i()}finally{Ee=o}},Ao=function(t,i,o){switch(i){case"input":if(wo(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=Na(u);if(!d)throw Error(n(90));ss(u),wo(u,d)}}}break;case"textarea":us(t,o);break;case"select":i=o.value,i!=null&&sr(t,!!o.multiple,i,!1)}},ds=xh,Oo=zi;var vE={usingClientEntryPoint:!1,Events:[el,Ms,Na,lr,Po,xh]},pl={findFiberByHostInstance:Di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wE={bundleType:pl.bundleType,version:pl.version,rendererPackageName:pl.rendererPackageName,rendererConfig:pl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mo(t),t===null?null:t.stateNode},findFiberByHostInstance:pl.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{ki=du.inject(wE),Zt=du}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vE,Gt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(i))throw Error(n(200));return _E(t,i,null,o)},Gt.createRoot=function(t,i){if(!Bh(t))throw Error(n(299));var o=!1,u="",d=Xg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=jh(t,1,!1,null,null,o,!1,u,d),t[pr]=i.current,Xo(t.nodeType===8?t.parentNode:t),new Vh(i)},Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Mo(i),t=t===null?null:t.stateNode,t},Gt.flushSync=function(t){return zi(t)},Gt.hydrate=function(t,i,o){if(!cu(i))throw Error(n(200));return hu(null,t,i,!0,o)},Gt.hydrateRoot=function(t,i,o){if(!Bh(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",y=Xg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),i=Yg(i,null,t,1,o??null,d,!1,p,y),t[pr]=i.current,Xo(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new uu(i)},Gt.render=function(t,i,o){if(!cu(i))throw Error(n(200));return hu(null,t,i,!1,o)},Gt.unmountComponentAtNode=function(t){if(!cu(t))throw Error(n(40));return t._reactRootContainer?(zi(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1},Gt.unstable_batchedUpdates=xh,Gt.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!cu(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return hu(t,i,o,!1,u)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var om;function DE(){if(om)return Gh.exports;om=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gh.exports=OE(),Gh.exports}var lm;function xE(){if(lm)return fu;lm=1;var r=DE();return fu.createRoot=r.createRoot,fu.hydrateRoot=r.hydrateRoot,fu}var LE=xE(),am={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(r,e){if(!r)throw fo(e)},fo=function(r){return new Error("Firebase Database ("+U_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},ME=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],h=r[n++],g=r[n++],_=((l&7)<<18|(c&63)<<12|(h&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const c=r[n++],h=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|h&63)}}return e.join("")},jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],h=l+1<r.length,g=h?r[l+1]:0,_=l+2<r.length,v=_?r[l+2]:0,R=c>>2,C=(c&3)<<4|g>>4;let N=(g&15)<<2|v>>6,V=v&63;_||(V=64,h||(N=64)),s.push(n[R],n[C],n[N],n[V])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(j_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ME(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],g=l<r.length?n[r.charAt(l)]:0;++l;const v=l<r.length?n[r.charAt(l)]:64;++l;const C=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||g==null||v==null||C==null)throw new bE;const N=c<<2|g>>4;if(s.push(N),v!==64){const V=g<<4&240|v>>2;if(s.push(V),C!==64){const B=v<<6&192|C;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z_=function(r){const e=j_(r);return jd.encodeByteArray(e,!0)},ku=function(r){return z_(r).replace(/\./g,"")},Ru=function(r){try{return jd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(r){return V_(void 0,r)}function V_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UE(n)||(r[n]=V_(r[n],e[n]));return r}function UE(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=()=>jE().__FIREBASE_DEFAULTS__,VE=()=>{if(typeof process>"u"||typeof am>"u")return;const r=am.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},BE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ru(r[1]);return e&&JSON.parse(e)},zd=()=>{try{return zE()||VE()||BE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},B_=r=>{var e,n;return(n=(e=zd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},Vd=r=>{const e=B_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},H_=()=>{var r;return(r=zd())===null||r===void 0?void 0:r.config},$_=r=>{var e;return(e=zd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ku(JSON.stringify(n)),ku(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function HE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function G_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $E(){const r=bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function WE(){return U_.NODE_ADMIN===!0}function q_(){try{return typeof indexedDB=="object"}catch{return!1}}function K_(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;e(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}function GE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="FirebaseError";class vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qE,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],h=c?KE(c,s):"Error",g=`${this.serviceName}: ${h} (${l}).`;return new vn(l,g,s)}}function KE(r,e){return r.replace(YE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const YE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(r){return JSON.parse(r)}function mt(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=function(r){let e={},n={},s={},l="";try{const c=r.split(".");e=Pl(Ru(c[0])||""),n=Pl(Ru(c[1])||""),l=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},QE=function(r){const e=Y_(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XE=function(r){const e=Y_(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function io(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function pd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nu(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Ol(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const c=r[l],h=e[l];if(um(c)&&um(h)){if(!Ol(c,h))return!1}else if(c!==h)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function um(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let C=0;C<16;C++)s[C]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let C=0;C<16;C++)s[C]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let C=16;C<80;C++){const N=s[C-3]^s[C-8]^s[C-14]^s[C-16];s[C]=(N<<1|N>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],h=this.chain_[2],g=this.chain_[3],_=this.chain_[4],v,R;for(let C=0;C<80;C++){C<40?C<20?(v=g^c&(h^g),R=1518500249):(v=c^h^g,R=1859775393):C<60?(v=c&h|g&(c|h),R=2400959708):(v=c^h^g,R=3395469782);const N=(l<<5|l>>>27)+v+_+R+s[C]&4294967295;_=g,g=h,h=(c<<30|c>>>2)&4294967295,c=l,l=N}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+g&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const c=this.buf_;let h=this.inbuf_;for(;l<n;){if(h===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(c[h]=e.charCodeAt(l),++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}else for(;l<n;)if(c[h]=e[l],++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[l]>>c&255,++s;return e}}function ZE(r,e){const n=new eI(r,e);return n.subscribe.bind(n)}class eI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tI(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Yh),l.error===void 0&&(l.error=Yh),l.complete===void 0&&(l.complete=Yh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tI(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Yh(){}function Zu(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const c=l-55296;s++,K(s<r.length,"Surrogate pair missing trail surrogate.");const h=r.charCodeAt(s)-56320;l=65536+(c<<10)+h}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},ec=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=1e3,iI=2,sI=4*60*60*1e3,oI=.5;function cm(r,e=rI,n=iI){const s=e*Math.pow(n,r),l=Math.round(oI*s*(Math.random()-.5)*2);return Math.min(sI,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(r){return r&&r._delegate?r._delegate:r}class ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uI(e))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=$i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$i){return this.instances.has(e)}getOptions(e=$i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&h.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(l,c);const h=this.instances.get(l);return h&&e(h,l),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$i){return this.component?this.component.multipleInstances?e:$i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aI(r){return r===$i?void 0:r}function uI(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const hI={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},dI=Oe.INFO,fI={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},pI=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=fI[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Bl=class{constructor(e){this.name=e,this._logLevel=dI,this._logHandler=pI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}};const gI=(r,e)=>e.some(n=>r instanceof n);let hm,dm;function mI(){return hm||(hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _I(){return dm||(dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,gd=new WeakMap,X_=new WeakMap,Qh=new WeakMap,$d=new WeakMap;function yI(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{n(hi(r.result)),l()},h=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&Q_.set(n,r)}).catch(()=>{}),$d.set(e,r),e}function vI(r){if(gd.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{n(),l()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});gd.set(r,e)}let md={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return gd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||X_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function wI(r){md=r(md)}function EI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Xh(this),e,...n);return X_.set(s,e.sort?e.sort():[e]),hi(s)}:_I().includes(r)?function(...e){return r.apply(Xh(this),e),hi(Q_.get(this))}:function(...e){return hi(r.apply(Xh(this),e))}}function II(r){return typeof r=="function"?EI(r):(r instanceof IDBTransaction&&vI(r),gI(r,mI())?new Proxy(r,md):r)}function hi(r){if(r instanceof IDBRequest)return yI(r);if(Qh.has(r))return Qh.get(r);const e=II(r);return e!==r&&(Qh.set(r,e),$d.set(e,r)),e}const Xh=r=>$d.get(r);function J_(r,e,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const h=indexedDB.open(r,e),g=hi(h);return s&&h.addEventListener("upgradeneeded",_=>{s(hi(h.result),_.oldVersion,_.newVersion,hi(h.transaction),_)}),n&&h.addEventListener("blocked",_=>n(_.oldVersion,_.newVersion,_)),g.then(_=>{c&&_.addEventListener("close",()=>c()),l&&_.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),g}const SI=["get","getKey","getAll","getAllKeys","count"],TI=["put","add","delete","clear"],Jh=new Map;function fm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Jh.get(e))return Jh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=TI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||SI.includes(n)))return;const c=async function(h,...g){const _=this.transaction(h,l?"readwrite":"readonly");let v=_.store;return s&&(v=v.index(g.shift())),(await Promise.all([v[n](...g),l&&_.done]))[0]};return Jh.set(e,c),c}wI(r=>({...r,get:(e,n,s)=>fm(e,n)||r.get(e,n,s),has:(e,n)=>!!fm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",pm="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Bl("@firebase/app"),RI="@firebase/app-compat",NI="@firebase/analytics-compat",AI="@firebase/analytics",PI="@firebase/app-check-compat",OI="@firebase/app-check",DI="@firebase/auth",xI="@firebase/auth-compat",LI="@firebase/database",MI="@firebase/data-connect",bI="@firebase/database-compat",FI="@firebase/functions",UI="@firebase/functions-compat",jI="@firebase/installations",zI="@firebase/installations-compat",VI="@firebase/messaging",BI="@firebase/messaging-compat",HI="@firebase/performance",$I="@firebase/performance-compat",WI="@firebase/remote-config",GI="@firebase/remote-config-compat",qI="@firebase/storage",KI="@firebase/storage-compat",YI="@firebase/firestore",QI="@firebase/vertexai",XI="@firebase/firestore-compat",JI="firebase",ZI="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="[DEFAULT]",eS={[_d]:"fire-core",[RI]:"fire-core-compat",[AI]:"fire-analytics",[NI]:"fire-analytics-compat",[OI]:"fire-app-check",[PI]:"fire-app-check-compat",[DI]:"fire-auth",[xI]:"fire-auth-compat",[LI]:"fire-rtdb",[MI]:"fire-data-connect",[bI]:"fire-rtdb-compat",[FI]:"fire-fn",[UI]:"fire-fn-compat",[jI]:"fire-iid",[zI]:"fire-iid-compat",[VI]:"fire-fcm",[BI]:"fire-fcm-compat",[HI]:"fire-perf",[$I]:"fire-perf-compat",[WI]:"fire-rc",[GI]:"fire-rc-compat",[qI]:"fire-gcs",[KI]:"fire-gcs-compat",[YI]:"fire-fst",[XI]:"fire-fst-compat",[QI]:"fire-vertex","fire-js":"fire-js",[JI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map,tS=new Map,vd=new Map;function gm(r,e){try{r.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function yn(r){const e=r.name;if(vd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;vd.set(e,r);for(const n of Au.values())gm(n,r);for(const n of tS.values())gm(n,r);return!0}function Or(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function ui(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new ns("app","Firebase",nS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=ZI;function Z_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yd,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw di.create("bad-app-name",{appName:String(l)});if(n||(n=H_()),!n)throw di.create("no-options");const c=Au.get(l);if(c){if(Ol(n,c.options)&&Ol(s,c.config))return c;throw di.create("duplicate-app",{appName:l})}const h=new cI(l);for(const _ of vd.values())h.addComponent(_);const g=new rS(n,s,h);return Au.set(l,g),g}function Hl(r=yd){const e=Au.get(r);if(!e&&r===yd&&H_())return Z_();if(!e)throw di.create("no-app",{appName:r});return e}function Pt(r,e,n){var s;let l=(s=eS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const c=l.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const g=[`Unable to register library "${l}" with version "${e}":`];c&&g.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&h&&g.push("and"),h&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(g.join(" "));return}yn(new ln(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="firebase-heartbeat-database",sS=1,Dl="firebase-heartbeat-store";let Zh=null;function ey(){return Zh||(Zh=J_(iS,sS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Dl)}catch(n){console.warn(n)}}}}).catch(r=>{throw di.create("idb-open",{originalErrorMessage:r.message})})),Zh}async function oS(r){try{const n=(await ey()).transaction(Dl),s=await n.objectStore(Dl).get(ty(r));return await n.done,s}catch(e){if(e instanceof vn)Rr.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function mm(r,e){try{const s=(await ey()).transaction(Dl,"readwrite");await s.objectStore(Dl).put(e,ty(r)),await s.done}catch(n){if(n instanceof vn)Rr.warn(n.message);else{const s=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(s.message)}}}function ty(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=1024,aS=30*24*60*60*1e3;class uS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=_m();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const g=new Date(h.date).valueOf();return Date.now()-g<=aS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_m(),{heartbeatsToSend:s,unsentEntries:l}=cS(this._heartbeatsCache.heartbeats),c=ku(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Rr.warn(n),""}}}function _m(){return new Date().toISOString().substring(0,10)}function cS(r,e=lS){const n=[];let s=r.slice();for(const l of r){const c=n.find(h=>h.agent===l.agent);if(c){if(c.dates.push(l.date),ym(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),ym(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q_()?K_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function ym(r){return ku(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(r){yn(new ln("platform-logger",e=>new CI(e),"PRIVATE")),yn(new ln("heartbeat",e=>new uS(e),"PRIVATE")),Pt(_d,pm,r),Pt(_d,pm,"esm2017"),Pt("fire-js","")}dS("");var fS="firebase",pS="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(fS,pS,"app");const ny="@firebase/installations",Wd="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=1e4,iy=`w:${Wd}`,sy="FIS_v2",gS="https://firebaseinstallations.googleapis.com/v1",mS=60*60*1e3,_S="installations",yS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yi=new ns(_S,yS,vS);function oy(r){return r instanceof vn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly({projectId:r}){return`${gS}/projects/${r}/installations`}function ay(r){return{token:r.token,requestStatus:2,expiresIn:ES(r.expiresIn),creationTime:Date.now()}}async function uy(r,e){const s=(await e.json()).error;return Yi.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function cy({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function wS(r,{refreshToken:e}){const n=cy(r);return n.append("Authorization",IS(e)),n}async function hy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function ES(r){return Number(r.replace("s","000"))}function IS(r){return`${sy} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=ly(r),l=cy(r),c=e.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const h={fid:n,authVersion:sy,appId:r.appId,sdkVersion:iy},g={method:"POST",headers:l,body:JSON.stringify(h)},_=await hy(()=>fetch(s,g));if(_.ok){const v=await _.json();return{fid:v.fid||n,registrationStatus:2,refreshToken:v.refreshToken,authToken:ay(v.authToken)}}else throw await uy("Create Installation",_)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=/^[cdef][\w-]{21}$/,wd="";function kS(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=RS(r);return CS.test(n)?n:wd}catch{return wd}}function RS(r){return TS(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;function py(r,e){const n=tc(r);gy(n,e),NS(n,e)}function gy(r,e){const n=fy.get(r);if(n)for(const s of n)s(e)}function NS(r,e){const n=AS();n&&n.postMessage({key:r,fid:e}),PS()}let Gi=null;function AS(){return!Gi&&"BroadcastChannel"in self&&(Gi=new BroadcastChannel("[Firebase] FID Change"),Gi.onmessage=r=>{gy(r.data.key,r.data.fid)}),Gi}function PS(){fy.size===0&&Gi&&(Gi.close(),Gi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="firebase-installations-database",DS=1,Qi="firebase-installations-store";let ed=null;function Gd(){return ed||(ed=J_(OS,DS,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Qi)}}})),ed}async function Pu(r,e){const n=tc(r),l=(await Gd()).transaction(Qi,"readwrite"),c=l.objectStore(Qi),h=await c.get(n);return await c.put(e,n),await l.done,(!h||h.fid!==e.fid)&&py(r,e.fid),e}async function my(r){const e=tc(r),s=(await Gd()).transaction(Qi,"readwrite");await s.objectStore(Qi).delete(e),await s.done}async function nc(r,e){const n=tc(r),l=(await Gd()).transaction(Qi,"readwrite"),c=l.objectStore(Qi),h=await c.get(n),g=e(h);return g===void 0?await c.delete(n):await c.put(g,n),await l.done,g&&(!h||h.fid!==g.fid)&&py(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(r){let e;const n=await nc(r.appConfig,s=>{const l=xS(s),c=LS(r,l);return e=c.registrationPromise,c.installationEntry});return n.fid===wd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xS(r){const e=r||{fid:kS(),registrationStatus:0};return _y(e)}function LS(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Yi.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=MS(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bS(r)}:{installationEntry:e}}async function MS(r,e){try{const n=await SS(r,e);return Pu(r.appConfig,n)}catch(n){throw oy(n)&&n.customData.serverCode===409?await my(r.appConfig):await Pu(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bS(r){let e=await vm(r.appConfig);for(;e.registrationStatus===1;)await dy(100),e=await vm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await qd(r);return s||n}return e}function vm(r){return nc(r,e=>{if(!e)throw Yi.create("installation-not-found");return _y(e)})}function _y(r){return FS(r)?{fid:r.fid,registrationStatus:0}:r}function FS(r){return r.registrationStatus===1&&r.registrationTime+ry<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US({appConfig:r,heartbeatServiceProvider:e},n){const s=jS(r,n),l=wS(r,n),c=e.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const h={installation:{sdkVersion:iy,appId:r.appId}},g={method:"POST",headers:l,body:JSON.stringify(h)},_=await hy(()=>fetch(s,g));if(_.ok){const v=await _.json();return ay(v)}else throw await uy("Generate Auth Token",_)}function jS(r,{fid:e}){return`${ly(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(r,e=!1){let n;const s=await nc(r.appConfig,c=>{if(!yy(c))throw Yi.create("not-registered");const h=c.authToken;if(!e&&BS(h))return c;if(h.requestStatus===1)return n=zS(r,e),c;{if(!navigator.onLine)throw Yi.create("app-offline");const g=$S(c);return n=VS(r,g),g}});return n?await n:s.authToken}async function zS(r,e){let n=await wm(r.appConfig);for(;n.authToken.requestStatus===1;)await dy(100),n=await wm(r.appConfig);const s=n.authToken;return s.requestStatus===0?Kd(r,e):s}function wm(r){return nc(r,e=>{if(!yy(e))throw Yi.create("not-registered");const n=e.authToken;return WS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VS(r,e){try{const n=await US(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Pu(r.appConfig,s),n}catch(n){if(oy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await my(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pu(r.appConfig,s)}throw n}}function yy(r){return r!==void 0&&r.registrationStatus===2}function BS(r){return r.requestStatus===2&&!HS(r)}function HS(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+mS}function $S(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function WS(r){return r.requestStatus===1&&r.requestTime+ry<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(r){const e=r,{installationEntry:n,registrationPromise:s}=await qd(e);return s?s.catch(console.error):Kd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(r,e=!1){const n=r;return await KS(n),(await Kd(n,e)).token}async function KS(r){const{registrationPromise:e}=await qd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(r){if(!r||!r.options)throw td("App Configuration");if(!r.name)throw td("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw td(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function td(r){return Yi.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="installations",QS="installations-internal",XS=r=>{const e=r.getProvider("app").getImmediate(),n=YS(e),s=Or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},JS=r=>{const e=r.getProvider("app").getImmediate(),n=Or(e,vy).getImmediate();return{getId:()=>GS(n),getToken:l=>qS(n,l)}};function ZS(){yn(new ln(vy,XS,"PUBLIC")),yn(new ln(QS,JS,"PRIVATE"))}ZS();Pt(ny,Wd);Pt(ny,Wd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="analytics",eT="firebase_id",tT="origin",nT=60*1e3,rT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Bl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},on=new ns("analytics","Analytics",iT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(r){if(!r.startsWith(Yd)){const e=on.create("invalid-gtag-resource",{gtagURL:r});return Jt.warn(e.message),""}return r}function wy(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function oT(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function lT(r,e){const n=oT("firebase-js-sdk-policy",{createScriptURL:sT}),s=document.createElement("script"),l=`${Yd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function aT(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function uT(r,e,n,s,l,c){const h=s[l];try{if(h)await e[h];else{const _=(await wy(n)).find(v=>v.measurementId===l);_&&await e[_.appId]}}catch(g){Jt.error(g)}r("config",l,c)}async function cT(r,e,n,s,l){try{let c=[];if(l&&l.send_to){let h=l.send_to;Array.isArray(h)||(h=[h]);const g=await wy(n);for(const _ of h){const v=g.find(C=>C.measurementId===_),R=v&&e[v.appId];if(R)c.push(R);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),r("event",s,l||{})}catch(c){Jt.error(c)}}function hT(r,e,n,s){async function l(c,...h){try{if(c==="event"){const[g,_]=h;await cT(r,e,n,g,_)}else if(c==="config"){const[g,_]=h;await uT(r,e,n,s,g,_)}else if(c==="consent"){const[g,_]=h;r("consent",g,_)}else if(c==="get"){const[g,_,v]=h;r("get",g,_,v)}else if(c==="set"){const[g]=h;r("set",g)}else r(c,...h)}catch(g){Jt.error(g)}}return l}function dT(r,e,n,s,l){let c=function(...h){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=hT(c,r,e,n),{gtagCore:c,wrappedGtag:window[l]}}function fT(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Yd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=30,gT=1e3;class mT{constructor(e={},n=gT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ey=new mT;function _T(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function yT(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:_T(s)},c=rT.replace("{app-id}",n),h=await fetch(c,l);if(h.status!==200&&h.status!==304){let g="";try{const _=await h.json();!((e=_.error)===null||e===void 0)&&e.message&&(g=_.error.message)}catch{}throw on.create("config-fetch-failed",{httpStatus:h.status,responseMessage:g})}return h.json()}async function vT(r,e=Ey,n){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw on.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw on.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new IT;return setTimeout(async()=>{g.abort()},nT),Iy({appId:s,apiKey:l,measurementId:c},h,g,e)}async function Iy(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=Ey){var c;const{appId:h,measurementId:g}=r;try{await wT(s,e)}catch(_){if(g)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:g};throw _}try{const _=await yT(r);return l.deleteThrottleMetadata(h),_}catch(_){const v=_;if(!ET(v)){if(l.deleteThrottleMetadata(h),g)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:h,measurementId:g};throw _}const R=Number((c=v==null?void 0:v.customData)===null||c===void 0?void 0:c.httpStatus)===503?cm(n,l.intervalMillis,pT):cm(n,l.intervalMillis),C={throttleEndTimeMillis:Date.now()+R,backoffCount:n+1};return l.setThrottleMetadata(h,C),Jt.debug(`Calling attemptFetch again in ${R} millis`),Iy(r,C,s,l)}}function wT(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),c=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(c),s(on.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ET(r){if(!(r instanceof vn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class IT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ST(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const c=await e,h=Object.assign(Object.assign({},s),{send_to:c});r("event",n,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(){if(q_())try{await K_()}catch(r){return Jt.warn(on.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return Jt.warn(on.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CT(r,e,n,s,l,c,h){var g;const _=vT(r);_.then(V=>{n[V.measurementId]=V.appId,r.options.measurementId&&V.measurementId!==r.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${V.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(V=>Jt.error(V)),e.push(_);const v=TT().then(V=>{if(V)return s.getId()}),[R,C]=await Promise.all([_,v]);fT(c)||lT(c,R.measurementId),l("js",new Date);const N=(g=h==null?void 0:h.config)!==null&&g!==void 0?g:{};return N[tT]="firebase",N.update=!0,C!=null&&(N[eT]=C),l("config",R.measurementId,N),R.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.app=e}_delete(){return delete El[this.app.options.appId],Promise.resolve()}}let El={},Em=[];const Im={};let nd="dataLayer",RT="gtag",Sm,Sy,Tm=!1;function NT(){const r=[];if(W_()&&r.push("This is a browser extension environment."),GE()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=on.create("invalid-analytics-context",{errorInfo:e});Jt.warn(n.message)}}function AT(r,e,n){NT();const s=r.options.appId;if(!s)throw on.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw on.create("no-api-key");if(El[s]!=null)throw on.create("already-exists",{id:s});if(!Tm){aT(nd);const{wrappedGtag:c,gtagCore:h}=dT(El,Em,Im,nd,RT);Sy=c,Sm=h,Tm=!0}return El[s]=CT(r,Em,Im,e,Sm,nd,n),new kT(r)}function PT(r=Hl()){r=Ft(r);const e=Or(r,Ou);return e.isInitialized()?e.getImmediate():OT(r)}function OT(r,e={}){const n=Or(r,Ou);if(n.isInitialized()){const l=n.getImmediate();if(Ol(e,n.getOptions()))return l;throw on.create("already-initialized")}return n.initialize({options:e})}function DT(r,e,n,s){r=Ft(r),ST(Sy,El[r.app.options.appId],e,n,s).catch(l=>Jt.error(l))}const Cm="@firebase/analytics",km="0.10.11";function xT(){yn(new ln(Ou,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return AT(s,l,n)},"PUBLIC")),yn(new ln("analytics-internal",r,"PRIVATE")),Pt(Cm,km),Pt(Cm,km,"esm2017");function r(e){try{const n=e.getProvider(Ou).getImmediate();return{logEvent:(s,l,c)=>DT(n,s,l,c)}}catch(n){throw on.create("interop-component-reg-failed",{reason:n})}}}xT();var Rm={};const Nm="@firebase/database",Am="1.0.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ty="";function LT(r){Ty=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),mt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Pl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MT(e)}}catch{}return new bT},qi=Cy("localStorage"),FT=Cy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Bl("@firebase/database"),UT=function(){let r=1;return function(){return r++}}(),ky=function(r){const e=nI(r),n=new JE;n.update(e);const s=n.digest();return jd.encodeByteArray(s)},$l=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$l.apply(null,s):typeof s=="object"?e+=mt(s):e+=s,e+=" "}return e};let Il=null,Pm=!0;const jT=function(r,e){K(!0,"Can't turn on custom loggers persistently."),Js.logLevel=Oe.VERBOSE,Il=Js.log.bind(Js)},It=function(...r){if(Pm===!0&&(Pm=!1,Il===null&&FT.get("logging_enabled")===!0&&jT()),Il){const e=$l.apply(null,r);Il(e)}},Wl=function(r){return function(...e){It(r,...e)}},Ed=function(...r){const e="FIREBASE INTERNAL ERROR: "+$l(...r);Js.error(e)},Nr=function(...r){const e=`FIREBASE FATAL ERROR: ${$l(...r)}`;throw Js.error(e),new Error(e)},Mt=function(...r){const e="FIREBASE WARNING: "+$l(...r);Js.warn(e)},zT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},VT=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},so="[MIN_NAME]",Xi="[MAX_NAME]",rs=function(r,e){if(r===e)return 0;if(r===so||e===Xi)return-1;if(e===so||r===Xi)return 1;{const n=Om(r),s=Om(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},BT=function(r,e){return r===e?0:r<e?-1:1},ml=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+mt(e))},Xd=function(r){if(typeof r!="object"||r===null)return mt(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=mt(e[s]),n+=":",n+=Xd(r[e[s]]);return n+="}",n},Ry=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function St(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Ny=function(r){K(!Qd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,c,h,g,_;r===0?(c=0,h=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(g=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=g+s,h=Math.round(r*Math.pow(2,n-g)-Math.pow(2,n))):(c=0,h=Math.round(r/Math.pow(2,1-s-n))));const v=[];for(_=n;_;_-=1)v.push(h%2?1:0),h=Math.floor(h/2);for(_=e;_;_-=1)v.push(c%2?1:0),c=Math.floor(c/2);v.push(l?1:0),v.reverse();const R=v.join("");let C="";for(_=0;_<64;_+=8){let N=parseInt(R.substr(_,8),2).toString(16);N.length===1&&(N="0"+N),C=C+N}return C.toLowerCase()},HT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$T=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WT(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const GT=new RegExp("^-?(0*)\\d{1,10}$"),qT=-2147483648,KT=2147483647,Om=function(r){if(GT.test(r)){const e=Number(r);if(e>=qT&&e<=KT)return e}return null},go=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},YT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sl=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(It("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mt(e)}}class Eu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Eu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="5",Ay="v",Py="s",Oy="r",Dy="f",xy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ly="ls",My="p",Id="ac",by="websocket",Fy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n,s,l,c=!1,h="",g=!1,_=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=g,this.isUsingEmulator=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JT(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function jy(r,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let s;if(e===by)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Fy)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JT(r)&&(n.ns=r.namespace);const l=[];return St(n,(c,h)=>{l.push(c+"="+h)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.counters_={}}incrementCounter(e,n=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd={},id={};function Zd(r){const e=r.toString();return rd[e]||(rd[e]=new ZT),rd[e]}function e0(r,e){const n=r.toString();return id[n]||(id[n]=e()),id[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&go(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="start",n0="close",r0="pLPCommand",i0="pRTLPCB",zy="id",Vy="pw",By="ser",s0="cb",o0="seg",l0="ts",a0="d",u0="dframe",Hy=1870,$y=30,c0=Hy-$y,h0=25e3,d0=3e4;class Qs{constructor(e,n,s,l,c,h,g){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=h,this.lastSessionId=g,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wl(e),this.stats_=Zd(n),this.urlFn=_=>(this.appCheckToken&&(_[Id]=this.appCheckToken),jy(n,Fy,_))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new t0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(d0)),VT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ef((...c)=>{const[h,g,_,v,R]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Dm)this.id=g,this.password=_;else if(h===n0)g?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(g,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,g]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,g)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dm]="t",s[By]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[s0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ay]=Jd,this.transportSessionId&&(s[Py]=this.transportSessionId),this.lastSessionId&&(s[Ly]=this.lastSessionId),this.applicationId&&(s[My]=this.applicationId),this.appCheckToken&&(s[Id]=this.appCheckToken),typeof location<"u"&&location.hostname&&xy.test(location.hostname)&&(s[Oy]=Dy);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qs.forceAllow_=!0}static forceDisallow(){Qs.forceDisallow_=!0}static isAvailable(){return Qs.forceAllow_?!0:!Qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HT()&&!$T()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=mt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=z_(n),l=Ry(s,c0);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[u0]="t",s[zy]=e,s[Vy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=mt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ef{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UT(),window[r0+this.uniqueCallbackIdentifier]=e,window[i0+this.uniqueCallbackIdentifier]=n,this.myIFrame=ef.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(g){It("frame writing exception"),g.stack&&It(g.stack),It(g)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||It("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zy]=this.myID,e[Vy]=this.myPW,e[By]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$y+s.length<=Hy;){const h=this.pendingSegs.shift();s=s+"&"+o0+l+"="+h.seg+"&"+l0+l+"="+h.ts+"&"+a0+l+"="+h.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(h0)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{It("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=16384,p0=45e3;let Du=null;typeof MozWebSocket<"u"?Du=MozWebSocket:typeof WebSocket<"u"&&(Du=WebSocket);class Xn{constructor(e,n,s,l,c,h,g){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wl(this.connId),this.stats_=Zd(n),this.connURL=Xn.connectionURL_(n,h,g,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,c){const h={};return h[Ay]=Jd,typeof location<"u"&&location.hostname&&xy.test(location.hostname)&&(h[Oy]=Dy),n&&(h[Py]=n),s&&(h[Ly]=s),l&&(h[Id]=l),c&&(h[My]=c),jy(e,by,h)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qi.set("previous_websocket_failure",!0);try{let s;WE(),this.mySock=new Du(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Du!==null&&!Xn.forceDisallow_}static previouslyFailed(){return qi.isInMemoryStorage||qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){qi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Pl(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=mt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ry(n,f0);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(p0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xn.responsesRequiredToBeHealthy=2;Xn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{static get ALL_TRANSPORTS(){return[Qs,Xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Xn.isAvailable();let s=n&&!Xn.previouslyFailed();if(e.webSocketOnly&&(n||Mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Xn];else{const l=this.transports_=[];for(const c of xl.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);xl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=6e4,m0=5e3,_0=10*1024,y0=100*1024,sd="t",xm="d",v0="s",Lm="r",w0="e",Mm="o",bm="a",Fm="n",Um="p",E0="h";class I0{constructor(e,n,s,l,c,h,g,_,v,R){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=h,this.onReady_=g,this.onDisconnect_=_,this.onKill_=v,this.lastSessionId=R,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wl("c:"+this.id+":"),this.transportManager_=new xl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Sl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>y0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sd in e){const n=e[sd];n===bm?this.upgradeIfSecondaryHealthy_():n===Lm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ml("t",e),s=ml("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ml("t",e),s=ml("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ml(sd,e);if(xm in e){const s=e[xm];if(n===E0){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===v0?this.onConnectionShutdown_(s):n===Lm?this.onReset_(s):n===w0?Ed("Server Error: "+s):n===Mm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ed("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jd!==s&&Mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Sl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(g0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(m0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Um,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===n&&(!s||s===l[c].context)){l.splice(c,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Gy{static getInstance(){return new xu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=32,zm=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function De(){return new Me("")}function ye(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function pi(r){return r.pieces_.length-r.pieceNum_}function Be(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Me(r.pieces_,e)}function tf(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function S0(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ll(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function qy(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new Me(e,0)}function Qe(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof Me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Me(n,0)}function we(r){return r.pieceNum_>=r.pieces_.length}function Qt(r,e){const n=ye(r),s=ye(e);if(n===null)return e;if(n===s)return Qt(Be(r),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function T0(r,e){const n=Ll(r,0),s=Ll(e,0);for(let l=0;l<n.length&&l<s.length;l++){const c=rs(n[l],s[l]);if(c!==0)return c}return n.length===s.length?0:n.length<s.length?-1:1}function nf(r,e){if(pi(r)!==pi(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function _n(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(pi(r)>pi(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class C0{constructor(e,n){this.errorPrefix_=n,this.parts_=Ll(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ec(this.parts_[s]);Ky(this)}}function k0(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=ec(e),Ky(r)}function R0(r){const e=r.parts_.pop();r.byteLength_-=ec(e),r.parts_.length>0&&(r.byteLength_-=1)}function Ky(r){if(r.byteLength_>zm)throw new Error(r.errorPrefix_+"has a key path longer than "+zm+" bytes ("+r.byteLength_+").");if(r.parts_.length>jm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jm+") or object contains a cycle "+Wi(r))}function Wi(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends Gy{static getInstance(){return new rf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=1e3,N0=60*5*1e3,Vm=30*1e3,A0=1.3,P0=3e4,O0="server_kill",Bm=3;class kr extends Wy{constructor(e,n,s,l,c,h,g,_){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=g,this.authOverride_=_,this.id=kr.nextPersistentConnectionId_++,this.log_=Wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_l,this.maxReconnectDelay_=N0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,c={r:l,a:e,b:n};this.log_(mt(c)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Vl,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const g=h.d;h.s==="ok"?n.resolve(g):n.reject(g)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,l){this.initConnection_();const c=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const g={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(h).set(c,g),this.connected_&&this.sendListen_(g)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},h="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(h,c,g=>{const _=g.d,v=g.s;kr.warnOnListenWarnings_(_,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",g),v!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(v,_))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tr(e,"w")){const s=io(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();Mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=QE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const c=l.s,h=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const c={p:e},h="n";l&&(c.q=s,c.t=l),this.sendRequest(h,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,h=>{l&&setTimeout(()=>{l(h.s,h.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,c){this.initConnection_();const h={p:n,d:s};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:e,request:h,onComplete:l}),this.outstandingPutCount_++;const g=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(g):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+mt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ed("Unrecognized action received from server: "+mt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_l,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_l,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>P0&&(this.reconnectDelay_=_l),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*A0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+kr.nextConnectionId_++,c=this.lastSessionId;let h=!1,g=null;const _=function(){g?g.close():(h=!0,s())},v=function(C){K(g,"sendRequest call when we're not connected not allowed."),g.sendRequest(C)};this.realtime_={close:_,sendRequest:v};const R=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[C,N]=await Promise.all([this.authTokenProvider_.getToken(R),this.appCheckTokenProvider_.getToken(R)]);h?It("getToken() completed but was canceled"):(It("getToken() completed. Creating connection."),this.authToken_=C&&C.accessToken,this.appCheckToken_=N&&N.token,g=new I0(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,V=>{Mt(V+" ("+this.repoInfo_.toString()+")"),this.interrupt(O0)},c))}catch(C){this.log_("Failed to get token: "+C),h||(this.repoInfo_.nodeAdmin&&Mt(C),_())}}}interrupt(e){It("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){It("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pd(this.interruptReasons_)&&(this.reconnectDelay_=_l,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>Xd(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Me(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){It("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bm&&(this.reconnectDelay_=Vm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){It("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ty.replace(/\./g,"-")]=1,Hd()?e["framework.cordova"]=1:G_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xu.getInstance().currentlyOnline();return pd(this.interruptReasons_)&&e}}kr.nextPersistentConnectionId_=0;kr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ve(so,e),l=new ve(so,n);return this.compare(s,l)!==0}minPost(){return ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu;class Yy extends rc{static get __EMPTY_NODE(){return pu}static set __EMPTY_NODE(e){pu=e}compare(e,n){return rs(e.name,n.name)}isDefinedOn(e){throw fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve(Xi,pu)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,pu)}toString(){return".key"}}const Zs=new Yy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=n?s(e.key,n):1,l&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pt{constructor(e,n,s,l,c){this.key=e,this.value=n,this.color=s??pt.RED,this.left=l??Xt.EMPTY_NODE,this.right=c??Xt.EMPTY_NODE}copy(e,n,s,l,c){return new pt(e??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):c===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pt.RED=!0;pt.BLACK=!1;class D0{copy(e,n,s,l,c){return this}insert(e,n,s){return new pt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,n=Xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pt.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gu(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new D0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(r,e){return rs(r.name,e.name)}function sf(r,e){return rs(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd;function L0(r){Sd=r}const Qy=function(r){return typeof r=="number"?"number:"+Ny(r):"string:"+r},Xy=function(r){if(r.isLeafNode()){const e=r.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else K(r===Sd||r.isEmpty(),"priority of unexpected type.");K(r===Sd||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm;class ft{static set __childrenNodeConstructor(e){Hm=e}static get __childrenNodeConstructor(){return Hm}constructor(e,n=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:ye(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ye(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(K(s!==".priority"||pi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ny(this.value_):e+=this.value_,this.lazyHash_=ky(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ft.VALUE_TYPE_ORDER.indexOf(n),c=ft.VALUE_TYPE_ORDER.indexOf(s);return K(l>=0,"Unknown leaf type: "+n),K(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jy,Zy;function M0(r){Jy=r}function b0(r){Zy=r}class F0 extends rc{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),c=s.compareTo(l);return c===0?rs(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve(Xi,new ft("[PRIORITY-POST]",Zy))}makePost(e,n){const s=Jy(e);return new ve(n,new ft("[PRIORITY-POST]",s))}toString(){return".priority"}}const Xe=new F0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=Math.log(2);class j0{constructor(e){const n=c=>parseInt(Math.log(c)/U0,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lu=function(r,e,n,s){r.sort(e);const l=function(_,v){const R=v-_;let C,N;if(R===0)return null;if(R===1)return C=r[_],N=n?n(C):C,new pt(N,C.node,pt.BLACK,null,null);{const V=parseInt(R/2,10)+_,B=l(_,V),Q=l(V+1,v);return C=r[V],N=n?n(C):C,new pt(N,C.node,pt.BLACK,B,Q)}},c=function(_){let v=null,R=null,C=r.length;const N=function(B,Q){const H=C-B,ce=C;C-=B;const pe=l(H+1,ce),he=r[H],fe=n?n(he):he;V(new pt(fe,he.node,Q,null,pe))},V=function(B){v?(v.left=B,v=B):(R=B,v=B)};for(let B=0;B<_.count;++B){const Q=_.nextBitIsOne(),H=Math.pow(2,_.count-(B+1));Q?N(H,pt.BLACK):(N(H,pt.BLACK),N(H,pt.RED))}return R},h=new j0(r.length),g=c(h);return new Xt(s||e,g)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od;const yl={};class Ir{static get Default(){return K(Xe,"ChildrenNode.ts has not been loaded"),od=od||new Ir({".priority":yl},{".priority":Xe}),od}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=io(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xt?n:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,n){K(e!==Zs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=n.getIterator(ve.Wrap);let h=c.getNext();for(;h;)l=l||e.isDefinedOn(h.node),s.push(h),h=c.getNext();let g;l?g=Lu(s,e.getCompare()):g=yl;const _=e.toString(),v=Object.assign({},this.indexSet_);v[_]=e;const R=Object.assign({},this.indexes_);return R[_]=g,new Ir(R,v)}addToIndexes(e,n){const s=Nu(this.indexes_,(l,c)=>{const h=io(this.indexSet_,c);if(K(h,"Missing index implementation for "+c),l===yl)if(h.isDefinedOn(e.node)){const g=[],_=n.getIterator(ve.Wrap);let v=_.getNext();for(;v;)v.name!==e.name&&g.push(v),v=_.getNext();return g.push(e),Lu(g,h.getCompare())}else return yl;else{const g=n.get(e.name);let _=l;return g&&(_=_.remove(new ve(e.name,g))),_.insert(e,e.node)}});return new Ir(s,this.indexSet_)}removeFromIndexes(e,n){const s=Nu(this.indexes_,l=>{if(l===yl)return l;{const c=n.get(e.name);return c?l.remove(new ve(e.name,c)):l}});return new Ir(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;class ae{static get EMPTY_NODE(){return vl||(vl=new ae(new Xt(sf),null,Ir.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xy(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vl}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vl:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ve(e,n);let l,c;n.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const h=l.isEmpty()?vl:this.priorityNode_;return new ae(l,h,c)}}updateChild(e,n){const s=ye(e);if(s===null)return n;{K(ye(e)!==".priority"||pi(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Be(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,c=!0;if(this.forEachChild(Xe,(h,g)=>{n[h]=g.val(e),s++,c&&ae.INTEGER_REGEXP_.test(h)?l=Math.max(l,Number(h)):c=!1}),!e&&c&&l<2*s){const h=[];for(const g in n)h[g]=n[g];return h}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qy(this.getPriority().val())+":"),this.forEachChild(Xe,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":ky(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new ve(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ve.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gl?-1:0}withIndex(e){if(e===Zs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Xe),l=n.getIterator(Xe);let c=s.getNext(),h=l.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=s.getNext(),h=l.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===Zs?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class z0 extends ae{constructor(){super(new Xt(sf),ae.EMPTY_NODE,Ir.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const Gl=new z0;Object.defineProperties(ve,{MIN:{value:new ve(so,ae.EMPTY_NODE)},MAX:{value:new ve(Xi,Gl)}});Yy.__EMPTY_NODE=ae.EMPTY_NODE;ft.__childrenNodeConstructor=ae;L0(Gl);b0(Gl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=!0;function gt(r,e=null){if(r===null)return ae.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new ft(n,gt(e))}if(!(r instanceof Array)&&V0){const n=[];let s=!1;if(St(r,(h,g)=>{if(h.substring(0,1)!=="."){const _=gt(g);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),n.push(new ve(h,_)))}}),n.length===0)return ae.EMPTY_NODE;const c=Lu(n,x0,h=>h.name,sf);if(s){const h=Lu(n,Xe.getCompare());return new ae(c,gt(e),new Ir({".priority":h},{".priority":Xe}))}else return new ae(c,gt(e),Ir.Default)}else{let n=ae.EMPTY_NODE;return St(r,(s,l)=>{if(tr(r,s)&&s.substring(0,1)!=="."){const c=gt(l);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(gt(e))}}M0(gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends rc{constructor(e){super(),this.indexPath_=e,K(!we(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),c=s.compareTo(l);return c===0?rs(e.name,n.name):c}makePost(e,n){const s=gt(e),l=ae.EMPTY_NODE.updateChild(this.indexPath_,s);return new ve(n,l)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,Gl);return new ve(Xi,e)}toString(){return Ll(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0 extends rc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?rs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const s=gt(e);return new ve(n,s)}toString(){return".value"}}const $0=new H0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(r){return{type:"value",snapshotNode:r}}function oo(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ml(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function bl(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function W0(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.index_=e}updateChild(e,n,s,l,c,h){K(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const g=e.getImmediateChild(n);return g.getChild(l).equals(s.getChild(l))&&g.isEmpty()===s.isEmpty()||(h!=null&&(s.isEmpty()?e.hasChild(n)?h.trackChildChange(Ml(n,g)):K(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):g.isEmpty()?h.trackChildChange(oo(n,s)):h.trackChildChange(bl(n,s,g))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Xe,(l,c)=>{n.hasChild(l)||s.trackChildChange(Ml(l,c))}),n.isLeafNode()||n.forEachChild(Xe,(l,c)=>{if(e.hasChild(l)){const h=e.getImmediateChild(l);h.equals(c)||s.trackChildChange(bl(l,c,h))}else s.trackChildChange(oo(l,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ae.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.indexedFilter_=new of(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fl.getStartPost_(e),this.endPost_=Fl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,c,h){return this.matches(new ve(n,s))||(s=ae.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,c,h)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ae.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ae.EMPTY_NODE);const c=this;return n.forEachChild(Xe,(h,g)=>{c.matches(new ve(h,g))||(l=l.updateImmediateChild(h,ae.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Fl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,c,h){return this.rangedFilter_.matches(new ve(n,s))||(s=ae.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,c,h):this.fullLimitUpdateChild_(e,n,s,c,h)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ae.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ae.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const g=c.getNext();if(this.withinDirectionalStart(g))if(this.withinDirectionalEnd(g))l=l.updateImmediateChild(g.name,g.node),h++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ae.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let h=0;for(;c.hasNext();){const g=c.getNext();h<this.limit_&&this.withinDirectionalStart(g)&&this.withinDirectionalEnd(g)?h++:l=l.updateImmediateChild(g.name,ae.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,c){let h;if(this.reverse_){const C=this.index_.getCompare();h=(N,V)=>C(V,N)}else h=this.index_.getCompare();const g=e;K(g.numChildren()===this.limit_,"");const _=new ve(n,s),v=this.reverse_?g.getFirstChild(this.index_):g.getLastChild(this.index_),R=this.rangedFilter_.matches(_);if(g.hasChild(n)){const C=g.getImmediateChild(n);let N=l.getChildAfterChild(this.index_,v,this.reverse_);for(;N!=null&&(N.name===n||g.hasChild(N.name));)N=l.getChildAfterChild(this.index_,N,this.reverse_);const V=N==null?1:h(N,_);if(R&&!s.isEmpty()&&V>=0)return c!=null&&c.trackChildChange(bl(n,s,C)),g.updateImmediateChild(n,s);{c!=null&&c.trackChildChange(Ml(n,C));const Q=g.updateImmediateChild(n,ae.EMPTY_NODE);return N!=null&&this.rangedFilter_.matches(N)?(c!=null&&c.trackChildChange(oo(N.name,N.node)),Q.updateImmediateChild(N.name,N.node)):Q}}else return s.isEmpty()?e:R&&h(v,_)>=0?(c!=null&&(c.trackChildChange(Ml(v.name,v.node)),c.trackChildChange(oo(n,s))),g.updateImmediateChild(n,s).updateImmediateChild(v.name,ae.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:so}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Xe}copy(){const e=new lf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function q0(r){return r.loadsAllData()?new of(r.getIndex()):r.hasLimit()?new G0(r):new Fl(r)}function $m(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Xe?n="$priority":r.index_===$0?n="$value":r.index_===Zs?n="$key":(K(r.index_ instanceof B0,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=mt(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=mt(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+mt(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=mt(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+mt(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Wm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Xe&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Wy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Wl("p:rest:"),this.listens_={}}listen(e,n,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const h=Mu.getListenId_(e,s),g={};this.listens_[h]=g;const _=$m(e._queryParams);this.restRequest_(c+".json",_,(v,R)=>{let C=R;if(v===404&&(C=null,v=null),v===null&&this.onDataUpdate_(c,C,!1,s),io(this.listens_,h)===g){let N;v?v===401?N="permission_denied":N="rest_error:"+v:N="ok",l(N,null)}})}unlisten(e,n){const s=Mu.getListenId_(e,n);delete this.listens_[s]}get(e){const n=$m(e._queryParams),s=e._path.toString(),l=new Vl;return this.restRequest_(s+".json",n,(c,h)=>{let g=h;c===404&&(g=null,c=null),c===null?(this.onDataUpdate_(s,g,!1,null),l.resolve(g)):l.reject(new Error(g))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(n.auth=l.accessToken),c&&c.token&&(n.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+po(n);this.log_("Sending REST request for "+h);const g=new XMLHttpRequest;g.onreadystatechange=()=>{if(s&&g.readyState===4){this.log_("REST Response for "+h+" received. status:",g.status,"response:",g.responseText);let _=null;if(g.status>=200&&g.status<300){try{_=Pl(g.responseText)}catch{Mt("Failed to parse JSON response for "+h+": "+g.responseText)}s(null,_)}else g.status!==401&&g.status!==404&&Mt("Got unsuccessful REST response for "+h+" Status: "+g.status),s(g.status);s=null}},g.open("GET",h,!0),g.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){return{value:null,children:new Map}}function tv(r,e,n){if(we(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ye(e);r.children.has(s)||r.children.set(s,bu());const l=r.children.get(s);e=Be(e),tv(l,e,n)}}function Td(r,e,n){r.value!==null?n(e,r.value):Y0(r,(s,l)=>{const c=new Me(e.toString()+"/"+s);Td(l,c,n)})}function Y0(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&St(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=10*1e3,X0=30*1e3,J0=5*60*1e3;class Z0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Q0(e);const s=Gm+(X0-Gm)*Math.random();Sl(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;St(e,(l,c)=>{c>0&&tr(this.statsToReport_,l)&&(n[l]=c,s=!0)}),s&&this.server_.reportStats(n),Sl(this.reportStats_.bind(this),Math.floor(Math.random()*2*J0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bn||(bn={}));function af(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cf(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=bn.ACK_USER_WRITE,this.source=af()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new Fu(De(),n,this.revert)}}else return K(ye(this.path)===e,"operationForChild called for unrelated child."),new Fu(Be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.source=e,this.path=n,this.type=bn.LISTEN_COMPLETE}operationForChild(e){return we(this.path)?new Ul(this.source,De()):new Ul(this.source,Be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=bn.OVERWRITE}operationForChild(e){return we(this.path)?new Ji(this.source,De(),this.snap.getImmediateChild(e)):new Ji(this.source,Be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=bn.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new Ji(this.source,De(),n.value):new lo(this.source,De(),n)}else return K(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lo(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tC(r,e,n,s){const l=[],c=[];return e.forEach(h=>{h.type==="child_changed"&&r.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(W0(h.childName,h.snapshotNode))}),wl(r,l,"child_removed",e,s,n),wl(r,l,"child_added",e,s,n),wl(r,l,"child_moved",c,s,n),wl(r,l,"child_changed",e,s,n),wl(r,l,"value",e,s,n),l}function wl(r,e,n,s,l,c){const h=s.filter(g=>g.type===n);h.sort((g,_)=>rC(r,g,_)),h.forEach(g=>{const _=nC(r,g,c);l.forEach(v=>{v.respondsTo(g.type)&&e.push(v.createEvent(_,r.query_))})})}function nC(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function rC(r,e,n){if(e.childName==null||n.childName==null)throw fo("Should only compare child_ events.");const s=new ve(e.childName,e.snapshotNode),l=new ve(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(r,e){return{eventCache:r,serverCache:e}}function Tl(r,e,n,s){return ic(new Zi(e,n,s),r.serverCache)}function nv(r,e,n,s){return ic(r.eventCache,new Zi(e,n,s))}function Cd(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function es(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;const iC=()=>(ld||(ld=new Xt(BT)),ld);class Ve{static fromObject(e){let n=new Ve(null);return St(e,(s,l)=>{n=n.set(new Me(s),l)}),n}constructor(e,n=iC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:De(),value:this.value};if(we(e))return null;{const s=ye(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(Be(e),n);return c!=null?{path:Qe(new Me(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=ye(e),s=this.children.get(n);return s!==null?s.subtree(Be(e)):new Ve(null)}}set(e,n){if(we(e))return new Ve(n,this.children);{const s=ye(e),c=(this.children.get(s)||new Ve(null)).set(Be(e),n),h=this.children.insert(s,c);return new Ve(this.value,h)}}remove(e){if(we(e))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const n=ye(e),s=this.children.get(n);if(s){const l=s.remove(Be(e));let c;return l.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,l),this.value===null&&c.isEmpty()?new Ve(null):new Ve(this.value,c)}else return this}}get(e){if(we(e))return this.value;{const n=ye(e),s=this.children.get(n);return s?s.get(Be(e)):null}}setTree(e,n){if(we(e))return n;{const s=ye(e),c=(this.children.get(s)||new Ve(null)).setTree(Be(e),n);let h;return c.isEmpty()?h=this.children.remove(s):h=this.children.insert(s,c),new Ve(this.value,h)}}fold(e){return this.fold_(De(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(Qe(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,De(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(we(e))return null;{const c=ye(e),h=this.children.get(c);return h?h.findOnPath_(Be(e),Qe(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,De(),n)}foreachOnPath_(e,n,s){if(we(e))return this;{this.value&&s(n,this.value);const l=ye(e),c=this.children.get(l);return c?c.foreachOnPath_(Be(e),Qe(n,l),s):new Ve(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.writeTree_=e}static empty(){return new jn(new Ve(null))}}function Cl(r,e,n){if(we(e))return new jn(new Ve(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const h=Qt(l,e);return c=c.updateChild(h,n),new jn(r.writeTree_.set(l,c))}else{const l=new Ve(n),c=r.writeTree_.setTree(e,l);return new jn(c)}}}function kd(r,e,n){let s=r;return St(n,(l,c)=>{s=Cl(s,Qe(e,l),c)}),s}function qm(r,e){if(we(e))return jn.empty();{const n=r.writeTree_.setTree(e,new Ve(null));return new jn(n)}}function Rd(r,e){return is(r,e)!=null}function is(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function Km(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Xe,(s,l)=>{e.push(new ve(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ve(s,l.value))}),e}function fi(r,e){if(we(e))return r;{const n=is(r,e);return n!=null?new jn(new Ve(n)):new jn(r.writeTree_.subtree(e))}}function Nd(r){return r.writeTree_.isEmpty()}function ao(r,e){return rv(De(),r.writeTree_,e)}function rv(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(K(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=rv(Qe(r,l),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Qe(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r,e){return lv(e,r)}function sC(r,e,n,s,l){K(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Cl(r.visibleWrites,e,n)),r.lastWriteId=s}function oC(r,e,n,s){K(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=kd(r.visibleWrites,e,n),r.lastWriteId=s}function lC(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function aC(r,e){const n=r.allWrites.findIndex(g=>g.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,c=!1,h=r.allWrites.length-1;for(;l&&h>=0;){const g=r.allWrites[h];g.visible&&(h>=n&&uC(g,s.path)?l=!1:_n(s.path,g.path)&&(c=!0)),h--}if(l){if(c)return cC(r),!0;if(s.snap)r.visibleWrites=qm(r.visibleWrites,s.path);else{const g=s.children;St(g,_=>{r.visibleWrites=qm(r.visibleWrites,Qe(s.path,_))})}return!0}else return!1}function uC(r,e){if(r.snap)return _n(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&_n(Qe(r.path,n),e))return!0;return!1}function cC(r){r.visibleWrites=iv(r.allWrites,hC,De()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function hC(r){return r.visible}function iv(r,e,n){let s=jn.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const h=c.path;let g;if(c.snap)_n(n,h)?(g=Qt(n,h),s=Cl(s,g,c.snap)):_n(h,n)&&(g=Qt(h,n),s=Cl(s,De(),c.snap.getChild(g)));else if(c.children){if(_n(n,h))g=Qt(n,h),s=kd(s,g,c.children);else if(_n(h,n))if(g=Qt(h,n),we(g))s=kd(s,De(),c.children);else{const _=io(c.children,ye(g));if(_){const v=_.getChild(Be(g));s=Cl(s,De(),v)}}}else throw fo("WriteRecord should have .snap or .children")}}return s}function sv(r,e,n,s,l){if(!s&&!l){const c=is(r.visibleWrites,e);if(c!=null)return c;{const h=fi(r.visibleWrites,e);if(Nd(h))return n;if(n==null&&!Rd(h,De()))return null;{const g=n||ae.EMPTY_NODE;return ao(h,g)}}}else{const c=fi(r.visibleWrites,e);if(!l&&Nd(c))return n;if(!l&&n==null&&!Rd(c,De()))return null;{const h=function(v){return(v.visible||l)&&(!s||!~s.indexOf(v.writeId))&&(_n(v.path,e)||_n(e,v.path))},g=iv(r.allWrites,h,e),_=n||ae.EMPTY_NODE;return ao(g,_)}}}function dC(r,e,n){let s=ae.EMPTY_NODE;const l=is(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Xe,(c,h)=>{s=s.updateImmediateChild(c,h)}),s;if(n){const c=fi(r.visibleWrites,e);return n.forEachChild(Xe,(h,g)=>{const _=ao(fi(c,new Me(h)),g);s=s.updateImmediateChild(h,_)}),Km(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}else{const c=fi(r.visibleWrites,e);return Km(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}}function fC(r,e,n,s,l){K(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=Qe(e,n);if(Rd(r.visibleWrites,c))return null;{const h=fi(r.visibleWrites,c);return Nd(h)?l.getChild(n):ao(h,l.getChild(n))}}function pC(r,e,n,s){const l=Qe(e,n),c=is(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(n)){const h=fi(r.visibleWrites,l);return ao(h,s.getNode().getImmediateChild(n))}else return null}function gC(r,e){return is(r.visibleWrites,e)}function mC(r,e,n,s,l,c,h){let g;const _=fi(r.visibleWrites,e),v=is(_,De());if(v!=null)g=v;else if(n!=null)g=ao(_,n);else return[];if(g=g.withIndex(h),!g.isEmpty()&&!g.isLeafNode()){const R=[],C=h.getCompare(),N=c?g.getReverseIteratorFrom(s,h):g.getIteratorFrom(s,h);let V=N.getNext();for(;V&&R.length<l;)C(V,s)!==0&&R.push(V),V=N.getNext();return R}else return[]}function _C(){return{visibleWrites:jn.empty(),allWrites:[],lastWriteId:-1}}function Uu(r,e,n,s){return sv(r.writeTree,r.treePath,e,n,s)}function df(r,e){return dC(r.writeTree,r.treePath,e)}function Ym(r,e,n,s){return fC(r.writeTree,r.treePath,e,n,s)}function ju(r,e){return gC(r.writeTree,Qe(r.treePath,e))}function yC(r,e,n,s,l,c){return mC(r.writeTree,r.treePath,e,n,s,l,c)}function ff(r,e,n){return pC(r.writeTree,r.treePath,e,n)}function ov(r,e){return lv(Qe(r.treePath,e),r.writeTree)}function lv(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,bl(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Ml(s,l.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,oo(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,bl(s,e.snapshotNode,l.oldSnap));else throw fo("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const av=new wC;class pf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Zi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ff(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:es(this.viewCache_),c=yC(this.writes_,l,n,1,s,e);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(r){return{filter:r}}function IC(r,e){K(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function SC(r,e,n,s,l){const c=new vC;let h,g;if(n.type===bn.OVERWRITE){const v=n;v.source.fromUser?h=Ad(r,e,v.path,v.snap,s,l,c):(K(v.source.fromServer,"Unknown source."),g=v.source.tagged||e.serverCache.isFiltered()&&!we(v.path),h=zu(r,e,v.path,v.snap,s,l,g,c))}else if(n.type===bn.MERGE){const v=n;v.source.fromUser?h=CC(r,e,v.path,v.children,s,l,c):(K(v.source.fromServer,"Unknown source."),g=v.source.tagged||e.serverCache.isFiltered(),h=Pd(r,e,v.path,v.children,s,l,g,c))}else if(n.type===bn.ACK_USER_WRITE){const v=n;v.revert?h=NC(r,e,v.path,s,l,c):h=kC(r,e,v.path,v.affectedTree,s,l,c)}else if(n.type===bn.LISTEN_COMPLETE)h=RC(r,e,n.path,s,c);else throw fo("Unknown operation type: "+n.type);const _=c.getChanges();return TC(e,h,_),{viewCache:h,changes:_}}function TC(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Cd(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(ev(Cd(e)))}}function uv(r,e,n,s,l,c){const h=e.eventCache;if(ju(s,n)!=null)return e;{let g,_;if(we(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const v=es(e),R=v instanceof ae?v:ae.EMPTY_NODE,C=df(s,R);g=r.filter.updateFullNode(e.eventCache.getNode(),C,c)}else{const v=Uu(s,es(e));g=r.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const v=ye(n);if(v===".priority"){K(pi(n)===1,"Can't have a priority with additional path components");const R=h.getNode();_=e.serverCache.getNode();const C=Ym(s,n,R,_);C!=null?g=r.filter.updatePriority(R,C):g=h.getNode()}else{const R=Be(n);let C;if(h.isCompleteForChild(v)){_=e.serverCache.getNode();const N=Ym(s,n,h.getNode(),_);N!=null?C=h.getNode().getImmediateChild(v).updateChild(R,N):C=h.getNode().getImmediateChild(v)}else C=ff(s,v,e.serverCache);C!=null?g=r.filter.updateChild(h.getNode(),v,C,R,l,c):g=h.getNode()}}return Tl(e,g,h.isFullyInitialized()||we(n),r.filter.filtersNodes())}}function zu(r,e,n,s,l,c,h,g){const _=e.serverCache;let v;const R=h?r.filter:r.filter.getIndexedFilter();if(we(n))v=R.updateFullNode(_.getNode(),s,null);else if(R.filtersNodes()&&!_.isFiltered()){const V=_.getNode().updateChild(n,s);v=R.updateFullNode(_.getNode(),V,null)}else{const V=ye(n);if(!_.isCompleteForPath(n)&&pi(n)>1)return e;const B=Be(n),H=_.getNode().getImmediateChild(V).updateChild(B,s);V===".priority"?v=R.updatePriority(_.getNode(),H):v=R.updateChild(_.getNode(),V,H,B,av,null)}const C=nv(e,v,_.isFullyInitialized()||we(n),R.filtersNodes()),N=new pf(l,C,c);return uv(r,C,n,l,N,g)}function Ad(r,e,n,s,l,c,h){const g=e.eventCache;let _,v;const R=new pf(l,e,c);if(we(n))v=r.filter.updateFullNode(e.eventCache.getNode(),s,h),_=Tl(e,v,!0,r.filter.filtersNodes());else{const C=ye(n);if(C===".priority")v=r.filter.updatePriority(e.eventCache.getNode(),s),_=Tl(e,v,g.isFullyInitialized(),g.isFiltered());else{const N=Be(n),V=g.getNode().getImmediateChild(C);let B;if(we(N))B=s;else{const Q=R.getCompleteChild(C);Q!=null?tf(N)===".priority"&&Q.getChild(qy(N)).isEmpty()?B=Q:B=Q.updateChild(N,s):B=ae.EMPTY_NODE}if(V.equals(B))_=e;else{const Q=r.filter.updateChild(g.getNode(),C,B,N,R,h);_=Tl(e,Q,g.isFullyInitialized(),r.filter.filtersNodes())}}}return _}function Qm(r,e){return r.eventCache.isCompleteForChild(e)}function CC(r,e,n,s,l,c,h){let g=e;return s.foreach((_,v)=>{const R=Qe(n,_);Qm(e,ye(R))&&(g=Ad(r,g,R,v,l,c,h))}),s.foreach((_,v)=>{const R=Qe(n,_);Qm(e,ye(R))||(g=Ad(r,g,R,v,l,c,h))}),g}function Xm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Pd(r,e,n,s,l,c,h,g){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,v;we(n)?v=s:v=new Ve(null).setTree(n,s);const R=e.serverCache.getNode();return v.children.inorderTraversal((C,N)=>{if(R.hasChild(C)){const V=e.serverCache.getNode().getImmediateChild(C),B=Xm(r,V,N);_=zu(r,_,new Me(C),B,l,c,h,g)}}),v.children.inorderTraversal((C,N)=>{const V=!e.serverCache.isCompleteForChild(C)&&N.value===null;if(!R.hasChild(C)&&!V){const B=e.serverCache.getNode().getImmediateChild(C),Q=Xm(r,B,N);_=zu(r,_,new Me(C),Q,l,c,h,g)}}),_}function kC(r,e,n,s,l,c,h){if(ju(l,n)!=null)return e;const g=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(we(n)&&_.isFullyInitialized()||_.isCompleteForPath(n))return zu(r,e,n,_.getNode().getChild(n),l,c,g,h);if(we(n)){let v=new Ve(null);return _.getNode().forEachChild(Zs,(R,C)=>{v=v.set(new Me(R),C)}),Pd(r,e,n,v,l,c,g,h)}else return e}else{let v=new Ve(null);return s.foreach((R,C)=>{const N=Qe(n,R);_.isCompleteForPath(N)&&(v=v.set(R,_.getNode().getChild(N)))}),Pd(r,e,n,v,l,c,g,h)}}function RC(r,e,n,s,l){const c=e.serverCache,h=nv(e,c.getNode(),c.isFullyInitialized()||we(n),c.isFiltered());return uv(r,h,n,s,av,l)}function NC(r,e,n,s,l,c){let h;if(ju(s,n)!=null)return e;{const g=new pf(s,e,l),_=e.eventCache.getNode();let v;if(we(n)||ye(n)===".priority"){let R;if(e.serverCache.isFullyInitialized())R=Uu(s,es(e));else{const C=e.serverCache.getNode();K(C instanceof ae,"serverChildren would be complete if leaf node"),R=df(s,C)}R=R,v=r.filter.updateFullNode(_,R,c)}else{const R=ye(n);let C=ff(s,R,e.serverCache);C==null&&e.serverCache.isCompleteForChild(R)&&(C=_.getImmediateChild(R)),C!=null?v=r.filter.updateChild(_,R,C,Be(n),g,c):e.eventCache.getNode().hasChild(R)?v=r.filter.updateChild(_,R,ae.EMPTY_NODE,Be(n),g,c):v=_,v.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=Uu(s,es(e)),h.isLeafNode()&&(v=r.filter.updateFullNode(v,h,c)))}return h=e.serverCache.isFullyInitialized()||ju(s,De())!=null,Tl(e,v,h,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new of(s.getIndex()),c=q0(s);this.processor_=EC(c);const h=n.serverCache,g=n.eventCache,_=l.updateFullNode(ae.EMPTY_NODE,h.getNode(),null),v=c.updateFullNode(ae.EMPTY_NODE,g.getNode(),null),R=new Zi(_,h.isFullyInitialized(),l.filtersNodes()),C=new Zi(v,g.isFullyInitialized(),c.filtersNodes());this.viewCache_=ic(C,R),this.eventGenerator_=new eC(this.query_)}get query(){return this.query_}}function PC(r){return r.viewCache_.serverCache.getNode()}function OC(r,e){const n=es(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function Jm(r){return r.eventRegistrations_.length===0}function DC(r,e){r.eventRegistrations_.push(e)}function Zm(r,e,n){const s=[];if(n){K(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(n,l);h&&s.push(h)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const h=r.eventRegistrations_[c];if(!h.matches(e))l.push(h);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function e_(r,e,n,s){e.type===bn.MERGE&&e.source.queryId!==null&&(K(es(r.viewCache_),"We should always have a full cache before handling merges"),K(Cd(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=SC(r.processor_,l,e,n,s);return IC(r.processor_,c.viewCache),K(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,cv(r,c.changes,c.viewCache.eventCache.getNode(),null)}function xC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Xe,(c,h)=>{s.push(oo(c,h))}),n.isFullyInitialized()&&s.push(ev(n.getNode())),cv(r,s,n.getNode(),e)}function cv(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return tC(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu;class LC{constructor(){this.views=new Map}}function MC(r){K(!Vu,"__referenceConstructor has already been defined"),Vu=r}function bC(){return K(Vu,"Reference.ts has not been loaded"),Vu}function FC(r){return r.views.size===0}function gf(r,e,n,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return K(c!=null,"SyncTree gave us an op for an invalid query."),e_(c,e,n,s)}else{let c=[];for(const h of r.views.values())c=c.concat(e_(h,e,n,s));return c}}function UC(r,e,n,s,l){const c=e._queryIdentifier,h=r.views.get(c);if(!h){let g=Uu(n,l?s:null),_=!1;g?_=!0:s instanceof ae?(g=df(n,s),_=!1):(g=ae.EMPTY_NODE,_=!1);const v=ic(new Zi(g,_,!1),new Zi(s,l,!1));return new AC(e,v)}return h}function jC(r,e,n,s,l,c){const h=UC(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,h),DC(h,n),xC(h,n)}function zC(r,e,n,s){const l=e._queryIdentifier,c=[];let h=[];const g=gi(r);if(l==="default")for(const[_,v]of r.views.entries())h=h.concat(Zm(v,n,s)),Jm(v)&&(r.views.delete(_),v.query._queryParams.loadsAllData()||c.push(v.query));else{const _=r.views.get(l);_&&(h=h.concat(Zm(_,n,s)),Jm(_)&&(r.views.delete(l),_.query._queryParams.loadsAllData()||c.push(_.query)))}return g&&!gi(r)&&c.push(new(bC())(e._repo,e._path)),{removed:c,events:h}}function hv(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function eo(r,e){let n=null;for(const s of r.views.values())n=n||OC(s,e);return n}function dv(r,e){if(e._queryParams.loadsAllData())return sc(r);{const s=e._queryIdentifier;return r.views.get(s)}}function fv(r,e){return dv(r,e)!=null}function gi(r){return sc(r)!=null}function sc(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;function VC(r){K(!Bu,"__referenceConstructor has already been defined"),Bu=r}function BC(){return K(Bu,"Reference.ts has not been loaded"),Bu}let HC=1;class t_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=_C(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pv(r,e,n,s,l){return sC(r.pendingWriteTree_,e,n,s,l),l?mo(r,new Ji(af(),e,n)):[]}function $C(r,e,n,s){oC(r.pendingWriteTree_,e,n,s);const l=Ve.fromObject(n);return mo(r,new lo(af(),e,l))}function ci(r,e,n=!1){const s=lC(r.pendingWriteTree_,e);if(aC(r.pendingWriteTree_,e)){let c=new Ve(null);return s.snap!=null?c=c.set(De(),!0):St(s.children,h=>{c=c.set(new Me(h),!0)}),mo(r,new Fu(s.path,c,n))}else return[]}function oc(r,e,n){return mo(r,new Ji(uf(),e,n))}function WC(r,e,n){const s=Ve.fromObject(n);return mo(r,new lo(uf(),e,s))}function GC(r,e){return mo(r,new Ul(uf(),e))}function qC(r,e,n){const s=_f(r,n);if(s){const l=yf(s),c=l.path,h=l.queryId,g=Qt(c,e),_=new Ul(cf(h),g);return vf(r,c,_)}else return[]}function Od(r,e,n,s,l=!1){const c=e._path,h=r.syncPointTree_.get(c);let g=[];if(h&&(e._queryIdentifier==="default"||fv(h,e))){const _=zC(h,e,n,s);FC(h)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const v=_.removed;if(g=_.events,!l){const R=v.findIndex(N=>N._queryParams.loadsAllData())!==-1,C=r.syncPointTree_.findOnPath(c,(N,V)=>gi(V));if(R&&!C){const N=r.syncPointTree_.subtree(c);if(!N.isEmpty()){const V=QC(N);for(let B=0;B<V.length;++B){const Q=V[B],H=Q.query,ce=_v(r,Q);r.listenProvider_.startListening(kl(H),Hu(r,H),ce.hashFn,ce.onComplete)}}}!C&&v.length>0&&!s&&(R?r.listenProvider_.stopListening(kl(e),null):v.forEach(N=>{const V=r.queryToTagMap.get(lc(N));r.listenProvider_.stopListening(kl(N),V)}))}XC(r,v)}return g}function KC(r,e,n,s){const l=_f(r,s);if(l!=null){const c=yf(l),h=c.path,g=c.queryId,_=Qt(h,e),v=new Ji(cf(g),_,n);return vf(r,h,v)}else return[]}function YC(r,e,n,s){const l=_f(r,s);if(l){const c=yf(l),h=c.path,g=c.queryId,_=Qt(h,e),v=Ve.fromObject(n),R=new lo(cf(g),_,v);return vf(r,h,R)}else return[]}function n_(r,e,n,s=!1){const l=e._path;let c=null,h=!1;r.syncPointTree_.foreachOnPath(l,(N,V)=>{const B=Qt(N,l);c=c||eo(V,B),h=h||gi(V)});let g=r.syncPointTree_.get(l);g?(h=h||gi(g),c=c||eo(g,De())):(g=new LC,r.syncPointTree_=r.syncPointTree_.set(l,g));let _;c!=null?_=!0:(_=!1,c=ae.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((V,B)=>{const Q=eo(B,De());Q&&(c=c.updateImmediateChild(V,Q))}));const v=fv(g,e);if(!v&&!e._queryParams.loadsAllData()){const N=lc(e);K(!r.queryToTagMap.has(N),"View does not exist, but we have a tag");const V=JC();r.queryToTagMap.set(N,V),r.tagToQueryMap.set(V,N)}const R=hf(r.pendingWriteTree_,l);let C=jC(g,e,n,R,c,_);if(!v&&!h&&!s){const N=dv(g,e);C=C.concat(ZC(r,e,N))}return C}function mf(r,e,n){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(h,g)=>{const _=Qt(h,e),v=eo(g,_);if(v)return v});return sv(l,e,c,n,!0)}function mo(r,e){return gv(e,r.syncPointTree_,null,hf(r.pendingWriteTree_,De()))}function gv(r,e,n,s){if(we(r.path))return mv(r,e,n,s);{const l=e.get(De());n==null&&l!=null&&(n=eo(l,De()));let c=[];const h=ye(r.path),g=r.operationForChild(h),_=e.children.get(h);if(_&&g){const v=n?n.getImmediateChild(h):null,R=ov(s,h);c=c.concat(gv(g,_,v,R))}return l&&(c=c.concat(gf(l,r,s,n))),c}}function mv(r,e,n,s){const l=e.get(De());n==null&&l!=null&&(n=eo(l,De()));let c=[];return e.children.inorderTraversal((h,g)=>{const _=n?n.getImmediateChild(h):null,v=ov(s,h),R=r.operationForChild(h);R&&(c=c.concat(mv(R,g,_,v)))}),l&&(c=c.concat(gf(l,r,s,n))),c}function _v(r,e){const n=e.query,s=Hu(r,n);return{hashFn:()=>(PC(e)||ae.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?qC(r,n._path,s):GC(r,n._path);{const c=WT(l,n);return Od(r,n,null,c)}}}}function Hu(r,e){const n=lc(e);return r.queryToTagMap.get(n)}function lc(r){return r._path.toString()+"$"+r._queryIdentifier}function _f(r,e){return r.tagToQueryMap.get(e)}function yf(r){const e=r.indexOf("$");return K(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Me(r.substr(0,e))}}function vf(r,e,n){const s=r.syncPointTree_.get(e);K(s,"Missing sync point for query tag that we're tracking");const l=hf(r.pendingWriteTree_,e);return gf(s,n,l,null)}function QC(r){return r.fold((e,n,s)=>{if(n&&gi(n))return[sc(n)];{let l=[];return n&&(l=hv(n)),St(s,(c,h)=>{l=l.concat(h)}),l}})}function kl(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(BC())(r._repo,r._path):r}function XC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=lc(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function JC(){return HC++}function ZC(r,e,n){const s=e._path,l=Hu(r,e),c=_v(r,n),h=r.listenProvider_.startListening(kl(e),l,c.hashFn,c.onComplete),g=r.syncPointTree_.subtree(s);if(l)K(!gi(g.value),"If we're adding a query, it shouldn't be shadowed");else{const _=g.fold((v,R,C)=>{if(!we(v)&&R&&gi(R))return[sc(R).query];{let N=[];return R&&(N=N.concat(hv(R).map(V=>V.query))),St(C,(V,B)=>{N=N.concat(B)}),N}});for(let v=0;v<_.length;++v){const R=_[v];r.listenProvider_.stopListening(kl(R),Hu(r,R))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wf(n)}node(){return this.node_}}class Ef{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Ef(this.syncTree_,n)}node(){return mf(this.syncTree_,this.path_)}}const ek=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},r_=function(r,e,n){if(!r||typeof r!="object")return r;if(K(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return tk(r[".sv"],e,n);if(typeof r[".sv"]=="object")return nk(r[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},tk=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+r)}},nk=function(r,e,n){r.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&K(!1,"Unexpected increment value: "+s);const l=e.node();if(K(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const h=l.getValue();return typeof h!="number"?s:h+s},yv=function(r,e,n,s){return If(e,new Ef(n,r),s)},vv=function(r,e,n){return If(r,new wf(e),n)};function If(r,e,n){const s=r.getPriority().val(),l=r_(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const h=r,g=r_(h.getValue(),e,n);return g!==h.getValue()||l!==h.getPriority().val()?new ft(g,gt(l)):r}else{const h=r;return c=h,l!==h.getPriority().val()&&(c=c.updatePriority(new ft(l))),h.forEachChild(Xe,(g,_)=>{const v=If(_,e.getImmediateChild(g),n);v!==_&&(c=c.updateImmediateChild(g,v))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Tf(r,e){let n=e instanceof Me?e:new Me(e),s=r,l=ye(n);for(;l!==null;){const c=io(s.node.children,l)||{children:{},childCount:0};s=new Sf(l,s,c),n=Be(n),l=ye(n)}return s}function _o(r){return r.node.value}function wv(r,e){r.node.value=e,Dd(r)}function Ev(r){return r.node.childCount>0}function rk(r){return _o(r)===void 0&&!Ev(r)}function ac(r,e){St(r.node.children,(n,s)=>{e(new Sf(n,r,s))})}function Iv(r,e,n,s){n&&e(r),ac(r,l=>{Iv(l,e,!0)})}function ik(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ql(r){return new Me(r.parent===null?r.name:ql(r.parent)+"/"+r.name)}function Dd(r){r.parent!==null&&sk(r.parent,r.name,r)}function sk(r,e,n){const s=rk(n),l=tr(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Dd(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Dd(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=/[\[\].#$\/\u0000-\u001F\u007F]/,lk=/[\[\].#$\u0000-\u001F\u007F]/,ad=10*1024*1024,Cf=function(r){return typeof r=="string"&&r.length!==0&&!ok.test(r)},Sv=function(r){return typeof r=="string"&&r.length!==0&&!lk.test(r)},ak=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Sv(r)},uk=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Qd(r)||r&&typeof r=="object"&&tr(r,".sv")},Tv=function(r,e,n,s){s&&e===void 0||uc(Zu(r,"value"),e,n)},uc=function(r,e,n){const s=n instanceof Me?new C0(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Wi(s));if(typeof e=="function")throw new Error(r+"contains a function "+Wi(s)+" with contents = "+e.toString());if(Qd(e))throw new Error(r+"contains "+e.toString()+" "+Wi(s));if(typeof e=="string"&&e.length>ad/3&&ec(e)>ad)throw new Error(r+"contains a string greater than "+ad+" utf8 bytes "+Wi(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(St(e,(h,g)=>{if(h===".value")l=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Cf(h)))throw new Error(r+" contains an invalid key ("+h+") "+Wi(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);k0(s,h),uc(r,g,s),R0(s)}),l&&c)throw new Error(r+' contains ".value" child '+Wi(s)+" in addition to actual children.")}},ck=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const c=Ll(s);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Cf(c[h]))throw new Error(r+"contains an invalid key ("+c[h]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(T0);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&_n(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},hk=function(r,e,n,s){const l=Zu(r,"values");if(typeof e!="object"||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];St(e,(h,g)=>{const _=new Me(h);if(uc(l,g,Qe(n,_)),tf(_)===".priority"&&!uk(g))throw new Error(l+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(_)}),ck(l,c)},Cv=function(r,e,n,s){if(!Sv(n))throw new Error(Zu(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dk=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cv(r,e,n)},kf=function(r,e){if(ye(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},fk=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ak(n))throw new Error(Zu(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cc(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();n!==null&&!nf(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(l)}n&&r.eventLists_.push(n)}function kv(r,e,n){cc(r,n),Rv(r,s=>nf(s,e))}function zn(r,e,n){cc(r,n),Rv(r,s=>_n(s,e)||_n(e,s))}function Rv(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(gk(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function gk(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Il&&It("event: "+n.toString()),go(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="repo_interrupt",_k=25;class yk{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bu(),this.transactionQueueTree_=new Sf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vk(r,e,n){if(r.stats_=Zd(r.repoInfo_),r.forceRestClient_||YT())r.server_=new Mu(r.repoInfo_,(s,l,c,h)=>{i_(r,s,l,c,h)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>s_(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{mt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new kr(r.repoInfo_,e,(s,l,c,h)=>{i_(r,s,l,c,h)},s=>{s_(r,s)},s=>{wk(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=e0(r.repoInfo_,()=>new Z0(r.stats_,r.server_)),r.infoData_=new K0,r.infoSyncTree_=new t_({startListening:(s,l,c,h)=>{let g=[];const _=r.infoData_.getNode(s._path);return _.isEmpty()||(g=oc(r.infoSyncTree_,s._path,_),setTimeout(()=>{h("ok")},0)),g},stopListening:()=>{}}),Rf(r,"connected",!1),r.serverSyncTree_=new t_({startListening:(s,l,c,h)=>(r.server_.listen(s,c,l,(g,_)=>{const v=h(g,_);zn(r.eventQueue_,s._path,v)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function Nv(r){const n=r.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hc(r){return ek({timestamp:Nv(r)})}function i_(r,e,n,s,l){r.dataUpdateCount++;const c=new Me(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let h=[];if(l)if(s){const _=Nu(n,v=>gt(v));h=YC(r.serverSyncTree_,c,_,l)}else{const _=gt(n);h=KC(r.serverSyncTree_,c,_,l)}else if(s){const _=Nu(n,v=>gt(v));h=WC(r.serverSyncTree_,c,_)}else{const _=gt(n);h=oc(r.serverSyncTree_,c,_)}let g=c;h.length>0&&(g=uo(r,c)),zn(r.eventQueue_,g,h)}function s_(r,e){Rf(r,"connected",e),e===!1&&Sk(r)}function wk(r,e){St(e,(n,s)=>{Rf(r,n,s)})}function Rf(r,e,n){const s=new Me("/.info/"+e),l=gt(n);r.infoData_.updateSnapshot(s,l);const c=oc(r.infoSyncTree_,s,l);zn(r.eventQueue_,s,c)}function Nf(r){return r.nextWriteId_++}function Ek(r,e,n,s,l){dc(r,"set",{path:e.toString(),value:n,priority:s});const c=hc(r),h=gt(n,s),g=mf(r.serverSyncTree_,e),_=vv(h,g,c),v=Nf(r),R=pv(r.serverSyncTree_,e,_,v,!0);cc(r.eventQueue_,R),r.server_.put(e.toString(),h.val(!0),(N,V)=>{const B=N==="ok";B||Mt("set at "+e+" failed: "+N);const Q=ci(r.serverSyncTree_,v,!B);zn(r.eventQueue_,e,Q),xd(r,l,N,V)});const C=Pf(r,e);uo(r,C),zn(r.eventQueue_,C,[])}function Ik(r,e,n,s){dc(r,"update",{path:e.toString(),value:n});let l=!0;const c=hc(r),h={};if(St(n,(g,_)=>{l=!1,h[g]=yv(Qe(e,g),gt(_),r.serverSyncTree_,c)}),l)It("update() called with empty data.  Don't do anything."),xd(r,s,"ok",void 0);else{const g=Nf(r),_=$C(r.serverSyncTree_,e,h,g);cc(r.eventQueue_,_),r.server_.merge(e.toString(),n,(v,R)=>{const C=v==="ok";C||Mt("update at "+e+" failed: "+v);const N=ci(r.serverSyncTree_,g,!C),V=N.length>0?uo(r,e):e;zn(r.eventQueue_,V,N),xd(r,s,v,R)}),St(n,v=>{const R=Pf(r,Qe(e,v));uo(r,R)}),zn(r.eventQueue_,e,[])}}function Sk(r){dc(r,"onDisconnectEvents");const e=hc(r),n=bu();Td(r.onDisconnect_,De(),(l,c)=>{const h=yv(l,c,r.serverSyncTree_,e);tv(n,l,h)});let s=[];Td(n,De(),(l,c)=>{s=s.concat(oc(r.serverSyncTree_,l,c));const h=Pf(r,l);uo(r,h)}),r.onDisconnect_=bu(),zn(r.eventQueue_,De(),s)}function Tk(r,e,n){let s;ye(e._path)===".info"?s=n_(r.infoSyncTree_,e,n):s=n_(r.serverSyncTree_,e,n),kv(r.eventQueue_,e._path,s)}function Ck(r,e,n){let s;ye(e._path)===".info"?s=Od(r.infoSyncTree_,e,n):s=Od(r.serverSyncTree_,e,n),kv(r.eventQueue_,e._path,s)}function kk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(mk)}function dc(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),It(n,...e)}function xd(r,e,n,s){e&&go(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let c=l;s&&(c+=": "+s);const h=new Error(c);h.code=l,e(h)}})}function Av(r,e,n){return mf(r.serverSyncTree_,e,n)||ae.EMPTY_NODE}function Af(r,e=r.transactionQueueTree_){if(e||fc(r,e),_o(e)){const n=Ov(r,e);K(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&Rk(r,ql(e),n)}else Ev(e)&&ac(e,n=>{Af(r,n)})}function Rk(r,e,n){const s=n.map(v=>v.currentWriteId),l=Av(r,e,s);let c=l;const h=l.hash();for(let v=0;v<n.length;v++){const R=n[v];K(R.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),R.status=1,R.retryCount++;const C=Qt(e,R.path);c=c.updateChild(C,R.currentOutputSnapshotRaw)}const g=c.val(!0),_=e;r.server_.put(_.toString(),g,v=>{dc(r,"transaction put response",{path:_.toString(),status:v});let R=[];if(v==="ok"){const C=[];for(let N=0;N<n.length;N++)n[N].status=2,R=R.concat(ci(r.serverSyncTree_,n[N].currentWriteId)),n[N].onComplete&&C.push(()=>n[N].onComplete(null,!0,n[N].currentOutputSnapshotResolved)),n[N].unwatcher();fc(r,Tf(r.transactionQueueTree_,e)),Af(r,r.transactionQueueTree_),zn(r.eventQueue_,e,R);for(let N=0;N<C.length;N++)go(C[N])}else{if(v==="datastale")for(let C=0;C<n.length;C++)n[C].status===3?n[C].status=4:n[C].status=0;else{Mt("transaction at "+_.toString()+" failed: "+v);for(let C=0;C<n.length;C++)n[C].status=4,n[C].abortReason=v}uo(r,e)}},h)}function uo(r,e){const n=Pv(r,e),s=ql(n),l=Ov(r,n);return Nk(r,l,s),s}function Nk(r,e,n){if(e.length===0)return;const s=[];let l=[];const h=e.filter(g=>g.status===0).map(g=>g.currentWriteId);for(let g=0;g<e.length;g++){const _=e[g],v=Qt(n,_.path);let R=!1,C;if(K(v!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)R=!0,C=_.abortReason,l=l.concat(ci(r.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=_k)R=!0,C="maxretry",l=l.concat(ci(r.serverSyncTree_,_.currentWriteId,!0));else{const N=Av(r,_.path,h);_.currentInputSnapshot=N;const V=e[g].update(N.val());if(V!==void 0){uc("transaction failed: Data returned ",V,_.path);let B=gt(V);typeof V=="object"&&V!=null&&tr(V,".priority")||(B=B.updatePriority(N.getPriority()));const H=_.currentWriteId,ce=hc(r),pe=vv(B,N,ce);_.currentOutputSnapshotRaw=B,_.currentOutputSnapshotResolved=pe,_.currentWriteId=Nf(r),h.splice(h.indexOf(H),1),l=l.concat(pv(r.serverSyncTree_,_.path,pe,_.currentWriteId,_.applyLocally)),l=l.concat(ci(r.serverSyncTree_,H,!0))}else R=!0,C="nodata",l=l.concat(ci(r.serverSyncTree_,_.currentWriteId,!0))}zn(r.eventQueue_,n,l),l=[],R&&(e[g].status=2,function(N){setTimeout(N,Math.floor(0))}(e[g].unwatcher),e[g].onComplete&&(C==="nodata"?s.push(()=>e[g].onComplete(null,!1,e[g].currentInputSnapshot)):s.push(()=>e[g].onComplete(new Error(C),!1,null))))}fc(r,r.transactionQueueTree_);for(let g=0;g<s.length;g++)go(s[g]);Af(r,r.transactionQueueTree_)}function Pv(r,e){let n,s=r.transactionQueueTree_;for(n=ye(e);n!==null&&_o(s)===void 0;)s=Tf(s,n),e=Be(e),n=ye(e);return s}function Ov(r,e){const n=[];return Dv(r,e,n),n.sort((s,l)=>s.order-l.order),n}function Dv(r,e,n){const s=_o(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);ac(e,l=>{Dv(r,l,n)})}function fc(r,e){const n=_o(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,wv(e,n.length>0?n:void 0)}ac(e,s=>{fc(r,s)})}function Pf(r,e){const n=ql(Pv(r,e)),s=Tf(r.transactionQueueTree_,e);return ik(s,l=>{ud(r,l)}),ud(r,s),Iv(s,l=>{ud(r,l)}),n}function ud(r,e){const n=_o(e);if(n){const s=[];let l=[],c=-1;for(let h=0;h<n.length;h++)n[h].status===3||(n[h].status===1?(K(c===h-1,"All SENT items should be at beginning of queue."),c=h,n[h].status=3,n[h].abortReason="set"):(K(n[h].status===0,"Unexpected transaction status in abort"),n[h].unwatcher(),l=l.concat(ci(r.serverSyncTree_,n[h].currentWriteId,!0)),n[h].onComplete&&s.push(n[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?wv(e,void 0):n.length=c+1,zn(r.eventQueue_,ql(e),l);for(let h=0;h<s.length;h++)go(s[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function Pk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Mt(`Invalid query segment '${n}' in query '${r}'`)}return e}const o_=function(r,e){const n=Ok(r),s=n.namespace;n.domain==="firebase.com"&&Nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zT();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Uy(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Me(n.pathString)}},Ok=function(r){let e="",n="",s="",l="",c="",h=!0,g="https",_=443;if(typeof r=="string"){let v=r.indexOf("//");v>=0&&(g=r.substring(0,v-1),r=r.substring(v+2));let R=r.indexOf("/");R===-1&&(R=r.length);let C=r.indexOf("?");C===-1&&(C=r.length),e=r.substring(0,Math.min(R,C)),R<C&&(l=Ak(r.substring(R,C)));const N=Pk(r.substring(Math.min(r.length,C)));v=e.indexOf(":"),v>=0?(h=g==="https"||g==="wss",_=parseInt(e.substring(v+1),10)):v=e.length;const V=e.slice(0,v);if(V.toLowerCase()==="localhost")n="localhost";else if(V.split(".").length<=2)n=V;else{const B=e.indexOf(".");s=e.substring(0,B).toLowerCase(),n=e.substring(B+1),c=s}"ns"in N&&(c=N.ns)}return{host:e,port:_,domain:n,subdomain:s,secure:h,scheme:g,pathString:l,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Dk=function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const c=new Array(8);for(l=7;l>=0;l--)c[l]=l_.charAt(n%64),n=Math.floor(n/64);K(n===0,"Cannot push at time == 0");let h=c.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)h+=l_.charAt(e[l]);return K(h.length===20,"nextPushId: Length should be 20."),h}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+mt(this.snapshot.exportVal())}}class Lk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return K(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return we(this._path)?null:tf(this._path)}get ref(){return new _i(this._repo,this._path)}get _queryIdentifier(){const e=Wm(this._queryParams),n=Xd(e);return n==="{}"?"default":n}get _queryObject(){return Wm(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof Of))return!1;const n=this._repo===e._repo,s=nf(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+S0(this._path)}}class _i extends Of{constructor(e,n){super(e,n,new lf,!1)}get parent(){const e=qy(this._path);return e===null?null:new _i(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $u{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Me(e),s=jl(this.ref,e);return new $u(this._node.getChild(n),s,Xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new $u(l,jl(this.ref,s),Xe)))}hasChild(e){const n=new Me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mu(r,e){return r=Ft(r),r._checkNotDeleted("ref"),e!==void 0?jl(r._root,e):r._root}function jl(r,e){return r=Ft(r),ye(r._path)===null?dk("child","path",e):Cv("child","path",e),new _i(r._repo,Qe(r._path,e))}function bk(r,e){r=Ft(r),kf("push",r._path),Tv("push",e,r._path,!0);const n=Nv(r._repo),s=Dk(n),l=jl(r,s),c=jl(r,s);let h;return e!=null?h=xv(c,e).then(()=>c):h=Promise.resolve(c),l.then=h.then.bind(h),l.catch=h.then.bind(h,void 0),l}function Fk(r){return kf("remove",r._path),xv(r,null)}function xv(r,e){r=Ft(r),kf("set",r._path),Tv("set",e,r._path,!1);const n=new Vl;return Ek(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function Uk(r,e){hk("update",e,r._path);const n=new Vl;return Ik(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Df{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xk("value",this,new $u(e.snapshotNode,new _i(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lk(this,e,n):null}matches(e){return e instanceof Df?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function jk(r,e,n,s,l){const c=new Mk(n,void 0),h=new Df(c);return Tk(r._repo,r,h),()=>Ck(r._repo,r,h)}function zk(r,e,n,s){return jk(r,"value",e)}MC(_i);VC(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="FIREBASE_DATABASE_EMULATOR_HOST",Ld={};let Bk=!1;function Hk(r,e,n,s){r.repoInfo_=new Uy(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function $k(r,e,n,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||Nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),It("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let h=o_(c,l),g=h.repoInfo,_;typeof process<"u"&&Rm&&(_=Rm[Vk]),_?(c=`http://${_}?ns=${g.namespace}`,h=o_(c,l),g=h.repoInfo):h.repoInfo.secure;const v=new XT(r.name,r.options,e);fk("Invalid Firebase Database URL",h),we(h.path)||Nr("Database URL must point to the root of a Firebase Database (not including a child path).");const R=Gk(g,r,v,new QT(r.name,n));return new qk(R,r)}function Wk(r,e){const n=Ld[e];(!n||n[r.key]!==r)&&Nr(`Database ${e}(${r.repoInfo_}) has already been deleted.`),kk(r),delete n[r.key]}function Gk(r,e,n,s){let l=Ld[e.name];l||(l={},Ld[e.name]=l);let c=l[r.toURLString()];return c&&Nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new yk(r,Bk,n,s),l[r.toURLString()]=c,c}class qk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _i(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nr("Cannot call "+e+" on a deleted database.")}}function Kk(r=Hl(),e){const n=Or(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Vd("database");s&&Yk(n,...s)}return n}function Yk(r,e,n,s={}){r=Ft(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Nr("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Nr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Eu(Eu.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:Bd(s.mockUserToken,r.app.options.projectId);c=new Eu(h)}Hk(l,e,n,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(r){LT(mi),yn(new ln("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return $k(s,l,c,n)},"PUBLIC").setMultipleInstances(!0)),Pt(Nm,Am,r),Pt(Nm,Am,"esm2017")}kr.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};kr.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};Qk();function xf(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function Lv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xk=Lv,Mv=new ns("auth","Firebase",Lv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Bl("@firebase/auth");function Jk(r,...e){Wu.logLevel<=Oe.WARN&&Wu.warn(`Auth (${mi}): ${r}`,...e)}function Iu(r,...e){Wu.logLevel<=Oe.ERROR&&Wu.error(`Auth (${mi}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(r,...e){throw Lf(r,...e)}function Jn(r,...e){return Lf(r,...e)}function bv(r,e,n){const s=Object.assign(Object.assign({},Xk()),{[e]:n});return new ns("auth","Firebase",s).create(e,{appName:r.name})}function Ki(r){return bv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lf(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Mv.create(r,...e)}function de(r,e,...n){if(!r)throw Lf(e,...n)}function Sr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Iu(e),new Error(e)}function Pr(r,e){r||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Zk(){return a_()==="http:"||a_()==="https:"}function a_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zk()||W_()||"connection"in navigator)?navigator.onLine:!0}function t1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||G_()}get(){return e1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(r,e){Pr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=new Kl(3e4,6e4);function bf(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function yo(r,e,n,s,l={}){return Uv(r,l,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const g=po(Object.assign({key:r.config.apiKey},h)).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:_},c);return HE()||(v.referrerPolicy="no-referrer"),Fv.fetch()(jv(r,r.config.apiHost,n,g),v)})}async function Uv(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},n1),e);try{const l=new s1(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw _u(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const g=c.ok?h.errorMessage:h.error.message,[_,v]=g.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(r,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw _u(r,"email-already-in-use",h);if(_==="USER_DISABLED")throw _u(r,"user-disabled",h);const R=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw bv(r,R,v);Ar(r,R)}}catch(l){if(l instanceof vn)throw l;Ar(r,"network-request-failed",{message:String(l)})}}async function i1(r,e,n,s,l={}){const c=await yo(r,e,n,s,l);return"mfaPendingCredential"in c&&Ar(r,"multi-factor-auth-required",{_serverResponse:c}),c}function jv(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Mf(r.config,l):`${r.config.apiScheme}://${l}`}class s1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),r1.get())})}}function _u(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Jn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(r,e){return yo(r,"POST","/v1/accounts:delete",e)}async function zv(r,e){return yo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l1(r,e=!1){const n=Ft(r),s=await n.getIdToken(e),l=Ff(s);de(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:l,token:s,authTime:Rl(cd(l.auth_time)),issuedAtTime:Rl(cd(l.iat)),expirationTime:Rl(cd(l.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function cd(r){return Number(r)*1e3}function Ff(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const l=Ru(n);return l?JSON.parse(l):(Iu("Failed to decode base64 JWT payload"),null)}catch(l){return Iu("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function u_(r){const e=Ff(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vn&&a1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function a1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(r){var e;const n=r.auth,s=await r.getIdToken(),l=await zl(r,zv(n,{idToken:s}));de(l==null?void 0:l.users.length,n,"internal-error");const c=l.users[0];r._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Vv(c.providerUserInfo):[],g=h1(r.providerData,h),_=r.isAnonymous,v=!(r.email&&c.passwordHash)&&!(g!=null&&g.length),R=_?v:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new bd(c.createdAt,c.lastLoginAt),isAnonymous:R};Object.assign(r,C)}async function c1(r){const e=Ft(r);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Vv(r){return r.map(e=>{var{providerId:n}=e,s=xf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(r,e){const n=await Uv(r,{},async()=>{const s=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,h=jv(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Fv.fetch()(h,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f1(r,e){return yo(r,"POST","/v2/accounts:revokeToken",bf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=u_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await d1(e,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,h=new to;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),l&&(de(typeof l=="string","internal-error",{appName:e}),h.accessToken=l),c&&(de(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,c=xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new bd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await zl(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l1(this,e)}reload(){return c1(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ui(this.auth.app))return Promise.reject(Ki(this.auth));const e=await this.getIdToken();return await zl(this,o1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,c,h,g,_,v,R;const C=(s=n.displayName)!==null&&s!==void 0?s:void 0,N=(l=n.email)!==null&&l!==void 0?l:void 0,V=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,B=(h=n.photoURL)!==null&&h!==void 0?h:void 0,Q=(g=n.tenantId)!==null&&g!==void 0?g:void 0,H=(_=n._redirectEventId)!==null&&_!==void 0?_:void 0,ce=(v=n.createdAt)!==null&&v!==void 0?v:void 0,pe=(R=n.lastLoginAt)!==null&&R!==void 0?R:void 0,{uid:he,emailVerified:fe,isAnonymous:Fe,providerData:Ie,stsTokenManager:O}=n;de(he&&O,e,"internal-error");const I=to.fromJSON(this.name,O);de(typeof he=="string",e,"internal-error"),ii(C,e.name),ii(N,e.name),de(typeof fe=="boolean",e,"internal-error"),de(typeof Fe=="boolean",e,"internal-error"),ii(V,e.name),ii(B,e.name),ii(Q,e.name),ii(H,e.name),ii(ce,e.name),ii(pe,e.name);const T=new Tr({uid:he,auth:e,email:N,emailVerified:fe,displayName:C,isAnonymous:Fe,photoURL:B,phoneNumber:V,tenantId:Q,stsTokenManager:I,createdAt:ce,lastLoginAt:pe});return Ie&&Array.isArray(Ie)&&(T.providerData=Ie.map(P=>Object.assign({},P))),H&&(T._redirectEventId=H),T}static async _fromIdTokenResponse(e,n,s=!1){const l=new to;l.updateFromServerResponse(n);const c=new Tr({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Gu(c),c}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];de(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?Vv(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),g=new to;g.updateFromIdToken(s);const _=new Tr({uid:l.localId,auth:e,stsTokenManager:g,isAnonymous:h}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new bd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,v),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;function Cr(r){Pr(r instanceof Function,"Expected a class definition");let e=c_.get(r);return e?(Pr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,c_.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bv.type="NONE";const h_=Bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(r,e,n){return`firebase:${r}:${e}:${n}`}class no{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Su(this.userKey,l.apiKey,c),this.fullPersistenceKey=Su("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new no(Cr(h_),e,s);const l=(await Promise.all(n.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=l[0]||Cr(h_);const h=Su(s,e.config.apiKey,e.name);let g=null;for(const v of n)try{const R=await v._get(h);if(R){const C=Tr._fromJSON(e,R);v!==c&&(g=C),c=v;break}}catch{}const _=l.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new no(c,e,s):(c=_[0],g&&await c._set(h,g.toJSON()),await Promise.all(n.map(async v=>{if(v!==c)try{await v._remove(h)}catch{}})),new no(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kv(e))return"Blackberry";if(Yv(e))return"Webos";if($v(e))return"Safari";if((e.includes("chrome/")||Wv(e))&&!e.includes("edge/"))return"Chrome";if(qv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hv(r=bt()){return/firefox\//i.test(r)}function $v(r=bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wv(r=bt()){return/crios\//i.test(r)}function Gv(r=bt()){return/iemobile/i.test(r)}function qv(r=bt()){return/android/i.test(r)}function Kv(r=bt()){return/blackberry/i.test(r)}function Yv(r=bt()){return/webos/i.test(r)}function Uf(r=bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function p1(r=bt()){var e;return Uf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function g1(){return $E()&&document.documentMode===10}function Qv(r=bt()){return Uf(r)||qv(r)||Yv(r)||Kv(r)||/windows phone/i.test(r)||Gv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(r,e=[]){let n;switch(r){case"Browser":n=d_(bt());break;case"Worker":n=`${d_(bt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((h,g)=>{try{const _=e(c);h(_)}catch(_){g(_)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(r,e={}){return yo(r,"GET","/v2/passwordPolicy",bf(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=6;class v1{constructor(e){var n,s,l,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:y1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,c,h,g;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(n=_.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),_.isValid&&(_.isValid=(s=_.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(l=_.containsLowercaseLetter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(g=_.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),_}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f_(this),this.idTokenSubscription=new f_(this),this.beforeStateQueue=new m1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cr(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zv(this,{idToken:e}),s=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ui(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=l==null?void 0:l._redirectEventId,_=await this.tryRedirectSignIn(e);(!h||h===g)&&(_!=null&&_.user)&&(l=_.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(h){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ui(this.app))return Promise.reject(Ki(this));const n=e?Ft(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ui(this.app)?Promise.reject(Ki(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ui(this.app)?Promise.reject(Ki(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _1(this),n=new v1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await f1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[Cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(g,this,"internal-error"),g.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const _=e.addObserver(n,s,l);return()=>{h=!0,_()}}else{const _=e.addObserver(n);return()=>{h=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jf(r){return Ft(r)}class f_{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E1(r){zf=r}function I1(r){return zf.loadJS(r)}function S1(){return zf.gapiScript}function T1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(r,e){const n=Or(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(Ol(c,e??{}))return l;Ar(l,"already-initialized")}return n.initialize({options:e})}function k1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Cr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function R1(r,e,n){const s=jf(r);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=Jv(e),{host:h,port:g}=N1(e),_=g===null?"":`:${g}`;s.config.emulator={url:`${c}//${h}${_}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})}),A1()}function Jv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function N1(r){const e=Jv(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:p_(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:p_(h)}}}function p_(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function A1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(r,e){return i1(r,"POST","/v1/accounts:signInWithIdp",bf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="http://localhost";class ts extends Zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ar("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,c=xf(n,["providerId","signInMethod"]);if(!s||!l)return null;const h=new ts(s,l);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ro(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Yl{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return oi.credential(n,s)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Yl{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Yl{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ai.credential(n,s)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const c=await Tr._fromIdTokenResponse(e,s,l),h=g_(s);return new co({user:c,providerId:h,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=g_(s);return new co({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function g_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends vn{constructor(e,n,s,l){var c;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new qu(e,n,s,l)}}function tw(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(r,c,e,s):c})}async function O1(r,e,n=!1){const s=await zl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return co._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(r,e,n=!1){const{auth:s}=r;if(ui(s.app))return Promise.reject(Ki(s));const l="reauthenticate";try{const c=await zl(r,tw(s,l,e,r),n);de(c.idToken,s,"internal-error");const h=Ff(c.idToken);de(h,s,"internal-error");const{sub:g}=h;return de(r.uid===g,s,"user-mismatch"),co._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Ar(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(r,e,n=!1){if(ui(r.app))return Promise.reject(Ki(r));const s="signIn",l=await tw(r,s,e),c=await co._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}function L1(r,e,n,s){return Ft(r).onIdTokenChanged(e,n,s)}function M1(r,e,n){return Ft(r).beforeAuthStateChanged(e,n)}const Ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=1e3,F1=10;class rw extends nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,g,_)=>{this.notifyListeners(h,_)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(s);!n&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);g1()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,F1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},b1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rw.type="LOCAL";const U1=rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iw.type="SESSION";const sw=iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:c}=n.data,h=this.handlersMap[l];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const g=Array.from(h).map(async v=>v(n.origin,c)),_=await j1(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:_})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,h;return new Promise((g,_)=>{const v=Vf("",20);l.port1.start();const R=setTimeout(()=>{_(new Error("unsupported_event"))},s);h={messageChannel:l,onMessage(C){const N=C;if(N.data.eventId===v)switch(N.data.status){case"ack":clearTimeout(R),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(N.data.response);break;default:clearTimeout(R),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:n},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function V1(r){Zn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function B1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function $1(){return ow()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="firebaseLocalStorageDb",W1=1,Yu="firebaseLocalStorage",aw="fbase_key";class Ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(r,e){return r.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function G1(){const r=indexedDB.deleteDatabase(lw);return new Ql(r).toPromise()}function Fd(){const r=indexedDB.open(lw,W1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Yu,{keyPath:aw})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Yu)?e(s):(s.close(),await G1(),e(await Fd()))})})}async function m_(r,e,n){const s=gc(r,!0).put({[aw]:e,value:n});return new Ql(s).toPromise()}async function q1(r,e){const n=gc(r,!1).get(e),s=await new Ql(n).toPromise();return s===void 0?null:s.value}function __(r,e){const n=gc(r,!0).delete(e);return new Ql(n).toPromise()}const K1=800,Y1=3;class uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Y1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance($1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await B1(),!this.activeServiceWorker)return;this.sender=new z1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fd();return await m_(e,Ku,"1"),await __(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>m_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>q1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>__(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=gc(l,!1).getAll();return new Ql(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uw.type="LOCAL";const Q1=uw;new Kl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(r,e){return e?Cr(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Zv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function J1(r){return x1(r.auth,new Bf(r),r.bypassAuthState)}function Z1(r){const{auth:e,user:n}=r;return de(n,e,"internal-error"),D1(n,new Bf(r),r.bypassAuthState)}async function eR(r){const{auth:e,user:n}=r;return de(n,e,"internal-error"),O1(n,new Bf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:h,type:g}=e;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return J1;case"linkViaPopup":case"linkViaRedirect":return eR;case"reauthViaPopup":case"reauthViaRedirect":return Z1;default:Ar(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new Kl(2e3,1e4);class Xs extends cw{constructor(e,n,s,l,c){super(e,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tR.get())};e()}}Xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="pendingRedirect",Tu=new Map;class rR extends cw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const s=await iR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iR(r,e){const n=lR(e),s=oR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function sR(r,e){Tu.set(r._key(),e)}function oR(r){return Cr(r._redirectPersistence)}function lR(r){return Su(nR,r.config.apiKey,r.name)}async function aR(r,e,n=!1){if(ui(r.app))return Promise.reject(Ki(r));const s=jf(r),l=X1(s,e),h=await new rR(s,l,n).execute();return h&&!n&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=10*60*1e3;class cR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hw(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uR&&this.cachedEventUids.clear(),this.cachedEventUids.has(y_(e))}saveEventToCache(e){this.cachedEventUids.add(y_(e)),this.lastProcessedEventTime=Date.now()}}function y_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function hw({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hw(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(r,e={}){return yo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pR=/^https?/;async function gR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await dR(r);for(const n of e)try{if(mR(n))return}catch{}Ar(r,"unauthorized-domain")}function mR(r){const e=Md(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===s}if(!pR.test(n))return!1;if(fR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new Kl(3e4,6e4);function v_(){const r=Zn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function yR(r){return new Promise((e,n)=>{var s,l,c;function h(){v_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{v_(),n(Jn(r,"network-request-failed"))},timeout:_R.get()})}if(!((l=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((c=Zn().gapi)===null||c===void 0)&&c.load)h();else{const g=T1("iframefcb");return Zn()[g]=()=>{gapi.load?h():n(Jn(r,"network-request-failed"))},I1(`${S1()}?onload=${g}`).catch(_=>n(_))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function vR(r){return Cu=Cu||yR(r),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new Kl(5e3,15e3),ER="__/auth/iframe",IR="emulator/auth/iframe",SR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CR(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Mf(e,IR):`https://${r.config.authDomain}/${ER}`,s={apiKey:e.apiKey,appName:r.name,v:mi},l=TR.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${po(s).slice(1)}`}async function kR(r){const e=await vR(r),n=Zn().gapi;return de(n,r,"internal-error"),e.open({where:document.body,url:CR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SR,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(r,"network-request-failed"),g=Zn().setTimeout(()=>{c(h)},wR.get());function _(){Zn().clearTimeout(g),l(s)}s.ping(_).then(_,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NR=500,AR=600,PR="_blank",OR="http://localhost";class w_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DR(r,e,n,s=NR,l=AR){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const _=Object.assign(Object.assign({},RR),{width:s.toString(),height:l.toString(),top:c,left:h}),v=bt().toLowerCase();n&&(g=Wv(v)?PR:n),Hv(v)&&(e=e||OR,_.scrollbars="yes");const R=Object.entries(_).reduce((N,[V,B])=>`${N}${V}=${B},`,"");if(p1(v)&&g!=="_self")return xR(e||"",g),new w_(null);const C=window.open(e||"",g,R);de(C,r,"popup-blocked");try{C.focus()}catch{}return new w_(C)}function xR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="__/auth/handler",MR="emulator/auth/handler",bR=encodeURIComponent("fac");async function E_(r,e,n,s,l,c){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:mi,eventId:l};if(e instanceof ew){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",pd(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[R,C]of Object.entries({}))h[R]=C}if(e instanceof Yl){const R=e.getScopes().filter(C=>C!=="");R.length>0&&(h.scopes=R.join(","))}r.tenantId&&(h.tid=r.tenantId);const g=h;for(const R of Object.keys(g))g[R]===void 0&&delete g[R];const _=await r._getAppCheckToken(),v=_?`#${bR}=${encodeURIComponent(_)}`:"";return`${FR(r)}?${po(g).slice(1)}${v}`}function FR({config:r}){return r.emulator?Mf(r,MR):`https://${r.authDomain}/${LR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="webStorageSupport";class UR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sw,this._completeRedirectFn=aR,this._overrideRedirectResult=sR}async _openPopup(e,n,s,l){var c;Pr((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await E_(e,n,s,Md(),l);return DR(e,h,Vf())}async _openRedirect(e,n,s,l){await this._originValidation(e);const c=await E_(e,n,s,Md(),l);return V1(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(Pr(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await kR(e),s=new cR(e);return n.register("authEvent",l=>(de(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hd,{type:hd},l=>{var c;const h=(c=l==null?void 0:l[0])===null||c===void 0?void 0:c[hd];h!==void 0&&n(!!h),Ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qv()||$v()||Uf()}}const jR=UR;var I_="@firebase/auth",S_="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BR(r){yn(new ln("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:h,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xv(r)},v=new w1(s,l,c,_);return k1(v,n),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),yn(new ln("auth-internal",e=>{const n=jf(e.getProvider("auth").getImmediate());return(s=>new zR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(I_,S_,VR(r)),Pt(I_,S_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=5*60,$R=$_("authIdTokenMaxAge")||HR;let T_=null;const WR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$R)return;const l=n==null?void 0:n.token;T_!==l&&(T_=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function GR(r=Hl()){const e=Or(r,"auth");if(e.isInitialized())return e.getImmediate();const n=C1(r,{popupRedirectResolver:jR,persistence:[Q1,U1,sw]}),s=$_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=WR(c.toString());M1(n,h,()=>h(n.currentUser)),L1(n,g=>h(g))}}const l=B_("auth");return l&&R1(n,`http://${l}`),n}function qR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}E1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=Jn("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",qR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BR("Browser");var C_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dw;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,I){function T(){}T.prototype=I.prototype,O.D=I.prototype,O.prototype=new T,O.prototype.constructor=O,O.C=function(P,D,L){for(var S=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)S[Je-2]=arguments[Je];return I.prototype[D].apply(P,S)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(O,I,T){T||(T=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(T++)|I.charCodeAt(T++)<<8|I.charCodeAt(T++)<<16|I.charCodeAt(T++)<<24;else for(D=0;16>D;++D)P[D]=I[T++]|I[T++]<<8|I[T++]<<16|I[T++]<<24;I=O.g[0],T=O.g[1],D=O.g[2];var L=O.g[3],S=I+(L^T&(D^L))+P[0]+3614090360&4294967295;I=T+(S<<7&4294967295|S>>>25),S=L+(D^I&(T^D))+P[1]+3905402710&4294967295,L=I+(S<<12&4294967295|S>>>20),S=D+(T^L&(I^T))+P[2]+606105819&4294967295,D=L+(S<<17&4294967295|S>>>15),S=T+(I^D&(L^I))+P[3]+3250441966&4294967295,T=D+(S<<22&4294967295|S>>>10),S=I+(L^T&(D^L))+P[4]+4118548399&4294967295,I=T+(S<<7&4294967295|S>>>25),S=L+(D^I&(T^D))+P[5]+1200080426&4294967295,L=I+(S<<12&4294967295|S>>>20),S=D+(T^L&(I^T))+P[6]+2821735955&4294967295,D=L+(S<<17&4294967295|S>>>15),S=T+(I^D&(L^I))+P[7]+4249261313&4294967295,T=D+(S<<22&4294967295|S>>>10),S=I+(L^T&(D^L))+P[8]+1770035416&4294967295,I=T+(S<<7&4294967295|S>>>25),S=L+(D^I&(T^D))+P[9]+2336552879&4294967295,L=I+(S<<12&4294967295|S>>>20),S=D+(T^L&(I^T))+P[10]+4294925233&4294967295,D=L+(S<<17&4294967295|S>>>15),S=T+(I^D&(L^I))+P[11]+2304563134&4294967295,T=D+(S<<22&4294967295|S>>>10),S=I+(L^T&(D^L))+P[12]+1804603682&4294967295,I=T+(S<<7&4294967295|S>>>25),S=L+(D^I&(T^D))+P[13]+4254626195&4294967295,L=I+(S<<12&4294967295|S>>>20),S=D+(T^L&(I^T))+P[14]+2792965006&4294967295,D=L+(S<<17&4294967295|S>>>15),S=T+(I^D&(L^I))+P[15]+1236535329&4294967295,T=D+(S<<22&4294967295|S>>>10),S=I+(D^L&(T^D))+P[1]+4129170786&4294967295,I=T+(S<<5&4294967295|S>>>27),S=L+(T^D&(I^T))+P[6]+3225465664&4294967295,L=I+(S<<9&4294967295|S>>>23),S=D+(I^T&(L^I))+P[11]+643717713&4294967295,D=L+(S<<14&4294967295|S>>>18),S=T+(L^I&(D^L))+P[0]+3921069994&4294967295,T=D+(S<<20&4294967295|S>>>12),S=I+(D^L&(T^D))+P[5]+3593408605&4294967295,I=T+(S<<5&4294967295|S>>>27),S=L+(T^D&(I^T))+P[10]+38016083&4294967295,L=I+(S<<9&4294967295|S>>>23),S=D+(I^T&(L^I))+P[15]+3634488961&4294967295,D=L+(S<<14&4294967295|S>>>18),S=T+(L^I&(D^L))+P[4]+3889429448&4294967295,T=D+(S<<20&4294967295|S>>>12),S=I+(D^L&(T^D))+P[9]+568446438&4294967295,I=T+(S<<5&4294967295|S>>>27),S=L+(T^D&(I^T))+P[14]+3275163606&4294967295,L=I+(S<<9&4294967295|S>>>23),S=D+(I^T&(L^I))+P[3]+4107603335&4294967295,D=L+(S<<14&4294967295|S>>>18),S=T+(L^I&(D^L))+P[8]+1163531501&4294967295,T=D+(S<<20&4294967295|S>>>12),S=I+(D^L&(T^D))+P[13]+2850285829&4294967295,I=T+(S<<5&4294967295|S>>>27),S=L+(T^D&(I^T))+P[2]+4243563512&4294967295,L=I+(S<<9&4294967295|S>>>23),S=D+(I^T&(L^I))+P[7]+1735328473&4294967295,D=L+(S<<14&4294967295|S>>>18),S=T+(L^I&(D^L))+P[12]+2368359562&4294967295,T=D+(S<<20&4294967295|S>>>12),S=I+(T^D^L)+P[5]+4294588738&4294967295,I=T+(S<<4&4294967295|S>>>28),S=L+(I^T^D)+P[8]+2272392833&4294967295,L=I+(S<<11&4294967295|S>>>21),S=D+(L^I^T)+P[11]+1839030562&4294967295,D=L+(S<<16&4294967295|S>>>16),S=T+(D^L^I)+P[14]+4259657740&4294967295,T=D+(S<<23&4294967295|S>>>9),S=I+(T^D^L)+P[1]+2763975236&4294967295,I=T+(S<<4&4294967295|S>>>28),S=L+(I^T^D)+P[4]+1272893353&4294967295,L=I+(S<<11&4294967295|S>>>21),S=D+(L^I^T)+P[7]+4139469664&4294967295,D=L+(S<<16&4294967295|S>>>16),S=T+(D^L^I)+P[10]+3200236656&4294967295,T=D+(S<<23&4294967295|S>>>9),S=I+(T^D^L)+P[13]+681279174&4294967295,I=T+(S<<4&4294967295|S>>>28),S=L+(I^T^D)+P[0]+3936430074&4294967295,L=I+(S<<11&4294967295|S>>>21),S=D+(L^I^T)+P[3]+3572445317&4294967295,D=L+(S<<16&4294967295|S>>>16),S=T+(D^L^I)+P[6]+76029189&4294967295,T=D+(S<<23&4294967295|S>>>9),S=I+(T^D^L)+P[9]+3654602809&4294967295,I=T+(S<<4&4294967295|S>>>28),S=L+(I^T^D)+P[12]+3873151461&4294967295,L=I+(S<<11&4294967295|S>>>21),S=D+(L^I^T)+P[15]+530742520&4294967295,D=L+(S<<16&4294967295|S>>>16),S=T+(D^L^I)+P[2]+3299628645&4294967295,T=D+(S<<23&4294967295|S>>>9),S=I+(D^(T|~L))+P[0]+4096336452&4294967295,I=T+(S<<6&4294967295|S>>>26),S=L+(T^(I|~D))+P[7]+1126891415&4294967295,L=I+(S<<10&4294967295|S>>>22),S=D+(I^(L|~T))+P[14]+2878612391&4294967295,D=L+(S<<15&4294967295|S>>>17),S=T+(L^(D|~I))+P[5]+4237533241&4294967295,T=D+(S<<21&4294967295|S>>>11),S=I+(D^(T|~L))+P[12]+1700485571&4294967295,I=T+(S<<6&4294967295|S>>>26),S=L+(T^(I|~D))+P[3]+2399980690&4294967295,L=I+(S<<10&4294967295|S>>>22),S=D+(I^(L|~T))+P[10]+4293915773&4294967295,D=L+(S<<15&4294967295|S>>>17),S=T+(L^(D|~I))+P[1]+2240044497&4294967295,T=D+(S<<21&4294967295|S>>>11),S=I+(D^(T|~L))+P[8]+1873313359&4294967295,I=T+(S<<6&4294967295|S>>>26),S=L+(T^(I|~D))+P[15]+4264355552&4294967295,L=I+(S<<10&4294967295|S>>>22),S=D+(I^(L|~T))+P[6]+2734768916&4294967295,D=L+(S<<15&4294967295|S>>>17),S=T+(L^(D|~I))+P[13]+1309151649&4294967295,T=D+(S<<21&4294967295|S>>>11),S=I+(D^(T|~L))+P[4]+4149444226&4294967295,I=T+(S<<6&4294967295|S>>>26),S=L+(T^(I|~D))+P[11]+3174756917&4294967295,L=I+(S<<10&4294967295|S>>>22),S=D+(I^(L|~T))+P[2]+718787259&4294967295,D=L+(S<<15&4294967295|S>>>17),S=T+(L^(D|~I))+P[9]+3951481745&4294967295,O.g[0]=O.g[0]+I&4294967295,O.g[1]=O.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,O.g[2]=O.g[2]+D&4294967295,O.g[3]=O.g[3]+L&4294967295}s.prototype.u=function(O,I){I===void 0&&(I=O.length);for(var T=I-this.blockSize,P=this.B,D=this.h,L=0;L<I;){if(D==0)for(;L<=T;)l(this,O,L),L+=this.blockSize;if(typeof O=="string"){for(;L<I;)if(P[D++]=O.charCodeAt(L++),D==this.blockSize){l(this,P),D=0;break}}else for(;L<I;)if(P[D++]=O[L++],D==this.blockSize){l(this,P),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var I=1;I<O.length-8;++I)O[I]=0;var T=8*this.o;for(I=O.length-8;I<O.length;++I)O[I]=T&255,T/=256;for(this.u(O),O=Array(16),I=T=0;4>I;++I)for(var P=0;32>P;P+=8)O[T++]=this.g[I]>>>P&255;return O};function c(O,I){var T=g;return Object.prototype.hasOwnProperty.call(T,O)?T[O]:T[O]=I(O)}function h(O,I){this.h=I;for(var T=[],P=!0,D=O.length-1;0<=D;D--){var L=O[D]|0;P&&L==I||(T[D]=L,P=!1)}this.g=T}var g={};function _(O){return-128<=O&&128>O?c(O,function(I){return new h([I|0],0>I?-1:0)}):new h([O|0],0>O?-1:0)}function v(O){if(isNaN(O)||!isFinite(O))return C;if(0>O)return H(v(-O));for(var I=[],T=1,P=0;O>=T;P++)I[P]=O/T|0,T*=4294967296;return new h(I,0)}function R(O,I){if(O.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(O.charAt(0)=="-")return H(R(O.substring(1),I));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=v(Math.pow(I,8)),P=C,D=0;D<O.length;D+=8){var L=Math.min(8,O.length-D),S=parseInt(O.substring(D,D+L),I);8>L?(L=v(Math.pow(I,L)),P=P.j(L).add(v(S))):(P=P.j(T),P=P.add(v(S)))}return P}var C=_(0),N=_(1),V=_(16777216);r=h.prototype,r.m=function(){if(Q(this))return-H(this).m();for(var O=0,I=1,T=0;T<this.g.length;T++){var P=this.i(T);O+=(0<=P?P:4294967296+P)*I,I*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(B(this))return"0";if(Q(this))return"-"+H(this).toString(O);for(var I=v(Math.pow(O,6)),T=this,P="";;){var D=fe(T,I).g;T=ce(T,D.j(I));var L=((0<T.g.length?T.g[0]:T.h)>>>0).toString(O);if(T=D,B(T))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function B(O){if(O.h!=0)return!1;for(var I=0;I<O.g.length;I++)if(O.g[I]!=0)return!1;return!0}function Q(O){return O.h==-1}r.l=function(O){return O=ce(this,O),Q(O)?-1:B(O)?0:1};function H(O){for(var I=O.g.length,T=[],P=0;P<I;P++)T[P]=~O.g[P];return new h(T,~O.h).add(N)}r.abs=function(){return Q(this)?H(this):this},r.add=function(O){for(var I=Math.max(this.g.length,O.g.length),T=[],P=0,D=0;D<=I;D++){var L=P+(this.i(D)&65535)+(O.i(D)&65535),S=(L>>>16)+(this.i(D)>>>16)+(O.i(D)>>>16);P=S>>>16,L&=65535,S&=65535,T[D]=S<<16|L}return new h(T,T[T.length-1]&-2147483648?-1:0)};function ce(O,I){return O.add(H(I))}r.j=function(O){if(B(this)||B(O))return C;if(Q(this))return Q(O)?H(this).j(H(O)):H(H(this).j(O));if(Q(O))return H(this.j(H(O)));if(0>this.l(V)&&0>O.l(V))return v(this.m()*O.m());for(var I=this.g.length+O.g.length,T=[],P=0;P<2*I;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<O.g.length;D++){var L=this.i(P)>>>16,S=this.i(P)&65535,Je=O.i(D)>>>16,Tt=O.i(D)&65535;T[2*P+2*D]+=S*Tt,pe(T,2*P+2*D),T[2*P+2*D+1]+=L*Tt,pe(T,2*P+2*D+1),T[2*P+2*D+1]+=S*Je,pe(T,2*P+2*D+1),T[2*P+2*D+2]+=L*Je,pe(T,2*P+2*D+2)}for(P=0;P<I;P++)T[P]=T[2*P+1]<<16|T[2*P];for(P=I;P<2*I;P++)T[P]=0;return new h(T,0)};function pe(O,I){for(;(O[I]&65535)!=O[I];)O[I+1]+=O[I]>>>16,O[I]&=65535,I++}function he(O,I){this.g=O,this.h=I}function fe(O,I){if(B(I))throw Error("division by zero");if(B(O))return new he(C,C);if(Q(O))return I=fe(H(O),I),new he(H(I.g),H(I.h));if(Q(I))return I=fe(O,H(I)),new he(H(I.g),I.h);if(30<O.g.length){if(Q(O)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var T=N,P=I;0>=P.l(O);)T=Fe(T),P=Fe(P);var D=Ie(T,1),L=Ie(P,1);for(P=Ie(P,2),T=Ie(T,2);!B(P);){var S=L.add(P);0>=S.l(O)&&(D=D.add(T),L=S),P=Ie(P,1),T=Ie(T,1)}return I=ce(O,D.j(I)),new he(D,I)}for(D=C;0<=O.l(I);){for(T=Math.max(1,Math.floor(O.m()/I.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=v(T),S=L.j(I);Q(S)||0<S.l(O);)T-=P,L=v(T),S=L.j(I);B(L)&&(L=N),D=D.add(L),O=ce(O,S)}return new he(D,O)}r.A=function(O){return fe(this,O).h},r.and=function(O){for(var I=Math.max(this.g.length,O.g.length),T=[],P=0;P<I;P++)T[P]=this.i(P)&O.i(P);return new h(T,this.h&O.h)},r.or=function(O){for(var I=Math.max(this.g.length,O.g.length),T=[],P=0;P<I;P++)T[P]=this.i(P)|O.i(P);return new h(T,this.h|O.h)},r.xor=function(O){for(var I=Math.max(this.g.length,O.g.length),T=[],P=0;P<I;P++)T[P]=this.i(P)^O.i(P);return new h(T,this.h^O.h)};function Fe(O){for(var I=O.g.length+1,T=[],P=0;P<I;P++)T[P]=O.i(P)<<1|O.i(P-1)>>>31;return new h(T,O.h)}function Ie(O,I){var T=I>>5;I%=32;for(var P=O.g.length-T,D=[],L=0;L<P;L++)D[L]=0<I?O.i(L+T)>>>I|O.i(L+T+1)<<32-I:O.i(L+T);return new h(D,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=R,dw=h}).apply(typeof C_<"u"?C_:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,m){return a==Array.prototype||a==Object.prototype||(a[f]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function l(a,f){if(f)e:{var m=s;a=a.split(".");for(var w=0;w<a.length-1;w++){var M=a[w];if(!(M in m))break e;m=m[M]}a=a[a.length-1],w=m[a],f=f(w),f!=w&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}function c(a,f){a instanceof String&&(a+="");var m=0,w=!1,M={next:function(){if(!w&&m<a.length){var j=m++;return{value:f(j,a[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}l("Array.prototype.values",function(a){return a||function(){return c(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},g=this||self;function _(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function v(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function R(a,f,m){return a.call.apply(a.bind,arguments)}function C(a,f,m){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),a.apply(f,M)}}return function(){return a.apply(f,arguments)}}function N(a,f,m){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?R:C,N.apply(null,arguments)}function V(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function B(a,f){function m(){}m.prototype=f.prototype,a.aa=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(w,M,j){for(var Y=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)Y[xe-2]=arguments[xe];return f.prototype[M].apply(w,Y)}}function Q(a){const f=a.length;if(0<f){const m=Array(f);for(let w=0;w<f;w++)m[w]=a[w];return m}return[]}function H(a,f){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(_(w)){const M=a.length||0,j=w.length||0;a.length=M+j;for(let Y=0;Y<j;Y++)a[M+Y]=w[Y]}else a.push(w)}}class ce{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function pe(a){return/^[\s\xa0]*$/.test(a)}function he(){var a=g.navigator;return a&&(a=a.userAgent)?a:""}function fe(a){return fe[" "](a),a}fe[" "]=function(){};var Fe=he().indexOf("Gecko")!=-1&&!(he().toLowerCase().indexOf("webkit")!=-1&&he().indexOf("Edge")==-1)&&!(he().indexOf("Trident")!=-1||he().indexOf("MSIE")!=-1)&&he().indexOf("Edge")==-1;function Ie(a,f,m){for(const w in a)f.call(m,a[w],w,a)}function O(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function I(a){const f={};for(const m in a)f[m]=a[m];return f}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,f){let m,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(m in w)a[m]=w[m];for(let j=0;j<T.length;j++)m=T[j],Object.prototype.hasOwnProperty.call(w,m)&&(a[m]=w[m])}}function D(a){var f=1;a=a.split(":");const m=[];for(;0<f&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function L(a){g.setTimeout(()=>{throw a},0)}function S(){var a=se;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Je{constructor(){this.h=this.g=null}add(f,m){const w=Tt.get();w.set(f,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Tt=new ce(()=>new Ct,a=>a.reset());class Ct{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,X=!1,se=new Je,Z=()=>{const a=g.Promise.resolve(void 0);Le=()=>{a.then(x)}};var x=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(m){L(m)}var f=Tt;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}X=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};g.addEventListener("test",m,f),g.removeEventListener("test",m,f)}catch{}return a}();function me(a,f){if(ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(Fe){e:{try{fe(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Se[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&me.aa.h.call(this)}}B(me,ie);var Se={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ae="closure_listenable_"+(1e6*Math.random()|0),Pe=0;function Ue(a,f,m,w,M){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!w,this.ha=M,this.key=++Pe,this.da=this.fa=!1}function lt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function rr(a){this.src=a,this.g={},this.h=0}rr.prototype.add=function(a,f,m,w,M){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var Y=Dr(a,f,w,M);return-1<Y?(f=a[Y],m||(f.fa=!1)):(f=new Ue(f,this.src,j,!!w,M),f.fa=m,a.push(f)),f};function ss(a,f){var m=f.type;if(m in a.g){var w=a.g[m],M=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=M)&&Array.prototype.splice.call(w,M,1),j&&(lt(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Dr(a,f,m,w){for(var M=0;M<a.length;++M){var j=a[M];if(!j.da&&j.listener==f&&j.capture==!!m&&j.ha==w)return M}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),os={};function vo(a,f,m,w,M){if(Array.isArray(f)){for(var j=0;j<f.length;j++)vo(a,f[j],m,w,M);return null}return m=Io(m),a&&a[Ae]?a.K(f,m,v(w)?!!w.capture:!1,M):wo(a,f,m,!1,w,M)}function wo(a,f,m,w,M,j){if(!f)throw Error("Invalid event type");var Y=v(M)?!!M.capture:!!M,xe=as(a);if(xe||(a[yi]=xe=new rr(a)),m=xe.add(f,m,w,Y,j),m.proxy)return m;if(w=Zl(),m.proxy=w,w.src=a,w.listener=m,a.addEventListener)ge||(M=Y),M===void 0&&(M=!1),a.addEventListener(f.toString(),w,M);else if(a.attachEvent)a.attachEvent(sr(f.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Zl(){function a(m){return f.call(a.src,a.listener,m)}const f=Eo;return a}function ls(a,f,m,w,M){if(Array.isArray(f))for(var j=0;j<f.length;j++)ls(a,f[j],m,w,M);else w=v(w)?!!w.capture:!!w,m=Io(m),a&&a[Ae]?(a=a.i,f=String(f).toString(),f in a.g&&(j=a.g[f],m=Dr(j,m,w,M),-1<m&&(lt(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete a.g[f],a.h--)))):a&&(a=as(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Dr(f,m,w,M)),(m=-1<a?f[a]:null)&&ir(m))}function ir(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Ae])ss(f.i,a);else{var m=a.type,w=a.proxy;f.removeEventListener?f.removeEventListener(m,w,a.capture):f.detachEvent?f.detachEvent(sr(m),w):f.addListener&&f.removeListener&&f.removeListener(w),(m=as(f))?(ss(m,a),m.h==0&&(m.src=null,f[yi]=null)):lt(a)}}}function sr(a){return a in os?os[a]:os[a]="on"+a}function Eo(a,f){if(a.da)a=!0;else{f=new me(f,this);var m=a.listener,w=a.ha||a.src;a.fa&&ir(a),a=m.call(w,f)}return a}function as(a){return a=a[yi],a instanceof rr?a:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Io(a){return typeof a=="function"?a:(a[us]||(a[us]=function(f){return a.handleEvent(f)}),a[us])}function nt(){z.call(this),this.i=new rr(this),this.M=this,this.F=null}B(nt,z),nt.prototype[Ae]=!0,nt.prototype.removeEventListener=function(a,f,m,w){ls(this,a,f,m,w)};function rt(a,f){var m,w=a.F;if(w)for(m=[];w;w=w.F)m.push(w);if(a=a.M,w=f.type||f,typeof f=="string")f=new ie(f,a);else if(f instanceof ie)f.target=f.target||a;else{var M=f;f=new ie(w,a),P(f,M)}if(M=!0,m)for(var j=m.length-1;0<=j;j--){var Y=f.g=m[j];M=or(Y,w,!0,f)&&M}if(Y=f.g=a,M=or(Y,w,!0,f)&&M,M=or(Y,w,!1,f)&&M,m)for(j=0;j<m.length;j++)Y=f.g=m[j],M=or(Y,w,!1,f)&&M}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var m=a.g[f],w=0;w<m.length;w++)lt(m[w]);delete a.g[f],a.h--}}this.F=null},nt.prototype.K=function(a,f,m,w){return this.i.add(String(a),f,!1,m,w)},nt.prototype.L=function(a,f,m,w){return this.i.add(String(a),f,!0,m,w)};function or(a,f,m,w){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,j=0;j<f.length;++j){var Y=f[j];if(Y&&!Y.da&&Y.capture==m){var xe=Y.listener,it=Y.ha||Y.src;Y.fa&&ss(a.i,Y),M=xe.call(it,w)!==!1&&M}}return M&&!w.defaultPrevented}function So(a,f,m){if(typeof a=="function")m&&(a=N(a,m));else if(a&&typeof a.handleEvent=="function")a=N(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:g.setTimeout(a,f||0)}function xr(a){a.g=So(()=>{a.g=null,a.i&&(a.i=!1,xr(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class vi extends z{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(a){z.call(this),this.h=a,this.g={}}B(wi,z);var To=[];function Co(a){Ie(a.g,function(f,m){this.g.hasOwnProperty(m)&&ir(f)},a),a.g={}}wi.prototype.N=function(){wi.aa.N.call(this),Co(this)},wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ko=g.JSON.stringify,Ro=g.JSON.parse,No=class{stringify(a){return g.JSON.stringify(a,void 0)}parse(a){return g.JSON.parse(a,void 0)}};function Ei(){}Ei.prototype.h=null;function cs(a){return a.h||(a.h=a.i())}function Ao(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vn(){ie.call(this,"d")}B(Vn,ie);function hs(){ie.call(this,"c")}B(hs,ie);var lr={},Po=null;function ds(){return Po=Po||new nt}lr.La="serverreachability";function Oo(a){ie.call(this,lr.La,a)}B(Oo,ie);function ar(a){const f=ds();rt(f,new Oo(f))}lr.STAT_EVENT="statevent";function Do(a,f){ie.call(this,lr.STAT_EVENT,a),this.stat=f}B(Do,ie);function Ze(a){const f=ds();rt(f,new Do(f,a))}lr.Ma="timingevent";function fs(a,f){ie.call(this,lr.Ma,a),this.size=f}B(fs,ie);function wn(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){a()},f)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function Si(a,f,m,w,M,j){a.info(function(){if(a.g)if(j)for(var Y="",xe=j.split("&"),it=0;it<xe.length;it++){var Te=xe[it].split("=");if(1<Te.length){var at=Te[0];Te=Te[1];var ut=at.split("_");Y=2<=ut.length&&ut[1]=="type"?Y+(at+"="+Te+"&"):Y+(at+"=redacted&")}}else Y=null;else Y=j;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+f+`
`+m+`
`+Y})}function ps(a,f,m,w,M,j,Y){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+f+`
`+m+`
`+j+" "+Y})}function En(a,f,m,w){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+mc(a,m)+(w?" "+w:"")})}function xo(a,f){a.info(function(){return"TIMEOUT: "+f})}Ii.prototype.info=function(){};function mc(a,f){if(!a.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var w=m[a];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var j=M[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Y=1;Y<M.length;Y++)M[Y]=""}}}}return ko(m)}catch{return f}}var Lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_c={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function Ti(){}B(Ti,Ei),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},In=new Ti;function Sn(a,f,m,w){this.j=a,this.i=f,this.l=m,this.R=w||1,this.U=new wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ea}function ea(){this.i=null,this.g="",this.h=!1}var Mo={},gs={};function ms(a,f,m){a.L=1,a.v=Ur(en(f)),a.m=m,a.P=!0,bo(a,null)}function bo(a,f){a.F=Date.now(),je(a),a.A=en(a.v);var m=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),zr(m.i,"t",w),a.C=0,m=a.j.J,a.h=new ea,a.g=ya(a.j,m?f:null,!a.m),0<a.O&&(a.M=new vi(N(a.Y,a,a.g),a.O)),f=a.U,m=a.g,w=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(To[0]=M.toString()),M=To);for(var j=0;j<M.length;j++){var Y=vo(m,M[j],w||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=a.H?I(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),ar(),Si(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const f=this.M;f&&jt(a)==3?f.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=jt(this.g);var f=this.g.Ba();const Gn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Bo(this.g)))){this.J||ut!=4||f==7||(f==8||0>=Gn?ar(3):ar(2)),Ci(this);var m=this.g.Z();this.X=m;t:if(ta(this)){var w=Bo(this.g);a="";var M=w.length,j=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Lr(this);var Y="";break t}this.h.i=new g.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,a+=this.h.i.decode(w[f],{stream:!(j&&f==M-1)});w.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,ps(this.i,this.u,this.A,this.l,this.R,ut,m),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,it=this.g;if((xe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe(xe)){var Te=xe;break t}}Te=null}if(m=Te)En(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,m);else{this.o=!1,this.s=3,Ze(12),un(this),Lr(this);break e}}if(this.P){m=!0;let vt;for(;!this.J&&this.C<Y.length;)if(vt=yc(this,Y),vt==gs){ut==4&&(this.s=4,Ze(14),m=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Mo){this.s=4,Ze(15),En(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else En(this.i,this.l,vt,null),Fo(this,vt);if(ta(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||Y.length!=0||this.h.h||(this.s=1,Ze(16),m=!1),this.o=this.o&&m,!m)En(this.i,this.l,Y,"[Invalid Chunked Response]"),un(this),Lr(this);else if(0<Y.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),$o(at),at.M=!0,Ze(11))}}else En(this.i,this.l,Y,null),Fo(this,Y);ut==4&&un(this),this.o&&!this.J&&(ut==4?Rs(this.j,this):(this.o=!1,je(this)))}else Is(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),un(this),Lr(this)}}}catch{}finally{}};function ta(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function yc(a,f){var m=a.C,w=f.indexOf(`
`,m);return w==-1?gs:(m=Number(f.substring(m,w)),isNaN(m)?Mo:(w+=1,w+m>f.length?gs:(f=f.slice(w,w+m),a.C=w+m,f)))}Sn.prototype.cancel=function(){this.J=!0,un(this)};function je(a){a.S=Date.now()+a.I,na(a,a.I)}function na(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wn(N(a.ba,a),f)}function Ci(a){a.B&&(g.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xo(this.i,this.A),this.L!=2&&(ar(),Ze(17)),un(this),this.s=2,Lr(this)):na(this,this.S-a)};function Lr(a){a.j.G==0||a.J||Rs(a.j,a)}function un(a){Ci(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Co(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Fo(a,f){try{var m=a.j;if(m.G!=0&&(m.g==a||Ot(m.h,a))){if(!a.K&&Ot(m.h,a)&&m.G==3){try{var w=m.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)ks(m),Nn(m);else break e;Cs(m),Ze(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=wn(N(m.Za,m),6e3));if(1>=ia(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else fr(m,11)}else if((a.K||m.g==a)&&ks(m),!pe(f))for(M=m.Da.g.parse(f),f=0;f<M.length;f++){let Te=M[f];if(m.T=Te[0],Te=Te[1],m.G==2)if(Te[0]=="c"){m.K=Te[1],m.ia=Te[2];const at=Te[3];at!=null&&(m.la=at,m.j.info("VER="+m.la));const ut=Te[4];ut!=null&&(m.Aa=ut,m.j.info("SVER="+m.Aa));const Gn=Te[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(w=1.5*Gn,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const vt=a.g;if(vt){const Ns=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var j=w.h;j.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Uo(j,j.h),j.h=null))}if(w.D){const As=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;As&&(w.ya=As,be(w.I,w.D,As))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var Y=a;if(w.qa=_a(w,w.J?w.ia:null,w.W),Y.K){sa(w.h,Y);var xe=Y,it=w.L;it&&(xe.I=it),xe.B&&(Ci(xe),je(xe)),w.g=Y}else Oi(w);0<m.i.length&&Wn(m)}else Te[0]!="stop"&&Te[0]!="close"||fr(m,7);else m.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?fr(m,7):yt(m):Te[0]!="noop"&&m.l&&m.l.ta(Te),m.v=0)}}ar(4)}catch{}}var ra=class{constructor(a,f){this.g=a,this.map=f}};function ki(a){this.l=a||10,g.PerformanceNavigationTiming?(a=g.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ia(a){return a.h?1:a.g?a.g.size:0}function Ot(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Uo(a,f){a.g?a.g.add(f):a.h=f}function sa(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}ki.prototype.cancel=function(){if(this.i=oa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function oa(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.D);return f}return Q(a.i)}function _s(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(_(a)){for(var f=[],m=a.length,w=0;w<m;w++)f.push(a[w]);return f}f=[],m=0;for(w in a)f[m++]=a[w];return f}function ys(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(_(a)||typeof a=="string"){var f=[];a=a.length;for(var m=0;m<a;m++)f.push(m);return f}f=[],m=0;for(const w in a)f[m++]=w;return f}}}function Mr(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(_(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var m=ys(a),w=_s(a),M=w.length,j=0;j<M;j++)f.call(void 0,w[j],m&&m[j],a)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vc(a,f){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var w=a[m].indexOf("="),M=null;if(0<=w){var j=a[m].substring(0,w);M=a[m].substring(w+1)}else j=a[m];f(j,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ur){this.h=a.h,Ni(this,a.j),this.o=a.o,this.g=a.g,br(this,a.s),this.l=a.l;var f=a.i,m=new Bn;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Fr(this,m),this.m=a.m}else a&&(f=String(a).match(Ri))?(this.h=!1,Ni(this,f[1]||"",!0),this.o=Ee(f[2]||""),this.g=Ee(f[3]||"",!0),br(this,f[4]),this.l=Ee(f[5]||"",!0),Fr(this,f[6]||"",!0),this.m=Ee(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}ur.prototype.toString=function(){var a=[],f=this.j;f&&a.push(jr(f,vs,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(jr(f,vs,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(jr(m,m.charAt(0)=="/"?ua:aa,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",jr(m,jo)),a.join("")};function en(a){return new ur(a)}function Ni(a,f,m){a.j=m?Ee(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function br(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Fr(a,f,m){f instanceof Bn?(a.i=f,Hn(a.i,a.h)):(m||(f=jr(f,ca)),a.i=new Bn(f,a.h))}function be(a,f,m){a.i.set(f,m)}function Ur(a){return be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ee(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function jr(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,la),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function la(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vs=/[#\/\?@]/g,aa=/[#\?:]/g,ua=/[#\?]/g,ca=/[#\?@]/g,jo=/#/g;function Bn(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function _t(a){a.g||(a.g=new Map,a.h=0,a.i&&vc(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}r=Bn.prototype,r.add=function(a,f){_t(this),this.i=null,a=cn(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function Tn(a,f){_t(a),f=cn(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Cn(a,f){return _t(a),f=cn(a,f),a.g.has(f)}r.forEach=function(a,f){_t(this),this.g.forEach(function(m,w){m.forEach(function(M){a.call(f,M,w,this)},this)},this)},r.na=function(){_t(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let w=0;w<f.length;w++){const M=a[w];for(let j=0;j<M.length;j++)m.push(f[w])}return m},r.V=function(a){_t(this);let f=[];if(typeof a=="string")Cn(this,a)&&(f=f.concat(this.g.get(cn(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)f=f.concat(a[m])}return f},r.set=function(a,f){return _t(this),this.i=null,a=cn(this,a),Cn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},r.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function zr(a,f,m){Tn(a,f),0<m.length&&(a.i=null,a.g.set(cn(a,f),Q(m)),a.h+=m.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var w=f[m];const j=encodeURIComponent(String(w)),Y=this.V(w);for(w=0;w<Y.length;w++){var M=j;Y[w]!==""&&(M+="="+encodeURIComponent(String(Y[w]))),a.push(M)}}return this.i=a.join("&")};function cn(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Hn(a,f){f&&!a.j&&(_t(a),a.i=null,a.g.forEach(function(m,w){var M=w.toLowerCase();w!=M&&(Tn(this,w),zr(this,M,m))},a)),a.j=f}function wc(a,f){const m=new Ii;if(g.Image){const w=new Image;w.onload=V(Ut,m,"TestLoadImage: loaded",!0,f,w),w.onerror=V(Ut,m,"TestLoadImage: error",!1,f,w),w.onabort=V(Ut,m,"TestLoadImage: abort",!1,f,w),w.ontimeout=V(Ut,m,"TestLoadImage: timeout",!1,f,w),g.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else f(!1)}function ha(a,f){const m=new Ii,w=new AbortController,M=setTimeout(()=>{w.abort(),Ut(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:w.signal}).then(j=>{clearTimeout(M),j.ok?Ut(m,"TestPingServer: ok",!0,f):Ut(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Ut(m,"TestPingServer: error",!1,f)})}function Ut(a,f,m,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(m)}catch{}}function Ec(){this.g=new No}function da(a,f,m){const w=m||"";try{Mr(a,function(M,j){let Y=M;v(M)&&(Y=ko(M)),f.push(w+j+"="+encodeURIComponent(Y))})}catch(M){throw f.push(w+"type="+encodeURIComponent("_badmap")),M}}function cr(a){this.l=a.Ub||null,this.j=a.eb||!1}B(cr,Ei),cr.prototype.g=function(){return new Ai(this.l,this.j)},cr.prototype.i=function(a){return function(){return a}}({});function Ai(a,f){nt.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Ai,nt),r=Ai.prototype,r.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Rn(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||g).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fa(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function fa(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?kn(this):Rn(this),this.readyState==3&&fa(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,kn(this))},r.Qa=function(a){this.g&&(this.response=a,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Rn(a)}r.setRequestHeader=function(a,f){this.u.append(a,f)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function Rn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hr(a){let f="";return Ie(a,function(m,w){f+=w,f+=":",f+=m,f+=`\r
`}),f}function Vr(a,f,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=hr(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):be(a,f,m))}function Ge(a){nt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ge,nt);var Ic=/^https?$/i,zo=["POST","PUT"];r=Ge.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,f,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?cs(this.o):cs(In),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(j){Pi(this,j);return}if(a=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)m.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())m.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),M=g.FormData&&a instanceof g.FormData,!(0<=Array.prototype.indexOf.call(zo,f,void 0))||w||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Y]of m)this.g.setRequestHeader(j,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Es(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){Pi(this,j)}};function Pi(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,ws(a),tn(a)}function ws(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Vo(this):this.bb())},r.bb=function(){Vo(this)};function Vo(a){if(a.h&&typeof h<"u"&&(!a.v[1]||jt(a)!=4||a.Z()!=2)){if(a.u&&jt(a)==4)So(a.Ea,0,a);else if(rt(a,"readystatechange"),jt(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var w;if(w=Y===0){var M=String(a.D).match(Ri)[1]||null;!M&&g.self&&g.self.location&&(M=g.self.location.protocol.slice(0,-1)),w=!Ic.test(M?M.toLowerCase():"")}m=w}if(m)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var j=2<jt(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",ws(a)}}finally{tn(a)}}}}function tn(a,f){if(a.g){Es(a);const m=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||rt(a,"ready");try{m.onreadystatechange=w}catch{}}}function Es(a){a.I&&(g.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function jt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Ro(f)}};function Bo(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Is(a){const f={};a=(a.g&&2<=jt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(pe(a[w]))continue;var m=D(a[w]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=f[M]||[];f[M]=j,j.push(m)}O(f,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function Ho(a){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,a),this.cb=$n("retryDelaySeedMs",1e4,a),this.Wa=$n("forwardChannelMaxRetries",2,a),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ki(a&&a.concurrentRequestLimit),this.Da=new Ec,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ho.prototype,r.la=8,r.G=1,r.connect=function(a,f,m,w){Ze(0),this.W=a,this.H=f||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=_a(this,null,this.W),Wn(this)};function yt(a){if(Ss(a),a.G==3){var f=a.U++,m=en(a.I);if(be(m,"SID",a.K),be(m,"RID",f),be(m,"TYPE","terminate"),dr(a,m),f=new Sn(a,a.j,f),f.L=2,f.v=Ur(en(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=f.v,m=!0),m||(f.g=ya(f.j,null),f.g.ea(f.v)),f.F=Date.now(),je(f)}ma(a)}function Nn(a){a.g&&($o(a),a.g.cancel(),a.g=null)}function Ss(a){Nn(a),a.u&&(g.clearTimeout(a.u),a.u=null),ks(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&g.clearTimeout(a.s),a.s=null)}function Wn(a){if(!Zt(a.h)&&!a.s){a.s=!0;var f=a.Ga;Le||Z(),X||(Le(),X=!0),se.add(f,a),a.B=0}}function Sc(a,f){return ia(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wn(N(a.Ga,a,f),ga(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new Sn(this,this.j,a);let j=this.o;if(this.S&&(j?(j=I(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(M.H=j,j=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Br(this,M,f),m=en(this.I),be(m,"RID",a),be(m,"CVER",22),this.D&&be(m,"X-HTTP-Session-Id",this.D),dr(this,m),j&&(this.O?f="headers="+encodeURIComponent(String(hr(j)))+"&"+f:this.m&&Vr(m,this.m,j)),Uo(this.h,M),this.Ua&&be(m,"TYPE","init"),this.P?(be(m,"$req",f),be(m,"SID","null"),M.T=!0,ms(M,m,null)):ms(M,m,f),this.G=2}}else this.G==3&&(a?Ts(this,a):this.i.length==0||Zt(this.h)||Ts(this))};function Ts(a,f){var m;f?m=f.l:m=a.U++;const w=en(a.I);be(w,"SID",a.K),be(w,"RID",m),be(w,"AID",a.T),dr(a,w),a.m&&a.o&&Vr(w,a.m,a.o),m=new Sn(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Br(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Uo(a.h,m),ms(m,w,f)}function dr(a,f){a.H&&Ie(a.H,function(m,w){be(f,w,m)}),a.l&&Mr({},function(m,w){be(f,w,m)})}function Br(a,f,m){m=Math.min(a.i.length,m);var w=a.l?N(a.l.Na,a.l,a):null;e:{var M=a.i;let j=-1;for(;;){const Y=["count="+m];j==-1?0<m?(j=M[0].g,Y.push("ofs="+j)):j=0:Y.push("ofs="+j);let xe=!0;for(let it=0;it<m;it++){let Te=M[it].g;const at=M[it].map;if(Te-=j,0>Te)j=Math.max(0,M[it].g-100),xe=!1;else try{da(at,Y,"req"+Te+"_")}catch{w&&w(at)}}if(xe){w=Y.join("&");break e}}}return a=a.i.splice(0,m),f.D=a,w}function Oi(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Le||Z(),X||(Le(),X=!0),se.add(f,a),a.v=0}}function Cs(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wn(N(a.Fa,a),ga(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,pa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wn(N(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),Nn(this),pa(this))};function $o(a){a.A!=null&&(g.clearTimeout(a.A),a.A=null)}function pa(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=en(a.qa);be(f,"RID","rpc"),be(f,"SID",a.K),be(f,"AID",a.T),be(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&be(f,"TO",a.ja),be(f,"TYPE","xmlhttp"),dr(a,f),a.m&&a.o&&Vr(f,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Ur(en(f)),m.m=null,m.P=!0,bo(m,a)}r.Za=function(){this.C!=null&&(this.C=null,Nn(this),Cs(this),Ze(19))};function ks(a){a.C!=null&&(g.clearTimeout(a.C),a.C=null)}function Rs(a,f){var m=null;if(a.g==f){ks(a),$o(a),a.g=null;var w=2}else if(Ot(a.h,f))m=f.D,sa(a.h,f),w=1;else return;if(a.G!=0){if(f.o)if(w==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var M=a.B;w=ds(),rt(w,new fs(w,m)),Wn(a)}else Oi(a);else if(M=f.s,M==3||M==0&&0<f.X||!(w==1&&Sc(a,f)||w==2&&Cs(a)))switch(m&&0<m.length&&(f=a.h,f.i=f.i.concat(m)),M){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function ga(a,f){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*f}function fr(a,f){if(a.j.info("Error code "+f),f==2){var m=N(a.fb,a),w=a.Xa;const M=!w;w=new ur(w||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||Ni(w,"https"),Ur(w),M?wc(w.toString(),m):ha(w.toString(),m)}else Ze(2);a.G=0,a.l&&a.l.sa(f),ma(a),Ss(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function ma(a){if(a.G=0,a.ka=[],a.l){const f=oa(a.h);(f.length!=0||a.i.length!=0)&&(H(a.ka,f),H(a.ka,a.i),a.h.i.length=0,Q(a.i),a.i.length=0),a.l.ra()}}function _a(a,f,m){var w=m instanceof ur?en(m):new ur(m);if(w.g!="")f&&(w.g=f+"."+w.g),br(w,w.s);else{var M=g.location;w=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var j=new ur(null);w&&Ni(j,w),f&&(j.g=f),M&&br(j,M),m&&(j.l=m),w=j}return m=a.D,f=a.ya,m&&f&&be(w,m,f),be(w,"VER",a.la),dr(a,w),w}function ya(a,f,m){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Ge(new cr({eb:m})):new Ge(a.pa),f.Ha(a.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wo(){}r=Wo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function zt(a,f){nt.call(this),this.g=new Ho(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!pe(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!pe(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Hr(this)}B(zt,nt),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){yt(this.g)},zt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=ko(a),a=m);f.i.push(new ra(f.Ya++,a)),f.G==3&&Wn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,yt(this.g),delete this.g,zt.aa.N.call(this)};function va(a){Vn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}B(va,Vn);function wa(){hs.call(this),this.status=1}B(wa,hs);function Hr(a){this.g=a}B(Hr,Wo),Hr.prototype.ua=function(){rt(this.g,"a")},Hr.prototype.ta=function(a){rt(this.g,new va(a))},Hr.prototype.sa=function(a){rt(this.g,new wa)},Hr.prototype.ra=function(){rt(this.g,"b")},zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Lo.NO_ERROR=0,Lo.TIMEOUT=8,Lo.HTTP_ERROR=6,_c.COMPLETE="complete",Ao.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",nt.prototype.listen=nt.prototype.K,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const k_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Bl("@firebase/firestore");function Fn(r,...e){if(ho.logLevel<=Oe.DEBUG){const n=e.map(Hf);ho.debug(`Firestore (${Xl}): ${r}`,...n)}}function fw(r,...e){if(ho.logLevel<=Oe.ERROR){const n=e.map(Hf);ho.error(`Firestore (${Xl}): ${r}`,...n)}}function KR(r,...e){if(ho.logLevel<=Oe.WARN){const n=e.map(Hf);ho.warn(`Firestore (${Xl}): ${r}`,...n)}}function Hf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(r="Unexpected state"){const e=`FIRESTORE (${Xl}) INTERNAL ASSERTION FAILED: `+r;throw fw(e),new Error(e)}function Nl(r,e){r||$f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Yt extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class QR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XR{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Nl(this.o===void 0);let s=this.i;const l=_=>this.i!==s?(s=this.i,n(_)):Promise.resolve();let c=new Al;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Al,e.enqueueRetryable(()=>l(this.currentUser))};const h=()=>{const _=c;e.enqueueRetryable(async()=>{await _.promise,await l(this.currentUser)})},g=_=>{Fn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(_=>g(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?g(_):(Fn("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Al)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Fn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Nl(typeof s.accessToken=="string"),new pw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Nl(e===null||typeof e=="string"),new Lt(e)}}class JR{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ZR{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new JR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Nl(this.o===void 0);const s=c=>{c.error!=null&&Fn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.R;return this.R=c.token,Fn("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const l=c=>{Fn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):Fn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Nl(typeof n.token=="string"),this.R=n.token,new eN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function nN(r){return r.name==="IndexedDbTransactionError"}class Qu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R_,Ce;(Ce=R_||(R_={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new dw([4294967295,4294967295],0);function dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,s=1e3,l=1.5,c=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=l,this.$o=c,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),l=Math.max(0,n-s);l>0&&Fn("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,l,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,s,l,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Al,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,l,c){const h=Date.now()+s,g=new Wf(e,n,h,l,c);return g.start(s),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Yt(Kt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var N_,A_;(A_=N_||(N_={})).na="default",A_.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Map;function sN(r,e,n,s){if(e===!0&&s===!0)throw new Yt(Kt.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function oN(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":$f()}function lN(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Yt(Kt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oN(r);throw new Yt(Kt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Yt(Kt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Yt(Kt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iN((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Yt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Yt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Yt(Kt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gw{constructor(e,n,s,l){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Yt(Kt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Yt(Kt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new YR;switch(s.type){case"firstParty":return new ZR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Yt(Kt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=P_.get(n);s&&(Fn("ComponentProvider","Removing Datastore"),P_.delete(n),s.terminate())}(this),Promise.resolve()}}function aN(r,e,n,s={}){var l;const c=(r=lN(r,gw))._getSettings(),h=`${e}:${n}`;if(c.host!=="firestore.googleapis.com"&&c.host!==h&&KR("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},c),{host:h,ssl:!1})),s.mockUserToken){let g,_;if(typeof s.mockUserToken=="string")g=s.mockUserToken,_=Lt.MOCK_USER;else{g=Bd(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new Yt(Kt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Lt(v)}r._authCredentials=new QR(new pw(g,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new rN(this,"async_queue_retry"),this.fu=()=>{const s=dd();s&&Fn("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=dd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=dd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Al;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!nN(e))throw e;Fn("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const l=function(h){let g=h.message||"";return h.stack&&(g=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),g}(s);throw fw("INTERNAL UNHANDLED ERROR: ",l),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const l=Wf.createAndSchedule(this,e,n,s,c=>this.Su(c));return this.Eu.push(l),l}pu(){this.Au&&$f()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class uN extends gw{constructor(e,n,s,l){super(e,n,s,l),this.type="firestore",this._queue=new D_,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new D_(e),this._firestoreClient=void 0,await e}}}function cN(r,e){const n=typeof r=="object"?r:Hl(),s=typeof r=="string"?r:"(default)",l=Or(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=Vd("firestore");c&&aN(l,...c)}return l}(function(e,n=!0){(function(l){Xl=l})(mi),yn(new ln("firestore",(s,{instanceIdentifier:l,options:c})=>{const h=s.getProvider("app").getImmediate(),g=new uN(new XR(s.getProvider("auth-internal")),new tN(s.getProvider("app-check-internal")),function(v,R){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new Yt(Kt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qu(v.options.projectId,R)}(h,l),h);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),Pt(k_,"4.7.6",e),Pt(k_,"4.7.6","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="firebasestorage.googleapis.com",hN="storageBucket",dN=2*60*1e3,fN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends vn{constructor(e,n,s=0){super(fd(e),`Firebase Storage: ${n} (${fd(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var er;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(er||(er={}));function fd(r){return"storage/"+r}function pN(){const r="An unknown error occurred, please check the error payload for server response.";return new nr(er.UNKNOWN,r)}function gN(){return new nr(er.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mN(){return new nr(er.CANCELED,"User canceled the upload/download.")}function _N(r){return new nr(er.INVALID_URL,"Invalid URL '"+r+"'.")}function yN(r){return new nr(er.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function x_(r){return new nr(er.INVALID_ARGUMENT,r)}function _w(){return new nr(er.APP_DELETED,"The Firebase app was deleted.")}function vN(r){return new nr(er.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Un.makeFromUrl(e,n)}catch{return new Un(e,"")}if(s.path==="")return s;throw yN(e)}static makeFromUrl(e,n){let s=null;const l="([A-Za-z0-9.\\-_]+)";function c(fe){fe.path.charAt(fe.path.length-1)==="/"&&(fe.path_=fe.path_.slice(0,-1))}const h="(/(.*))?$",g=new RegExp("^gs://"+l+h,"i"),_={bucket:1,path:3};function v(fe){fe.path_=decodeURIComponent(fe.path)}const R="v[A-Za-z0-9_]+",C=n.replace(/[.]/g,"\\."),N="(/([^?#]*).*)?$",V=new RegExp(`^https?://${C}/${R}/b/${l}/o${N}`,"i"),B={bucket:1,path:3},Q=n===mw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,H="([^?#]*)",ce=new RegExp(`^https?://${Q}/${l}/${H}`,"i"),he=[{regex:g,indices:_,postModify:c},{regex:V,indices:B,postModify:v},{regex:ce,indices:{bucket:1,path:2},postModify:v}];for(let fe=0;fe<he.length;fe++){const Fe=he[fe],Ie=Fe.regex.exec(e);if(Ie){const O=Ie[Fe.indices.bucket];let I=Ie[Fe.indices.path];I||(I=""),s=new Un(O,I),Fe.postModify(s);break}}if(s==null)throw _N(e);return s}}class wN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(r,e,n){let s=1,l=null,c=null,h=!1,g=0;function _(){return g===2}let v=!1;function R(...H){v||(v=!0,e.apply(null,H))}function C(H){l=setTimeout(()=>{l=null,r(V,_())},H)}function N(){c&&clearTimeout(c)}function V(H,...ce){if(v){N();return}if(H){N(),R.call(null,H,...ce);return}if(_()||h){N(),R.call(null,H,...ce);return}s<64&&(s*=2);let he;g===1?(g=2,he=0):he=(s+Math.random())*1e3,C(he)}let B=!1;function Q(H){B||(B=!0,N(),!v&&(l!==null?(H||(g=2),clearTimeout(l),C(0)):H||(g=1)))}return C(0),c=setTimeout(()=>{h=!0,Q(!0)},n),Q}function IN(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(r){return r!==void 0}function L_(r,e,n,s){if(s<e)throw x_(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw x_(`Invalid value for '${r}'. Expected ${n} or less.`)}function TN(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const l=e(s)+"="+e(r[s]);n=n+l+"&"}return n=n.slice(0,-1),n}var Xu;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Xu||(Xu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(r,e){const n=r>=500&&r<600,l=[408,429].indexOf(r)!==-1,c=e.indexOf(r)!==-1;return n||l||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,s,l,c,h,g,_,v,R,C,N=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=g,this.errorCallback_=_,this.timeout_=v,this.progressCallback_=R,this.connectionFactory_=C,this.retry=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((V,B)=>{this.resolve_=V,this.reject_=B,this.start_()})}start_(){const e=(s,l)=>{if(l){s(!1,new vu(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=g=>{const _=g.loaded,v=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(_,v)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const g=c.getErrorCode()===Xu.NO_ERROR,_=c.getStatus();if(!g||CN(_,this.additionalRetryCodes_)&&this.retry){const R=c.getErrorCode()===Xu.ABORT;s(!1,new vu(!1,null,R));return}const v=this.successCodes_.indexOf(_)!==-1;s(!0,new vu(v,c))})},n=(s,l)=>{const c=this.resolve_,h=this.reject_,g=l.connection;if(l.wasSuccessCode)try{const _=this.callback_(g,g.getResponse());SN(_)?c(_):c()}catch(_){h(_)}else if(g!==null){const _=pN();_.serverResponse=g.getErrorText(),this.errorCallback_?h(this.errorCallback_(g,_)):h(_)}else if(l.canceled){const _=this.appDelete_?_w():mN();h(_)}else{const _=gN();h(_)}};this.canceled_?n(!1,new vu(!1,null,!0)):this.backoffId_=EN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vu{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function RN(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function NN(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AN(r,e){e&&(r["X-Firebase-GMPID"]=e)}function PN(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function ON(r,e,n,s,l,c,h=!0){const g=TN(r.urlParams),_=r.url+g,v=Object.assign({},r.headers);return AN(v,e),RN(v,n),NN(v,c),PN(v,s),new kN(_,r.method,v,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,l,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function xN(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this._service=e,n instanceof Un?this._location=n:this._location=Un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ju(e,n)}get root(){const e=new Un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xN(this._location.path)}get storage(){return this._service}get parent(){const e=DN(this._location.path);if(e===null)return null;const n=new Un(this._location.bucket,e);return new Ju(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vN(e)}}function M_(r,e){const n=e==null?void 0:e[hN];return n==null?null:Un.makeFromBucketSpec(n,r)}function LN(r,e,n,s={}){r.host=`${e}:${n}`,r._protocol="http";const{mockUserToken:l}=s;l&&(r._overrideAuthToken=typeof l=="string"?l:Bd(l,r.app.options.projectId))}class MN{constructor(e,n,s,l,c){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=l,this._firebaseVersion=c,this._bucket=null,this._host=mw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dN,this._maxUploadRetryTime=fN,this._requests=new Set,l!=null?this._bucket=Un.makeFromBucketSpec(l,this._host):this._bucket=M_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Un.makeFromBucketSpec(this._url,e):this._bucket=M_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){L_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ju(this,e)}_makeRequest(e,n,s,l,c=!0){if(this._deleted)return new wN(_w());{const h=ON(e,this._appId,s,l,n,this._firebaseVersion,c);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,n){const[s,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,l).getPromise()}}const b_="@firebase/storage",F_="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="storage";function bN(r=Hl(),e){r=Ft(r);const s=Or(r,yw).getImmediate({identifier:e}),l=Vd("storage");return l&&FN(s,...l),s}function FN(r,e,n,s={}){LN(r,e,n,s)}function UN(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),l=r.getProvider("app-check-internal");return new MN(n,s,l,e,mi)}function jN(){yn(new ln(yw,UN,"PUBLIC").setMultipleInstances(!0)),Pt(b_,F_,""),Pt(b_,F_,"esm2017")}jN();const zN={apiKey:"AIzaSyB53pxu9jG1jaxw3ML-ukF_FjSvObBoRgI",authDomain:"diri-267ab.firebaseapp.com",databaseURL:"https://diri-267ab-default-rtdb.europe-west1.firebasedatabase.app",projectId:"diri-267ab",storageBucket:"diri-267ab.appspot.com",messagingSenderId:"158202519628",appId:"1:158202519628:web:57522339c4a424821a94e9",measurementId:"G-5ZJ1ZH7WFH"},Jl=Z_(zN);PT(Jl);const wu=Kk(Jl);GR(Jl);cN(Jl);bN(Jl);class VN{constructor(){Hh(this,"levels");Hh(this,"currentLevel");this.levels=["debug","info","warn","error"],this.currentLevel="debug"}setLevel(e){this.levels.includes(e)?this.currentLevel=e:console.error(`Nivel de log no válido: ${e}`)}log(e,n){const s=this.levels.indexOf(e),l=this.levels.indexOf(this.currentLevel);if(s>=l){const c=new Date().toISOString();console[e](`[${e.toUpperCase()}] ${c}: ${n}`)}}debug(e){this.log("debug",e)}info(e){this.log("info",e)}warn(e){this.log("warn",e)}error(e){this.log("error",e)}}const qt=new VN;function BN({food:r,onReturnToMenu:e}){const[n,s]=Mn.useState(1),[l,c]=Mn.useState(!1),[h,g]=Mn.useState([]),_=r.price*n,v=Mn.useContext(vw)||[];Mn.useEffect(()=>{const H=mu(wu,"items");return zk(H,ce=>{const pe=ce.val(),he=pe?Object.entries(pe).map(([fe,Fe])=>({id:fe,...Fe})):[];g(he),qt.info("Datos obtenidos de Firebase")}),()=>{qt.info("Listener limpiado cuando el componente se desmontó")}},[]);const R=async(H,ce)=>{qt.info(`Intentando actualizar el ítem ${H} con nuevo nombre: ${ce} y nueva cantidad: ${r.quantity}`);try{const pe=mu(wu,`items/${H}`);await Uk(pe,{name:ce,quantity:r.quantity}),qt.info(`Ítem ${H} actualizado con éxito`)}catch{qt.error(`Error al actualizar el ítem ${H}:`)}},C=async H=>{qt.info(`Intentando eliminar el ítem ${H}`);try{const ce=mu(wu,`items/${H}`);await Fk(ce),qt.info("Ítem eliminado con éxito")}catch{qt.error(`Error al eliminar el ítem ${H}:`)}},N=H=>{const ce=Number(H.target.value);qt.info(`Cantidad cambiada a: ${ce}`),s(ce)},V=()=>{qt.info(`Realizando pedido por ${n} de ${r.name}`),c(!0);const H=v.map(he=>(he.id===r.id&&(he.quantity=he.quantity-n),he));g(H);const ce={foodName:r.name,price:r.price,quantity:n,totalPrice:_,timestamp:Date.now()},pe=mu(wu,"orders");bk(pe,ce),qt.info("Nuevo pedido enviado a Firebase"),R(r.id,r.name)},B=H=>{qt.info("Volviendo al menú"),c(!1),e&&e(H)},Q=H=>{qt.warn(`Eliminando el ítem ${H} del menú`),C(H),g(h.filter(ce=>ce.id!==H))};return Re.jsxs("div",{className:"foodOrder",children:[Re.jsx("h4",{className:"foodOrderTitle",children:r.name}),Re.jsx("img",{className:"foodImg",src:`/img/${r.image}`,alt:r.name}),l?Re.jsxs("div",{className:"confirmationMessage",children:[Re.jsx("p",{children:"¡Pedido enviado con éxito!"}),Re.jsxs("p",{children:["Stock actualizado: ",r.quantity," disponibles"]}),Re.jsx("button",{onClick:B,children:"Volver al Menú"})]}):Re.jsxs(Re.Fragment,{children:[Re.jsx("p",{className:"foodDesc",children:r.desc}),Re.jsxs("p",{className:"foodPrice",children:["Precio: ",r.price,"$ / unidad"]}),Re.jsx("label",{htmlFor:"quantity",children:"Cantidad: "}),Re.jsx("input",{id:"quantity",type:"number",value:n,onChange:N,min:"1",max:r.quantity}),Re.jsxs("p",{children:["Total: ",_,"$"]}),Re.jsx("button",{onClick:V,children:"Enviar Pedido"}),Re.jsx("button",{onClick:()=>Q(r.id),children:"Eliminar Ítem"})," "]})]})}class HN extends Mn.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){qt.error("Error capturado:"+n)}render(){return this.state.hasError?Re.jsx("h1",{children:"¡Algo salió mal! Estamos trabajando para solucionarlo."}):this.props.children}}const vw=NE.createContext([]);function $N(){const[r,e]=Mn.useState(!1),[n,s]=Mn.useState(null),[l]=Mn.useState([{id:1,name:"Hamburguesa de Pollo",quantity:40,desc:"Hamburguesa de pollo frito - … y mayonesa",price:24,image:"cb.jpg"},{id:2,name:"Hamburguesa Vegetariana",quantity:30,desc:"Hamburguesa vegetariana - … y mayonesa",price:28,image:"cbvegan.jpg"},{id:3,name:"Patatas fritas",quantity:33,desc:"Patatas fritas - … y mayonesa",price:2,image:"papas.jpg"},{id:4,name:"Helado",quantity:22,desc:"heladito",price:5,image:"helado.jpg"}]),c=g=>{s(g),e(!0)},h=()=>{e(!1),s(null)};return Re.jsx(vw.Provider,{value:l,children:Re.jsxs(HN,{children:[" ",Re.jsxs("div",{className:"App",children:[Re.jsx("button",{className:"toggleButton",onClick:()=>e(!r),children:r?"Disponibilidad":"Pedir Comida"}),Re.jsx("h3",{className:"title",children:"Comida Rápida Online"}),!r&&Re.jsxs(Re.Fragment,{children:[Re.jsx("h4",{className:"subTitle",children:"Menús"}),Re.jsx("ul",{className:"ulApp",children:l.map(g=>Re.jsxs("li",{className:"liApp",children:[Re.jsx("p",{children:g.name}),Re.jsxs("p",{children:["#",g.quantity," disponibles"]}),Re.jsx("button",{onClick:()=>c(g),children:"Pedir"})]},g.id))})]}),r&&n&&Re.jsx(BN,{food:n,onReturnToMenu:h})]})]})})}LE.createRoot(document.getElementById("root")).render(Re.jsx(Mn.StrictMode,{children:Re.jsx($N,{})}));
